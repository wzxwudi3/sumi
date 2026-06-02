// ===== Typing Effect =====
const TypingEffect = {
    texts: ['设计的边界', '技术的深度', '未来的可能'],
    textIndex: 0,
    charIndex: 0,
    isDeleting: false,
    element: null,

    init() {
        this.element = document.getElementById('typing-text');
        if (this.element) {
            setTimeout(() => this.type(), 1000);
        }
    },

    type() {
        const currentText = this.texts[this.textIndex];

        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.isDeleting ? 50 : 100;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = 2000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
};
