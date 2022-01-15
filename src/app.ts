enum VISIBILITY {
    SHOW = "show",
    HIDE = "hide"
}

(function () {
    document.addEventListener("DOMContentLoaded", function () {
        let mainContainer: HTMLElement = document.querySelector("#initial-main-container")
        let popupContainer: HTMLElement = document.querySelector("#popup-container")
        let closePopup: HTMLElement = document.querySelector("#popup-close")
        let overlay: HTMLElement = document.querySelector(".overlay");

        const toggleOverlay = (mode = VISIBILITY.HIDE) => {
            if (mode === VISIBILITY.SHOW) {
                overlay.classList.add(VISIBILITY.SHOW)
                overlay.classList.remove(VISIBILITY.HIDE)
            } else if (mode === VISIBILITY.HIDE) {
                overlay.classList.remove(VISIBILITY.SHOW)
                overlay.classList.add(VISIBILITY.HIDE)
            }
        }

        const togglePopup = (mode = VISIBILITY.HIDE) => {
            if (mode === VISIBILITY.SHOW) {
                popupContainer.classList.add(VISIBILITY.SHOW)
                popupContainer.classList.remove(VISIBILITY.HIDE)
            } else if (mode === VISIBILITY.HIDE) {
                popupContainer.classList.remove(VISIBILITY.SHOW)
                popupContainer.classList.add(VISIBILITY.HIDE)
            }
        }

        closePopup.addEventListener("click", () => {
            togglePopup(VISIBILITY.HIDE);
            toggleOverlay(VISIBILITY.HIDE);
        })

        mainContainer.addEventListener("click", () => {
            togglePopup(VISIBILITY.SHOW)
            toggleOverlay(VISIBILITY.SHOW);
        })

        document.addEventListener("click", (event) => {
            event.stopImmediatePropagation()
            let popupContainerNestedChildren: Array<HTMLElement> = Array.prototype.slice.call(popupContainer.children);

            for (let i = 0; i < 3; i++) {
                popupContainerNestedChildren = [...popupContainerNestedChildren,
                ...popupContainerNestedChildren.map((directChild: HTMLElement) => Array.prototype.slice.call(directChild.children)).flat()
                ];
            }

            if (event.target !== popupContainer && event.target !== mainContainer && !popupContainerNestedChildren.includes(event.target as HTMLElement)) {
                togglePopup(VISIBILITY.HIDE);
                toggleOverlay(VISIBILITY.HIDE);
            }
        })

    })
})();