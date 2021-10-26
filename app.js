(function () {

    function displayPopup(popupRef) {
        if (popupRef.style.display === "block") {
            popupRef.style.display = "none"
        } else if (popupRef.style.display === "none") {
            popupRef.style.display = "block"
        }
    }

    function clickOutsideMainContainer(event, popupRef, mainContainer) {
        if ((event.target !== mainContainer ) && event.target !== popupRef) {
            hidePopup(popupRef);
            console.log("first time")
        }
    }

    function hidePopup(popupRef) {
        popupRef.style.display = "none"
    }


    document.addEventListener("DOMContentLoaded", function () {
        let mainContainer = document.querySelector("#initial-main-container")
        let secondaryContainer = document.querySelector("#initial-secondary-container")
        let popupContainer = document.querySelector("#popup-container")

        let closePopup = document.querySelector("#popup-close")

        mainContainer.addEventListener("click", () => displayPopup(popupContainer))

        document.addEventListener("click", (event) => clickOutsideMainContainer(event, popupContainer, mainContainer))

        closePopup.addEventListener("click", () => hidePopup(popupContainer))

    })
})();