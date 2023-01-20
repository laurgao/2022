let app;
const root = document.querySelector("#root");
const canvas = document.querySelector("#canvas");
const body = document.body;
const Tween = createjs.Tween;

function initialize() {
    const width = window.innerWidth;
    if (width < 768) widthError();
    else {
        app = new PIXI.Application({
            // backgroundColor: 0xf5f5f4, //Just add 0x and then a hex code. stone 100.   
            backgroundAlpha: 0,
            width: width,
            height: window.innerHeight,
        })

        canvas.appendChild(app.view);
        slide0();
        // scenePlane();
        // scenePrior();
        // slideFranticSchedule();
    }
}

function createLauraCircle (radius=300) {
    let numLauras = radius/50;
    for (let i = 0; i < 5; i++) {
        const curvedText = document.createElement('div');
        const text = "2022 annual review ".repeat(numLauras);
        curvedText.innerHTML = text;
        curvedText.className = "absolute flex w-screen h-screen items-center justify-center";
        curvedText.style.overflow = "hidden"
        curvedText.zIndex = -1;
        curvedText.style.opacity = 0.5
        // curvedText.style.fontWeight = "bold";
        // rgb(219, 0, 79)
        root.appendChild(curvedText);
        var html = "";
        Array.from(text).forEach(function (letter, idx) {
            html += `<span
                style="height: ${radius}px; position: absolute; transform-origin:bottom center; transform: translate(0px,${-radius/2}px) rotate(${360/text.length * idx}deg)"
            >${letter}</span>`;
        });
        curvedText.innerHTML = html;
        radius += 50;
        numLauras +=1;
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
    `

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
    root.innerHTML = "";
    app.stage.removeChildren()
    newScreenFn();
}


function widthError() {
    const p = document.createElement('p');
    p.textContent = 'This site is not optimized for mobile devices. Please use a desktop or laptop computer.<br/><br/>To complain about this, bother me at gaolauro AT gmail DOT com or make an issue on github.';
    root.appendChild(p);
}


window.onload = initialize();
