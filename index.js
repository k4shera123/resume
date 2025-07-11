console.log("Resume loaded for Герман Кот");

// Translations
const translations = {
  ru: {
    // index.html
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
    coursesContent:
      "<ul><li>Введение в программирование (C++) — отлично</li></ul>",
    communityTitle: "Общественная жизнь",
    communityContent:
      "<p>Участник молодежных организаций, профсоюза и БРСМ, активно поддерживаю гражданскую позицию.</p>",
    achievementsTitle: "Достижения и награды",
    achievementsContent:
      "<ul><li>3-е место во 2-м этапе Республиканской олимпиады по математике</li></ul>",
    whyMeTitle: "Почему я?",
    whyMeList: [
      "Коммуникация — моя сильная сторона",
      "Умею выявлять потребности и замечать детали",
      "Готов проявить себя и развиваться",
    ],

    // disciplines.html
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
    communityContent:
      "<p>Member of youth organizations, trade union and BRSM, actively supporting civil position.</p>",
    achievementsTitle: "Achievements and Awards",
    achievementsContent:
      "<ul><li>Third place in the second stage of the Republican Mathematics Olympiad</li></ul>",
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
        <li>课程项目“图书馆”：
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
    communityContent:
      "<p>青年组织、工会和白俄罗斯共和国青年联盟成员，积极支持公民立场。</p>",
    achievementsTitle: "成就与奖励",
    achievementsContent:
      "<ul><li>数学共和国奥林匹克竞赛第二阶段第三名</li></ul>",
    whyMeTitle: "为什么选择我？",
    whyMeList: ["沟通是我的强项", "善于发现需求和注意细节", "准备展现自我并持续成长"],

    disciplinesButton: "学科",
    disciplinesPageTitle: "学科列表",
    backButton: "返回",
    specLabel: "专业：",
    profilLabel: "细分：",
    qualLabel: "资质：",
  },
};

// Update page content based on language
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
  document.querySelector('.education .card').innerHTML = `
    <h3>${t.educationUniversity}</h3>
    <p>
      ${t.educationFaculty}<br />
      ${t.educationSpecialty}<br />
      <em>${t.educationYears}</em>
    </p>
    <button id="view-disciplines" class="disciplines-link" type="button">
      ${t.disciplinesButton}
    </button>
  `;

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

  // disciplines.html
  const header = document.querySelector('.disciplines-header');
  if (header) {
    header.querySelector('h1').textContent = t.disciplinesPageTitle;
    const back = document.querySelector('.back-button');
    back.innerHTML = `<i class="fas fa-arrow-left"></i> ${t.backButton}`;

    const info = document.querySelectorAll('.specialization-info p');
    info[0].querySelector('strong').textContent = t.specLabel;
    info[1].querySelector('strong').textContent = t.profilLabel;
    info[2].querySelector('strong').textContent = t.qualLabel;
  }
}

// DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  // Theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  // Language
  const sel = document.getElementById('language-select');
  const savedLang = localStorage.getItem('language') || 'ru';
  sel.value = savedLang;
  updateContent(savedLang);

  sel.addEventListener('change', e => {
    const lang = e.target.value;
    localStorage.setItem('language', lang);
    updateContent(lang);
  });

  // Scroll animation
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
  document.querySelectorAll('.animate').forEach(el => observer.observe(el));

  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark') ? 'dark' : 'light'
    );
  });

  // View disciplines button
  const viewBtn = document.getElementById('view-disciplines');
  if (viewBtn) {
    viewBtn.addEventListener('click', () => {
      window.location.href = 'disciplines.html';
    });
  }
});
