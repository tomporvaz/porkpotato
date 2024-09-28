$(document).ready(function () {
  $(".slideshow").slick();
});

//Animations
let buildBtn = document.getElementById("build-btn");

buildBtn.addEventListener("click", function () {
  buildBtn.classList.add("animate__tada");
});

buildBtn.addEventListener("animationend", () => {
  buildBtn.classList.remove("animate__tada");
});

// Selected Nav Link on Scroll
let skillsLink = document.getElementById("nav_skills");
let aboutLink = document.getElementById("nav_about");

let aboutSection = document.getElementById("about");
let skillsSection = document.getElementById("skills");

window.addEventListener("scroll", () => {
  console.log(
    `window.scrollY >= aboutSection.offsetTop - 480 (${window.scrollY} >= ${
      aboutSection.offsetTop - 480
    }):
    ${window.scrollY >= aboutSection.offsetTop - 480}`
  );

  if (window.scrollY >= aboutSection.offsetTop - 480) {
    // Add selected-nav class to aboutSection
    aboutLink.classList.add("selected-nav");
    // Remove selected-nav class from skillsSection
    skillsLink.classList.remove("selected-nav");
  } else if (window.scrollY >= skillsSection.offsetTop - 480) {
    // Add selected-nav class to skillsSection
    skillsLink.classList.add("selected-nav");
    // Remove selected-nav class from aboutSection
    aboutLink.classList.remove("selected-nav");
  } else if (window.scrollY < skillsSection.offsetTop - 480) {
    skillsLink.classList.remove("selected-nav");
    aboutLink.classList.remove("selected-nav");
  }
});
// /Selected Nav Link on Scroll

// email popup
// Get the button element
var emailButton = document.getElementById("email");
let closePopupButton = document.getElementById("close-popup");
let copyEmailButton = document.getElementById("copy-email");
let mailtoButton = document.getElementById("mailto");

// Get the popup box element
var popup = document.getElementById("emailPopup");

// Function to close the popup when clicked outside
function closePopupOutside(event) {
  // Check if the clicked element is outside the popup and not the emailButton
  if (!popup.contains(event.target) && !emailButton.contains(event.target)) {
    console.log("Close Popup");
    closePopup(); // Close the popup
  }
}

// Show the popup box when the button is clicked
emailButton.addEventListener("click", function () {
  // Calculate the button's position relative to the viewport
  var rect = emailButton.getBoundingClientRect();
  var buttonTop = emailButton.offsetTop;
  var buttonLeft = rect.left;

  // Set the position of the popup box just above the button
  popup.style.display = "block";
  popup.style.top = buttonTop - popup.offsetHeight - 10 + "px"; // Position above the button
  popup.style.left = buttonLeft - 198 / 2 + rect.width / 4 + "px"; // Align with the left edge of the button

  // Add event listener for click outside closing popup
  window.addEventListener("click", closePopupOutside);

  // decode email address for mailto and copy-email buttons
  if (
    copyEmailButton.dataset.emailaddress ===
    "607b79647b6662756e547379757d783a777b79"
  ) {
    Nodes.decode("#copy-email", textXor);
  }

  if (
    mailtoButton.getAttribute("href") ===
    "79757d78607b2e607b79647b6662756e547379757d783a777b79"
  ) {
    Nodes.decode(".mailto", linkXor);
  }
});

function copyemail(event) {
  // let copyEmailButton = event.target;
  let message = document.getElementById("copy-email-message");

  message.style.display = "flex";

  // Hide the message after 2 seconds
  setTimeout(function () {
    message.style.display = "none";
  }, 2000);

  //copy email to clipboard
  navigator.clipboard.writeText(copyEmailButton.dataset.emailaddress);
}

// Function to close the popup
function closePopup() {
  popup.style.display = "none"; // Hide the popup

  // Remove event listener for clicks outside the popup
  // window.removeEventListener("click", closePopupOutside);
}

window.addEventListener("resize", closePopup);

closePopupButton.addEventListener("click", closePopup);

// /email popup
