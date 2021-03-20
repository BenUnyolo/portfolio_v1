import ScrollTo from "./modules/ScrollTo";
import Modal from "./modules/Modal";

// Scroll to section
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => new ScrollTo(link));

// Modal
const modalLinks = document.querySelectorAll(".modal-link");
modalLinks.forEach((link) => new Modal(link));
