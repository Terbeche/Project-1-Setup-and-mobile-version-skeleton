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

let projectsDetails = [
  {
    title: "Tonic",
    info: ["CANOPY", "Back End Dev", "2015"],
    featured_image: "./images/project-snapshots/project1.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    long_description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "bootstrap", "ruby"],
    link_to_Source: "#",
    link_to_live_version: "#"
  },
  {
    title: "Tonic",
    info: ["CANOPY", "Back End Dev", "2015"],
    featured_image: "./images/project-snapshots/project1.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    long_description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "bootstrap", "ruby"],
    link_to_Source: "#",
    link_to_live_version: "#"
  },
  {
    title: "Tonic",
    info: ["CANOPY", "Back End Dev", "2015"],
    featured_image: "./images/project-snapshots/project1.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    long_description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "bootstrap", "ruby"],
    link_to_Source: "#",
    link_to_live_version: "#"
  },
  {
    title: "Tonic",
    info: ["CANOPY", "Back End Dev", "2015"],
    featured_image: "./images/project-snapshots/project1.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    long_description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "bootstrap", "ruby"],
    link_to_Source: "#",
    link_to_live_version: "#"
  },
  {
    title: "Tonic",
    info: ["CANOPY", "Back End Dev", "2015"],
    featured_image: "./images/project-snapshots/project1.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    long_description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "bootstrap", "ruby"],
    link_to_Source: "#",
    link_to_live_version: "#"
  },
  {
    title: "Tonic",
    info: ["CANOPY", "Back End Dev", "2015"],
    featured_image: "./images/project-snapshots/project1.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    long_description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "bootstrap", "ruby"],
    link_to_Source: "#",
    link_to_live_version: "#"
  }
  ,
  {
    title: "Tonic",
    info: ["CANOPY", "Back End Dev", "2015"],
    featured_image: "./images/project-snapshots/project1.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    long_description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "bootstrap", "ruby"],
    link_to_Source: "#",
    link_to_live_version: "#"
  }
]



let firstItem = document.createElement('div');
firstItem.id = "item1";
firstItem.classList.add("item");

let firstPartItem = document.createElement('div');
firstPartItem.classList.add("item1-first-part");

let firstParTitle = document.createElement('h2');
firstParTitle.id = "recent-work";
firstParTitle.textContent = "My Recent Works";
firstPartItem.appendChild(firstParTitle);

let firstPartHr = document.createElement('hr');
firstPartHr.id = "recent-work-hr";
firstPartItem.appendChild(firstPartHr);

firstItem.appendChild(firstPartItem);

let secondPartItem = document.createElement('div');
secondPartItem.classList.add("item1-second-part");

let secondPartItemImage = document.createElement('img');
secondPartItemImage.id = "placeholder";
secondPartItemImage.src = "./images/desktop/Placeholder.svg";
secondPartItemImage.alt = "placeholder image";
secondPartItem.appendChild(secondPartItemImage);

let secondPartItemDetail = document.createElement('div');
secondPartItemDetail.classList.add("item1-second-part-content");

let secondPartItemTitle = document.createElement('h3');
secondPartItemTitle.id = "post-stories";
secondPartItemTitle.textContent = "Multi-Post Stories";
secondPartItemDetail.appendChild(secondPartItemTitle);

let secondPartItemDescription = document.createElement('p');
secondPartItemDescription.id = "first-description";
secondPartItemDescription.classList.add("card-description");
secondPartItemDescription.textContent = "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.";
secondPartItemDetail.appendChild(secondPartItemDescription);

let secondPartItemSkills = document.createElement('div');
secondPartItemSkills.classList.add("skills");


let secondPartItemSkillsButton1 = document.createElement('button');
secondPartItemSkillsButton1.type = 'button';
secondPartItemSkillsButton1.name = 'button';
secondPartItemSkillsButton1.textContent = "css";
secondPartItemSkillsButton1.classList.add('first-button');
secondPartItemSkills.appendChild(secondPartItemSkillsButton1);

let secondPartItemSkillsButton2 = document.createElement('button');
secondPartItemSkillsButton2.type = 'button';
secondPartItemSkillsButton2.name = 'button';
secondPartItemSkillsButton2.textContent = "html";
secondPartItemSkillsButton2.classList.add('first-button');
secondPartItemSkills.appendChild(secondPartItemSkillsButton2);

let secondPartItemSkillsButton3 = document.createElement('button');
secondPartItemSkillsButton3.type = 'button';
secondPartItemSkillsButton3.name = 'button';
secondPartItemSkillsButton3.textContent = "bootstrap";
secondPartItemSkillsButton3.classList.add('first-button');
secondPartItemSkills.appendChild(secondPartItemSkillsButton3);

let secondPartItemSkillsButton4 = document.createElement('button');
secondPartItemSkillsButton4.type = 'button';
secondPartItemSkillsButton4.name = 'button';
secondPartItemSkillsButton4.textContent = "ruby";
secondPartItemSkillsButton4.classList.add('first-button');
secondPartItemSkills.appendChild(secondPartItemSkillsButton4);

secondPartItemDetail.appendChild(secondPartItemSkills);

let secondPartItemProjectButton = document.createElement('button');
secondPartItemProjectButton.id = "first-project-button";
secondPartItemProjectButton.classList.add('project-button');
secondPartItemProjectButton.type = 'button';
secondPartItemProjectButton.name = 'button';
secondPartItemProjectButton.textContent = "See Project";
secondPartItemDetail.appendChild(secondPartItemProjectButton);

secondPartItem.appendChild(secondPartItemDetail);

firstItem.appendChild(secondPartItem);

