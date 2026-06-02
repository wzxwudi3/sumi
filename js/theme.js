// ===== Theme Management =====
const ThemeManager = {
    init() {
        this.applyTheme();
    },

    applyTheme() {
        const isDark = localStorage.theme === 'dark' || 
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },

    toggle() {
        const isDark = document.documentElement.classList.contains('dark');

        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    }
};

// Global function for onclick handlers
function toggleTheme() {
    ThemeManager.toggle();
}

// Initialize on load
ThemeManager.init();
