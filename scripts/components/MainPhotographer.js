export const Main = (dataPhotographer, dataPhotographerMedias, urlParams) => {

  let cardsMedia = "";
  let nbTotalLikes = 0;
  dataPhotographerMedias.forEach((element, index) => {
    nbTotalLikes += element.likes;

    const TagMedia = 
              (element.image) 
              ?
               `       
               <img
              src="assets/images/photographers/samplePhotos-Medium/${dataPhotographer.name}/${element.image}"
              alt=""
              class="galery__card__picture media"
              data-type="image"
              data-title="${element.title}"
              data-position="${index}"
            />` 
            :
            `<video
                  autoPlay
                  loop
                  muted
                  class="card__video media"
                  src="assets/images/photographers/samplePhotos-Medium/${dataPhotographer.name}/${element.video}"
                  data-type="video"
                  data-title="${element.title}"
                  data-position="${index}"
                ></video>`

    cardsMedia += `
      <figure class="card">
            ${TagMedia}
            <figcaption class="card__legend">
              <p class="picture__title">${element.title}</p>
              <div class="cards__likes">
                <span class="nbLikes">${element.likes}</span>
                <i class="fa-solid fa-heart icone__heart"></i>
              </div>
            </figcaption>
          </figure>
          `;
  }); 
    return `
      <main class="main__photographer">◊
        <div class="medias__sort">
          <p class="text__sort">Trier par</p>
          <div class="dropdown">
            <button class="button__dropdown">
              <p class="button__dropdown__text">${(urlParams.sort) ? urlParams.sort : "Popularite"}</p>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="dropdown__content">
              <div class="dropdown__item">
                <a href="?id=${dataPhotographer.id}&sort=${(urlParams.sort && urlParams.sort == "Date" ? "Popularite" : "Date")}" class="dropdown__link">
                  <hr class="separator" />
                  <span class="link__text">${(urlParams.sort && urlParams.sort == "Date" ? "Popularite" : "Date")}</span>
                </a>
              </div>
              <div class="dropdown__item">
                <a href="?id=${dataPhotographer.id}&sort=Titre" class="dropdown__link">
                  <hr class="separator" />
                  <span class="link__text">${(urlParams.sort && urlParams.sort == "Titre" ? "Popularite" : "Titre")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <section class="galery"> 
          ${cardsMedia}
        </section>
        <div class="block__likes">
          <p>
            <span class="nb__total__likes">${nbTotalLikes}</span>
            <i class="fa-solid fa-heart icone__heart__likes"></i>
          </p>
  <p class="likes__price">${dataPhotographer.price}€ /jour</p>
        </div>
      </main>
    `;
}