// ===== UI Interactions =====
const UIManager = {
    init() {
        this.initScrollProgress();
        this.initSpotlight();
        this.initNavbar();
        this.initKeyboardShortcuts();
        this.initSmoothScroll();
    },

    // Scroll Progress Bar
    initScrollProgress() {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            const progressBar = document.getElementById('progress-bar');
            if (progressBar) {
                progressBar.style.width = scrolled + '%';
            }
        });
    },

    // Spotlight Effect
    initSpotlight() {
        const spotlight = document.getElementById('spotlight');
        if (!spotlight) return;

        document.addEventListener('mousemove', (e) => {
            spotlight.style.left = e.clientX + 'px';
            spotlight.style.top = e.clientY + 'px';
        });
    },

    // Navbar Shadow on Scroll
    initNavbar() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            if (winScroll > 50) {
                navbar.classList.add('shadow-lg');
            } else {
                navbar.classList.remove('shadow-lg');
            }
        });
    },

    // Keyboard Shortcuts
    initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // ESC to close modals
            if (e.key === 'Escape') {
                const searchModal = document.getElementById('search-modal');
                const mobileMenu = document.getElementById('mobile-menu');

                if (searchModal && !searchModal.classList.contains('hidden')) {
                    toggleSearch();
                }
                if (mobileMenu && mobileMenu.classList.contains('open')) {
                    toggleMobileMenu();
                }
            }

            // Cmd/Ctrl + K to open search
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                toggleSearch();
            }
        });
    },

    // Smooth Scroll for Anchor Links
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
};

// ===== Mobile Menu =====
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;

    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

// ===== Toast Notification =====
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== Newsletter Subscribe =====
function handleSubscribe(e) {
    e.preventDefault();
    showToast('订阅成功！感谢您的关注。');
    e.target.reset();
}
