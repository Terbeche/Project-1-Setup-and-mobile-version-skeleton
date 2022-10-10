function showTheMenu() {
  if (window.screen.width >= 768) {
    return;
  }
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

const projectsDetails = [
  {
    title: 'Math-Magicians',
    info: ['CANOPY', 'Back End Dev', '2015'],
    featured_image: './images/project-snapshots/project1.png',
    description:
      "Math magicians is a website for all fans of mathematics",
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'react'],
    link_to_Source: 'https://github.com/Terbeche/Math-Magicians',
    link_to_live_version: 'https://math-magicians-react-project.herokuapp.com/',
  },
  {
    title: 'To Do list',
    info: ['CANOPY', 'Back End Dev', '2015'],
    featured_image: './images/project-snapshots/project1.png',
    description:
    "This is a simple To-Do-List website in which you can add and remove tasks using local storage.",
    long_description:
    "This is a simple To-Do-List website in which you can add and remove tasks using local storage.",
    technologies: ['html', 'css', 'react'],
    link_to_Source: 'https://github.com/Terbeche/To--Do-List',
    link_to_live_version: 'https://terbeche.github.io/To--Do-List/',
  },
  {
    title: 'Leaderboard',
    info: ['CANOPY', 'Back End Dev', '2015'],
    featured_image: './images/project-snapshots/project1.png',
    description:
      "The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.",
    long_description:
      "The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.",
    technologies: ['html', 'css', 'javascript'],
    link_to_Source: 'https://github.com/Terbeche/Leaderboard',
    link_to_live_version: 'https://terbeche.github.io/Leaderboard/',
  },
  {
    title: 'TV Show',
    info: ['CANOPY', 'Back End Dev', '2015'],
    featured_image: './images/project-snapshots/project1.png',
    description:
      "This is a website that displays a list of movies from an external API",
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript'],
    link_to_Source: 'https://github.com/Terbeche/Groupe-Capstone-API',
    link_to_live_version: 'https://crystallinebutterfly.github.io/Group-Capstone-1/',
  },
  {
    title: 'E Learning Platform',
    info: ['CANOPY', 'Back End Dev', '2015'],
    featured_image: './images/project-snapshots/project1.png',
    description:
      "This is a E-learning-platform website for the FIRST CAPSTONE PROJECT of the microverse program representing an E-Learning platform.",
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript'],
    link_to_Source: 'https://github.com/Terbeche/E-learning-platform',
    link_to_live_version: 'https://terbeche.github.io/E-learning-platform/',
  },
  {
    title: 'Awesome books',
    info: ['CANOPY', 'Back End Dev', '2015'],
    featured_image: './images/project-snapshots/project1.png',
    description:
      "Awesome Books is a web application that let's add and remove books using local storage.",
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript'],
    link_to_Source: 'https://github.com/Terbeche/Awesome-Books-ES6',
    link_to_live_version: 'https://terbeche.github.io/Awesome-Books/',
  },
  {
    title: 'To Do APP',
    info: ['CANOPY', 'Back End Dev', '2015'],
    featured_image: './images/project-snapshots/project1.png',
    description:
      "React-To-Do-App is a Single Page App (SPA) that allows users to add and delete To-Do tasks. It was created following this tutorial with some additional changes",
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'react'],
    link_to_Source: 'https://github.com/Terbeche/react-todo-app',
    link_to_live_version: 'https://terbeche.github.io/react-todo-app/',
  },
];


const firstItem = document.createElement('div');
firstItem.id = 'item1';
firstItem.classList.add('item');

const firstPartItem = document.createElement('div');
firstPartItem.classList.add('item1-first-part');

const firstParTitle = document.createElement('h2');
firstParTitle.id = 'recent-work';
firstParTitle.textContent = 'My Recent Works';
firstPartItem.appendChild(firstParTitle);

const firstPartHr = document.createElement('hr');
firstPartHr.id = 'recent-work-hr';
firstPartItem.appendChild(firstPartHr);

firstItem.appendChild(firstPartItem);

const secondPartItem = document.createElement('div');
secondPartItem.classList.add('item1-second-part');

const secondPartItemImage = document.createElement('img');
secondPartItemImage.id = 'placeholder';
secondPartItemImage.src = './images/desktop/Placeholder.svg';
secondPartItemImage.alt = 'placeholder image';
secondPartItem.appendChild(secondPartItemImage);

const secondPartItemDetail = document.createElement('div');
secondPartItemDetail.classList.add('item1-second-part-content');

const secondPartItemTitle = document.createElement('h3');
secondPartItemTitle.id = 'post-stories';
secondPartItemTitle.textContent = 'Multi-Post Stories';
secondPartItemDetail.appendChild(secondPartItemTitle);

