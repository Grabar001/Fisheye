export const LightBoxRender = () => {
  return `
        <div class="lightbox">
            <div class="previous">
                <i class="fa-solid fa-chevron-left icone__previous"></i>
            </div>
            <div class="lightbox__source">
                
            </div>
            <div class="next">
                <i class="fa-solid fa-xmark icone__close"></i>
                <i class="fa-solid fa-chevron-right icone__next"></i>
            </div>
        </div>
    `;
};

let currentIndex = 0;

export const OpenLightBox = () => {
  const medias = document.querySelectorAll(".media");
  const lightbox = document.querySelector(".lightbox");
  const lightboxSource = document.querySelector(".lightbox__source");
  let data;
  medias.forEach((media) => {
    media.addEventListener("click", () => {
      lightbox.classList.remove("fadeOut");
      const mediaSrc = media.src;
      const mediaType = media.getAttribute("data-type");
      console.log()
      const mediaTitle = media.getAttribute("data-title");
      currentIndex = media.getAttribute("data-position");
      mediaType == "image"
        ? (data = `<img
                src="${mediaSrc}"
                alt=""
                class="lightbox__picture"
                />`)
        : (data = `<video autoPlay loop muted class="card__video media" src="${mediaSrc}"></video>`);
      lightboxSource.innerHTML = data + `<p class="lightbox__legend">${mediaTitle}</p>`;

      lightbox.classList.add("fadeIn");
    });
  });
};

export const CloseLightBox = () => {
  const iconeClose = document.querySelector(".icone__close");
  const lightbox = document.querySelector(".lightbox");

  iconeClose.addEventListener("click", () => {
    lightbox.classList.remove("fadeIn");
    lightbox.classList.add("fadeOut");
  });
};

export const NextLightBox = (photograph, medias) => {
  let data;
  const lightboxSource = document.querySelector(".lightbox__source");
  const iconeNext = document.querySelector(".icone__next");

  iconeNext.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex > medias.length - 1) currentIndex = 0;
  
    medias[currentIndex].image
      ? (data = `<img
                src="assets/images/photographers/samplePhotos-Small/${photograph.name}/${medias[currentIndex].image}"
                alt=""
                class="lightbox__picture"
                />`)
      : (data = `<video autoPlay loop muted class="card__video media" src="./assets/images/photographers/samplePhotos-Small/${photograph.name}/${medias[currentIndex].video}"></video>`);
    lightboxSource.innerHTML = data + `<p class="lightbox__legend">${medias[currentIndex].title}</p>`;
  });
};

export const PreviousLightBox = (photograph, medias) => {
  let data;
  const lightboxSource = document.querySelector(".lightbox__source");
  const iconePrevious = document.querySelector(".icone__previous");

  iconePrevious.addEventListener("click", () => {
    currentIndex--; //curentIndex = currentIndex - 1

    // -1            < 0                  11           -1= 10
    if (currentIndex < 0) currentIndex = medias.length - 1;

    medias[currentIndex].image
      ? (data = `<img
                src="assets/images/photographers/samplePhotos-Small/${photograph.name}/${medias[currentIndex].image}"
                alt=""
                class="lightbox__picture"
                />`)
      : (data = `<video autoPlay loop muted class="card__video media" src="./assets/images/photographers/samplePhotos-Small/${photograph.name}/${medias[currentIndex].video}"></video>`);
    lightboxSource.innerHTML = data + `<p class="lightbox__legend">${medias[currentIndex].title}</p>`;
  });
};
