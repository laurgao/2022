let app;
const root = document.querySelector("#root");
const canvas = document.querySelector("#canvas");
const body = document.body;
const Tween = createjs.Tween;

// const s = {
//     1: slide1,
//     2: slideFranticSchedule,
//     3: slideFrench,
//     4: slideTN,
//     5: slideZapata,
//     6: slideAtlas,
//     7: slideApps,
//     8: slideConcl,
// };

const slides = [
    // {
    //     fn: slide0,
    //     name: "Introduction",
    // },
    {
        fn: slide1,
        name: "Web Development",
    },
    {
        fn: slideFranticSchedule,
        name: "Frantic Schedule",
    },
    {
        fn: slideFrench,
        name: "French",
    },
    {
        fn: slideTN,
        name: "TOPS Night",
    },
    {
        fn: slideZapata,
        name: "Zapata",
    },
    {
        fn: slideAtlas,
        name: "Atlas",
    },
    {
        fn: slideApps,
        name: "Applications",
    },
    {
        fn: slideConcl,
        name: "Conclusion",
    },
];

function footer() {
    const footer = document.querySelector("#footer");
    // create div
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.gap = "1rem";
    // add div to footer
    footer.appendChild(div);

    for (let i = 0; i < slides.length; i++) {
        console.log(slides[i]);
        // create a circle for every scene
        const wrapper = document.createElement("div");
        const button = document.createElement("button");
        wrapper.appendChild(button);
        button.className = "footer";
        wrapper.className = "flex items-center justify-center";
        button.style.width = "2rem";
        button.style.height = "2rem";
        button.style.borderRadius = "50%";
        button.style.border = "1px solid white";
        button.style.backgroundColor = currentSlide === i ? "#e7e5e4" : "transparent";
        button.style.zIndex = 2;
        // circle.style.transition = "background-color 0.15s";

        // create popup
        const popup = document.createElement("div");
        popup.className = "absolute";
        popup.style.padding = "0.5rem 1rem";
        popup.innerHTML = i + 1 + ". " + slides[i].name;
        popup.style.backgroundColor = "#292524";
        popup.style.borderRadius = "0.5rem";
        popup.style.bottom = "0";
        popup.style.color = "#e7e5e4";
        popup.style.opacity = 0;
        popup.style.transition = "transform 0.25s ease-in-out, opacity 0.25s ease-in-out";
        popup.style.zIndex = 1;

        // make a triangle on the bottom of the popup pointing to the circle
        const triangle = document.createElement("div");
        triangle.style.border = "1rem solid transparent";
        triangle.style.borderTop = "1rem solid #292524";
        triangle.style.position = "absolute";
        triangle.style.bottom = "-2rem";
        triangle.style.left = "50%";
        triangle.style.transform = "translateX(-50%)";
        popup.appendChild(triangle);

        button.onmouseenter = () => {
            popup.style.transform = "translateY(-200%)";
            popup.style.opacity = "1";
        };

        button.onmouseleave = () => {
            popup.style.transform = "translateY(0)";
            popup.style.opacity = "0";
        };

        button.onclick = () => {
            updateSlideNumber(i);
            newScreen(slides[i].fn);
        };

        wrapper.appendChild(popup);
        div.appendChild(wrapper);
    }
}

function initialize() {
    const width = window.innerWidth;
    if (width < 768 || window.mobileCheck()) widthError();
    else {
        app = new PIXI.Application({
            // backgroundColor: 0xf5f5f4, //Just add 0x and then a hex code. stone 100.
            backgroundAlpha: 0,
            width: width,
            height: window.innerHeight,
        });

        canvas.appendChild(app.view);
        footer();
        slide0();
        // appsI();
        // scenePlane();
        // scenePrior();
        // slideFranticSchedule();
    }
}

function createLauraCircle(radius = 300) {
    let numLauras = radius / 50;
    for (let i = 0; i < 5; i++) {
        const curvedText = document.createElement("div");
        const text = "2022 annual review ".repeat(numLauras);
        curvedText.innerHTML = text;
        curvedText.className = "absolute flex w-screen h-screen items-center justify-center";
        curvedText.style.overflow = "hidden";
        curvedText.zIndex = -1;
        curvedText.style.opacity = 0.5;
        // curvedText.style.fontWeight = "bold";
        // rgb(219, 0, 79)
        root.appendChild(curvedText);
        var html = "";
        Array.from(text).forEach(function (letter, idx) {
            html += `<span
                style="height: ${radius}px; position: absolute; transform-origin:bottom center; transform: translate(0px,${-radius / 2}px) rotate(${
                (360 / text.length) * idx
            }deg)"
            >${letter}</span>`;
        });
        curvedText.innerHTML = html;
        radius += 50;
        numLauras += 1;
    }
}

function slide0() {
    // add button to dom taht says play and then do slide1
    // <p style="opacity: 50%; margin-bottom: 2rem;">By Laura Gao</p>
    root.innerHTML = `
        <div style="position: absolute; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1;">
            <h1 style="font-size: 3.3rem; line-height: 1">the</h1>    
            <h1 style="font-size: 8rem; line-height: 1">sellout's</h1>    
            <h1 style="font-size: 5rem; line-height: 1; margin-bottom: 2rem;">dilemma</h1>

            <p class="text-stone-500" style="margin-bottom: 4rem;">my 2022, in a game &#8226; by laura gao</p>
        
            <button
                onClick="clearRoot();slide1();"
                class="small"
                style="margin-bottom: -2rem;"
            >Play</button>
        </div>
    `;

    createLauraCircle(350);

    // const button = document.createElement('button');
    // button.innerHTML = "Play";
    // object.appendChild(button);
    // button.addEventListener('click', () => {
    //     button.remove();
    //     slide1();
    // })
    // body.appendChild(object);
}

function clearRoot() {
    root.innerHTML = "";
    // clear styles
    // root.style = "";
}

const newScreen = (newScreenFn) => {
    const slideFns = slides.map((s) => s.fn);
    const index = slideFns.indexOf(newScreenFn);
    if (index) updateSlideNumber(index);

    root.innerHTML = "";
    app.stage.removeChildren();
    newScreenFn();
};

function widthError() {
    const p = document.createElement("p");
    p.textContent =
        "This site is not optimized for mobile devices. Please use a desktop or laptop computer.<br/><br/>To complain about this, bother me at gaolauro AT gmail DOT com or make an issue on github.";
    root.appendChild(p);
}

window.onload = initialize();
