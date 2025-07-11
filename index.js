console.log("Resume loaded for Герман Кот");

// Translations object with all content
const translations = {
  ru: {
    // Main page
    name: "Герман Кот",
    title: "Разработчик мобильных систем",
    contactEmail: "g.kot@students.psu.by",
    contactTelegram: "@k4shera",
    contactGitHub: "k4shera123",
    skillsTitle: "Навыки",
    skillsList: [
      "Коммуникабельность",
      "Стрессоустойчивость",
      "Инициативность",
      "Дружелюбность",
      "Работа в команде"
    ],
    aboutMeTitle: "Обо мне",
    aboutMeParagraphs: [
      "Я 18‑летний студент. Общительный и инициативный, легко нахожу общий язык и стремлюсь развивать навыки программирования, применяя их для карьерного роста.",
      "<strong>Профессиональные навыки ПО:</strong> HTML, CSS, JavaScript (средний уровень), Git (начальный уровень)",
      "<strong>Языковые навыки:</strong> Русский (родной), Английский (A2)",
      "<strong>Хобби:</strong> Бизнес, криптовалюта, motion design, маркетинг"
    ],
    educationTitle: "Образование",
    educationContent: "<h3>Полоцкий Государственный Университет</h3><p>Факультет Информационных Технологий<br>Специальность: Мобильные системы<br><em>2024 – 2028</em></p>",
    experienceTitle: "Опыт работы",
    experienceContent: `<p><strong>Язык программирования: C++</strong></p>
      <p>Работал над рядом лабораторных и курсовых работ в рамках учебной программы. Темы включают:</p>
      <ul>
        <li>Массивы: реализация алгоритмов обработки и сортировки данных</li>
        <li>Связанные списки и структуры: создание динамических структур данных</li>
        <li>Сортировки: пузырьковая, быстрая сортировка и сортировка вставками</li>
        <li>Курсовая работа: разработка консольного приложения «Библиотека» с функционалом:</li>
        <ul>
          <li>Поиск книг по автору, названию и году выпуска</li>
          <li>Сортировка по различным критериям</li>
          <li>Вывод списка книг в виде таблицы</li>
          <li>Сохранение и загрузка данных из файла</li>
        </ul>
      </ul>`,
    coursesTitle: "Учебные курсы",
    coursesContent: "<ul><li>Введение в программирование (C++) оценка: отлично</li></ul>",
    communityTitle: "Общественная жизнь",
    communityContent: "<p>Участник молодежных организаций, профсоюз и БРСМ, активно поддерживаю гражданскую позицию</p>",
    achievementsTitle: "Достижения и награды",
    achievementsContent: "<ul><li>Третье место во втором этапе Республиканской олимпиады по математике</li></ul>",
    whyMeTitle: "Почему я?",
    whyMeList: [
      "Коммуникация — моя сильная сторона",
      "Умею выявлять потребности и замечать детали",
      "Готов проявить себя и развиваться"
    ],
    disciplinesButton: "Изучаемые дисциплины",

    // Disciplines page
    disciplinesTitle: "ИЗУЧАЕМЫЕ ДИСЦИПЛИНЫ",
    backButton: "На главную",
    specialtyLabel: "Специальность:",
    specialtyValue: "Мобильные системы",
    specializationLabel: "Профилизация:",
    specializationValue: "Программируемые мобильные системы",
    qualificationLabel: "Квалификация:",
    qualificationValue: "Инженер-системотехник",
    disciplineHeader: "Дисциплина",
    gradeHeader: "Отметка",
    semesterHeader: "Семестр",
    subjects: [
      "Основы алгоритмизации и программирования",
      "Алгоритмы структуры данных",
      "Арифметические и логические основы цифровых устройств",
      "Физика",
      "Личностно-профессиональное развитие специалиста",
      "Культурология",
      "Математический анализ",
      "Дискретная математика",
      "Линейная алгебра и аналитическая геометрия",
      "Английский язык",
      "История Беларуси"
    ],
    semesters: [
      "1-ый, 2-ой",
      "2-ой",
      "1-ый, 2-ой",
      "1-ый, 2-ой",
      "2-ой",
      "2-ой",
      "1-ый, 2-ой",
      "2-ой",
      "1-ый",
      "1-ый, 2-ой",
      "1-ый"
    ]
  },
  en: {
    // Main page
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
      "Teamwork"
    ],
    aboutMeTitle: "About me",
    aboutMeParagraphs: [
      "I am an 18-year-old student. Sociable and proactive, easily find common ground and strive to develop programming skills for career growth.",
      "<strong>Professional software skills:</strong> HTML, CSS, JavaScript (intermediate), Git (beginner)",
      "<strong>Language skills:</strong> Russian (native), English (A2)",
      "<strong>Hobbies:</strong> Business, cryptocurrency, motion design, marketing"
    ],
    educationTitle: "Education",
    educationContent: "<h3>Polotsk State University</h3><p>Faculty of Information Technology<br>Specialty: Mobile Systems<br><em>2024 – 2028</em></p>",
    experienceTitle: "Work Experience",
    experienceContent: `<p><strong>Programming language: C++</strong></p>
      <p>Worked on several lab and course projects as part of the study program. Topics include:</p>
      <ul>
        <li>Arrays: implementing data processing and sorting algorithms</li>
        <li>Linked lists and structures: creating dynamic data structures</li>
        <li>Sorting: bubble sort, quicksort, and insertion sort</li>
        <li>Course project: development of a console application "Library" with functionality:</li>
        <ul>
          <li>Searching books by author, title, and publication year</li>
          <li>Sorting by various criteria</li>
          <li>Displaying book list in table format</li>
          <li>Saving and loading data from file</li>
        </ul>
      </ul>`,
    coursesTitle: "Courses",
    coursesContent: "<ul><li>Introduction to programming (C++) grade: excellent</li></ul>",
    communityTitle: "Community Involvement",
    communityContent: "<p>Member of youth organizations, trade union and BRSM, actively supporting civil position</p>",
    achievementsTitle: "Achievements and Awards",
    achievementsContent: "<ul><li>Third place in the second stage of the Republican Mathematics Olympiad</li></ul>",
    whyMeTitle: "Why me?",
    whyMeList: [
      "Communication is my strong point",
      "I can identify needs and notice details",
      "Ready to prove myself and grow"
    ],
    disciplinesButton: "Study Disciplines",

    // Disciplines page
    disciplinesTitle: "STUDY DISCIPLINES",
    backButton: "Back to main",
    specialtyLabel: "Specialty:",
    specialtyValue: "Mobile Systems",
    specializationLabel: "Specialization:",
    specializationValue: "Programmable Mobile Systems",
    qualificationLabel: "Qualification:",
    qualificationValue: "System Engineer",
    disciplineHeader: "Discipline",
    gradeHeader: "Grade",
    semesterHeader: "Semester",
    subjects: [
      "Fundamentals of Algorithms and Programming",
      "Data Structures Algorithms",
      "Arithmetic and Logical Foundations of Digital Devices",
      "Physics",
      "Personal and Professional Development of a Specialist",
      "Culturology",
      "Mathematical Analysis",
      "Discrete Mathematics",
      "Linear Algebra and Analytic Geometry",
      "English Language",
      "History of Belarus"
    ],
    semesters: [
      "1st, 2nd",
      "2nd",
      "1st, 2nd",
      "1st, 2nd",
      "2nd",
      "2nd",
      "1st, 2nd",
      "2nd",
      "1st",
      "1st, 2nd",
      "1st"
    ]
  },
  zh: {
    // Main page
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
      "<strong>爱好：</strong> 商业, 加密货币, 动效设计, 营销"
    ],
    educationTitle: "教育背景",
    educationContent: "<h3>波洛茨克国立大学</h3><p>信息技术学院<br>专业：移动系统<br><em>2024 – 2028</em></p>",
    experienceTitle: "工作经验",
    experienceContent: `<p><strong>编程语言：C++</strong></p>
      <p>在学习过程中完成了一系列实验和课程项目。主题包括：</p>
      <ul>
        <li>数组：实现数据处理和排序算法</li>
        <li>链表和结构体：创建动态数据结构</li>
        <li>排序：冒泡排序，快速排序和插入排序</li>
        <li>课程项目：开发带有以下功能的控制台应用程序“图书馆”：</li>
        <ul>
          <li>按作者、标题和出版年份搜索图书</li>
          <li>按各种标准排序</li>
          <li>以表格形式显示书籍列表</li>
          <li>保存和加载文件中的数据</li>
        </ul>
      </ul>`,
    coursesTitle: "课程",
    coursesContent: "<ul><li>编程入门（C++）评分：优秀</li></ul>",
    communityTitle: "社会活动",
    communityContent: "<p>青年组织、工会和白俄罗斯共和国青年联盟成员，积极支持公民立场</p>",
    achievementsTitle: "成就与奖励",
    achievementsContent: "<ul><li>数学共和国奥林匹克竞赛第二阶段第三名</li></ul>",
    whyMeTitle: "为什么选择我？",
    whyMeList: ["沟通是我的强项", "善于发现需求和注意细节", "准备展现自我并持续成长"],
    disciplinesButton: "学科",

    // Disciplines page
    disciplinesTitle: "学科列表",
    backButton: "返回",
    specialtyLabel: "专业:",
    specialtyValue: "移动系统",
    specializationLabel: "细分:",
    specializationValue: "可编程移动系统",
    qualificationLabel: "资质:",
    qualificationValue: "系统工程师",
    disciplineHeader: "学科",
    gradeHeader: "分数",
    semesterHeader: "学期",
    subjects: [
      "算法和编程基础",
      "数据结构算法",
      "数字设备的算术和逻辑基础",
      "物理",
      "专家的个人和专业发展",
      "文化学",
      "数学分析",
      "离散数学",
      "线性代数和解析几何",
      "英语",
      "白俄罗斯历史"
    ],
    semesters: [
      "第一、二学期",
      "第二学期",
      "第一、二学期",
      "第一、二学期",
      "第二学期",
      "第二学期",
      "第一、二学期",
      "第二学期",
      "第一学期",
      "第一、二学期",
      "第一学期"
    ]
  }
};