document.querySelector("#work").appendChild(firstItem);


for (let i = 0; i < projectsDetails.length-1; i += 1) {
  let projectItem = document.createElement('div');
  let k = i + 2;
  projectItem.id = 'item' + k;
  projectItem.classList.add("item");
  projectItem.classList.add("card-item");

  let projectTitle = document.createElement('h3');
  projectTitle.classList.add("card-title");
  // projectTitle.classList.add("hide-me-on-desktop");
  projectTitle.textContent = projectsDetails[i].title;
  projectItem.appendChild(projectTitle);

  let projectDescription = document.createElement('p');
  projectDescription.classList.add("card-description");
  // projectDescription.classList.add("hide-me-on-desktop");
  projectDescription.textContent = projectsDetails[i].description;
  projectItem.appendChild(projectDescription);


  let projectSkills = document.createElement('div');
  projectSkills.classList.add("skills");
  // projectSkills.classList.add("hide-me-on-desktop");


  for (let j = 0; j < projectsDetails[i].technologies.length; j += 1) {
    let technology = document.createElement('button');
    technology.type = 'button';
    technology.name = 'button';
    technology.textContent = projectsDetails[i].technologies[j];
    technology.classList.add("read-button");
    projectSkills.appendChild(technology);
  }

  projectItem.appendChild(projectSkills);

  let seeProjectButton = document.createElement('button');
  seeProjectButton.type = 'button';
  seeProjectButton.name = 'button';
  seeProjectButton.textContent = "See Project";
  seeProjectButton.classList.add('project-button');
  projectItem.appendChild(seeProjectButton);

  document.querySelector("#work").appendChild(projectItem);

}

function hideProjectDetailsPopup() {
  document.querySelector("#popup-overlay").style.display = 'none';
  document.querySelector("#details-popup").style.display = 'none';
}

function showProjectDetailsPopup(i) {

   if(!!document.getElementById('popup-container') == true ){
      document.getElementById('popup-container').remove();
   }
   console.log("hhhhh");

  let projectDetailsPopupContainer = document.createElement('div');
  projectDetailsPopupContainer.id = 'popup-container';

  let projectDetailsPopupOverlay = document.createElement('div');
  projectDetailsPopupOverlay.id = 'popup-overlay';
  projectDetailsPopupOverlay.style.display = 'block';
  projectDetailsPopupContainer.appendChild(projectDetailsPopupOverlay);

  let projectDetailsPopup = document.createElement('div');
  projectDetailsPopup.id = "details-popup";
  projectDetailsPopup.style.display = 'flex';
  projectDetailsPopupContainer.appendChild(projectDetailsPopup);


  let popupHeader = document.createElement('div');
  popupHeader.id = "popup-header";
  let popupHeaderTitle = document.createElement('h3');
  popupHeaderTitle.textContent = projectsDetails[i].title;
  popupHeader.appendChild(popupHeaderTitle);

  let popupHeaderCloseButton = document.createElement('img');
  popupHeaderCloseButton.id = "popup-close-button";
  popupHeaderCloseButton.src = "./images/Icons/close-popup.svg";
  popupHeaderCloseButton.alt = "close popup window";
  popupHeader.appendChild(popupHeaderCloseButton);
  projectDetailsPopup.appendChild(popupHeader);

  let popupImage = document.createElement('img');
  popupImage.src = "./images/project-snapshots.svg";
  popupImage.alt = "Project snapshot";
  projectDetailsPopup.appendChild(popupImage);

  let popupDescription = document.createElement('div');

  let popupTextDescription = document.createElement('p');
  popupTextDescription.id = "popup-text-description";
  popupTextDescription.textContent = projectsDetails[i].long_description;
  popupDescription.appendChild(popupTextDescription);

  // let popupDetails = document.createElement('div');
  // let popupTechnologies = document.createElement('div');
  //
  // let technologies = document.createElement('ul');
  // technologies.className = 'project-languages';
  //
  // for (let j = 0; j < projectsDetails[i].technologies.length; j += 1) {
  //   let technology = document.createElement('li');
  //   technology.textContent = projectsDetails[i].technologies[j];
  //   technologies.appendChild(technology);
  // }
  // popupTechnologies.appendChild(technologies);
  //
  // popupDetails.appendChild(popupTechnologies);
    // projectDetailsPopup.appendChild(popupDetails);


  let popupButtons = document.createElement('div');
  popupButtons.id = "popup-buttons";

  let popupButton1 = document.createElement('button');
  popupButton1.id = "popupButton1";
  popupButton1.textContent = "See live";
  let popupButton1Icon = document.createElement('i');
  popupButton1Icon.classList.add("link-icon");
  popupButton1.appendChild(popupButton1Icon);
  popupButtons.appendChild(popupButton1);

  let popupButton2 = document.createElement('button');
  popupButton2.id = "popupButton2";
  popupButton2.textContent = "See Source";
  let popupButton2Icon = document.createElement('i');
    popupButton2Icon.classList.add("github-icon");
  popupButton2.appendChild(popupButton2Icon);
  popupButtons.appendChild(popupButton2);

  popupDescription.appendChild(popupButtons);

  projectDetailsPopup.appendChild(popupDescription);

  document.body.appendChild(projectDetailsPopupContainer);
  popupHeaderCloseButton.addEventListener('click',hideProjectDetailsPopup);

}


const projectButtonElements = document.getElementsByClassName('project-button');
for (let i = 0; i < projectButtonElements.length; i += 1) {
  projectButtonElements[i].addEventListener('click', function() {
    showProjectDetailsPopup(i);
  })
}
