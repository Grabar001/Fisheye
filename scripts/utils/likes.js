export const AddLike = () => {
    const heartsLike = document.querySelectorAll(".icone__heart");
    heartsLike.forEach((item) => {
        item.addEventListener("click", () => {

            const spanNbLikes = item.parentElement.children[0];
            const spanNbTotalLikes = document.querySelector(".nb__total__likes");
            let currentNbLikes = parseInt (item.parentElement.children[0].textContent);
            let currentNbTotalLikes = parseInt(spanNbTotalLikes.textContent);
            currentNbLikes++;
            currentNbTotalLikes++;
            spanNbLikes.innerText = currentNbLikes;
            spanNbTotalLikes.innerText = currentNbTotalLikes;
            
        });
    });
}