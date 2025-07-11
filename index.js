console.log("Resume loaded for Герман Кот");

// Translations
const translations = {
  ru: {
    name: "Герман Кот",
    title: "Mobile System Developer",
    contactEmail: "g.kot@students.psu.by",
    contactTelegram: "@k4shera",
    contactGitHub: "k4shera123",
    skillsTitle: "Навыки",
    skillsList: [
      "Коммуникабельность",
      "Стрессоустойчивость",
      "Инициативность",
      "Дружелюбность",
      "Работа в команде",
    ],
    aboutMeTitle: "Обо мне",
    aboutMeParagraphs: [
      "Я 18-летний студент. Общительный и инициативный, легко нахожу общий язык и стремлюсь развивать навыки программирования для карьерного роста.",
      "<strong>Профессиональные навыки ПО:</strong> HTML, CSS, JavaScript (средний), Git (начальный)",
      "<strong>Языковые навыки:</strong> Русский (родной), Английский (A2)",
      "<strong>Хобби:</strong> Бизнес, криптовалюта, motion design, маркетинг",
    ],
    educationTitle: "Образование",
    educationUniversity: "Полоцкий Государственный Университет",
    educationFaculty: "Факультет Информационных Технологий",
    educationSpecialty: "Специальность: Мобильные системы",
    educationYears: "2024 – 2028",
    experienceTitle: "Опыт работы",
    experienceContent: `<p><strong>Язык программирования: C++</strong></p>
      <p>Работал над рядом лабораторных и курсовых работ в рамках учебной программы. Темы включали:</p>
      <ul>
        <li>Массивы: алгоритмы обработки и сортировки данных</li>
        <li>Связанные списки и структуры: динамические структуры данных</li>
        <li>Сортировки: пузырьковая, быстрая, вставками</li>
        <li>Курсовая работа «Библиотека»:
          <ul>
            <li>Поиск по автору, названию и году</li>
            <li>Сортировка по различным критериям</li>
            <li>Отображение списка в виде таблицы</li>
            <li>Сохранение и загрузка данных в файл</li>
          </ul>
        </li>
      </ul>`,
    coursesTitle: "Учебные курсы",
    coursesContent: "<ul><li>Введение в программирование (C++) — отлично</li></ul>",
    communityTitle: "Общественная жизнь",
    communityContent: "<p>Участник молодежных организаций, профсоюза и БРСМ, активно поддерживаю гражданскую позицию.</p>",
    achievementsTitle: "Достижения и награды",
    achievementsContent: "<ul><li>3-е место во 2-м этапе Республиканской олимпиады по математике</li></ul>",
    whyMeTitle: "Почему я?",
    whyMeList: [
      "Коммуникация — моя сильная сторона",
      "Умею выявлять потребности и замечать детали",
      "Готов проявить себя и развиваться",
    ],
    disciplinesButton: "Изучаемые дисциплины",
    disciplinesPageTitle: "ИЗУЧАЕМЫЕ ДИСЦИПЛИНЫ",
    backButton: "Назад",
    specLabel: "Специальность:",
    profilLabel: "Профилизация:",
    qualLabel: "Квалификация:",
  },

  en: {
    name: "Herman Kot",
    title: "Mobile System Developer",
    contactEmail: "g.kot@students.psu.by",
    contactTelegram: "@k4shera",
    contactGitHub: "k4shera123",
    skillsTitle: "Skills",
    skillsList: [
      "Communication",
      "Stress resistance",
      "Initiative",
      "Friendliness",
      "Teamwork",
    ],
    aboutMeTitle: "About me",
    aboutMeParagraphs: [
      "I am an 18-year-old student. Sociable and proactive, easily find common ground and strive to develop programming skills for career growth.",
      "<strong>Professional software skills:</strong> HTML, CSS, JavaScript (intermediate), Git (beginner)",
      "<strong>Language skills:</strong> Russian (native), English (A2)",
      "<strong>Hobbies:</strong> Business, cryptocurrency, motion design, marketing",
    ],
    educationTitle: "Education",
    educationUniversity: "Polotsk State University",
    educationFaculty: "Faculty of Information Technology",
    educationSpecialty: "Specialty: Mobile Systems",
    educationYears: "2024 – 2028",
    experienceTitle: "Work Experience",
    experienceContent: `<p><strong>Programming language: C++</strong></p>
      <p>Worked on several lab and course projects as part of the study program. Topics include:</p>
      <ul>
        <li>Arrays: implementing data processing and sorting algorithms</li>
        <li>Linked lists and structures: creating dynamic data structures</li>
        <li>Sorting: bubble sort, quicksort, and insertion sort</li>
        <li>Course project "Library":
          <ul>
            <li>Searching by author, title, year</li>
            <li>Sorting by various criteria</li>
            <li>Displaying list as table</li>
            <li>Saving and loading data from file</li>
          </ul>
        </li>
      </ul>`,
    coursesTitle: "Courses",
    coursesContent: "<ul><li>Introduction to programming (C++) grade: excellent</li></ul>",
    communityTitle: "Community Involvement",
    communityContent: "<p>Member of youth organizations, trade union and BRSM, actively supporting civil position.</p>",
    achievementsTitle: "Achievements and Awards",
    achievementsContent: "<ul><li>Third place in the second stage of the Republican Mathematics Olympiad</li></ul>",
    whyMeTitle: "Why me?",
    whyMeList: [
      "Communication is my strong point",
      "I can identify needs and notice details",
      "Ready to prove myself and grow",
    ],
    disciplinesButton: "Disciplines",
    disciplinesPageTitle: "DISCIPLINES",
    backButton: "Back",
    specLabel: "Specialty:",
    profilLabel: "Specialization:",
    qualLabel: "Qualification:",
  },

  zh: {
    name: "赫尔曼·科特",
    title: "移动系统开发员",
    contactEmail: "g.kot@students.psu.by",
    contactTelegram: "@k4shera",
    contactGitHub: "k4shera123",
    skillsTitle: "技能",
    skillsList: ["沟通能力", "抗压能力", "主动性", "友好", "团队合作"],
    aboutMeTitle: "关于我",
    aboutMeParagraphs: [
      "我是一名18岁的学生。性格开朗、积极主动，善于沟通，努力提升编程技能以促进职业发展。",
      "<strong>专业软件技能：</strong> HTML, CSS, JavaScript（中级）, Git（初级）",
      "<strong>语言能力：</strong> 俄语（母语）, 英语（A2）",
      "<strong>爱好：</strong> 商业, 加密货币, 动效设计, 营销",
    ],
    educationTitle: "教育背景",
    educationUniversity: "波洛茨克国立大学",
    educationFaculty: "信息技术学院",
    educationSpecialty: "专业：移动系统",
    educationYears: "2024 – 2028",
    experienceTitle: "工作经验",
    experienceContent: `<p><strong>编程语言：C++</strong></p>
      <p>完成了一系列实验和课程项目。主题包括：</p>
      <ul>
        <li>数组：实现数据处理和排序算法</li>
        <li>链表和结构体：创建动态数据结构</li>
        <li>排序：冒泡排序，快速排序，插入排序</li>
        <li>课程项目"图书馆"：
          <ul>
            <li>按作者、标题、年份搜索</li>
            <li>按各种标准排序</li>
            <li>以表格形式显示</li>
            <li>保存和加载文件中的数据</li>
          </ul>
        </li>
      </ul>`,
    coursesTitle: "课程",
    coursesContent: "<ul><li>编程入门（C++）评分：优秀</li></ul>",
    communityTitle: "社会活动",
    communityContent: "<p>青年组织、工会和白俄罗斯共和国青年联盟成员，积极支持公民立场。</p>",
    achievementsTitle: "成就与奖励",
    achievementsContent: "<ul><li>数学共和国奥林匹克竞赛第二阶段第三名</li></ul>",
    whyMeTitle: "为什么选择我？",
    whyMeList: ["沟通是我的强项", "善于发现需求和注意细节", "准备展现自我并持续成长"],
    disciplinesButton: "学科",
    disciplinesPageTitle: "学科列表",
    backButton: "返回",
    specLabel: "专业：",
    profilLabel: "细分：",
    qualLabel: "资质：",
  }
};

