# TO-DO List & Roadmap · HowTo Nexus (howto.artesdosul.com)

**Data de Registro:** 17/10/2026  
**Repositório Oficial:** [github.com/araguaci/howto](https://github.com/araguaci/howto)  
**Upstream Base:** [github.com/maranemil/howto](https://github.com/maranemil/howto)  
**Status Atual:** 🟢 Pronto para Commit & Deploy  

---

## 📌 Checklist de Tarefas

### Fase 1: Repositório & Controle de Versão
- [x] Configurar remote `origin` para `https://github.com/araguaci/howto.git`
- [x] Configurar remote `upstream` para `https://github.com/maranemil/howto.git`
- [x] Atualizar [README.md](README.md) com bloco Sentinel Status, arquitetura e documentação
- [x] Criar arquivo dedicado [TODO.md](TODO.md)
- [ ] Adicionar arquivos novos e modificados para staging:
  ```bash
  git add index.html styles.css app.js howto-data.js build_howto_database.py manifest.json sw.js vercel.json assets/ README.md TODO.md
  ```
- [ ] Criar commit descritivo:
  ```bash
  git commit -m "feat: setup howto.artesdosul.com portal with cyber-growth ui and smart txt engine"
  ```
- [ ] Realizar push para a branch master do repositório próprio:
  ```bash
  git push -u origin master
  ```

---

### Fase 2: Publicação & Apontamento de Domínio (`howto.artesdosul.com`)
- [ ] Selecionar a infraestrutura de hospedagem:
  - [ ] **Opção A (Vercel):**
    - Importar repositório `araguaci/howto` no painel da Vercel
    - Root Directory: `./` (raiz)
    - Deploy automático usando as regras do [vercel.json](vercel.json)
    - Adicionar domínio personalizado `howto.artesdosul.com`
  - [ ] **Opção B (Cloudflare Pages):**
    - Conectar com conta Cloudflare Pages apontando para a branch `master`
    - Adicionar CNAME automático `howto.artesdosul.com`
  - [ ] **Opção C (VPS Nginx):**
    - Clonar o repositório em `/var/www/howto.artesdosul.com`
    - Configurar bloco Nginx com gzip, headers de segurança e SSL Let's Encrypt (Certbot)
- [ ] Configurar entrada DNS do subdomínio:
  - Tipo: `CNAME`
  - Nome: `howto`
  - Destino: `cname.vercel-dns.com` (ou host correspondente)
- [ ] Testar acesso público com HTTPS: `https://howto.artesdosul.com`

---

### Fase 3: Automação Contínua (CI/CD GitHub Actions)
- [ ] Criar o arquivo de esteira `.github/workflows/build-catalog.yml`:
  ```yaml
  name: Build & Reindex HowTo Catalog

  on:
    push:
      branches: [ master ]
    workflow_dispatch:

  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - name: Set up Python
          uses: actions/setup-python@v5
          with:
            python-version: '3.10'
        - name: Run Catalog Generator
          run: python build_howto_database.py
        - name: Commit & Push if Changed
          run: |
            git config --global user.name "github-actions[bot]"
            git config --global user.email "github-actions[bot]@users.noreply.github.com"
            git add howto-data.js
            git diff-index --quiet HEAD || git commit -m "chore(auto): reindex howto catalog [skip ci]"
            git push
  ```
- [ ] Validar a execução da action em um commit de teste.

---

### Fase 4: Expansão do Catálogo de Arquivos `.txt`
- [x] Ingestão profunda e estruturação de `ai_tools_cpu/ai_local/ai_local_pc.txt` (22 seções, 61 comandos, 31 modelos)
- [x] Ingestão e estruturação de `ai_tools_cpu/ai_local/ollama_qwen3_ubuntu1.txt`
- [x] Ingestão e estruturação de `windows/wsl_ubuntu_intel_drivers.txt`
- [x] Ingestão e estruturação de `windows/ffmpeg.txt`
- [ ] Expandir o [build_howto_database.py](build_howto_database.py) para parser recursivo em lote das pastas:
  - [ ] `windows/` (`disable_services.txt`, `powershell.txt`, `repair_and_bootable.txt`)
  - [ ] `linux_howto/security/` (`ssh_key_stransfer.txt`, `howto_linux_security.txt`)
  - [ ] `commandlinefu.com/` (`commandlinefu.com_curl_commands_collection.txt`, `commandlinefu.com_ffmpeg_commands_collection.txt`)
  - [ ] `ai_tools_cpu/` (`ai_prompts.txt`, `ai_tools_image_gen.txt`, `stable_diffusion.txt`)
  - [ ] `music_video/` (`ffmpeg_effects/`, `random_tools_python/`)

---

### Fase 5: Integração no Ecossistema Artes do Sul
- [ ] Adicionar link do HowTo Nexus no header ou footer do portal principal `https://artesdosul.com/`
- [ ] Incluir o projeto no catálogo central de artefatos (`projetos.json`)
- [ ] Criar post de anúncio / thread para a comunidade de desenvolvedores
