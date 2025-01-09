export const Header = (dataPhotographer) => {
  if (!dataPhotographer) {
      console.error("Missing photographer data");
      return "<div>Error loading photographer header</div>";
  }

  return `
  <header class="header__photographer">
      <a href="index.html" class="link__logo">
        <img src="assets/images/logo.webp" alt="logo" class="header__logo" />
      </a>
      <section class="header__presentation">
        <div class="header__presentation__content">
          <h1 class="photographer__name">${dataPhotographer.name}</h1>
          <p class="phtographer__location">${dataPhotographer.city}, ${dataPhotographer.country}</p>
          <p class="phtographer__tagline">${dataPhotographer.tagline}</p>
        </div>
        <div class="contact__block">
          <button class="photographer__contact">Contactez-moi</button>
        </div>
        <div class="picture__block">
          <img
            src="assets/images/photographers/thumbnails/${dataPhotographer.portrait}"
            alt="${dataPhotographer.name}"
            class="photographer__thumbnail"
          />
        </div>
      </section>
    </header>
  `;
};