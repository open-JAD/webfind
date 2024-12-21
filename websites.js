
    const websites = [
    {
        title: {
            en: "Python",
            zh: "Python"
        },
        description: {
            en: "The official Python download and development help website",
            zh: "Python的官方下载及开发帮助网站。"
        },
        url: "https://www.python.org/",
        category: "organization"
    },
    {
        title: {
            en: "GitHub",
            zh: "GitHub"
        },
        description: {
            en: "A code hosting platform for version control and collaboration",
            zh: "一个用于版本控制和协作的代码托管平台"
        },
        url: "https://www.github.com/",
        category: "platform"
    },
    {
        title: {
            en: "Stack Overflow",
            zh: "Stack Overflow"
        },
        description: {
            en: "A question and answer site for professional and enthusiast programmers",
            zh: "一个面向专业和业余程序员的问题和答案网站"
        },
        url: "https://www.stackoverflow.com/",
        category: "community"
    },
    {
        title: {
            en: "W3Schools",
            zh: "W3Schools"
        },
        description: {
            en: "Web development tutorials and references",
            zh: "Web开发教程和参考"
        },
        url: "https://www.w3schools.com/",
        category: "tutorial"
    },
    {
        title: {
            en: "freeCodeCamp",
            zh: "freeCodeCamp"
        },
        description: {
            en: "A non-profit organization that helps people learn to code for free",
            zh: "一个非营利组织，帮助人们免费学习编程"
        },
        url: "https://www.freecodecamp.org/",
        category: "education"
    },
    {
        title: {
            en: "HackerRank",
            zh: "HackerRank"
        },
        description: {
            en: "A platform for coding challenges and assessments",
            zh: "一个用于编程挑战和评估的平台"
        },
        url: "https://www.hackerrank.com/",
        category: "challenge"
    },
    {
        title: {
            en: "Codecademy",
            zh: "Codecademy"
        },
        description: {
            en: "Interactive coding lessons and projects",
            zh: "交互式编程课程和项目"
        },
        url: "https://www.codecademy.com/",
        category: "education"
    },
    {
        title: {
            en: "Udemy",
            zh: "Udemy"
        },
        description: {
            en: "An online learning platform with courses on various topics",
            zh: "一个提供各种主题课程的在线学习平台"
        },
        url: "https://www.udemy.com/",
        category: "education"
    },
    {
        title: {
            en: "Coursera",
            zh: "Coursera"
        },
        description: {
            en: "Online courses from universities and companies",
            zh: "来自大学和公司的在线课程"
        },
        url: "https://www.coursera.org/",
        category: "education"
    },
    {
        title: {
            en: "edX",
            zh: "edX"
        },
        description: {
            en: "Online courses from top universities and institutions",
            zh: "来自顶尖大学和机构的在线课程"
        },
        url: "https://www.edx.org/",
        category: "education"
    },
    {
        title: {
            en: "Kaggle",
            zh: "Kaggle"
        },
        description: {
            en: "A platform for data science competitions and projects",
            zh: "一个用于数据科学竞赛和项目的平台"
        },
        url: "https://www.kaggle.com/",
        category: "data-science"
    },
    {
        title: {
            en: "MDN Web Docs",
            zh: "MDN Web 文档"
        },
        description: {
            en: "A comprehensive resource for web technologies",
            zh: "一个全面的Web技术资源"
        },
        url: "https://developer.mozilla.org/",
        category: "documentation"
    },
    {
        title: {
            en: "npm",
            zh: "npm"
        },
        description: {
            en: "The world’s largest software registry",
            zh: "世界上最大的软件注册表"
        },
        url: "https://www.npmjs.com/",
        category: "registry"
    },
    {
        title: {
            en: "Node.js",
            zh: "Node.js"
        },
        description: {
            en: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
            zh: "基于Chrome的V8 JavaScript引擎构建的JavaScript运行时"
        },
        url: "https://nodejs.org/",
        category: "technology"
    },
    {
        title: {
            en: "React",
            zh: "React"
        },
        description: {
            en: "A JavaScript library for building user interfaces",
            zh: "一个用于构建用户界面的JavaScript库"
        },
        url: "https://reactjs.org/",
        category: "library"
    },
    {
        title: {
            en: "Vue.js",
            zh: "Vue.js"
        },
        description: {
            en: "A progressive JavaScript framework for building user interfaces",
            zh: "一个用于构建用户界面的渐进式JavaScript框架"
        },
        url: "https://vuejs.org/",
        category: "framework"
    },
    {
        title: {
            en: "Angular",
            zh: "Angular"
        },
        description: {
            en: "A platform and framework for building single-page client applications",
            zh: "一个用于构建单页客户端应用程序的平台和框架"
        },
        url: "https://angular.io/",
        category: "framework"
    },
    {
        title: {
            en: "Docker",
            zh: "Docker"
        },
        description: {
            en: "A platform for developing, shipping, and running applications",
            zh: "一个用于开发、分发和运行应用程序的平台"
        },
        url: "https://www.docker.com/",
        category: "technology"
    },
    {
        title: {
            en: "AWS",
            zh: "AWS"
        },
        description: {
            en: "Amazon Web Services provides on-demand cloud computing platforms and APIs",
            zh: "亚马逊网络服务提供按需云计算平台和API"
        },
        url: "https://aws.amazon.com/",
        category: "cloud"
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

