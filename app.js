// Artes do Sul · HowTo Knowledge Nexus Application Logic
// Masterpiece Controller with Real-Time Filtering, Growth Tracking & Live Execution

(function() {
  'use strict';

  // State
  let database = window.HOWTO_DATABASE || { items: [], categories: {}, stats: {} };
  let allItems = database.items || [];
  
  let state = {
    search: '',
    category: 'all',
    importance: 'all',
    type: 'all',
    savedOnly: false,
    favorites: new Set(JSON.parse(localStorage.getItem('howto_favorites') || '[]')),
    completed: new Set(JSON.parse(localStorage.getItem('howto_completed') || '[]'))
  };

  // DOM Elements
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const categoryTabs = document.getElementById('categoryTabs');
  const importanceFilters = document.querySelectorAll('[data-importance]');
  const typeFilters = document.querySelectorAll('[data-type]');
  const savedFilterBtn = document.getElementById('savedFilterBtn');
  const filterResetBtn = document.getElementById('filterResetBtn');
  const resultsCountText = document.getElementById('resultsCountText');
  const cardsGrid = document.getElementById('cardsGrid');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContainer = document.getElementById('modalContainer');
  const btnGoTop = document.getElementById('btnGoTop');
  const headerNav = document.querySelector('.header-nav');

  // Icons SVG Dictionary
  const icons = {
    terminal: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    brain: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"></path></svg>`,
    server: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    database: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    layout: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    wrench: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    video: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`,
    'git-branch': `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
    'book-open': `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
    copy: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
    external: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    play: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    fire: `🔥`,
    lightning: `⚡`,
    bulb: `💡`,
    box: `📦`
  };

  // Toast Function
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 2800);
  }

  // Copy text utility
  function copyToClipboard(text, customMessage) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(customMessage || 'Comando copiado para a área de transferência!');
      }).catch(() => fallbackCopy(text, customMessage));
    } else {
      fallbackCopy(text, customMessage);
    }
  }

  function fallbackCopy(text, customMessage) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(customMessage || 'Comando copiado com sucesso!');
    } catch (err) {
      showToast('Erro ao copiar comando.');
    }
    document.body.removeChild(textArea);
  }

  // Favorites toggle
  function toggleFavorite(id, e) {
    if (e) e.stopPropagation();
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      showToast('Removido dos favoritos');
    } else {
      state.favorites.add(id);
      showToast('Salvo nos favoritos ★');
    }
    localStorage.setItem('howto_favorites', JSON.stringify(Array.from(state.favorites)));
    render();
  }

  // Filter Logic
  function getFilteredItems() {
    return allItems.filter(item => {
      // Category filter
      if (state.category !== 'all' && item.category !== state.category) {
        return false;
      }
      // Importance filter
      if (state.importance !== 'all' && item.importance !== state.importance) {
        return false;
      }
      // Type filter
      if (state.type !== 'all' && item.type !== state.type) {
        return false;
      }
      // Saved filter
      if (state.savedOnly && !state.favorites.has(item.id)) {
        return false;
      }
      // Search query
      if (state.search.trim()) {
        const query = state.search.toLowerCase().trim();
        const inTitle = item.title.toLowerCase().includes(query);
        const inDesc = (item.description || '').toLowerCase().includes(query);
        const inTags = (item.tags || []).some(t => t.toLowerCase().includes(query));
        const inCmd = (item.command || '').toLowerCase().includes(query);
        const inPath = (item.filePath || '').toLowerCase().includes(query);
        return inTitle || inDesc || inTags || inCmd || inPath;
      }
      return true;
    });
  }

  // Render Category Tabs
  function renderCategoryTabs() {
    if (!categoryTabs) return;
    const categories = database.categories || {};
    
    // Calculate counts
    const counts = { all: allItems.length };
    allItems.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });

    let html = `
      <button class="cat-tab ${state.category === 'all' ? 'active' : ''}" data-cat="all">
        <span>Todos os Recursos</span>
        <span class="cat-tab-count">${counts.all}</span>
      </button>
    `;

    for (const [key, cat] of Object.entries(categories)) {
      const count = counts[key] || 0;
      const iconSvg = icons[cat.icon] || icons.terminal;
      html += `
        <button class="cat-tab ${state.category === key ? 'active' : ''}" data-cat="${key}">
          <span>${iconSvg}</span>
          <span>${cat.name}</span>
          <span class="cat-tab-count">${count}</span>
        </button>
      `;
    }

    categoryTabs.innerHTML = html;

    // Attach click events
    categoryTabs.querySelectorAll('.cat-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        state.category = tab.getAttribute('data-cat');
        renderCategoryTabs();
        render();
      });
    });
  }

  // Render Cards Grid
  function render() {
    const filtered = getFilteredItems();

    // Update Results Bar
    if (resultsCountText) {
      const totalActive = allItems.length;
      resultsCountText.innerHTML = `Exibindo <strong>${filtered.length}</strong> de <strong>${totalActive}</strong> recursos ativos <span style="opacity: 0.6; font-size: 0.8rem; margin-left: 8px;">(171 legados descontinuados ignorados)</span>`;
    }

    // Toggle reset button
    const hasFilters = state.search || state.category !== 'all' || state.importance !== 'all' || state.type !== 'all' || state.savedOnly;
    if (filterResetBtn) {
      filterResetBtn.style.display = hasFilters ? 'inline-block' : 'none';
    }

    if (searchClearBtn) {
      searchClearBtn.style.display = state.search ? 'block' : 'none';
    }

    if (filtered.length === 0) {
      cardsGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <h3 class="empty-state-title">Nenhum recurso encontrado</h3>
          <p class="empty-state-desc">Tente ajustar seus termos de busca ou remover alguns filtros aplicados.</p>
          <button class="btn-primary" id="emptyResetBtn">Limpar Filtros de Pesquisa</button>
        </div>
      `;
      const emptyReset = document.getElementById('emptyResetBtn');
      if (emptyReset) emptyReset.addEventListener('click', resetAllFilters);
      return;
    }

    // Render Cards
    cardsGrid.innerHTML = filtered.map(item => {
      const cat = database.categories[item.category] || { name: item.category, icon: 'terminal' };
      const catIcon = icons[cat.icon] || icons.terminal;
      
      const importanceClass = `importance-${item.importance}`;
      let importanceBadge = '';
      if (item.importance === 'critical') importanceBadge = `<span class="card-importance-badge ${importanceClass}">${icons.fire} Crítico</span>`;
      else if (item.importance === 'high') importanceBadge = `<span class="card-importance-badge ${importanceClass}">${icons.lightning} Alta</span>`;
      else if (item.importance === 'medium') importanceBadge = `<span class="card-importance-badge ${importanceClass}">${icons.bulb} Média</span>`;
      else importanceBadge = `<span class="card-importance-badge ${importanceClass}">${icons.box} Especializado</span>`;

      const isFav = state.favorites.has(item.id);
      const isTool = item.type === 'tool';
      const cleanSnippet = item.command || (item.fullContent ? item.fullContent.slice(0, 150) : '');

      return `
        <div class="howto-card ${isTool ? 'is-tool' : ''}" data-id="${item.id}">
          <div>
            <div class="card-header-top">
              <span class="card-category-badge">
                <span class="cat-icon">${catIcon}</span>
                ${cat.name}
              </span>
              ${importanceBadge}
            </div>

            <h3 class="card-title" onclick="window.howtoApp.openDetail('${item.id}')">${escapeHtml(item.title)}</h3>
            <p class="card-description">${escapeHtml(item.description || '')}</p>

            ${cleanSnippet ? `
              <div class="card-code-preview">
                <div class="code-preview-text">${escapeHtml(cleanSnippet)}</div>
              </div>
            ` : ''}

            <div class="card-tags">
              ${(item.tags || []).slice(0, 4).map(t => `<span class="tag-chip">#${escapeHtml(t)}</span>`).join('')}
            </div>
          </div>

          <div class="card-footer">
            <div class="card-action-btns">
              <button class="btn-card-action primary" onclick="window.howtoApp.openDetail('${item.id}')">
                <span>Ver Detalhes</span>
              </button>
              
              ${isTool && item.toolUrl ? `
                <a href="${item.toolUrl}" target="_blank" class="btn-card-action" style="color: var(--accent-orange); border-color: rgba(255,107,53,0.3);" onclick="event.stopPropagation();">
                  <span>${icons.play}</span>
                  <span>Executar</span>
                </a>
              ` : `
                <button class="btn-card-action" onclick="window.howtoApp.copyItemCommand('${item.id}', event)">
                  <span>${icons.copy}</span>
                  <span>Copiar</span>
                </button>
              `}
            </div>

            <button class="btn-card-fav ${isFav ? 'active' : ''}" title="${isFav ? 'Remover dos favoritos' : 'Salvar nos favoritos'}" onclick="window.howtoApp.toggleFav('${item.id}', event)">
              ★
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Open Detail Modal
  function openDetail(id) {
    const item = allItems.find(x => x.id === id);
    if (!item) return;

    const cat = database.categories[item.category] || { name: item.category, icon: 'terminal' };
    const catIcon = icons[cat.icon] || icons.terminal;

    let importanceLabel = 'Média';
    let importanceClass = 'importance-medium';
    if (item.importance === 'critical') { importanceLabel = 'Crítico 🔥'; importanceClass = 'importance-critical'; }
    else if (item.importance === 'high') { importanceLabel = 'Alta ⚡'; importanceClass = 'importance-high'; }
    else if (item.importance === 'specialized') { importanceLabel = 'Especializado 📦'; importanceClass = 'importance-specialized'; }

    const isTool = item.type === 'tool' && item.toolUrl;
    const content = item.fullContent || item.command || item.description || '';
    const hasSections = item.structuredSections && item.structuredSections.length > 0;

    // Helper to format link chips
    function formatLinkChip(url) {
      let icon = '🌐';
      let cls = '';
      let label = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        icon = '🔴 YT';
        cls = 'yt';
      } else if (url.includes('github.com')) {
        icon = '🐙 GitHub';
        cls = 'github';
      } else if (url.includes('huggingface.co')) {
        icon = '🤗 HuggingFace';
        cls = 'hf';
      } else if (url.includes('ollama.com')) {
        icon = '🦙 Ollama';
        cls = 'ollama';
      }
      if (label.length > 40) label = label.slice(0, 38) + '...';
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="resource-link-chip ${cls}" title="${url}">
        <span>${icon}</span>
        <span>${escapeHtml(label)}</span>
        <span>${icons.external}</span>
      </a>`;
    }

    // Build Structured Interactive View
    let structuredHtml = '';
    let tocHtml = '';

    if (hasSections) {
      // Build TOC
      tocHtml = `
        <div class="doc-toc-wrapper">
          <div class="doc-toc-label">
            <span>📑</span>
            <span>Índice Rápido (${item.structuredSections.length} Seções):</span>
          </div>
          <div class="doc-toc-pills">
            ${item.structuredSections.map((sec, idx) => `
              <button class="doc-toc-pill" onclick="window.howtoApp.scrollToSection(${idx})">
                ${idx + 1}. ${escapeHtml(sec.title)}
              </button>
            `).join('')}
          </div>
        </div>
      `;

      // Build Sections
      structuredHtml = item.structuredSections.map((sec, idx) => {
        const cmds = sec.commands || [];
        const links = sec.links || [];
        const models = sec.models || [];
        const notes = sec.notes || [];

        return `
          <div class="txt-doc-section" id="doc-sec-${idx}">
            <div class="txt-section-header">
              <h3 class="txt-section-title">
                <span class="sec-badge-num">#${idx + 1}</span>
                <span>${escapeHtml(sec.title)}</span>
              </h3>
              <div style="display: flex; gap: 6px; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
                ${cmds.length ? `<span>${cmds.length} comandos</span>` : ''}
                ${models.length ? `<span>· ${models.length} modelos</span>` : ''}
                ${links.length ? `<span>· ${links.length} links</span>` : ''}
              </div>
            </div>

            ${notes.length ? notes.map(n => `<div class="txt-note-box">💡 ${escapeHtml(n)}</div>`).join('') : ''}

            ${cmds.length ? `
              <div style="margin-bottom: 14px;">
                <h4 style="font-size: 0.82rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">
                  Comandos de Terminal:
                </h4>
                <div class="txt-cmd-list">
                  ${cmds.map(cmd => `
                    <div class="txt-cmd-card">
                      <div class="txt-cmd-text">
                        <span class="txt-cmd-prompt">$</span>
                        <span>${escapeHtml(cmd)}</span>
                      </div>
                      <button class="btn-copy-cmd" onclick="window.howtoApp.copyRawText('${escapeJsString(cmd)}', 'Comando copiado!')">
                        <span>${icons.copy}</span>
                        <span>Copiar</span>
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            ${models.length ? `
              <div style="margin-bottom: 14px;">
                <h4 style="font-size: 0.82rem; font-family: var(--font-mono); color: var(--accent-orange); text-transform: uppercase; margin-bottom: 8px;">
                  🦙 Modelos & Requisitos de Memória:
                </h4>
                <div class="txt-models-grid">
                  ${models.map(m => `
                    <div class="model-card">
                      <div>
                        <div class="model-name">${escapeHtml(m.name)}</div>
                        <span class="model-size-badge">${escapeHtml(m.size)}</span>
                      </div>
                      <button class="btn-run-model" title="Copiar 'ollama run ${escapeHtml(m.name)}'" onclick="window.howtoApp.copyRawText('ollama run ${escapeJsString(m.name)}', 'Comando de execução do modelo copiado!')">
                        ${icons.play}
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            ${links.length ? `
              <div>
                <h4 style="font-size: 0.82rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">
                  Recursos & Documentação:
                </h4>
                <div class="resource-links-grid">
                  ${links.map(l => formatLinkChip(l)).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        `;
      }).join('');
    }

    modalContainer.innerHTML = `
      <div class="modal-header">
        <div class="modal-title-block">
          <div class="modal-meta-pills">
            <span class="card-category-badge" style="font-size: 0.8rem;">
              <span class="cat-icon">${catIcon}</span>
              ${cat.name}
            </span>
            <span class="card-importance-badge ${importanceClass}">
              ${importanceLabel}
            </span>
            <span class="tag-chip" style="color: var(--accent-cyan);">${item.type.toUpperCase()}</span>
            ${hasSections ? `<span class="tag-chip" style="color: var(--accent-orange); border-color: rgba(255,107,53,0.3);">SMART TXT DOC</span>` : ''}
          </div>
          <h2 class="modal-title">${escapeHtml(item.title)}</h2>
        </div>
        <button class="modal-close-btn" id="modalCloseBtnTop" onclick="window.howtoApp.closeModal()">✕</button>
      </div>

      <div class="modal-body">
        ${item.filePath ? `
          <div class="modal-file-path-badge">
            📁 Origem no Repositório: <strong>${escapeHtml(item.filePath)}</strong>
          </div>
        ` : ''}

        <p style="font-size: 1.05rem; margin-bottom: 20px; color: var(--text-primary);">${escapeHtml(item.description || '')}</p>

        ${isTool ? `
          <div style="margin: 20px 0;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <h4 style="margin: 0; color: var(--accent-orange);">⚡ Execução da Ferramenta Web Ao Vivo</h4>
              <a href="${item.toolUrl}" target="_blank" class="btn-card-action" style="color: var(--accent-cyan);">
                <span>Abrir em Nova Aba</span>
                <span>${icons.external}</span>
              </a>
            </div>
            <div class="tool-runner-frame-wrapper">
              <iframe class="tool-runner-frame" src="${item.toolUrl}"></iframe>
            </div>
          </div>
        ` : ''}

        <!-- Dual Mode Header for Smart TXT Docs -->
        ${hasSections ? `
          <div class="doc-viewer-header">
            <div class="doc-stats-bar">
              <span class="doc-stat-chip cyan">📑 ${item.docMeta?.sectionsCount || item.structuredSections.length} Seções</span>
              <span class="doc-stat-chip orange">⚡ ${item.docMeta?.commandsCount || 0} Comandos</span>
              ${item.docMeta?.modelsCount ? `<span class="doc-stat-chip green">🦙 ${item.docMeta.modelsCount} Modelos</span>` : ''}
              <span class="doc-stat-chip">🔗 ${item.docMeta?.linksCount || 0} Links</span>
            </div>

            <div class="doc-mode-tabs">
              <button class="mode-tab-btn interactive-tab active" id="btnModeInteractive" onclick="window.howtoApp.setDocMode('interactive')">
                <span>⚡ Interativo</span>
              </button>
              <button class="mode-tab-btn" id="btnModeRaw" onclick="window.howtoApp.setDocMode('raw')">
                <span>💻 Código Raw &lt;code&gt;</span>
              </button>
            </div>
          </div>

          <!-- Interactive View Container -->
          <div id="docInteractiveContainer">
            ${tocHtml}
            ${structuredHtml}
          </div>

          <!-- Raw Code Container (Hidden by default) -->
          <div id="docRawContainer" style="display: none;">
            <div class="raw-code-container">
              <div class="raw-code-header">
                <span>Arquivo Bruto: ${escapeHtml(item.filePath || 'document.txt')}</span>
                <button class="btn-copy-cmd" onclick="window.howtoApp.copyRawText(document.getElementById('modalRawCode').innerText, 'Arquivo completo copiado!')">
                  <span>${icons.copy}</span>
                  <span>Copiar Tudo</span>
                </button>
              </div>
              <pre class="raw-code-body"><code id="modalRawCode">${escapeHtml(content)}</code></pre>
            </div>
          </div>
        ` : `
          <h4>Conteúdo & Comandos:</h4>
          <pre><code id="modalCodeBlock">${escapeHtml(content)}</code></pre>
        `}

        <div style="margin-top: 24px;">
          <h4>Tags Relacionadas:</h4>
          <div class="card-tags" style="margin-top: 8px;">
            ${(item.tags || []).map(t => `<span class="tag-chip">#${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">
          ID: ${item.id}
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="btn-secondary" onclick="window.howtoApp.copyModalContent()">
            <span>${icons.copy}</span>
            <span>Copiar Todo Conteúdo</span>
          </button>
          <button class="btn-primary" onclick="window.howtoApp.closeModal()">
            Fechar
          </button>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function copyModalContent() {
    const code = document.getElementById('modalCodeBlock');
    if (code) {
      copyToClipboard(code.innerText, 'Conteúdo completo copiado para a área de transferência!');
    }
  }

  function copyItemCommand(id, e) {
    if (e) e.stopPropagation();
    const item = allItems.find(x => x.id === id);
    if (!item) return;
    const textToCopy = item.command || item.fullContent || item.title;
    copyToClipboard(textToCopy, `Comando de "${item.title.slice(0, 30)}..." copiado!`);
  }

  function resetAllFilters() {
    state.search = '';
    state.category = 'all';
    state.importance = 'all';
    state.type = 'all';
    state.savedOnly = false;
    if (searchInput) searchInput.value = '';
    
    importanceFilters.forEach(f => f.classList.remove('active'));
    document.querySelector('[data-importance="all"]')?.classList.add('active');

    typeFilters.forEach(f => f.classList.remove('active'));
    document.querySelector('[data-type="all"]')?.classList.add('active');

    if (savedFilterBtn) savedFilterBtn.classList.remove('active');

    renderCategoryTabs();
    render();
  }

  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Event Listeners
  function initEvents() {
    // Search input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.search = e.target.value;
        render();
      });
    }

    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        state.search = '';
        if (searchInput) searchInput.value = '';
        render();
      });
    }

    // Importance Filters
    importanceFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        importanceFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.importance = btn.getAttribute('data-importance');
        render();
      });
    });

    // Type Filters
    typeFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        typeFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.type = btn.getAttribute('data-type');
        render();
      });
    });

    // Saved Filter
    if (savedFilterBtn) {
      savedFilterBtn.addEventListener('click', () => {
        state.savedOnly = !state.savedOnly;
        savedFilterBtn.classList.toggle('active', state.savedOnly);
        render();
      });
    }

    if (filterResetBtn) {
      filterResetBtn.addEventListener('click', resetAllFilters);
    }

    // Modal close outside
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
      });
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        if (searchInput) searchInput.focus();
      }
    });

    // Scroll Header & Go to Top
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        headerNav?.classList.add('scrolled');
      } else {
        headerNav?.classList.remove('scrolled');
      }

      if (window.scrollY > 300) {
        btnGoTop?.classList.add('visible');
      } else {
        btnGoTop?.classList.remove('visible');
      }
    });

    if (btnGoTop) {
      btnGoTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function setDocMode(mode) {
    const interContainer = document.getElementById('docInteractiveContainer');
    const rawContainer = document.getElementById('docRawContainer');
    const btnInter = document.getElementById('btnModeInteractive');
    const btnRaw = document.getElementById('btnModeRaw');

    if (mode === 'raw') {
      if (interContainer) interContainer.style.display = 'none';
      if (rawContainer) rawContainer.style.display = 'block';
      btnInter?.classList.remove('active');
      btnRaw?.classList.add('active');
    } else {
      if (interContainer) interContainer.style.display = 'block';
      if (rawContainer) rawContainer.style.display = 'none';
      btnInter?.classList.add('active');
      btnRaw?.classList.remove('active');
    }
  }

  function scrollToSection(idx) {
    const sec = document.getElementById('doc-sec-' + idx);
    if (sec) {
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function copyRawText(text, msg) {
    copyToClipboard(text, msg || 'Copiado para a área de transferência!');
  }

  function escapeJsString(str) {
    if (!str) return '';
    return String(str)
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/"/g, '&quot;')
      .replace(/\n/g, '\\n');
  }

  // Public Interface for Inline Handlers
  window.howtoApp = {
    openDetail,
    closeModal,
    copyModalContent,
    copyItemCommand,
    copyRawText,
    setDocMode,
    scrollToSection,
    toggleFav: toggleFavorite,
    resetFilters: resetAllFilters
  };

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    renderCategoryTabs();
    render();
    initEvents();

    // Register Service Worker for PWA
    if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
      navigator.serviceWorker.register('./sw.js').catch(err => {
        console.warn('SW registration failed:', err);
      });
    }
  });

})();
