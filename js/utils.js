

class AS {
    constructor(spriteArray, parent) {
        this.spriteArray = spriteArray;
        this.currentFrame = 0;
        this.totalFrames = spriteArray.length
        this.parent = parent;
        this.visible = true;
        this.parent.addChild(this.spriteArray[0])
        this.animateFn = () => {
            const nextFrame = this.currentFrame < this.totalFrames - 1 ? this.currentFrame + 1 : 0;
            this.gotoAndStop(nextFrame);
        }
        this.animatingId = null;
    }

    gotoAndStop(i) {
        if (this.visible) this.parent.removeChild(this.spriteArray[this.currentFrame])
        this.parent.addChild(this.spriteArray[i])
        this.currentFrame = i
        this.visible = true;
    }

    hide() {
        if (this.animatingId) clearInterval(this.animatingId)
        this.animatingId = null;
        this.parent.removeChild(this.spriteArray[this.currentFrame])
        this.visible = false;
    }

    animate() {
        if (this.animatingId === null) {
            this.animateFn();
            this.animatingId = setInterval(this.animateFn, 100)
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
    scene.addChild(bg)
    scene.addChild(me)
    scene.addChild(larm)
    scene.addChild(rarm)

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
    scene.y = picturesY

    app.stage.addChild(scene)
}


function addBr(text) {
    return text.replaceAll(`
`, "<br/>")
}



function insertDilemma(b1Options, b2Options, title="<h1>Quoi faire? (What do you do?)</h1>")  {
    const popupStyles = "display: absolute; visibility: hidden; max-width: 20rem; background-color: black; color: white; padding: 2rem; border-radius: 1rem;"
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
    `
    
    const b1 = document.createElement("button")
    const b2 = document.createElement("button")
    b1.textContent = b1Options.buttonText
    b2.textContent = b2Options.buttonText
    b1.onclick = b1Options.nextScene
    b2.onclick = b2Options.nextScene
    b1.onmouseover = showFr
    b1.onmouseleave = hideFr
    b2.onmouseover = showCode
    b2.onmouseleave = hideCode

    const bContainer = document.querySelector("#button-container")
    bContainer.appendChild(b1)
    bContainer.appendChild(b2)

    const descrip1 = document.querySelector("#descrip1")
    descrip1.innerHTML = b1Options.descrip
    const descrip2 = document.querySelector("#descrip2") 
    descrip2.innerHTML = b2Options.descrip

    function showFr() {
        descrip1.style.visibility = "visible"
    }


    function hideFr() {
        descrip1.style.visibility = "hidden"
    }

    function showCode() {
        descrip2.style.visibility = "visible"
    }


    function hideCode() {
        descrip2.style.visibility = "hidden"
    }
}