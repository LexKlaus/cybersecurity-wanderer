// script.js

// Define translations for different languages
const translations = {
    en: {
        pageTitle: "Cybersecurity Freelancer",
        companyName: "CyberSecure Solutions",
        navHome: "Home",
        navServices: "Services",
        navExperienceProjects: "Experience & Projects", // New Nav Item
        navAbout: "About",
        navContact: "Contact",
        heroTitle: "Safeguarding Your Digital World",
        heroSubtitle: "Expert cybersecurity solutions tailored for individuals and businesses. Protect your assets from evolving threats.",
        heroCta: "Get a Free Consultation",
        servicesTitle: "Our Services",
        servicesSubtitle: "Comprehensive cybersecurity solutions designed to protect your digital presence.",
        service1Title: "Vulnerability Assessment",
        service1Desc: "Identify and assess weaknesses in your systems, networks, and applications to prevent potential breaches.",
        service2Title: "Penetration Testing",
        service2Desc: "Simulate cyberattacks to find exploitable vulnerabilities before malicious actors do.",
        service3Title: "Security Consulting",
        service3Desc: "Provide expert advice and strategies to build a robust security posture for your organization.",
        service4Title: "Incident Response",
        service4Desc: "Develop and implement plans to effectively respond to and recover from security breaches.",
        service5Title: "Security Awareness Training",
        service5Desc: "Educate your employees on best practices to identify and avoid common cyber threats.",
        service6Title: "Compliance & Audit",
        service6Desc: "Ensure your systems and processes meet industry standards and regulatory requirements.",
        expProjectsTitle: "My Experience & Projects", // New section title
        expProjectsSubtitle: "Detailing my expertise in risk assessment, vulnerability management, and hands-on security projects.", // Updated Subtitle
        experienceSubtitle: "Professional Experience & Assessments", // Updated Sub-heading
        
        // --- UPDATED EXPERIENCE CONTENT ---
        expItem1Detail1: "Conducted vulnerability research on open-source projects, identifying critical issues such as **SSRF, RCE, and unauthenticated GraphQL introspection**, and delivered detailed security reports to clients.",
        expItem1Detail2: "Performed **penetration testing and open-source license compliance checks**, providing actionable recommendations to strengthen security posture.",
        expItem1Detail3: "Developed comprehensive **risk assessment reports aligned with ISO 27001 and NIST frameworks**.",
        expItem2Detail1: "Applied expertise in **application security, vulnerability management, and security testing** to enhance client cyber resilience and compliance.",
        // --- END UPDATED EXPERIENCE CONTENT ---
        
        // Project titles remain, removed 'Course' detail from HTML
        expItem2Detail2: "Note: The following projects showcase technical skills but are not client engagements.", // Placeholder to fill the unused data-key for cleaner translation setup
        expItem2Detail3: "These projects are for demonstration purposes only.", 

        projectsSubtitle: "Cybersecurity Projects", // Sub-heading for projects
        project1Title: "Web Application Penetration Testing Simulation",
        project1Detail1: "Conducted automated vulnerability scanning and analysis using OWASP ZAP.",
        project1Detail2: "Manually performed testing and exploitation of common vulnerabilities (e.g., SQL Injection, XSS).",
        project1Detail3: "Authored penetration testing reports detailing findings, risk levels, and remediation recommendations.",
        project2Title: "Network Security Hardening Lab",
        project2Detail1: "Built vulnerable network topologies in a virtualized environment.",
        project2Detail2: "Practiced firewall rule configuration, Intrusion Detection System (IDS) deployment, and log analysis.",
        project2Detail3: "Demonstrated how to strengthen network perimeter security against common attacks.",
        viewProject: "View Project &rarr;",
        
        // --- UPDATED ABOUT ME CONTENT to match new experience ---
        aboutTitle: "About Me",
        aboutP1: "Hello! I'm Huang Yen Chan, an emerging cybersecurity consultant demonstrating expertise in **risk assessment and vulnerability management**.",
        aboutP2: "I have successfully conducted security bug research in open-source projects, identifying critical vulnerabilities and delivering detailed reports, while also developing comprehensive risk assessment reports under established frameworks like ISO 27001 and NIST.",
        aboutP3: "I am skilled in application security, security testing, and information security, applying these competencies to enhance organizational cyber resilience and compliance. I am focused on custom solutions that mitigate risks and protect digital assets. Let's work together to build a more secure future for your business.",
        // --- END UPDATED ABOUT ME CONTENT ---

        ctaTitle: "Ready to Secure Your Business?",
        ctaSubtitle: "Don't wait for a breach to happen. Proactive security is your best defense.",
        ctaButton: "Get a Custom Security Plan",
        contactTitle: "Contact Me",
        contactSubtitle: "Have a question or need a quote? Fill out the form below or reach out directly.",
        contactNameLabel: "Name",
        contactEmailLabel: "Email",
        contactSubjectLabel: "Subject",
        contactMessageLabel: "Message",
        sendMessageButton: "Send Message",
        contactOrConnect: "Or connect directly:",
        contactEmail: "Email: luthor47@gmail.com",
        footerCopyright: "&copy; 2025 CyberSecure Solutions. All rights reserved.",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service"
    },
    zh: { // Traditional Chinese (Taiwanese usage) translations
        pageTitle: "資安自由工作者",
        companyName: "資安解決方案",
        navHome: "首頁",
        navServices: "服務項目",
        navExperienceProjects: "經歷與專案", // 新增導覽項目
        navAbout: "關於我",
        navContact: "聯絡我們",
        heroTitle: "守護您的數位世界",
        heroSubtitle: "為個人和企業量身打造的專業資安解決方案。保護您的數位資產免受不斷變化的威脅。",
        heroCta: "獲取免費諮詢",
        servicesTitle: "我們的服務",
        servicesSubtitle: "全面的資安解決方案，旨在保護您的數位足跡。",
        service1Title: "弱點評估",
        service1Desc: "識別並評估您的系統、網路和應用程式中的弱點，以防範潛在的資安漏洞。",
        service2Title: "滲透測試",
        service2Desc: "模擬網路攻擊，在惡意行為者發現可利用的漏洞前找出它們。",
        service3Title: "資安顧問",
        service3Desc: "提供專家建議與策略，為您的組織建立強大的資安防護。",
        service4Title: "事件應變",
        service4Desc: "制定並實施計畫，有效應對及復原資安事件。",
        service5Title: "資安意識訓練",
        service5Desc: "教育您的員工識別並避免常見的網路威脅，提升最佳實踐。",
        service6Title: "合規與稽核",
        service6Desc: "確保您的系統和流程符合行業標準和法規要求。",
        expProjectsTitle: "我的經歷與專案", // 新增區塊標題
        expProjectsSubtitle: "詳細說明我在風險評估、弱點管理與實務資安專案方面的專業知識。", // 更新副標題
        experienceSubtitle: "專業經歷與評估", // 更新子標題
        
        // --- UPDATED EXPERIENCE CONTENT ---
        expItem1Detail1: "在開源專案中進行**弱點研究**，識別出 **SSRF、RCE 和未經身份驗證的 GraphQL 內省**等關鍵問題，並向客戶交付詳細的安全報告。",
        expItem1Detail2: "執行**滲透測試與開源授權合規性檢查**，提供可操作的建議以強化安全態勢。",
        expItem1Detail3: "根據 **ISO 27001 和 NIST 框架**，制定全面的**風險評估報告**。",
        expItem2Detail1: "應用**應用程式安全、弱點管理和安全測試**的專業知識，增強客戶的網路彈性與合規性。",
        // --- END UPDATED EXPERIENCE CONTENT ---
        
        // Project titles remain, removed 'Course' detail from HTML
        expItem2Detail2: "注意：以下專案僅展示技術能力，並非客戶委託案件。", // Placeholder to fill the unused data-key for cleaner translation setup
        expItem2Detail3: "這些專案僅用於示範目的。", 
        
        projectsSubtitle: "資安專案", // 專案子標題
        project1Title: "網站應用程式滲透測試模擬",
        project1Detail1: "使用 OWASP ZAP 進行自動化弱點掃描與分析。",
        project1Detail2: "手動執行常見弱點（如 SQL 注入、XSS）的測試與利用。",
        project1Detail3: "撰寫滲透測試報告，詳細記錄發現的問題、風險等級與修復建議。",
        project2Title: "網路安全強化實驗室",
        project2Detail1: "在虛擬環境中搭建具弱點的網路拓撲。",
        project2Detail2: "實踐防火牆規則配置、入侵偵測系統 (IDS) 部署與日誌分析。",
        project2Detail3: "展示如何強化網路邊界安全以防禦常見攻擊。",
        viewProject: "查看專案 &rarr;",
        
        // --- UPDATED ABOUT ME CONTENT to match new experience ---
        aboutTitle: "關於我",
        aboutP1: "您好！我是詹皇彥，一位新銳資安顧問，展現出在**風險評估與弱點管理**方面的專業知識。",
        aboutP2: "我成功在開源專案中進行安全漏洞研究，識別了關鍵弱點並交付了詳細報告，同時也根據 **ISO 27001 和 NIST 框架**制定了全面的風險評估報告。",
        aboutP3: "我擅長**應用程式安全、弱點管理和安全測試**，並應用這些能力來增強客戶的網路彈性與合規性。我專注於客製化解決方案，以減輕風險並保護數位資產。讓我們攜手合作，為您的企業建構一個更安全的未來。",
        // --- END UPDATED ABOUT ME CONTENT ---

        ctaTitle: "準備好保護您的業務了嗎？",
        ctaSubtitle: "別等到資安事件發生才行動。主動防禦是您最佳的選擇。",
        contactTitle: "聯絡我們",
        contactSubtitle: "有問題或需要報價嗎？填寫下方表格或直接與我們聯絡。",
        contactNameLabel: "姓名",
        contactEmailLabel: "電子郵件",
        contactSubjectLabel: "主旨",
        contactMessageLabel: "訊息",
        sendMessageButton: "發送訊息",
        contactOrConnect: "或直接聯絡：",
        contactEmail: "電子郵件：luthor47@gmail.com",
        footerCopyright: "&copy; 2025 資安解決方案。保留所有權利。",
        footerPrivacy: "隱私權政策",
        footerTerms: "服務條款"
    }
};

