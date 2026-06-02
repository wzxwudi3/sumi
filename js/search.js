// ===== Search Functionality =====
const SearchManager = {
    modal: null,
    input: null,
    results: null,

    init() {
        this.modal = document.getElementById('search-modal');
        this.input = document.getElementById('search-input');
        this.results = document.getElementById('search-results');
    },

    toggle() {
        if (!this.modal) this.init();

        if (this.modal.classList.contains('hidden')) {
            this.open();
        } else {
            this.close();
        }
    },

    open() {
        this.modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(() => this.input.focus(), 100);
    },

    close() {
        this.modal.classList.add('hidden');
        document.body.style.overflow = '';
        this.input.value = '';
        this.results.classList.add('hidden');
    },

    search(query) {
        if (!query.trim()) {
            this.results.classList.add('hidden');
            return;
        }

        const filtered = articlesData.filter(a => 
            a.title.toLowerCase().includes(query.toLowerCase()) || 
            a.excerpt.toLowerCase().includes(query.toLowerCase())
        );

        this.renderResults(filtered);
    },

    renderResults(results) {
        if (results.length === 0) {
            this.results.innerHTML = '<div class="p-4 text-center text-slate-500">未找到相关文章</div>';
        } else {
            this.results.innerHTML = results.map(a => `
                <div class="p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors group">
                    <div class="flex items-center justify-between mb-1">
                        <h4 class="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">${a.title}</h4>
                        <span class="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">${a.categoryLabel}</span>
                    </div>
                    <p class="text-sm text-slate-500 dark:text-slate-400">${a.excerpt}</p>
                </div>
            `).join('');
        }

        this.results.classList.remove('hidden');
    }
};

// Global functions for onclick handlers
function toggleSearch() {
    SearchManager.toggle();
}

function handleSearch(query) {
    SearchManager.search(query);
}