// Helper function to safely update element content
function safeUpdate(selector, content, isHTML = true) {
  const element = document.querySelector(selector);
  if (element) {
    if (isHTML) {
      element.innerHTML = content;
    } else {
      element.textContent = content;
    }
    return true;
  }
  return false;
}

// Update page content based on selected language
function updateContent(lang) {
  const t = translations[lang] || translations['ru'];
  
  // Check if we're on the main page or disciplines page
  const isMainPage = document.querySelector('.sidebar') !== null;
  const isDisciplinesPage = document.querySelector('.disciplines-container') !== null;

  if (isMainPage) {
    // Update main page content
    safeUpdate('.sidebar h1', t.name, false);
    safeUpdate('.sidebar .title', t.title, false);
    safeUpdate('.contact-info', `
      <p>📧 <a href="mailto:${t.contactEmail}">${t.contactEmail}</a></p>
      <p>💬 <a href="https://t.me/${t.contactTelegram.replace('@', '')}" target="_blank">${t.contactTelegram}</a></p>
      <p>💻 <a href="https://github.com/${t.contactGitHub}" target="_blank">${t.contactGitHub}</a></p>
    `);

    safeUpdate('.skills h2', t.skillsTitle, false);
    safeUpdate('.skills ul', t.skillsList.map(skill => `<li>${skill}</li>`).join(''));
    
    safeUpdate('.about h2', t.aboutMeTitle, false);
    safeUpdate('.about .card', t.aboutMeParagraphs.map(p => `<p>${p}</p>`).join(''));
    
    safeUpdate('.education h2', t.educationTitle, false);
    safeUpdate('.education .card', `
      ${t.educationContent}
      <button id="view-disciplines" class="disciplines-link" type="button">
        ${t.disciplinesButton}
      </button>
    `);
    
    safeUpdate('.experience h2', t.experienceTitle, false);
    safeUpdate('.experience .card', t.experienceContent);
    
    safeUpdate('.courses h2', t.coursesTitle, false);
    safeUpdate('.courses .card', t.coursesContent);
    
    safeUpdate('.community h2', t.communityTitle, false);
    safeUpdate('.community .card', t.communityContent);
    
    safeUpdate('.achievements h2', t.achievementsTitle, false);
    safeUpdate('.achievements .card', t.achievementsContent);
    
    safeUpdate('.why-me h2', t.whyMeTitle, false);
    safeUpdate('.why-me ul', t.whyMeList.map(item => `<li>${item}</li>`).join(''));
  }

  if (isDisciplinesPage) {
    // Update disciplines page content
    document.title = `${t.disciplinesTitle} | ${t.name}`;
    safeUpdate('#back-button span', t.backButton, false);
    safeUpdate('#disciplines-title', t.disciplinesTitle, false);
    safeUpdate('#specialty-label', t.specialtyLabel, false);
    safeUpdate('#specialty-value', t.specialtyValue, false);
    safeUpdate('#specialization-label', t.specializationLabel, false);
    safeUpdate('#specialization-value', t.specializationValue, false);
    safeUpdate('#qualification-label', t.qualificationLabel, false);
    safeUpdate('#qualification-value', t.qualificationValue, false);
    safeUpdate('#discipline-header', t.disciplineHeader, false);
    safeUpdate('#grade-header', t.gradeHeader, false);
    safeUpdate('#semester-header', t.semesterHeader, false);
    
    // Update subjects and semesters
    t.subjects.forEach((subject, index) => {
      safeUpdate(`#subject${index+1}`, subject, false);
      safeUpdate(`#semester${index+1}`, t.semesters[index], false);
    });
  }
}

// Initialize the application
function initApp() {
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

  // Back button handler (for disciplines page)
  const backButton = document.getElementById('back-button');
  if (backButton) {
    backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  // Disciplines button handler (for main page)
  const disciplinesBtn = document.getElementById('view-disciplines');
  if (disciplinesBtn) {
    disciplinesBtn.addEventListener('click', () => {
      window.location.href = 'disciplines.html';
    });
  }

  // Scroll animations
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
}

// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