// Function to set the language
function setLanguage(lang) {
    // Set the document's lang attribute
    document.documentElement.lang = lang;

    // Update title tag
    const titleElement = document.querySelector('title');
    if (titleElement && translations[lang]['pageTitle']) {
        titleElement.textContent = translations[lang]['pageTitle'];
    }

    // Update elements with data-key attributes
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            // Special handling for HTML entities like copyright symbol
            if (key === 'footerCopyright') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update input placeholder texts (if data-key for placeholder is not defined, use label)
    const formFields = [
        { id: 'name', key: 'contactNameLabel' },
        { id: 'email', key: 'contactEmailLabel' },
        { id: 'subject', key: 'contactSubjectLabel' },
        { id: 'message', key: 'contactMessageLabel' }
    ];

    formFields.forEach(field => {
        const input = document.getElementById(field.id);
        if (input && translations[lang][field.key]) {
            input.placeholder = translations[lang][field.key];
        }
    });

    // Update active language button styles
    const allLangButtons = document.querySelectorAll('#lang-en-desktop, #lang-zh-desktop, #lang-en-mobile, #lang-zh-mobile');
    allLangButtons.forEach(button => {
        if (button.id.includes(lang)) {
            button.classList.add('bg-green-500', 'text-white');
            button.classList.remove('bg-gray-50', 'text-gray-600');
        } else {
            button.classList.remove('bg-green-500', 'text-white');
            button.classList.add('bg-gray-50', 'text-gray-600');
        }
    });

    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', lang);
}


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu.classList.contains('block')) {
            mobileMenu.classList.remove('block');
            mobileMenu.classList.add('hidden');
        }
    });
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('block');
});

// Set default language and attach event listeners on page load
document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners for desktop language buttons
    const langEnDesktop = document.getElementById('lang-en-desktop');
    const langZhDesktop = document.getElementById('lang-zh-desktop');

    if (langEnDesktop) {
        langEnDesktop.addEventListener('click', () => setLanguage('en'));
    }
    if (langZhDesktop) {
        langZhDesktop.addEventListener('click', () => setLanguage('zh'));
    }

    // Attach event listeners for mobile language buttons
    const langEnMobile = document.getElementById('lang-en-mobile');
    const langZhMobile = document.getElementById('lang-zh-mobile');

    if (langEnMobile) {
        langEnMobile.addEventListener('click', () => setLanguage('en'));
    }
    if (langZhMobile) {
        langZhMobile.addEventListener('click', () => setLanguage('zh'));
    }

    // Initialize language based on localStorage or default to English
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
        setLanguage(savedLang);
    } else {
        setLanguage('en'); // Default language if no preference is saved
    }
});