const secondPartItemDescription = document.createElement('p');
secondPartItemDescription.id = 'first-description';
secondPartItemDescription.classList.add('card-description');
secondPartItemDescription.textContent = "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.";
secondPartItemDetail.appendChild(secondPartItemDescription);

const secondPartItemSkills = document.createElement('div');
secondPartItemSkills.classList.add('skills');

const secondPartItemSkillsButton1 = document.createElement('button');
secondPartItemSkillsButton1.type = 'button';
secondPartItemSkillsButton1.name = 'button';
secondPartItemSkillsButton1.textContent = 'css';
secondPartItemSkillsButton1.classList.add('first-button');
secondPartItemSkills.appendChild(secondPartItemSkillsButton1);

const secondPartItemSkillsButton2 = document.createElement('button');
secondPartItemSkillsButton2.type = 'button';
secondPartItemSkillsButton2.name = 'button';
secondPartItemSkillsButton2.textContent = 'html';
secondPartItemSkillsButton2.classList.add('first-button');
secondPartItemSkills.appendChild(secondPartItemSkillsButton2);

const secondPartItemSkillsButton3 = document.createElement('button');
secondPartItemSkillsButton3.type = 'button';
secondPartItemSkillsButton3.name = 'button';
secondPartItemSkillsButton3.textContent = 'bootstrap';
secondPartItemSkillsButton3.classList.add('first-button');
secondPartItemSkills.appendChild(secondPartItemSkillsButton3);

const secondPartItemSkillsButton4 = document.createElement('button');
secondPartItemSkillsButton4.type = 'button';
secondPartItemSkillsButton4.name = 'button';
secondPartItemSkillsButton4.textContent = 'ruby';
secondPartItemSkillsButton4.classList.add('first-button');
secondPartItemSkills.appendChild(secondPartItemSkillsButton4);

secondPartItemDetail.appendChild(secondPartItemSkills);

const secondPartItemProjectButton = document.createElement('button');
secondPartItemProjectButton.id = 'first-project-button';
secondPartItemProjectButton.classList.add('project-button');
secondPartItemProjectButton.type = 'button';
secondPartItemProjectButton.name = 'button';
secondPartItemProjectButton.textContent = 'See Project';
secondPartItemDetail.appendChild(secondPartItemProjectButton);

secondPartItem.appendChild(secondPartItemDetail);

firstItem.appendChild(secondPartItem);

document.querySelector('#work').appendChild(firstItem);

for (let i = 0; i < projectsDetails.length - 1; i += 1) {
  const projectItem = document.createElement('div');
  const k = i + 2;
  projectItem.id = `item${k}`;
  projectItem.classList.add('item');
  projectItem.classList.add('card-item');

  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('card-title');
  projectTitle.textContent = projectsDetails[i].title;
  projectItem.appendChild(projectTitle);

  const projectDescription = document.createElement('p');
  projectDescription.classList.add('card-description');
  projectDescription.textContent = projectsDetails[i].description;
  projectItem.appendChild(projectDescription);

  const projectSkills = document.createElement('ul');
  projectSkills.classList.add('skills');

  for (let j = 0; j < projectsDetails[i].technologies.length; j += 1) {
    const technology = document.createElement('li');
    technology.textContent = projectsDetails[i].technologies[j];
    technology.classList.add('read-button');
    projectSkills.appendChild(technology);
  }

  projectItem.appendChild(projectSkills);

  const seeProjectButton = document.createElement('button');
  seeProjectButton.type = 'button';
  seeProjectButton.name = 'button';
  seeProjectButton.textContent = 'See Project';
  seeProjectButton.classList.add('project-button');
  seeProjectButton.classList.add('see-project-button');

  projectItem.appendChild(seeProjectButton);

  document.querySelector('#work').appendChild(projectItem);
}

function hideProjectDetailsPopup() {
  document.querySelector('#popup-overlay').style.display = 'none';
  document.querySelector('#details-popup').style.display = 'none';
}

