const websites = [
    {
        title: "Creative Design Hub",
        description: "Explore creative design tools and resources for modern web development.",
        url: "https://example.com/design",
        category: "design"
    },
    {
        title: "Code Laboratory",
        description: "Interactive coding challenges and programming tutorials.",
        url: "https://example.com/code",
        category: "development"
    },
    {
        title: "Digital Art Gallery",
        description: "Showcase of digital artworks and illustrations from talented artists.",
        url: "https://example.com/art",
        category: "art"
    },
    {
        title: "Tech Innovation Hub",
        description: "Latest updates in technology and innovation trends.",
        url: "https://example.com/tech",
        category: "technology"
    },
    {
        title: "Developer Tools",
        description: "Essential tools and resources for modern web development.",
        url: "https://example.com/tools",
        category: "development"
    },
    {
        title: "UI Components",
        description: "Collection of reusable UI components and design patterns.",
        url: "https://example.com/ui",
        category: "design"
    },
    {
        title: "Animation Workshop",
        description: "Learn and create stunning web animations.",
        url: "https://example.com/animation",
        category: "design"
    },
    {
        title: "Color Palette Generator",
        description: "Create beautiful color schemes for your projects.",
        url: "https://example.com/colors",
        category: "design"
    }
];

// 添加新网站的函数
function addWebsite(website) {
    if (!website.title || !website.description || !website.url) {
        console.error('Website must have title, description, and URL');
        return false;
    }
    websites.push(website);
    return true;
}

// 根据类别获取网站
function getWebsitesByCategory(category) {
    if (!category) return websites;
    return websites.filter(site => site.category === category);
}

// 搜索网站
function searchWebsites(searchTerm) {
    if (!searchTerm) return websites;
    searchTerm = searchTerm.toLowerCase();
    return websites.filter(website => 
        website.title.toLowerCase().includes(searchTerm) ||
        website.description.toLowerCase().includes(searchTerm) ||
        website.category.toLowerCase().includes(searchTerm)
    );
}