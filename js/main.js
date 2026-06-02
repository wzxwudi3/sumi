// ===== Main Entry Point =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    ThemeManager.init();
    SearchManager.init();
    ArticlesManager.init();
    TypingEffect.init();
    UIManager.init();

    console.log('🚀 Alex Blog initialized successfully!');
});
