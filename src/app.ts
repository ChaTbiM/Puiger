(function () {
    const SHOW = "show";
    const HIDE = "hide";

    document.addEventListener("DOMContentLoaded", function () {
        let mainContainer = document.querySelector("#initial-main-container")
        let popupContainer = document.querySelector("#popup-container")
        let closePopup = document.querySelector("#popup-close")
        let overlay = document.querySelector(".overlay");

        const toggleOverlay = (mode = HIDE) => {
            if (mode === SHOW) {
                overlay.classList.add("show")
                overlay.classList.remove("hide")
            } else if (mode === HIDE) {
                overlay.classList.remove("show")
                overlay.classList.add("hide")
            }
        }

        const togglePopup = (mode = HIDE) => {
            if (mode === SHOW) {
                popupContainer.classList.add("show")
                popupContainer.classList.remove("hide")
            } else if (mode === HIDE) {
                popupContainer.classList.remove("show")
                popupContainer.classList.add("hide")
            }
        }

        closePopup.addEventListener("click", () => {
            togglePopup(HIDE);
            toggleOverlay(HIDE);
        })

        mainContainer.addEventListener("click", () => {
            togglePopup(SHOW)
            toggleOverlay(SHOW);
        })

        document.addEventListener("click", (event) => {
            event.stopImmediatePropagation()
            let popupContainerNestedChildren = Array.prototype.slice.call(popupContainer.children);

            for (let i = 0; i < 3; i++) {
                popupContainerNestedChildren = [...popupContainerNestedChildren,
                ...popupContainerNestedChildren.map((directChild) => Array.prototype.slice.call(directChild.children)).flat()
                ];
            }

            if (event.target !== popupContainer && event.target !== mainContainer && !popupContainerNestedChildren.includes(event.target)) {
                togglePopup(HIDE);
                toggleOverlay(HIDE);
            }
        })

    })
})();