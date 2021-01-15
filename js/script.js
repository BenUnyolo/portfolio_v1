// MOVETO SCROLL SETUP
const scrollDown = (id) => {
  const section = document.querySelector(`#${id}`)
  const moveTo = new MoveTo({ duration: 1000 });
  moveTo.move(section);
}

// TINGLE MODAL
document.querySelector('#world-map-video-link').addEventListener('click', () => worldMapModal.open());
document.querySelector('#text-audio-video-link').addEventListener('click', () => textAudioModal.open());
document.querySelector('#numbers-video-link').addEventListener('click', () => numbersModal.open());
document.querySelector('#book-video-link').addEventListener('click', () => bookPriceModal.open());

const pauseVideo = (videoId) => {
  let video = document.querySelector(`#${videoId}`);
  console.log(video);
}

const modalConfig = (videoId) => {
  return {
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    onOpen: () => {},
    onClose: () => {
      let video = document.querySelector(`#${videoId}`);
      video.pause(video);
    },
    beforeClose: () => {
      return true;
    }
  }
}

const videoModalContent = (title, id, path) => {
  return `
  <h4>${title}</h4>
  <video id="${id}" controls>
    <source src="${path}" type="video/mp4">
    Your browser does not support this video.
  </video>
  `
}

// create modals
const worldMapModal = new tingle.modal(modalConfig('world-map-video'));
const cocktailModal = new tingle.modal(modalConfig('cocktail-video'));
const textAudioModal = new tingle.modal(modalConfig('text-audio-video'));
const numbersModal = new tingle.modal(modalConfig('numbers-video'));
const bookPriceModal = new tingle.modal(modalConfig('book-price-video'));

// set modal content
// cocktailModal.setContent(videoModalContent('Cocktail Book', 'cocktail-video', 'public/video/CocktailBook.mp4'));
worldMapModal.setContent(videoModalContent('World Scratch Map', 'world-map-video', 'public/video/WorldMap.mp4'));
textAudioModal.setContent(videoModalContent('Text To Audio App', 'text-audio-video', 'public/video/TextToAudio.mp4'));
numbersModal.setContent(videoModalContent('French Numbers Game', 'numbers-video', 'public/video/NumberGame.mp4'));
bookPriceModal.setContent(videoModalContent('Discount Book Finder', 'book-price-video', 'public/video/BookPrice.mp4'));