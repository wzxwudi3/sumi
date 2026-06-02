// ===== Articles Rendering & Filtering =====
const ArticlesManager = {
    grid: null,
    filters: null,

    init() {
        this.grid = document.getElementById('articles-grid');
        this.filters = document.getElementById('article-filters');
        this.renderAll();
    },

    renderAll() {
        if (!this.grid) return;
        this.grid.innerHTML = articlesData.map(article => this.createCard(article)).join('');
        this.observeCards();
    },

    createCard(article) {
        const colorMap = {
            blue: 'bg-blue-500/90',
            purple: 'bg-purple-500/90',
            green: 'bg-green-500/90',
            orange: 'bg-orange-500/90'
        };
        const textColorMap = {
            blue: 'text-blue-600 dark:text-blue-400',
            purple: 'text-purple-600 dark:text-purple-400',
            green: 'text-green-600 dark:text-green-400',
            orange: 'text-orange-600 dark:text-orange-400'
        };

        return `
            <article class="article-card glass-card rounded-2xl overflow-hidden group reveal" data-category="${article.category}">
                <div class="img-zoom aspect-video relative overflow-hidden">
                    <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover" loading="lazy">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute top-4 left-4">
                        <span class="px-3 py-1 rounded-full text-xs font-semibold ${colorMap[article.categoryColor]} text-white backdrop-blur-sm">${article.categoryLabel}</span>
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
                        <span>${article.date}</span>
                        <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span>${article.readTime}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3 group-hover:${textColorMap[article.categoryColor]} transition-colors">${article.title}</h3>
                    <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">${article.excerpt}</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <img src="${article.authorAvatar}" class="w-8 h-8 rounded-full object-cover" alt="${article.author}">
                            <span class="text-sm font-medium">${article.author}</span>
                        </div>
                        <button class="${textColorMap[article.categoryColor]} text-sm font-medium hover:underline">阅读更多 →</button>
                    </div>
                </div>
            </article>
        `;
    },

    filter(category) {
        // Update button states
        document.querySelectorAll('.filter-btn').forEach(btn => {
            if (btn.dataset.filter === category) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Filter articles with animation
        const articles = document.querySelectorAll('#articles-grid article');
        articles.forEach((article, index) => {
            const articleCategory = article.dataset.category;
            if (category === 'all' || articleCategory === category) {
                article.style.display = 'block';
                setTimeout(() => {
                    article.classList.add('visible');
                }, index * 50);
            } else {
                article.classList.remove('visible');
                setTimeout(() => {
                    article.style.display = 'none';
                }, 300);
            }
        });
    },

    observeCards() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
};

// Global function for onclick handlers
function filterArticles(category) {
    ArticlesManager.filter(category);
}
