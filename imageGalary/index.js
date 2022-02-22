// const print = (arg) => console.log(arg);
let [start, end] = [0, 4];
//~~~~~~~~~~~~~~~~~~~~API~~~~~~~~~~~~~~~~~~~~~~~~
const Api = (() => {
    const baseUrl = "http://localhost:3000";
    const image = "movies";

    const getImages = () =>
        fetch([baseUrl, image].join("/"))
            .then((response) => response.json());

    return {
        getImages,
    }
})();

//~~~~~~~~~~~~~~~~~~~~VIEW~~~~~~~~~~~~~~~~~~~~~~~~
const View = (() => {
    //create the object hold data to font-end
    const domStr = {
        imagelist: ".images",
        nextimage: document.querySelector('.next'),
        previmage: document.querySelector('.prev'),
    }
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    }
    const createTmp = arr => {
        let tmp = '';
        arr.forEach(image => {
            tmp += `
            <div class="poster">
                <img class="image" src="${image.imgUrl}" alt="" />
                <div class = "text">Movie: <span>${image.title}</span></div>
                <div class = "text">Info: <span>${image.updateInfo}</span></div>
            </div>  
            `;
        });
        return tmp;
    }
    return {
        render,
        createTmp,
        domStr
    }
})();
//~~~~~~~~~~~~~~~~~~~~MODLE~~~~~~~~~~~~~~~~~~~~~~~
const Model = ((api, view) => {
    class Display {
        #imagelist = [];

        get imagelist() {
            return this.#imagelist;
        }
        set imagelist(newimages) {
            this.#imagelist = newimages;
            const tmp = view.createTmp(this.#imagelist);
            const imagelist = document.querySelector(view.domStr.imagelist);
            view.render(imagelist, tmp);
        }
    }
    const btnDisplay = () => {
        view.domStr.previmage.style.visibility = start === 0 ? "hidden" : "visible";
        view.domStr.nextimage.style.visibility = end === 9 ? "hidden" : "visible";
    }

    const getImages = api.getImages;
    return {
        getImages,
        Display,
        btnDisplay,
    }
})(Api, View)


//~~~~~~~~~~~~~~~~~~~~CONTROLLER~~~~~~~~~~~~~~~~~~
const appController = ((model, view) => {
    const display = new model.Display();
    let imageslist = [];

    const init = () => {
        model.getImages().then((images) => {
            imageslist = [...images];
            model.btnDisplay();
            display.imagelist = imageslist.slice(start, end);
        });
    };
    const shownext = () => {
        view.domStr.nextimage.addEventListener('click', event => {
            start++;
            end++;
            display.imagelist = imageslist.slice(start, end);
            model.btnDisplay();
        })
        view.domStr.previmage.addEventListener('click', event => {
            start--;
            end--;
            display.imagelist = imageslist.slice(start, end);
            model.btnDisplay();
        })

    }
    const run = () => {
        init();
        shownext();
    }
    return {
        run
    }

})(Model, View);

appController.run();