export const Dropdown   = () => {
    const buttonDropdown = document.querySelector(".button__dropdown");
    const dropdownContent = document.querySelector(".dropdown__content");
    const iconeDown = document.querySelector(".fa-chevron-down");

    buttonDropdown.addEventListener("click", () => {
        dropdownContent.classList.toggle("show");
        buttonDropdown.classList.toggle("border__radius");
        iconeDown.classList.toggle("fa-rotate-180");
    });
}