
    const websites = [
   
    // 已有网站...
    {
        title: {
            en: "LinkedIn",
            zh: "领英"
        },
        description: {
            en: "A professional networking platform",
            zh: "一个专业社交平台"
        },
        url: "https://www.linkedin.com/",
        category: "networking"
    },
    {
        title: {
            en: "YouTube",
            zh: "YouTube"
        },
        description: {
            en: "A video-sharing platform",
            zh: "一个视频分享平台"
        },
        url: "https://www.youtube.com/",
        category: "media"
    },
    {
        title: {
            en: "Google",
            zh: "谷歌"
        },
        description: {
            en: "A search engine and technology company",
            zh: "一个搜索引擎和科技公司"
        },
        url: "https://www.google.com/",
        category: "search"
    },
    {
        title: {
            en: "Facebook",
            zh: "Facebook"
        },
        description: {
            en: "A social networking site",
            zh: "一个社交网络平台"
        },
        url: "https://www.facebook.com/",
        category: "social"
    },
    {
        title: {
            en: "Instagram",
            zh: "Instagram"
        },
        description: {
            en: "A photo and video sharing app",
            zh: "一个照片和视频分享应用"
        },
        url: "https://www.instagram.com/",
        category: "social"
    },
    {
        title: {
            en: "Twitter",
            zh: "推特"
        },
        description: {
            en: "A social networking and microblogging site",
            zh: "一个社交网络和微博平台"
        },
        url: "https://twitter.com/",
        category: "social"
    },
    {
        title: {
            en: "Trello",
            zh: "Trello"
        },
        description: {
            en: "A visual collaboration tool for project management",
            zh: "一个用于项目管理的可视化协作工具"
        },
        url: "https://trello.com/",
        category: "productivity"
    },
    {
        title: {
            en: "Slack",
            zh: "Slack"
        },
        description: {
            en: "A messaging platform for teams",
            zh: "一个团队消息平台"
        },
        url: "https://slack.com/",
        category: "communication"
    },
    {
        title: {
            en: "Adobe Creative Cloud",
            zh: "Adobe创意云"
        },
        description: {
            en: "A collection of creative apps and services",
            zh: "一个创意应用和服务集合"
        },
        url: "https://www.adobe.com/creativecloud.html",
        category: "software"
    },
    {
        title: {
            en: "Canva",
            zh: "Canva"
        },
        description: {
            en: "A graphic design platform",
            zh: "一个图形设计平台"
        },
        url: "https://www.canva.com/",
        category: "design"
    },
    {
        title: {
            en: "Dropbox",
            zh: "Dropbox"
        },
        description: {
            en: "A file hosting service",
            zh: "一个文件托管服务"
        },
        url: "https://www.dropbox.com/",
        category: "storage"
    },
    {
        title: {
            en: "Evernote",
            zh: "Evernote"
        },
        description: {
            en: "A note-taking and organization app",
            zh: "一个笔记和组织应用"
        },
        url: "https://evernote.com/",
        category: "productivity"
    },
    {
        title: {
            en: "Google Drive",
            zh: "Google Drive"
        },
        description: {
            en: "A cloud storage and file-sharing service",
            zh: "一个云存储和文件分享服务"
        },
        url: "https://www.google.com/drive/",
        category: "storage"
    },
    {
        title: {
            en: "Microsoft Office 365",
            zh: "Microsoft Office 365"
        },
        description: {
            en: "A suite of productivity applications",
            zh: "一个生产力应用程序套件"
        },
        url: "https://www.office.com/",
        category: "software"
    },
    {
        title: {
            en: "Notion",
            zh: "Notion"
        },
        description: {
            en: "A workspace for notes, tasks, wikis, and databases",
            zh: "一个用于笔记、任务、维基和数据库的工作空间"
        },
        url: "https://www.notion.so/",
        category: "productivity"
    },
    {
        title: {
            en: "Zoom",
            zh: "Zoom"
        },
        description: {
            en: "A video conferencing platform",
            zh: "一个视频会议平台"
        },
        url: "https://zoom.us/",
        category: "communication"
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
            en: "Skillshare",
            zh: "Skillshare"
        },
        description: {
            en: "An online learning community",
            zh: "一个在线学习社区"
        },
        url: "https://www.skillshare.com/",
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
            en: "Udacity",
            zh: "Udacity"
        },
        description: {
            en: "A nanodegree program provider",
            zh: "一个纳米学位项目提供商"
        },
        url: "https://www.udacity.com/",
        category: "education"
    },
    {
        title: {
            en: "Pluralsight",
            zh: "Pluralsight"
        },
        description: {
            en: "An online learning platform for IT professionals",
            zh: "一个面向IT专业人士的在线学习平台"
        },
        url: "https://www.pluralsight.com/",
        category: "education"
    },
    {
        title: {
            en: "Khan Academy",
            zh: "可汗学院"
        },
        description: {
            en: "A non-profit organization offering free online courses",
            zh: "一个提供免费在线课程的非营利组织"
        },
        url: "https://www.khanacademy.org/",
        category: "education"
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
            en: "LeetCode",
            zh: "LeetCode"
        },
        description: {
            en: "A platform for preparing technical interviews",
            zh: "一个用于准备技术面试的平台"
        },
        url: "https://leetcode.com/",
        category: "challenge"
    },
    {
        title: {
            en: "Exercism",
            zh: "Exercism"
        },
        description: {
            en: "A platform for learning to code through practice",
            zh: "一个通过实践学习编程的平台"
        },
        url: "https://exercism.org/",
        category: "education"
    },
    {
        title: {
            en: "Codewars",
            zh: "Codewars"
        },
        description: {
            en: "A platform for improving programming skills",
            zh: "一个用于提高编程技能的平台"
        },
        url: "https://www.codewars.com/",
        category: "challenge"
    },
    {
        title: {
            en: "Project Euler",
            zh: "Project Euler"
        },
        description: {
            en: "A series of challenging mathematical/computer programming problems",
            zh: "一系列具有挑战性的数学/计算机编程问题"
        },
        url: "https://projecteuler.net/",
        category: "challenge"
    },
    {
        title: {
            en: "Reddit",
            zh: "Reddit"
        },
        description: {
            en: "A social news and discussion website",
            zh: "一个社交新闻和讨论网站"
        },
        url: "https://www.reddit.com/",
        category: "social"
    },
    {
        title: {
            en: "Hacker News",
            zh: "Hacker News"
        },
        description: {
            en: "A social news website focusing on computer science and entrepreneurship",
            zh: "一个专注于计算机科学和创业的社交新闻网站"
        },
        url: "https://news.ycombinator.com/",
        category: "social"
    },
    {
        title: {
            en: "Dev.to",
            zh: "Dev.to"
        },
        description: {
            en: "A blogging platform for developers",
            zh: "一个面向开发者的博客平台"
        },
        url: "https://dev.to/",
        category: "community"
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
            en: "GitLab",
            zh: "GitLab"
        },
        description: {
            en: "A web-based DevOps lifecycle tool",
            zh: "一个基于Web的DevOps生命周期工具"
        },
        url: "https://about.gitlab.com/",
        category: "platform"
    },
    {
        title: {
            en: "Bitbucket",
            zh: "Bitbucket"
        },
        description: {
            en: "A code hosting platform for version control and collaboration",
            zh: "一个用于版本控制和协作的代码托管平台"
        },
        url: "https://bitbucket.org/",
        category: "platform"
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
            en: "Kubernetes",
            zh: "Kubernetes"
        },
        description: {
            en: "An open-source container orchestration platform",
            zh: "一个开源容器编排平台"
        },
        url: "https://kubernetes.io/",
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
    },
    {
        title: {
            en: "Google Cloud",
            zh: "Google Cloud"
        },
        description: {
            en: "A suite of cloud computing services",
            zh: "一个云计算服务套件"
        },
        url: "https://cloud.google.com/",
        category: "cloud"
    },
    {
        title: {
            en: "Microsoft Azure",
            zh: "Microsoft Azure"
        },
        description: {
            en: "A cloud computing platform and set of services",
            zh: "一个云计算平台和服务套件"
        },
        url: "https://azure.microsoft.com/",
        category: "cloud"
    },
    {
        title: {
            en: "Heroku",
            zh: "Heroku"
        },
        description: {
            en: "A cloud platform as a service",
            zh: "一个云平台即服务"
        },
        url: "https://www.heroku.com/",
        category: "cloud"
    },
    {
        title: {
            en: "Netlify",
            zh: "Netlify"
        },
        description: {
            en: "A cloud platform for static sites and serverless functions",
            zh: "一个用于静态站点和无服务器函数的云平台"
        },
        url: "https://www.netlify.com/",
        category: "cloud"
    },
    {
        title: {
            en: "Vercel",
            zh: "Vercel"
        },
        description: {
            en: "A cloud platform for static sites and serverless functions",
            zh: "一个用于静态站点和无服务器函数的云平台"
        },
        url: "https://vercel.com/",
        category: "cloud"
    },
    {
        title: {
            en: "Firebase",
            zh: "Firebase"
        },
        description: {
            en: "A platform for building web and mobile applications",
            zh: "一个用于构建Web和移动应用程序的平台"
        },
        url: "https://firebase.google.com/",
        category: "technology"
    },
    {
        title: {
            en: "Algolia",
            zh: "Algolia"
        },
        description: {
            en: "A search-as-a-service platform",
            zh: "一个搜索即服务平台"
        },
        url: "https://www.algolia.com/",
        category: "technology"
    },
    {
        title: {
            en: "Elasticsearch",
            zh: "Elasticsearch"
        },
        description: {
            en: "A distributed search and analytics engine",
            zh: "一个分布式搜索和分析引擎"
        },
        url: "https://www.elastic.co/elasticsearch/",
        category: "technology"
    },
    {
        title: {
            en: "PostgreSQL",
            zh: "PostgreSQL"
        },
        description: {
            en: "A powerful, open-source object-relational database system",
            zh: "一个强大的开源对象关系型数据库系统"
        },
        url: "https://www.postgresql.org/",
        category: "technology"
    },
    {
        title: {
            en: "MySQL",
            zh: "MySQL"
        },
        description: {
            en: "A widely used open-source relational database management system",
            zh: "一个广泛使用的开源关系型数据库管理系统"
        },
        url: "https://www.mysql.com/",
        category: "technology"
    },
    {
        title: {
            en: "MongoDB",
            zh: "MongoDB"
        },
        description: {
            en: "A general-purpose, document-based, distributed database built for modern application developers",
            zh: "一个通用的、基于文档的、分布式的数据库，专为现代应用程序开发人员构建"
        },
        url: "https://www.mongodb.com/",
        category: "technology"
    },
    {
        title: {
            en: "Redis",
            zh: "Redis"
        },
        description: {
            en: "An in-memory data structure store, used as a database, cache, and message broker",
            zh: "一个内存中的数据结构存储，用作数据库、缓存和消息代理"
        },
        url: "https://redis.io/",
        category: "technology"
    },
    
    
    
    
    
    
    
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

