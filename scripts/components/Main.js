export const Main = (dataPhotographs) => {
  console.log(dataPhotographs);

  let cards = "";
  dataPhotographs.forEach(item => {
    // console.log(item);
    cards += `
    <div class="card">
          <div class="card__picture__circle">
            <a href="photographer.html?id=${item.id}" class="card__link">
              <img
                src="assets/images/photographers/thumbnails/${item.portrait}"
                class="card__picture"
              />
              <h3 class="card__title">${item.name}</h3>
            </a>
          </div>
          <div class="card__content">
            <p class="card__localisation">${item.city}, ${item.country}</p>
            <p class="card__slogan">${item.tagline}</p>
            <p class="card__price">${item.price}</p> 
          </div>
        </div>
    `;
});
  return cards;    
};