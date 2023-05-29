window.mobileCheck = function () {
    // from: https://stackoverflow.com/a/11381730
    let check = false;
    (function (a) {
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4)
            )
        )
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

let currentSlide = 0;
const updateSlideNumber = (n) => {
    currentSlide = n;
    const buttons = document.querySelectorAll(".footer");
    buttons.forEach((button, idx) => {
        button.style.backgroundColor = currentSlide === idx ? "#e7e5e4" : "transparent";
    });
};

class AS {
    constructor(spriteArray, parent, fps = 10) {
        this.spriteArray = spriteArray;
        this.currentFrame = 0;
        this.totalFrames = spriteArray.length;
        this.parent = parent;
        this.visible = true;
        this.parent.addChild(this.spriteArray[0]);
        this.animateFn = () => {
            const nextFrame = this.currentFrame < this.totalFrames - 1 ? this.currentFrame + 1 : 0;
            this.gotoAndStop(nextFrame);
        };
        this.animatingId = null;
        this.fps = fps;
    }

    gotoAndStop(i) {
        if (this.visible) this.parent.removeChild(this.spriteArray[this.currentFrame]);
        this.parent.addChild(this.spriteArray[i]);
        this.currentFrame = i;
        this.visible = true;
    }

    hide() {
        if (this.animatingId) clearInterval(this.animatingId);
        this.animatingId = null;
        this.parent.removeChild(this.spriteArray[this.currentFrame]);
        this.visible = false;
    }

    animate() {
        if (this.animatingId === null) {
            this.animateFn();
            this.animatingId = setInterval(this.animateFn, 1000 / this.fps);
        }
    }
}

function setupMeAtDesk() {
    const scene = new PIXI.Container();
    const bg = PIXI.Sprite.from("images/scene-1-bg.png");
    const me = PIXI.Sprite.from("images/scene-1-me.png");
    const meDropped = PIXI.Sprite.from("images/scene-1-me-head-down.png");
    // add larm and rarm
    const larm = PIXI.Sprite.from("images/scene-1-larm.png");
    const rarm = PIXI.Sprite.from("images/scene-1-rarm.png");
    scene.addChild(bg);
    scene.addChild(me);
    scene.addChild(larm);
    scene.addChild(rarm);

    const w = app.screen.width * 0.5625 < app.screen.height ? app.screen.height / 0.5625 : app.screen.width;
    const ww = w * 0.7;
    const picturesY = app.screen.height - ww * 0.5625;

    me.width = ww;
    me.height = ww * 0.5625;
    meDropped.width = ww;
    meDropped.height = ww * 0.5625;
    bg.width = ww;
    bg.height = ww * 0.5625;
    larm.width = ww;
    rarm.width = ww;
    larm.height = ww * 0.5625;
    rarm.height = ww * 0.5625;

    // scene.w = ww;
    // scene.h = ww * 9/16
    scene.y = picturesY;

    app.stage.addChild(scene);
}

function addBr(text) {
    return text.replaceAll(
        `
`,
        "<br/>"
    );
}

function insertDilemma(b1Options, b2Options, title = "<h1>Quoi faire? (What do you do?)</h1>") {
    const popupStyles =
        "display: absolute; visibility: hidden; max-width: 20rem; background-color: black; color: white; padding: 2rem; border-radius: 1rem;";
    //     // <div class="flex justify-center items-center">

    root.innerHTML += `
        <div style="padding: 2rem; text-align: center">
            ${title}
            <div class="flex justify-center items-center" id="button-container"></div>
            <div class="flex justify-center items-center">
                <div id="descrip1" style="${popupStyles}">
                    
                </div>
                <div id="descrip2" style="${popupStyles}">
                
                </div>
            </div>
        </div>
    `;

    const b1 = document.createElement("button");
    const b2 = document.createElement("button");
    b1.textContent = b1Options.buttonText;
    b2.textContent = b2Options.buttonText;
    b1.onclick = b1Options.nextScene;
    b2.onclick = b2Options.nextScene;
    b1.onmouseover = showFr;
    b1.onmouseleave = hideFr;
    b2.onmouseover = showCode;
    b2.onmouseleave = hideCode;

    const bContainer = document.querySelector("#button-container");
    bContainer.appendChild(b1);
    bContainer.appendChild(b2);

    const descrip1 = document.querySelector("#descrip1");
    descrip1.innerHTML = b1Options.descrip;
    const descrip2 = document.querySelector("#descrip2");
    descrip2.innerHTML = b2Options.descrip;

    function showFr() {
        descrip1.style.visibility = "visible";
    }

    function hideFr() {
        descrip1.style.visibility = "hidden";
    }

    function showCode() {
        descrip2.style.visibility = "visible";
    }

    function hideCode() {
        descrip2.style.visibility = "hidden";
    }
}

const meTableTextStyles = "padding: 2rem; text-align: right; max-width: 50vw; float: right";
