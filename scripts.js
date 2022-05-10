function showTheMenu() {
  document.getElementById('overlay').style.display = 'flex';
}

function hideTheMenu() {
  document.getElementById('overlay').style.display = 'none';
}

const navElement = document.getElementById('nav');
navElement.addEventListener('click', showTheMenu);

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', hideTheMenu);

const menuLinks = document.getElementsByClassName('menu-link');
for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', hideTheMenu);
}


const projectsDetails = [{
  title: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard",
  technologies: ['html', 'bootstrap', 'ruby'],
  'demo link': '#',
  'featured image': '../images/desktop/Placeholder4.svg',
  'source link': '#',
},

{
  title: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard",
  technologies: ['html', 'bootstrap', 'ruby'],
  'demo link': '#',
  'featured image': '../images/desktop/Placeholder4.svg',
  'source link': '#',
},

{
  title: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard",
  technologies: ['html', 'bootstrap', 'ruby'],
  'demo link': '#',
  'featured image': '../images/desktop/Placeholder4.svg',
  'source link': '#',
},
{
  title: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard",
  technologies: ['html', 'bootstrap', 'ruby'],
  'demo link': '#',
  'featured image': '../images/desktop/Placeholder4.svg',
  'source link': '#',
},
{
  title: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard",
  technologies: ['html', 'bootstrap', 'ruby'],
  'demo link': '#',
  'featured image': '../images/desktop/Placeholder4.svg',
  'source link': '#',
},
];
