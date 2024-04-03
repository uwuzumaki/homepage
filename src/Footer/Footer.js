import "./Footer.css";

const Footer = () => {
  const app = document.querySelector("#app");

  const footer = document.createElement("footer");
  footer.classList.add("footer");
  app.appendChild(footer);

  const contact = document.createElement("section");
  contact.classList.add("contact-wrapper");
  footer.appendChild(contact);

  const contactTitle = document.createElement("div");
  contactTitle.classList.add("contact-title");
  contact.appendChild(contactTitle);
  contactTitle.textContent = "Contact me";

  const contactCTA = document.createElement("div");
  contactCTA.classList.add("contact-cta");
  contact.appendChild(contactCTA);
  contactCTA.textContent =
    "Please get in touch if you think our work could be mutually beneficial!";

  const contactAdd = document.createElement("p");
  contactAdd.classList.add("contactAdd");
  contact.appendChild(contactAdd);
  contactAdd.innerText = "1234 Random Road \nRandom Town, California 12345";

  const contactPhoneWrapper = document.createElement("div");
  contactPhoneWrapper.classList.add("contact-phone-wrapper");
  contact.appendChild(contactPhoneWrapper);

  const phoneIcon = document.createElement("img");
  phoneIcon.classList.add("icons-medium");
  phoneIcon.src = require("../Hero/hero-image.jpg");
  contactPhoneWrapper.appendChild(phoneIcon);

  const contactPhoneNumber = document.createElement("div");
  contactPhoneWrapper.appendChild(contactPhoneNumber);
  contactPhoneNumber.textContent = "555-555-5555";

  const contactEmailWrapper = document.createElement("div");
  contactEmailWrapper.classList.add("contact-email-wrapper");
  contact.appendChild(contactEmailWrapper);

  const emailIcon = document.createElement("img");
  emailIcon.classList.add("icons-medium");
  emailIcon.src = require("../Hero/hero-image.jpg");
  contactEmailWrapper.appendChild(emailIcon);

  const contactEmailAddress = document.createElement("div");
  contactEmailWrapper.appendChild(contactEmailAddress);
  contactEmailAddress.textContent = "123@gmail.com";

  const externalLinks = document.createElement("div");
  externalLinks.classList.add("external-links");
  contact.appendChild(externalLinks);

  const githubLink = document.createElement("a");
  githubLink.href = "#";
  externalLinks.appendChild(githubLink);

  const githubImg = document.createElement("img");
  githubImg.classList.add("icons-large");
  githubImg.src = require("../Hero/hero-image.jpg");
  githubLink.appendChild(githubImg);

  const linkedinLink = document.createElement("a");
  linkedinLink.href = "#";
  externalLinks.appendChild(linkedinLink);

  const linkedInImg = document.createElement("img");
  linkedInImg.classList.add("icons-large");
  linkedInImg.src = require("../Hero/hero-image.jpg");
  linkedinLink.appendChild(linkedInImg);

  const twitterLink = document.createElement("a");
  twitterLink.href = "#";
  externalLinks.appendChild(twitterLink);

  const twitterImg = document.createElement("img");
  twitterImg.classList.add("icons-large");
  twitterImg.src = require("../Hero/hero-image.jpg");
  twitterLink.appendChild(twitterImg);
};

export default Footer;
