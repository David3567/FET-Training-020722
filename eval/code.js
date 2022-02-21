const Api = (() => {
    const getMovieMetadata = () =>
        fetch(["http://localhost:3000", "movies"].join("/")).then((response) => response.json());
    return {
        getMovieMetadata,
    };
})();

const View = (() => {
    const domStr = {
        carousel: ".carousel-container",
    };
    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((todo) => {
            tmp += `
                <li>
                    <div class=\"indvMovie\">
                    <img src=\"${todo.imgUrl}\" alt=\"${todo.title}\" class="movieBoxArt">
                    <p>Movie: ${todo.title}</p>
                    <p>Info: ${todo.updateInfo}</p>
                    </div>
                </li>
            `;
        });
        return tmp;
    };

    return {
        domStr,
        createTmp,
    };
})();

const Model = ((api, view) => {

    class State {
        #carousel = [];
        lptr = 0;
        rptr = 0;
        rightMost = 0;
        set carousel(newCarousel) {
            this.#carousel = newCarousel;
            let baseArray = this.#carousel;
            this.rightMost = baseArray.length;
            this.rptr = 4;
            console.log("l: " + this.lptr + " r: " + this.rptr)
            let manipulatedArr = baseArray.slice(this.lptr, this.rptr);
            let lBtn = document.getElementById("move_left");
            lBtn.style.visibility = "hidden";
            const carousel = document.querySelector(view.domStr.carousel);
            carousel.innerHTML = view.createTmp(manipulatedArr);
        }
        updateContainer() {
            let baseArray = this.#carousel;
            this.rightMost = baseArray.length;
            console.log("l: " + this.lptr + " r: " + this.rptr)
            let manipulatedArr = baseArray.slice(this.lptr, this.rptr);
            let carousel = document.querySelector(view.domStr.carousel);
            carousel.innerHTML = view.createTmp(manipulatedArr);
        }
        moveLeft() {
            console.log("ML called")
            if (this.lptr === 0) {
                console.log("0 is reached, do nothing")
                let lBtn = document.getElementById("move_left");
                lBtn.style.visibility = "hidden";
            } else {
                let rBtn = document.getElementById("move_right");
                rBtn.style.visibility = "visible";
                this.lptr -= 1
                this.rptr -= 1
                if (this.lptr === 0) {
                    let lBtn = document.getElementById("move_left");
                    lBtn.style.visibility = "hidden";
                }
                this.updateContainer();

            }
            //console.log()
        }
        moveRight() {
            console.log("MR called")
            if (this.rptr === this.rightMost) {
                console.log("RM is reached, do nothing")
                let rBtn = document.getElementById("move_right");
                rBtn.style.visibility = "hidden";
            } else {
                let lBtn = document.getElementById("move_left");
                lBtn.style.visibility = "visible";
                this.rptr += 1
                this.lptr += 1
                if (this.rptr === this.rightMost) {
                    let rBtn = document.getElementById("move_right");
                    rBtn.style.visibility = "hidden";
                }
                this.updateContainer();
            }

        }

    }

    const getMovieMetadata = api.getMovieMetadata;


    return {
        getMovieMetadata,
        State,
    };
})(Api, View);

const appController = ((model, view) => {
    const state = new model.State();
    const init = () => {
        model.getMovieMetadata().then((metadata) => {
            state.carousel = metadata;

        });
    };
    const bootstrap = () => {
        init();
    };
    let moveLeft = document.getElementById("move_left");
    let moveRight = document.getElementById("move_right");
    moveLeft.addEventListener("click", function () {
        state.moveLeft();
    });
    moveRight.addEventListener("click", function () {
        state.moveRight()
    });

    return { bootstrap };
})(Model, View);

appController.bootstrap();