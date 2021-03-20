import MoveTo from "moveto";

class ScrollTo {
  constructor(link) {
    this.link = link;
    this.targetSection = document.querySelector(
      `#${link.dataset.scrollLocation}`
    );
    this.moveTo = new MoveTo({ duration: 1000 });
    this.events();
  }

  events() {
    this.link.addEventListener("click", () => {
      this.scrollToSection();
    });
  }

  scrollToSection() {
    this.moveTo.move(this.targetSection);
  }
}

export default ScrollTo;
