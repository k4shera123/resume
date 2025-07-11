console.log("Resume loaded for Герман Кот");

// Translations object
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
      "Я 18-летний студент. Общительный и инициативный, легко нахожу общий язык и стремлюсь развивать навыки программирования, применяя их для карьерного роста.",
      "<strong>Профессиональные навыки ПО:</strong> HTML, CSS, JavaScript (средний уровень), Git (начальный уровень)",
      "<strong>Языковые навыки:</strong> Русский (родной), Английский (A2)",
      "<strong>Хобби:</strong> Бизнес, криптовалюта, motion design, маркетинг",
    ],
    educationTitle: "Образование",
    educationContent:
      "<h3>Полоцкий Государственный Университет</h3>" +
      "<p>Факультет Информационных Технологий<br />Специальность: Мобильные системы<br /><em>2024 – 2028</em></p>",
    experienceTitle: "Опыт работы",
    experienceContent:
      `<p><strong>Язык программирования: C++</strong></p>
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
    coursesContent:
      "<ul><li>Введение в программирование (C++) оценка: отлично</li></ul>",
    communityTitle: "Общественная жизнь",
    communityContent:
      "<p>Участник молодежных организаций, профсоюз и БРСМ, активно поддерживаю гражданскую позицию</p>",
    achievementsTitle: "Достижения и награды",
    achievementsContent:
      "<ul><li>Третье место во втором этапе Республиканской олимпиады по математике</li></ul>",
    whyMeTitle: "Почему я?",
    whyMeList: [
      "Коммуникация — моя сильная сторона",
      "Умею выявлять потребности и замечать детали",
      "Готов проявить себя и развиваться",
    ],
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
    educationContent:
      "<h3>Polotsk State University</h3>" +
      "<p>Faculty of Information Technology<br />Specialty: Mobile Systems<br /><em>2024 – 2028</em></p>",
    experienceTitle: "Work Experience",
    experienceContent:
      `<p><strong>Programming language: C++</strong></p>
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
    communityContent:
      "<p>Member of youth organizations, trade union and BRSM, actively supporting civil position</p>",
    achievementsTitle: "Achievements and Awards",
    achievementsContent:
      "<ul><li>Third place in the second stage of the Republican Mathematics Olympiad</li></ul>",
    whyMeTitle: "Why me?",
    whyMeList: [
      "Communication is my strong point",
      "I can identify needs and notice details",
      "Ready to prove myself and grow",
    ],
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
    educationContent:
      "<h3>波洛茨克国立大学</h3>" +
      "<p>信息技术学院<br />专业：移动系统<br /><em>2024 – 2028</em></p>",
    experienceTitle: "工作经验",
    experienceContent:
      `<p><strong>编程语言：C++</strong></p>
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
    communityContent:
      "<p>青年组织、工会和白俄罗斯共和国青年联盟成员，积极支持公民立场</p>",
    achievementsTitle: "成就与奖励",
    achievementsContent:
      "<ul><li>数学共和国奥林匹克竞赛第二阶段第三名</li></ul>",
    whyMeTitle: "为什么选择我？",
    whyMeList: ["沟通是我的强项", "善于发现需求和注意细节", "准备展现自我并持续成长"],
  },
};

// Helper to update content based on current language
function updateContent(lang) {
  const t = translations[lang];
  // Sidebar
  document.querySelector('.sidebar h1').textContent = t.name;
  document.querySelector('.sidebar .title').textContent = t.title;
  document.querySelector('.contact-info').innerHTML = `
    <p>📧 <a href="mailto:${t.contactEmail}">${t.contactEmail}</a></p>
    <p>💬 <a href="https://t.me/k4shera" target="_blank">${t.contactTelegram}</a></p>
    <p>💻 <a href="https://github.com/k4shera123" target="_blank">${t.contactGitHub}</a></p>
  `;

  // Skills
  document.querySelector('.skills h2').textContent = t.skillsTitle;
  const skillsUl = document.querySelector('.skills ul');
  skillsUl.innerHTML = '';
  t.skillsList.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsUl.appendChild(li);
  });

  // About me
  document.querySelector('.about h2').textContent = t.aboutMeTitle;
  document.querySelector('.about .card').innerHTML = t.aboutMeParagraphs
    .map(p => `<p>${p}</p>`)
    .join('');

  // Education
  document.querySelector('.education h2').textContent = t.educationTitle;
  document.querySelector('.education .card').innerHTML = t.educationContent;

  // Experience
  document.querySelector('.experience h2').textContent = t.experienceTitle;
  document.querySelector('.experience .card').innerHTML = t.experienceContent;

  // Courses
  document.querySelector('.courses h2').textContent = t.coursesTitle;
  document.querySelector('.courses .card').innerHTML = t.coursesContent;

  // Community
  document.querySelector('.community h2').textContent = t.communityTitle;
  document.querySelector('.community .card').innerHTML = t.communityContent;

  // Achievements
  document.querySelector('.achievements h2').textContent = t.achievementsTitle;
  document.querySelector('.achievements .card').innerHTML = t.achievementsContent;

  // Why me
  document.querySelector('.why-me h2').textContent = t.whyMeTitle;
  const whyUl = document.querySelector('.why-me ul');
  whyUl.innerHTML = '';
  t.whyMeList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    whyUl.appendChild(li);
  });
}

// Language switcher
const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', e => {
  const lang = e.target.value;
  updateContent(lang);
  localStorage.setItem('language', lang);
});

// On DOM ready: initialize theme & language
window.addEventListener('DOMContentLoaded', () => {
  // Theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
  // Language
  const savedLang = localStorage.getItem('language') || 'ru';
  languageSelect.value = savedLang;
  updateContent(savedLang);
});

// Scroll animation
const animatedSections = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
animatedSections.forEach(section => observer.observe(section));

// Theme toggle
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  );
});

// Переход на страницу дисциплин
const viewBtn = document.getElementById('view-disciplines');
if (viewBtn) {
  viewBtn.addEventListener('click', () => {
    window.location.href = 'disciplines.html';
  });
}
```
