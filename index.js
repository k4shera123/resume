console.log("Resume loaded for Герман Кот");

const translations = {
  ru: {
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
    backButton: "На главную",
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
    backButton: "Back to main",
    specLabel: "Specialty:",
    profilLabel: "Specialization:",
    qualLabel: "Qualification:",
  }
};

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

function updateContent(lang) {
  const t = translations[lang] || translations['ru'];
  
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
    <h3>${t.educationUniversity}</h3>
    <p>
      ${t.educationFaculty}<br>
      ${t.educationSpecialty}<br>
      <em>${t.educationYears}</em>
    </p>
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

  safeUpdate('.disciplines-header h1', t.disciplinesPageTitle, false);
  safeUpdate('.back-button', `<i class="fas fa-arrow-left"></i> ${t.backButton}`);
  
  const infoLabels = document.querySelectorAll('.specialization-info p');
  if (infoLabels.length >= 3) {
    infoLabels[0].querySelector('strong').textContent = t.specLabel;
    infoLabels[1].querySelector('strong').textContent = t.profilLabel;
    infoLabels[2].querySelector('strong').textContent = t.qualLabel;
  }
}

function initApp() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

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

  const backButton = document.querySelector('.back-button');
  if (backButton) {
    backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'view-disciplines') {
      window.location.href = 'disciplines.html';
    }
  });

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

document.addEventListener('DOMContentLoaded', initApp);