function showProjectDetailsPopup(i) {
  if (!!document.getElementById('popup-container') === true) {
    document.getElementById('popup-container').remove();
  }

  const projectDetailsPopupContainer = document.createElement('div');
  projectDetailsPopupContainer.id = 'popup-container';

  const projectDetailsPopupOverlay = document.createElement('div');
  projectDetailsPopupOverlay.id = 'popup-overlay';
  projectDetailsPopupOverlay.style.display = 'block';
  projectDetailsPopupContainer.appendChild(projectDetailsPopupOverlay);

  const projectDetailsPopup = document.createElement('div');
  projectDetailsPopup.id = 'details-popup';
  projectDetailsPopup.style.display = 'flex';
  if (window.screen.width >= 768) {
    projectDetailsPopup.style.top = `${window.pageYOffset + 77}px`;
  } else {
    projectDetailsPopup.style.top = `${window.pageYOffset + 16}px`;
  }
  projectDetailsPopupContainer.appendChild(projectDetailsPopup);

  const popupHeader = document.createElement('div');
  popupHeader.id = 'popup-header';
  const popupHeaderTitle = document.createElement('h3');
  popupHeaderTitle.textContent = projectsDetails[i].title;
  popupHeader.appendChild(popupHeaderTitle);

  const popupHeaderCloseButton = document.createElement('img');
  popupHeaderCloseButton.id = 'popup-close-button';
  popupHeaderCloseButton.src = './images/Icons/close-popup.svg';
  popupHeaderCloseButton.alt = 'close popup window';
  popupHeader.appendChild(popupHeaderCloseButton);
  projectDetailsPopup.appendChild(popupHeader);

  const projectSkills = document.createElement('ul');
  projectSkills.classList.add('skills');

  for (let j = 0; j < projectsDetails[i].technologies.length; j += 1) {
    const technology = document.createElement('li');
    technology.textContent = projectsDetails[i].technologies[j];
    technology.classList.add('read-button');
    projectSkills.appendChild(technology);
  }

  projectDetailsPopup.appendChild(projectSkills);

  const popupContainer2 = document.createElement('div');
  popupContainer2.id = 'popup-container-2';

  const popupImage = document.createElement('img');
  popupImage.src = './images/project-snapshots.svg';
  popupImage.alt = 'Project snapshot';
  popupContainer2.appendChild(popupImage);

  const popupDescription = document.createElement('div');
  popupDescription.id = 'popup-description';
  const popupTextDescription = document.createElement('p');
  popupTextDescription.id = 'popup-text-description';
  popupTextDescription.textContent = projectsDetails[i].long_description;
  popupDescription.appendChild(popupTextDescription);

  const popupButtons = document.createElement('div');
  popupButtons.id = 'popup-buttons';

  const popuplink1 = document.createElement('a');
  popuplink1.href =  projectsDetails[i].link_to_live_version;

 
  const popupButton1 = document.createElement('button');
  popupButton1.id = 'popupButton1';
  popupButton1.textContent = 'See live'; 
  const popupButton1Icon = document.createElement('i');
  popupButton1Icon.classList.add('link-icon');
  popupButton1.appendChild(popupButton1Icon);

  popuplink1.appendChild(popupButton1);
  popupButtons.appendChild(popuplink1);


  const popuplink2 = document.createElement('a');
  popuplink2.href =  projectsDetails[i].link_to_Source;

  const popupButton2 = document.createElement('button');
  popupButton2.id = 'popupButton2';
  popupButton2.textContent = 'See Source';
  const popupButton2Icon = document.createElement('i');
  popupButton2Icon.classList.add('github-icon');
  popupButton2.appendChild(popupButton2Icon);

  popuplink2.appendChild(popupButton2);
  popupButtons.appendChild(popuplink2);

  popupDescription.appendChild(popupButtons);

  popupContainer2.appendChild(popupDescription);

  projectDetailsPopup.appendChild(popupContainer2);

  document.body.appendChild(projectDetailsPopupContainer);
  popupHeaderCloseButton.addEventListener('click', hideProjectDetailsPopup);
}

const projectButtonElements = document.getElementsByClassName('see-project-button');

for (let i = 0; i < projectButtonElements.length; i += 1) {

  if (projectButtonElements[i].innerHTML === 'See Project') {
    projectButtonElements[i].addEventListener('click', () => {
      showProjectDetailsPopup(i);
    });
  }
}

const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const formButton = document.querySelector('#contact-button');
const nameInput = document.getElementById('name');
const feedbackInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    formButton.setCustomValidity('email-id must be in lower case!');
    formButton.reportValidity();
    event.preventDefault();
  }
});

let contactForm = { name: '', email: '', feedbackMessage: '' };

const retreivedContactFormValues = JSON.parse(localStorage.getItem('contactForm'));

if (retreivedContactFormValues) {
  contactForm = retreivedContactFormValues;
  nameInput.value = retreivedContactFormValues.name;
  emailInput.value = retreivedContactFormValues.email;
  feedbackInput.value = retreivedContactFormValues.feedbackMessage;
}

emailInput.addEventListener('input', () => {
  formButton.setCustomValidity('');
  contactForm.email = emailInput.value;
  localStorage.setItem('contactForm', JSON.stringify(contactForm));
});

nameInput.addEventListener('input', () => {
  contactForm.name = nameInput.value;
  localStorage.setItem('contactForm', JSON.stringify(contactForm));
});

feedbackInput.addEventListener('input', () => {
  contactForm.feedbackMessage = feedbackInput.value;
  localStorage.setItem('contactForm', JSON.stringify(contactForm));
});
