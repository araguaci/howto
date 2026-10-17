// Artes do Sul · HowTo Knowledge Nexus Dataset
// Autogerado com exclusão estrita de projetos descontinuados
window.HOWTO_DATABASE = {
  "version": "2.0.0",
  "domain": "howto.artesdosul.com",
  "title": "Artes do Sul · HowTo Knowledge Nexus",
  "tagline": "Base de Conhecimento Estratégica, Engenharia Linux, AI RAG, DevOps & Automação",
  "signature": "@artesdosul",
  "stats": {
    "total": 163,
    "by_category": {
      "ai": 7,
      "linux": 67,
      "media": 53,
      "git": 15,
      "devops": 5,
      "tools": 6,
      "fullstack": 4,
      "learning": 3,
      "frontend": 3
    },
    "by_importance": {
      "critical": 40,
      "high": 62,
      "medium": 60,
      "specialized": 1
    },
    "by_type": {
      "guide": 12,
      "cli": 135,
      "cheatsheet": 3,
      "tool": 6,
      "script": 5,
      "course": 1,
      "book-open": 1
    }
  },
  "categories": {
    "linux": {
      "id": "linux",
      "name": "Terminal & Linux Sysadmin",
      "icon": "terminal",
      "color": "#00d9ff"
    },
    "ai": {
      "id": "ai",
      "name": "AI Agents, RAG & ML",
      "icon": "brain",
      "color": "#ff6b35"
    },
    "devops": {
      "id": "devops",
      "name": "Cloud, Docker & Infra",
      "icon": "server",
      "color": "#10b981"
    },
    "fullstack": {
      "id": "fullstack",
      "name": "Backend & Bancos de Dados",
      "icon": "database",
      "color": "#a855f7"
    },
    "frontend": {
      "id": "frontend",
      "name": "Frontend & Data Viz (D3)",
      "icon": "layout",
      "color": "#ec4899"
    },
    "tools": {
      "id": "tools",
      "name": "Ferramentas Web Live",
      "icon": "wrench",
      "color": "#f59e0b"
    },
    "media": {
      "id": "media",
      "name": "FFmpeg, Áudio & Vídeo",
      "icon": "video",
      "color": "#3b82f6"
    },
    "git": {
      "id": "git",
      "name": "Git, GitHub & Workflow",
      "icon": "git-branch",
      "color": "#ef4444"
    },
    "learning": {
      "id": "learning",
      "name": "Cursos, Roadmaps & Livros",
      "icon": "book-open",
      "color": "#14b8a6"
    }
  },
  "items": [
    {
      "id": "ai-local-pc-master",
      "title": "AI Local PC: Guia Definitivo de LLMs Offline (Ollama, LM Studio, Open WebUI, DeepSeek)",
      "category": "ai",
      "importance": "critical",
      "type": "guide",
      "icon": "cpu",
      "description": "Guia mestre de execução local de modelos de linguagem em CPU e GPU: 22 seções com instalação do Ollama, Open WebUI com Docker, Pinokio, LM Studio, DeepSeek R1, Llama 3.3 e catálogo com 31 modelos.",
      "tags": [
        "ollama",
        "open-webui",
        "deepseek",
        "llama3",
        "pinokio",
        "lm-studio",
        "local-llm",
        "offline-ai",
        "docker",
        "qwen"
      ],
      "command": "curl -fsSL https://ollama.com/install.sh | sh && ollama run llama3.1:latest",
      "fullContent": "\n#####################################################\nollama Llama Gemma\n#####################################################\n\nhttps://www.youtube.com/watch?v=DYhC7nFRL5I\nhttps://ollama.com/download\nhttps://ollama.com/library/dolphin-llama3\nhttps://www.llama.com/\nhttps://www.llama.com/docs/model-cards-and-prompt-formats/llama3_3/\nhttps://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md\nhttps://huggingface.co/meta-llama/Llama-3.3-70B-Instruct\nhttps://github.com/ollama\nhttps://ollama.com/library\nhttps://mistral.ai/news/mixtral-of-experts/\nhttps://erichartford.com/uncensored-models\nhttps://github.com/ollama/ollama\n\ncurl -fsSL https://ollama.com/install.sh | sh\nollama serve\nollama pull llama3.1:latest\nollama list\nollama run llama3.1:latest\nollama run gemma:2b\n\nsudo docker run -d -p 3000:8080 --gpus=all -v ollama:/root/.ollama -v open-webui:/app/backend/data -name open-webui -restart always ghcr.io/open-webui/open-webui:ollama\n\n\nmistral\nhttps://mistral.ai/news/mixtral-of-experts/\n\n\n\n\ndolphin-llama\nhttps://ollama.com/hillct/dolphin-llama-3.1\nhttps://huggingface.co/cognitivecomputations/dolphin-2.9.4-llama3.1-8b\nhttps://www.promptlayer.com/models/dolphin-294-llama31-8b-3ac7\nhttps://ollama.com/CognitiveComputations/dolphin-llama3.1:latest/blobs/c4e04968e3ca\nhttps://huggingface.co/llmware/dolphin-2.9.4-llama3.1-8b-ov\nhttps://github.com/ggerganov/llama.cpp/issues/8895\n\nollama pull rjmalagon/dolphin-2.9.4-llama3.1-8b:q8_0\n\n\n\ncpu\nollama run llama2:13b\nollama run llama3:8b\nollama run mistral:7b\nollama run gemma2:9b\nollama run llava:9b\nollama run phi3:3.8b\nollama run gwen2:7b\n\n\n######################################\nDownload and run Ollama\n######################################\n\nhttps://ollama.com/download\nhttps://hub.docker.com/r/ollama/ollama\nhttps://github.com/ollama/ollama\n\ndocker pull ollama/ollama\n\n# CPU only\ndocker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama\n# Start the container\ndocker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama\n# Run model locally, Now you can run a model:\ndocker exec -it ollama ollama run llama3\n\nhttps://github.com/ollama/ollama/blob/main/docs/linux.md\n# Install\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# Manual install\ncurl -L https://ollama.com/download/ollama-linux-amd64.tgz -o ollama-linux-amd64.tgz\nsudo tar -C /usr -xzf ollama-linux-amd64.tgz\n\nollama serve\nollama -v\n\nsudo systemctl start ollama\nsudo systemctl status ollama\n\nollama run deepseek-r1\nsolve for x:2x + 10 = 0\n\nhttps://ollama.com/library\nhttps://ollama.com/library/deepseek-r1\t\t5gb\nhttps://ollama.com/library/llama3.3\t\t    43gb\nhttps://ollama.com/library/llama3.2\t\t    2gb\nhttps://ollama.com/library/llama3.1\t\t    5gb\nhttps://ollama.com/library/llama3\t\t    5gb\nhttps://ollama.com/library/qwen\t\t\t    2gb\nhttps://ollama.com/library/qwen2\t\t    4gb\nhttps://ollama.com/library/qwen2.5\t\t    5gb\nhttps://ollama.com/library/phi3\t\t\t    2gb\nhttps://ollama.com/library/llama2\t\t    4gb\nhttps://ollama.com/library/gemma2\t\t    5gb\nhttps://ollama.com/library/qwen2.5-coder\t5gb\nhttps://ollama.com/library/tinyllama\t\t600mb\nhttps://ollama.com/library/codegemma\t\t5gb\nhttps://ollama.com/library/deepseek-coder\t800mb\nhttps://ollama.com/library/orca-mini\t\t2gb\nhttps://ollama.com/library/starcoder\t\t2gb\nhttps://ollama.com/library/stable-code\t\t2gb\nhttps://ollama.com/library/tinydolphin\t\t600mb\nhttps://ollama.com/library/qwen2-math\t\t4gb\nhttps://ollama.com/library/sqlcoder\t\t    4gb\nhttps://ollama.com/library/dolphin-phi\t\t2gb\nhttps://ollama.com/library/granite3-dense\t2gb\nhttps://ollama.com/library/granite3.1-dense\t5gb\nhttps://ollama.com/library/dolphin3\t\t    5gb\nhttps://ollama.com/library/smallthinker\t\t3gb\nhttps://ollama.com/library/reader-lm\t\t1gb\nhttps://ollama.com/library/falcon3\t\t    4gb\nhttps://ollama.com/library/granite-embedding    63mb\nhttps://ollama.com/library/granite3-guardian   \t3gb\nhttps://ollama.com/library/sailor2  \t\t5gb\n\nollama run deepseek-r1\nollama run gemma2\nollama run qwen\nollama run qwen tinyllama\n\n\n#####################################################\nLM Studio\n#####################################################\nhttps://www.youtube.com/watch?v=KtSdNwVkpWc\n\nhttps://lmstudio.ai/\nLM_Studio-0.3.5.AppImage\nhttps://lmstudio.ai/docs\nhttps://lmstudio.ai/download?os=win32\n\n#####################################################\nOpen WebUI Channels : v0.5.3 Complete Guide\n#####################################################\n\nhttps://www.youtube.com/watch?v=pfxxZ7rQUJg\n\ndocker run -d -p 3000:8080 --env ENABLE_CHANNELS=true --env ENABLE_ADMIN_CHAT_ACCESS=true --env BYPASS_MODEL_ACCESS_CONTROL=true -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main\n\n\n\n\n\n#####################################################\nDesktop LLMs\n#####################################################\n\nhttps://anythingllm.com/desktop\nhttps://docs.anythingllm.com/installation-desktop/linux#install-using-the-installer-script\n\n\n\nhttps://github.com/ggml-org/llama.cpp\nhttps://docs.servicestack.net/ai-server/llama-server#docker-compose\n\ndocker run -p 8080:8080 -v /path/to/models:/models --gpus all \\\n    ghcr.io/ggml-org/llama.cpp:server-cuda -m models/phi-4.Q4_K_M.gguf \\\n    -c 512 --host 0.0.0.0 --port 8080 --n-gpu-layers 999\n    \nllama-server -m model.gguf http://localhost:8080\n\nhttps://lmstudio.ai/\nhttps://claraverse.space/\n\nhttps://zed.dev/\nhttps://zed.dev/download\n\nhttps://docs.openwebui.com/\n\nhttps://github.com/Mainframework/HugstonOne\n\nhttps://www.jan.ai/download\n\nhttps://www.cherry-ai.com/\nhttps://www.cherry-ai.com/download\n\n\nhttps://anythingllm.com/desktop\nhttps://docs.anythingllm.com/installation-desktop/linux#install-using-the-installer-script\n\n\n./Cherry-Studio-1.7.19-x86_64.AppImage --no-sandbox\n./Jan_0.7.7_amd64.AppImage\n./LM-Studio-0.4.5-2-x64.AppImage --no-sandbox\n\n\n#####################################################\nRun LLMs locally - 5 Must-Know Frameworks\n#####################################################\n\nhttps://www.youtube.com/watch?v=5WCvGyPpWwg\nOllama\nGPT4All\nPrivateGPT\nllama.cpp\nLangChain\n\n\n#####################################################\nBest ChatGPT Alternatives for Everyday Use\n#####################################################\n\nhttps://www.youtube.com/watch?v=wwcneSVMK-A\n\nhttps://www.meta.ai/\nhttps://pi.ai/\nhttps://copilot.microsoft.com/\nhttps://www.phind.com/search\nhttps://huggingface.co/cognitivecompu...\nhttps://chat.mistral.ai/\nhttps://poe.com/\nhttps://gemini.google.com/\nhttps://thegigabrain.com/\nhttps://blogs.microsoft.com/blog/2023...\nhttps://aistudio.google.com/app\nhttps://chatgpt.com/\nhttps://claude.ai/\nhttps://www.perplexity.ai/\n\n\nhttps://character.ai/\nhttps://www.joyland.ai/\n\n#####################################################\nThe Self-hosted AI Starter Kit\n#####################################################\n\nhttps://github.com/n8n-io/self-hosted-ai-starter-kit\nhttps://docs.n8n.io/hosting/starter-kits/ai-starter-kit/\nhttps://github.com/n8n-io/self-hosted-ai-starter-kit/blob/main/docker-compose.yml\nhttps://hub.docker.com/r/localai/localai\nhttps://hub.docker.com/r/elestio/flowiseai\nhttps://community.n8n.io/c/tutorials/28\n\nhttps://github.com/coleam00/ai-agents-masterclass/tree/main/local-ai-packaged\nhttps://github.com/n8n-io/self-hosted-ai-starter-kit\n\n\n#####################################################\nLLM Everywhere: Docker for Local and Hugging Face Hosting\n#####################################################\n\nhttps://hub.docker.com/\nhttps://www.docker.com/blog/llm-docker-for-local-and-hugging-face-hosting/\nhttps://hub.docker.com/r/ollama/ollama\n\nhttps://hub.docker.com/r/pytorch/pytorch\nhttps://hub.docker.com/r/tensorflow/tensorflow\n\n\n#####################################################\nPinokio AI Browser\n#####################################################\n\nhttps://www.youtube.com/watch?v=A1qzxDxfMZQ\n\nhttps://pinokio.computer/\n\nhttps://pinokio.computer/item?uri=https://github.com/pinokiofactory/MMAudio\nhttps://pinokio.computer/item?uri=https://github.com/pinokiofactory/ai-video-composer\nhttps://pinokio.computer/item?uri=https://github.com/pinokiofactory/comfy\nhttps://pinokio.computer/item?uri=https://github.com/pinokiofactory/open-webui\nhttps://pinokio.computer/item?uri=https://github.com/pinokiofactory/whisper-webui\nhttps://pinokio.computer/item?uri=https://github.com/pinokiofactory/hallo\nhttps://pinokio.computer/item?uri=https://github.com/pinokiofactory/stableaudio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/openvoice2\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/customnet\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/differential-diffusion-ui\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/chatbot-ollama\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/automatic1111\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/sdxl-turbo\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/diffusers-sdxl-turbo\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/svd.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/illusion.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/audio-webui.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/AudioLDM2.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/audiogradio.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/animatediff.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/llamacpp.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/tutorial.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/SUP3RMASS1VE/SD-Next\nhttps://pinokio.computer/item?uri=https://github.com/6Morpheus6/illusion-diffusion-HQ\nhttps://pinokio.computer/item?uri=https://github.com/tazztone/whisper-large-v3\n\n\n###########################################\nPinokio\n###########################################\n\nhttps://pinokio.computer/\nhttps://program.pinokio.computer/#/?id=install\nhttps://program.pinokio.computer/#/?id=linux\nhttps://github.com/pinokiocomputer/pinokio/releases/tag/1.3.4\nhttps://github.com/pinokiocomputer/pinokio/releases/download/1.3.4/Pinokio_1.3.4_arm64.deb\n\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/fooocus\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/differential-diffusion-ui\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/open-webui\nhttps://pinokio.computer/item?uri=https://github.com/facefusion/facefusion-pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/magnet\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/automatic1111\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/sdxl-turbo\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/svd.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/audiocraft_plus.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/audio-webui.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/audiogradio.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/tutorial.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/6Morpheus6/pinokio-wiki\nhttps://pinokio.computer/item?uri=https://github.com/facefusion/facefusion-pinokio\nhttps://pinokio.computer/item?uri=https://github.com/Feedjer/stable-diffusion-webui-ux.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/supersonic13/sdxs-pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/AudioLDM2.pinokio\n\n\n#####################################################\n8 AI Tools\n#####################################################\n\nNapkin AI - https://www.napkin.ai/\nNotebookLM - https://notebooklm.google.com/\nPinokio - https://pinokio.computer/\nReplicate - https://replicate.com/\nFlux Dev Lora Trainer - https://replicate.com/ostris/flux-dev...\nSpotter Studio - https://partner.spotterstudio.com/fut...\nGuidde - https://www.guidde.com/\nSuno - https://suno.com/\n\n\n#####################################################\nOpen NoteBookLM\n#####################################################\n\nhttps://www.youtube.com/watch?v=M3wue0dw6tw\nhttps://github.com/gabrielchua/open-notebooklm/tree/main\n\ngit clone https://github.com/gabrielchua/open-notebooklm.git\ncd open-notebooklm\n\npython -m venv .venv\nsource .venv/bin/activate\n\npip install -r requirements.txt\n\npython app.py\n\n#####################################################\nPodCastfy\n#####################################################\n\nhttps://www.youtube.com/watch?v=q26rqFg--84\n\nhttps://github.com/souzatharsis/podcastfy\nhttps://github.com/souzatharsis/podcastfy-demo\n\npip install ffmpeg\npip install podcastfy\nSet up your API keys\n\nfrom podcastfy.client import generate_podcast\n\naudio_file = generate_podcast(urls=[\"<url1>\", \"<url2>\"])\npython -m podcastfy.client --url <url1> --url <url2>\n\n\n\n\n#####################################################\n#####################################################\nhttps://scalastic.io/en/mixtral-ollama-llamaindex-llm/\nhttps://peterfalkingham.com/2024/04/26/my-experience-training-a-local-llm-ai-chatbot-on-local-data/\n\nchatDocs\nprivateGPT\nphi-1\nTinyStories\nGPT4All\nOPENAI\nLora\nOllama\nFAST- GPT-LLM-Trainer\n\n\n\n\n\n\nollama run mixtral\nconda create --name mixtral_ollama python=3.11\nconda activate mixtral_ollama\n# llama-index\npip install -r requirements.txt\npython reference_test.py\n\n\n\n#####################################################\nFemtoGPT\n#####################################################\n\nhttps://www.youtube.com/watch?v=jEyPQUyNhD0\nhttps://github.com/keyvank/femtoGPT\nhttps://github.com/cthiriet/femtoGPT\nhttps://docs.rs/femto-gpt/latest/femto_gpt/\nhttps://crates.io/crates/femto-gpt/reverse_dependencies\n\n\n\n#####################################################\nLLMs locally\n#####################################################\n\npip install llm\nllm install llm-gpt4all\nllm -m the-model-name \"Your query\"\nllm -m ggml-model-gpt4all-falcon-q4_0 \"Tell me a joke about computer programming\"\nllm aliases set falcon ggml-model-gpt4all-falcon-q4_0\n\n\nhttps://github.com/ollama/ollama\nhttps://scalastic.io/en/mixtral-ollama-llamaindex-llm/\nhttps://www.restack.io/p/llm-orchestration-answer-train-own-data-cat-ai\n\nollama run model-name\n\n\nh2oGPT\nPrivateGPT\n\n#####################################################\nllamafile\n#####################################################\n\nhttps://github.com/Mozilla-Ocho/llamafile\n\ncurl -L https://github.com/Mozilla-Ocho/llamafile/releases/download/0.1/llamafile-server-0.1 > llamafile\nchmod +x llamafile\n\n./llamafile --model ./zephyr-7b-alpha.Q4_0.gguf\nhttp://127.0.0.1:8080.\n\n GitHub repository: mistral-7b-instruct, llava-v1.5-7b-server, or wizardcoder-python-13b.\n\n#####################################################\nLocalGPT\n#####################################################\n\nhttps://github.com/PromtEngineer/localGPT\nhttps://www.youtube.com/watch?v=MlyoObdIHyo\n\nLM Studio\nhttps://lmstudio.ai/\nhttps://huggingface.co/models\nhttps://www.infoworld.com/article/2338922/5-easy-ways-to-run-an-llm-locally.html\nhttps://huggingface.co/docs/trl/en/learning_tools\n\n\n#####################################################\nLLMs can be used to label data and support analyses.\n#####################################################\n\nhttps://github.com/thu-vu92/local-llms-analyse-finance#\nhttps://www.youtube.com/watch?v=h_GTxRFYETY\n\n\n\nText generation web UI\nhttps://github.com/oobabooga/text-generation-webui\n\nHow to install\nClone or download the repository.\nRun the script that matches your OS: start_linux.sh, start_windows.bat, start_macos.sh, or start_wsl.bat.\nSelect your GPU vendor when asked.\nOnce the installation ends, browse to http://localhost:7860.\nHave fun!\n\nComfyUI-HunyuanVideoWrapper\nhttps://github.com/kijai/ComfyUI-HunyuanVideoWrapper\n\n\n#####################################################\ndeepseek\n#####################################################\n\nollama run deepseek-coder \t# 1.3 billion parameter model\nollama run deepseek-coder:6.7b\t# 6.7 billion parameter model\nollama run deepseek-r1:1.5b\t# DeepSeek-R1-Distill-Qwen-1.5B\nollama run deepseek-r1:7b\t# DeepSeek-R1-Distill-Qwen-7B\nollama run deepseek-r1:8b\n\nhttps://ollama.com/library/deepseek-coder\nhttps://ollama.com/library/deepseek-r1\nhttps://ollama.com/download\n\n\nAPI\nExample using curl:\n\ncurl -X POST http://localhost:11434/api/generate -d '{\n  \"model\": \"deepseek-coder\",\n  \"prompt\":\"Why is the sky blue?\"\n }'\n\ncurl -fsSL https://ollama.com/install.sh | sh\nollama run deepseek-r1:1.5b\n\ndocker run -d -p 9783:8080 -v open-webui:/app/backend/data --name open-webui ghcr.io/open-webui/open-webui:main\n\nhttp://localhost:9783/\n\n####################################################\nollama\n####################################################\n\n\nhttps://www.reddit.com/r/ollama/comments/1ir69xk/seeking_a_fast_local_llm_solution_using_only_cpu/\nhttps://ollama.com/library/llama2:7b-chat-q4_0\nhttps://huggingface.co/NousResearch/Hermes-3-Llama-3.1-8B\nhttps://huggingface.co/NousResearch/DeepHermes-3-Llama-3-8B-Preview\nhttps://huggingface.co/meta-llama/Llama-3.2-11B-Vision\nhttps://github.com/shinhyo/OllamaTalk\n\n\n# first build it:\ngit clone --depth 1 --branch v0.7.2 https://github.com/vllm-project/vllm.git && \\\ncd vllm && \\\nsudo docker build -f Dockerfile.cpu -t vllm-cpu-env --shm-size=4g . && \\\n# then run the inference:\ndocker run -it --rm --network=host \\\n  vllm-cpu-env \\\n  --model your-huggingface-model-name \\ # adapt this!\n  --served-model-name my-api-model-name \\ # optional: what name should be used in the API\n  --port 8000 \\ # port of the API\n  --load-format safetensors # or whatever your model is\n\n\nllm models working on cpu\nhttps://huggingface.co/spaces/Nymbo/Hermes-3-Llama-3.1-8B\n\nSeveral large language models (LLMs) have been developed or optimized to run on CPUs, although they may not be as performant as their GPU-accelerated counterparts. Here are a few notable examples:\n\nBLOOM (BigScience Large Open-science Open-access Multilingual) - Developed by the BigScience consortium, this 17-billion parameter model can run on CPUs.\n\nPaLM (Pathways Language Model) - Developed by Google, this 540-billion parameter model has been fine-tuned to run efficiently on CPUs.\n\nOPT (Optimus) - Developed by Meta AI, this 125-billion parameter model is designed to run on CPUs and has shown strong performance on various natural language tasks.\n\nGLaM (Generalist Language Model) - Developed by UC Berkeley and Stanford, this 352-billion parameter model is optimized for CPU inference.\n\nCTRL (Causal Transformer Language model) - Developed by Microsoft, this 7-billion parameter model is designed to run on CPUs and has been used for various natural language tasks.\n\nCamembert - A French language variant of the BERT model developed by Facebook AI, which can run on CPUs.\n\nDistilm - Developed by DeepMind, this model is designed to run efficiently on CPUs and has been used for various natural language tasks.\n\nKeep in mind that while these models can run on CPUs, they may not achieve the same level of performance as their GPU-accelerated counterparts. The choice of model depends on factors such as the specific task, available computational resources, and desired performance trade-offs.\n\n\n\n\n\n##################################\n\nhttps://github.com/fvciprian/deepseek-r1-ext\nhttps://apxml.com/posts/gpu-requirements-deepseek-r1\nDeepSeek-R1-Distill-Qwen-1.5B\t1.5B\t~3.5 GB\tNVIDIA RTX 3060 12GB or higher\nDeepSeek-R1-Distill-Qwen-1.5B\t1.5B\t~1 GB\tNVIDIA RTX 3050 8GB or higher\n\n---------------------------------------------------------------------------------------\n\nhttps://github.com/microsoft/BitNet\nhttps://huggingface.co/microsoft/bitnet-b1.58-2B-4T\nhttps://huggingface.co/docs/transformers/en/model_doc/bitnet\n\n\n---------------------------------------------------------------------------------------\n\nhttps://github.com/comfyanonymous/ComfyUI\nhttps://github.com/QwenLM/Qwen-Image\nhttps://huggingface.co/spaces/multimodalart/flux-lora-the-explorer\nhttps://huggingface.co/spaces/Heartsync/Qwen-Image-LORA\nhttps://huggingface.co/spaces/multimodalart/Qwen-Image-LoRA-Explorer\nhttps://huggingface.co/spaces/prithivMLmods/Qwen-Image-LoRA-DLC\nhttps://huggingface.co/spaces/multimodalart/Qwen-Image-Fast\nhttps://huggingface.co/Qwen/Qwen-Image\n\n---------------------------------------------------------------------------------------\n\nhttps://github.com/comfyanonymous/ComfyUI\nhttps://github.com/pollinations/pollinations\nhttps://pollinations.ai/\nhttps://stablediffusion.fr/dalle\nhttps://github.com/huggingface/diffusers\nhttps://stabledifffusion.com/\n\n\n---------------------------------------------------------------------------------------\n\n\n\nhttps://h2o.ai/platform/llm-studio/\nhttps://github.com/h2oai/h2o-llmstudio\n\nmkdir -p `pwd`/llmstudio_mnt\nchmod 777 `pwd`/llmstudio_mnt\n\n# make sure to pull latest image if you still have a prior version cached\ndocker pull h2oairelease/h2oai-llmstudio-app:latest\n\n# run the container\ndocker run \\\n    --runtime=nvidia \\\n    --shm-size=64g \\\n    --init \\\n    --rm \\\n    -it \\\n    -u `id -u`:`id -g` \\\n    -p 10101:10101 \\\n    -v `pwd`/llmstudio_mnt:/home/llmstudio/mount \\\n    -v ~/.cache:/home/llmstudio/.cache \\\n    h2oairelease/h2oai-llmstudio-app:latest\n\nNavigate to http://localhost:10101/\n\n\n---------------------------------------------------------------------------------------\n\n\nhttps://github.com/microsoft/ai-agents-for-beginners\nhttps://github.com/transformerlab/transformerlab-app\nhttps://github.com/ghuntley/how-to-build-a-coding-agent\nhttps://github.com/HandsOnLLM/Hands-On-Large-Language-Models\nhttps://github.com/mlabonne/llm-course\nhttps://github.com/afshinea/stanford-cme-295-transformers-large-language-models\n\n---------------------------------------------------------------------------------------\n\n\nhttps://hub.docker.com/r/mcp/postgres\nhttps://hub.docker.com/r/mcp/fetch\nhttps://hub.docker.com/r/mcp/brave-search\nhttps://hub.docker.com/r/mcp/youtube-transcript\nhttps://github.com/tadata-org/fastapi_mcp\n\n---------------------------------------------------------------------------------------\n\n\nhttps://lmstudio.ai/\nhttps://lmstudio.ai/models\nhttps://lmstudio.ai/models/qwen/qwen3-32b\nhttps://lmstudio.ai/models/google/gemma-3n-e4b\nhttps://lmstudio.ai/models/deepseek/deepseek-r1-0528-qwen3-8b\nhttps://lmstudio.ai/models/microsoft/phi-4-mini-reasoning\nhttps://lmstudio.ai/models/qwen/qwen3-4b\nhttps://lmstudio.ai/models/qwen/qwen3-1.7b\nhttps://lmstudio.ai/models/qwen/qwen3-8b\nhttps://lmstudio.ai/models/google/gemma-3-4b\nhttps://lmstudio.ai/models/qwen/qwen2.5-vl-7b\nhttps://lmstudio.ai/models/google/gemma-2-9b\nhttps://lmstudio.ai/models/mistralai/mistral-7b-instruct-v0.3\n\nhttps://pinokio.co/\nhttps://github.com/pinokiofactory/comfy\nhttps://github.com/pinokiofactory/open-webui\nhttps://github.com/pinokiofactory/ditto\nhttps://github.com/pinokiofactory/diffusers-image-fill\nhttps://github.com/pinokiofactory/flux-webui\nhttps://github.com/pinokiofactory/autogpt\nhttps://github.com/pinokiofactory/stableaudio\nhttps://github.com/cocktailpeanutlabs/customnet\nhttps://github.com/cocktailpeanutlabs/spright\nhttps://github.com/cocktailpeanutlabs/chatbot-ollama\nhttps://github.com/cocktailpeanutlabs/remove-video-bg\nhttps://github.com/cocktailpeanutlabs/automatic1111\nhttps://github.com/SUP3RMASS1VE/Higgs-Audio-Text-to-Speech-Pinokio\nhttps://github.com/6Morpheus6/Fooocus-API\nhttps://github.com/PierrunoYT/chatterbox-tts-app\nhttps://github.com/SUP3RMASS1VE/Fish-Speech\n\nhttps://www.localscore.ai/\nhttps://www.localscore.ai/model/1\n\n------------------------------------------------------\n\nhttps://anythingllm.com/desktop\nhttps://anythingllm.com/\nhttps://www.langchain.com/\nhttps://www.llamaindex.ai/\nhttps://docs.langchain.com/use-these-docs\nhttps://www.productcompass.pm/p/the-ultimate-guide-to-n8n-for-pms\n\n------------------------------------------------------\n\n####################################################\nobsidian AI\n####################################################\n\nhttps://obsidian.md/\nhttps://obsidian.md/download\n",
      "filePath": "ai_tools_cpu/ai_local/ai_local_pc.txt",
      "isTxtDoc": true,
      "docMeta": {
        "sectionsCount": 22,
        "commandsCount": 61,
        "linksCount": 234,
        "modelsCount": 31
      },
      "structuredSections": [
        {
          "title": "ollama Llama Gemma",
          "raw": "https://www.youtube.com/watch?v=DYhC7nFRL5I\nhttps://ollama.com/download\nhttps://ollama.com/library/dolphin-llama3\nhttps://www.llama.com/\nhttps://www.llama.com/docs/model-cards-and-prompt-formats/llama3_3/\nhttps://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md\nhttps://huggingface.co/meta-llama/Llama-3.3-70B-Instruct\nhttps://github.com/ollama\nhttps://ollama.com/library\nhttps://mistral.ai/news/mixtral-of-experts/\nhttps://erichartford.com/uncensored-models\nhttps://github.com/ollama/ollama\n\ncurl -fsSL https://ollama.com/install.sh | sh\nollama serve\nollama pull llama3.1:latest\nollama list\nollama run llama3.1:latest\nollama run gemma:2b\n\nsudo docker run -d -p 3000:8080 --gpus=all -v ollama:/root/.ollama -v open-webui:/app/backend/data -name open-webui -restart always ghcr.io/open-webui/open-webui:ollama\n\n\nmistral\nhttps://mistral.ai/news/mixtral-of-experts/\n\n\n\n\ndolphin-llama\nhttps://ollama.com/hillct/dolphin-llama-3.1\nhttps://huggingface.co/cognitivecomputations/dolphin-2.9.4-llama3.1-8b\nhttps://www.promptlayer.com/models/dolphin-294-llama31-8b-3ac7\nhttps://ollama.com/CognitiveComputations/dolphin-llama3.1:latest/blobs/c4e04968e3ca\nhttps://huggingface.co/llmware/dolphin-2.9.4-llama3.1-8b-ov\nhttps://github.com/ggerganov/llama.cpp/issues/8895\n\nollama pull rjmalagon/dolphin-2.9.4-llama3.1-8b:q8_0\n\n\n\ncpu\nollama run llama2:13b\nollama run llama3:8b\nollama run mistral:7b\nollama run gemma2:9b\nollama run llava:9b\nollama run phi3:3.8b\nollama run gwen2:7b",
          "commands": [
            "curl -fsSL https://ollama.com/install.sh | sh",
            "ollama serve",
            "ollama pull llama3.1:latest",
            "ollama list",
            "ollama run llama3.1:latest",
            "ollama run gemma:2b",
            "sudo docker run -d -p 3000:8080 --gpus=all -v ollama:/root/.ollama -v open-webui:/app/backend/data -name open-webui -restart always ghcr.io/open-webui/open-webui:ollama",
            "ollama pull rjmalagon/dolphin-2.9.4-llama3.1-8b:q8_0",
            "ollama run llama2:13b",
            "ollama run llama3:8b",
            "ollama run mistral:7b",
            "ollama run gemma2:9b",
            "ollama run llava:9b",
            "ollama run phi3:3.8b",
            "ollama run gwen2:7b"
          ],
          "links": [
            "https://www.youtube.com/watch?v=DYhC7nFRL5I",
            "https://ollama.com/download",
            "https://ollama.com/library/dolphin-llama3",
            "https://www.llama.com/",
            "https://www.llama.com/docs/model-cards-and-prompt-formats/llama3_3/",
            "https://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md",
            "https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct",
            "https://github.com/ollama",
            "https://ollama.com/library",
            "https://mistral.ai/news/mixtral-of-experts/",
            "https://erichartford.com/uncensored-models",
            "https://github.com/ollama/ollama",
            "https://mistral.ai/news/mixtral-of-experts/",
            "https://ollama.com/hillct/dolphin-llama-3.1",
            "https://huggingface.co/cognitivecomputations/dolphin-2.9.4-llama3.1-8b",
            "https://www.promptlayer.com/models/dolphin-294-llama31-8b-3ac7",
            "https://ollama.com/CognitiveComputations/dolphin-llama3.1:latest/blobs/c4e04968e3ca",
            "https://huggingface.co/llmware/dolphin-2.9.4-llama3.1-8b-ov",
            "https://github.com/ggerganov/llama.cpp/issues/8895"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "Download and run Ollama",
          "raw": "https://ollama.com/download\nhttps://hub.docker.com/r/ollama/ollama\nhttps://github.com/ollama/ollama\n\ndocker pull ollama/ollama\n\n# CPU only\ndocker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama\n# Start the container\ndocker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama\n# Run model locally, Now you can run a model:\ndocker exec -it ollama ollama run llama3\n\nhttps://github.com/ollama/ollama/blob/main/docs/linux.md\n# Install\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# Manual install\ncurl -L https://ollama.com/download/ollama-linux-amd64.tgz -o ollama-linux-amd64.tgz\nsudo tar -C /usr -xzf ollama-linux-amd64.tgz\n\nollama serve\nollama -v\n\nsudo systemctl start ollama\nsudo systemctl status ollama\n\nollama run deepseek-r1\nsolve for x:2x + 10 = 0\n\nhttps://ollama.com/library\nhttps://ollama.com/library/deepseek-r1\t\t5gb\nhttps://ollama.com/library/llama3.3\t\t    43gb\nhttps://ollama.com/library/llama3.2\t\t    2gb\nhttps://ollama.com/library/llama3.1\t\t    5gb\nhttps://ollama.com/library/llama3\t\t    5gb\nhttps://ollama.com/library/qwen\t\t\t    2gb\nhttps://ollama.com/library/qwen2\t\t    4gb\nhttps://ollama.com/library/qwen2.5\t\t    5gb\nhttps://ollama.com/library/phi3\t\t\t    2gb\nhttps://ollama.com/library/llama2\t\t    4gb\nhttps://ollama.com/library/gemma2\t\t    5gb\nhttps://ollama.com/library/qwen2.5-coder\t5gb\nhttps://ollama.com/library/tinyllama\t\t600mb\nhttps://ollama.com/library/codegemma\t\t5gb\nhttps://ollama.com/library/deepseek-coder\t800mb\nhttps://ollama.com/library/orca-mini\t\t2gb\nhttps://ollama.com/library/starcoder\t\t2gb\nhttps://ollama.com/library/stable-code\t\t2gb\nhttps://ollama.com/library/tinydolphin\t\t600mb\nhttps://ollama.com/library/qwen2-math\t\t4gb\nhttps://ollama.com/library/sqlcoder\t\t    4gb\nhttps://ollama.com/library/dolphin-phi\t\t2gb\nhttps://ollama.com/library/granite3-dense\t2gb\nhttps://ollama.com/library/granite3.1-dense\t5gb\nhttps://ollama.com/library/dolphin3\t\t    5gb\nhttps://ollama.com/library/smallthinker\t\t3gb\nhttps://ollama.com/library/reader-lm\t\t1gb\nhttps://ollama.com/library/falcon3\t\t    4gb\nhttps://ollama.com/library/granite-embedding    63mb\nhttps://ollama.com/library/granite3-guardian   \t3gb\nhttps://ollama.com/library/sailor2  \t\t5gb\n\nollama run deepseek-r1\nollama run gemma2\nollama run qwen\nollama run qwen tinyllama",
          "commands": [
            "docker pull ollama/ollama",
            "docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama",
            "docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama",
            "docker exec -it ollama ollama run llama3",
            "curl -fsSL https://ollama.com/install.sh | sh",
            "curl -L https://ollama.com/download/ollama-linux-amd64.tgz -o ollama-linux-amd64.tgz",
            "sudo tar -C /usr -xzf ollama-linux-amd64.tgz",
            "ollama serve",
            "ollama -v",
            "sudo systemctl start ollama",
            "sudo systemctl status ollama",
            "ollama run deepseek-r1",
            "solve for x:2x + 10 = 0",
            "ollama run deepseek-r1",
            "ollama run gemma2",
            "ollama run qwen",
            "ollama run qwen tinyllama"
          ],
          "links": [
            "https://ollama.com/download",
            "https://hub.docker.com/r/ollama/ollama",
            "https://github.com/ollama/ollama",
            "https://github.com/ollama/ollama/blob/main/docs/linux.md",
            "https://ollama.com/library"
          ],
          "models": [
            {
              "name": "deepseek-r1",
              "size": "5GB",
              "url": "https://ollama.com/library/deepseek-r1"
            },
            {
              "name": "llama3.3",
              "size": "43GB",
              "url": "https://ollama.com/library/llama3.3"
            },
            {
              "name": "llama3.2",
              "size": "2GB",
              "url": "https://ollama.com/library/llama3.2"
            },
            {
              "name": "llama3.1",
              "size": "5GB",
              "url": "https://ollama.com/library/llama3.1"
            },
            {
              "name": "llama3",
              "size": "5GB",
              "url": "https://ollama.com/library/llama3"
            },
            {
              "name": "qwen",
              "size": "2GB",
              "url": "https://ollama.com/library/qwen"
            },
            {
              "name": "qwen2",
              "size": "4GB",
              "url": "https://ollama.com/library/qwen2"
            },
            {
              "name": "qwen2.5",
              "size": "5GB",
              "url": "https://ollama.com/library/qwen2.5"
            },
            {
              "name": "phi3",
              "size": "2GB",
              "url": "https://ollama.com/library/phi3"
            },
            {
              "name": "llama2",
              "size": "4GB",
              "url": "https://ollama.com/library/llama2"
            },
            {
              "name": "gemma2",
              "size": "5GB",
              "url": "https://ollama.com/library/gemma2"
            },
            {
              "name": "qwen2.5-coder",
              "size": "5GB",
              "url": "https://ollama.com/library/qwen2.5-coder"
            },
            {
              "name": "tinyllama",
              "size": "600MB",
              "url": "https://ollama.com/library/tinyllama"
            },
            {
              "name": "codegemma",
              "size": "5GB",
              "url": "https://ollama.com/library/codegemma"
            },
            {
              "name": "deepseek-coder",
              "size": "800MB",
              "url": "https://ollama.com/library/deepseek-coder"
            },
            {
              "name": "orca-mini",
              "size": "2GB",
              "url": "https://ollama.com/library/orca-mini"
            },
            {
              "name": "starcoder",
              "size": "2GB",
              "url": "https://ollama.com/library/starcoder"
            },
            {
              "name": "stable-code",
              "size": "2GB",
              "url": "https://ollama.com/library/stable-code"
            },
            {
              "name": "tinydolphin",
              "size": "600MB",
              "url": "https://ollama.com/library/tinydolphin"
            },
            {
              "name": "qwen2-math",
              "size": "4GB",
              "url": "https://ollama.com/library/qwen2-math"
            },
            {
              "name": "sqlcoder",
              "size": "4GB",
              "url": "https://ollama.com/library/sqlcoder"
            },
            {
              "name": "dolphin-phi",
              "size": "2GB",
              "url": "https://ollama.com/library/dolphin-phi"
            },
            {
              "name": "granite3-dense",
              "size": "2GB",
              "url": "https://ollama.com/library/granite3-dense"
            },
            {
              "name": "granite3.1-dense",
              "size": "5GB",
              "url": "https://ollama.com/library/granite3.1-dense"
            },
            {
              "name": "dolphin3",
              "size": "5GB",
              "url": "https://ollama.com/library/dolphin3"
            },
            {
              "name": "smallthinker",
              "size": "3GB",
              "url": "https://ollama.com/library/smallthinker"
            },
            {
              "name": "reader-lm",
              "size": "1GB",
              "url": "https://ollama.com/library/reader-lm"
            },
            {
              "name": "falcon3",
              "size": "4GB",
              "url": "https://ollama.com/library/falcon3"
            },
            {
              "name": "granite-embedding",
              "size": "63MB",
              "url": "https://ollama.com/library/granite-embedding"
            },
            {
              "name": "granite3-guardian",
              "size": "3GB",
              "url": "https://ollama.com/library/granite3-guardian"
            },
            {
              "name": "sailor2",
              "size": "5GB",
              "url": "https://ollama.com/library/sailor2"
            }
          ],
          "notes": [
            "CPU only",
            "Start the container",
            "Run model locally, Now you can run a model:",
            "Install",
            "Manual install"
          ]
        },
        {
          "title": "LM Studio",
          "raw": "https://www.youtube.com/watch?v=KtSdNwVkpWc\n\nhttps://lmstudio.ai/\nLM_Studio-0.3.5.AppImage\nhttps://lmstudio.ai/docs\nhttps://lmstudio.ai/download?os=win32",
          "commands": [],
          "links": [
            "https://www.youtube.com/watch?v=KtSdNwVkpWc",
            "https://lmstudio.ai/",
            "https://lmstudio.ai/docs",
            "https://lmstudio.ai/download?os=win32"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "Open WebUI Channels : v0.5.3 Complete Guide",
          "raw": "https://www.youtube.com/watch?v=pfxxZ7rQUJg\n\ndocker run -d -p 3000:8080 --env ENABLE_CHANNELS=true --env ENABLE_ADMIN_CHAT_ACCESS=true --env BYPASS_MODEL_ACCESS_CONTROL=true -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main",
          "commands": [
            "docker run -d -p 3000:8080 --env ENABLE_CHANNELS=true --env ENABLE_ADMIN_CHAT_ACCESS=true --env BYPASS_MODEL_ACCESS_CONTROL=true -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main"
          ],
          "links": [
            "https://www.youtube.com/watch?v=pfxxZ7rQUJg"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "Desktop LLMs",
          "raw": "https://anythingllm.com/desktop\nhttps://docs.anythingllm.com/installation-desktop/linux#install-using-the-installer-script\n\n\n\nhttps://github.com/ggml-org/llama.cpp\nhttps://docs.servicestack.net/ai-server/llama-server#docker-compose\n\ndocker run -p 8080:8080 -v /path/to/models:/models --gpus all \\\n    ghcr.io/ggml-org/llama.cpp:server-cuda -m models/phi-4.Q4_K_M.gguf \\\n    -c 512 --host 0.0.0.0 --port 8080 --n-gpu-layers 999\n    \nllama-server -m model.gguf http://localhost:8080\n\nhttps://lmstudio.ai/\nhttps://claraverse.space/\n\nhttps://zed.dev/\nhttps://zed.dev/download\n\nhttps://docs.openwebui.com/\n\nhttps://github.com/Mainframework/HugstonOne\n\nhttps://www.jan.ai/download\n\nhttps://www.cherry-ai.com/\nhttps://www.cherry-ai.com/download\n\n\nhttps://anythingllm.com/desktop\nhttps://docs.anythingllm.com/installation-desktop/linux#install-using-the-installer-script\n\n\n./Cherry-Studio-1.7.19-x86_64.AppImage --no-sandbox\n./Jan_0.7.7_amd64.AppImage\n./LM-Studio-0.4.5-2-x64.AppImage --no-sandbox",
          "commands": [
            "docker run -p 8080:8080 -v /path/to/models:/models --gpus all \\"
          ],
          "links": [
            "https://anythingllm.com/desktop",
            "https://docs.anythingllm.com/installation-desktop/linux#install-using-the-installer-script",
            "https://github.com/ggml-org/llama.cpp",
            "https://docs.servicestack.net/ai-server/llama-server#docker-compose",
            "https://lmstudio.ai/",
            "https://claraverse.space/",
            "https://zed.dev/",
            "https://zed.dev/download",
            "https://docs.openwebui.com/",
            "https://github.com/Mainframework/HugstonOne",
            "https://www.jan.ai/download",
            "https://www.cherry-ai.com/",
            "https://www.cherry-ai.com/download",
            "https://anythingllm.com/desktop",
            "https://docs.anythingllm.com/installation-desktop/linux#install-using-the-installer-script"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "Run LLMs locally - 5 Must-Know Frameworks",
          "raw": "https://www.youtube.com/watch?v=5WCvGyPpWwg\nOllama\nGPT4All\nPrivateGPT\nllama.cpp\nLangChain",
          "commands": [],
          "links": [
            "https://www.youtube.com/watch?v=5WCvGyPpWwg"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "Best ChatGPT Alternatives for Everyday Use",
          "raw": "https://www.youtube.com/watch?v=wwcneSVMK-A\n\nhttps://www.meta.ai/\nhttps://pi.ai/\nhttps://copilot.microsoft.com/\nhttps://www.phind.com/search\nhttps://huggingface.co/cognitivecompu...\nhttps://chat.mistral.ai/\nhttps://poe.com/\nhttps://gemini.google.com/\nhttps://thegigabrain.com/\nhttps://blogs.microsoft.com/blog/2023...\nhttps://aistudio.google.com/app\nhttps://chatgpt.com/\nhttps://claude.ai/\nhttps://www.perplexity.ai/\n\n\nhttps://character.ai/\nhttps://www.joyland.ai/",
          "commands": [],
          "links": [
            "https://www.youtube.com/watch?v=wwcneSVMK-A",
            "https://www.meta.ai/",
            "https://pi.ai/",
            "https://copilot.microsoft.com/",
            "https://www.phind.com/search",
            "https://huggingface.co/cognitivecompu...",
            "https://chat.mistral.ai/",
            "https://poe.com/",
            "https://gemini.google.com/",
            "https://thegigabrain.com/",
            "https://blogs.microsoft.com/blog/2023...",
            "https://aistudio.google.com/app",
            "https://chatgpt.com/",
            "https://claude.ai/",
            "https://www.perplexity.ai/",
            "https://character.ai/",
            "https://www.joyland.ai/"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "The Self-hosted AI Starter Kit",
          "raw": "https://github.com/n8n-io/self-hosted-ai-starter-kit\nhttps://docs.n8n.io/hosting/starter-kits/ai-starter-kit/\nhttps://github.com/n8n-io/self-hosted-ai-starter-kit/blob/main/docker-compose.yml\nhttps://hub.docker.com/r/localai/localai\nhttps://hub.docker.com/r/elestio/flowiseai\nhttps://community.n8n.io/c/tutorials/28\n\nhttps://github.com/coleam00/ai-agents-masterclass/tree/main/local-ai-packaged\nhttps://github.com/n8n-io/self-hosted-ai-starter-kit",
          "commands": [],
          "links": [
            "https://github.com/n8n-io/self-hosted-ai-starter-kit",
            "https://docs.n8n.io/hosting/starter-kits/ai-starter-kit/",
            "https://github.com/n8n-io/self-hosted-ai-starter-kit/blob/main/docker-compose.yml",
            "https://hub.docker.com/r/localai/localai",
            "https://hub.docker.com/r/elestio/flowiseai",
            "https://community.n8n.io/c/tutorials/28",
            "https://github.com/coleam00/ai-agents-masterclass/tree/main/local-ai-packaged",
            "https://github.com/n8n-io/self-hosted-ai-starter-kit"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "LLM Everywhere: Docker for Local and Hugging Face Hosting",
          "raw": "https://hub.docker.com/\nhttps://www.docker.com/blog/llm-docker-for-local-and-hugging-face-hosting/\nhttps://hub.docker.com/r/ollama/ollama\n\nhttps://hub.docker.com/r/pytorch/pytorch\nhttps://hub.docker.com/r/tensorflow/tensorflow",
          "commands": [],
          "links": [
            "https://hub.docker.com/",
            "https://www.docker.com/blog/llm-docker-for-local-and-hugging-face-hosting/",
            "https://hub.docker.com/r/ollama/ollama",
            "https://hub.docker.com/r/pytorch/pytorch",
            "https://hub.docker.com/r/tensorflow/tensorflow"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "Pinokio AI Browser",
          "raw": "https://www.youtube.com/watch?v=A1qzxDxfMZQ\n\nhttps://pinokio.computer/\n\nhttps://pinokio.computer/item?uri=https://github.com/pinokiofactory/MMAudio\nhttps://pinokio.computer/item?uri=https://github.com/pinokiofactory/ai-video-composer\nhttps://pinokio.computer/item?uri=https://github.com/pinokiofactory/comfy\nhttps://pinokio.computer/item?uri=https://github.com/pinokiofactory/open-webui\nhttps://pinokio.computer/item?uri=https://github.com/pinokiofactory/whisper-webui\nhttps://pinokio.computer/item?uri=https://github.com/pinokiofactory/hallo\nhttps://pinokio.computer/item?uri=https://github.com/pinokiofactory/stableaudio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/openvoice2\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/customnet\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/differential-diffusion-ui\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/chatbot-ollama\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/automatic1111\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/sdxl-turbo\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/diffusers-sdxl-turbo\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/svd.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/illusion.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/audio-webui.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/AudioLDM2.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/audiogradio.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/animatediff.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/llamacpp.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/tutorial.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/SUP3RMASS1VE/SD-Next\nhttps://pinokio.computer/item?uri=https://github.com/6Morpheus6/illusion-diffusion-HQ\nhttps://pinokio.computer/item?uri=https://github.com/tazztone/whisper-large-v3",
          "commands": [],
          "links": [
            "https://www.youtube.com/watch?v=A1qzxDxfMZQ",
            "https://pinokio.computer/",
            "https://pinokio.computer/item?uri=https://github.com/pinokiofactory/MMAudio",
            "https://pinokio.computer/item?uri=https://github.com/pinokiofactory/ai-video-composer",
            "https://pinokio.computer/item?uri=https://github.com/pinokiofactory/comfy",
            "https://pinokio.computer/item?uri=https://github.com/pinokiofactory/open-webui",
            "https://pinokio.computer/item?uri=https://github.com/pinokiofactory/whisper-webui",
            "https://pinokio.computer/item?uri=https://github.com/pinokiofactory/hallo",
            "https://pinokio.computer/item?uri=https://github.com/pinokiofactory/stableaudio",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/openvoice2",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/customnet",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/differential-diffusion-ui",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/chatbot-ollama",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/automatic1111",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/sdxl-turbo",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/diffusers-sdxl-turbo",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/svd.pinokio",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/illusion.pinokio",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/audio-webui.pinokio",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/AudioLDM2.pinokio",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/audiogradio.pinokio",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/animatediff.pinokio",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/llamacpp.pinokio",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/tutorial.pinokio",
            "https://pinokio.computer/item?uri=https://github.com/SUP3RMASS1VE/SD-Next",
            "https://pinokio.computer/item?uri=https://github.com/6Morpheus6/illusion-diffusion-HQ",
            "https://pinokio.computer/item?uri=https://github.com/tazztone/whisper-large-v3"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "Pinokio",
          "raw": "https://pinokio.computer/\nhttps://program.pinokio.computer/#/?id=install\nhttps://program.pinokio.computer/#/?id=linux\nhttps://github.com/pinokiocomputer/pinokio/releases/tag/1.3.4\nhttps://github.com/pinokiocomputer/pinokio/releases/download/1.3.4/Pinokio_1.3.4_arm64.deb\n\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/fooocus\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/differential-diffusion-ui\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/open-webui\nhttps://pinokio.computer/item?uri=https://github.com/facefusion/facefusion-pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/magnet\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/automatic1111\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/sdxl-turbo\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/svd.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/audiocraft_plus.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/audio-webui.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/audiogradio.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/tutorial.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/6Morpheus6/pinokio-wiki\nhttps://pinokio.computer/item?uri=https://github.com/facefusion/facefusion-pinokio\nhttps://pinokio.computer/item?uri=https://github.com/Feedjer/stable-diffusion-webui-ux.pinokio\nhttps://pinokio.computer/item?uri=https://github.com/supersonic13/sdxs-pinokio\nhttps://pinokio.computer/item?uri=https://github.com/cocktailpeanut/AudioLDM2.pinokio",
          "commands": [],
          "links": [
            "https://pinokio.computer/",
            "https://program.pinokio.computer/#/?id=install",
            "https://program.pinokio.computer/#/?id=linux",
            "https://github.com/pinokiocomputer/pinokio/releases/tag/1.3.4",
            "https://github.com/pinokiocomputer/pinokio/releases/download/1.3.4/Pinokio_1.3.4_arm64.deb",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/fooocus",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/differential-diffusion-ui",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/open-webui",
            "https://pinokio.computer/item?uri=https://github.com/facefusion/facefusion-pinokio",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/magnet",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanutlabs/automatic1111",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/sdxl-turbo",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/svd.pinokio",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/audiocraft_plus.pinokio",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/audio-webui.pinokio",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/audiogradio.pinokio",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/tutorial.pinokio",
            "https://pinokio.computer/item?uri=https://github.com/6Morpheus6/pinokio-wiki",
            "https://pinokio.computer/item?uri=https://github.com/facefusion/facefusion-pinokio",
            "https://pinokio.computer/item?uri=https://github.com/Feedjer/stable-diffusion-webui-ux.pinokio",
            "https://pinokio.computer/item?uri=https://github.com/supersonic13/sdxs-pinokio",
            "https://pinokio.computer/item?uri=https://github.com/cocktailpeanut/AudioLDM2.pinokio"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "8 AI Tools",
          "raw": "Napkin AI - https://www.napkin.ai/\nNotebookLM - https://notebooklm.google.com/\nPinokio - https://pinokio.computer/\nReplicate - https://replicate.com/\nFlux Dev Lora Trainer - https://replicate.com/ostris/flux-dev...\nSpotter Studio - https://partner.spotterstudio.com/fut...\nGuidde - https://www.guidde.com/\nSuno - https://suno.com/",
          "commands": [],
          "links": [],
          "models": [],
          "notes": []
        },
        {
          "title": "Open NoteBookLM",
          "raw": "https://www.youtube.com/watch?v=M3wue0dw6tw\nhttps://github.com/gabrielchua/open-notebooklm/tree/main\n\ngit clone https://github.com/gabrielchua/open-notebooklm.git\ncd open-notebooklm\n\npython -m venv .venv\nsource .venv/bin/activate\n\npip install -r requirements.txt\n\npython app.py",
          "commands": [
            "git clone https://github.com/gabrielchua/open-notebooklm.git",
            "python -m venv .venv",
            "pip install -r requirements.txt",
            "python app.py"
          ],
          "links": [
            "https://www.youtube.com/watch?v=M3wue0dw6tw",
            "https://github.com/gabrielchua/open-notebooklm/tree/main"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "PodCastfy",
          "raw": "https://www.youtube.com/watch?v=q26rqFg--84\n\nhttps://github.com/souzatharsis/podcastfy\nhttps://github.com/souzatharsis/podcastfy-demo\n\npip install ffmpeg\npip install podcastfy\nSet up your API keys\n\nfrom podcastfy.client import generate_podcast\n\naudio_file = generate_podcast(urls=[\"<url1>\", \"<url2>\"])\npython -m podcastfy.client --url <url1> --url <url2>\n\n\n\n\n#####################################################\n#####################################################\nhttps://scalastic.io/en/mixtral-ollama-llamaindex-llm/\nhttps://peterfalkingham.com/2024/04/26/my-experience-training-a-local-llm-ai-chatbot-on-local-data/\n\nchatDocs\nprivateGPT\nphi-1\nTinyStories\nGPT4All\nOPENAI\nLora\nOllama\nFAST- GPT-LLM-Trainer\n\n\n\n\n\n\nollama run mixtral\nconda create --name mixtral_ollama python=3.11\nconda activate mixtral_ollama\n# llama-index\npip install -r requirements.txt\npython reference_test.py",
          "commands": [
            "pip install ffmpeg",
            "pip install podcastfy",
            "python -m podcastfy.client --url <url1> --url <url2>",
            "ollama run mixtral",
            "pip install -r requirements.txt",
            "python reference_test.py"
          ],
          "links": [
            "https://www.youtube.com/watch?v=q26rqFg--84",
            "https://github.com/souzatharsis/podcastfy",
            "https://github.com/souzatharsis/podcastfy-demo",
            "https://scalastic.io/en/mixtral-ollama-llamaindex-llm/",
            "https://peterfalkingham.com/2024/04/26/my-experience-training-a-local-llm-ai-chatbot-on-local-data/"
          ],
          "models": [],
          "notes": [
            "",
            "",
            "llama-index"
          ]
        },
        {
          "title": "FemtoGPT",
          "raw": "https://www.youtube.com/watch?v=jEyPQUyNhD0\nhttps://github.com/keyvank/femtoGPT\nhttps://github.com/cthiriet/femtoGPT\nhttps://docs.rs/femto-gpt/latest/femto_gpt/\nhttps://crates.io/crates/femto-gpt/reverse_dependencies",
          "commands": [],
          "links": [
            "https://www.youtube.com/watch?v=jEyPQUyNhD0",
            "https://github.com/keyvank/femtoGPT",
            "https://github.com/cthiriet/femtoGPT",
            "https://docs.rs/femto-gpt/latest/femto_gpt/",
            "https://crates.io/crates/femto-gpt/reverse_dependencies"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "LLMs locally",
          "raw": "pip install llm\nllm install llm-gpt4all\nllm -m the-model-name \"Your query\"\nllm -m ggml-model-gpt4all-falcon-q4_0 \"Tell me a joke about computer programming\"\nllm aliases set falcon ggml-model-gpt4all-falcon-q4_0\n\n\nhttps://github.com/ollama/ollama\nhttps://scalastic.io/en/mixtral-ollama-llamaindex-llm/\nhttps://www.restack.io/p/llm-orchestration-answer-train-own-data-cat-ai\n\nollama run model-name\n\n\nh2oGPT\nPrivateGPT",
          "commands": [
            "pip install llm",
            "ollama run model-name"
          ],
          "links": [
            "https://github.com/ollama/ollama",
            "https://scalastic.io/en/mixtral-ollama-llamaindex-llm/",
            "https://www.restack.io/p/llm-orchestration-answer-train-own-data-cat-ai"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "llamafile",
          "raw": "https://github.com/Mozilla-Ocho/llamafile\n\ncurl -L https://github.com/Mozilla-Ocho/llamafile/releases/download/0.1/llamafile-server-0.1 > llamafile\nchmod +x llamafile\n\n./llamafile --model ./zephyr-7b-alpha.Q4_0.gguf\nhttp://127.0.0.1:8080.\n\n GitHub repository: mistral-7b-instruct, llava-v1.5-7b-server, or wizardcoder-python-13b.",
          "commands": [
            "curl -L https://github.com/Mozilla-Ocho/llamafile/releases/download/0.1/llamafile-server-0.1 > llamafile"
          ],
          "links": [
            "https://github.com/Mozilla-Ocho/llamafile",
            "http://127.0.0.1:8080."
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "LocalGPT",
          "raw": "https://github.com/PromtEngineer/localGPT\nhttps://www.youtube.com/watch?v=MlyoObdIHyo\n\nLM Studio\nhttps://lmstudio.ai/\nhttps://huggingface.co/models\nhttps://www.infoworld.com/article/2338922/5-easy-ways-to-run-an-llm-locally.html\nhttps://huggingface.co/docs/trl/en/learning_tools",
          "commands": [],
          "links": [
            "https://github.com/PromtEngineer/localGPT",
            "https://www.youtube.com/watch?v=MlyoObdIHyo",
            "https://lmstudio.ai/",
            "https://huggingface.co/models",
            "https://www.infoworld.com/article/2338922/5-easy-ways-to-run-an-llm-locally.html",
            "https://huggingface.co/docs/trl/en/learning_tools"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "LLMs can be used to label data and support analyses.",
          "raw": "https://github.com/thu-vu92/local-llms-analyse-finance#\nhttps://www.youtube.com/watch?v=h_GTxRFYETY\n\n\n\nText generation web UI\nhttps://github.com/oobabooga/text-generation-webui\n\nHow to install\nClone or download the repository.\nRun the script that matches your OS: start_linux.sh, start_windows.bat, start_macos.sh, or start_wsl.bat.\nSelect your GPU vendor when asked.\nOnce the installation ends, browse to http://localhost:7860.\nHave fun!\n\nComfyUI-HunyuanVideoWrapper\nhttps://github.com/kijai/ComfyUI-HunyuanVideoWrapper",
          "commands": [],
          "links": [
            "https://github.com/thu-vu92/local-llms-analyse-finance#",
            "https://www.youtube.com/watch?v=h_GTxRFYETY",
            "https://github.com/oobabooga/text-generation-webui",
            "https://github.com/kijai/ComfyUI-HunyuanVideoWrapper"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "deepseek",
          "raw": "ollama run deepseek-coder \t# 1.3 billion parameter model\nollama run deepseek-coder:6.7b\t# 6.7 billion parameter model\nollama run deepseek-r1:1.5b\t# DeepSeek-R1-Distill-Qwen-1.5B\nollama run deepseek-r1:7b\t# DeepSeek-R1-Distill-Qwen-7B\nollama run deepseek-r1:8b\n\nhttps://ollama.com/library/deepseek-coder\nhttps://ollama.com/library/deepseek-r1\nhttps://ollama.com/download\n\n\nAPI\nExample using curl:\n\ncurl -X POST http://localhost:11434/api/generate -d '{\n  \"model\": \"deepseek-coder\",\n  \"prompt\":\"Why is the sky blue?\"\n }'\n\ncurl -fsSL https://ollama.com/install.sh | sh\nollama run deepseek-r1:1.5b\n\ndocker run -d -p 9783:8080 -v open-webui:/app/backend/data --name open-webui ghcr.io/open-webui/open-webui:main\n\nhttp://localhost:9783/",
          "commands": [
            "ollama run deepseek-coder \t# 1.3 billion parameter model",
            "ollama run deepseek-coder:6.7b\t# 6.7 billion parameter model",
            "ollama run deepseek-r1:1.5b\t# DeepSeek-R1-Distill-Qwen-1.5B",
            "ollama run deepseek-r1:7b\t# DeepSeek-R1-Distill-Qwen-7B",
            "ollama run deepseek-r1:8b",
            "curl -X POST http://localhost:11434/api/generate -d '{",
            "curl -fsSL https://ollama.com/install.sh | sh",
            "ollama run deepseek-r1:1.5b",
            "docker run -d -p 9783:8080 -v open-webui:/app/backend/data --name open-webui ghcr.io/open-webui/open-webui:main"
          ],
          "links": [
            "https://ollama.com/library/deepseek-coder",
            "https://ollama.com/library/deepseek-r1",
            "https://ollama.com/download",
            "http://localhost:9783/"
          ],
          "models": [],
          "notes": []
        },
        {
          "title": "ollama",
          "raw": "https://www.reddit.com/r/ollama/comments/1ir69xk/seeking_a_fast_local_llm_solution_using_only_cpu/\nhttps://ollama.com/library/llama2:7b-chat-q4_0\nhttps://huggingface.co/NousResearch/Hermes-3-Llama-3.1-8B\nhttps://huggingface.co/NousResearch/DeepHermes-3-Llama-3-8B-Preview\nhttps://huggingface.co/meta-llama/Llama-3.2-11B-Vision\nhttps://github.com/shinhyo/OllamaTalk\n\n\n# first build it:\ngit clone --depth 1 --branch v0.7.2 https://github.com/vllm-project/vllm.git && \\\ncd vllm && \\\nsudo docker build -f Dockerfile.cpu -t vllm-cpu-env --shm-size=4g . && \\\n# then run the inference:\ndocker run -it --rm --network=host \\\n  vllm-cpu-env \\\n  --model your-huggingface-model-name \\ # adapt this!\n  --served-model-name my-api-model-name \\ # optional: what name should be used in the API\n  --port 8000 \\ # port of the API\n  --load-format safetensors # or whatever your model is\n\n\nllm models working on cpu\nhttps://huggingface.co/spaces/Nymbo/Hermes-3-Llama-3.1-8B\n\nSeveral large language models (LLMs) have been developed or optimized to run on CPUs, although they may not be as performant as their GPU-accelerated counterparts. Here are a few notable examples:\n\nBLOOM (BigScience Large Open-science Open-access Multilingual) - Developed by the BigScience consortium, this 17-billion parameter model can run on CPUs.\n\nPaLM (Pathways Language Model) - Developed by Google, this 540-billion parameter model has been fine-tuned to run efficiently on CPUs.\n\nOPT (Optimus) - Developed by Meta AI, this 125-billion parameter model is designed to run on CPUs and has shown strong performance on various natural language tasks.\n\nGLaM (Generalist Language Model) - Developed by UC Berkeley and Stanford, this 352-billion parameter model is optimized for CPU inference.\n\nCTRL (Causal Transformer Language model) - Developed by Microsoft, this 7-billion parameter model is designed to run on CPUs and has been used for various natural language tasks.\n\nCamembert - A French language variant of the BERT model developed by Facebook AI, which can run on CPUs.\n\nDistilm - Developed by DeepMind, this model is designed to run efficiently on CPUs and has been used for various natural language tasks.\n\nKeep in mind that while these models can run on CPUs, they may not achieve the same level of performance as their GPU-accelerated counterparts. The choice of model depends on factors such as the specific task, available computational resources, and desired performance trade-offs.\n\n\n\n\n\n##################################\n\nhttps://github.com/fvciprian/deepseek-r1-ext\nhttps://apxml.com/posts/gpu-requirements-deepseek-r1\nDeepSeek-R1-Distill-Qwen-1.5B\t1.5B\t~3.5 GB\tNVIDIA RTX 3060 12GB or higher\nDeepSeek-R1-Distill-Qwen-1.5B\t1.5B\t~1 GB\tNVIDIA RTX 3050 8GB or higher\n\n---------------------------------------------------------------------------------------\n\nhttps://github.com/microsoft/BitNet\nhttps://huggingface.co/microsoft/bitnet-b1.58-2B-4T\nhttps://huggingface.co/docs/transformers/en/model_doc/bitnet\n\n\n---------------------------------------------------------------------------------------\n\nhttps://github.com/comfyanonymous/ComfyUI\nhttps://github.com/QwenLM/Qwen-Image\nhttps://huggingface.co/spaces/multimodalart/flux-lora-the-explorer\nhttps://huggingface.co/spaces/Heartsync/Qwen-Image-LORA\nhttps://huggingface.co/spaces/multimodalart/Qwen-Image-LoRA-Explorer\nhttps://huggingface.co/spaces/prithivMLmods/Qwen-Image-LoRA-DLC\nhttps://huggingface.co/spaces/multimodalart/Qwen-Image-Fast\nhttps://huggingface.co/Qwen/Qwen-Image\n\n---------------------------------------------------------------------------------------\n\nhttps://github.com/comfyanonymous/ComfyUI\nhttps://github.com/pollinations/pollinations\nhttps://pollinations.ai/\nhttps://stablediffusion.fr/dalle\nhttps://github.com/huggingface/diffusers\nhttps://stabledifffusion.com/\n\n\n---------------------------------------------------------------------------------------\n\n\n\nhttps://h2o.ai/platform/llm-studio/\nhttps://github.com/h2oai/h2o-llmstudio\n\nmkdir -p `pwd`/llmstudio_mnt\nchmod 777 `pwd`/llmstudio_mnt\n\n# make sure to pull latest image if you still have a prior version cached\ndocker pull h2oairelease/h2oai-llmstudio-app:latest\n\n# run the container\ndocker run \\\n    --runtime=nvidia \\\n    --shm-size=64g \\\n    --init \\\n    --rm \\\n    -it \\\n    -u `id -u`:`id -g` \\\n    -p 10101:10101 \\\n    -v `pwd`/llmstudio_mnt:/home/llmstudio/mount \\\n    -v ~/.cache:/home/llmstudio/.cache \\\n    h2oairelease/h2oai-llmstudio-app:latest\n\nNavigate to http://localhost:10101/\n\n\n---------------------------------------------------------------------------------------\n\n\nhttps://github.com/microsoft/ai-agents-for-beginners\nhttps://github.com/transformerlab/transformerlab-app\nhttps://github.com/ghuntley/how-to-build-a-coding-agent\nhttps://github.com/HandsOnLLM/Hands-On-Large-Language-Models\nhttps://github.com/mlabonne/llm-course\nhttps://github.com/afshinea/stanford-cme-295-transformers-large-language-models\n\n---------------------------------------------------------------------------------------\n\n\nhttps://hub.docker.com/r/mcp/postgres\nhttps://hub.docker.com/r/mcp/fetch\nhttps://hub.docker.com/r/mcp/brave-search\nhttps://hub.docker.com/r/mcp/youtube-transcript\nhttps://github.com/tadata-org/fastapi_mcp\n\n---------------------------------------------------------------------------------------\n\n\nhttps://lmstudio.ai/\nhttps://lmstudio.ai/models\nhttps://lmstudio.ai/models/qwen/qwen3-32b\nhttps://lmstudio.ai/models/google/gemma-3n-e4b\nhttps://lmstudio.ai/models/deepseek/deepseek-r1-0528-qwen3-8b\nhttps://lmstudio.ai/models/microsoft/phi-4-mini-reasoning\nhttps://lmstudio.ai/models/qwen/qwen3-4b\nhttps://lmstudio.ai/models/qwen/qwen3-1.7b\nhttps://lmstudio.ai/models/qwen/qwen3-8b\nhttps://lmstudio.ai/models/google/gemma-3-4b\nhttps://lmstudio.ai/models/qwen/qwen2.5-vl-7b\nhttps://lmstudio.ai/models/google/gemma-2-9b\nhttps://lmstudio.ai/models/mistralai/mistral-7b-instruct-v0.3\n\nhttps://pinokio.co/\nhttps://github.com/pinokiofactory/comfy\nhttps://github.com/pinokiofactory/open-webui\nhttps://github.com/pinokiofactory/ditto\nhttps://github.com/pinokiofactory/diffusers-image-fill\nhttps://github.com/pinokiofactory/flux-webui\nhttps://github.com/pinokiofactory/autogpt\nhttps://github.com/pinokiofactory/stableaudio\nhttps://github.com/cocktailpeanutlabs/customnet\nhttps://github.com/cocktailpeanutlabs/spright\nhttps://github.com/cocktailpeanutlabs/chatbot-ollama\nhttps://github.com/cocktailpeanutlabs/remove-video-bg\nhttps://github.com/cocktailpeanutlabs/automatic1111\nhttps://github.com/SUP3RMASS1VE/Higgs-Audio-Text-to-Speech-Pinokio\nhttps://github.com/6Morpheus6/Fooocus-API\nhttps://github.com/PierrunoYT/chatterbox-tts-app\nhttps://github.com/SUP3RMASS1VE/Fish-Speech\n\nhttps://www.localscore.ai/\nhttps://www.localscore.ai/model/1\n\n------------------------------------------------------\n\nhttps://anythingllm.com/desktop\nhttps://anythingllm.com/\nhttps://www.langchain.com/\nhttps://www.llamaindex.ai/\nhttps://docs.langchain.com/use-these-docs\nhttps://www.productcompass.pm/p/the-ultimate-guide-to-n8n-for-pms\n\n------------------------------------------------------",
          "commands": [
            "git clone --depth 1 --branch v0.7.2 https://github.com/vllm-project/vllm.git && \\",
            "sudo docker build -f Dockerfile.cpu -t vllm-cpu-env --shm-size=4g . && \\",
            "docker run -it --rm --network=host \\",
            "docker pull h2oairelease/h2oai-llmstudio-app:latest",
            "docker run \\"
          ],
          "links": [
            "https://www.reddit.com/r/ollama/comments/1ir69xk/seeking_a_fast_local_llm_solution_using_only_cpu/",
            "https://ollama.com/library/llama2:7b-chat-q4_0",
            "https://huggingface.co/NousResearch/Hermes-3-Llama-3.1-8B",
            "https://huggingface.co/NousResearch/DeepHermes-3-Llama-3-8B-Preview",
            "https://huggingface.co/meta-llama/Llama-3.2-11B-Vision",
            "https://github.com/shinhyo/OllamaTalk",
            "https://huggingface.co/spaces/Nymbo/Hermes-3-Llama-3.1-8B",
            "https://github.com/fvciprian/deepseek-r1-ext",
            "https://apxml.com/posts/gpu-requirements-deepseek-r1",
            "https://github.com/microsoft/BitNet",
            "https://huggingface.co/microsoft/bitnet-b1.58-2B-4T",
            "https://huggingface.co/docs/transformers/en/model_doc/bitnet",
            "https://github.com/comfyanonymous/ComfyUI",
            "https://github.com/QwenLM/Qwen-Image",
            "https://huggingface.co/spaces/multimodalart/flux-lora-the-explorer",
            "https://huggingface.co/spaces/Heartsync/Qwen-Image-LORA",
            "https://huggingface.co/spaces/multimodalart/Qwen-Image-LoRA-Explorer",
            "https://huggingface.co/spaces/prithivMLmods/Qwen-Image-LoRA-DLC",
            "https://huggingface.co/spaces/multimodalart/Qwen-Image-Fast",
            "https://huggingface.co/Qwen/Qwen-Image",
            "https://github.com/comfyanonymous/ComfyUI",
            "https://github.com/pollinations/pollinations",
            "https://pollinations.ai/",
            "https://stablediffusion.fr/dalle",
            "https://github.com/huggingface/diffusers",
            "https://stabledifffusion.com/",
            "https://h2o.ai/platform/llm-studio/",
            "https://github.com/h2oai/h2o-llmstudio",
            "https://github.com/microsoft/ai-agents-for-beginners",
            "https://github.com/transformerlab/transformerlab-app",
            "https://github.com/ghuntley/how-to-build-a-coding-agent",
            "https://github.com/HandsOnLLM/Hands-On-Large-Language-Models",
            "https://github.com/mlabonne/llm-course",
            "https://github.com/afshinea/stanford-cme-295-transformers-large-language-models",
            "https://hub.docker.com/r/mcp/postgres",
            "https://hub.docker.com/r/mcp/fetch",
            "https://hub.docker.com/r/mcp/brave-search",
            "https://hub.docker.com/r/mcp/youtube-transcript",
            "https://github.com/tadata-org/fastapi_mcp",
            "https://lmstudio.ai/",
            "https://lmstudio.ai/models",
            "https://lmstudio.ai/models/qwen/qwen3-32b",
            "https://lmstudio.ai/models/google/gemma-3n-e4b",
            "https://lmstudio.ai/models/deepseek/deepseek-r1-0528-qwen3-8b",
            "https://lmstudio.ai/models/microsoft/phi-4-mini-reasoning",
            "https://lmstudio.ai/models/qwen/qwen3-4b",
            "https://lmstudio.ai/models/qwen/qwen3-1.7b",
            "https://lmstudio.ai/models/qwen/qwen3-8b",
            "https://lmstudio.ai/models/google/gemma-3-4b",
            "https://lmstudio.ai/models/qwen/qwen2.5-vl-7b",
            "https://lmstudio.ai/models/google/gemma-2-9b",
            "https://lmstudio.ai/models/mistralai/mistral-7b-instruct-v0.3",
            "https://pinokio.co/",
            "https://github.com/pinokiofactory/comfy",
            "https://github.com/pinokiofactory/open-webui",
            "https://github.com/pinokiofactory/ditto",
            "https://github.com/pinokiofactory/diffusers-image-fill",
            "https://github.com/pinokiofactory/flux-webui",
            "https://github.com/pinokiofactory/autogpt",
            "https://github.com/pinokiofactory/stableaudio",
            "https://github.com/cocktailpeanutlabs/customnet",
            "https://github.com/cocktailpeanutlabs/spright",
            "https://github.com/cocktailpeanutlabs/chatbot-ollama",
            "https://github.com/cocktailpeanutlabs/remove-video-bg",
            "https://github.com/cocktailpeanutlabs/automatic1111",
            "https://github.com/SUP3RMASS1VE/Higgs-Audio-Text-to-Speech-Pinokio",
            "https://github.com/6Morpheus6/Fooocus-API",
            "https://github.com/PierrunoYT/chatterbox-tts-app",
            "https://github.com/SUP3RMASS1VE/Fish-Speech",
            "https://www.localscore.ai/",
            "https://www.localscore.ai/model/1",
            "https://anythingllm.com/desktop",
            "https://anythingllm.com/",
            "https://www.langchain.com/",
            "https://www.llamaindex.ai/",
            "https://docs.langchain.com/use-these-docs",
            "https://www.productcompass.pm/p/the-ultimate-guide-to-n8n-for-pms"
          ],
          "models": [],
          "notes": [
            "first build it:",
            "then run the inference:",
            "",
            "make sure to pull latest image if you still have a prior version cached",
            "run the container"
          ]
        },
        {
          "title": "obsidian AI",
          "raw": "https://obsidian.md/\nhttps://obsidian.md/download",
          "commands": [],
          "links": [
            "https://obsidian.md/",
            "https://obsidian.md/download"
          ],
          "models": [],
          "notes": []
        }
      ]
    },
    {
      "id": "linux-check-repo-file-sizes",
      "title": "Check repo file Sizes",
      "category": "linux",
      "importance": "critical",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para check repo file sizes em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "check repo file sizes"
      ],
      "command": "* find . -name '*' -size +1M -exec ls -lh {} \\; | awk '{ print $9 \": \" $5 }'",
      "fullContent": "~~~~\n* find . -name '*' -size +1M -exec ls -lh {} \\; | awk '{ print $9 \": \" $5 }'\n~~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "media-compress-2x",
      "title": "Compress 2x",
      "category": "media",
      "importance": "critical",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para compress 2x.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "# compress with x265 \nffmpeg -i in.mp4 -c:v libx265 -c:a copy -x265-params pools=2 out2.mp4\n\n# compress with h264 mp3\nffmpeg -i in.mp4 -vcodec h264 -acodec mp3 -b:a 64k  out.mp4\n\n6x speed ultrafast\n2x speed veryfast\nfor i in *.*; do ffmpeg -i $i -vf eq=saturation=0.7 -vcodec h264 -b:v 8000k -acodec ...",
      "fullContent": "```\n# compress with x265 \nffmpeg -i in.mp4 -c:v libx265 -c:a copy -x265-params pools=2 out2.mp4\n\n# compress with h264 mp3\nffmpeg -i in.mp4 -vcodec h264 -acodec mp3 -b:a 64k  out.mp4\n\n6x speed ultrafast\n2x speed veryfast\nfor i in *.*; do ffmpeg -i $i -vf eq=saturation=0.7 -vcodec h264 -b:v 8000k -acodec mp3 -b:a 96k -threads 2 -preset veryfast -tune zerolatency $i.out.mp4; done\n\n\nLinux GPU -  H.265 alias HEVC RADEON 6x\nffmpeg -hwaccel vaapi -hwaccel_output_format vaapi -i in.mp4 -vf 'format=vaapi,hwupload' -c:v hevc_vaapi -qp 32 output.mp4\n\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-concat-merge-join-videos",
      "title": "Concat Merge Join videos",
      "category": "media",
      "importance": "critical",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para concat merge join videos.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "for i in ai_cvid2*.mp4; do echo file $i >> mylist.txt; done  && ffmpeg -f concat -safe 0 -i mylist.txt -c copy output.mp4",
      "fullContent": "```\nfor i in ai_cvid2*.mp4; do echo file $i >> mylist.txt; done  && ffmpeg -f concat -safe 0 -i mylist.txt -c copy output.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "git-config-git-on-new-location",
      "title": "Config Git on new location",
      "category": "git",
      "importance": "critical",
      "type": "cli",
      "icon": "git-branch",
      "description": "Fluxos avançados e comandos de precisão Git para config git on new location.",
      "tags": [
        "git",
        "version-control",
        "github",
        "devops",
        "config git on new location"
      ],
      "command": "- [x] git config -l\n- [x] git config --get user.name\n- [x] git config --get user.email\n- [x] git config --global user.name \"Administrator\"\n- [x] git config --gl",
      "fullContent": "- [x] git config -l\n- [x] git config --get user.name\n- [x] git config --get user.email\n- [x] git config --global user.name \"Administrator\"\n- [x] git config --global user.email \"admin@example.com\"\n- [ ] ...\n-",
      "filePath": "Daily_terminal_Git.md"
    },
    {
      "id": "media-copy-audio-and-compress-video",
      "title": "Copy Audio and compress video",
      "category": "media",
      "importance": "critical",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para copy audio and compress video.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "# https://superuser.com/questions/525928/ffmpeg-keeping-quality-during-conversion\n\n* ffmpeg -i file.mp4 -crf 18 -acodec copy file_compressed.mp4 \n* ffmpeg -i test.avi -c:v libx264 -crf 40 -c:a aac -strict -2 test.mp4",
      "fullContent": "```\n# https://superuser.com/questions/525928/ffmpeg-keeping-quality-during-conversion\n\n* ffmpeg -i file.mp4 -crf 18 -acodec copy file_compressed.mp4 \n* ffmpeg -i test.avi -c:v libx264 -crf 40 -c:a aac -strict -2 test.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-cut-video",
      "title": "Cut Video",
      "category": "media",
      "importance": "critical",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para cut video.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -i movie.mp4 -ss 00:00:03 -t 00:00:08 -async 1 cut.mp4",
      "fullContent": "```\n* ffmpeg -i movie.mp4 -ss 00:00:03 -t 00:00:08 -async 1 cut.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "devops-docker-production-cheatsheet",
      "title": "Docker & Docker Compose: Guia de Produção e Otimização",
      "category": "devops",
      "importance": "critical",
      "type": "cheatsheet",
      "icon": "box",
      "description": "Comandos essenciais de gestão de containers, multi-stage builds, limpeza agressiva de camadas órfãs, redes bridge/overlay e volumes persistentes.",
      "tags": [
        "docker",
        "docker-compose",
        "containers",
        "devops",
        "sysadmin"
      ],
      "command": "docker system prune -a --volumes -f && docker compose up -d --build --remove-orphans",
      "fullContent": "### Docker Production Cheatsheet\n- Limpeza global de containers parados, imagens pendentes e volumes: `docker system prune -a --volumes`\n- Visualizar uso de disco de containers: `docker system df -v`\n- Inspecionar logs em tempo real com timestamp: `docker logs -f --tail 100 --timestamps <container>`\n- Estatísticas de CPU e memória em streaming: `docker stats --no-stream`\n- Multi-stage build para imagens minimalistas (Distroless / Alpine)",
      "filePath": "fullstack/cloud/docker/"
    },
    {
      "id": "ai-local-llm-setup",
      "title": "Execução de Modelos e Agentes LLM Locais em CPU/GPU",
      "category": "ai",
      "importance": "critical",
      "type": "guide",
      "icon": "cpu",
      "description": "Pipeline de execução de modelos abertos e LLMs locais com quantização, Llama.cpp, Ollama e agentes de raciocínio autônomo sem envio de dados externos.",
      "tags": [
        "llm-local",
        "ollama",
        "quantization",
        "llama-cpp",
        "agentes",
        "privacy"
      ],
      "command": "curl -fsSL https://ollama.com/install.sh | sh && ollama run llama3",
      "fullContent": "Configuração para execução local de modelos de linguagem de ponta em hardware acessível (CPU e GPU moderada). Modelos GGUF quantizados (q4_k_m, q8_0) para máxima velocidade e inferência offline.",
      "filePath": "ai_tools_cpu/ai_local/local_agent.txt"
    },
    {
      "id": "linux-find-files-by-date",
      "title": "Find files by date",
      "category": "linux",
      "importance": "critical",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para find files by date em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "find files by date"
      ],
      "command": "find . -type f  -name *.xm\nfind . -maxdepth 5 -type f  -mtime -25 -name *.xm\nfind ~/  -maxdepth 5 -type f  -mtime -25 -name *.xm\nfind ~/  -maxdepth 5 -type f  -mtime -25 -name *.mmpz  -exec ls  {} \\;\nfind ~/  -maxdepth 5 -depth -type f -atime +13 -name *.xm\nfind ~/  -maxdepth 5 -depth -type f -mtime...",
      "fullContent": "~~~~\nfind . -type f  -name *.xm\nfind . -maxdepth 5 -type f  -mtime -25 -name *.xm\nfind ~/  -maxdepth 5 -type f  -mtime -25 -name *.xm\nfind ~/  -maxdepth 5 -type f  -mtime -25 -name *.mmpz  -exec ls  {} \\;\nfind ~/  -maxdepth 5 -depth -type f -atime +13 -name *.xm\nfind ~/  -maxdepth 5 -depth -type f -mtime -13 -name *.xm\nfind ~/ -type f -newermt 2018-02-28 -not -newermt 2018-03-28\nfind ~/ -name *.xm -type f -mtime -25\nfind ~/ -name *.xm -type f -ctime -15\nfind ~/ -type f -newermt 2015-05-16 | xargs ls -l\n~~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-generate-random-pass-ubuntu",
      "title": "Generate Random Pass Ubuntu",
      "category": "linux",
      "importance": "critical",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para generate random pass ubuntu em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "generate random pass ubuntu"
      ],
      "command": "* date +%s | sha256sum | base64 | head -c 24 ; echo \"@%&\";\n* date +%s | sha1sum | base64 | head -c 12; echo \"@%&\";\n\n# gen random number 1 - 300\necho $((RANDOM % 300));",
      "fullContent": "```\n* date +%s | sha256sum | base64 | head -c 24 ; echo \"@%&\";\n* date +%s | sha1sum | base64 | head -c 12; echo \"@%&\";\n\n# gen random number 1 - 300\necho $((RANDOM % 300)); \n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "git-git-revert",
      "title": "Git  revert",
      "category": "git",
      "importance": "critical",
      "type": "cli",
      "icon": "git-branch",
      "description": "Fluxos avançados e comandos de precisão Git para git  revert.",
      "tags": [
        "git",
        "version-control",
        "github",
        "devops",
        "git revert"
      ],
      "command": "git log --oneline\ngit revert 453436346",
      "fullContent": "```\ngit log --oneline\ngit revert 453436346\n```",
      "filePath": "Daily_terminal_Git.md"
    },
    {
      "id": "git-git-worktree",
      "title": "Git Worktree",
      "category": "git",
      "importance": "critical",
      "type": "cli",
      "icon": "git-branch",
      "description": "Fluxos avançados e comandos de precisão Git para git worktree.",
      "tags": [
        "git",
        "version-control",
        "github",
        "devops",
        "git worktree"
      ],
      "command": "https://www.youtube.com/watch?v=s4BTvj1ZVLM\n\ngit worktree add \ngit worktree list \ngit worktree remove \n\ngit worktree add  ../gitlens/main\ncd  ../gitlens/main\ngit status\nvi README.md\ncd  ../../gitlens\ngit status\ngit worktree list \ngit worktree remove  ../gitlens/main",
      "fullContent": "```\nhttps://www.youtube.com/watch?v=s4BTvj1ZVLM\n\ngit worktree add \ngit worktree list \ngit worktree remove \n\ngit worktree add  ../gitlens/main\ncd  ../gitlens/main\ngit status\nvi README.md\ncd  ../../gitlens\ngit status\ngit worktree list \ngit worktree remove  ../gitlens/main\n```",
      "filePath": "Daily_terminal_Git.md"
    },
    {
      "id": "git-git-count-number-of-commits-between-two-",
      "title": "Git count number of commits between two branches",
      "category": "git",
      "importance": "critical",
      "type": "cli",
      "icon": "git-branch",
      "description": "Fluxos avançados e comandos de precisão Git para git count number of commits between two branches.",
      "tags": [
        "git",
        "version-control",
        "github",
        "devops",
        "git count number of commits between two "
      ],
      "command": "git log --oneline mybranch ^master\ngit log --oneline mybranch ^master | wc -l\ngit rev-list --count my-branch ^master\ngit rev-list --count master..my-branch\ngit cherry master | wc -l",
      "fullContent": "```\ngit log --oneline mybranch ^master\ngit log --oneline mybranch ^master | wc -l\ngit rev-list --count my-branch ^master\ngit rev-list --count master..my-branch\ngit cherry master | wc -l\n```",
      "filePath": "Daily_terminal_Git.md"
    },
    {
      "id": "git-git-refresh-the-list-of-remote-branches",
      "title": "Git refresh the list of remote branches",
      "category": "git",
      "importance": "critical",
      "type": "cli",
      "icon": "git-branch",
      "description": "Fluxos avançados e comandos de precisão Git para git refresh the list of remote branches.",
      "tags": [
        "git",
        "version-control",
        "github",
        "devops",
        "git refresh the list of remote branches"
      ],
      "command": "https://stackoverflow.com/questions/36358265/when-does-git-refresh-the-list-of-remote-branches\n\ngit remote update origin --prune\ngit branch -a",
      "fullContent": "```\nhttps://stackoverflow.com/questions/36358265/when-does-git-refresh-the-list-of-remote-branches\n\ngit remote update origin --prune\ngit branch -a\n```",
      "filePath": "Daily_terminal_Git.md"
    },
    {
      "id": "git-git-reset",
      "title": "Git reset",
      "category": "git",
      "importance": "critical",
      "type": "cli",
      "icon": "git-branch",
      "description": "Fluxos avançados e comandos de precisão Git para git reset.",
      "tags": [
        "git",
        "version-control",
        "github",
        "devops",
        "git reset"
      ],
      "command": "git reset --soft HEAD~1\ngit status",
      "fullContent": "```\ngit reset --soft HEAD~1\ngit status\n```",
      "filePath": "Daily_terminal_Git.md"
    },
    {
      "id": "tool-jbs-inspector",
      "title": "JBS (JSON, Base64 & String Inspector)",
      "category": "tools",
      "importance": "critical",
      "type": "tool",
      "icon": "wrench",
      "description": "Canivete suíço para decodificar, validar, codificar Base64, formatar payloads JSON e inspecionar strings de rede em tempo real.",
      "tags": [
        "ferramenta-web",
        "json",
        "base64",
        "inspector",
        "debugging",
        "jwt",
        "live-tool",
        "produtividade"
      ],
      "command": "Abrir ferramenta: fullstack/a_online_tools/jbs.html",
      "fullContent": "Ferramenta Web interativa disponível localmente em fullstack/a_online_tools/jbs.html. Pode ser executada diretamente no navegador sem dependências externas.",
      "filePath": "fullstack/a_online_tools/jbs.html",
      "toolUrl": "fullstack/a_online_tools/jbs.html"
    },
    {
      "id": "linux-free-up-disk-space",
      "title": "Liberação Agressiva de Espaço em Disco no Ubuntu / Debian",
      "category": "linux",
      "importance": "critical",
      "type": "cli",
      "icon": "hard-drive",
      "description": "Procedimento cirúrgico para recuperar dezenas de gigabytes: limpeza de cache APT, remoção de kernels antigos, truncamento de logs do journald e snaps.",
      "tags": [
        "disco",
        "disk-space",
        "ubuntu",
        "apt-get",
        "journalctl",
        "sysadmin"
      ],
      "command": "sudo apt autoremove --purge && sudo journalctl --vacuum-size=100M && sudo apt clean",
      "fullContent": "### Comandos de Liberação de Disco:\n- Limpar cache de pacotes baixados: `sudo apt clean`\n- Remover dependências obsoletas e arquivos de config: `sudo apt autoremove --purge`\n- Limpar logs do sistema retendo no máximo 100MB: `sudo journalctl --vacuum-size=100M`\n- Identificar 10 maiores diretórios na raiz: `sudo du -ahx / | sort -rh | head -n 10`\n- Limpar versões antigas de pacotes Snap: script de remoção de revisões desativadas.",
      "filePath": "linux_howto/config/howto_free_up_space_on_ubuntu.txt"
    },
    {
      "id": "media-loop-repeat-video-3x",
      "title": "Loop Repeat video 3x",
      "category": "media",
      "importance": "critical",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para loop repeat video 3x.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "ffmpeg -stream_loop 3 -i input.mp4 -c copy output.mp4",
      "fullContent": "```\nffmpeg -stream_loop 3 -i input.mp4 -c copy output.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "linux-cpu-memory-monitoring-logs",
      "title": "Monitoramento de Recursos em Tempo Real: CPU, RAM & IO",
      "category": "linux",
      "importance": "critical",
      "type": "cli",
      "icon": "activity",
      "description": "Comandos de diagnóstico rápido de gargalos de hardware: htop com filtros, vmstat 1 para paginação, iostat para lentidão de disco e top ordenado por consumo.",
      "tags": [
        "cpu",
        "ram",
        "memory",
        "performance",
        "htop",
        "iostat",
        "vmstat"
      ],
      "command": "vmstat -SM 1 5 && ps aux --sort=-%mem | head -n 10",
      "fullContent": "### Diagnóstico de Desempenho:\n- Processos que mais consom memória: `ps aux --sort=-%mem | head -n 11`\n- Processos que mais consom CPU: `ps aux --sort=-%cpu | head -n 11`\n- Verificar paginação de swap (si/so): `vmstat -w 2`\n- Estatísticas de leitura/escrita de blocos por segundo: `iostat -xz 1`",
      "filePath": "linux_howto/config/howto_cpu_memory_log.txt"
    },
    {
      "id": "devops-nginx-reverse-proxy-ssl",
      "title": "Nginx: Proxy Reverso de Alta Performance com Cache & SSL",
      "category": "devops",
      "importance": "critical",
      "type": "guide",
      "icon": "shield",
      "description": "Configuração endurecida do Nginx com HTTP/2, Gzip/Brotli, proxy_pass com keepalive, rate limiting contra DoS e headers de segurança A+ no SSL Labs.",
      "tags": [
        "nginx",
        "reverse-proxy",
        "ssl",
        "certbot",
        "security",
        "caching"
      ],
      "command": "sudo nginx -t && sudo systemctl reload nginx",
      "fullContent": "### Nginx Hardened Configuration\n- Proxy pass otimizado com `proxy_http_version 1.1;` e `proxy_set_header Connection \"\";`\n- Headers de segurança: `X-Frame-Options DENY`, `X-Content-Type-Options nosniff`, `Content-Security-Policy`\n- SSL TLSv1.3 com curvas elípticas e certificados Let's Encrypt automatizados com Certbot.",
      "filePath": "fullstack/servers/nginx/"
    },
    {
      "id": "ai-ollama-qwen3-ubuntu",
      "title": "Ollama Qwen 3 no Ubuntu: LLM Desbloqueado em 15 Minutos (6GB RAM / 6 CPU)",
      "category": "ai",
      "importance": "critical",
      "type": "script",
      "icon": "brain",
      "description": "Pipeline de execução ultra-otimizado do Qwen 3 0.6B com Ollama e Docker no Ubuntu, ideal para hardware modesto com 6GB de RAM.",
      "tags": [
        "ollama",
        "qwen3",
        "ubuntu",
        "low-ram",
        "cpu-only",
        "docker",
        "terminal"
      ],
      "command": "ollama run qwen3:0.6b",
      "fullContent": "#############################################\nRun an unlocked LLM on your desktop in 15 minutes - 6GB RAM 6 CPU\n#############################################\n\nsudo apt install curl -y\ncurl -fsSL https://ollama.com/install.sh | sh\n\nollama run qwen3:0.6b\n\nhttps://docs.docker.com/engine/install/linux-postinstall/\n\nsudo apt install docker.io -y\nsudo groupadd docker\nsudo usermod -aG docker $USER\nexec su -l $USER\ndocker run hello-world\n\nollama list\n\ncheck\nhttp://localhost:11434/\nhttp://127.0.0.1:11434/\n\nsystemctl daemon-reload\nsystemctl restart ollama\n\ndocker run -d -p 3000:8080 -e OLLAMA_API_BASE_URL=http://host.docker.internal:11434/api -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main\nOpen your browser and go to: http://localhost:3000\n\nsudo apt install python3-pip\npip install ollama\n\n\n##########################################\ncodellama\n##########################################\n\n\nhttps://ollama.com/library/qwen3:0.6b\nhttps://ollama.com/library/qwen3:1.7b\nhttps://ollama.com/library/qwen3:4b\nhttps://ollama.com/library/qwen3\nhttps://ollama.com/library/qwen2.5\nhttps://ollama.com/library/mistral   4GB\nhttps://ollama.com/library/deepseek-r1:1.5b\nhttps://ollama.com/library/qwen2.5vl:3b\nhttps://ollama.com/library/llama3.1:8b\nhttps://ollama.com/library/qwen2.5:1.5b\nhttps://ollama.com/library/qwen2.5-coder:1.5b\nhttps://ollama.com/library/gemma2:2b\nhttps://ollama.com/library/qwen:1.8b\nhttps://ollama.com/library/codellama:7b\nhttps://ollama.com/library/tinyllama:latest\nhttps://ollama.com/library/deepseek-coder:6.7b\nhttps://ollama.com/library/phi3.5:latest\nhttps://ollama.com/library/phi4-mini:latest\nhttps://ollama.com/library/tinydolphin:latest\nhttps://ollama.com/library/qwen2-math:1.5b\nhttps://ollama.com/library/deepcoder:1.5b\nhttps://ollama.com/library/sqlcoder:7b\nhttps://ollama.com/library/yi-coder:1.5b\nhttps://ollama.com/library/mistrallite:latest\n\n...\n\nhttps://blog.codegpt.co/create-your-own-and-custom-copilot-in-vscode-with-ollama-and-codegpt-736277a60298\n\nhttps://ollama.com/library/codellama\nollama pull codellama\nollama list\nollama run codellama\n\n\nModelfile\n~~~\nFROM codellama\n\n# sets the temperature to 1 [higher is more creative, lower is more coherent]\nPARAMETER temperature 1\n\n# sets the context window size to 1500, this controls how many tokens the LLM can use as context to generate the next token\nPARAMETER num_ctx 1500\n\n# sets a custom system message to specify the behavior of the chat assistant\nSYSTEM You are expert Code Assistant\n~~~\n\n\nollama create codegpt-codellama -f ./Codellama/Modelfile\nollama run codegpt-codellama\n\nCodeGPT extension\nhttps://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt\nhttps://marketplace.visualstudio.com/items?itemName=AnikGhosh.ollama-copilot\n\n#########################################################\ngenerative image\n#########################################################\n\nollama run llava:7b\nollama run llava \"describe this image: ./art.jpg\"\nollama run llava \"tell me what do you see in this picture? ./pic.jpg\"\nollama run llava \"what does the text say? ./wordart.png\"\n\nhttps://www.byteplus.com/en/topic/398500?title=ollama-models-that-can-generate-images-a-comprehensive-guide-to-ai-image-creation\n\n# Install Ollama\ncurl https://ollama.ai/install.sh | sh\n# Pull a vision model\nollama pull llava:13b\n# Verify installation\nollama list\nfrom ollama import generate\n# Generate an image with a text prompt\nimage = generate(\n    model='llava:13b',\n    prompt='A futuristic cityscape at sunset',\n    max_tokens=1024\n)\n\n\nhttps://voipnuggets.com/2024/05/25/open-web-ui-run-local-chat-app-with-image-generation-using-phi4-deepseek-r1-and-stable-diffusion/\n\ndocker --version\nollama --version\nollama pull deepseek-r1\nollama pull phi4\n\n1. pip install virtualenv\n2. python3.10 -m venv stable-diffusion-env\n3. For Bash/Zsh: \nsource stable-diffusion-env/bin/activate\nFor Fish Shell: \nsource stable-diffusion-env/bin/activate.fish\n4. python --version\n\n1. git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui\n2. cd stable-diffusion-webui\n3. ./webui.sh --api --listen\ngit clone git@github.com:open-webui/open-webui.git\n\t\ndocker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -e AUTOMATIC1111_BASE_URL=http://host.docker.internal:7860/ -e ENABLE_IMAGE_GENERATION=True -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main\n\n access the web interface at http://127.0.0.1:3000.\n\n",
      "filePath": "ai_tools_cpu/ai_local/ollama_qwen3_ubuntu1.txt",
      "isTxtDoc": true,
      "docMeta": {
        "sectionsCount": 3,
        "commandsCount": 31,
        "linksCount": 32,
        "modelsCount": 1
      },
      "structuredSections": [
        {
          "title": "Introdução & Links Iniciais",
          "raw": "#############################################\nRun an unlocked LLM on your desktop in 15 minutes - 6GB RAM 6 CPU\n#############################################\n\nsudo apt install curl -y\ncurl -fsSL https://ollama.com/install.sh | sh\n\nollama run qwen3:0.6b\n\nhttps://docs.docker.com/engine/install/linux-postinstall/\n\nsudo apt install docker.io -y\nsudo groupadd docker\nsudo usermod -aG docker $USER\nexec su -l $USER\ndocker run hello-world\n\nollama list\n\ncheck\nhttp://localhost:11434/\nhttp://127.0.0.1:11434/\n\nsystemctl daemon-reload\nsystemctl restart ollama\n\ndocker run -d -p 3000:8080 -e OLLAMA_API_BASE_URL=http://host.docker.internal:11434/api -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main\nOpen your browser and go to: http://localhost:3000\n\nsudo apt install python3-pip\npip install ollama",
          "commands": [
            "sudo apt install curl -y",
            "curl -fsSL https://ollama.com/install.sh | sh",
            "ollama run qwen3:0.6b",
            "sudo apt install docker.io -y",
            "sudo groupadd docker",
            "sudo usermod -aG docker $USER",
            "docker run hello-world",
            "ollama list",
            "systemctl daemon-reload",
            "systemctl restart ollama",
            "docker run -d -p 3000:8080 -e OLLAMA_API_BASE_URL=http://host.docker.internal:11434/api -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main",
            "sudo apt install python3-pip",
            "pip install ollama"
          ],
          "links": [
            "https://docs.docker.com/engine/install/linux-postinstall/",
            "http://localhost:11434/",
            "http://127.0.0.1:11434/"
          ],
          "models": [],
          "notes": [
            "",
            ""
          ]
        },
        {
          "title": "codellama",
          "raw": "https://ollama.com/library/qwen3:0.6b\nhttps://ollama.com/library/qwen3:1.7b\nhttps://ollama.com/library/qwen3:4b\nhttps://ollama.com/library/qwen3\nhttps://ollama.com/library/qwen2.5\nhttps://ollama.com/library/mistral   4GB\nhttps://ollama.com/library/deepseek-r1:1.5b\nhttps://ollama.com/library/qwen2.5vl:3b\nhttps://ollama.com/library/llama3.1:8b\nhttps://ollama.com/library/qwen2.5:1.5b\nhttps://ollama.com/library/qwen2.5-coder:1.5b\nhttps://ollama.com/library/gemma2:2b\nhttps://ollama.com/library/qwen:1.8b\nhttps://ollama.com/library/codellama:7b\nhttps://ollama.com/library/tinyllama:latest\nhttps://ollama.com/library/deepseek-coder:6.7b\nhttps://ollama.com/library/phi3.5:latest\nhttps://ollama.com/library/phi4-mini:latest\nhttps://ollama.com/library/tinydolphin:latest\nhttps://ollama.com/library/qwen2-math:1.5b\nhttps://ollama.com/library/deepcoder:1.5b\nhttps://ollama.com/library/sqlcoder:7b\nhttps://ollama.com/library/yi-coder:1.5b\nhttps://ollama.com/library/mistrallite:latest\n\n...\n\nhttps://blog.codegpt.co/create-your-own-and-custom-copilot-in-vscode-with-ollama-and-codegpt-736277a60298\n\nhttps://ollama.com/library/codellama\nollama pull codellama\nollama list\nollama run codellama\n\n\nModelfile\n~~~\nFROM codellama\n\n# sets the temperature to 1 [higher is more creative, lower is more coherent]\nPARAMETER temperature 1\n\n# sets the context window size to 1500, this controls how many tokens the LLM can use as context to generate the next token\nPARAMETER num_ctx 1500\n\n# sets a custom system message to specify the behavior of the chat assistant\nSYSTEM You are expert Code Assistant\n~~~\n\n\nollama create codegpt-codellama -f ./Codellama/Modelfile\nollama run codegpt-codellama\n\nCodeGPT extension\nhttps://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt\nhttps://marketplace.visualstudio.com/items?itemName=AnikGhosh.ollama-copilot",
          "commands": [
            "ollama pull codellama",
            "ollama list",
            "ollama run codellama",
            "ollama create codegpt-codellama -f ./Codellama/Modelfile",
            "ollama run codegpt-codellama"
          ],
          "links": [
            "https://ollama.com/library/qwen3:0.6b",
            "https://ollama.com/library/qwen3:1.7b",
            "https://ollama.com/library/qwen3:4b",
            "https://ollama.com/library/qwen3",
            "https://ollama.com/library/qwen2.5",
            "https://ollama.com/library/deepseek-r1:1.5b",
            "https://ollama.com/library/qwen2.5vl:3b",
            "https://ollama.com/library/llama3.1:8b",
            "https://ollama.com/library/qwen2.5:1.5b",
            "https://ollama.com/library/qwen2.5-coder:1.5b",
            "https://ollama.com/library/gemma2:2b",
            "https://ollama.com/library/qwen:1.8b",
            "https://ollama.com/library/codellama:7b",
            "https://ollama.com/library/tinyllama:latest",
            "https://ollama.com/library/deepseek-coder:6.7b",
            "https://ollama.com/library/phi3.5:latest",
            "https://ollama.com/library/phi4-mini:latest",
            "https://ollama.com/library/tinydolphin:latest",
            "https://ollama.com/library/qwen2-math:1.5b",
            "https://ollama.com/library/deepcoder:1.5b",
            "https://ollama.com/library/sqlcoder:7b",
            "https://ollama.com/library/yi-coder:1.5b",
            "https://ollama.com/library/mistrallite:latest",
            "https://blog.codegpt.co/create-your-own-and-custom-copilot-in-vscode-with-ollama-and-codegpt-736277a60298",
            "https://ollama.com/library/codellama",
            "https://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt",
            "https://marketplace.visualstudio.com/items?itemName=AnikGhosh.ollama-copilot"
          ],
          "models": [
            {
              "name": "mistral",
              "size": "4GB",
              "url": "https://ollama.com/library/mistral"
            }
          ],
          "notes": [
            "sets the temperature to 1 [higher is more creative, lower is more coherent]",
            "sets the context window size to 1500, this controls how many tokens the LLM can use as context to generate the next token",
            "sets a custom system message to specify the behavior of the chat assistant"
          ]
        },
        {
          "title": "generative image",
          "raw": "ollama run llava:7b\nollama run llava \"describe this image: ./art.jpg\"\nollama run llava \"tell me what do you see in this picture? ./pic.jpg\"\nollama run llava \"what does the text say? ./wordart.png\"\n\nhttps://www.byteplus.com/en/topic/398500?title=ollama-models-that-can-generate-images-a-comprehensive-guide-to-ai-image-creation\n\n# Install Ollama\ncurl https://ollama.ai/install.sh | sh\n# Pull a vision model\nollama pull llava:13b\n# Verify installation\nollama list\nfrom ollama import generate\n# Generate an image with a text prompt\nimage = generate(\n    model='llava:13b',\n    prompt='A futuristic cityscape at sunset',\n    max_tokens=1024\n)\n\n\nhttps://voipnuggets.com/2024/05/25/open-web-ui-run-local-chat-app-with-image-generation-using-phi4-deepseek-r1-and-stable-diffusion/\n\ndocker --version\nollama --version\nollama pull deepseek-r1\nollama pull phi4\n\n1. pip install virtualenv\n2. python3.10 -m venv stable-diffusion-env\n3. For Bash/Zsh: \nsource stable-diffusion-env/bin/activate\nFor Fish Shell: \nsource stable-diffusion-env/bin/activate.fish\n4. python --version\n\n1. git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui\n2. cd stable-diffusion-webui\n3. ./webui.sh --api --listen\ngit clone git@github.com:open-webui/open-webui.git\n\t\ndocker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -e AUTOMATIC1111_BASE_URL=http://host.docker.internal:7860/ -e ENABLE_IMAGE_GENERATION=True -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main\n\n access the web interface at http://127.0.0.1:3000.",
          "commands": [
            "ollama run llava:7b",
            "ollama run llava \"describe this image: ./art.jpg\"",
            "ollama run llava \"tell me what do you see in this picture? ./pic.jpg\"",
            "ollama run llava \"what does the text say? ./wordart.png\"",
            "curl https://ollama.ai/install.sh | sh",
            "ollama pull llava:13b",
            "ollama list",
            "docker --version",
            "ollama --version",
            "ollama pull deepseek-r1",
            "ollama pull phi4",
            "git clone git@github.com:open-webui/open-webui.git",
            "docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -e AUTOMATIC1111_BASE_URL=http://host.docker.internal:7860/ -e ENABLE_IMAGE_GENERATION=True -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main"
          ],
          "links": [
            "https://www.byteplus.com/en/topic/398500?title=ollama-models-that-can-generate-images-a-comprehensive-guide-to-ai-image-creation",
            "https://voipnuggets.com/2024/05/25/open-web-ui-run-local-chat-app-with-image-generation-using-phi4-deepseek-r1-and-stable-diffusion/"
          ],
          "models": [],
          "notes": [
            "Install Ollama",
            "Pull a vision model",
            "Verify installation",
            "Generate an image with a text prompt"
          ]
        }
      ]
    },
    {
      "id": "backend-postgresql-performance-tuning",
      "title": "PostgreSQL: Otimização de Queries, Índices & Backups pg_dump",
      "category": "fullstack",
      "importance": "critical",
      "type": "guide",
      "icon": "database",
      "description": "Diagnóstico de queries lentas com EXPLAIN ANALYZE, índices parciais e BRIN, autovacuum tuning e rotinas de backup seguro com pg_dump e pg_restore.",
      "tags": [
        "postgresql",
        "sql",
        "database",
        "indexing",
        "performance",
        "pgdump"
      ],
      "command": "pg_dump -h localhost -U postgres -F c -b -v -f \"db_backup_$(date +%Y%m%d).dump\" dbname",
      "fullContent": "### PostgreSQL Deep Tuning\n- Identificação de queries sequenciais sem índice via pg_stat_statements\n- Configuração de `shared_buffers`, `work_mem` e `effective_cache_size` baseados em RAM\n- Criação de índices parciais `CREATE INDEX ON orders (status) WHERE status = 'pending';`\n- Restauração paralela: `pg_restore -j 4 -d dbname db_backup.dump`",
      "filePath": "fullstack/databases/postgres/"
    },
    {
      "id": "ai-rag-paper-assistant",
      "title": "RAG-Powered Research Paper Assistant (LangChain + ChromaDB)",
      "category": "ai",
      "importance": "critical",
      "type": "script",
      "icon": "brain",
      "description": "Arquitetura RAG completa usando SentenceTransformers, ChromaDB vetorial persistente, Arxiv tool e LiteLLM para ingestão e consulta de artigos científicos.",
      "tags": [
        "rag",
        "chromadb",
        "langchain",
        "litellm",
        "sentence-transformers",
        "arxiv",
        "python"
      ],
      "command": "pip install streamlit PyPDF2 sentence-transformers chromadb litellm langchain langchain-community",
      "fullContent": "# RAG-Powered Research Paper Assistant\nArquitetura completa de Retrieval-Augmented Generation (RAG):\n- Ingestão de PDFs com PyPDF2\n- Chunking semântico com RecursiveCharacterTextSplitter (chunk_size=500, overlap=50)\n- Vetorização com modelo all-MiniLM-L6-v2 via SentenceTransformer\n- Persistência vetorial em ChromaDB local (PersistentClient)\n- Conexão com ArxivQueryRun para busca acadêmica em tempo real\n- Integração LLM agnóstica via LiteLLM",
      "filePath": "fullstack/python/ai_rag_agent/paper_assistant.txt"
    },
    {
      "id": "linux-rsync-backup-automation",
      "title": "RSYNC: Sincronização Incremental Rápida e Segura com SSH",
      "category": "linux",
      "importance": "critical",
      "type": "cli",
      "icon": "refresh-cw",
      "description": "Transferência eficiente de arquivos com rsync preservando permissões, timestamps, links simbólicos, compressão no túnel SSH e barra de progresso.",
      "tags": [
        "rsync",
        "backup",
        "ssh",
        "sincronização",
        "transferência"
      ],
      "command": "rsync -avzP --delete -e \"ssh -p 22\" /origem/ usuario@remoto:/destino/",
      "fullContent": "### Padrões de RSYNC:\n- Backup incremental com exclusão de arquivos deletados: `rsync -avzP --delete /dados/ /backup/`\n- Testar sincronização sem alterar arquivos (Dry Run): `rsync -avzn --delete /dados/ /backup/`\n- Limitar largura de banda para não sobrecarregar link (ex: 5MB/s): `rsync --bwlimit=5000 -avz /dados/ /backup/`",
      "filePath": "commandlinefu.com/commandlinefu.com_rsync_commands_collection.txt"
    },
    {
      "id": "media-record-screen-webcam-ubuntu-with-mic",
      "title": "Record Screen + Webcam Ubuntu with Mic",
      "category": "media",
      "importance": "critical",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para record screen + webcam ubuntu with mic.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "~~~\nffmpeg  \\\n   -video_size 1920x1080 -framerate 25 -f x11grab -i :0.0 -f alsa -ac 1 -i default \\\n   -f v4l2 -framerate 25 -video_size 480x270 -i /dev/video0 -",
      "fullContent": "~~~\nffmpeg  \\\n   -video_size 1920x1080 -framerate 25 -f x11grab -i :0.0 -f alsa -ac 1 -i default \\\n   -f v4l2 -framerate 25 -video_size 480x270 -i /dev/video0 -f alsa -ac 1 -i hw:CARD=Generic_1,DEV=0  -c:v libx264 -b:v 1600k -preset ultrafast  -x264opts keyint=50 -g 25 -pix_fmt yuv420p  -c:a aac -b:a 128k \\\n    -filter_complex \"[2]scale=160:90[inner];[0][inner]overlay=main_w-overlay_w-10:main_h-overlay_h-10[out]\" -map \"[out]\" -map 3:a \\\n               -y omyvid_$(date +%s).mp4\n\n~~~",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-record-screen-ubuntu",
      "title": "Record Screen Ubuntu",
      "category": "media",
      "importance": "critical",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para record screen ubuntu.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -v warning -an -video_size 1366x768 -framerate 5 -f x11grab -i :0.0 myvid_$(date +%s).mp4*\n* ffmpeg -v warning -video_size 1920x1080 -framerate 5 -f x11grab -i :0.0  myvid_$(date +%s).mov\n* ffmpeg -f x11grab  -follow_mouse centered -show_region 1 -framerate 5 -video_size 4cif -i :0.0 xmvid_...",
      "fullContent": "```\n* ffmpeg -v warning -an -video_size 1366x768 -framerate 5 -f x11grab -i :0.0 myvid_$(date +%s).mp4*\n* ffmpeg -v warning -video_size 1920x1080 -framerate 5 -f x11grab -i :0.0  myvid_$(date +%s).mov\n* ffmpeg -f x11grab  -follow_mouse centered -show_region 1 -framerate 5 -video_size 4cif -i :0.0 xmvid_$(date +%s).mov\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-record-screen-ubuntu-dell-capture",
      "title": "Record Screen Ubuntu Dell capture",
      "category": "media",
      "importance": "critical",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para record screen ubuntu dell capture.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "ffmpeg -v warning -video_size 1920x1080 -framerate 5 -f x11grab -i :1.0  myvid_$(date +%s).mp4",
      "fullContent": "```\nffmpeg -v warning -video_size 1920x1080 -framerate 5 -f x11grab -i :1.0  myvid_$(date +%s).mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-record-screen-ubuntu-every-x-minutes",
      "title": "Record Screen Ubuntu every X minutes",
      "category": "media",
      "importance": "critical",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para record screen ubuntu every x minutes.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -v warning -video_size 1920x1080 -framerate 1 -f x11grab -i :1.0 -f segment -segment_time 60 out%03d.mp4\n* ffmpeg -v warning -video_size 1920x1080 -framerate 1 -f x11grab -i :1.0 myvid_$(date +%s).mp4\n* timeout 10s ffmpeg -f x11grab  -y -r 1  -video_size 1920x1080 -i :1.0 -vf format=gray -p...",
      "fullContent": "```\n* ffmpeg -v warning -video_size 1920x1080 -framerate 1 -f x11grab -i :1.0 -f segment -segment_time 60 out%03d.mp4\n* ffmpeg -v warning -video_size 1920x1080 -framerate 1 -f x11grab -i :1.0 myvid_$(date +%s).mp4\n* timeout 10s ffmpeg -f x11grab  -y -r 1  -video_size 1920x1080 -i :1.0 -vf format=gray -pix_fmt yuv420p myfile.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-record-screen-ubuntu-with-sound-asus",
      "title": "Record Screen Ubuntu with Sound ASUS",
      "category": "media",
      "importance": "critical",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para record screen ubuntu with sound asus.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -v warning -video_size 1366x768 -framerate 30 -f x11grab -i :0.0 -f alsa -ac 2 -ar 44100 -i default -probesize 42M -preset ultrafast -pix_fmt yuv420p -vcodec libx264 myvid_$(date +%s).mp4",
      "fullContent": "```\n* ffmpeg -v warning -video_size 1366x768 -framerate 30 -f x11grab -i :0.0 -f alsa -ac 2 -ar 44100 -i default -probesize 42M -preset ultrafast -pix_fmt yuv420p -vcodec libx264 myvid_$(date +%s).mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-record-screen-ubuntu-with-sound-lenovo",
      "title": "Record Screen Ubuntu with Sound Lenovo",
      "category": "media",
      "importance": "critical",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para record screen ubuntu with sound lenovo.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "ideapad3\n* ffmpeg -v warning -video_size 1920x1080 -framerate 30 -f x11grab -i :1.0 -f alsa -ac 2 -i default myvid_$(date +%s).mp4\n* ffmpeg -v warning -video_size 1920x1080 -framerate 25 -f x11grab -i :1.0 -f alsa -ac 2 -i default myvid_$(date +%s).mp4\n\nideapad5\n* ffmpeg -v warning -video_size 2560x...",
      "fullContent": "```\nideapad3\n* ffmpeg -v warning -video_size 1920x1080 -framerate 30 -f x11grab -i :1.0 -f alsa -ac 2 -i default myvid_$(date +%s).mp4\n* ffmpeg -v warning -video_size 1920x1080 -framerate 25 -f x11grab -i :1.0 -f alsa -ac 2 -i default myvid_$(date +%s).mp4\n\nideapad5\n* ffmpeg -v warning -video_size 2560x1600 -framerate 25 -f x11grab -i :0.0 -f alsa -ac 2 -i default myvid_$(date +%s).mp4\n* ffmpeg -v warning -video_size 1920x1080 -framerate 30 -f x11grab -i :1.0 -f alsa -ac 2 -ar 44100 -i default   myvid_$(date +%s).mp4\n* ffmpeg -f alsa -ac 2 -i pulse -f x11grab -r 30 -s 1366x768 -i :0.0 -acodec aac -vcodec libx264 -preset ultrafast -strict -2 -crf 0 -threads 0 -y myvid_$(date +%s).mp4\n\n.\n.\n.\n\n# grab screen without specifying size\nffmpeg -v warning -framerate 25 -f x11grab -i :0.0 -f alsa -ac 2 -i default myvid_$(date +%s).mp4\n\n.\n.\n.\n\n# capture 2th screen monitor\nffmpeg -v warning -video_size 1920x1080 -framerate 30 -f x11grab -i :1.0 -f alsa -ac 2 -i default myvid_$(date +%s).mp4\n\n# crop\nffmpeg -i in.mp4 -vf crop=1800:900 -c:a copy out.mp4 \n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-record-screen-ubuntu-with-sound-and-mic",
      "title": "Record Screen Ubuntu with Sound and Mic",
      "category": "media",
      "importance": "critical",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para record screen ubuntu with sound and mic.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "~~~\n# no echo - OK *** screen + mic + audio\nffmpeg -video_size 1920x1080 -framerate 25 -f x11grab -i :0.0  \\\n    -f pulse -i alsa_input.pci-0000_00_1f.3.analog-",
      "fullContent": "~~~\n# no echo - OK *** screen + mic + audio\nffmpeg -video_size 1920x1080 -framerate 25 -f x11grab -i :0.0  \\\n    -f pulse -i alsa_input.pci-0000_00_1f.3.analog-stereo \\\n    -f pulse -i alsa_output.pci-0000_00_1f.3.analog-stereo.monitor \\\n     -filter_complex \"[0:v:0]scale=-2:620[vout]\" -map \"[vout]\" -map 0:0 -map 1:0 -strict -2 -y screen_$(date +%s).mp4\n\n\n# sudo apt install pulseaudio-utils\n~~~",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "linux-tar-untar",
      "title": "Tar Untar",
      "category": "linux",
      "importance": "critical",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para tar untar em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "tar untar"
      ],
      "command": "|  cmd  | example                                        |\n|:------|:-----------------------------------------------|\n| tar   | tar -czvf archive.tar.gz folderp...",
      "fullContent": "|  cmd  | example                                        |\n|:------|:-----------------------------------------------|\n| tar   | tar -czvf archive.tar.gz folderpath1           |\n| untar | tar -xzvf archive.tar.gz                       |",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "tool-text-style-remover",
      "title": "Text Style & Unicode Stripper",
      "category": "tools",
      "importance": "critical",
      "type": "tool",
      "icon": "wrench",
      "description": "Removedor universal de formatações complexas, caracteres estilizados do Twitter/Unicode matemático e fontes de terceiros.",
      "tags": [
        "ferramenta-web",
        "unicode",
        "plain-text",
        "sanitization",
        "markdown",
        "live-tool",
        "produtividade"
      ],
      "command": "Abrir ferramenta: fullstack/a_online_tools/converter_text_style_remover.html",
      "fullContent": "Ferramenta Web interativa disponível localmente em fullstack/a_online_tools/converter_text_style_remover.html. Pode ser executada diretamente no navegador sem dependências externas.",
      "filePath": "fullstack/a_online_tools/converter_text_style_remover.html",
      "toolUrl": "fullstack/a_online_tools/converter_text_style_remover.html"
    },
    {
      "id": "learn-google-stanford-ml-courses",
      "title": "Trilhas de Elite: Stanford CS229, Google ML & MIT Deep Learning",
      "category": "learning",
      "importance": "critical",
      "type": "course",
      "icon": "award",
      "description": "Curadoria de cursos universitários gratuitos de maior prestígio global em Inteligência Artificial, Aprendizado Profundo e Teoria de Grafos.",
      "tags": [
        "stanford",
        "mit",
        "google-ml",
        "machine-learning",
        "academics",
        "cursos"
      ],
      "command": "Visitar: https://developers.google.com/machine-learning/crash-course/ e https://see.stanford.edu/Course/CS229",
      "fullContent": "### Principais Cursos de Elite Disponíveis:\n- Stanford CS229: Machine Learning (Andrew Ng)\n- MIT 18.065: Matrix Methods in Data Analysis, Signal Processing and Machine Learning\n- Google Developers ML Crash Course\n- DeepLearning.AI Specializations (Coursera)\n- Pytorch.org Deep Dive Tutorials",
      "filePath": "Online_tutorials.md"
    },
    {
      "id": "linux-umount-force",
      "title": "Umount force",
      "category": "linux",
      "importance": "critical",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para umount force em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "umount force"
      ],
      "command": "sudo service nfs-kernel-server stop\nsudo umount -f ~/path\nsudo umount -l -f ~/path",
      "fullContent": "```\nsudo service nfs-kernel-server stop\nsudo umount -f ~/path\nsudo umount -l -f ~/path\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-zipping-unzipping-multiple-folders",
      "title": "Zipping Unzipping multiple Folders",
      "category": "linux",
      "importance": "critical",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para zipping unzipping multiple folders em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "zipping unzipping multiple folders"
      ],
      "command": "| cmd            | example                                        |\n|----------------|------------------------------------------------|\n| unzip          | for z...",
      "fullContent": "| cmd            | example                                        |\n|----------------|------------------------------------------------|\n| unzip          | for z in *.zip; do unzip $z; done              |\n| zip folders    | for i in */; do zip -r \"${i%/}.zip\" \"$i\"; done |\n| zip only files | for i in *.*; do zip \"${i}.zip\" \"$i\"; done     |",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-rename",
      "title": "rename",
      "category": "linux",
      "importance": "critical",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para rename em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "rename"
      ],
      "command": "* // rename incremental 000 - 999\n* num=0; for i in *; do mv \"$i\" \"$(printf '%04d' $num).${i#*.}\"; ((num++)); done\n\n* // rename incremental 000.xi - 999.xi\n* num=0; for i in *.xi; do mv \"$i\" \"$(printf '%04d' $num).xi\"; ((num++)); done\n\n* // rename random 000 - 999\n* for i in *; do mv \"$i\" $(($RANDOM...",
      "fullContent": "```\n* // rename incremental 000 - 999\n* num=0; for i in *; do mv \"$i\" \"$(printf '%04d' $num).${i#*.}\"; ((num++)); done\n\n* // rename incremental 000.xi - 999.xi\n* num=0; for i in *.xi; do mv \"$i\" \"$(printf '%04d' $num).xi\"; ((num++)); done\n\n* // rename random 000 - 999\n* for i in *; do mv \"$i\" $(($RANDOM % 1000000000)).${i#*.}; done\n\n# files 0001\nnum=0; for i in *; do mv \"$i\" \"$(printf '%04d' $num).${i#*.}\"; ((num++)); done\n\n# folders 0001\nnum=0; for i in $(find * -type d); do mv \"$i\" \"$(printf '%04d' $num)\"; ((num++)); done\n\nfor i in $(ls -d */); do echo ${i%%/}; done\nnum=0; for i in $(ls -d */); do mv \"$i\" \"$(printf '%04d' $num)\"; ((num++)); done\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-rename-remove-file-name-spaces",
      "title": "rename remove file name spaces",
      "category": "linux",
      "importance": "critical",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para rename remove file name spaces em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "rename remove file name spaces"
      ],
      "command": "sudo apt install rename\nrename 's/ /_/g' *\nrename 's/\\t/_/g' *\n\n####################################################\nRename Files and Directories (Add Prefix)\n####################################################\n\nhttps://stackoverflow.com/questions/4787413/rename-files-and-directories-add-prefix\nhtt...",
      "fullContent": "```\nsudo apt install rename\nrename 's/ /_/g' *\nrename 's/\\t/_/g' *\n\n####################################################\nRename Files and Directories (Add Prefix)\n####################################################\n\nhttps://stackoverflow.com/questions/4787413/rename-files-and-directories-add-prefix\nhttps://unix.stackexchange.com/questions/47367/bulk-rename-change-prefix\nhttps://askubuntu.com/questions/878940/how-to-rename-a-certain-prefix-in-multiple-files\n\n\nfor f in * ; do mv -- \"$f\" \"PRE_$f\" ; done\nfor f in TestSR*; do mv \"$f\" \"CL${f#TestSR}\"; done\nfor i in TestSR*; do mv \"$i\" \"${i/#TestSR/CL}\"; done\n\nrename 's/^/PRE_/' *\nrename TestSR CL TestSR*\n\nls | xargs -I {} mv {} PRE_{}\nls | xargs -I {} mv {} {}_SUF\n\nfind * -maxdepth 0 -exec mv {} PRE_{} \\;\n\nls *.{h,m} | while read a; do n=CL$(echo $a | sed -e 's/^Test//'); mv $a $n; done\n\n\nfor f in TestSR*.m; do mv $f CL$(echo $f | cut -c7-); done;\nfor f in TestSR*.h; do mv $f CL$(echo $f | cut -c7-); done;\n\n\n####################################################\ncreate multi level dirs and files\n####################################################\n\nhttps://superuser.com/questions/1787603/find-and-rename-base-directory-and-files-under-each-basedir-add-a-prefix\n\nmkdir TesT; cd TesT\nmkdir -p G{1,2}_root/level_1/bin.{1,2}\ntouch G{1,2}_root/level_1/bin.{1,2}/{ab.txt,cd.txt}\ntree\n\n├── G1_root\n│   └── level_1\n│       ├── bin.1\n│       │   ├── ab.txt\n│       │   └── cd.txt\n│       └── bin.2\n│           ├── ab.txt\n│           └── cd.txt\n└── G2_root\n    └── level_1\n        ├── bin.1\n        │   ├── ab.txt\n        │   └── cd.txt\n        └── bin.2\n            ├── ab.txt\n            └── cd.txt\n\n\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "media-replace-audio-in-mp4",
      "title": "replace audio in mp4",
      "category": "media",
      "importance": "critical",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para replace audio in mp4.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -i input.mp4 -i input.wav -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 out.mp4",
      "fullContent": "```\n* ffmpeg -i input.mp4 -i input.wav -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 out.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-alsa-diagbose",
      "title": "ALSA diagbose",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para alsa diagbose.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* sudo apt install pavucontrol -y\n* sudo apt install pulseeffects -y\n* pavucontrol\n* alsamixer\n* arecord -L\n* arecord -l",
      "fullContent": "```\n* sudo apt install pavucontrol -y\n* sudo apt install pulseeffects -y\n* pavucontrol\n* alsamixer\n* arecord -L\n* arecord -l\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "devops-aws-s3-cli-automation",
      "title": "AWS CLI: S3 Bucket Sync & Automação de Backups em Nuvem",
      "category": "devops",
      "importance": "high",
      "type": "cli",
      "icon": "cloud",
      "description": "Comandos para sincronização diferencial e paralela de arquivos locais com AWS S3, gerenciamento de storage classes (Glacier) e políticas IAM.",
      "tags": [
        "aws",
        "s3",
        "cloud",
        "backup",
        "aws-cli",
        "infra"
      ],
      "command": "aws s3 sync ./backup s3://meu-bucket-seguro/backups/ --delete --storage-class STANDARD_IA",
      "fullContent": "Comandos de alta performance com a AWS CLI para automação de dumps de bancos de dados, snapshots criptografados e rotação de backups.",
      "filePath": "fullstack/cloud/aws/"
    },
    {
      "id": "git-add-git-ignore",
      "title": "Add git ignore",
      "category": "git",
      "importance": "high",
      "type": "cli",
      "icon": "git-branch",
      "description": "Fluxos avançados e comandos de precisão Git para add git ignore.",
      "tags": [
        "git",
        "version-control",
        "github",
        "devops",
        "add git ignore"
      ],
      "command": "* echo \".idea/*\" >> .gitignore\n* git commit -am \"remove .idea\"",
      "fullContent": "```\n* echo \".idea/*\" >> .gitignore\n* git commit -am \"remove .idea\"\n```",
      "filePath": "Daily_terminal_Git.md"
    },
    {
      "id": "learn-freecodecamp-tech-books",
      "title": "Biblioteca Aberta: Livros Essenciais de Engenharia de Software",
      "category": "learning",
      "importance": "high",
      "type": "book-open",
      "icon": "book",
      "description": "Compilação de livros canônicos abertos sobre Arquitetura de Software, Design Patterns (Gang of Four), Engenharia de Dados e Linux Internals.",
      "tags": [
        "livros",
        "arquitetura",
        "design-patterns",
        "software-engineering",
        "educação"
      ],
      "command": "Ver lista completa de e-books e manuais técnicos em books_lectures/freecodecamp_books.md",
      "fullContent": "Seleção de leituras fundamentais para transição de desenvolvedor pleno a arquiteto de sistemas distribuídos e líder técnico.",
      "filePath": "books_lectures/freecodecamp_books.md"
    },
    {
      "id": "tool-lowercase-converter",
      "title": "Case Normalizer & Lowercase",
      "category": "tools",
      "importance": "high",
      "type": "tool",
      "icon": "wrench",
      "description": "Conversor rápido de caixas para slugs, snake_case, camelCase, kebab-case e lowercase para padronização de arquivos e código.",
      "tags": [
        "ferramenta-web",
        "case-converter",
        "slugs",
        "padronização",
        "dev-utils",
        "live-tool",
        "produtividade"
      ],
      "command": "Abrir ferramenta: fullstack/a_online_tools/converter_to_lowercase.html",
      "fullContent": "Ferramenta Web interativa disponível localmente em fullstack/a_online_tools/converter_to_lowercase.html. Pode ser executada diretamente no navegador sem dependências externas.",
      "filePath": "fullstack/a_online_tools/converter_to_lowercase.html",
      "toolUrl": "fullstack/a_online_tools/converter_to_lowercase.html"
    },
    {
      "id": "git-check-pack",
      "title": "Check pack",
      "category": "git",
      "importance": "high",
      "type": "cli",
      "icon": "git-branch",
      "description": "Fluxos avançados e comandos de precisão Git para check pack.",
      "tags": [
        "git",
        "version-control",
        "github",
        "devops",
        "check pack"
      ],
      "command": "* git verify-pack -v ./.git/objects/pack/pack-......ea.pack",
      "fullContent": "```\n* git verify-pack -v ./.git/objects/pack/pack-......ea.pack\n```",
      "filePath": "Daily_terminal_Git.md"
    },
    {
      "id": "media-create-test-video",
      "title": "Create Test Video",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para create test video.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -y -f lavfi -i testsrc=duration=5:size=1920x1080:rate=30 testsrc.mp4",
      "fullContent": "```\n* ffmpeg -y -f lavfi -i testsrc=duration=5:size=1920x1080:rate=30 testsrc.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-create-wave-text-from-audio-file",
      "title": "Create wave + text from audio file",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para create wave + text from audio file.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -i INPUT.wav -filter_complex \"[0:a]showwaves=mode=line:s=hd480:colors=White[v]\" -map \"[v]\" -map 0:a -pix_fmt yuv420p -b:a 360k -r:a 44100  OUTPUT.mp4",
      "fullContent": "```\n* ffmpeg -i INPUT.wav -filter_complex \"[0:a]showwaves=mode=line:s=hd480:colors=White[v]\" -map \"[v]\" -map 0:a -pix_fmt yuv420p -b:a 360k -r:a 44100  OUTPUT.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-create-wave-text-from-audio-file-1",
      "title": "Create wave + text from audio file",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para create wave + text from audio file.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -i INPUT.wav -filter_complex \"[0:a]showwaves=mode=line:s=hd480:colors=Yellow@0.5|Blue@0.5:scale=sqrt[v];[v]drawtext=text='Rudi Rudi - Still Standing':fontcolor=White@0.5:fontsize=30:font=Arvo:x=(w-text_w)/5:y=(h-text_h)/5[out]\"  -map \"[out]\" -map 0:a -pix_fmt yuv420p  -b:a 360k -r:a 44100  ...",
      "fullContent": "```\n* ffmpeg -i INPUT.wav -filter_complex \"[0:a]showwaves=mode=line:s=hd480:colors=Yellow@0.5|Blue@0.5:scale=sqrt[v];[v]drawtext=text='Rudi Rudi - Still Standing':fontcolor=White@0.5:fontsize=30:font=Arvo:x=(w-text_w)/5:y=(h-text_h)/5[out]\"  -map \"[out]\" -map 0:a -pix_fmt yuv420p  -b:a 360k -r:a 44100  OUTPUT.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-cut-everything-after-3-minutes",
      "title": "Cut everything after 3 minutes",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para cut everything after 3 minutes.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "ffmpeg -i in.mp4 -t 180 -c copy output.mp4",
      "fullContent": "```\nffmpeg -i in.mp4 -t 180 -c copy output.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-cut-last-3-minutes",
      "title": "Cut last 3 minutes",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para cut last 3 minutes.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* echo dur=$(ffprobe -i in.mp4 -show_entries format=duration -v quiet -of csv=\"p=0\")\n* echo $((2356 - 180))\n* ffmpeg -t 2176 -i input.mp4 output.mp4",
      "fullContent": "```\n* echo dur=$(ffprobe -i in.mp4 -show_entries format=duration -v quiet -of csv=\"p=0\")\n* echo $((2356 - 180))\n* ffmpeg -t 2176 -i input.mp4 output.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "frontend-d3js-graph-gallery",
      "title": "D3.js: Visualização de Dados Interativa, Grafos e Diagramas de Rede",
      "category": "frontend",
      "importance": "high",
      "type": "guide",
      "icon": "pie-chart",
      "description": "Coleção de padrões para renderização de grafos direcionados por força (force-directed), matrizes de correlação e mapas interativos com D3.js.",
      "tags": [
        "d3js",
        "data-viz",
        "javascript",
        "graphs",
        "visualização"
      ],
      "command": "npm install d3 @types/d3",
      "fullContent": "Implementação de nós dinâmicos com zoom semântico, drag and drop suave com d3-drag e simulação de física forceSimulation.",
      "filePath": "fullstack/graphs/d3js/"
    },
    {
      "id": "linux-network-ports-ss-netstat",
      "title": "Diagnóstico de Rede: Portas Abertas, Sockets & Conexões Ativas",
      "category": "linux",
      "importance": "high",
      "type": "cli",
      "icon": "wifi",
      "description": "Inspeção rápida de serviços escutando em portas TCP/UDP com o utilitário moderno `ss`, identificando processos responsáveis e endereços de escuta.",
      "tags": [
        "rede",
        "portas",
        "ss",
        "netstat",
        "sockets",
        "firewall"
      ],
      "command": "sudo ss -tulpn | grep LISTEN",
      "fullContent": "### Comandos de Inspeção de Portas e Rede:\n- Listar todas as portas em escuta (TCP/UDP) com PID do processo: `sudo ss -tulpn`\n- Testar conectividade de porta remota com timeout: `nc -zv -w 3 ip-destino 443`\n- Rastreamento de rotas e latência hop-by-hop: `mtr -rw 8.8.8.8`",
      "filePath": "linux_howto/network_config/"
    },
    {
      "id": "windows-ffmpeg-gpu-pipeline",
      "title": "FFmpeg no Windows & WSL: Aceleração por Hardware GPU Intel & NVENC",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Flags e pipelines otimizados de encoding em GPU Intel QSV e Nvidia NVENC para renderização de alta velocidade no Windows e WSL.",
      "tags": [
        "ffmpeg",
        "windows",
        "gpu",
        "qsv",
        "nvenc",
        "video-encoding"
      ],
      "command": "ffmpeg -hwaccel qsv -c:v h264_qsv -i input.mp4 -b:v 5M output.mp4",
      "fullContent": "Windows Capture Desktop\n\n\nhttps://trac.ffmpeg.org/wiki/Capture/Desktop\nhttps://stackoverflow.com/questions/6766333/capture-windows-screen-with-ffmpeg\n\n\nffmpeg -devices true\n\nffmpeg -f gdigrab -framerate 10 -i desktop out.wmv\nffmpeg -f gdigrab -framerate 25 -i title=Calculator out.wmv\n\nffmpeg -y -rtbufsize 100M -f gdigrab -t 00:00:30 -framerate 30 -probesize 10M -draw_mouse 1 -i desktop -c:v libx264 -r 30 -preset ultrafast -tune zerolatency -crf 25 -pix_fmt yuv420p c:/video_comapre2.wmv",
      "filePath": "windows/ffmpeg.txt",
      "isTxtDoc": true,
      "docMeta": {
        "sectionsCount": 1,
        "commandsCount": 0,
        "linksCount": 2,
        "modelsCount": 0
      },
      "structuredSections": [
        {
          "title": "Conteúdo Principal",
          "raw": "Windows Capture Desktop\n\n\nhttps://trac.ffmpeg.org/wiki/Capture/Desktop\nhttps://stackoverflow.com/questions/6766333/capture-windows-screen-with-ffmpeg\n\n\nffmpeg -devices true\n\nffmpeg -f gdigrab -framerate 10 -i desktop out.wmv\nffmpeg -f gdigrab -framerate 25 -i title=Calculator out.wmv\n\nffmpeg -y -rtbufsize 100M -f gdigrab -t 00:00:30 -framerate 30 -probesize 10M -draw_mouse 1 -i desktop -c:v libx264 -r 30 -preset ultrafast -tune zerolatency -crf 25 -pix_fmt yuv420p c:/video_comapre2.wmv",
          "commands": [],
          "links": [
            "https://trac.ffmpeg.org/wiki/Capture/Desktop",
            "https://stackoverflow.com/questions/6766333/capture-windows-screen-with-ffmpeg"
          ],
          "models": [],
          "notes": []
        }
      ]
    },
    {
      "id": "git-fetch-with-update-repos-list",
      "title": "Fetch with update repos list",
      "category": "git",
      "importance": "high",
      "type": "cli",
      "icon": "git-branch",
      "description": "Fluxos avançados e comandos de precisão Git para fetch with update repos list.",
      "tags": [
        "git",
        "version-control",
        "github",
        "devops",
        "fetch with update repos list"
      ],
      "command": "git fetch --prune",
      "fullContent": "```\ngit fetch --prune\n```",
      "filePath": "Daily_terminal_Git.md"
    },
    {
      "id": "linux-systemd-service-management",
      "title": "Gerenciamento de Serviços Systemd & Daemons Customizados",
      "category": "linux",
      "importance": "high",
      "type": "guide",
      "icon": "settings",
      "description": "Criação de unit files `.service` no systemd com reinício automático (Restart=always), controle de concorrência, logs integrados e ativação no boot.",
      "tags": [
        "systemd",
        "services",
        "daemon",
        "systemctl",
        "sysadmin",
        "ubuntu"
      ],
      "command": "sudo systemctl daemon-reload && sudo systemctl enable --now meu-servico.service",
      "fullContent": "### Unit Template para Systemd:\n[Unit]\nDescription=Meu Servico de Alta Disponibilidade\nAfter=network.target\n\n[Service]\nType=simple\nUser=www-data\nWorkingDirectory=/var/www/app\nExecStart=/usr/bin/python3 /var/www/app/main.py\nRestart=always\nRestartSec=3\n\n[Install]\nWantedBy=multi-user.target",
      "filePath": "linux_howto/ubuntu_startup_bash.txt"
    },
    {
      "id": "git-git-list-changes-commits",
      "title": "Git list changes commits",
      "category": "git",
      "importance": "high",
      "type": "cli",
      "icon": "git-branch",
      "description": "Fluxos avançados e comandos de precisão Git para git list changes commits.",
      "tags": [
        "git",
        "version-control",
        "github",
        "devops",
        "git list changes commits"
      ],
      "command": "git log\ngit log --branches --not --remotes\ngit log origin/master..HEAD\ngit log --oneline\ngit log --oneline --branches\ngit log --oneline --decorate\ngit log --oneline --graph --decorate\ngit grep\ngit reflog --date=iso --pretty\ngit diff --word-diff\ngit blame -C -C -C",
      "fullContent": "```\ngit log\ngit log --branches --not --remotes\ngit log origin/master..HEAD\ngit log --oneline\ngit log --oneline --branches\ngit log --oneline --decorate\ngit log --oneline --graph --decorate\ngit grep\ngit reflog --date=iso --pretty\ngit diff --word-diff\ngit blame -C -C -C\n```",
      "filePath": "Daily_terminal_Git.md"
    },
    {
      "id": "git-git-list-files",
      "title": "Git list files",
      "category": "git",
      "importance": "high",
      "type": "cli",
      "icon": "git-branch",
      "description": "Fluxos avançados e comandos de precisão Git para git list files.",
      "tags": [
        "git",
        "version-control",
        "github",
        "devops",
        "git list files"
      ],
      "command": "git show f5f3fa6e012adf5d2caf2e1310421ad8258950d3 --name-only",
      "fullContent": "```\ngit show f5f3fa6e012adf5d2caf2e1310421ad8258950d3 --name-only\n```",
      "filePath": "Daily_terminal_Git.md"
    },
    {
      "id": "media-hdmi-brightness",
      "title": "HDMI brightness",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para hdmi brightness.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "ubuntu-drivers devices\nsudo ubuntu-drivers autoinstall\n\n* xrandr -q | grep \" connected\"\n* xrandr --output HDMI-1 --brightness 0.5\n\n* xrandr --listactivemonitors\n* xrandr --output HDMI-1-1 --brightness 0.7\n* xrandr --verbose |egrep '(Bright|Gamma)'\n* xrandr --output HDMI-1-1 --gamma 0.8:0.8:0.8\n* xra...",
      "fullContent": "```\nubuntu-drivers devices\nsudo ubuntu-drivers autoinstall\n\n* xrandr -q | grep \" connected\"\n* xrandr --output HDMI-1 --brightness 0.5\n\n* xrandr --listactivemonitors\n* xrandr --output HDMI-1-1 --brightness 0.7\n* xrandr --verbose |egrep '(Bright|Gamma)'\n* xrandr --output HDMI-1-1 --gamma 0.8:0.8:0.8\n* xrandr --output HDMI-1-1 --gamma 1.0:1.0:1.0\n* xrandr --output eDP-1-1 --gamma 1.0:1.0:1.0\n\nxrandr --output eDP --brightness 0.9\nxrandr --output DisplayPort-1 --brightness 0.6\n\n\nxrandr -s 1920x1200\nxrandr -s 2560x1600\n\n\nxrandr --output eDP-1 --brightness 0.7\nxrandr --output DP-2 --brightness 0.7\n\n\nxrandr --current --verbose\nxrandr --listmonitors\nxrandr -q | grep connected\n\nxrandr --output eDP-1 --brightness 0.9\nxrandr --output eDP-1 --gamma 0.5:1.0:1.0\nxrandr --output eDP-1 --gamma 0.8:0.8:0.8\nxrandr --output eDP-1 --brightness 1.02:1.02:1.02 --gamma 1.18:1.18:1.18\nxrandr --output eDP-1 --brightness 1:1:1 --gamma 1:1:1\nxrandr --output eDP-1 --auto\nxrandr --output eDP-1 --brightness .5\nxrandr --output eDP-1 --gamma .5:.5:.5\nxrandr --output eDP-1 --gamma 0.3:0.3:0.3\nxrandr --output eDP-1 --gamma 0.9\n\nxrandr --output eDP-1 --gamma 0.8:0.8:0.8\nxrandr --output eDP-1 --gamma 0.8:0.8:1.1\n\nxgamma -gamma 0.8\nxgamma -gamma 0.3\n\nhttps://wiki.archlinux.org/title/Xrandr\n\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "tool-icon-remover",
      "title": "Icon & Emoji Remover",
      "category": "tools",
      "importance": "high",
      "type": "tool",
      "icon": "wrench",
      "description": "Ferramenta web rápida para higienização e remoção instantânea de emojis, símbolos gráficos e ícones de strings e documentações.",
      "tags": [
        "ferramenta-web",
        "regex",
        "limpeza-texto",
        "sanitization",
        "emojis",
        "live-tool",
        "produtividade"
      ],
      "command": "Abrir ferramenta: fullstack/a_online_tools/converter_remove_icons.html",
      "fullContent": "Ferramenta Web interativa disponível localmente em fullstack/a_online_tools/converter_remove_icons.html. Pode ser executada diretamente no navegador sem dependências externas.",
      "filePath": "fullstack/a_online_tools/converter_remove_icons.html",
      "toolUrl": "fullstack/a_online_tools/converter_remove_icons.html"
    },
    {
      "id": "devops-kubernetes-pod-troubleshooting",
      "title": "Kubernetes: Debug de Pods, CrashLoopBackOff & Ingress",
      "category": "devops",
      "importance": "high",
      "type": "guide",
      "icon": "layers",
      "description": "Guia tático para diagnóstico de pods em CrashLoopBackOff, inspeção de eventos de cluster, port-forwarding e análise de recursos com kubectl.",
      "tags": [
        "kubernetes",
        "k8s",
        "kubectl",
        "pods",
        "cloud-native"
      ],
      "command": "kubectl get pods -A --field-selector status.phase!=Running && kubectl describe pod <pod_name>",
      "fullContent": "Sequência de passos para rastrear falhas de OOMKilled, problemas de DNS no CoreDNS, inspeção de secrets e rollout status de deployments.",
      "filePath": "fullstack/cloud/kubernetis/"
    },
    {
      "id": "ai-scikit-learn-pipelines",
      "title": "Machine Learning Pipelines & Classificadores em Python",
      "category": "ai",
      "importance": "high",
      "type": "guide",
      "icon": "activity",
      "description": "Pipelines de pré-processamento, imputação, StandardScaler e grid search com Random Forest, Gradient Boosting e SVM em Scikit-Learn.",
      "tags": [
        "machine-learning",
        "scikit-learn",
        "data-science",
        "python",
        "pipelines"
      ],
      "command": "from sklearn.pipeline import Pipeline; from sklearn.preprocessing import StandardScaler; from sklearn.ensemble import RandomForestClassifier",
      "fullContent": "Guia de construção de pipelines modulares em Scikit-Learn evitando data leakage entre folds de validação cruzada.",
      "filePath": "fullstack/python/scikit_learn/"
    },
    {
      "id": "media-mix-show-waves-video-with-overlay",
      "title": "Mix show waves Video with Overlay",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para mix show waves video with overlay.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "",
      "fullContent": "",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "tool-newline-remover",
      "title": "Newline & Break Stripper",
      "category": "tools",
      "importance": "high",
      "type": "tool",
      "icon": "wrench",
      "description": "Utilitário interativo para unificar quebras de linha excessivas, normalizar parágrafos e preparar payloads de texto contínuos.",
      "tags": [
        "ferramenta-web",
        "formatação",
        "limpeza",
        "strings",
        "payloads",
        "live-tool",
        "produtividade"
      ],
      "command": "Abrir ferramenta: fullstack/a_online_tools/converter_remove_newlines.html",
      "fullContent": "Ferramenta Web interativa disponível localmente em fullstack/a_online_tools/converter_remove_newlines.html. Pode ser executada diretamente no navegador sem dependências externas.",
      "filePath": "fullstack/a_online_tools/converter_remove_newlines.html",
      "toolUrl": "fullstack/a_online_tools/converter_remove_newlines.html"
    },
    {
      "id": "media-prepare-video-for-instagram",
      "title": "Prepare video for instagram",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para prepare video for instagram.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* // crop 1920 into instagram format 608x1080  \n* ffmpeg -i in.mp4 -vf \"crop=608:1080:270:150,eq=saturation=1.9\" out.mp4\n\n* // resize video from 608x1080 to 1080x1920 \n* ffmpeg -i in.mp4 -vf scale=1080:1920 > 1080x1920 out.mp4\n  \n* // replace video sound\n* ffmpeg -i input.mp4 -i input.wav -c:v copy ...",
      "fullContent": "```\n* // crop 1920 into instagram format 608x1080  \n* ffmpeg -i in.mp4 -vf \"crop=608:1080:270:150,eq=saturation=1.9\" out.mp4\n\n* // resize video from 608x1080 to 1080x1920 \n* ffmpeg -i in.mp4 -vf scale=1080:1920 > 1080x1920 out.mp4\n  \n* // replace video sound\n* ffmpeg -i input.mp4 -i input.wav -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 out.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-push-volume-up-4db",
      "title": "Push volume up +4dB",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para push volume up +4db.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -i input.wav -af \"volume=4dB\" -c:v copy -y  out.wav\n* ffmpeg -i input.mp4 -af \"volume=4dB\" -vf \"crop=1080:1080:570:450,eq=saturation=1.9\" -y out.mp4",
      "fullContent": "```\n* ffmpeg -i input.wav -af \"volume=4dB\" -c:v copy -y  out.wav\n* ffmpeg -i input.mp4 -af \"volume=4dB\" -vf \"crop=1080:1080:570:450,eq=saturation=1.9\" -y out.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "backend-python-fastapi-sqlite-pyarrow",
      "title": "Python Backend: FastAPI assíncrono com PyArrow e SQLite",
      "category": "fullstack",
      "importance": "high",
      "type": "script",
      "icon": "code",
      "description": "Arquitetura de API de ultra-alta vazão combinando FastAPI assíncrono, processamento colunar com Apache PyArrow e persistência local ultra-rápida.",
      "tags": [
        "python",
        "fastapi",
        "pyarrow",
        "sqlite",
        "parquet",
        "api"
      ],
      "command": "uvicorn main:app --workers 4 --host 0.0.0.0 --port 8000",
      "fullContent": "Construção de endpoints REST modernos com validação Pydantic V2, geração automática de Swagger OpenAPI e serialização vetorial com Arrow/Parquet.",
      "filePath": "fullstack/python/pyarrow_csv_sqlite/"
    },
    {
      "id": "backend-redis-caching-patterns",
      "title": "Redis: Estratégias de Caching, Pub/Sub & Sessões de Alta Velocidade",
      "category": "fullstack",
      "importance": "high",
      "type": "guide",
      "icon": "zap",
      "description": "Implementação de padrões Cache-Aside, Write-Through, expiração TTL inteligente, pipelines de comandos e filas atômicas com Redis.",
      "tags": [
        "redis",
        "caching",
        "nosql",
        "in-memory",
        "pubsub",
        "queue"
      ],
      "command": "redis-cli --latency-history && redis-cli monitor",
      "fullContent": "Configuração de persistência RDB e AOF, políticas de eviction (volatile-lru, allkeys-lru) e benchmark com redis-benchmark.",
      "filePath": "fullstack/databases/"
    },
    {
      "id": "ai-prompt-engineering-vault",
      "title": "Repositório de Prompts Estratégicos & Few-Shot Templates",
      "category": "ai",
      "importance": "high",
      "type": "cheatsheet",
      "icon": "sparkles",
      "description": "Templates de engenharia de prompt para raciocínio em cadeia (CoT), geração de testes unitários, análise forense de código e sumarização densa.",
      "tags": [
        "prompt-engineering",
        "few-shot",
        "chain-of-thought",
        "chatgpt",
        "system-prompts"
      ],
      "command": "[Role: Senior Systems Architect] [Context: Mission-Critical Production] [Task: Structured Audit with Threat Modeling]",
      "fullContent": "Compilação de estruturas de prompt comprovadas para elicitar raciocínio de alta precisão em modelos Claude, GPT e Llama, reduzindo alucinações a zero.",
      "filePath": "ai_tools_cpu/ai_prompts.txt"
    },
    {
      "id": "media-split-audio-file-in-1-sec-pieces-ffmpeg",
      "title": "Split audio file in 1 sec pieces FFMPEG",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para split audio file in 1 sec pieces ffmpeg.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -i in.wav -map 0 -f segment -segment_time 1 -af \"volume=6dB,equalizer=f=40:width_type=o:width=2:g=-7,areverse\" -y dir/out%03d.wav",
      "fullContent": "```\n* ffmpeg -i in.wav -map 0 -f segment -segment_time 1 -af \"volume=6dB,equalizer=f=40:width_type=o:width=2:g=-7,areverse\" -y dir/out%03d.wav\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-ubuntu-crop-screen",
      "title": "Ubuntu crop screen",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para ubuntu crop screen.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffplay -i in.mp4 -vf \"crop=1870:1040:1920:1080\" -crf 20",
      "fullContent": "```\n* ffplay -i in.mp4 -vf \"crop=1870:1040:1920:1080\" -crf 20\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "wsl-ubuntu-intel-gpu-drivers",
      "title": "WSL2 + Ubuntu: Configuração de Drivers Intel GPU Arc & OneAPI",
      "category": "devops",
      "importance": "high",
      "type": "guide",
      "icon": "cpu",
      "description": "Instalação de drivers gráficos Intel Arc, aceleração de computação OneAPI e diagnóstico gráfico em WSL2 com Ubuntu Jammy.",
      "tags": [
        "wsl",
        "wsl2",
        "intel-arc",
        "gpu",
        "oneapi",
        "ubuntu",
        "drivers"
      ],
      "command": "sudo apt install mesa-utils && glxinfo -B",
      "fullContent": "\nhttps://dgpu-docs.intel.com/installation-guides/ubuntu/ubuntu-jammy-arc.html\nhttps://www.intel.com/content/www/us/en/docs/oneapi/installation-guide-linux/2023-0/configure-wsl-2-for-gpu-workflows.html\nhttps://www.intel.com/content/www/us/en/docs/oneapi/installation-guide-linux/2023-0/configure-wsl-2-for-gpu-workflows.html\nhttps://www.linuxfordevices.com/tutorials/ubuntu/install-intel-graphic-drivers\nhttps://www.linuxfordevices.com/tutorials/ubuntu/install-intel-graphic-drivers\nhttps://www.howtogeek.com/508993/how-to-check-which-gpu-is-installed-on-linux/\n\nsudo lshw -c video\nsudo apt install mesa-utils\n\n*\nsudo lspci -v | less\nsudo update-pciids\nsudo lshw -numeric -C display\nsudo apt-get install mesa-utils\nglxinfo -B | less\nsudo apt-get install xserver-xorg-video-intel\nlspci -k | grep -EA3 'VGA|3D|Display'\n\nsudo apt  install valgrind\nvalgrind clinfo\n\nsudo apt-get update\n\n\n\n*\n\nglxinfo -B\n\nsudo apt install inxi\ninxi -G\nlspci -k\n\n\n\nsudo apt-get install -y gpg-agent wget\nwget -qO - https://repositories.intel.com/graphics/intel-graphics.key |\n  sudo gpg --dearmor --output /usr/share/keyrings/intel-graphics.gpg\necho 'deb [arch=amd64 signed-by=/usr/share/keyrings/intel-graphics.gpg] https://repositories.intel.com/graphics/ubuntu focal-devel main' | \\\n  sudo tee  /etc/apt/sources.list.d/intel.gpu.focal.list\n\n\nsudo apt-get install   intel-opencl-icd   intel-media-va-driver-non-free libmfx1  libvpl2   libegl-mesa0 libegl1-mesa libegl1-mesa-dev libgbm1   \\\nlibgl1-mesa-dev libgl1-mesa-dri   libglapi-mesa libgles2-mesa-dev libglx-mesa0  libxatracker2 mesa-va-drivers   mesa-vdpau-drivers mesa-vulkan-drivers va-driver-all\n\n\nstat -c \"%G\" /dev/dri/render*\ngroups ${USER}\n\n\nsudo apt-get install clinfo\nclinfo\n\nsudo apt update\nsudo apt install \\\n  intel-opencl-icd \\\n  intel-level-zero-gpu level-zero \\\n  intel-media-va-driver-non-free libmfx1\n\n\nsudo apt install   libigc-dev  libigdfcl-dev   libigfxcmrt-dev\n\n***\n\n\nsudo apt-get -y install \\\n    gawk \\\n    dkms \\\n    libc6-dev\n\nsudo apt-get install -y intel-platform-vsec-dkms intel-platform-cse-dkms\nsudo apt-get install -y intel-i915-dkms intel-fw-gpu\n\nsudo apt-get install -y gawk libc6-dev udev\\\n  intel-opencl-icd intel-level-zero-gpu level-zero \\\n  intel-media-va-driver-non-free libmfx1 libmfxgen1 libvpl2 \\\n  libegl-mesa0 libegl1-mesa libegl1-mesa-dev libgbm1 libgl1-mesa-dev libgl1-mesa-dri \\\n  libglapi-mesa libgles2-mesa-dev libglx-mesa0 libigdgmm12 libxatracker2 mesa-va-drivers \\\n  mesa-vdpau-drivers mesa-vulkan-drivers va-driver-all vainfo\n\n\nsudo apt-get install hwinfo\nhwinfo --display\n\nexport DISPLAY=:0.0\nsudo apt install vainfo\nvainfo\n\nsudo apt-get install mesa-utils\nglxinfo |grep OpenGL\n\n lsb_release -a\n\nsudo apt upgrade\nsudo add-apt-repository ppa:oibaf/graphics-drivers\nsudo apt update\nsudo apt install xserver-xorg-video-intel\nsudo apt install mesa-utils\n\nglxinfo | grep \"OpenGL version\"\n# sudo ppa-purge ppa:oibaf/graphics-drivers\n\nhttps://www.linuxfordevices.com/tutorials/ubuntu/install-intel-graphic-drivers\nhttps://linuxier.com/how-to-install-intel-graphics-driver-on-ubuntu-linux/\n\nxrandr -q\nlshw -c video\n",
      "filePath": "windows/wsl_ubuntu_intel_drivers.txt",
      "isTxtDoc": true,
      "docMeta": {
        "sectionsCount": 1,
        "commandsCount": 39,
        "linksCount": 8,
        "modelsCount": 0
      },
      "structuredSections": [
        {
          "title": "Conteúdo Principal",
          "raw": "https://dgpu-docs.intel.com/installation-guides/ubuntu/ubuntu-jammy-arc.html\nhttps://www.intel.com/content/www/us/en/docs/oneapi/installation-guide-linux/2023-0/configure-wsl-2-for-gpu-workflows.html\nhttps://www.intel.com/content/www/us/en/docs/oneapi/installation-guide-linux/2023-0/configure-wsl-2-for-gpu-workflows.html\nhttps://www.linuxfordevices.com/tutorials/ubuntu/install-intel-graphic-drivers\nhttps://www.linuxfordevices.com/tutorials/ubuntu/install-intel-graphic-drivers\nhttps://www.howtogeek.com/508993/how-to-check-which-gpu-is-installed-on-linux/\n\nsudo lshw -c video\nsudo apt install mesa-utils\n\n*\nsudo lspci -v | less\nsudo update-pciids\nsudo lshw -numeric -C display\nsudo apt-get install mesa-utils\nglxinfo -B | less\nsudo apt-get install xserver-xorg-video-intel\nlspci -k | grep -EA3 'VGA|3D|Display'\n\nsudo apt  install valgrind\nvalgrind clinfo\n\nsudo apt-get update\n\n\n\n*\n\nglxinfo -B\n\nsudo apt install inxi\ninxi -G\nlspci -k\n\n\n\nsudo apt-get install -y gpg-agent wget\nwget -qO - https://repositories.intel.com/graphics/intel-graphics.key |\n  sudo gpg --dearmor --output /usr/share/keyrings/intel-graphics.gpg\necho 'deb [arch=amd64 signed-by=/usr/share/keyrings/intel-graphics.gpg] https://repositories.intel.com/graphics/ubuntu focal-devel main' | \\\n  sudo tee  /etc/apt/sources.list.d/intel.gpu.focal.list\n\n\nsudo apt-get install   intel-opencl-icd   intel-media-va-driver-non-free libmfx1  libvpl2   libegl-mesa0 libegl1-mesa libegl1-mesa-dev libgbm1   \\\nlibgl1-mesa-dev libgl1-mesa-dri   libglapi-mesa libgles2-mesa-dev libglx-mesa0  libxatracker2 mesa-va-drivers   mesa-vdpau-drivers mesa-vulkan-drivers va-driver-all\n\n\nstat -c \"%G\" /dev/dri/render*\ngroups ${USER}\n\n\nsudo apt-get install clinfo\nclinfo\n\nsudo apt update\nsudo apt install \\\n  intel-opencl-icd \\\n  intel-level-zero-gpu level-zero \\\n  intel-media-va-driver-non-free libmfx1\n\n\nsudo apt install   libigc-dev  libigdfcl-dev   libigfxcmrt-dev\n\n***\n\n\nsudo apt-get -y install \\\n    gawk \\\n    dkms \\\n    libc6-dev\n\nsudo apt-get install -y intel-platform-vsec-dkms intel-platform-cse-dkms\nsudo apt-get install -y intel-i915-dkms intel-fw-gpu\n\nsudo apt-get install -y gawk libc6-dev udev\\\n  intel-opencl-icd intel-level-zero-gpu level-zero \\\n  intel-media-va-driver-non-free libmfx1 libmfxgen1 libvpl2 \\\n  libegl-mesa0 libegl1-mesa libegl1-mesa-dev libgbm1 libgl1-mesa-dev libgl1-mesa-dri \\\n  libglapi-mesa libgles2-mesa-dev libglx-mesa0 libigdgmm12 libxatracker2 mesa-va-drivers \\\n  mesa-vdpau-drivers mesa-vulkan-drivers va-driver-all vainfo\n\n\nsudo apt-get install hwinfo\nhwinfo --display\n\nexport DISPLAY=:0.0\nsudo apt install vainfo\nvainfo\n\nsudo apt-get install mesa-utils\nglxinfo |grep OpenGL\n\n lsb_release -a\n\nsudo apt upgrade\nsudo add-apt-repository ppa:oibaf/graphics-drivers\nsudo apt update\nsudo apt install xserver-xorg-video-intel\nsudo apt install mesa-utils\n\nglxinfo | grep \"OpenGL version\"\n# sudo ppa-purge ppa:oibaf/graphics-drivers\n\nhttps://www.linuxfordevices.com/tutorials/ubuntu/install-intel-graphic-drivers\nhttps://linuxier.com/how-to-install-intel-graphics-driver-on-ubuntu-linux/\n\nxrandr -q\nlshw -c video",
          "commands": [
            "sudo lshw -c video",
            "sudo apt install mesa-utils",
            "sudo lspci -v | less",
            "sudo update-pciids",
            "sudo lshw -numeric -C display",
            "sudo apt-get install mesa-utils",
            "glxinfo -B | less",
            "sudo apt-get install xserver-xorg-video-intel",
            "lspci -k | grep -EA3 'VGA|3D|Display'",
            "sudo apt  install valgrind",
            "valgrind clinfo",
            "sudo apt-get update",
            "glxinfo -B",
            "sudo apt install inxi",
            "inxi -G",
            "lspci -k",
            "sudo apt-get install -y gpg-agent wget",
            "wget -qO - https://repositories.intel.com/graphics/intel-graphics.key |",
            "sudo gpg --dearmor --output /usr/share/keyrings/intel-graphics.gpg",
            "sudo tee  /etc/apt/sources.list.d/intel.gpu.focal.list",
            "sudo apt-get install   intel-opencl-icd   intel-media-va-driver-non-free libmfx1  libvpl2   libegl-mesa0 libegl1-mesa libegl1-mesa-dev libgbm1   \\",
            "sudo apt-get install clinfo",
            "sudo apt update",
            "sudo apt install \\",
            "sudo apt install   libigc-dev  libigdfcl-dev   libigfxcmrt-dev",
            "sudo apt-get -y install \\",
            "sudo apt-get install -y intel-platform-vsec-dkms intel-platform-cse-dkms",
            "sudo apt-get install -y intel-i915-dkms intel-fw-gpu",
            "sudo apt-get install -y gawk libc6-dev udev\\",
            "sudo apt-get install hwinfo",
            "sudo apt install vainfo",
            "sudo apt-get install mesa-utils",
            "glxinfo |grep OpenGL",
            "sudo apt upgrade",
            "sudo add-apt-repository ppa:oibaf/graphics-drivers",
            "sudo apt update",
            "sudo apt install xserver-xorg-video-intel",
            "sudo apt install mesa-utils",
            "glxinfo | grep \"OpenGL version\""
          ],
          "links": [
            "https://dgpu-docs.intel.com/installation-guides/ubuntu/ubuntu-jammy-arc.html",
            "https://www.intel.com/content/www/us/en/docs/oneapi/installation-guide-linux/2023-0/configure-wsl-2-for-gpu-workflows.html",
            "https://www.intel.com/content/www/us/en/docs/oneapi/installation-guide-linux/2023-0/configure-wsl-2-for-gpu-workflows.html",
            "https://www.linuxfordevices.com/tutorials/ubuntu/install-intel-graphic-drivers",
            "https://www.linuxfordevices.com/tutorials/ubuntu/install-intel-graphic-drivers",
            "https://www.howtogeek.com/508993/how-to-check-which-gpu-is-installed-on-linux/",
            "https://www.linuxfordevices.com/tutorials/ubuntu/install-intel-graphic-drivers",
            "https://linuxier.com/how-to-install-intel-graphics-driver-on-ubuntu-linux/"
          ],
          "models": [],
          "notes": [
            "sudo ppa-purge ppa:oibaf/graphics-drivers"
          ]
        }
      ]
    },
    {
      "id": "media-add-logo-top-left-padding-10",
      "title": "add logo top left padding 10",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para add logo top left padding 10.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -y -i VIDEO.mp4 -i subscribe.png -filter_complex \"overlay=10:10\" out.mp4",
      "fullContent": "```\n* ffmpeg -y -i VIDEO.mp4 -i subscribe.png -filter_complex \"overlay=10:10\" out.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-audio-make-mono",
      "title": "audio make mono",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para audio make mono.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "ffmpeg -i stereo.flac -ac 1 mono.flac",
      "fullContent": "```\nffmpeg -i stereo.flac -ac 1 mono.flac\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-check-x11grab-source",
      "title": "check x11grab source",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para check x11grab source.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* echo $DISPLAY\n* :1",
      "fullContent": "```\n* echo $DISPLAY\n* :1\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-codecs-test",
      "title": "codecs test",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para codecs test.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "~~~\nhttps://trac.ffmpeg.org/wiki/HWAccelIntro\nhttps://wiki.ubuntuusers.de/cut/\nhttps://linuxize.com/post/linux-cut-command/\nhttps://trac.ffmpeg.org/wiki/audio%2",
      "fullContent": "~~~\nhttps://trac.ffmpeg.org/wiki/HWAccelIntro\nhttps://wiki.ubuntuusers.de/cut/\nhttps://linuxize.com/post/linux-cut-command/\nhttps://trac.ffmpeg.org/wiki/audio%20types\nhttps://usage.toolstud.io/docs/ffmpeg/usage/encoders/\n https://trac.ffmpeg.org/wiki/Encode/H.265\n\nffmpeg -hwaccels\nffmpeg -formats | grep PCM\n\nHardware acceleration methods:\nvdpau\ncuda\nvaapi\nqsv\ndrm\nopencl\nvulkan\n\nffmpeg -codecs\nffmpeg -codecs | grep -i 264\nffmpeg -codecs | cut -d ' ' -f 3\nffmpeg -encoders\nffmpeg -encoders| cut -d ' ' -f 3\nffmpeg -encoders| grep -w \"V...\" | cut -d ' ' -f 3\n\n\nfor i in $(ffmpeg -encoders| grep -w \"V...\" | cut -d ' ' -f 3); do echo \"sss\" $i; done\nfor i in $(ffmpeg -encoders| grep -w \"V...\" | cut -d ' ' -f 3); do ffmpeg -i input.mp4 -c:v $i -crf 26 -preset fast -c:a aac -b:a 128k output_$i.mp4; done\n\n\n 1,1M Jun  1 23:33 input.mp4\n 658K Okt 26 20:11 output_libvpx-vp9.mp4\n 314K Okt 26 20:11 output_libx264.mp4\n 917K Okt 26 20:11 output_libx264rgb.mp4\n 256K Okt 26 20:11 output_libx265.mp4\n 23M Okt 26 20:11 output_png.mp4\n 14M Okt 26 20:10 output_vc2.mp4\n \n1x\nrename 's/ /_/g' *\nfor i in *.mp4; do ffmpeg -i $i  -vf scale=-2:480 -c:v libx264 -crf 26 -preset superfast -c:a aac -b:a 96k -threads 2 output_$i.mp4; done\n\n3x\nfor i in *.mp4; do ffmpeg -i $i  -vf scale=-2:480 -c:v libx264 -crf 36 -preset superfast -c:a aac -b:a 96k -threads 1 output_$i.mp4; done\n~~~",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-convert-to-mono",
      "title": "convert to mono",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para convert to mono.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "~~~\nmkdir -p conv && for i in *.*; do ffmpeg -i $i -ac 1 conv/$i; done \n~~~",
      "fullContent": "~~~\nmkdir -p conv && for i in *.*; do ffmpeg -i $i -ac 1 conv/$i; done \n~~~",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-create-show-waves-from-mp3",
      "title": "create show-waves from mp3",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para create show-waves from mp3.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "~~~\nhttps://shotstack.io/learn/ffmpeg-create-waveform/\n\nffmpeg -f lavfi -i color=c=black:s=1280x720:r=5 -i response.wav -s 1980x1080 -c:a aac -b:a 128k -t 20.0 ",
      "fullContent": "~~~\nhttps://shotstack.io/learn/ffmpeg-create-waveform/\n\nffmpeg -f lavfi -i color=c=black:s=1280x720:r=5 -i response.wav -s 1980x1080 -c:a aac -b:a 128k -t 20.0 aNewVideo.mp4\n\nffmpeg -i input.mp3 -r 25 -filter_complex \"[0:a]compand,showwaves=size=854x480:colors=white,format=yuv420p[vout]\" -map \"[vout]\" -map 0:a -c:v libx264 -c:a copy output.mp4\n\nffmpeg -i input.mp3 -r 25 -filter_complex \"[0:a]compand,showwaves=size=854x480:colors=white:draw=full,format=yuv420p[vout]\" -map \"[vout]\" -map 0:a -c:v libx264 -c:a copy output.mp4\n\nffmpeg -i input.mp3 -r 25 -filter_complex \"[0:a]compand,showwaves=size=854x480:colors=#25d3d0:draw=full:mode=line,format=yuv420p[vout]\" -map \"[vout]\" -map 0:a -c:v libx264 -c:a copy output.mp4\n\n# xxx\nffmpeg -i input.mp3 -f lavfi -i color=c=#3d3739:s=854x480 -r 25 -filter_complex \"[0:a]compand,showwaves=size=854x480:colors=#e0a71f:draw=full:mode=line[vout];[1:v][vout]overlay=format=auto:shortest=1,format=yuv420p[v]\" -map \"[v]\" -map 0:a -c:v libx264 -c:a copy output.mp4 \n~~~",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-create-video-with-static-album-cover",
      "title": "create video with static album cover",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para create video with static album cover.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "~~~\n# [][] add to images side by side  \nffmpeg -i 1.png -i 2.png -filter_complex hstack=inputs=2 -y output.png\n\n# image or video\nffmpeg -loop 1 -i image.png -c:",
      "fullContent": "~~~\n# [][] add to images side by side  \nffmpeg -i 1.png -i 2.png -filter_complex hstack=inputs=2 -y output.png\n\n# image or video\nffmpeg -loop 1 -i image.png -c:v libx264 -t 15 -pix_fmt yuv420p -y out.mp4\n\n# concat all audio files in single file\nsox \"*.wav\" ../out.wav\n\n# create video with album sound\nffmpeg -stream_loop 0 -i out.wav -i out.mp4  -c:a aac -b:a 256k -c:v libx264 -y zfinal.mp4\n~~~",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-crop-square",
      "title": "crop square",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para crop square.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffplay -i in.mp4 -vf \"crop=in_h/1:in_h/1\"\n* ffplay -i in.mp4 -vf \"crop=820:640:570:350\" \n* ffplay -i in.mp4 -vf \"crop=1080:1080:570:450,eq=saturation=1.9\"",
      "fullContent": "```\n* ffplay -i in.mp4 -vf \"crop=in_h/1:in_h/1\"\n* ffplay -i in.mp4 -vf \"crop=820:640:570:350\" \n* ffplay -i in.mp4 -vf \"crop=1080:1080:570:450,eq=saturation=1.9\"\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-fast-conversion",
      "title": "fast conversion",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para fast conversion.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "ffmpeg -i input.mkv -preset ultrafast -c:a copy -crf 28 output.mp4\nfor i in *.*; do ffmpeg -i $i -vcodec h264 -acodec mp3 -threads 2 $i.mp4; done",
      "fullContent": "```\nffmpeg -i input.mkv -preset ultrafast -c:a copy -crf 28 output.mp4\nfor i in *.*; do ffmpeg -i $i -vcodec h264 -acodec mp3 -threads 2 $i.mp4; done\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-fast-convert",
      "title": "fast convert",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para fast convert.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "~~~\nfor i in *.avi; do ffmpeg -i $i -y -threads 4 $i.mp4; done\nfor i in *.mp4; do ffmpeg -i $i -y -threads 4 $i.mkv; done\n\nffprobe in.mp4 2>&1 | grep Stream\n\nfo",
      "fullContent": "~~~\nfor i in *.avi; do ffmpeg -i $i -y -threads 4 $i.mp4; done\nfor i in *.mp4; do ffmpeg -i $i -y -threads 4 $i.mkv; done\n\nffprobe in.mp4 2>&1 | grep Stream\n\nfor i in *.mkv; do ffmpeg -i $i -y -threads 4 -codec copy $i.mp4; done\nfor i in *.mkv; do ffmpeg -i $i -y -threads 4 -crf 24 -c:a copy -tune film -preset superfast  $i.mp4; done\nfor i in *.mkv; do ffmpeg -i $i -y -threads 4 -crf 24 -tune film -preset superfast  $i.mp4; done\n\nfor i in *.*; do ffmpeg -i $i -y -threads 2 -crf 28 -tune film -preset fast  $i.mp4; done\n~~~",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-flow-mix",
      "title": "flow mix",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para flow mix.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "~~~\nfmpeg -i in.mp4 -vf reverse out_rev.mp4 \nfor i in *.mp4; do echo file $i >> mylist.txt; done  && ffmpeg -f concat -safe 0 -i mylist.txt -c copy output.mp4\nf",
      "fullContent": "~~~\nfmpeg -i in.mp4 -vf reverse out_rev.mp4 \nfor i in *.mp4; do echo file $i >> mylist.txt; done  && ffmpeg -f concat -safe 0 -i mylist.txt -c copy output.mp4\nffmpeg -stream_loop 30 -i in.mp4 -c copy out.mp4\nffmpeg -stream_loop 0  -i in.mp4  -i in.mp3 -map 0:v -map 1:a -c:v copy -to 02:50 -shortest -y out.mp4\nffmpeg -i in.mp4 -vf \"crop=1200:570:10:10,eq=saturation=1.3\" -c:a copy out.mp4  \nffmpeg -i in.mp4 -vf scale=-1:1080:flags=lanczos,unsharp=5:5:1.0:5:5:0.0 -c:a copy out.mp4\n~~~",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "git-for-uncommitted-changes",
      "title": "for uncommitted changes",
      "category": "git",
      "importance": "high",
      "type": "cli",
      "icon": "git-branch",
      "description": "Fluxos avançados e comandos de precisão Git para for uncommitted changes.",
      "tags": [
        "git",
        "version-control",
        "github",
        "devops",
        "for uncommitted changes"
      ],
      "command": "git stash\ngit pull\ngit stash apply\ngit stash pop\n\ngit stash\ngit switch branch\ngit stash pop # add changes back\ngit stash \ngit stash -u\ngit stash list \ngit stash apply stash@{2}\ngit stash drop stash@{2}\ngit stash clear\ngit status -s\n\n# worktree\ngit worktree add ../name_path_hotfix main\ngit worktree r...",
      "fullContent": "```\ngit stash\ngit pull\ngit stash apply\ngit stash pop\n\ngit stash\ngit switch branch\ngit stash pop # add changes back\ngit stash \ngit stash -u\ngit stash list \ngit stash apply stash@{2}\ngit stash drop stash@{2}\ngit stash clear\ngit status -s\n\n# worktree\ngit worktree add ../name_path_hotfix main\ngit worktree remove .\ngit worktree list\n\n# cherrypick\ngit remote -v\ngit log fixbug --oneline\ngit checkout dev\ngit cherry-pick hash\ngit cherry-pick hash1 hash2\ngit log dev --oneline\n\ngit pull\ngit rebase dev\ngit merge dev\n```",
      "filePath": "Daily_terminal_Git.md"
    },
    {
      "id": "media-generate-wave",
      "title": "generate wave",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para generate wave.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -i in.wav -filter_complex \"[0:a]showwaves=mode=line:s=hd1080:colors=yellow[v]\" -map \"[v]\" -map 0:a -pix_fmt yuv420p -b:a 360k -r:a 44100  out_$(date +%s).mp4",
      "fullContent": "```\n* ffmpeg -i in.wav -filter_complex \"[0:a]showwaves=mode=line:s=hd1080:colors=yellow[v]\" -map \"[v]\" -map 0:a -pix_fmt yuv420p -b:a 360k -r:a 44100  out_$(date +%s).mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "git-get-last-updates-and-abord-if-conflict",
      "title": "get last updates and abord if conflict",
      "category": "git",
      "importance": "high",
      "type": "cli",
      "icon": "git-branch",
      "description": "Fluxos avançados e comandos de precisão Git para get last updates and abord if conflict.",
      "tags": [
        "git",
        "version-control",
        "github",
        "devops",
        "get last updates and abord if conflict"
      ],
      "command": "git fetch && git pull --rebase\ngit rebase --abord\n\ngit fetch -p -a && git pull --ff-only && git rebase master\ngit fetch -p && git pull && git rebase master && git rebase develop\ngit remote update origin --prune\n\n# pull\ngit pull --rebase\ngit rebase --abort\ngit pull",
      "fullContent": "```\ngit fetch && git pull --rebase\ngit rebase --abord\n\ngit fetch -p -a && git pull --ff-only && git rebase master\ngit fetch -p && git pull && git rebase master && git rebase develop\ngit remote update origin --prune\n\n# pull\ngit pull --rebase\ngit rebase --abort\ngit pull \n```",
      "filePath": "Daily_terminal_Git.md"
    },
    {
      "id": "media-h264-to-h265-conversion",
      "title": "h264 to h265 conversion",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para h264 to h265 conversion.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "ffmpeg -i input.mp4 -c:v libx265 -c:a copy -vtag hvc1 -threads 1 output.mp4\nfor i in *.*; do ffmpeg -i $i -vcodec libx265 -acodec mp3 -crf 28 $i.mp4; done",
      "fullContent": "```\nffmpeg -i input.mp4 -c:v libx265 -c:a copy -vtag hvc1 -threads 1 output.mp4\nfor i in *.*; do ffmpeg -i $i -vcodec libx265 -acodec mp3 -crf 28 $i.mp4; done\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "git-ignore-folder-and-include",
      "title": "ignore folder and include",
      "category": "git",
      "importance": "high",
      "type": "cli",
      "icon": "git-branch",
      "description": "Fluxos avançados e comandos de precisão Git para ignore folder and include.",
      "tags": [
        "git",
        "version-control",
        "github",
        "devops",
        "ignore folder and include"
      ],
      "command": "/data/*\n!/data/myfolder",
      "fullContent": "```\n/data/*\n!/data/myfolder\n```",
      "filePath": "Daily_terminal_Git.md"
    },
    {
      "id": "media-invert",
      "title": "invert",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para invert.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -i input.mp4 -vf lutrgb=\"r=negval:g=negval:b=negval\" output3.avi",
      "fullContent": "```\n* ffmpeg -i input.mp4 -vf lutrgb=\"r=negval:g=negval:b=negval\" output3.avi\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-join-more-images-in-one",
      "title": "join more images in one",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para join more images in one.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "~~~\nHow to join two images into one with FFmpeg\nhttps://stackoverflow.com/questions/24604689/how-to-join-two-images-into-one-with-ffmpeg\n\nffmpeg -i 1.png -i 2.p",
      "fullContent": "~~~\nHow to join two images into one with FFmpeg\nhttps://stackoverflow.com/questions/24604689/how-to-join-two-images-into-one-with-ffmpeg\n\nffmpeg -i 1.png -i 2.png  -i 3.png -filter_complex vstack=inputs=3 -y output.jpg\nffmpeg -i 1.png -i 2.png  -i 3.png -filter_complex hstack=inputs=3 -y output.jpg\n~~~",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-loop-an-mp4-and-a-wav-into-mp4-container",
      "title": "loop an MP4 and a WAV into MP4 container",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para loop an mp4 and a wav into mp4 container.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "~~~\n# loop 10 times\nffmpeg -stream_loop 10 -i audio.wav -i video.mp4 -c:a aac -b:a 192k -c:v libx264 out.mp4\n\n# loop 0 times\nffmpeg -stream_loop 0 -i audio.wav ",
      "fullContent": "~~~\n# loop 10 times\nffmpeg -stream_loop 10 -i audio.wav -i video.mp4 -c:a aac -b:a 192k -c:v libx264 out.mp4\n\n# loop 0 times\nffmpeg -stream_loop 0 -i audio.wav -i video.mp4  -c:a aac -b:a 256k -c:v libx264 -y out.mp4\n~~~",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-merge-4-videos-in-one-2-by-row-with-over",
      "title": "merge 4 videos in one - 2 by row with overlay",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para merge 4 videos in one - 2 by row with overlay.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* repeat 2x to merge horizontally 800x600 * 2 = 1600x600\n* ffmpeg -i in.mp4  -i in2.mp4  -filter_complex \"[0:v:0]pad=iw*2:ih[bf]; [bf][1:v:0]overlay=w\" -t 53 -y out.mp4\n* merge vertically - 1600x1200\n* ffmpeg -i in.mp4  -i in2.mp4  -filter_complex \"[0]pad=iw:ih*2[bf]; [bf][1] overlay=40:600\"  -t 53 ...",
      "fullContent": "```\n* repeat 2x to merge horizontally 800x600 * 2 = 1600x600\n* ffmpeg -i in.mp4  -i in2.mp4  -filter_complex \"[0:v:0]pad=iw*2:ih[bf]; [bf][1:v:0]overlay=w\" -t 53 -y out.mp4\n* merge vertically - 1600x1200\n* ffmpeg -i in.mp4  -i in2.mp4  -filter_complex \"[0]pad=iw:ih*2[bf]; [bf][1] overlay=40:600\"  -t 53 -y out.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-mix-wave-bg",
      "title": "mix wave + bg",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para mix wave + bg.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -i in.mp4 -i input.png -filter_complex \"[0]colorkey=color=black,crop=1920:400,scale=1920:100,pad=iw*200:ih:0:0[keyed];[1][keyed]overlay=y=770\" -t 10  out_$(date +%s).mp4",
      "fullContent": "```\n* ffmpeg -i in.mp4 -i input.png -filter_complex \"[0]colorkey=color=black,crop=1920:400,scale=1920:100,pad=iw*200:ih:0:0[keyed];[1][keyed]overlay=y=770\" -t 10  out_$(date +%s).mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-mp4-cut-crop",
      "title": "mp4 cut crop",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para mp4 cut crop.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "~~~\n# https://superuser.com/questions/744823/how-i-could-cut-the-last-7-second-of-my-video-with-ffmpeg\n\n# keep only the last N seconds of a video.\nffmpeg -sseof",
      "fullContent": "~~~\n# https://superuser.com/questions/744823/how-i-could-cut-the-last-7-second-of-my-video-with-ffmpeg\n\n# keep only the last N seconds of a video.\nffmpeg -sseof -7 -i input.mp4 -c copy output.mp4\n\n# delete the last N seconds of a video and keep the rest. \nffmpeg -ss 00:00:00 -to 01:32:00 -i input.mp4 -c copy output.mp4\n\n# delete the last N seconds of a video and keep the rest\nffmpeg -ss 00:00:04 -t 01:00:00 -i input.mp4 -c copy output.mp4;\n\n# keep only the first N seconds of a video.\nffmpeg -i input.avi -t 33 -c copy output.avi\n~~~",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-random-usage-commands",
      "title": "random usage commands",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para random usage commands.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "~~~\n# crop\nffmpeg -i in.mp4 -vf crop=1900:1000:10 out.mp4 \nffmpeg -i in.mp4 -vf crop=1910:1080:10:1200 out.mp4 \n\n# secord screen \nffmpeg -v warning -framerate 3",
      "fullContent": "~~~\n# crop\nffmpeg -i in.mp4 -vf crop=1900:1000:10 out.mp4 \nffmpeg -i in.mp4 -vf crop=1910:1080:10:1200 out.mp4 \n\n# secord screen \nffmpeg -v warning -framerate 30 -f x11grab -i :1.0 -f alsa -ac 2 -i default myvid_$(date +%s).mp4\n\n# slow motion\nffmpeg -i pexels-1.mp4 -vf \"setpts=1/0.5*PTS\" pexels-1b.mp4 \n\n# crop one screen from x11grab\nffmpeg -i in.mp4 -vf \"crop=1900:920:10:10,eq=saturation=1.9\" out.mp4;\n\n# hue\nffmpeg -i in.mp4 -vf hue=h=5:s=3 -c:a copy out.mp4 \nffmpeg -i in.mp4 -vf hue=s=2:h=270,curves=preset=color_negative out.mp4\n\n# create video with sound\nconvert image.jpg image.png\nconvert image.jpeg image.png\nsox \"*.wav\" ../out.wav\nconvert image.jpeg image.png\n\nffmpeg -loop 1 -i image.png -c:v libx264 -t 15 -pix_fmt yuv420p -y out.mp4\nffmpeg -stream_loop 0 -i out.wav -i out.mp4  -c:a aac -b:a 256k -c:v libx264 -y out.mp4\n\n\n# loop video for mp3 for 2min+\nffmpeg -stream_loop -1  -i vid.mp4  -i audio.mp3 -map 0:v -map 1:a -c:v copy -shortest -y out.mp4\nffmpeg -stream_loop 60 -i in.mp4  -i in.mp3 -map 0:v -map 1:a -c:v copy -shortest -y out.mp4\n\n# loop image for mp3 xxx\nffmpeg -stream_loop 0 -i vid.mp3 -i 1e45.png  -c:a aac -b:a 256k -c:v libx264 -y out.mp4\n\n# upscale\nffmpeg -i out.mp4 -vf \"scale=-1:1080,atadenoise,hqdn3d=6,unsharp=9:7:0:5\" out2.mp4\n\n\n# decompress and convert\nffmpeg -i output.mp4 -r 30 -s:v 1920x1080 -c:v rawvideo -pix_fmt yuv420p output.avi\nffmpeg -i output.avi -r 30 -c:v libx264 -s:v 1920x1080  -c:a aac output3.mp4\n\n\n# trim\nffmpeg -i in.mp4 -ss 00:00 -to 03:12 out.mp4 \n\n# compress 2Gb into 200Mb\nffmpeg  -i in.mp4 -c:a aac -b:a 256k -c:v libx264 -y out.mp4\n\n# convert\nfor i in *.wav; do ffmpeg -i \"$i\" \"$i\".mp3; done && rm *.wav\nfor i in *.mp3; do ffmpeg -i \"$i\" \"$i\".wav; done \nfor i in *.mmpz; do zip \"$i\".zip \"$i\"; done \n\n\nffmpeg -i mpxvm_fumix257_ft2.xm -af \"rubberband=pitch=432/400,rubberband=pitch=440/470\" -y mpxvm_fumix257_ft2.xm.wav 1:1\n\necho $DISPLAY\nffmpeg -v warning -framerate 30 -f x11grab -i :0.0 -f alsa -ac 2 -i default myvid_$(date +%s).mp4\nffmpeg -v warning -framerate 30 -f x11grab -i :0 -c:v libx264 -qp 0 -preset ultrafast capture.mp4\nffmpeg -video_size 80x24 -f x11grab -i :0.0+61,68 output.mp4\n\nrename 's/ /_/g' *\nfor i in */; do zip -r \"${i%/}.zip\" \"$i\"; done\n~~~\n\n\n\nRecord Screen Mic Audio Web simultaneously \n~~~\n#!/bin/bash\n\n# https://stackoverflow.com/questions/3004811/how-do-you-run-multiple-programs-in-parallel-from-a-bash-script\n\nrm *.m4a\nrm *.mp4\n\nffmpeg -v warning -video_size 1920x1080 -framerate 30 -f x11grab -i :0.0 -f alsa -ac 2 -i default myvid_$(date +%s).mp4 &\nP1=$!\n# audio\nffmpeg -f pulse -i alsa_output.pci-0000_05_00.6.analog-stereo.monitor -ac 2 recording_stereo_$(date +%s).m4a &\nP2=$!\n# mic\nffmpeg -f alsa -i pulse -ac 1 recording_mic_$(date +%s).m4a &\nP3=$!\n# web\nffmpeg -f v4l2 -framerate 25 -video_size 480x270 -i /dev/video0  webcam_$(date +%s).mp4\nP4=$!\n~~~\n\n\n#### ffmpeg-how-to-get-last-frame-from-a-video\n~~~\nhttps://superuser.com/questions/1448665/ffmpeg-how-to-get-last-frame-from-a-video\n\nffmpeg -sseof -3 -i input -update 1 -q:v 1 last.jpg\n~~~\n\n\n#### create collage join images with imagemagick\n~~~\nsudo apt install imagemagick-6.q16\nmontage -mode concatenate -tile 4x *.png out.jpg\nmontage -mode concatenate -background black -tile 7x *.jpeg out.png\nmontage -mode concatenate -background black -tile 4x *.png out.jpg\nmontage -mode concatenate -background gray16 -bordercolor black -shadow  -border 5 -tile 5x *.jpeg out.jpg\n~~~",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-resize-and-enhance",
      "title": "resize and enhance",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para resize and enhance.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -i in.mp4 -vf scale=-1:1080 -an out.mp4 \n* ffplay -i in -vf scale=-2:540 -c:a copy\n\nffplay -i in.mp4 -vf scale=-1:1080:flags=lanczos,unsharp=5:5:1.0:5:5:0.0\nffplay -i in.mp4 -vf scale=-1:1080:flags=lanczos,unsharp=3:3:1.5\nffplay -i in.mp4 -vf scale=-1:1080:flags=lanczos,unsharp=13:13:2.5\nff...",
      "fullContent": "```\n* ffmpeg -i in.mp4 -vf scale=-1:1080 -an out.mp4 \n* ffplay -i in -vf scale=-2:540 -c:a copy\n\nffplay -i in.mp4 -vf scale=-1:1080:flags=lanczos,unsharp=5:5:1.0:5:5:0.0\nffplay -i in.mp4 -vf scale=-1:1080:flags=lanczos,unsharp=3:3:1.5\nffplay -i in.mp4 -vf scale=-1:1080:flags=lanczos,unsharp=13:13:2.5\nffmpeg -i in.mp4 -vf scale=-1:1080:flags=lanczos,unsharp=5:5:1.0:5:5:0.0 -c:a copy out.mp4\n\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-rotate-90",
      "title": "rotate 90",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para rotate 90.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "ffmpeg -i in.mp4 -vf \"transpose=2\" -t 10 out.mp4",
      "fullContent": "```\nffmpeg -i in.mp4 -vf \"transpose=2\" -t 10 out.mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-set-x11grab-source",
      "title": "set x11grab source",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para set x11grab source.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* export DISPLAY=:0.0\n* export DISPLAY=localhost:0.0\n* firefox &",
      "fullContent": "```\n* export DISPLAY=:0.0\n* export DISPLAY=localhost:0.0\n* firefox &\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-speed-up",
      "title": "speed up",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para speed up.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "ffplay -i in.mp4 -vf \"setpts=1/4*PTS\"",
      "fullContent": "```\nffplay -i in.mp4 -vf \"setpts=1/4*PTS\"\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "git-submodules",
      "title": "submodules",
      "category": "git",
      "importance": "high",
      "type": "cli",
      "icon": "git-branch",
      "description": "Fluxos avançados e comandos de precisão Git para submodules.",
      "tags": [
        "git",
        "version-control",
        "github",
        "devops",
        "submodules"
      ],
      "command": "git clone ---recursive main-repo\ngit submodule update --init --recursive\ngit ls-treee HEAD submodulepath\ngit log --oneline\ngit switch branch \ngit submodule add submodulepath\ngit rm submodulepath\n\ngit config --global  submodule.recusive true\ngit config --global push.recurseSubmodules on-demand",
      "fullContent": "```\ngit clone ---recursive main-repo\ngit submodule update --init --recursive\ngit ls-treee HEAD submodulepath\ngit log --oneline\ngit switch branch \ngit submodule add submodulepath\ngit rm submodulepath\n\ngit config --global  submodule.recusive true\ngit config --global push.recurseSubmodules on-demand\n```",
      "filePath": "Daily_terminal_Git.md"
    },
    {
      "id": "media-thumbnail",
      "title": "thumbnail",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para thumbnail.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "ffmpeg -i vid.mp4 -vf thumbnail -frames:v 1 out.png",
      "fullContent": "```\nffmpeg -i vid.mp4 -vf thumbnail -frames:v 1 out.png\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "media-ubuntu-webcam-settings",
      "title": "ubuntu webcam settings",
      "category": "media",
      "importance": "high",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para ubuntu webcam settings.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* sudo apt install v4l-utils\n* v4l2-ctl -d /dev/video0 --set-ctrl=brightness=60,gamma=30,sharpness=2,hue=2,saturation=30\n* v4l2-ctl -d /dev/video0 --set-ctrl=brightness=90,gamma=30,sharpness=2,hue=2,saturation=30",
      "fullContent": "```\n* sudo apt install v4l-utils\n* v4l2-ctl -d /dev/video0 --set-ctrl=brightness=60,gamma=30,sharpness=2,hue=2,saturation=30\n* v4l2-ctl -d /dev/video0 --set-ctrl=brightness=90,gamma=30,sharpness=2,hue=2,saturation=30\n```",
      "filePath": "Daily_terminal_Video.md"
    },
    {
      "id": "linux-access-localhost-on-remote-server",
      "title": "Access localhost on remote server",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para access localhost on remote server em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "access localhost on remote server"
      ],
      "command": "start locally [ python3 -m http.server.8080 with page index.html]\ngo on [ localhost.run website ]\ncopy [ ssh -R 80:localhost:8080 nokey@localhost.run ] on local machine\nget link from temrinal and run it on browser",
      "fullContent": "```\nstart locally [ python3 -m http.server.8080 with page index.html]\ngo on [ localhost.run website ]\ncopy [ ssh -R 80:localhost:8080 nokey@localhost.run ] on local machine\nget link from temrinal and run it on browser\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-browser-plugins",
      "title": "Browser Plugins",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para browser plugins em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "browser plugins"
      ],
      "command": "Ghostery\nPrivacy Badger\nuBlock Origin\nDuckDuckGo\nNoScript",
      "fullContent": "```\nGhostery\nPrivacy Badger\nuBlock Origin\nDuckDuckGo\nNoScript\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "frontend-css-glitch-modern-effects",
      "title": "CSS Moderno: Micro-Interações, Efeitos Glitch & Glassmorphism",
      "category": "frontend",
      "importance": "medium",
      "type": "cheatsheet",
      "icon": "layout",
      "description": "Coleção de snippets CSS modernos com backdrop-filter, mix-blend-mode, keyframes para efeitos glitch cibernéticos e variáveis HSL dinâmicas.",
      "tags": [
        "css",
        "glitch",
        "glassmorphism",
        "micro-animations",
        "design-system"
      ],
      "command": "backdrop-filter: blur(16px); background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);",
      "fullContent": "Estilos CSS de altíssimo impacto visual inspirados no Linear e Cyber-Growth para enriquecer dashboards e painéis de controle.",
      "filePath": "fullstack/css/animation_glitch.html"
    },
    {
      "id": "linux-change-date-modified-created-file",
      "title": "Change date modified created file",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para change date modified created file em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "change date modified created file"
      ],
      "command": "* -a = accessed / -m = modified / -t = timestamp",
      "fullContent": "```\n * -a = accessed / -m = modified / -t = timestamp\n ```\n\n| desc          | cmd                                             |\n|:--------------|:------------------------------------------------|\n| generate file | touch {1..19}.jpg                               |\n| change date   | touch -d \"October 31\"  filename.txt             |\n| change date   | touch -d '14:24' file.txt                       |\n| change date   | touch -d \"2 hours ago\" filename                 |",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-convert-imagick",
      "title": "Convert Imagick",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para convert imagick em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "convert imagick"
      ],
      "command": "* for i in *.png; do convert \"$i\" \"${i%.png}.jpg\" && rm \"$i\" && echo \"$i is converted.\"; done\n* for i in *.png; do convert \"$i\" \"${i%.*}.jpg\" ; done",
      "fullContent": "```\n* for i in *.png; do convert \"$i\" \"${i%.png}.jpg\" && rm \"$i\" && echo \"$i is converted.\"; done\n* for i in *.png; do convert \"$i\" \"${i%.*}.jpg\" ; done\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-dns-settings-google-and-cloudflare",
      "title": "DNS Settings Google and Cloudflare",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para dns settings google and cloudflare em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "dns settings google and cloudflare"
      ],
      "command": "...",
      "fullContent": "",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-debian-ubuntu-mirrors",
      "title": "Debian Ubuntu mirrors",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para debian ubuntu mirrors em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "debian ubuntu mirrors"
      ],
      "command": "~~~\nhttps://cdimage.kali.org/kali-2024.4/\nhttps://devuan-cd.bio.lmu.de/devuan_daedalus/installer-iso/\nhttps://distrowatch.com/\nhttps://downloads.getsol.us/isos/...",
      "fullContent": "~~~\nhttps://cdimage.kali.org/kali-2024.4/\nhttps://devuan-cd.bio.lmu.de/devuan_daedalus/installer-iso/\nhttps://distrowatch.com/\nhttps://downloads.getsol.us/isos/2024-10-14/\nhttps://ftp-stud.hs-esslingen.de/Mirrors/\nhttps://ftp-stud.hs-esslingen.de/Mirrors/cdimage.ubuntu.com/\nhttps://ftp-stud.hs-esslingen.de/Mirrors/cdimage.ubuntu.com/kubuntu/releases/18.04/release/\nhttps://ftp-stud.hs-esslingen.de/Mirrors/cdimage.ubuntu.com/lubuntu/releases/16.04/release/\nhttps://ftp-stud.hs-esslingen.de/Mirrors/cdimage.ubuntu.com/lubuntu/releases/18.04.5/release/\nhttps://ftp-stud.hs-esslingen.de/Mirrors/cdimage.ubuntu.com/lubuntu/releases/18.04.5/release/\nhttps://ftp-stud.hs-esslingen.de/Mirrors/cdimage.ubuntu.com/lubuntu/releases/20.04/release/\nhttps://ftp-stud.hs-esslingen.de/Mirrors/cdimage.ubuntu.com/lubuntu/releases/24.04/release/\nhttps://ftp-stud.hs-esslingen.de/Mirrors/cdimage.ubuntu.com/ubuntu/releases/23.04/release/\nhttps://ftp-stud.hs-esslingen.de/Mirrors/cdimage.ubuntu.com/xubuntu/releases/18.04/release/\nhttps://ftp-stud.hs-esslingen.de/debian-cd/current-live/amd64/iso-hybrid/\nhttps://ftp.fau.de/\nhttps://rhlx01.hs-esslingen.de/Mirrors/cdimage.ubuntu.com/xubuntu/releases/noble/release/\nhttps://rhlx01.hs-esslingen.de/Mirrors/cdimage.ubuntu.com/kubuntu/releases/22.04/release/\nhttps://rhlx01.hs-esslingen.de/Mirrors/cdimage.ubuntu.com/lubuntu/releases/22.04/release/\nhttps://rhlx01.hs-esslingen.de/Mirrors/releases.ubuntu.com/22.04/\nhttps://ftp.fau.de/devuan-cd/devuan_chimaera/desktop-live/\nhttps://ftp.fau.de/devuan-cd/devuan_chimaera/desktop-live/\nhttps://ftp.fau.de/devuan-cd/devuan_daedalus/desktop-live/\nhttps://ftp.fau.de/ubuntu-releases/14.04/\nhttps://ftp.fau.de/ubuntu-releases/16.04/\nhttps://ftp.fau.de/ubuntu-releases/22.04/\nhttps://ftp.fau.de/ubuntu-releases/22.04/\nhttps://iso.builds.garudalinux.org/iso/latest/garuda/kde-lite/\nhttps://old-releases.ubuntu.com/releases/16.04.4/\nhttps://releases.ubuntu.com/\nhttps://releases.ubuntu.com/23.10.1/\nhttps://releases.ubuntu.com/23.10/\nhttps://releases.ubuntu.com/jammy/\nhttps://releases.ubuntu.com/mantic/\nhttps://repo-default.voidlinux.org/live/current/\nhttps://rhinolinux.org/download\nhttps://www.bunsenlabs.org/installation.html\nhttps://www.debian.org/CD/http-ftp/\nhttps://www.debian.org/releases/bullseye/amd64/ch08s01.en.html\nhttps://www.devuan.org/get-devuan\nhttps://releases.ubuntu.com/noble/\nhttps://ftp.fau.de/ubuntu-releases/24.04.1/\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "backend-rest-swagger-api-contract",
      "title": "Design de APIs RESTful: OpenAPI 3.0 & Contratos de Dados",
      "category": "fullstack",
      "importance": "medium",
      "type": "guide",
      "icon": "file-text",
      "description": "Padronização de respostas JSON (RFC 7807 Problem Details), versionamento semântico, paginação por cursor e documentação com Swagger.",
      "tags": [
        "api",
        "rest",
        "swagger",
        "openapi",
        "contract",
        "backend"
      ],
      "command": "docker run -p 8080:8080 -e SWAGGER_JSON=/spec/openapi.json swaggerapi/swagger-ui",
      "fullContent": "Princípios de design de APIs resilientes, idempotência em verbos HTTP (PUT vs POST), autenticação Bearer JWT e rate limiting por API Key.",
      "filePath": "fullstack/api/swagger/"
    },
    {
      "id": "linux-find-string-in-files",
      "title": "Find string in files",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para find string in files em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "find string in files"
      ],
      "command": "https://www.cyberciti.biz/faq/howto-use-grep-command-in-linux-unix/\nhttps://www.cyberciti.biz/faq/unix-linux-grep-include-file-pattern-recursive-example/\nhttps://unix.stackexchange.com/questions/694796/how-to-grep-multiple-strings-when-using-with-another-command\nhttps://www.warp.dev/terminus/grep-ex...",
      "fullContent": "```\nhttps://www.cyberciti.biz/faq/howto-use-grep-command-in-linux-unix/\nhttps://www.cyberciti.biz/faq/unix-linux-grep-include-file-pattern-recursive-example/\nhttps://unix.stackexchange.com/questions/694796/how-to-grep-multiple-strings-when-using-with-another-command\nhttps://www.warp.dev/terminus/grep-exclude\nhttps://www.warp.dev/terminus/make-grep-case-insensitive\n\nfind ./folder -type f -name \"*.php\" -print0 | xargs -0 grep -i 'protected function'\ngrep -ir 'protected function' --include='*.php' ./folder | grep -v 'exclude string'\n\nsudo find . -type f -iname \"*.txt\" -exec grep -H 'String' {} + \nsudo find . -type f -iname \"*.txt\" -exec grep -i \"String\" {} +\nsudo find . -name \"*.php\" -exec grep -Hni \"String\" --color {} \\;\n\ncd /usr/src/linux && egrep -ir \"String\" # search in files\ncd /usr/ && egrep -ir \"String\"\ncd /usr && egrep -ir -w \"String\" # print first line\ncd /usr && egrep -iIrnH -w \"String\"\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-for-ipv4",
      "title": "For IPv4",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para for ipv4 em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "for ipv4"
      ],
      "command": "* nameserver 8.8.8.8,8.8.4.4,1.1.1.1,1.0.0.1\n\nsudo apt update\nsudo apt install resolvconf\nsudo nano /etc/resolvconf/resolv.conf.d/head\n\nnameserver 8.8.8.8\nnameserver 8.8.4.4\nnameserver 1.1.1.1\nnameserver 1.1.1.2\nnameserver 1.1.1.3\nnameserver 1.0.0.1\nnameserver 1.0.0.2\nnameserver 1.0.0.3\n\n\nsudo resol...",
      "fullContent": "```\n* nameserver 8.8.8.8,8.8.4.4,1.1.1.1,1.0.0.1\n\nsudo apt update\nsudo apt install resolvconf\nsudo nano /etc/resolvconf/resolv.conf.d/head\n\nnameserver 8.8.8.8\nnameserver 8.8.4.4\nnameserver 1.1.1.1\nnameserver 1.1.1.2\nnameserver 1.1.1.3\nnameserver 1.0.0.1\nnameserver 1.0.0.2\nnameserver 1.0.0.3\n\n\nsudo resolvconf --enable-updates\nsudo resolvconf -u\nsudo nano /etc/resolv.conf\n```\n\n#### For IPv6\n\n```\n* nameserver 2001:4860:4860::8888,2001:4860:4860::8844,2606:4700:4700::1111,2606:4700:4700::1001\n```\n\n#### Cloudflare + Google\n\n```\n\nCloudflare\nhttps://en.wikipedia.org/wiki/1.1.1.1\nhttps://1.1.1.1/dns/\n\nFor IPv4: 1.1.1.1 and 1.0.0.1\nFor IPv6: 2606:4700:4700::1111,2606:4700:4700::1001\n\nQuad9 is a free service that replaces your default ISP or enterprise Domain Name Server (DNS) configuration.\nDNS 9.9.9.9\n\nVia IPv4 \n1.1.1.1\n1.0.0.1\n1.1.1.2\n1.0.0.2\n1.1.1.3\n1.0.0.3\n\nVia IPv6 \n2606:4700:4700::1111\n2606:4700:4700::1001 \n2606:4700:4700::1112\n2606:4700:4700::1002 \n2606:4700:4700::1113\n2606:4700:4700::1003\n\nGoogle Public DNS IP addresses\nhttps://developers.google.com/speed/public-dns/docs/using\n\n8.8.8.8\n8.8.4.4\n\n2001:4860:4860:0:0:0:0:8888\n2001:4860:4860:0:0:0:0:8844\n```\n\n#### Fast VM install\n\n```\n* sudo apt install vagrant\n\n* vagrant init ubuntu/trusty64 -f -m --output Ubuntu1404LTS; vagrant up --provider virtualbox\n* vagrant init ubuntu/xenial64 -f -m --output Ubuntu1604LTS; vagrant up --provider virtualbox\n* vagrant init ubuntu/bionic64 -f -m --output Ubuntu1804LTS; vagrant up --provider virtualbox\n* vagrant init ubuntu/focal64 -f -m --output Ubuntu2004LTS; vagrant up --provider virtualbox\n* vagrant init ubuntu/hirsute64 -f -m --output Ubuntu2104LTS; vagrant up --provider virtualbox\n* vagrant init debian/stretch64 -f -m --output Debian9stretch64; vagrant up --provider virtualbox\n\n* vagrant init opensuse/Leap-15.2.x86_64 -f -m; vagrant up --provider virtualbox\n* vagrant init opensuse/Tumbleweed.x86_64 -f -m; vagrant up --provider virtualbox\n* vagrant init generic/opensuse42 # opensuse42 -f -m; vagrant up --provider virtualbox\n* vagrant init Sabayon/spinbase-amd64  # gento -f -m; vagrant up --provider virtualbox\n* vagrant init generic/devuan3 -f -m; vagrant up --provider virtualbox\n* vagrant init generic/devuan2 -f -m; vagrant up --provider virtualbox\n\n* user pass: vagrant vagrant\n* https://app.vagrantup.com/ubuntu/boxes/focal64\n* https://app.vagrantup.com/debian/boxes/buster64\n* sudo apt install xfce4\n* apt get install xinit\n* apt get update --fix-missing\n* systemctl poweroff\n* rm Vagrantfile\n* rm -r .vagrant\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-format-json",
      "title": "Format json",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para format json em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "format json"
      ],
      "command": "compact json data\njq . -c data.json > data_zip.json\n\nprettify json data\njq . data_zip.json > data.json",
      "fullContent": "######\n\n```\ncompact json data\njq . -c data.json > data_zip.json\n\nprettify json data\njq . data_zip.json > data.json\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-generate-current-dir-structure",
      "title": "Generate Current Dir Structure",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para generate current dir structure em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "generate current dir structure"
      ],
      "command": "sudo snap install tree \nsudo apt  install tree -y\ntree -Ld 3 > FolderStructure.txt",
      "fullContent": "```\nsudo snap install tree \nsudo apt  install tree -y\ntree -Ld 3 > FolderStructure.txt\n```\n\n######",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "frontend-canvas-2d-animations",
      "title": "HTML5 Canvas: Renderização de Alta Taxa de Quadros (60fps)",
      "category": "frontend",
      "importance": "medium",
      "type": "script",
      "icon": "play-circle",
      "description": "Técnicas de requestAnimationFrame, duplo buffer, desenho vetorial procedural e conversão de animações Canvas para vídeo MP4.",
      "tags": [
        "canvas",
        "html5",
        "animations",
        "webgl",
        "javascript"
      ],
      "command": "const canvas = document.querySelector(\"canvas\"); const ctx = canvas.getContext(\"2d\");",
      "fullContent": "Loops de animação ultra-leves sem sobrecarregar a thread principal, renderização de partículas matemáticas e exportação via MediaRecorder API.",
      "filePath": "fullstack/canvas/animations/"
    },
    {
      "id": "linux-hostname-management",
      "title": "Hostname management",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para hostname management em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "hostname management"
      ],
      "command": "+ sudo nano /etc/hosts\n+ sudo nano /etc/hostname",
      "fullContent": "```\n+ sudo nano /etc/hosts\n+ sudo nano /etc/hostname\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-how-to-convert-webp-images-to-png-on-lin",
      "title": "How to convert .webp images to .png on Linux",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para how to convert .webp images to .png on linux em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "how to convert webp images to png on lin"
      ],
      "command": "~~~\nsudo apt update\nsudo apt install webp\nfor i in *.webp; do dwebp $i -o $i.out.png; done;\n~~~...",
      "fullContent": "~~~\nsudo apt update\nsudo apt install webp\nfor i in *.webp; do dwebp $i -o $i.out.png; done;\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-install-vboxguestadditions-iso",
      "title": "Install VBoxGuestAdditions iso",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para install vboxguestadditions iso em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "install vboxguestadditions iso"
      ],
      "command": "~~~shell\nreboot\nwget https://download.virtualbox.org/virtualbox/6.1.2/VBoxGuestAdditions_6.1.2.iso\nmkdir /media/iso\nsudo mount ~/Downloads/VBoxGuestAdditions_6....",
      "fullContent": "~~~shell\nreboot\nwget https://download.virtualbox.org/virtualbox/6.1.2/VBoxGuestAdditions_6.1.2.iso\nmkdir /media/iso\nsudo mount ~/Downloads/VBoxGuestAdditions_6.1.2.iso /media/iso -o loop\n/media/iso/VBoxLinuxAdditions.run\nyes\nreboot\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-install-p7zip",
      "title": "Install p7zip",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para install p7zip em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "install p7zip"
      ],
      "command": "~~~\nsudo apt-get install p7zip p7zip-full p7zip-rar\n~~~...",
      "fullContent": "~~~\nsudo apt-get install p7zip p7zip-full p7zip-rar\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-list",
      "title": "List",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para list em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "list"
      ],
      "command": "> list first 30 folders\n* ll -t | head -30 \n> list all folders from last 24 hours\n* find folder/ -maxdepth 2 -type f -name \"*.json\" -mtime -1 -exec grep -i 'string' {} \\;",
      "fullContent": "```\n> list first 30 folders\n* ll -t | head -30 \n> list all folders from last 24 hours\n* find folder/ -maxdepth 2 -type f -name \"*.json\" -mtime -1 -exec grep -i 'string' {} \\; \n  ```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-pdf-merge-ubuntu",
      "title": "PDF Merge Ubuntu",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para pdf merge ubuntu em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "pdf merge ubuntu"
      ],
      "command": "~~~\nconvert input1.jpg input1.pdf\nconvert input2.jpg input2.pdf\ngs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile=output.pdf input1.pdf input2.pdf\n\n# ...",
      "fullContent": "~~~\nconvert input1.jpg input1.pdf\nconvert input2.jpg input2.pdf\ngs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile=output.pdf input1.pdf input2.pdf\n\n# multiple files\nfor i in *.jpg; do convert $i $i.pdf; done\ngs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile=output.pdf *.pdf\n\n# compress\ngs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook   -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "learn-public-github-power-repos",
      "title": "Repositórios GitHub de Alto Impacto & Ferramentas Open Source",
      "category": "learning",
      "importance": "medium",
      "type": "guide",
      "icon": "star",
      "description": "Mapeamento de repositórios públicos no GitHub com implementações de referência em automação, pipelines, datasets e engenharia reversa.",
      "tags": [
        "github",
        "open-source",
        "repositórios",
        "inspiração",
        "projetos"
      ],
      "command": "Ver repositórios catalogados em Interesting_Gitbub_Public_Repos.md",
      "fullContent": "Lista selecionada de repositórios open-source com estrelas históricas e padrões arquiteturais prontos para estudo e reaproveitamento.",
      "filePath": "Interesting_Gitbub_Public_Repos.md"
    },
    {
      "id": "linux-surf-web",
      "title": "Surf web",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para surf web em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "surf web"
      ],
      "command": "lynx t3n.de -accept_all_cookies  -justify",
      "fullContent": "```bash\nlynx t3n.de -accept_all_cookies  -justify\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-sync-folders-from-drives",
      "title": "Sync folders from drives",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para sync folders from drives em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "sync folders from drives"
      ],
      "command": "* rsync --ignore-existing --recursive --progress /home/user/folder_sync/ /media/user/external_drive/folder_sync/",
      "fullContent": "```\n* rsync --ignore-existing --recursive --progress /home/user/folder_sync/ /media/user/external_drive/folder_sync/\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-timestamp",
      "title": "Timestamp",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para timestamp em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "timestamp"
      ],
      "command": "* date +%s > 1552925792",
      "fullContent": "```\n* date +%s > 1552925792\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "tool-typeahead-autocomplete",
      "title": "Typeahead Search & Autocomplete Engine",
      "category": "tools",
      "importance": "medium",
      "type": "tool",
      "icon": "wrench",
      "description": "Engine interativa de busca preditiva e autocomplete client-side com Typeahead.js para interfaces ultra-rápidas.",
      "tags": [
        "ferramenta-web",
        "autocomplete",
        "typeahead",
        "search",
        "ui",
        "live-tool",
        "produtividade"
      ],
      "command": "Abrir ferramenta: utiles/autocomplete_typeahead_js.html",
      "fullContent": "Ferramenta Web interativa disponível localmente em utiles/autocomplete_typeahead_js.html. Pode ser executada diretamente no navegador sem dependências externas.",
      "filePath": "utiles/autocomplete_typeahead_js.html",
      "toolUrl": "utiles/autocomplete_typeahead_js.html"
    },
    {
      "id": "linux-users-management",
      "title": "Users management",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para users management em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "users management"
      ],
      "command": "# add user\n+ sudo adduser newuser\n\n# remove user\n+ sudo deluser newuser\n+ sudo deluser --remove-home newuser\n\n# change passwd\n+ sudo passwd username\n\n-------\n\nsudo apt-get install adduser\n\nsudo adduser username\nsudo adduser username --shell /bin/sh\nsudo adduser username --groups sudo,admin\n\nsudo add...",
      "fullContent": "```\n# add user\n+ sudo adduser newuser\n\n# remove user\n+ sudo deluser newuser\n+ sudo deluser --remove-home newuser\n\n# change passwd\n+ sudo passwd username\n\n-------\n\nsudo apt-get install adduser\n\nsudo adduser username\nsudo adduser username --shell /bin/sh\nsudo adduser username --groups sudo,admin\n\nsudo adduser --gecos \"\" username\nsudo adduser --gecos \"\" --shell /bin/zsh --disabled-password username\nsudo adduser username sudo\nsudo adduser --disabled-password --gecos \"\" username\nsudo adduser username www-data \nsudo adduser --group admin \n\nsudo useradd --create-home --shell /bin/bash --user-group username\nsudo useradd -m -p <encryptedPassword> -s /bin/bash <user>\n\nsudo usermod -a -G group1,group2 username\nsudo usermod -aG sudo username\nsudo usermod -s /bin/bash $USER\nsudo useradd -d /home/$USER -s /bin/bash -G group -m $USER\n\nsudo passwd username \n\nsudo userdel -r username\nsudo userdel -f username\n\nsudo rm -r /home/username\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "ai-opencv-computer-vision",
      "title": "Visão Computacional: Detecção de Objetos & Barcode com OpenCV",
      "category": "ai",
      "importance": "medium",
      "type": "script",
      "icon": "eye",
      "description": "Scripts em Python para processamento digital de imagem, filtragem gaussiana, Canny edge detection e leitura de códigos de barras com OpenCV e pyzbar.",
      "tags": [
        "opencv",
        "computer-vision",
        "pyzbar",
        "image-processing",
        "python"
      ],
      "command": "pip install opencv-python pyzbar && python -c \"import cv2; print(cv2.__version__)\"",
      "fullContent": "Algoritmos práticos de visão computacional em tempo real para automação industrial, classificação de frames e extração de metadados visuais.",
      "filePath": "datamining/opencv_machinelearning/barcode_detection/"
    },
    {
      "id": "linux-clean-and-boost-os",
      "title": "[Clean and Boost OS]",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para [clean and boost os] em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "clean and boost os"
      ],
      "command": "> chrome chromium light loading\n* /usr/lib/chromium-browser/chromium-browser --disable-new-tab-first-run --enable-user-scripts --flag-switches-begin  --disable-accelerated-2d-canvas --disable-gpu-vsync --disable-threaded-animation --disable-webgl --js-flags=--harmony  --flag-switches-end --disable-g...",
      "fullContent": "##### Utiles Daily\n\n```\n> chrome chromium light loading\n* /usr/lib/chromium-browser/chromium-browser --disable-new-tab-first-run --enable-user-scripts --flag-switches-begin  --disable-accelerated-2d-canvas --disable-gpu-vsync --disable-threaded-animation --disable-webgl --js-flags=--harmony  --flag-switches-end --disable-gpu-process-prelaunch --no-sandbox\n\n* /usr/lib/chromium-browser/chromium-browser  --enable-user-scripts --flag-switches-begin --disable-accelerated-2d-canvas --disable-gpu-vsync --disable-threaded-animation --disable-webgl --js-flags=--harmony --flag-switches-end --disable-gpu-process-prelaunch --process-per-site --enable-low-end-device-mode --no-sandbox\n\n* /usr/lib/chromium-browser/chromium-browser  --enable-user-scripts --flag-switches-begin --disable-accelerated-2d-canvas --disable-gpu-vsync --disable-threaded-animation --disable-webgl --js-flags=--harmony --flag-switches-end --disable-gpu-process-prelaunch --enable-low-end-device-mode --no-sandbox --enable-low-res-tiling --process-per-site\n\n* /usr/lib/chromium-browser/chromium-browser  --enable-user-ripts --flag-switches-begin --disable-accelerated-2d-canvas --disable-gpu-vsync --disable-threaded-animation --disable-webgl --js-flags=--harmony --flag-switches-end --disable-gpu-process-prelaunch  --no-experiments --disable-notifications --no-referrers --new-window --enable-low-end-device-mode --restore-last-session --no-sandbox\n\n* /usr/lib/chromium-browser/chromium-browser  --enable-user-scripts --flag-switches-begin --disable-accelerated-2d-canvas --disable-gpu-vsync --disable-threaded-animation --disable-webgl --js-flags=--harmony --flag-switches-end --disable-gpu-process-prelaunch  --no-experiments --disable-notifications --no-referrers --new-window --enable-low-end-device-mode --restore-last-session  --no-sandbox --disable-gpu  --disable-software-rasterizer --enable-gpu-rasterization\n\n* chromium-browser --enable-user-scripts --flag-switches-begin --disable-accelerated-2d-canvas --disable-gpu-vsync --disable-threaded-animation --disable-webgl --js-flags=--harmony --flag-switches-end --disable-gpu-process-prelaunch --no-experiments --disable-notifications --no-referrers --new-window --enable-low-end-device-mode --restore-last-session  --disable-gpu --disable-software-rasterizer --enable-gpu-rasterization --new-window --aggressive-cache-discard --disable-notifications --disable-remote-fonts --disable-reading-from-canvas --disable-remote-playback-api --disable-shared-workers --disable-voice-input --enable-aggressive-domstorage-flushing --disable-application-cache \n\n* chromium --process-per-site --no-sandbox --args --js-flags=\"--max_old_space_size=2192\" --purge-memory-button\n* google-chrome --process-per-site --no-sandbox --args --js-flags=\"--max_old_space_size=2192\"  --purge-memory-button\n\n* chromium --process-per-site --purge-memory-button --enable-low-end-device-mode --enable-low-res-tiling --disable-notifications --no-referrers --new-window\n* google-chrome --process-per-site --enable-low-res-tiling --no-referrers --new-window \n* chromium --process-per-site --no-sandbox --args --js-flags=\"--max_old_space_size=2192\" --purge-memory-button\n* google-chrome --process-per-site --no-sandbox --args --js-flags=\"--max_old_space_size=2192\" --max-old-space-size=2048\n\n* google-chrome --wm-window-animations-disabled --autoplay-policy=no-user-gesture-required --animation-duration-scale=0 --disable-threaded-animation --no-experiments --disable-notifications --no-referrers --new-window --enable-low-end-device-mode --restore-last-session --disable-remote-fonts --disable-remote-playback-api --disable-voice-input\n\n* chromium-browser --bound-session-cookie-rotation-delay --disable-partitioned-cookies --disable-notifications --disable-ipc-flooding-protection --disable-print-preview --disable-remote-fonts  --disable-renderer-accessibilit --disable-threaded-animation  --disable-virtual-keyboard\n\n* google-chrome  --bound-session-cookie-rotation-delay --disable-partitioned-cookies --disable-notifications --disable-ipc-flooding-protection --disable-print-preview --disable-remote-fonts  --disable-renderer-accessibilit --disable-threaded-animation  --disable-virtual-keyboard --disable-print-preview\n\n\n--disable-frame-rate-limit --disable-gpu --disable-gpu-vsync --max-gum-fps=\"9999\"\n\nsnap run chromium --enable-logging=stderr --v=1 &> /tmp/chromium.log\njournalctl -rn1000 > /tmp/journal.log\njournalctl -r | head -n 1000 > /tmp/journal.log\n\n```\n\n```\n* chromium --process-per-site\n* google-chrome \n* brave \n```\n\n```\n> chrome://flags\n* --no-sandbox --site-per-process --process-per-site --enable-low-end-device-mode --disk-cache-size=104857600\n* --process-per-site-instance --process-per-site --process-per-tab --single-process --args  –disk-cache-size=10 \n> firefox\n* firefox -no-remote -new-tab -console -purgecaches\n* firefox -no-remote -new-window -p sidekick  -new-instance -P \n* firefox -no-remote -allow-downgrade -private -purgecaches -safe-mode -p sidekick -P\n```\n\n```\n> open multiple tabs \n* Chromium:\n* xargs google-chrome --new-tab < urls.txt\n* xargs chromium-browser --new-tab < urls.txt\n* Firefox:\n* xargs -L1 firefox -new-tab < urls.txt\n* create online clickable list https://www.linkrr.com/\n* create online bookmark https://atkinsio.com/bookmarks-html-generator/\n```\n\n```\n> boost cpu\n* for i in {0..7}; do echo performance | sudo tee /sys/devices/system/cpu/cpu\"$i\"/cpufreq/scaling_governor ; done\n> manage cpu performance\n> http://manpages.ubuntu.com/manpages/bionic/man8/x86_energy_perf_policy.8.html\n* sudo apt install linux-tools-5.4.0-31-generic linux-tools-generic linux-cloud-tools-generic linux-tools-common -y\n* sudo x86_energy_perf_policy -v balance-performance\n```\n\n##### vm settings\n\n```\n* sudo sysctl -w vm.swappiness=20\n* sudo sysctl -w vm.swappiness=20 && sudo sysctl vm.vfs_cache_pressure=50 && sudo sysctl -w net.ipv4.ip_forward=1\n* sudo sysctl -w vm.swappiness=10 && sudo sysctl -w vm.vfs_cache_pressure=50 && sudo sysctl -w vm.dirty_ratio=10 && sudo sysctl -w vm.dirty_background_ratio=5 && sudo sync && sudo sysctl -w vm.drop_caches=3\n```\n\n##### wlan mtu\n\n```\n* ip link show | grep mtu\n* sudo ip link set wlp3s0 mtu 1400 up\n* ping -c 3 -M do -s 400 google.com\n```\n\n##### Drop cache\n\n```\n* cat /proc/sys/vm/swappiness\n* sync && echo 3 | sudo tee /proc/sys/vm/drop_caches\n* echo 3 | sudo tee /proc/sys/vm/drop_caches && sudo /etc/init.d/networking restart \n* sudo swapoff -a && sudo swapon -a && printf '\\n%s\\n' 'Swap Cleared'\n```\n\n##### DNS Flush networking\n\n```\n* sudo /etc/init.d/dns-clean restart && sudo /etc/init.d/networking force-reload && sudo /etc/init.d/nscd restart && sudo service network-manager restart\n```\n\n##### Disable services\n\n```\n* sudo service apache2 status\n* sudo update-rc.d -f apache2 disable\n* sudo update-rc.d apache2 enable\n* sudo update-rc.d apache2 disable\n* service --status-all\n* sudo systemctl disable apache2\n* sudo systemctl disable mysql\n```\n\n##### clean DNS\n\n```\n* sudo /etc/init.d/dns-clean reload && echo 2 | sudo tee /proc/sys/vm/drop_caches && sudo service network-manager reload \n```\n\n##### clear Browsers Cache Data\n\n```\n* chrome://settings/clearBrowserData\n* ll ~/.cache/chromium/Default/\n* rm -rf ~/.cache/chromium\n* rm -rf ~/.cache/google-chrome\n* rm ~/.cache/google-chrome\n* rm ~/.config/google-chrome/Default/\n* rm ~/.mozilla/firefox/*.default/cookies.sqlite\n* rm -r ~/.cache/mozilla/firefox/*.default/*\n* rm -r ~/.cache/chromium/Default/Cache/*\n```\n\n##### stop Services\n\n```\n* service --status-all\n* sudo service network-manager reload \n* sudo service bluetooth stop && sudo service virtualbox stop\n* sudo service whoopsie stop && sudo service cups stop && sudo service cups-browsed stop\n* sudo service mysql stop &&  sudo service apache2 stop &&  sudo service openvpn stop && sudo service virtualbox stop \n* service --status-all\n```\n\n##### Accessing local data on VM using python SimpleHTTPServer\n\n```\n* python -m SimpleHTTPServer (deprecated python2)\n* python3 -m http.server 8888\n* ufw allow 8888/tcp\n* http://localhost:8000\n* php -S localhost:4000\n* PHP_CLI_SERVER_WORKERS=8 php -S localhost:8000 -t htdocs\n\n\nsudo apt install net-tools\nifconfig\nip addr show\npython3 -m http.server 8888\n\n\n```\n\n##### list packages\n\n```\n* dpkg --get-selections | grep -v deinstall\n* dpkg -l\n* dpkg-query -l | less\n* apt list --installed\n* apt list --installed | less\n* apt list\n* snap list\n* pip list\n* pip3 list\n* aptitude search '~i!~M'\n\n# update snap packs\n# sudo snap refresh --list\n# snap refresh --time\nsudo killall snap-store &&  sudo snap refresh \n```\n\n##### snap packages\n\n```\nsnap list\n\nsudo snap install code --classic\nsudo snap install rider --classic\nsudo snap install clion --classic\nsudo snap install pycharm-community --classic\nsudo snap install phpstorm --classic\nsudo snap install intellij-idea-community --classic\n\nsudo snap save\nsnap saved\nsudo sh -c 'rm -rf /var/lib/snapd/cache/*'\nsudo rm -rf /var/lib/snapd/cache/*\nsudo snap remove --purge clion\nsnap list --all\nsudo snap set system refresh.retain=2\nsnap refresh\nsnap remove pycharm-community --revision=500\ndu -sh /var/lib/snapd/snaps\nls -lh /var/lib/snapd/snaps\n\n\n////////// remove snapshots //////////\n\nsnap saved\nsnap forget 6  # id listed\nsudo ls /var/lib/snapd/snapshots\n\n```\n\n##### remove packages\n\n```\n* dpkg -r <package> \n* apt remove --purge <package> \n* snap remove <package>\n* pip uninstall <package>\n```\n\n##### clean install update\n\n```\n* https://wiki.ubuntuusers.de/apt/apt-get/\n* pip install --upgrade pip\n* sudo apt-get autoremove\n* sudo apt-get autoclean\n\nremove all old compiled kernels\nsudo apt autoremove --purge\n\ndpkg -l | grep linux-image\nsudo apt update && sudo apt autoclean && sudo apt autoremove\n\n```\n\n##### clean cache folder\n\n```\n* sudo rm -rf .cache/pip/http/*\n* find ~/.cache/ -type f -atime +365 -delete\n* find ~/.cache/pip/http/ -depth -type f -atime +365 \n* find ~/.cache/pip/ -depth -type f -atime +3\n* ? ~/.local/lib/pythonX.X/site-packages\n```\n\n##### system  monitoring\n\n```\n* gnome-system-monitor\n* baobab [GNOME Disk Usage Analyzer]\n```\n\n##### ubuntu optimisation - disable tracking and clear journalctl file\n\n```\n* gsettings set org.freedesktop.Tracker.Miner.Files low-disk-space-limit 1\n* gsettings set org.freedesktop.Tracker.Miner.Files enable-monitors false\n* gsettings set org.freedesktop.Tracker.Miner.Files crawling-interval -2\n* tracker daemon pause\n* sudo journalctl --vacuum-size=20M && du -hs /var/log/journal/\n* ps aux | grep zeitgeist\n* zeitgeist-daemon -r --log-level=DEBUG\n* zeitgeist-daemon --quit --vacuum\n* pkill -c zeitgeist-daemon\n* kill <zeitgeist-daemon-PID>\n* sudo find / -name '*' -size +1G\n* sudo find / -type f -name '*.log' -size +20M\n* sudo truncate -s0 error_log\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-manage-swap",
      "title": "[Manage SWAP]",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para [manage swap] em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "manage swap"
      ],
      "command": "* sudo fallocate -l 6G /swapfile2 && sudo chmod 600 /swapfile2 && sudo mkswap /swapfile2 && sudo swapon /swapfile2 && sudo sysctl vm.swappiness=20\n* sudo swapoff -a && sudo fallocate -l 4G /swapfile3 && sudo chmod 600 /swapfile3 && sudo mkswap /swapfile3 && sudo swapon /swapfile3 -a && swapon -s && ...",
      "fullContent": "##### Add temporary Swap file on Ubuntu 18.04\n\n```\n* sudo fallocate -l 6G /swapfile2 && sudo chmod 600 /swapfile2 && sudo mkswap /swapfile2 && sudo swapon /swapfile2 && sudo sysctl vm.swappiness=20\n* sudo swapoff -a && sudo fallocate -l 4G /swapfile3 && sudo chmod 600 /swapfile3 && sudo mkswap /swapfile3 && sudo swapon /swapfile3 -a && swapon -s && swapon --show\n* sudo sudo rm /swapfile3 \n```\n\n##### Expand Swap file in Ubuntu to 4GB or more\n\n```\n* sudo swapoff -a && sudo dd if=/dev/zero of=/swapfile bs=500M count=8 && sudo mkswap /swapfile && sudo swapon /swapfile -a && swapon -s && swapon --show \n* echo \"vm.swappiness=10\" | sudo tee -a /etc/sysctl.conf\n* echo 3 | sudo tee /proc/sys/vm/drop_caches\n* sudo sh -c \"/usr/bin/echo 3 > /proc/sys/vm/drop_caches\"\n* size=\"4G\" && file_swap=/swapfile_$size.img && sudo touch $file_swap && sudo fallocate -l $size /$file_swap && sudo mkswap /$file_swap && sudo swapon -p 20 /$file_swap\n\n```\n\n#### [Manage RamDisk]\n\n```\n* sudo mkdir /tmp/ramdisk\n* sudo chmod 777 /tmp/ramdisk\n```\n\n##### allocate 1G for the RAM disk\n\n```\n* sudo mount -t tmpfs -o size=1024m myramdisk /tmp/ramdisk \n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-add-ip4-to-vbox",
      "title": "add ip4 to vbox",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para add ip4 to vbox em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "add ip4 to vbox"
      ],
      "command": "~~~\nNote: If the VM only gets IPv6, disable IPv6 temporarily via GRUB_CMDLINE_LINUX_DEFAULT=\"ipv6.disable=1 quiet splash\" in /etc/default/grub and reboot. This ...",
      "fullContent": "~~~\nNote: If the VM only gets IPv6, disable IPv6 temporarily via GRUB_CMDLINE_LINUX_DEFAULT=\"ipv6.disable=1 quiet splash\" in /etc/default/grub and reboot. This isolates whether IPv4 is blocked by IPv6 interference. \n\nnmcli connection show\nFor Linux VMs (e.g., Ubuntu):\n\nUse nmcli to set a static IP:\nsudo nmcli connection modify \"UUID\" IPv4.address \"192.168.1.100/24\"\nsudo nmcli connection modify \"UUID\" IPv4.gateway \"192.168.1.1\"\nsudo nmcli connection modify \"UUID\" IPv4.dns \"8.8.8.8\"\nsudo nmcli connection modify \"UUID\" IPv4.method manual\nsudo nmcli connection down \"UUID\"\nsudo nmcli connection up \"UUID\"\n\nEdit the file:\nsudo nano /etc/network/interfaces\n\nReplace the dhcp line with:\nauto eth0\niface eth0 inet static\n    address 192.168.1.100\n    netmask 255.255.255.0\n    gateway 192.168.1.1\n    dns-nameservers 8.8.8.8 1.1.1.1\n\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-after-login",
      "title": "after login",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para after login em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "after login"
      ],
      "command": "~~~\nsudo sysctl -w vm.swappiness=20\necho 3 | sudo tee /proc/sys/vm/drop_caches\nfor i in {1..5}; do  echo 3 | sudo tee /proc/sys/vm/drop_caches; done\nsudo system...",
      "fullContent": "~~~\nsudo sysctl -w vm.swappiness=20\necho 3 | sudo tee /proc/sys/vm/drop_caches\nfor i in {1..5}; do  echo 3 | sudo tee /proc/sys/vm/drop_caches; done\nsudo systemctl reload-or-restart networkd-dispatcher.service\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-boot-uefi-update",
      "title": "boot uefi update",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para boot uefi update em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "boot uefi update"
      ],
      "command": "~~~\nsudo fwupdmgr update\nefibootmgr -v\n\n\nsudo ls /boot/efi/EFI/Boot/ \n# bkpbootx64.efi\tbootx64.efi  fbx64.efi\tmmx64.efi\nsudo ls -lah /boot/efi/EFI/Boot/\n\nsudo r...",
      "fullContent": "~~~\nsudo fwupdmgr update\nefibootmgr -v\n\n\nsudo ls /boot/efi/EFI/Boot/ \n# bkpbootx64.efi\tbootx64.efi  fbx64.efi\tmmx64.efi\nsudo ls -lah /boot/efi/EFI/Boot/\n\nsudo rm /boot/efi/EFI/Boot/bkpbootx64.efi\nsudo fwupdmgr update\n\nfwupdmgr --help\nsudo mv /boot/efi/EFI/Boot/shimx64.efi ~/Documents\n$ sudo fwupdmgr update\nsudo update-grub\nsudo fwupdmgr refresh --force\n\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-boot-repair-exfat-ext3-ext4",
      "title": "boot-repair *** exfat ext3 ext4",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para boot-repair *** exfat ext3 ext4 em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "boot repair exfat ext3 ext4"
      ],
      "command": "~~~\nsudo lsblk -f\n\nsudo apt-get install ntfs-3g\n\nsudo ntfsfix -n /dev/sda1 # dry run\nsudo ntfsfix -b /dev/sda1 # -b or --clear-bad-sectors\nsudo ntfsfix -d /dev/...",
      "fullContent": "~~~\nsudo lsblk -f\n\nsudo apt-get install ntfs-3g\n\nsudo ntfsfix -n /dev/sda1 # dry run\nsudo ntfsfix -b /dev/sda1 # -b or --clear-bad-sectors\nsudo ntfsfix -d /dev/sda1 # clearing the volume dirty flag if the volume can be fixed and mounted.\n\nsudo fdisk -l\nsudo badblocks -sv /dev/mmcblk0\n\nsudo badblocks -sv /dev/mmcblk0  > bad-blocks-result\nsudo fsck -t ext4 -l bad-blocks-result /dev/mmcblk0\n\nsudo badblocks -b 4096 -c 4096 -s /dev/mmcblk0\nsudo fsck -r /dev/mmcblk0\nsudo fsck -t ext3 -l bad-blocks-result /dev/mmcblk0\n\ngnome-disks\nsudo dd if=/dev/zero of=/dev/mmcblk0 count=10000\n\nsudo ntfsfix -b /dev/mmcblk0\nsudo ntfsfix -d /dev/mmcblk0 \n\nsudo apt-get install smartmontools\nsudo smartctl -i -d /dev/mmcblk0\n\nsudo apt install exfatprogs\nsudo fsck.exfat -r /dev/mmcblk0\n\nsudo e2fsck -b 8193 /dev/mmcblk0\nsudo e2fsck -b 32768 /dev/mmcblk0\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-check-and-repair-disk",
      "title": "check and repair disk",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para check and repair disk em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "check and repair disk"
      ],
      "command": "~~~\n\nsudo apt-get install smartmontools\nsudo smartctl -a /dev/sda | less\nsmartctl -i /dev/sda\n\n# check drive sectors\nsudo badblocks -v /dev/sda -s \nsudo badbloc...",
      "fullContent": "~~~\n\nsudo apt-get install smartmontools\nsudo smartctl -a /dev/sda | less\nsmartctl -i /dev/sda\n\n# check drive sectors\nsudo badblocks -v /dev/sda -s \nsudo badblocks -v /dev/sda1 > ~/bad_sectors.txt\n\nsudo apt-get install gsmartcontrol\ngnome-disks\n\n\n# list disk\nlsblk \nlsblk | grep disk\nsudo lshw -class disk\nlsblk -io KNAME,TYPE,SIZE,MODEL\nlshw -class disk\nhwinfo --disk\nhdparm -i /dev/sda\nsfdisk -l  \nfdisk -l  \n\nsudo gparted\nsudo e2fsck -fccky /dev/sda1 \n\nsudo apt install lsscsi\nlsscsi\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-clear-swap",
      "title": "clear swap",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para clear swap em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "clear swap"
      ],
      "command": "~~~\nsudo swapoff -a; sleep 15; sudo swapon -a \n~~~...",
      "fullContent": "~~~\nsudo swapoff -a; sleep 15; sudo swapon -a \n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-clear-swap-chrome",
      "title": "clear swap chrome",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para clear swap chrome em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "clear swap chrome"
      ],
      "command": "~~~\nrm -rf ~/.cache/google-chrome/\n\nsudo swapoff -a; sudo swapon -a\nsudo swapoff -a; sleep 15; sudo swapon -a \n\nsudo sysctl vm.swappiness=10\nsudo sync && echo 3...",
      "fullContent": "~~~\nrm -rf ~/.cache/google-chrome/\n\nsudo swapoff -a; sudo swapon -a\nsudo swapoff -a; sleep 15; sudo swapon -a \n\nsudo sysctl vm.swappiness=10\nsudo sync && echo 3 | sudo tee /proc/sys/vm/drop_caches\nfree && sync && echo 3 | sudo tee /proc/sys/vm/drop_caches && free\nfree -m && sync && echo 3 > /proc/sys/vm/drop_caches && free -m\n\nexport LANGUAGE=en-US && google-chrome --lang=en-US,en --disable-translate --ash-force-desktop --disable-3d-apis --disable-background-mode --disable-preconnect --dns-prefetch-disable --no-experiments --purge-memory-button --no-referrers --no-pings --start-maximized --disable-default-apps -disable-features=Translate --aggressive-cache-discard --disable-notifications --new-window --disable-dev-shm-usage --block-new-web-contents\n\nexport LANGUAGE=en-US && google-chrome  --bound-session-cookie-rotation-delay --disable-partitioned-cookies --disable-notifications --disable-ipc-flooding-protection --disable-print-preview --disable-remote-fonts  --disable-renderer-accessibilit --disable-threaded-animation  --disable-virtual-keyboard --disable-print-preview --block-new-web-contents --new-window --no-pings --start-maximized --disable-default-apps --no-experiments --no-referrers -disable-preconnect --dns-prefetch-disable --bwsi\n\nchrome://restart \nchrome://gpu\nchrome://flags/\n\nsystemctl reboot -i\n\n--in-process-gpu --enable-chrome-browser-cloud-management\n--disable-frame-rate-limit --disable-gpu-vsync --max-gum-fps=\"9999\" --disable-gpu \n--ignore-gpu-blocklist  --enable-zero-copy --enable-gpu-rasterization --enable-native-gpu-memory-buffers --enable-gpu-memory-buffer-video-frames\n \n \n\nsystemd-run -p CPUQuota=20% chrome\nps ax | wc -l\n\nhttps://peter.sh/experiments/chromium-command-line-switches/\n\n--no-sandbox\n--disable-gpu-sandbox\n--enable-webgl \n--ignore-gpu-blacklist\n--disable-gpu\n--isolate-origins --disable-site-isolation-trials -enable-low-end-device-mode\n\nchromium-browser --single-process --enable-low-end-device-mode --memory-model=low --process-per-tab\nexport LANGUAGE=en-US && brave  --single-process --enable-low-end-device-mode  --process-per-tab\nexport LANGUAGE=en-US && chromium-browser  --single-process --enable-low-end-device-mode  --process-per-tab\nexport LANGUAGE=en-US && google-chrome  --disable-features=ScriptStreaming -enable-low-end-device-mode --process-per-tab\n\n--user-agent=\"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 6.0)\"\n--user-agent=\"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; BOIE9;NLNL)\"\n--user-agent=\"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)\"\n\nMozilla/5.0 (Windows NT 6.1) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4\nMozilla/5.0 (Windows NT 6.1; rv:16.0) Gecko/20100101 Firefox/16.0\n\n--use-mobile-user-agent\n\n#no gpu\n/usr/bin/google-chrome --lang=en-US,en --disable-dev-shm-usage --block-new-web-contents --no-experiments --disable-default-apps --disable-notifications --log-level=1 --no-ping --disable-background-processes --disable-picture-in-picture --process-per-tab --purge-memory-button --disable-features=UseEcoQoSForBackgroundProcess --disable-histogram-customizer --disable-in-process-stack-traces --disable-low-end-device-mode --disable-low-res-tiling --disable-print-preview --disable-breakpad --noerrdialogs --use-fake-device-for-media-stream --disable-features=StreamScripting --new-window --aggressive-cache-discard --disable-notifications --disable-remote-playback-api --disable-shared-workers --disable-voice-input --enable-aggressive-domstorage-flushing --args --js-flags=--max_old_space_size=988 --ignore-gpu-blocklist --enable-zero-copy --enable-gpu-rasterization --enable-native-gpu-memory-buffers --enable-gpu-memory-buffer-video-frames --ozone-platform=wayland --origin-trial-disabled-features=CanvasTextNg|WebAssemblyCustomDescriptors --render-node-override=/dev/dri/renderD128\n\n#gpu\ntaskset -c 0,1 google-chrome --lang=en-US,en --disable-dev-shm-usage --block-new-web-contents --no-experiments --disable-default-apps --disable-notifications --log-level=1 --no-ping --disable-background-processes --disable-picture-in-picture --process-per-tab --purge-memory-button --disable-features=UseEcoQoSForBackgroundProcess --disable-histogram-customizer --disable-in-process-stack-traces --disable-low-end-device-mode --disable-low-res-tiling --disable-print-preview --disable-breakpad --noerrdialogs --use-fake-device-for-media-stream --disable-features=StreamScripting --new-window --aggressive-cache-discard --disable-notifications --disable-remote-playback-api --disable-shared-workers --disable-voice-input --enable-aggressive-domstorage-flushing --args --js-flags=--max_old_space_size=988 --ignore-gpu-blocklist --enable-zero-copy --enable-gpu-rasterization --enable-native-gpu-memory-buffers --enable-gpu-memory-buffer-video-frames\n\n\ngoogle-chrome --disable-quick-access --disable-features=fast\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-disable-history",
      "title": "disable history",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para disable history em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "disable history"
      ],
      "command": "~~~\nset +o history  # disable the history\nhistory\nset -o history  #  re-enable history\nhistory -c\n~~~...",
      "fullContent": "~~~\nset +o history  # disable the history\nhistory\nset -o history  #  re-enable history\nhistory -c\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-docker-post-installation-steps-for-linux",
      "title": "docker Post-installation steps for Linux",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para docker post-installation steps for linux em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "docker post installation steps for linux"
      ],
      "command": "https://docs.docker.com/engine/install/linux-postinstall/\n\nsudo apt install docker.io docker-compose\nsudo groupadd docker\nsudo usermod -aG docker $USER\nsudo systemctl enable docker.service\nsudo systemctl enable containerd.service\nsystemctl --user show-environment\nreboot",
      "fullContent": "```\nhttps://docs.docker.com/engine/install/linux-postinstall/\n\nsudo apt install docker.io docker-compose\nsudo groupadd docker\nsudo usermod -aG docker $USER\nsudo systemctl enable docker.service\nsudo systemctl enable containerd.service\nsystemctl --user show-environment\nreboot\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-firefox-alternative",
      "title": "firefox alternative",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para firefox alternative em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "firefox alternative"
      ],
      "command": "~~~\nsudo apt update && sudo apt install extrepo -y\nsudo extrepo enable librewolf\nsudo apt update && sudo apt install librewolf -y\nsudo apt remove librewolf\n~~~...",
      "fullContent": "~~~\nsudo apt update && sudo apt install extrepo -y\nsudo extrepo enable librewolf\nsudo apt update && sudo apt install librewolf -y\nsudo apt remove librewolf\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-fix-bash-call",
      "title": "fix bash call",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para fix bash call em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "fix bash call"
      ],
      "command": "~~~\nsudo chsh -s /usr/bin/bash\necho $SHELL  # /usr/bin/zsh\nsudo chsh -s /usr/bin/bash $(whoami) # or sudo chsh -s /bin/bash $(whoami)\n\n# sudo usermod -s /bin/ba...",
      "fullContent": "~~~\nsudo chsh -s /usr/bin/bash\necho $SHELL  # /usr/bin/zsh\nsudo chsh -s /usr/bin/bash $(whoami) # or sudo chsh -s /bin/bash $(whoami)\n\n# sudo usermod -s /bin/bash username # ok\n# sudo chsh -s /bin/bash username\n# sudo dpkg-reconfigure dash\n# cat /etc/shells\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-generate-new-file",
      "title": "generate new file",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para generate new file em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "generate new file"
      ],
      "command": "~~~\ntouch  web_journey/search_$(date +%s).txt\n~~~...",
      "fullContent": "~~~\ntouch  web_journey/search_$(date +%s).txt\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-generate-new-ssh-key",
      "title": "generate new ssh key",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para generate new ssh key em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "generate new ssh key"
      ],
      "command": "ssh-keygen -t rsa -b 4096 -C \"somemail@outlook.com\"\neval \"$(ssh-agent -s)\"\n\n# debug\nssh -vvv git@bitbucket.org -p 29420\nssh-keygen -l -f ~/.ssh/id_rsa",
      "fullContent": "```\nssh-keygen -t rsa -b 4096 -C \"somemail@outlook.com\"\neval \"$(ssh-agent -s)\"\n\n# debug\nssh -vvv git@bitbucket.org -p 29420\nssh-keygen -l -f ~/.ssh/id_rsa\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-get-open-ports",
      "title": "get open ports",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para get open ports em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "get open ports"
      ],
      "command": "~~~\nnmap --top-ports 50 -v localhost\nnmap --open -v localhost\n~~~...",
      "fullContent": "~~~\nnmap --top-ports 50 -v localhost\nnmap --open -v localhost\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-get-random-line",
      "title": "get random line",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para get random line em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "get random line"
      ],
      "command": "~~~\nsort -R file.csv | head -n 1\nsort -R file.csv | head -n 1 | cut -d \",\" -f 2-4\n~~~...",
      "fullContent": "~~~\nsort -R file.csv | head -n 1\nsort -R file.csv | head -n 1 | cut -d \",\" -f 2-4\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-get-ubuntu-debian-version",
      "title": "get ubuntu debian version",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para get ubuntu debian version em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "get ubuntu debian version"
      ],
      "command": "~~~\ncat /etc/debian_version\nlsb_release -a\nuname -r -a\n~~~...",
      "fullContent": "~~~\ncat /etc/debian_version\nlsb_release -a\nuname -r -a\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-grub-repair",
      "title": "grub-repair ***",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para grub-repair *** em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "grub repair"
      ],
      "command": "~~~\nhttps://help.ubuntu.com/community/Boot-Repair\n\nsudo add-apt-repository ppa:yannubuntu/boot-repair && sudo apt update\nsudo apt install -y boot-repair && boot...",
      "fullContent": "~~~\nhttps://help.ubuntu.com/community/Boot-Repair\n\nsudo add-apt-repository ppa:yannubuntu/boot-repair && sudo apt update\nsudo apt install -y boot-repair && boot-repair\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-ifconfig",
      "title": "ifconfig",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para ifconfig em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "ifconfig"
      ],
      "command": "~~~\nhttps://ubuntu.com/blog/if-youre-still-using-ifconfig-youre-living-in-the-past\nhttps://wiki.ubuntuusers.de/ip/\n\nsudo apt install net-tools\nsudo apt-get inst...",
      "fullContent": "~~~\nhttps://ubuntu.com/blog/if-youre-still-using-ifconfig-youre-living-in-the-past\nhttps://wiki.ubuntuusers.de/ip/\n\nsudo apt install net-tools\nsudo apt-get install -y iputils-ping\nifconfig\nip address show\nip link show\nip link set DEVICE up or ip link set DEVICE down\nip -c a\nip route show | grep 'default' \n\nservice --status-all\napt list -i\napt list -i | grep docker\nsudo apt remove docker.io docker-compose\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-investigate-open-port",
      "title": "investigate open port",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para investigate open port em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "investigate open port"
      ],
      "command": "~~~\nnetstat -tulp\nsudo lsof -i :35139\nsudo ufw status\nsudo netstat -tulpen | grep avahi\nsudo systemctl stop avahi-daemon\n~~~...",
      "fullContent": "~~~\nnetstat -tulp\nsudo lsof -i :35139\nsudo ufw status\nsudo netstat -tulpen | grep avahi\nsudo systemctl stop avahi-daemon\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-move-files-by-odd-number-par-impair",
      "title": "move files by odd number - par impair",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para move files by odd number - par impair em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "move files by odd number par impair"
      ],
      "command": "~~~\nmkdir -p odd1 && for f in *[02468]*.jpeg; do mv \"$f\" odd1/\"$f\"; done\nmkdir -p odd2 && for f in *[13579]*.jpeg; do mv \"$f\" odd2/\"$f\"; done\n\nfor f in *[02468]...",
      "fullContent": "~~~\nmkdir -p odd1 && for f in *[02468]*.jpeg; do mv \"$f\" odd1/\"$f\"; done\nmkdir -p odd2 && for f in *[13579]*.jpeg; do mv \"$f\" odd2/\"$f\"; done\n\nfor f in *[02468]*.jpeg; do echo \"$f\"; done\nfor f in *[13579]*.jpeg; do echo \"$f\"; done\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-move-first-1000-files-split-folder-files",
      "title": "move first 1000 files - split folder files in subfolders",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para move first 1000 files - split folder files in subfolders em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "move first 1000 files split folder files"
      ],
      "command": "~~~\nls | wc -l\nmv -v `ls | head -5000` ./sub1\n\nstrace -vf ls -l \n~~~...",
      "fullContent": "~~~\nls | wc -l\nmv -v `ls | head -5000` ./sub1\n\nstrace -vf ls -l \n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-open-port",
      "title": "open port",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para open port em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "open port"
      ],
      "command": "~~~\nsudo firewall-cmd --add-port=4000/tcp --permanent\nsudo firewall-cmd --reload\n\nsudo ufw allow 4000/tcp\n\nsudo iptables -A INPUT -p tcp --dport 4000 -j ACCEPT ...",
      "fullContent": "~~~\nsudo firewall-cmd --add-port=4000/tcp --permanent\nsudo firewall-cmd --reload\n\nsudo ufw allow 4000/tcp\n\nsudo iptables -A INPUT -p tcp --dport 4000 -j ACCEPT   \n\n#chk\nss -lntu | grep :4000   \nnetstat -na | grep :4000  \n\n\nsudo ufw allow ssh\nsudo ufw allow 22\nsudo ufw delete 22/tcp\nsudo ufw status\nsudo ufw status numbered\nsudo ufw status verbose\nsudo ufw show added\nsudo ufw reset\n\nGUI\nhttps://help.ubuntu.com/community/Gufw\nsudo apt-get install gufw\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-split-big-files-in-chunks",
      "title": "split big files in chunks",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para split big files in chunks em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "split big files in chunks"
      ],
      "command": "~~~\n\nsplit -b 1G -d bigfile bigfile-part\ncat bigfile-part* > bigfile\n\n~~~...",
      "fullContent": "~~~\n\nsplit -b 1G -d bigfile bigfile-part\ncat bigfile-part* > bigfile\n\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-stop-tracker-miner",
      "title": "stop tracker-miner",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para stop tracker-miner em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "stop tracker miner"
      ],
      "command": "~~~\nTemporary Solution: Kill the Process\n\npkill tracker-miner-fs\n# Or if you have tracker3\npkill tracker-miner-fs-3\nsystemctl --user mask tracker-miner-fs-3.ser...",
      "fullContent": "~~~\nTemporary Solution: Kill the Process\n\npkill tracker-miner-fs\n# Or if you have tracker3\npkill tracker-miner-fs-3\nsystemctl --user mask tracker-miner-fs-3.service tracker-extract-3.service tracker-writeback-3.service tracker-miner-fs-control-3.service tracker-xdg-portal-3.service\n\ntracker3 reset -s -r\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-tasksel-and-taskset",
      "title": "tasksel and taskset",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para tasksel and taskset em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "tasksel and taskset"
      ],
      "command": "~~~\nsudo apt-get install tasksel\ntasksel --list-tasks\ntasksel --task-desc web-server \ntasksel --task-desc ssh-server \n\n------\n\n# taskset\n\ntaskset -c 0,1 firefox...",
      "fullContent": "~~~\nsudo apt-get install tasksel\ntasksel --list-tasks\ntasksel --task-desc web-server \ntasksel --task-desc ssh-server \n\n------\n\n# taskset\n\ntaskset -c 0,1 firefox -turbo\n\ntaskset -c 0,1 google-chrome --disable-notifications --no-pings --no-referrers  --no-default-browser-check --process-per-tab\n\ntaskset -c 0,1 google-chrome --lang=en-US,en --disable-translate --disable-dev-shm-usage --block-new-web-contents --no-experiments --disable-default-apps --disable-notifications --new-window --log-level=1\n\ntaskset -c 0,1 chromium-browser --single-process --enable-low-res-tiling --enable-low-end-device-mode --disable-default-apps\n\ntaskset -c 0,1  google-chrome --process-per-tab --disable-ipc-flooding-protection\n\ntaskset -c 0,1  pycharm-community\n\ntaskset -c 0,1  chromium-browser --single-process --disable-site-isolation-trials --isolate-origins --renderer-process-limit=2 --enable-low-end-device-mode\n\n# get cpu count\nnproc --all\nlscpu\nlscpu --online --parse=Core,Socket\nlscpu -ap\ngrep -c 'cpu[0-9]' /proc/stat\nlscpu -e\n\n# limit cpu usage \n\nsystemd-run -p CPUQuota=25% google-chrome \nsystemd-run -p CPUQuota=25% pycharm-community\nsystemd-run -p CPUQuota=30% chromium-browser\nsystemd-run -p \"CPUQuota=50\" brave\n\nsudo apt install cpulimit\n#cpulimit brave -l 50 -b -k -r\n#cpulimit brave -l 50 -k\ncpulimit brave -l 80 -z\n\n\nsudo cgcreate -a $USER:$USER -t $USER:$USER -g memory:groupChromiumMemLimit\nsudo cgset -r memory.limit_in_bytes=$((1024*1024*1024)) groupChromiumMemLimit\ncgexec -g memory:groupChromiumMemLimit chromium-browser\n\ncpulimit\n\ntaskset -c 0,1,2,3 google-chrome --lang=en-US,en --disable-translate --disable-dev-shm-usage --block-new-web-contents --no-experiments --disable-default-apps --disable-notifications --new-window --log-level=1 --renderer-process-limit=2  --isolate-origins --disable-dev-shm-usage --no-pings\n\ntaskset -c 0,1 google-chrome --lang=en-US,en --disable-translate --disable-dev-shm-usage --block-new-web-contents --no-experiments --disable-default-apps --disable-notifications --new-window --log-level=1 --renderer-process-limit=2 --no-referrers --no-pings --start-maximized\n\ntaskset -c 0,1 google-chrome --lang=en-US,en --disable-translate --disable-dev-shm-usage --block-new-web-contents --no-experiments --disable-default-apps --disable-notifications --new-window --log-level=1 --no-ping --disable-background-processes --disable-picture-in-picture --process-per-tab --purge-memory-button\n\ntaskset -c 0,1 google-chrome --lang=en-US,en --disable-translate --disable-dev-shm-usage --block-new-web-contents --no-experiments --disable-default-apps --disable-notifications --new-window --log-level=1 --no-ping --disable-background-processes --disable-picture-in-picture --process-per-tab --purge-memory-button  --disable-features=UseEcoQoSForBackgroundProcess --disable-histogram-customizer --disable-in-process-stack-traces --disable-low-end-device-mode --disable-low-res-tiling --disable-print-preview  --disable-breakpad --noerrdialogs --use-fake-device-for-media-stream --disable-features=StreamScripting  --disable-remote-fonts  --new-window --aggressive-cache-discard --disable-notifications --disable-remote-fonts --disable-reading-from-canvas --disable-remote-playback-api --disable-shared-workers --disable-voice-input --enable-aggressive-domstorage-flushing\n\n\ntaskset -c 0,1 brave --lang=en-US,en --disable-translate --disable-dev-shm-usage --block-new-web-contents --no-experiments --disable-default-apps --disable-notifications --new-window --log-level=1 --no-ping --disable-background-processes --disable-picture-in-picture --process-per-tab --purge-memory-button  --disable-features=UseEcoQoSForBackgroundProcess --disable-histogram-customizer --disable-in-process-stack-traces --disable-low-end-device-mode --disable-low-res-tiling --disable-print-preview  --disable-breakpad --noerrdialogs --use-fake-device-for-media-stream --disable-features=StreamScripting  --disable-remote-fonts --disk-cache-dir=/dev/null --new-window --aggressive-cache-discard --disable-notifications --disable-remote-fonts --disable-reading-from-canvas --disable-remote-playback-api --disable-shared-workers --disable-voice-input --enable-aggressive-domstorage-flushing --disable-http-cache\n\n\n\n--disable-extensions\n--disable-notifications\n--disable-sync\n--disable-software-rasterizer\n--disable-site-isolation-trials\n\n--js-flags=\"--max_old_space_size=80 --max_semi_space_size=80\"\n--single-process\n--aggressive-tab-discard\n--aggressive-cache-discard\n--ui-compositor-memory-limit-when-visible-mb\n--disk-cache-dir  # Use a specific disk cache location, rather than one derived from the UserDatadir.\n--disk-cache-size  # Forces the maximum disk space to be used by the disk cache, in bytes.\n--force-gpu-mem-available-mb  # Sets the total amount of memory that may be allocated for GPU resources\n--gpu-program-cache-size-kb  # Sets the maximum size of the in-memory gpu program cache, in kb\n--mem-pressure-system-reserved-kb  # Some platforms typically have very little 'free' memory, but plenty is available in buffers+cached. For such platforms, configure this amount as the portion of buffers+cached memory that should be treated as unavailable. If this switch is not used, a simple pressure heuristic based purely on free memory will be used.\n--renderer-process-limit  # Overrides the default/calculated limit to the number of renderer processes. Very high values for this setting can lead to high memory/resource usage or instability.\n--disable-frame-rate-limit --disable-gpu --disable-gpu-vsync --max-gum-fps=\"9999\"\n\n# https://peter.sh/experiments/chromium-command-line-switches/\n# https://kapeli.com/cheat_sheets/Chromium_Command_Line_Switches.docset/Contents/Resources/Documents/index\n\ntaskset -c 0,1 google-chrome --lang=en-US,en --disable-translate --disable-dev-shm-usage --block-new-web-contents --no-experiments --disable-default-apps --disable-notifications --new-window --log-level=1 --no-ping --disable-background-processes --disable-picture-in-picture --process-per-tab --purge-memory-button  --disable-features=UseEcoQoSForBackgroundProcess --disable-histogram-customizer --disable-in-process-stack-traces --disable-low-end-device-mode --disable-low-res-tiling --disable-print-preview\n\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-ubuntu-alarm",
      "title": "ubuntu alarm",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para ubuntu alarm em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "ubuntu alarm"
      ],
      "command": "sleep 900 && notify-send \"back to work\"  # a long, 15-minute break\nsleep 16m ; mpg123 wake_up.mp3\nsleep 1m 30s && notify-send \"back to work\"   \nsleep 20m && touch alarm.txt && echo $(date +%s) >> alarm.txt && gedit  alarm.txt",
      "fullContent": "```\nsleep 900 && notify-send \"back to work\"  # a long, 15-minute break\nsleep 16m ; mpg123 wake_up.mp3\nsleep 1m 30s && notify-send \"back to work\"   \nsleep 20m && touch alarm.txt && echo $(date +%s) >> alarm.txt && gedit  alarm.txt\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-ubuntu-check-temperature",
      "title": "ubuntu check temperature",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para ubuntu check temperature em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "ubuntu check temperature"
      ],
      "command": "powerprofilesctl list\npowerprofilesctl set power-saver\npowerprofilesctl\npowerprofilesctl set balanced\n\nsudo apt-get install lm-sensors \nsudo sensors-detect\nsudo service kmod start\n\nsensors\nsensors amdgpu-pci-0500\n\nsudo apt-get install hddtemp\nsudo hddtemp /dev/sda",
      "fullContent": "```\npowerprofilesctl list\npowerprofilesctl set power-saver\npowerprofilesctl\npowerprofilesctl set balanced\n\nsudo apt-get install lm-sensors \nsudo sensors-detect\nsudo service kmod start\n\nsensors\nsensors amdgpu-pci-0500\n\nsudo apt-get install hddtemp\nsudo hddtemp /dev/sda     \n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-ubuntu-uptime",
      "title": "ubuntu uptime",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para ubuntu uptime em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "ubuntu uptime"
      ],
      "command": "uptime\n# 15:02:35 up 8 min,  1 user,  load average: 1,41, 1,13, 0,60\nwho -b\n# Systemstart  2026-07-22 14:54",
      "fullContent": "```\nuptime\n# 15:02:35 up 8 min,  1 user,  load average: 1,41, 1,13, 0,60\nwho -b\n# Systemstart  2026-07-22 14:54\n```",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-ulimit-linux",
      "title": "ulimit linux",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para ulimit linux em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "ulimit linux"
      ],
      "command": "~~~\nhttps://unix.stackexchange.com/questions/560064/chromium-browser-exceed-data-ulimit\nhttps://phoenixnap.com/kb/ulimit-linux-command\nhttps://stackoverflow.com...",
      "fullContent": "~~~\nhttps://unix.stackexchange.com/questions/560064/chromium-browser-exceed-data-ulimit\nhttps://phoenixnap.com/kb/ulimit-linux-command\nhttps://stackoverflow.com/questions/14844304/how-to-limit-google-chrome-from-consuming-all-available-memory-while-uploading-l\nhttps://unix.stackexchange.com/questions/749840/is-there-a-way-to-set-a-hard-cap-limit-on-how-much-ram-chrome-can-use\nhttps://superuser.com/questions/48505/how-to-find-virtual-memory-size-and-cache-size-of-a-linux-system\n\n\nulimit -v 2192000 && chromium-browser && sleep 1\n\n# Display all current limits\nulimit -a\nulimit -Sa  # Soft Limit\nulimit -Ha # Hard Limit\n\n# Set a maximum file size of 10MB\nulimit -f 10240  # File size is in KB, so 10MB = 10 * 1024 KB\n\n# Display the maximum number of open files\nulimit -n\n\n# limit the process number to 10:\nulimit -u 10\n\n# sets the maximum file size that a user can make 50KB\nulimit -f 50\nls -lh file\n\n# Limit Maximum Virtual Memory to 1k\nulimit -v 1000\n\n# Limit the Number of Open Files\nulimit -n 5\n\n#  Limit Maximum Virtual Memory to 4.2GB\nulimit -Sv 4352000000\n/usr/bin/chromium\n\n# or 0.42GB, it works but the browser may crash\n#ulimit -Sv 435200000 #0.42GB\n#/usr/bin/chromium\n\n# limits the resident set size of the process 1gb - no longer works\nulimit -m 3000000\n\n# limits the amount of virtual memory 1gb\nulimit -v  1000000\n\n#!/bin/sh\nulimit -Sv 10240000 #amount of memory available in bytes 10gb\n/usr/bin/google-chrome-stable\n\n# Chrome Ulimit Limit 8GB\nulimit -Sv 8192000; ulimit -Hv 8192000; google-chrome\nulimit -n 4096\n\n# Chrome Ulimit Limit 8GB\nulimit -Sv 8192000; ulimit -Hv 8192000; google-chrome & sleep 2\nPID=$(pgrep google-chrome)\nps -o pid,rss,vsz -p $PID\n\n# Virtual memory\nulimit -v 8192000 && google-chrome & sleep 1\nPID=$(pgrep google-chrome)\nulimit -aH | grep \"virtual memory\"\nulimit -aS | grep \"virtual memory\"\ncat /proc/$PID/limits | grep \"Max address space\"\n\n\nVirtual memory size Use swapon -s or free\nswapon -s\nfree\ncat /proc/cpuinfo\nsudo dmidecode --type processor\ncat /proc/pal/cpu0/cache_info\nvmstat\n\nulimit -a\nreal-time non-blocking time  (microseconds, -R) unlimited\ncore file size              (blocks, -c) 0\ndata seg size               (kbytes, -d) unlimited\nscheduling priority                 (-e) 0\nfile size                   (blocks, -f) unlimited\npending signals                     (-i) 14608\nmax locked memory           (kbytes, -l) 477992\nmax memory size             (kbytes, -m) unlimited\nopen files                          (-n) 1024\npipe size                (512 bytes, -p) 8\nPOSIX message queues         (bytes, -q) 819200\nreal-time priority                  (-r) 0\nstack size                  (kbytes, -s) 8192\ncpu time                   (seconds, -t) unlimited\nmax user processes                  (-u) 14608\nvirtual memory              (kbytes, -v) unlimited\nfile locks                          (-x) unlimited\n\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-update-firmware",
      "title": "update firmware",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para update firmware em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "update firmware"
      ],
      "command": "~~~\nlspci\nlspci -vmmnn\n\nsudo fwupdmgr refresh \nsudo fwupdmgr update\n\nDevices with no available firmware updates: \n • System Firmware\n • UEFI Device Firmware\n • ...",
      "fullContent": "~~~\nlspci\nlspci -vmmnn\n\nsudo fwupdmgr refresh \nsudo fwupdmgr update\n\nDevices with no available firmware updates: \n • System Firmware\n • UEFI Device Firmware\n • UEFI dbx\nDevices with the latest available firmware version:\n • KBG40ZMT128G TOSHIBA MEMORY\n\nsudo apt-get update && sudo apt-get dist-upgrade -f\nsudo fwupdmgr get-updates\nsudo rm -i /var/crash/*.crash\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-wget-get-files",
      "title": "wget get files",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para wget get files em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "wget get files"
      ],
      "command": "~~~\nwget --no-clobber --mirror -p -l1 --convert-links -P . --wait=2 --limit-rate=50K --user-agent=\"Mozilla/5.0 (Windows NT 6.3; WOW64; rv:40.0\" <url>\n~~~...",
      "fullContent": "~~~\nwget --no-clobber --mirror -p -l1 --convert-links -P . --wait=2 --limit-rate=50K --user-agent=\"Mozilla/5.0 (Windows NT 6.3; WOW64; rv:40.0\" <url>\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "linux-when-linux-system-was-installed",
      "title": "when linux system was installed",
      "category": "linux",
      "importance": "medium",
      "type": "cli",
      "icon": "terminal",
      "description": "Instruções e comandos essenciais de terminal para when linux system was installed em sistemas Linux e Ubuntu.",
      "tags": [
        "linux",
        "terminal",
        "bash",
        "ubuntu",
        "when linux system was installed"
      ],
      "command": "~~~\nstat -c %w /\nstat --format=%w /\nstat /\ndumpe2fs /dev/sda1 | grep 'Filesystem created:'\n~~~...",
      "fullContent": "~~~\nstat -c %w /\nstat --format=%w /\nstat /\ndumpe2fs /dev/sda1 | grep 'Filesystem created:'\n~~~",
      "filePath": "Daily_terminal.md"
    },
    {
      "id": "media-create-showspectrum-text-from-audio-file",
      "title": "Create showspectrum + text from audio file",
      "category": "media",
      "importance": "specialized",
      "type": "cli",
      "icon": "video",
      "description": "Automação e pipeline de processamento multimídia com FFmpeg e ALSA para create showspectrum + text from audio file.",
      "tags": [
        "ffmpeg",
        "video",
        "audio",
        "multimedia",
        "encoding"
      ],
      "command": "* ffmpeg -y -f lavfi -i \"amovie=input.wav, asplit [a][out1]; [a] showspectrum=\"mode=separate:s=1920x1080:color=rainbow:legend=1\" [out0]\" -vf \"drawtext=text='input (15 sec)': start_number=1: x=(w/3): y=(h/2): fontcolor=yellow: fontsize=72\" -b:v 8M -c:a ac3 -b:a 320k out_$(date +%s).mp4",
      "fullContent": "```\n* ffmpeg -y -f lavfi -i \"amovie=input.wav, asplit [a][out1]; [a] showspectrum=\"mode=separate:s=1920x1080:color=rainbow:legend=1\" [out0]\" -vf \"drawtext=text='input (15 sec)': start_number=1: x=(w/3): y=(h/2): fontcolor=yellow: fontsize=72\" -b:v 8M -c:a ac3 -b:a 320k out_$(date +%s).mp4\n```",
      "filePath": "Daily_terminal_Video.md"
    }
  ]
};
