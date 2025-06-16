// script.js

// Define translations for different languages
const translations = {
    en: {
        pageTitle: "Cybersecurity Freelancer",
        companyName: "CyberSecure Solutions",
        navHome: "Home",
        navServices: "Services",
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
        aboutTitle: "About Me",
        aboutP1: "Hello! I'm Huang Yen Chan, a dedicated cybersecurity professional with over three years of intensive experience in cybersecurity. I've also successfully completed ISO and NIST assessments on Upwork.",
        aboutP2: "My mission is to provide robust and practical security solutions that empower you to navigate the digital landscape with confidence. I specialize in identifying vulnerabilities, fortifying defenses, and responding effectively to security incidents.",
        aboutP3: "My approach combines technical knowledge with a deep understanding of practical business needs, ensuring that security measures are not just effective but also integrated seamlessly into your operations. I am passionate about staying ahead of emerging threats and committed to continuous learning to offer you the most current and effective protection strategies. Let's work together to build a more secure future for your business.",
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
        // contactPhone: "Phone: +1 (234) 567-890", // Removed phone number
        footerCopyright: "&copy; 2025 CyberSecure Solutions. All rights reserved.",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service"
    },
    zh: { // Traditional Chinese (Taiwanese usage) translations
        pageTitle: "資安自由工作者",
        companyName: "資安解決方案",
        navHome: "首頁",
        navServices: "服務項目",
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
        aboutTitle: "關於我",
        aboutP1: "您好！我是詹皇彥，一位專業的資安工作者，擁有超過三年的資安經驗。我也曾在 Upwork 上成功完成 ISO 和 NIST 評估。",
        aboutP2: "我的使命是提供強大且實用的資安解決方案，幫助您自信地駕馭數位環境。我專注於識別弱點、強化防禦並有效應對資安事件。",
        aboutP3: "我的方法結合了技術知識與對實際業務需求的深入理解，確保資安措施不僅有效，而且能無縫整合到您的營運中。我熱衷於走在新興威脅的前沿，並致力於持續學習，為您提供最新、最有效的防護策略。讓我們攜手合作，為您的企業建構一個更安全的未來。",
        ctaTitle: "準備好保護您的業務了嗎？",
        ctaSubtitle: "別等到資安事件發生才行動。主動防禦是您最佳的選擇。",
        ctaButton: "獲取客製化資安計畫",
        contactTitle: "聯絡我們",
        contactSubtitle: "有問題或需要報價嗎？填寫下方表格或直接與我們聯絡。",
        contactNameLabel: "姓名",
        contactEmailLabel: "電子郵件",
        contactSubjectLabel: "主旨",
        contactMessageLabel: "訊息",
        sendMessageButton: "發送訊息",
        contactOrConnect: "或直接聯絡：",
        contactEmail: "電子郵件：luthor47@gmail.com",
        // contactPhone: "電話：+1 (234) 567-890", // 移除電話號碼
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
