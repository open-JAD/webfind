const websites = [
    {
        title: {
            en: "python offical website",
            zh: "python官方网站"
        },
        description: {
            en: "The official Python download and development help website",
            zh: "python的官方下载及开发帮助网站。"
        },
        url: "https://python.org",
        category: "organization"
    },
    {
        title: {
            en: "Code Laboratory",
            zh: "代码实验室"
        },
        description: {
            en: "Interactive coding challenges and programming tutorials.",
            zh: "互动编码挑战和编程教程。"
        },
        url: "https://example.com/code",
        category: "development"
    },
    {
        title: {
            en: "Digital Art Gallery",
            zh: "数字艺术画廊"
        },
        description: {
            en: "Showcase of digital artworks and illustrations from talented artists.",
            zh: "展示来自才华横溢艺术家的数字艺术作品和插图。"
        },
        url: "https://example.com/art",
        category: "art"
    },
    {
        title: {
            en: "Tech Innovation Hub",
            zh: "科技创新中心"
        },
        description: {
            en: "Latest updates in technology and innovation trends.",
            zh: "最新的技术和创新趋势更新。"
        },
        url: "https://example.com/tech",
        category: "technology"
    },
    {
        title: {
            en: "Developer Tools",
            zh: "开发者工具"
        },
        description: {
            en: "Essential tools and resources for modern web development.",
            zh: "现代网页开发的必备工具和资源。"
        },
        url: "https://example.com/tools",
        category: "development"
    },
    {
        title: {
            en: "UI Components",
            zh: "UI组件"
        },
        description: {
            en: "Collection of reusable UI components and design patterns.",
            zh: "可重用UI组件和设计模式的集合。"
        },
        url: "https://example.com/ui",
        category: "design"
    },
    {
        title: {
            en: "Animation Workshop",
            zh: "动画工作坊"
        },
        description: {
            en: "Learn and create stunning web animations.",
            zh: "学习和创建令人惊叹的网页动画。"
        },
        url: "https://example.com/animation",
        category: "design"
    },
    {
        title: {
            en: "Color Palette Generator",
            zh: "调色板生成器"
        },
        description: {
            en: "Create beautiful color schemes for your projects.",
            zh: "为您的项目创建美丽的配色方案。"
        },
        url: "https://example.com/colors",
        category: "design"
    }
];

function addWebsite(website) {
    if (!website.title || !website.description || !website.url) {
        console.error('Website must have title, description, and URL');
        return false;
    }
    websites.push(website);
    return true;
}

function getWebsitesByCategory(category) {
    if (!category) return websites;
    return websites.filter(site => site.category === category);
}

function searchWebsites(searchTerm, lang) {
    if (!searchTerm) return websites;
    searchTerm = searchTerm.toLowerCase();
    return websites.filter(website => 
        website.title[lang].toLowerCase().includes(searchTerm) ||
        website.description[lang].toLowerCase().includes(searchTerm) ||
        website.category.toLowerCase().includes(searchTerm)
    );
}

