// ===== Article Data =====
const articlesData = [
    {
        id: 1,
        title: '深入理解 React Server Components',
        category: 'frontend',
        categoryLabel: '前端',
        categoryColor: 'blue',
        date: '2024年1月15日',
        readTime: '8 分钟阅读',
        excerpt: '探索 RSC 的底层原理，了解它如何改变我们构建 React 应用的方式，以及在实际项目中的最佳实践。',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
        author: 'Alex Chen',
        authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
        id: 2,
        title: '构建智能应用：LLM 集成实战指南',
        category: 'ai',
        categoryLabel: 'AI',
        categoryColor: 'purple',
        date: '2024年1月10日',
        readTime: '12 分钟阅读',
        excerpt: '从 API 设计到提示工程，全面讲解如何将大语言模型集成到你的应用中，打造真正的 AI 原生体验。',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
        author: 'Alex Chen',
        authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
        id: 3,
        title: '高并发系统设计：从理论到实践',
        category: 'backend',
        categoryLabel: '后端',
        categoryColor: 'green',
        date: '2024年1月5日',
        readTime: '15 分钟阅读',
        excerpt: '缓存策略、消息队列、数据库优化...系统梳理高并发场景下的技术选型与架构设计思路。',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
        author: 'Alex Chen',
        authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
        id: 4,
        title: '现代 CSS 架构：Tailwind 最佳实践',
        category: 'frontend',
        categoryLabel: '前端',
        categoryColor: 'blue',
        date: '2023年12月28日',
        readTime: '6 分钟阅读',
        excerpt: '如何在大规模项目中高效使用 Tailwind CSS，包括自定义配置、组件提取和设计系统构建。',
        image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=450&fit=crop',
        author: 'Alex Chen',
        authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
        id: 5,
        title: '数字游民的一年：远程工作与生活的平衡',
        category: 'life',
        categoryLabel: '生活',
        categoryColor: 'orange',
        date: '2023年12月20日',
        readTime: '5 分钟阅读',
        excerpt: '分享我作为远程开发者的日常，以及如何在不同城市间保持高效工作和健康生活。',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=450&fit=crop',
        author: 'Alex Chen',
        authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
        id: 6,
        title: 'Go 语言并发模式：从入门到精通',
        category: 'backend',
        categoryLabel: '后端',
        categoryColor: 'green',
        date: '2023年12月15日',
        readTime: '10 分钟阅读',
        excerpt: 'Goroutine、Channel、Context...通过实际案例深入理解 Go 的并发编程模型和常见设计模式。',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop',
        author: 'Alex Chen',
        authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { articlesData };
}
