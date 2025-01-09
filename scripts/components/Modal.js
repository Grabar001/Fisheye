export const ModalRender = () => {
    return `
    <div class="modal">
      <div class="header__modal">
        <div class="header__title">
            <p>Contactez-moi</p>
            <p></p>
        </div>
        <i class="fa-solid fa-xmark icone__close__modal"></i>
      </div>
      <div class="modal__form">
        <form action="" method="post" class="form__contact">
          <label for="firstName">Prénom</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            class="input__text"
          />
          <label for="lastName">Nom</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            class="input__text"
          />
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            class="input__text"
          />
          <label for="message">Message</label>
          <textarea name="message" id="message" rows="6" class="input__textarea"></textarea>

          <button class="submit">Envoyer</button>
        </form>
      </div>
    </div>
    `;
}

export const openModal = () => {
    const buttonContact = document.querySelector(".photographer__contact");
    const modal = document.querySelector(".modal");

    buttonContact.addEventListener("click", () => {
       modal.classList.remove("closeModal");
        modal.classList.add("openModal");
    });
}

export const closeModal = () => {
  const iconeCloseModal = document.querySelector(".icone__close__modal");
  const modal = document.querySelector(".modal");

  iconeCloseModal.addEventListener("click", () => {
      modal.classList.remove("openModal");
      modal.classList.add("closeModal");
  });
}