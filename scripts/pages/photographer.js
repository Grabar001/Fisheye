import { Header } from "../components/HeaderPhotographer.js";
import { Main } from "../components/MainPhotographer.js";
import { LightBoxRender, OpenLightBox, CloseLightBox,  NextLightBox, PreviousLightBox } from "../components/Lightbox.js";
import { ModalRender, openModal, closeModal } from "../components/Modal.js";
import { getPhotographerById, getPhotographerMediasByild } from "../utils/api.js";
import { Dropdown } from "../utils/dropdown.js";
import { getUrlParams } from "../utils/urlParams.js";
import { AddLike } from "../utils/likes.js";

const displayData = (dataPhotographer, dataPhotographerMedias, urlParams) => {
    const body = document.querySelector("body");
    body.innerHTML = `
        ${ModalRender()}
        ${LightBoxRender()}
        <div class="container">
            ${Header(dataPhotographer)}
            ${Main(dataPhotographer, dataPhotographerMedias,urlParams )}
        </div>
    `;

    OpenLightBox();
    CloseLightBox();
    NextLightBox(dataPhotographer, dataPhotographerMedias);
    PreviousLightBox(dataPhotographer, dataPhotographerMedias);
    Dropdown();
    AddLike();
    openModal();
    closeModal();
};

(async () => {
    const dataPhotographer = await getPhotographerById();
    const dataPhotographerMedias = await getPhotographerMediasByild();
    const urlParams = getUrlParams();
    
    displayData(dataPhotographer, dataPhotographerMedias, urlParams);
})();