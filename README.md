# HowTo Nexus · Base de Conhecimento Estratégica & DevOps | Artes do Sul

## 🛡️ Sentinel Status
- **Status:** 🟢 Produção / Pronto para Deploy
- **Tier:** A
- **Health:** 98% / **ROI Potencial:** Elevado (Hub de Engenharia, Automação e IA para o ecossistema Artes do Sul)
- **Stack Principal:** HTML5, Vanilla CSS (Cyber-Growth Design System), JavaScript (Client-Side Search & Filter Engine), Python (Extrator & Curador), PWA (Service Worker)
- **Deploy Target:** `howto.artesdosul.com`
- **Repositório Oficial:** [github.com/araguaci/howto](https://github.com/araguaci/howto)
- **Upstream:** [github.com/maranemil/howto](https://github.com/maranemil/howto)

---

Base de conhecimento técnico de alta performance da **Artes do Sul**. O projeto transforma uma coleção de mais de 1.800 arquivos técnicos em um portal interativo, moderno e veloz, focado em execução diária, DevOps, engenharia Linux, multimídia com FFmpeg e inteligência artificial aplicada.

---

## ⚡ Principais Recursos do Portal

### 1. 🎨 Design System: Cyber-Growth (Artes do Sul)
- **Dark Aesthetic:** Fundo ultra-escuro (`#050505`), glassmorphism com desfoque de 14px, ambient glow orbs e acentos em Ciano Neon (`#00d9ff`), Laranja de Ação (`#ff6b35`) e Esmeralda (`#10b981`).
- **Tipografia:** `Bricolage Grotesque` (títulos e display), `Inter` (corpo e labels) e `JetBrains Mono` (comandos de terminal e código).
- **Hero Section Cinemática:** Visual de cockpit de engenharia (`assets/hero-banner.jpg`) e identidade visual (`assets/logo.png`) com contadores de autoridade em tempo real.
- **Micro-Interações:** Animações sutis em cards, badges luminosos, barra de navegação com elevação dinâmica (`.scrolled`) e botão flutuante *Voltar ao Topo*.

### 2. 🔍 Omnisearch & Filtros Multidimensionais
- **Busca em Tempo Real:** Pesquisa instantânea por comando, ferramenta, palavra-chave, tag ou caminho de arquivo (atalho de teclado `/` para focar).
- **Filtro por 9 Categorias Pilares:**
  - 💻 `linux`: Terminal & Linux Sysadmin (comandos diários, diagnóstico de hardware, rede, logs)
  - 🧠 `ai`: AI Agents, RAG & Data Science (Ollama, DeepSeek, LangChain, ChromaDB, Scikit)
  - ☁️ `devops`: Cloud, Docker & Infra (Docker Compose, Kubernetes, Nginx, AWS S3, SSL)
  - 🗄️ `fullstack`: Backend & Bancos de Dados (PostgreSQL, Redis, Python FastAPI, REST APIs)
  - 📊 `frontend`: Frontend & Data Viz (D3.js, Chart.js, Canvas 2D, animações modernas)
  - 🛠️ `tools`: Ferramentas Web Live (Icon Remover, Text Cleaner, Newline Stripper, JBS)
  - 🎬 `media`: FFmpeg, Áudio & Vídeo (codecs, cortes, filtros de áudio, gravação de tela)
  - 🌿 `git`: Git, GitHub & Workflow (comandos diários, branching, cherry-pick, worktree)
  - 📚 `learning`: Cursos, Roadmaps & Livros (MIT, Stanford, Google ML, e-books abertos)
- **Graus de Importância (Tiers de Prioridade):**
  - 🔥 **Crítico (Tier 1):** Comandos essenciais, recuperação de sistema, Docker em produção, RAG pipelines.
  - ⚡ **Alta Prioridade (Tier 2):** Automações com FFmpeg, Redis caching, Nginx proxy, ferramentas web de higienização.
  - 💡 **Média (Tier 3):** Cheatsheets de consulta rápida, CSS tricks, grafos interativos.
  - 📦 **Especializado (Tier 4):** Utilitários de nicho, processamento de áudio com sintetizadores e configs específicas.
- **Filtro por Formato:** Comandos CLI, Ferramentas Web, Guias Práticos, Scripts de Automação e Cheatsheets.
- **Growth Tracker:** Sistema de favoritos persistido localmente via `localStorage`.

### 3. 📑 Smart TXT Doc Engine (Modo Dual: Interativo vs. Raw)
Desenvolvido especificamente para arquivos técnicos densos (como `ai_tools_cpu/ai_local/ai_local_pc.txt` com 707 linhas e 22 seções):
- **⚡ Modo Interativo (Estruturado):**
  - **TOC Horizontal (Sumário):** Pílulas com as seções do arquivo para navegação por rolagem suave.
  - **Terminal Cards:** Cada comando é isolado em um card com `$ ` verde e botão individual **"Copiar"**.
  - **Grade de Modelos de IA:** Detecção de modelos e tamanhos de RAM (ex: `deepseek-r1 [5GB]`, `llama3.3 [43GB]`) com botão de execução rápida `ollama run <modelo>`.
  - **Chips de Recursos:** Links de YouTube, GitHub, HuggingFace e Ollama reconhecidos e destacados visualmente.
  - **Notas e Dicas:** Linhas iniciadas com `#` convertidas em callouts visuais.
- **💻 Modo Raw (`<code>`):**
  - Visualização integral do arquivo de texto original em `JetBrains Mono` com botão de cópia completa em 1 clique.

### 4. 🛡️ Zero Débito Técnico (Filtro de Descontinuados)
- O pipeline de extração [build_howto_database.py](build_howto_database.py) **ignorou 171 itens obsoletos** (SugarCRM 7 legado, PHP 5.x antigo, XAMPP 1.8 APC configs, bibliotecas legadas e ferramentas descontinuadas), mantendo apenas conhecimento contemporâneo e de alta aplicabilidade.

### 5. 🚀 PWA Offline First & Deploy Ready
- **PWA Manifest:** Configurado em [manifest.json](manifest.json) para instalação standalone em desktop e mobile.
- **Service Worker:** Implementado em [sw.js](sw.js) com estratégia de cache *Stale-While-Revalidate*.
- **Vercel / Cloudflare Config:** [vercel.json](vercel.json) configurado com cabeçalhos HTTP de segurança estritos (CSP, X-Frame-Options, X-Content-Type-Options) e cache de longa duração para assets estáticos.

---

## 📋 Lista de TO-DOs & Próximos Passos

Abaixo estão registrados os passos planejados para a evolução e publicação definitiva do projeto:

### Fase 1: Repositório & Controle de Versão
- [x] Configurar o remote `origin` apontando para o repositório oficial do usuário: `https://github.com/araguaci/howto`
- [x] Manter o `upstream` apontando para o repositório base: `https://github.com/maranemil/howto`
- [x] Atualizar documentação completa e registrar TO-DOs no `README.md`
- [ ] Realizar commit das alterações locais no branch `master`
- [ ] Efetuar `git push -u origin master` para o repositório [github.com/araguaci/howto](https://github.com/araguaci/howto)

### Fase 2: Publicação & Apontamento de Domínio (`howto.artesdosul.com`)
- [ ] Escolher e configurar a plataforma de hospedagem:
  - **Opção A (Vercel):** Conectar o repo `araguaci/howto` e rodar deploy com o [vercel.json](vercel.json).
  - **Opção B (Cloudflare Pages):** Conectar o repo com diretório raiz `./`.
  - **Opção C (VPS Nginx):** Configurar virtual host Nginx com Certbot SSL em servidor próprio.
- [ ] Configurar entrada CNAME no DNS: `howto.artesdosul.com` apontando para o host de deploy.
- [ ] Validar certificado SSL HTTPS e headers de segurança.

### Fase 3: Automação Contínua (CI/CD)
- [ ] Criar workflow do GitHub Actions em `.github/workflows/build-catalog.yml`:
  - Acionar a cada push ou pull request na branch `master`.
  - Executar `python build_howto_database.py` para reindexar novos arquivos `.txt` ou `.md`.
  - Atualizar automaticamente o [howto-data.js](howto-data.js) na esteira de deploy.

### Fase 4: Expansão do Catálogo de Arquivos `.txt`
- [x] Extração e estruturação profunda do `ai_local_pc.txt` (22 seções, 61 comandos, 31 modelos).
- [x] Extração e estruturação do `ollama_qwen3_ubuntu1.txt` e `wsl_ubuntu_intel_drivers.txt`.
- [ ] Expandir o parser inteligente para abranger em lote pastas como:
  - `windows/` (scripts PowerShell e drivers de GPU)
  - `linux_howto/security/` (hardening e chaves SSH)
  - `commandlinefu.com/` (coleções de comandos cURL, mysqldump, rsync)
  - `ai_tools_cpu/` (demais ferramentas de geração de imagem e voz)

### Fase 5: Integração no Ecossistema Artes do Sul
- [ ] Incluir link do subdomínio `howto.artesdosul.com` no portal principal [artesdosul.com](https://artesdosul.com/).
- [ ] Testar navegação cruzada e compartilhamento de links diretos para guias específicos.

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Navegador web moderno (Chrome, Edge, Firefox, Brave).
- Python 3.10+ (apenas se desejar reindexar o catálogo).

### Executar a Aplicação Web
Basta servir os arquivos estáticos da pasta raiz:
```bash
# Com o utilitário serve (Node.js)
serve .

# Ou com Python
python -m http.server 8080
```
Acesse no navegador: `http://localhost:8080` (ou abra diretamente o arquivo `index.html`).

### Reindexar o Catálogo de Dados
Caso adicione novos arquivos técnicos ou edite notas existentes:
```bash
python build_howto_database.py
```
O script atualizará instantaneamente o arquivo [howto-data.js](howto-data.js).

---

## 🏛️ Assinatura & Créditos

- **Uma criação:** [@artesdosul](https://artesdosul.com/)
- **Mantido por:** [github.com/araguaci](https://github.com/araguaci)
- **Mantra:** *"Conteúdo sem execução é apenas ruído. Transforme informação em arquitetura de sucesso."*