// Update page content based on language
function updateContent(lang) {
  const t = translations[lang] || translations['en']; // Fallback to English if translation missing
  
  // Helper function to safely update element content
  function updateElement(selector, content) {
    const element = document.querySelector(selector);
    if (element) {
      if (typeof content === 'function') {
        content(element);
      } else {
        element.innerHTML = content;
      }
    }
  }

  // Sidebar
  updateElement('.sidebar h1', t.name);
  updateElement('.sidebar .title', t.title);
  updateElement('.contact-info', `
    <p>📧 <a href="mailto:${t.contactEmail}">${t.contactEmail}</a></p>
    <p>💬 <a href="https://t.me/k4shera" target="_blank">${t.contactTelegram}</a></p>
    <p>💻 <a href="https://github.com/k4shera123" target="_blank">${t.contactGitHub}</a></p>
  `);

  // Skills
  updateElement('.skills h2', t.skillsTitle);
  updateElement('.skills ul', (ul) => {
    ul.innerHTML = t.skillsList.map(skill => `<li>${skill}</li>`).join('');
  });

  // About me
  updateElement('.about h2', t.aboutMeTitle);
  updateElement('.about .card', t.aboutMeParagraphs.map(p => `<p>${p}</p>`).join(''));

  // Education
  updateElement('.education h2', t.educationTitle);
  updateElement('.education .card', `
    <h3>${t.educationUniversity}</h3>
    <p>
      ${t.educationFaculty}<br />
      ${t.educationSpecialty}<br />
      <em>${t.educationYears}</em>
    </p>
    <button id="view-disciplines" class="disciplines-link" type="button">
      ${t.disciplinesButton}
    </button>
  `);

  // Experience
  updateElement('.experience h2', t.experienceTitle);
  updateElement('.experience .card', t.experienceContent);

  // Courses
  updateElement('.courses h2', t.coursesTitle);
  updateElement('.courses .card', t.coursesContent);

  // Community
  updateElement('.community h2', t.communityTitle);
  updateElement('.community .card', t.communityContent);

  // Achievements
  updateElement('.achievements h2', t.achievementsTitle);
  updateElement('.achievements .card', t.achievementsContent);

  // Why me
  updateElement('.why-me h2', t.whyMeTitle);
  updateElement('.why-me ul', (ul) => {
    ul.innerHTML = t.whyMeList.map(item => `<li>${item}</li>`).join('');
  });

  // Disciplines page
  updateElement('.disciplines-header h1', t.disciplinesPageTitle);
  updateElement('.back-button', `<i class="fas fa-arrow-left"></i> ${t.backButton}`);
  
  const infoLabels = document.querySelectorAll('.specialization-info p');
  if (infoLabels.length >= 3) {
    infoLabels[0].querySelector('strong').textContent = t.specLabel;
    infoLabels[1].querySelector('strong').textContent = t.profilLabel;
    infoLabels[2].querySelector('strong').textContent = t.qualLabel;
  }
}

// Initialize the page
function initPage() {
  // Theme initialization
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  // Language initialization
  const langSelector = document.getElementById('language-select');
  if (langSelector) {
    const savedLang = localStorage.getItem('language') || 'ru';
    langSelector.value = savedLang;
    updateContent(savedLang);

    langSelector.addEventListener('change', (e) => {
      const lang = e.target.value;
      localStorage.setItem('language', lang);
      updateContent(lang);
    });
  }

  // Scroll animation
  const animateElements = document.querySelectorAll('.animate');
  if (animateElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    animateElements.forEach(el => observer.observe(el));
  }

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem(
        'theme',
        document.body.classList.contains('dark') ? 'dark' : 'light'
      );
    });
  }

  // Handle back button on disciplines page
  const backButton = document.querySelector('.back-button');
  if (backButton) {
    backButton.addEventListener('click', () => {
      window.history.back();
    });
  }

  // Handle disciplines button using event delegation
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'view-disciplines') {
      window.location.href = 'disciplines.html';
    }
  });
}

// Start everything when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);
