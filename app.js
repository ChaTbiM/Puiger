(function () {

    document.addEventListener("DOMContentLoaded", function () {
        let mainContainer = document.querySelector("#initial-main-container")
        let popupContainer = document.querySelector("#popup-container")
        let closePopup = document.querySelector("#popup-close")


        closePopup.addEventListener("click", () => {
            popupContainer.classList.toggle("show")
            popupContainer.classList.toggle("hide")

        })

        mainContainer.addEventListener("click", () => {
            popupContainer.classList.toggle("show")
            popupContainer.classList.toggle("hide")
        })

        document.addEventListener("click", (event) => {
            event.stopImmediatePropagation()

            if (event.target !== popupContainer && event.target !== mainContainer) {
                popupContainer.classList.remove("show")
                popupContainer.classList.add("hide")
            }
        })

    })
})();