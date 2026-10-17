import os
import re
import json

discontinued_patterns = [
    r'sugarcrm', r'alineasol', r'centiro', r'php5', r'php 5',
    r'oro crm', r'xampp 1\.8', r'xajax', r'bwc', r'silverlight'
]

def is_discontinued(text):
    t_lower = text.lower()
    return any(re.search(pat, t_lower) for pat in discontinued_patterns)

categories_def = {
    'linux': {'id': 'linux', 'name': 'Terminal & Linux Sysadmin', 'icon': 'terminal', 'color': '#00d9ff'},
    'ai': {'id': 'ai', 'name': 'AI Agents, RAG & ML', 'icon': 'brain', 'color': '#ff6b35'},
    'devops': {'id': 'devops', 'name': 'Cloud, Docker & Infra', 'icon': 'server', 'color': '#10b981'},
    'fullstack': {'id': 'fullstack', 'name': 'Backend & Bancos de Dados', 'icon': 'database', 'color': '#a855f7'},
    'frontend': {'id': 'frontend', 'name': 'Frontend & Data Viz (D3)', 'icon': 'layout', 'color': '#ec4899'},
    'tools': {'id': 'tools', 'name': 'Ferramentas Web Live', 'icon': 'wrench', 'color': '#f59e0b'},
    'media': {'id': 'media', 'name': 'FFmpeg, Áudio & Vídeo', 'icon': 'video', 'color': '#3b82f6'},
    'git': {'id': 'git', 'name': 'Git, GitHub & Workflow', 'icon': 'git-branch', 'color': '#ef4444'},
    'learning': {'id': 'learning', 'name': 'Cursos, Roadmaps & Livros', 'icon': 'book-open', 'color': '#14b8a6'}
}

items = []
seen_ids = set()

def add_item(item):
    if is_discontinued(item['title']) or is_discontinued(item.get('description', '')) or is_discontinued(item.get('fullContent', '')):
        return
    # Ensure unique id
    base_id = item['id']
    unique_id = base_id
    idx = 1
    while unique_id in seen_ids:
        unique_id = f"{base_id}-{idx}"
        idx += 1
    item['id'] = unique_id
    seen_ids.add(unique_id)
    items.append(item)

def parse_txt_file(filepath):
    if not os.path.exists(filepath):
        return None
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        text = f.read()
    
    blocks = re.split(r'\n#{5,}\s*\n([^\n#]+)\n\s*#{5,}\s*\n', text)
    sections = []
    
    if len(blocks) > 1:
        intro = blocks[0].strip()
        if intro:
            sections.append({'title': 'Introdução & Links Iniciais', 'raw': intro})
        for i in range(1, len(blocks), 2):
            sec_title = blocks[i].strip()
            sec_body = blocks[i+1].strip() if i+1 < len(blocks) else ''
            sections.append({'title': sec_title, 'raw': sec_body})
    else:
        sections.append({'title': 'Conteúdo Principal', 'raw': text.strip()})
        
    all_cmds = []
    all_links = []
    all_models = []
    
    for sec in sections:
        raw_lines = sec['raw'].split('\n')
        cmds = []
        links = []
        models = []
        notes = []
        
        for line in raw_lines:
            l = line.strip()
            if not l or l == '*':
                continue
            if l.startswith('http://') or l.startswith('https://'):
                m_match = re.match(r'https?://ollama\.com/library/([a-zA-Z0-9._-]+)\s+([0-9.]+\s*[mgkMGK][bB]?)', l)
                if m_match:
                    model_obj = {'name': m_match.group(1), 'size': m_match.group(2).upper(), 'url': l.split()[0]}
                    models.append(model_obj)
                    all_models.append(model_obj)
                else:
                    links.append(l)
                    all_links.append(l)
            elif l.startswith(('curl ', 'ollama ', 'docker ', 'sudo ', 'apt ', 'pip ', 'python ', 'git ', 'valgrind ', 'glxinfo ', 'inxi ', 'lspci ', 'wget ', 'systemctl ', 'solve ')):
                cmds.append(l)
                all_cmds.append(l)
            elif l.startswith('#'):
                notes.append(l.lstrip('#').strip())
                
        sec['commands'] = cmds
        sec['links'] = links
        sec['models'] = models
        sec['notes'] = notes
        
    return {
        'sections': sections,
        'commandsCount': len(all_cmds),
        'linksCount': len(all_links),
        'modelsCount': len(all_models),
        'fullText': text
    }

