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

function initialize() {
    const width = window.innerWidth;
    if (width < 768 || window.mobileCheck()) widthError();
    else {
        app = new PIXI.Application({
            // backgroundColor: 0xf5f5f4, //Just add 0x and then a hex code. stone 100.
            backgroundAlpha: 0,
            width: width,
            height: window.innerHeight - 4 * 16, // footer is 4 rem
        });

        canvas.appendChild(app.view)
        footer();
        slides[currentSlide].fn();
        // appsI();
        // scenePlane();
        // scenePrior();
        // slideFranticSchedule();
    }
}

function clearRoot() {
    root.innerHTML = "";
    // clear styles
    // root.style = "";
}

function widthError() {
    const p = document.createElement("p");
    p.textContent =
        "This site is not optimized for mobile devices. Please use a desktop or laptop computer.<br/><br/>To complain about this, bother me at gaolauro AT gmail DOT com or make an issue on github.";
    root.appendChild(p);
}

window.onload = initialize();
