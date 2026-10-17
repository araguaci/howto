# 📋 Protocolo de Validação & Checklist de Homologação
## HowTo Nexus · `howto.artesdosul.com`

**Data de Emissão:** 17/10/2026  
**Responsável:** Equipe Técnica Artes do Sul  
**Repositório:** [github.com/araguaci/howto](https://github.com/araguaci/howto)  
**Status Global:** 🟢 Pronto para Validação  

Este documento reúne todos os **TO-DOs de validação e critérios de aceite** necessários para homologar o portal **HowTo Nexus** antes e após o apontamento em produção.

---

## 📊 Matriz de Status da Homologação

| Dimensão | Escopo de Teste | Qtd. Critérios | Status Atual |
| :--- | :--- | :---: | :---: |
| **1. Design & UI** | Cyber-Growth Design System, Tipografia, Responsividade | 7 | 🟢 Validado |
| **2. Busca & Filtros** | Omnisearch, Filtros de Categoria, Tiers e Formato | 8 | 🟢 Validado |
| **3. Smart Doc Engine** | Modo Dual, TOC, Extração de Comandos, Modelos e Links | 8 | 🟢 Validado |
| **4. Ferramentas Web** | Execução de conversores e utilitários embutidos | 6 | 🟢 Validado |
| **5. Governança** | Integridade dos dados, exclusão de itens legados | 5 | 🟢 Validado |
| **6. PWA & Offline** | Manifest, Service Worker e Cache Stale-While-Revalidate | 5 | 🟡 Pré-Deploy |
| **7. Deploy & DNS** | Vercel / Cloudflare / Nginx, CNAME e SSL HTTPS | 5 | ⏳ Pendente Deploy |

---

## 1. 🎨 Checklist de Interface & Design System (Cyber-Growth)

- [ ] **1.1. Tipografia de Elite:**
  - Validar carregamento das fontes do Google Fonts (`Bricolage Grotesque` para display, `Inter` para UI e `JetBrains Mono` para terminal).
  - *Como testar:* Inspecionar elementos de título (`.brand-title`, `.hero-title`) e verificar ausência de fallback para fontes padrão do sistema.
- [ ] **1.2. Paleta & Contraste Dark:**
  - Fundo principal `#050505` com acentos em Ciano (`#00d9ff`), Laranja (`#ff6b35`) e Esmeralda (`#10b981`).
  - Textos secundários com contraste legível (WCAG AA).
- [ ] **1.3. Orbes de Iluminação Dinâmica:**
  - Verificar movimentação suave dos orbes de luz de fundo (`.glow-orb-1`, `.glow-orb-2`) sem travamentos ou alto consumo de GPU.
- [ ] **1.4. Header Sticky com Elevação:**
  - Rolar a página para baixo (> 20px) e verificar ativação da classe `.scrolled` (efeito de vidro escurecido e sombra de profundidade).
- [ ] **1.5. Hero Section Cinemática:**
  - Exibição nítida da imagem de cockpit [assets/hero-banner.jpg](assets/hero-banner.jpg) e logo [assets/logo.png](assets/logo.png).
  - Contadores de métricas ativos (1.800+ recursos, 9 categorias, 4 tiers, 0% descontinuados).
- [ ] **1.6. Botão Flutuante 'Voltar ao Topo':**
  - Rolar além de 300px; verificar se o botão `↑` surge no canto inferior direito e retorna suavemente ao topo ao clicar.
- [ ] **1.7. Responsividade Mobile & Tablet:**
  - Testar viewports: Mobile (375px e 414px), Tablet (768px) e Desktop (1440px+).
  - As colunas da grid e abas de filtro devem quebrar harmoniosamente sem corte lateral de tela (*overflow-x horizontal involuntário*).

---

## 2. 🔍 Checklist de Busca, Filtros & Interatividade (Hub)

- [ ] **2.1. Omnisearch em Tempo Real:**
  - Digitar termos como `docker`, `ffmpeg`, `rsync`, `rag`, `postgres` ou `ai local`.
  - A grid deve filtrar instantaneamente sem delay ou necessidade de pressionar Enter.
- [ ] **2.2. Atalho de Teclado `/` e Limpeza:**
  - Pressionar `/` em qualquer lugar da página: o foco deve ir automaticamente para o campo de busca.
  - Pressionar `Esc` ou clicar no botão `✕`: a busca deve ser limpa e a grid restaurada.
- [ ] **2.3. Filtro por Categorias (9 Pilares):**
  - Clicar nas abas de categoria:
    - `linux` (Terminal & Linux Sysadmin)
    - `ai` (AI Agents, RAG & ML)
    - `devops` (Cloud, Docker & Infra)
    - `fullstack` (Backend & Bancos de Dados)
    - `frontend` (Frontend & Data Viz D3)
    - `tools` (Ferramentas Web Live)
    - `media` (FFmpeg, Áudio & Vídeo)
    - `git` (Git, GitHub & Workflow)
    - `learning` (Cursos & Roadmaps)
  - Os contadores de cada aba devem bater com o número de recursos filtrados.
- [ ] **2.4. Filtro por Graus de Importância (Tiers):**
  - Selecionar `🔥 Crítico (Tier 1)`: verificar se aparecem apenas recursos vitais de produção.
  - Selecionar `⚡ Alta`, `💡 Média` e `📦 Especializado`: verificar badges com cores correspondentes.
- [ ] **2.5. Filtro por Formato do Recurso:**
  - Testar pílulas: `Comandos CLI`, `Ferramentas Web`, `Guias`, `Scripts`.
- [ ] **2.6. Growth Tracker (Favoritos ★):**
  - Clicar na estrela de qualquer card: a estrela deve acender em dourado e disparar toast *"Salvo nos favoritos ★"*.
  - Ativar o filtro `★ Favoritos`: apenas os itens marcados devem ser exibidos.
  - Recarregar a página (F5): os favoritos devem persistir via `localStorage`.
- [ ] **2.7. Contador de Resultados Dinâmico:**
  - Verificar barra: *"Exibindo X de Y recursos ativos (171 legados descontinuados ignorados)"*.
- [ ] **2.8. Botão "Limpar Todos os Filtros":**
  - Ao aplicar busca + categoria + importância, o botão de reset deve aparecer e restaurar a visualização padrão em 1 clique.

---

## 3. 📑 Checklist do Smart TXT Doc Engine (Modo Dual)

- [ ] **3.1. Reconhecimento de Arquivo Mestre (.txt):**
  - Pesquisar `ai local pc` ou clicar no card **AI Local PC: Guia Definitivo de LLMs Offline**.
  - O modal deve abrir com a tag destacada `SMART TXT DOC` e barra de estatísticas:
    - `📑 22 Seções`
    - `⚡ 61 Comandos`
    - `🦙 31 Modelos`
    - `🔗 234 Links`
- [ ] **3.2. Alternância de Modo Dual (Interactive vs. Raw):**
  - Clicar na aba `[ 💻 Código Raw <code> ]`: a visualização deve mudar para o arquivo original bruto com `<pre><code>`.
  - Clicar na aba `[ ⚡ Interativo ]`: a visualização deve restaurar a interface estruturada instantaneamente.
- [ ] **3.3. Sumário Rápido com Navegação (TOC):**
  - No modo interativo, clicar em qualquer uma das pílulas do sumário (ex: `1. Ollama Llama Gemma`, `2. Download and run Ollama`, `3. LM Studio`, `20. deepseek`).
  - O container deve rolar suavemente até a seção selecionada.
- [ ] **3.4. Blocos de Terminal com Cópia Individual:**
  - Em qualquer seção com comandos (ex: `curl -fsSL https://ollama.com/install.sh | sh` ou `docker run ...`):
  - Clicar no botão `Copiar` ao lado do comando.
  - Deve disparar notificação toast *"Comando copiado!"* e colar exatamente o comando na área de transferência.
- [ ] **3.5. Grade de Modelos de IA e Requisitos de RAM:**
  - Na seção *Download and run Ollama*, validar a grade de modelos:
  - Conferir tags de tamanho (ex: `deepseek-r1 [5GB]`, `llama3.3 [43GB]`, `tinyllama [600MB]`).
  - Clicar no botão play `▶`: deve copiar `ollama run <modelo>` para a área de transferência.
- [ ] **3.6. Chips de Links Inteligentes:**
  - Links de YouTube devem exibir badge vermelho `🔴 YT`.
  - Links do GitHub devem exibir badge `🐙 GitHub`.
  - Links do Hugging Face devem exibir badge `🤗 HuggingFace`.
  - Links do Ollama devem exibir badge `🦙 Ollama`.
  - Clicar em qualquer link: deve abrir em nova aba com `rel="noopener noreferrer"`.
- [ ] **3.7. Callouts de Notas e Instruções:**
  - Linhas com `# comentário` devem ser renderizadas como caixas de notas roxas estilizadas (`💡 Nota`).
- [ ] **3.8. Cópia Total do Conteúdo:**
  - O botão *"Copiar Todo Conteúdo"* no rodapé do modal deve copiar o texto completo do arquivo.

---

## 4. 🛠️ Checklist das Ferramentas Web Live

- [ ] **4.1. Icon & Emoji Remover:**
  - Abrir `fullstack/a_online_tools/converter_remove_icons.html`.
  - Colar texto com emojis (`🔥 Teste ⚡ 🚀`); clicar em processar e validar saída sem ícones.
- [ ] **4.2. Newline & Break Stripper:**
  - Abrir `fullstack/a_online_tools/converter_remove_newlines.html`.
  - Validar remoção de quebras excessivas de linha.
- [ ] **4.3. Text Style & Unicode Stripper:**
  - Abrir `fullstack/a_online_tools/converter_text_style_remover.html`.
  - Validar remoção de fontes estilizadas e caracteres Unicode especiais.
- [ ] **4.4. Case Normalizer & Lowercase:**
  - Abrir `fullstack/a_online_tools/converter_to_lowercase.html`.
  - Validar conversão para minúsculas e normalização de slugs.
- [ ] **4.5. JBS (JSON, Base64 & String Inspector):**
  - Abrir `fullstack/a_online_tools/jbs.html`.
  - Testar decodificação e encode de Base64 e validação de payload JSON.
- [ ] **4.6. Typeahead Search Engine:**
  - Abrir `utiles/autocomplete_typeahead_js.html` e validar autocompletar em tempo real.

---

## 5. 🛡️ Checklist de Governança & Integridade (Filtro de Descontinuados)

- [ ] **5.1. Zero Resíduos de SugarCRM 7:**
  - Pesquisar `sugarcrm`, `bwc` ou `alineasol`: **zero resultados** devem aparecer na busca do portal.
- [ ] **5.2. Zero Resíduos de PHP 5.x Legado:**
  - Pesquisar `php5` ou `php 5`: nenhum snippet arcaico deve poluir a base ativa.
- [ ] **5.3. Zero Resíduos de XAMPP 1.8 / XAjax:**
  - Nenhuma configuração descontinuada de APC de 2012-2015 presente no catálogo ativo.
- [ ] **5.4. Integridade do Dataset (`howto-data.js`):**
  - Executar validação no console do navegador:
    ```javascript
    console.assert(window.HOWTO_DATABASE.items.length >= 163, "Itens ausentes!");
    console.assert(Object.keys(window.HOWTO_DATABASE.categories).length === 9, "Categorias ausentes!");
    console.log("Dataset íntegro com", window.HOWTO_DATABASE.items.length, "itens.");
    ```
- [ ] **5.5. Pipeline Replicável:**
  - Rodar `python build_howto_database.py` no terminal e certificar que o script termina com `exit code 0`.

---

## 6. 📱 Checklist de PWA, Performance & Offline

- [ ] **6.1. Validação do Manifesto (`manifest.json`):**
  - Abrir o Chrome DevTools -> aba *Application* -> *Manifest*.
  - Conferir: Name (`HowTo Nexus · Artes do Sul`), Theme Color (`#050505`), Display (`standalone`) e Ícone 512x512.
- [ ] **6.2. Registro do Service Worker (`sw.js`):**
  - No DevTools -> aba *Application* -> *Service Workers*.
  - Status deve estar `Activated and running`.
- [ ] **6.3. Cache Stale-While-Revalidate:**
  - No DevTools -> aba *Application* -> *Cache Storage* -> `howto-artesdosul-v2.0`.
  - Conferir arquivos em cache: `index.html`, `styles.css`, `app.js`, `howto-data.js`, `assets/logo.png`, `assets/hero-banner.jpg`.
- [ ] **6.4. Teste de Acesso Offline:**
  - No DevTools -> aba *Network* -> marcar checkbox `Offline`.
  - Recarregar a página com `Ctrl + F5`: o portal deve carregar instantaneamente do cache local.
- [ ] **6.5. Auditoria Lighthouse:**
  - Rodar auditoria no Chrome DevTools: metas de Performance > 90, PWA instalável, Best Practices > 95, SEO 100.

---

## 7. 🚀 Checklist de Deploy & Infraestrutura (`howto.artesdosul.com`)

- [ ] **7.1. Validação do `vercel.json`:**
  - Conferir cabeçalhos HTTP: `X-Content-Type-Options: nosniff`, `X-Frame-Options`, `Referrer-Policy: strict-origin-when-cross-origin`.
  - Cache imutável de 1 ano para pasta `/assets/`.
- [ ] **7.2. Apontamento de DNS (CNAME):**
  - Entrada de DNS criada:
    - Host/Nome: `howto`
    - Tipo: `CNAME`
    - Destino: `cname.vercel-dns.com` (ou host do Cloudflare/VPS)
    - TTL: Automático / 300s.
- [ ] **7.3. Emissão de Certificado SSL / HTTPS:**
  - Acessar `https://howto.artesdosul.com/` e validar cadeado verde/seguro (TLS 1.3 sem conteúdo misto).
- [ ] **7.4. Validação de Metatags Sociais (Open Graph):**
  - Testar URL no *Twitter Card Validator* / *Facebook Sharing Debugger* / *LinkedIn Post Inspector*.
  - A imagem `assets/hero-banner.jpg`, título e descrição devem ser gerados no preview do card.
- [ ] **7.5. Linkagem no Portal Principal:**
  - Garantir que o link para `https://howto.artesdosul.com/` esteja publicado no hub central [artesdosul.com](https://artesdosul.com/).

---

## 🕹️ Roteiro de Execução Rápida para o Validador (3 Minutos)

Se você estiver com o navegador aberto em `http://localhost:8080` (ou `file:///.../index.html`):

1. **Teste de Visual:** Verifique o tema dark e o banner de cockpit no topo.
2. **Teste de Teclado:** Pressione `/` -> digite `ollama` -> veja os cards filtrados instantaneamente.
3. **Teste de Cópia:** No primeiro card, clique no botão `Copiar` -> veja o toast flutuante verde confirmando a cópia.
4. **Teste de Documento Mestre:** Abra o card `AI Local PC` -> alterne para `[ 💻 Código Raw <code> ]` e depois volte para `[ ⚡ Interativo ]`.
5. **Teste de Sumário:** Clique na pílula `#2. Download and run Ollama` -> veja a rolagem suave até a grade de modelos de IA com badges de RAM (`5GB`, `43GB`).
6. **Teste de Favoritos:** Clique na estrela `★` de 2 cards -> clique no filtro `★ Favoritos` no topo -> apenas os 2 cards marcados aparecem.
7. **Teste de Limpeza:** Pressione `Esc` ou clique em `Limpar todos os filtros ✕` -> todos os 163+ cards voltam a ser exibidos.