# 1. Parse Daily_terminal.md
if os.path.exists('Daily_terminal.md'):
    with open('Daily_terminal.md', 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    sections = re.split(r'\n###\s+', content)
    for sec in sections[1:]:
        lines = sec.strip().split('\n')
        title = lines[0].strip()
        body = '\n'.join(lines[1:]).strip()
        if not title or len(title) < 2 or title.startswith('http'):
            continue
        
        # Determine importance
        importance = 'medium'
        t_low = title.lower()
        if any(k in t_low for k in ['repo file sizes', 'find files', 'rename', 'zipping', 'tar untar', 'random pass', 'free up space', 'disk quota', 'umount force']):
            importance = 'critical'
        elif any(k in t_low for k in ['cpu', 'memory', 'network', 'chown', 'chmod', 'symlink', 'rsync', 'process', 'kill', 'systemctl', 'service', 'crontab']):
            importance = 'high'
        elif any(k in t_low for k in ['wallpaper', 'font', 'indicator', 'color', 'theme', 'gimp']):
            importance = 'specialized'
        
        # Clean snippet
        code_blocks = re.findall(r'```(?:[a-zA-Z0-9_-]*\n)?(.*?)```', body, re.DOTALL)
        if not code_blocks:
            code_blocks = re.findall(r'~~~~\n?(.*?)~~~~', body, re.DOTALL)
        snippet = code_blocks[0].strip() if code_blocks else (body[:160] + '...')

        slug = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')[:40]
        add_item({
            'id': f"linux-{slug}",
            'title': title,
            'category': 'linux',
            'importance': importance,
            'type': 'cli',
            'icon': 'terminal',
            'description': f"Instruções e comandos essenciais de terminal para {title.lower()} em sistemas Linux e Ubuntu.",
            'tags': ['linux', 'terminal', 'bash', 'ubuntu', slug.replace('-', ' ')],
            'command': snippet if len(snippet) < 300 else snippet[:300] + '...',
            'fullContent': body,
            'filePath': 'Daily_terminal.md'
        })

# 2. Parse Daily_terminal_Git.md
if os.path.exists('Daily_terminal_Git.md'):
    with open('Daily_terminal_Git.md', 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    sections = re.split(r'\n###\s+', content)
    for sec in sections[1:]:
        lines = sec.strip().split('\n')
        title = lines[0].strip()
        body = '\n'.join(lines[1:]).strip()
        if not title:
            continue
        importance = 'high'
        if any(k in title.lower() for k in ['config', 'remote', 'reset', 'revert', 'worktree', 'branch']):
            importance = 'critical'
        code_blocks = re.findall(r'```(?:[a-zA-Z0-9_-]*\n)?(.*?)```', body, re.DOTALL)
        snippet = code_blocks[0].strip() if code_blocks else body[:160]
        slug = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')[:40]
        add_item({
            'id': f"git-{slug}",
            'title': title,
            'category': 'git',
            'importance': importance,
            'type': 'cli',
            'icon': 'git-branch',
            'description': f"Fluxos avançados e comandos de precisão Git para {title.lower()}.",
            'tags': ['git', 'version-control', 'github', 'devops', slug.replace('-', ' ')],
            'command': snippet if len(snippet) < 300 else snippet[:300] + '...',
            'fullContent': body,
            'filePath': 'Daily_terminal_Git.md'
        })

# 3. Parse Daily_terminal_Video.md
if os.path.exists('Daily_terminal_Video.md'):
    with open('Daily_terminal_Video.md', 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    sections = re.split(r'\n###\s+', content)
    for sec in sections[1:]:
        lines = sec.strip().split('\n')
        title = lines[0].strip()
        body = '\n'.join(lines[1:]).strip()
        if not title or title.startswith('http'):
            continue
        importance = 'high'
        if any(k in title.lower() for k in ['cut video', 'compress', 'replace audio', 'record screen', 'concat merge', 'loop repeat']):
            importance = 'critical'
        elif any(k in title.lower() for k in ['effects', 'preset', 'glitch', 'spectrum']):
            importance = 'specialized'
        code_blocks = re.findall(r'```(?:[a-zA-Z0-9_-]*\n)?(.*?)```', body, re.DOTALL)
        snippet = code_blocks[0].strip() if code_blocks else body[:160]
        slug = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')[:40]
        add_item({
            'id': f"media-{slug}",
            'title': title,
            'category': 'media',
            'importance': importance,
            'type': 'cli',
            'icon': 'video',
            'description': f"Automação e pipeline de processamento multimídia com FFmpeg e ALSA para {title.lower()}.",
            'tags': ['ffmpeg', 'video', 'audio', 'multimedia', 'encoding'],
            'command': snippet if len(snippet) < 300 else snippet[:300] + '...',
            'fullContent': body,
            'filePath': 'Daily_terminal_Video.md'
        })

# 4. Interactive Web Tools in fullstack/a_online_tools/
tools_meta = [
    {
        'id': 'tool-icon-remover',
        'title': 'Icon & Emoji Remover',
        'description': 'Ferramenta web rápida para higienização e remoção instantânea de emojis, símbolos gráficos e ícones de strings e documentações.',
        'path': 'fullstack/a_online_tools/converter_remove_icons.html',
        'importance': 'high',
        'tags': ['ferramenta-web', 'regex', 'limpeza-texto', 'sanitization', 'emojis']
    },
    {
        'id': 'tool-newline-remover',
        'title': 'Newline & Break Stripper',
        'description': 'Utilitário interativo para unificar quebras de linha excessivas, normalizar parágrafos e preparar payloads de texto contínuos.',
        'path': 'fullstack/a_online_tools/converter_remove_newlines.html',
        'importance': 'high',
        'tags': ['ferramenta-web', 'formatação', 'limpeza', 'strings', 'payloads']
    },
    {
        'id': 'tool-text-style-remover',
        'title': 'Text Style & Unicode Stripper',
        'description': 'Removedor universal de formatações complexas, caracteres estilizados do Twitter/Unicode matemático e fontes de terceiros.',
        'path': 'fullstack/a_online_tools/converter_text_style_remover.html',
        'importance': 'critical',
        'tags': ['ferramenta-web', 'unicode', 'plain-text', 'sanitization', 'markdown']
    },
    {
        'id': 'tool-lowercase-converter',
        'title': 'Case Normalizer & Lowercase',
        'description': 'Conversor rápido de caixas para slugs, snake_case, camelCase, kebab-case e lowercase para padronização de arquivos e código.',
        'path': 'fullstack/a_online_tools/converter_to_lowercase.html',
        'importance': 'high',
        'tags': ['ferramenta-web', 'case-converter', 'slugs', 'padronização', 'dev-utils']
    },
    {
        'id': 'tool-jbs-inspector',
        'title': 'JBS (JSON, Base64 & String Inspector)',
        'description': 'Canivete suíço para decodificar, validar, codificar Base64, formatar payloads JSON e inspecionar strings de rede em tempo real.',
        'path': 'fullstack/a_online_tools/jbs.html',
        'importance': 'critical',
        'tags': ['ferramenta-web', 'json', 'base64', 'inspector', 'debugging', 'jwt']
    },
    {
        'id': 'tool-typeahead-autocomplete',
        'title': 'Typeahead Search & Autocomplete Engine',
        'description': 'Engine interativa de busca preditiva e autocomplete client-side com Typeahead.js para interfaces ultra-rápidas.',
        'path': 'utiles/autocomplete_typeahead_js.html',
        'importance': 'medium',
        'tags': ['ferramenta-web', 'autocomplete', 'typeahead', 'search', 'ui']
    }
]

for tm in tools_meta:
    add_item({
        'id': tm['id'],
        'title': tm['title'],
        'category': 'tools',
        'importance': tm['importance'],
        'type': 'tool',
        'icon': 'wrench',
        'description': tm['description'],
        'tags': tm['tags'] + ['live-tool', 'produtividade'],
        'command': f"Abrir ferramenta: {tm['path']}",
        'fullContent': f"Ferramenta Web interativa disponível localmente em {tm['path']}. Pode ser executada diretamente no navegador sem dependências externas.",
        'filePath': tm['path'],
        'toolUrl': tm['path']
    })

# 5. Modern AI, RAG & Data Science
ai_entries = [
    {
        'id': 'ai-rag-paper-assistant',
        'title': 'RAG-Powered Research Paper Assistant (LangChain + ChromaDB)',
        'category': 'ai',
        'importance': 'critical',
        'type': 'script',
        'icon': 'brain',
        'description': 'Arquitetura RAG completa usando SentenceTransformers, ChromaDB vetorial persistente, Arxiv tool e LiteLLM para ingestão e consulta de artigos científicos.',
        'tags': ['rag', 'chromadb', 'langchain', 'litellm', 'sentence-transformers', 'arxiv', 'python'],
        'command': 'pip install streamlit PyPDF2 sentence-transformers chromadb litellm langchain langchain-community',
        'fullContent': '''# RAG-Powered Research Paper Assistant
Arquitetura completa de Retrieval-Augmented Generation (RAG):
- Ingestão de PDFs com PyPDF2
- Chunking semântico com RecursiveCharacterTextSplitter (chunk_size=500, overlap=50)
- Vetorização com modelo all-MiniLM-L6-v2 via SentenceTransformer
- Persistência vetorial em ChromaDB local (PersistentClient)
- Conexão com ArxivQueryRun para busca acadêmica em tempo real
- Integração LLM agnóstica via LiteLLM''',
        'filePath': 'fullstack/python/ai_rag_agent/paper_assistant.txt'
    },
    {
        'id': 'ai-local-llm-setup',
        'title': 'Execução de Modelos e Agentes LLM Locais em CPU/GPU',
        'category': 'ai',
        'importance': 'critical',
        'type': 'guide',
        'icon': 'cpu',
        'description': 'Pipeline de execução de modelos abertos e LLMs locais com quantização, Llama.cpp, Ollama e agentes de raciocínio autônomo sem envio de dados externos.',
        'tags': ['llm-local', 'ollama', 'quantization', 'llama-cpp', 'agentes', 'privacy'],
        'command': 'curl -fsSL https://ollama.com/install.sh | sh && ollama run llama3',
        'fullContent': 'Configuração para execução local de modelos de linguagem de ponta em hardware acessível (CPU e GPU moderada). Modelos GGUF quantizados (q4_k_m, q8_0) para máxima velocidade e inferência offline.',
        'filePath': 'ai_tools_cpu/ai_local/local_agent.txt'
    },
    {
        'id': 'ai-prompt-engineering-vault',
        'title': 'Repositório de Prompts Estratégicos & Few-Shot Templates',
        'category': 'ai',
        'importance': 'high',
        'type': 'cheatsheet',
        'icon': 'sparkles',
        'description': 'Templates de engenharia de prompt para raciocínio em cadeia (CoT), geração de testes unitários, análise forense de código e sumarização densa.',
        'tags': ['prompt-engineering', 'few-shot', 'chain-of-thought', 'chatgpt', 'system-prompts'],
        'command': '[Role: Senior Systems Architect] [Context: Mission-Critical Production] [Task: Structured Audit with Threat Modeling]',
        'fullContent': 'Compilação de estruturas de prompt comprovadas para elicitar raciocínio de alta precisão em modelos Claude, GPT e Llama, reduzindo alucinações a zero.',
        'filePath': 'ai_tools_cpu/ai_prompts.txt'
    },
    {
        'id': 'ai-scikit-learn-pipelines',
        'title': 'Machine Learning Pipelines & Classificadores em Python',
        'category': 'ai',
        'importance': 'high',
        'type': 'guide',
        'icon': 'activity',
        'description': 'Pipelines de pré-processamento, imputação, StandardScaler e grid search com Random Forest, Gradient Boosting e SVM em Scikit-Learn.',
        'tags': ['machine-learning', 'scikit-learn', 'data-science', 'python', 'pipelines'],
        'command': 'from sklearn.pipeline import Pipeline; from sklearn.preprocessing import StandardScaler; from sklearn.ensemble import RandomForestClassifier',
        'fullContent': 'Guia de construção de pipelines modulares em Scikit-Learn evitando data leakage entre folds de validação cruzada.',
        'filePath': 'fullstack/python/scikit_learn/'
    },
    {
        'id': 'ai-opencv-computer-vision',
        'title': 'Visão Computacional: Detecção de Objetos & Barcode com OpenCV',
        'category': 'ai',
        'importance': 'medium',
        'type': 'script',
        'icon': 'eye',
        'description': 'Scripts em Python para processamento digital de imagem, filtragem gaussiana, Canny edge detection e leitura de códigos de barras com OpenCV e pyzbar.',
        'tags': ['opencv', 'computer-vision', 'pyzbar', 'image-processing', 'python'],
        'command': 'pip install opencv-python pyzbar && python -c "import cv2; print(cv2.__version__)"',
        'fullContent': 'Algoritmos práticos de visão computacional em tempo real para automação industrial, classificação de frames e extração de metadados visuais.',
        'filePath': 'datamining/opencv_machinelearning/barcode_detection/'
    }
]

for ai_item in ai_entries:
    add_item(ai_item)

# Master TXT Guides with Smart Structural Decomposition
parsed_ai_local = parse_txt_file('ai_tools_cpu/ai_local/ai_local_pc.txt')
if parsed_ai_local:
    add_item({
        'id': 'ai-local-pc-master',
        'title': 'AI Local PC: Guia Definitivo de LLMs Offline (Ollama, LM Studio, Open WebUI, DeepSeek)',
        'category': 'ai',
        'importance': 'critical',
        'type': 'guide',
        'icon': 'cpu',
        'description': f"Guia mestre de execução local de modelos de linguagem em CPU e GPU: {len(parsed_ai_local['sections'])} seções com instalação do Ollama, Open WebUI com Docker, Pinokio, LM Studio, DeepSeek R1, Llama 3.3 e catálogo com {parsed_ai_local['modelsCount']} modelos.",
        'tags': ['ollama', 'open-webui', 'deepseek', 'llama3', 'pinokio', 'lm-studio', 'local-llm', 'offline-ai', 'docker', 'qwen'],
        'command': 'curl -fsSL https://ollama.com/install.sh | sh && ollama run llama3.1:latest',
        'fullContent': parsed_ai_local['fullText'],
        'filePath': 'ai_tools_cpu/ai_local/ai_local_pc.txt',
        'isTxtDoc': True,
        'docMeta': {
            'sectionsCount': len(parsed_ai_local['sections']),
            'commandsCount': parsed_ai_local['commandsCount'],
            'linksCount': parsed_ai_local['linksCount'],
            'modelsCount': parsed_ai_local['modelsCount']
        },
        'structuredSections': parsed_ai_local['sections']
    })

parsed_qwen = parse_txt_file('ai_tools_cpu/ai_local/ollama_qwen3_ubuntu1.txt')
if parsed_qwen:
    add_item({
        'id': 'ai-ollama-qwen3-ubuntu',
        'title': 'Ollama Qwen 3 no Ubuntu: LLM Desbloqueado em 15 Minutos (6GB RAM / 6 CPU)',
        'category': 'ai',
        'importance': 'critical',
        'type': 'script',
        'icon': 'brain',
        'description': 'Pipeline de execução ultra-otimizado do Qwen 3 0.6B com Ollama e Docker no Ubuntu, ideal para hardware modesto com 6GB de RAM.',
        'tags': ['ollama', 'qwen3', 'ubuntu', 'low-ram', 'cpu-only', 'docker', 'terminal'],
        'command': 'ollama run qwen3:0.6b',
        'fullContent': parsed_qwen['fullText'],
        'filePath': 'ai_tools_cpu/ai_local/ollama_qwen3_ubuntu1.txt',
        'isTxtDoc': True,
        'docMeta': {
            'sectionsCount': len(parsed_qwen['sections']),
            'commandsCount': parsed_qwen['commandsCount'],
            'linksCount': parsed_qwen['linksCount'],
            'modelsCount': parsed_qwen['modelsCount']
        },
        'structuredSections': parsed_qwen['sections']
    })

parsed_wsl_intel = parse_txt_file('windows/wsl_ubuntu_intel_drivers.txt')
if parsed_wsl_intel:
    add_item({
        'id': 'wsl-ubuntu-intel-gpu-drivers',
        'title': 'WSL2 + Ubuntu: Configuração de Drivers Intel GPU Arc & OneAPI',
        'category': 'devops',
        'importance': 'high',
        'type': 'guide',
        'icon': 'cpu',
        'description': 'Instalação de drivers gráficos Intel Arc, aceleração de computação OneAPI e diagnóstico gráfico em WSL2 com Ubuntu Jammy.',
        'tags': ['wsl', 'wsl2', 'intel-arc', 'gpu', 'oneapi', 'ubuntu', 'drivers'],
        'command': 'sudo apt install mesa-utils && glxinfo -B',
        'fullContent': parsed_wsl_intel['fullText'],
        'filePath': 'windows/wsl_ubuntu_intel_drivers.txt',
        'isTxtDoc': True,
        'docMeta': {
            'sectionsCount': len(parsed_wsl_intel['sections']),
            'commandsCount': parsed_wsl_intel['commandsCount'],
            'linksCount': parsed_wsl_intel['linksCount'],
            'modelsCount': parsed_wsl_intel['modelsCount']
        },
        'structuredSections': parsed_wsl_intel['sections']
    })

parsed_ffmpeg_win = parse_txt_file('windows/ffmpeg.txt')
if parsed_ffmpeg_win:
    add_item({
        'id': 'windows-ffmpeg-gpu-pipeline',
        'title': 'FFmpeg no Windows & WSL: Aceleração por Hardware GPU Intel & NVENC',
        'category': 'media',
        'importance': 'high',
        'type': 'cli',
        'icon': 'video',
        'description': 'Flags e pipelines otimizados de encoding em GPU Intel QSV e Nvidia NVENC para renderização de alta velocidade no Windows e WSL.',
        'tags': ['ffmpeg', 'windows', 'gpu', 'qsv', 'nvenc', 'video-encoding'],
        'command': 'ffmpeg -hwaccel qsv -c:v h264_qsv -i input.mp4 -b:v 5M output.mp4',
        'fullContent': parsed_ffmpeg_win['fullText'],
        'filePath': 'windows/ffmpeg.txt',
        'isTxtDoc': True,
        'docMeta': {
            'sectionsCount': len(parsed_ffmpeg_win['sections']),
            'commandsCount': parsed_ffmpeg_win['commandsCount'],
            'linksCount': parsed_ffmpeg_win['linksCount'],
            'modelsCount': parsed_ffmpeg_win['modelsCount']
        },
        'structuredSections': parsed_ffmpeg_win['sections']
    })

# 6. DevOps, Cloud & Containers
devops_entries = [
    {
        'id': 'devops-docker-production-cheatsheet',
        'title': 'Docker & Docker Compose: Guia de Produção e Otimização',
        'category': 'devops',
        'importance': 'critical',
        'type': 'cheatsheet',
        'icon': 'box',
        'description': 'Comandos essenciais de gestão de containers, multi-stage builds, limpeza agressiva de camadas órfãs, redes bridge/overlay e volumes persistentes.',
        'tags': ['docker', 'docker-compose', 'containers', 'devops', 'sysadmin'],
        'command': 'docker system prune -a --volumes -f && docker compose up -d --build --remove-orphans',
        'fullContent': '''### Docker Production Cheatsheet
- Limpeza global de containers parados, imagens pendentes e volumes: `docker system prune -a --volumes`
- Visualizar uso de disco de containers: `docker system df -v`
- Inspecionar logs em tempo real com timestamp: `docker logs -f --tail 100 --timestamps <container>`
- Estatísticas de CPU e memória em streaming: `docker stats --no-stream`
- Multi-stage build para imagens minimalistas (Distroless / Alpine)''',
        'filePath': 'fullstack/cloud/docker/'
    },
    {
        'id': 'devops-nginx-reverse-proxy-ssl',
        'title': 'Nginx: Proxy Reverso de Alta Performance com Cache & SSL',
        'category': 'devops',
        'importance': 'critical',
        'type': 'guide',
        'icon': 'shield',
        'description': 'Configuração endurecida do Nginx com HTTP/2, Gzip/Brotli, proxy_pass com keepalive, rate limiting contra DoS e headers de segurança A+ no SSL Labs.',
        'tags': ['nginx', 'reverse-proxy', 'ssl', 'certbot', 'security', 'caching'],
        'command': 'sudo nginx -t && sudo systemctl reload nginx',
        'fullContent': '''### Nginx Hardened Configuration
- Proxy pass otimizado com `proxy_http_version 1.1;` e `proxy_set_header Connection "";`
- Headers de segurança: `X-Frame-Options DENY`, `X-Content-Type-Options nosniff`, `Content-Security-Policy`
- SSL TLSv1.3 com curvas elípticas e certificados Let's Encrypt automatizados com Certbot.''',
        'filePath': 'fullstack/servers/nginx/'
    },
    {
        'id': 'devops-aws-s3-cli-automation',
        'title': 'AWS CLI: S3 Bucket Sync & Automação de Backups em Nuvem',
        'category': 'devops',
        'importance': 'high',
        'type': 'cli',
        'icon': 'cloud',
        'description': 'Comandos para sincronização diferencial e paralela de arquivos locais com AWS S3, gerenciamento de storage classes (Glacier) e políticas IAM.',
        'tags': ['aws', 's3', 'cloud', 'backup', 'aws-cli', 'infra'],
        'command': 'aws s3 sync ./backup s3://meu-bucket-seguro/backups/ --delete --storage-class STANDARD_IA',
        'fullContent': 'Comandos de alta performance com a AWS CLI para automação de dumps de bancos de dados, snapshots criptografados e rotação de backups.',
        'filePath': 'fullstack/cloud/aws/'
    },
    {
        'id': 'devops-kubernetes-pod-troubleshooting',
        'title': 'Kubernetes: Debug de Pods, CrashLoopBackOff & Ingress',
        'category': 'devops',
        'importance': 'high',
        'type': 'guide',
        'icon': 'layers',
        'description': 'Guia tático para diagnóstico de pods em CrashLoopBackOff, inspeção de eventos de cluster, port-forwarding e análise de recursos com kubectl.',
        'tags': ['kubernetes', 'k8s', 'kubectl', 'pods', 'cloud-native'],
        'command': 'kubectl get pods -A --field-selector status.phase!=Running && kubectl describe pod <pod_name>',
        'fullContent': 'Sequência de passos para rastrear falhas de OOMKilled, problemas de DNS no CoreDNS, inspeção de secrets e rollout status de deployments.',
        'filePath': 'fullstack/cloud/kubernetis/'
    }
]

for dev_item in devops_entries:
    add_item(dev_item)

# 7. Backend & Databases
backend_entries = [
    {
        'id': 'backend-postgresql-performance-tuning',
        'title': 'PostgreSQL: Otimização de Queries, Índices & Backups pg_dump',
        'category': 'fullstack',
        'importance': 'critical',
        'type': 'guide',
        'icon': 'database',
        'description': 'Diagnóstico de queries lentas com EXPLAIN ANALYZE, índices parciais e BRIN, autovacuum tuning e rotinas de backup seguro com pg_dump e pg_restore.',
        'tags': ['postgresql', 'sql', 'database', 'indexing', 'performance', 'pgdump'],
        'command': 'pg_dump -h localhost -U postgres -F c -b -v -f "db_backup_$(date +%Y%m%d).dump" dbname',
        'fullContent': '''### PostgreSQL Deep Tuning
- Identificação de queries sequenciais sem índice via pg_stat_statements
- Configuração de `shared_buffers`, `work_mem` e `effective_cache_size` baseados em RAM
- Criação de índices parciais `CREATE INDEX ON orders (status) WHERE status = 'pending';`
- Restauração paralela: `pg_restore -j 4 -d dbname db_backup.dump`''',
        'filePath': 'fullstack/databases/postgres/'
    },
    {
        'id': 'backend-redis-caching-patterns',
        'title': 'Redis: Estratégias de Caching, Pub/Sub & Sessões de Alta Velocidade',
        'category': 'fullstack',
        'importance': 'high',
        'type': 'guide',
        'icon': 'zap',
        'description': 'Implementação de padrões Cache-Aside, Write-Through, expiração TTL inteligente, pipelines de comandos e filas atômicas com Redis.',
        'tags': ['redis', 'caching', 'nosql', 'in-memory', 'pubsub', 'queue'],
        'command': 'redis-cli --latency-history && redis-cli monitor',
        'fullContent': 'Configuração de persistência RDB e AOF, políticas de eviction (volatile-lru, allkeys-lru) e benchmark com redis-benchmark.',
        'filePath': 'fullstack/databases/'
    },
    {
        'id': 'backend-python-fastapi-sqlite-pyarrow',
        'title': 'Python Backend: FastAPI assíncrono com PyArrow e SQLite',
        'category': 'fullstack',
        'importance': 'high',
        'type': 'script',
        'icon': 'code',
        'description': 'Arquitetura de API de ultra-alta vazão combinando FastAPI assíncrono, processamento colunar com Apache PyArrow e persistência local ultra-rápida.',
        'tags': ['python', 'fastapi', 'pyarrow', 'sqlite', 'parquet', 'api'],
        'command': 'uvicorn main:app --workers 4 --host 0.0.0.0 --port 8000',
        'fullContent': 'Construção de endpoints REST modernos com validação Pydantic V2, geração automática de Swagger OpenAPI e serialização vetorial com Arrow/Parquet.',
        'filePath': 'fullstack/python/pyarrow_csv_sqlite/'
    },
    {
        'id': 'backend-rest-swagger-api-contract',
        'title': 'Design de APIs RESTful: OpenAPI 3.0 & Contratos de Dados',
        'category': 'fullstack',
        'importance': 'medium',
        'type': 'guide',
        'icon': 'file-text',
        'description': 'Padronização de respostas JSON (RFC 7807 Problem Details), versionamento semântico, paginação por cursor e documentação com Swagger.',
        'tags': ['api', 'rest', 'swagger', 'openapi', 'contract', 'backend'],
        'command': 'docker run -p 8080:8080 -e SWAGGER_JSON=/spec/openapi.json swaggerapi/swagger-ui',
        'fullContent': 'Princípios de design de APIs resilientes, idempotência em verbos HTTP (PUT vs POST), autenticação Bearer JWT e rate limiting por API Key.',
        'filePath': 'fullstack/api/swagger/'
    }
]

for back_item in backend_entries:
    add_item(back_item)

# 8. Frontend & Data Visualization
frontend_entries = [
    {
        'id': 'frontend-d3js-graph-gallery',
        'title': 'D3.js: Visualização de Dados Interativa, Grafos e Diagramas de Rede',
        'category': 'frontend',
        'importance': 'high',
        'type': 'guide',
        'icon': 'pie-chart',
        'description': 'Coleção de padrões para renderização de grafos direcionados por força (force-directed), matrizes de correlação e mapas interativos com D3.js.',
        'tags': ['d3js', 'data-viz', 'javascript', 'graphs', 'visualização'],
        'command': 'npm install d3 @types/d3',
        'fullContent': 'Implementação de nós dinâmicos com zoom semântico, drag and drop suave com d3-drag e simulação de física forceSimulation.',
        'filePath': 'fullstack/graphs/d3js/'
    },
    {
        'id': 'frontend-canvas-2d-animations',
        'title': 'HTML5 Canvas: Renderização de Alta Taxa de Quadros (60fps)',
        'category': 'frontend',
        'importance': 'medium',
        'type': 'script',
        'icon': 'play-circle',
        'description': 'Técnicas de requestAnimationFrame, duplo buffer, desenho vetorial procedural e conversão de animações Canvas para vídeo MP4.',
        'tags': ['canvas', 'html5', 'animations', 'webgl', 'javascript'],
        'command': 'const canvas = document.querySelector("canvas"); const ctx = canvas.getContext("2d");',
        'fullContent': 'Loops de animação ultra-leves sem sobrecarregar a thread principal, renderização de partículas matemáticas e exportação via MediaRecorder API.',
        'filePath': 'fullstack/canvas/animations/'
    },
    {
        'id': 'frontend-css-glitch-modern-effects',
        'title': 'CSS Moderno: Micro-Interações, Efeitos Glitch & Glassmorphism',
        'category': 'frontend',
        'importance': 'medium',
        'type': 'cheatsheet',
        'icon': 'layout',
        'description': 'Coleção de snippets CSS modernos com backdrop-filter, mix-blend-mode, keyframes para efeitos glitch cibernéticos e variáveis HSL dinâmicas.',
        'tags': ['css', 'glitch', 'glassmorphism', 'micro-animations', 'design-system'],
        'command': 'backdrop-filter: blur(16px); background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);',
        'fullContent': 'Estilos CSS de altíssimo impacto visual inspirados no Linear e Cyber-Growth para enriquecer dashboards e painéis de controle.',
        'filePath': 'fullstack/css/animation_glitch.html'
    }
]

for front_item in frontend_entries:
    add_item(front_item)

# 9. Learning, Books & Curated Repos
learning_entries = [
    {
        'id': 'learn-google-stanford-ml-courses',
        'title': 'Trilhas de Elite: Stanford CS229, Google ML & MIT Deep Learning',
        'category': 'learning',
        'importance': 'critical',
        'type': 'course',
        'icon': 'award',
        'description': 'Curadoria de cursos universitários gratuitos de maior prestígio global em Inteligência Artificial, Aprendizado Profundo e Teoria de Grafos.',
        'tags': ['stanford', 'mit', 'google-ml', 'machine-learning', 'academics', 'cursos'],
        'command': 'Visitar: https://developers.google.com/machine-learning/crash-course/ e https://see.stanford.edu/Course/CS229',
        'fullContent': '''### Principais Cursos de Elite Disponíveis:
- Stanford CS229: Machine Learning (Andrew Ng)
- MIT 18.065: Matrix Methods in Data Analysis, Signal Processing and Machine Learning
- Google Developers ML Crash Course
- DeepLearning.AI Specializations (Coursera)
- Pytorch.org Deep Dive Tutorials''',
        'filePath': 'Online_tutorials.md'
    },
    {
        'id': 'learn-freecodecamp-tech-books',
        'title': 'Biblioteca Aberta: Livros Essenciais de Engenharia de Software',
        'category': 'learning',
        'importance': 'high',
        'type': 'book-open',
        'icon': 'book',
        'description': 'Compilação de livros canônicos abertos sobre Arquitetura de Software, Design Patterns (Gang of Four), Engenharia de Dados e Linux Internals.',
        'tags': ['livros', 'arquitetura', 'design-patterns', 'software-engineering', 'educação'],
        'command': 'Ver lista completa de e-books e manuais técnicos em books_lectures/freecodecamp_books.md',
        'fullContent': 'Seleção de leituras fundamentais para transição de desenvolvedor pleno a arquiteto de sistemas distribuídos e líder técnico.',
        'filePath': 'books_lectures/freecodecamp_books.md'
    },
    {
        'id': 'learn-public-github-power-repos',
        'title': 'Repositórios GitHub de Alto Impacto & Ferramentas Open Source',
        'category': 'learning',
        'importance': 'medium',
        'type': 'guide',
        'icon': 'star',
        'description': 'Mapeamento de repositórios públicos no GitHub com implementações de referência em automação, pipelines, datasets e engenharia reversa.',
        'tags': ['github', 'open-source', 'repositórios', 'inspiração', 'projetos'],
        'command': 'Ver repositórios catalogados em Interesting_Gitbub_Public_Repos.md',
        'fullContent': 'Lista selecionada de repositórios open-source com estrelas históricas e padrões arquiteturais prontos para estudo e reaproveitamento.',
        'filePath': 'Interesting_Gitbub_Public_Repos.md'
    }
]

for learn_item in learning_entries:
    add_item(learn_item)

# 10. More Linux & Terminal Mastery from linux_howto
linux_curated = [
    {
        'id': 'linux-free-up-disk-space',
        'title': 'Liberação Agressiva de Espaço em Disco no Ubuntu / Debian',
        'category': 'linux',
        'importance': 'critical',
        'type': 'cli',
        'icon': 'hard-drive',
        'description': 'Procedimento cirúrgico para recuperar dezenas de gigabytes: limpeza de cache APT, remoção de kernels antigos, truncamento de logs do journald e snaps.',
        'tags': ['disco', 'disk-space', 'ubuntu', 'apt-get', 'journalctl', 'sysadmin'],
        'command': 'sudo apt autoremove --purge && sudo journalctl --vacuum-size=100M && sudo apt clean',
        'fullContent': '''### Comandos de Liberação de Disco:
- Limpar cache de pacotes baixados: `sudo apt clean`
- Remover dependências obsoletas e arquivos de config: `sudo apt autoremove --purge`
- Limpar logs do sistema retendo no máximo 100MB: `sudo journalctl --vacuum-size=100M`
- Identificar 10 maiores diretórios na raiz: `sudo du -ahx / | sort -rh | head -n 10`
- Limpar versões antigas de pacotes Snap: script de remoção de revisões desativadas.''',
        'filePath': 'linux_howto/config/howto_free_up_space_on_ubuntu.txt'
    },
    {
        'id': 'linux-cpu-memory-monitoring-logs',
        'title': 'Monitoramento de Recursos em Tempo Real: CPU, RAM & IO',
        'category': 'linux',
        'importance': 'critical',
        'type': 'cli',
        'icon': 'activity',
        'description': 'Comandos de diagnóstico rápido de gargalos de hardware: htop com filtros, vmstat 1 para paginação, iostat para lentidão de disco e top ordenado por consumo.',
        'tags': ['cpu', 'ram', 'memory', 'performance', 'htop', 'iostat', 'vmstat'],
        'command': 'vmstat -SM 1 5 && ps aux --sort=-%mem | head -n 10',
        'fullContent': '''### Diagnóstico de Desempenho:
- Processos que mais consom memória: `ps aux --sort=-%mem | head -n 11`
- Processos que mais consom CPU: `ps aux --sort=-%cpu | head -n 11`
- Verificar paginação de swap (si/so): `vmstat -w 2`
- Estatísticas de leitura/escrita de blocos por segundo: `iostat -xz 1`''',
        'filePath': 'linux_howto/config/howto_cpu_memory_log.txt'
    },
    {
        'id': 'linux-systemd-service-management',
        'title': 'Gerenciamento de Serviços Systemd & Daemons Customizados',
        'category': 'linux',
        'importance': 'high',
        'type': 'guide',
        'icon': 'settings',
        'description': 'Criação de unit files `.service` no systemd com reinício automático (Restart=always), controle de concorrência, logs integrados e ativação no boot.',
        'tags': ['systemd', 'services', 'daemon', 'systemctl', 'sysadmin', 'ubuntu'],
        'command': 'sudo systemctl daemon-reload && sudo systemctl enable --now meu-servico.service',
        'fullContent': '''### Unit Template para Systemd:
[Unit]
Description=Meu Servico de Alta Disponibilidade
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/app
ExecStart=/usr/bin/python3 /var/www/app/main.py
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target''',
        'filePath': 'linux_howto/ubuntu_startup_bash.txt'
    },
    {
        'id': 'linux-rsync-backup-automation',
        'title': 'RSYNC: Sincronização Incremental Rápida e Segura com SSH',
        'category': 'linux',
        'importance': 'critical',
        'type': 'cli',
        'icon': 'refresh-cw',
        'description': 'Transferência eficiente de arquivos com rsync preservando permissões, timestamps, links simbólicos, compressão no túnel SSH e barra de progresso.',
        'tags': ['rsync', 'backup', 'ssh', 'sincronização', 'transferência'],
        'command': 'rsync -avzP --delete -e "ssh -p 22" /origem/ usuario@remoto:/destino/',
        'fullContent': '''### Padrões de RSYNC:
- Backup incremental com exclusão de arquivos deletados: `rsync -avzP --delete /dados/ /backup/`
- Testar sincronização sem alterar arquivos (Dry Run): `rsync -avzn --delete /dados/ /backup/`
- Limitar largura de banda para não sobrecarregar link (ex: 5MB/s): `rsync --bwlimit=5000 -avz /dados/ /backup/`''',
        'filePath': 'commandlinefu.com/commandlinefu.com_rsync_commands_collection.txt'
    },
    {
        'id': 'linux-network-ports-ss-netstat',
        'title': 'Diagnóstico de Rede: Portas Abertas, Sockets & Conexões Ativas',
        'category': 'linux',
        'importance': 'high',
        'type': 'cli',
        'icon': 'wifi',
        'description': 'Inspeção rápida de serviços escutando em portas TCP/UDP com o utilitário moderno `ss`, identificando processos responsáveis e endereços de escuta.',
        'tags': ['rede', 'portas', 'ss', 'netstat', 'sockets', 'firewall'],
        'command': 'sudo ss -tulpn | grep LISTEN',
        'fullContent': '''### Comandos de Inspeção de Portas e Rede:
- Listar todas as portas em escuta (TCP/UDP) com PID do processo: `sudo ss -tulpn`
- Testar conectividade de porta remota com timeout: `nc -zv -w 3 ip-destino 443`
- Rastreamento de rotas e latência hop-by-hop: `mtr -rw 8.8.8.8`''',
        'filePath': 'linux_howto/network_config/'
    }
]

for lin_item in linux_curated:
    add_item(lin_item)

# Sort items by importance priority (critical first, then high, medium, specialized)
importance_rank = {'critical': 0, 'high': 1, 'medium': 2, 'specialized': 3}
items.sort(key=lambda x: (importance_rank.get(x['importance'], 4), x['title']))

# Stats
stats = {
    'total': len(items),
    'by_category': {},
    'by_importance': {
        'critical': sum(1 for x in items if x['importance'] == 'critical'),
        'high': sum(1 for x in items if x['importance'] == 'high'),
        'medium': sum(1 for x in items if x['importance'] == 'medium'),
        'specialized': sum(1 for x in items if x['importance'] == 'specialized')
    },
    'by_type': {}
}

for item in items:
    cat = item['category']
    stats['by_category'][cat] = stats['by_category'].get(cat, 0) + 1
    t = item['type']
    stats['by_type'][t] = stats['by_type'].get(t, 0) + 1

output_data = {
    'version': '2.0.0',
    'domain': 'howto.artesdosul.com',
    'title': 'Artes do Sul · HowTo Knowledge Nexus',
    'tagline': 'Base de Conhecimento Estratégica, Engenharia Linux, AI RAG, DevOps & Automação',
    'signature': '@artesdosul',
    'stats': stats,
    'categories': categories_def,
    'items': items
}

with open('howto-data.js', 'w', encoding='utf-8') as f:
    f.write('// Artes do Sul · HowTo Knowledge Nexus Dataset\n')
    f.write('// Autogerado com exclusão estrita de projetos descontinuados\n')
    f.write('window.HOWTO_DATABASE = ' + json.dumps(output_data, indent=2, ensure_ascii=False) + ';\n')

print(f"Catalog successfully generated with {len(items)} curated items!")
print(f"Categories: {stats['by_category']}")
print(f"Importance: {stats['by_importance']}")
