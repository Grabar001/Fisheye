import { getUrlParams } from "../utils/urlParams.js";

const BASE_URL = "./data/photographers.json";

export const getData = async () => {
    try {
        const response = await fetch(BASE_URL);
        return response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Something went wrong");
    }
};

export const getPhotographer = async () => {
    const data = await getData();
    return data.photographers;
};

export const getPhotographerById = async () => {
    const photographers = await getPhotographer();
    const urlParams = getUrlParams();
    const id = urlParams.id;

    const data = photographers.filter(photograph => photograph.id == id);
    return data[0];
};

export const getPhotographerMediasByild = async () => {
    const data = await getData();
    const medias = data.media;
    const urlParams = getUrlParams();
    const id = urlParams.id;
    const sort = urlParams.sort;

    const dataMedias = medias.filter(media => media.photographerId == id);



    if(sort) {
        switch(sort) {
            case "Popularite":
                dataMedias.sort((a, b) => b.likes - a.likes);
                break;
            case "Date":
                dataMedias.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case "Titre":
                dataMedias.sort((a, b) => a.title.localeCompare(b.title));
                break;
        }
    }

    return dataMedias; 

}