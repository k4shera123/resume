console.log("Resume loaded for Герман Кот");

// Переводы
const translations = { /* … ваш объект translations (ru / en / zh) … */ };

// Обновление контента
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
  const skillsUl = document.querySelector('.skills ul');
  skillsUl.innerHTML = '';
  t.skillsList.forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    skillsUl.append(li);
  });
  // Разделы main-content
  const sections = ['about','education','experience','courses','community','achievements'];
  sections.forEach(sec => {
    document.querySelector(`.${sec} h2`).textContent = t[`${sec}Title`];
    document.querySelector(`.${sec} .card`).innerHTML = t[`${sec}Content`] || t[`${sec}Paragraphs`]?.map(p=>`<p>${p}</p>`).join('');
  });
  // Почему я?
  const whyUl = document.querySelector('.why-me ul');
  whyUl.innerHTML = '';
  t.whyMeList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    whyUl.append(li);
  });
}

// Инициализация
window.addEventListener('DOMContentLoaded', () => {
  // Тема
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.body.classList.add('dark');
  // Язык
  const sel = document.getElementById('language-select');
  const lang = localStorage.getItem('language') || 'ru';
  sel.value = lang;
  updateContent(lang);
  sel.addEventListener('change', e => {
    updateContent(e.target.value);
    localStorage.setItem('language', e.target.value);
  });
});

// Анимация при скролле
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('visible');
      obs.unobserve(en.target);
    }
  });
},{ threshold: 0.1 });
document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Переключатель темы
document.getElementById('theme-toggle')
  .addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

// Переход на дисциплины
const btn = document.getElementById('view-disciplines');
if (btn) btn.addEventListener('click', () => window.location.href = 'disciplines.html');
