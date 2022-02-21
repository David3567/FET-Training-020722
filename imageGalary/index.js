const print = (arg) => console.log(arg);

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

let [start, end] = [0, 4];
// Api.getImages();
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
            // print(tmp);
            const imagelist = document.querySelector(view.domStr.imagelist);
             view.render(imagelist, tmp);
        }
    }


    const getImages = api.getImages;

    return {
        getImages,
        Display
    }
})(Api, View)


//~~~~~~~~~~~~~~~~~~~~CONTROLLER~~~~~~~~~~~~~~~~~~
const appController = ((model, view) => {
    const display = new model.Display();
    
    const init = () => {

        model.getImages().then((images) => {
            display.imagelist = images.slice(start, end);
        });


    };
    const shownext = () => {
        
        view.domStr.nextimage.addEventListener('click', event => {
            start++;
            end++;
            model.getImages().then((images) => {
                display.imagelist = images.slice(start, end);
            });
            btnDisplay();
        })

        view.domStr.previmage.addEventListener('click', event => {
            start--;
            end--;
            model.getImages().then((images) => {
                display.imagelist = images.slice(start, end);
            });
            btnDisplay();
        })

    }
    const btnDisplay = () =>{
        if(start ===0){
            view.domStr.previmage.style.visibility="hidden";
            // con
        }else{
            view.domStr.previmage.style.visibility ="visible";
        }
        if(end ===9){
            view.domStr.nextimage.style.visibility="hidden";
            // con
        }else{
            view.domStr.nextimage.style.visibility ="visible";
        }
        
    }
    const run = () => {
        init();
        shownext();
        btnDisplay();
    }
    return {
        run
    }

})(Model, View);
appController.run();


function plusSlides(n) {
    showSlides(slideIndex += n);
}