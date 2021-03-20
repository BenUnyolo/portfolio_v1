import tingle from "../libraries/tingle";

class Modal {
  constructor(link) {
    this.link = link; // passed in
    this.title = link.dataset.modalTitle;
    this.videoPath = link.dataset.modalPath;
    this.id = link.dataset.modalId;
    this.modal = this.createModal();
    this.setModalContent();
    this.events();
  }

  events() {
    this.link.addEventListener("click", () => {
      this.modal.open();
    });
  }

  createModal() {
    return new tingle.modal({
      footer: false,
      stickyFooter: false,
      closeMethods: ["overlay", "button", "escape"],
      closeLabel: "Close",
      onOpen: () => {},
      onClose: () => {
        let video = document.querySelector(`#${this.id}`);
        video.pause(video);
      },
      beforeClose: () => {
        return true;
      },
    });
  }

  setModalContent() {
    this.modal.setContent(`
    <h4>${this.title}</h4>
    <video class="modal__video" id="${this.id}" controls>
      <source src="${this.videoPath}" type="video/mp4">
      Your browser does not support this video.
    </video>
    `);
  }

  openModal() {
    this.modal.open();
  }
}

export default Modal;
