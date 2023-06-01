const boringStyles = "max-width: 56rem; margin: 0 auto; padding: 2rem;";

function slideAtlas() {
    scenePlane();
}

function scenePlane() {
    const scene = new PIXI.Container();
    const plane = PIXI.Sprite.from("images/atlas/plane.png");
    const me = PIXI.Sprite.from("images/sprite/01.png");
    // set x, y, width, height
    plane.height = 416 / 2;
    plane.width = 827 / 2;
    const y = app.screen.height - plane.height - 80;
    plane.x += plane.width;
    plane.scale._x = -1;
    // now plane is right against left corner
    plane.x += 200;
    plane.y = y;

    me.height = 100;
    me.width = 50;
    me.y = app.screen.height - me.height - 20;
    me.x += plane.width;
    me.scale._x = -1;
    me.width = 50;
    me.x += 200;

    // function recurseUntilSpriteLoaded() {
    //     if (franticSchedule.height != 1) {

    //     } else {
    //         setTimeout(recurseUntilSpriteLoaded, 100);
    //     }
    // }
    // recurseUntilSpriteLoaded();

    scene.addChild(plane);
    scene.addChild(me);
    app.stage.addChild(scene);

    const button = document.createElement("button");
    button.textContent = "get on plane";
    button.onclick = () => getOnPlane();

    root.innerHTML += `
    <div style="${boringStyles}" id="sub-root">On the Friday before you fly out, Michal hugs you before leaving the office.</div>
    `;
    const subRoot = document.querySelector("#sub-root");
    button.style.marginTop = "2rem";
    subRoot.appendChild(button);

    function getOnPlane() {
        const t1 = 500;
        Tween.get(me, { loop: false }).to({ x: me.x + 150, y: y }, t1, createjs.Ease.easeInOut);

        setTimeout(() => planeMove(), t1 + 250);
    }
    function planeMove() {
        const t2 = 1500;
        Tween.get(scene, { loop: false }).to({ x: app.screen.width, y: -y }, t2, createjs.Ease.easeInOut);
        setTimeout(() => land(), t2);
    }
    function land() {
        const t3 = 1500;
        clearRoot();
        Tween.get(scene, { loop: false })
            .to({ x: -200, y: -y }, 0)
            .to({ x: app.screen.width - plane.width - 400, y: 0 }, t3);

        setTimeout(() => landingText(), t3 + 500);
    }
    function landingText() {
        button.onclick = () => {
            newScreen(scenePrior);
        };
        button.textContent = "next";
        button.className = "small";
        root.appendChild(button);
    }
}

function scenePrior() {
    // animate fire
    const scene = new PIXI.Container();
    const w = window.innerWidth > (window.innerHeight * 16) / 9 ? window.innerWidth : (window.innerHeight * 16) / 9;

    let fire = [
        PIXI.Sprite.from("images/atlas/fire/1.png"),
        PIXI.Sprite.from("images/atlas/fire/2.png"),
        PIXI.Sprite.from("images/atlas/fire/3.png"),
        PIXI.Sprite.from("images/atlas/fire/4.png"),
        PIXI.Sprite.from("images/atlas/fire/5.png"),
        PIXI.Sprite.from("images/atlas/fire/6.png"),
        PIXI.Sprite.from("images/atlas/fire/7.png"),
        PIXI.Sprite.from("images/atlas/fire/8.png"),
        PIXI.Sprite.from("images/atlas/fire/9.png"),
    ];
    for (let i = 0; i < fire.length; i++) {
        fire[i].height = (w * 9) / 16;
        fire[i].width = w;
        // TODO: set x and y.
    }
    fire = new AS(fire, scene);
    fire.animate();
    app.stage.addChild(scene);

    const bgImgStyles = `position: fixed; display: block; top: 50%; left: 50%; transform: translate(-50%, -50%)`;
    root.innerHTML = `
        <img src="images/atlas/prior-bg.png" style="z-index: -4; ${bgImgStyles}" width=${w}px height=${(w * 9) / 16}px>
        <img src="images/atlas/prior-fg.png" style="z-index: -2; ${bgImgStyles}" width=${w}px height=${(w * 9) / 16}px>
        <div
            id="x"
            style="position: relative; z-index: -3; color: white; max-width: 56rem; margin: 0 auto; text-align: center; transform: translateY(4rem); padding-bottom: 100vh;"
        >
        <!-- so it barely just goes off screen when scrolled to the max. -->
        When you arrive at Atlas, the bookshelves are lined with Klein bottles, pendulums, galton boards, ferrofluids, and borromean rings seifert surfaces. You decide that you instantly want to be friends with anyone who names their rooms the “bayes-ment” and the “schelling room.”
        <br/><br/><br/>
        You’re on the second floor balcony, “the prior”<br/>
        Named after the concept in Bayes’ theorem.<br/>
        Huddled under nighttime stars and pink fuzzy blankets<br/>
        Around blue and orange flames<br/>
        Janet, Galen, John, and I<br/>
        Each of us from a different country<br/>
        Just flown a few hours ago<br/>
        Jet lag weighs down my eyelids<br/>
        But before I knew it’s 2am and<br/>
        Our words carry the weights of our hearts<br/>
        Deep conversation is emotional fuel<br/>
        <br/><br/>
        Atlas was<br/>
        Stairs named “Gradient Descent”<br/>
        Learning a third of multivar in one night<br/>
        Abortion debates where labels disappear<br/>
        Sydney: “I don’t lie, because the ability to enter social contracts is higher utility in the long run.”<br/>
        Aaron: “I wouldn’t defect on the last game of iterated prisoner’s dilemma”<br/>
        Daniel: "Health insurance should be a human right. It means raising taxes a lot, but it's worth it."<br/>
        Eli: “Don’t tell me your theory, tell me your observations”<br/>
        I learn I love disagreement<br/>
        Foreign opinions are electricity through my veins<br/>
        <br/><br/>
        Atlas was<br/>
        One floor underground, the “Bayes-ment”<br/>
        A new moleskin notebook<br/>
        Third page titled “New ideas that excite me”<br/>
        My pen never fast enough<br/>
        <br/><br/>
        Atlas was<br/>
        Hugging Janet before<br/>
        Flying home tears on my cheeks<br/>
        A glimpse into the Library of Alexandria<br/>
        Two weeks never enough<br/>
        <br/><br/>
        I hope<br/>
        I can go to MIT or Stanford or a coliving house<br/>
        Somewhere I can see ideas in the air again
        <br/><br/>
        <br/><br/>

        <button style="color: white" id="next-button" onclick="newScreen(slideApps)">next</button>
        </div>
    `;

    // go from #canvas -> #x
    // $(document).on("click", ".b", function(){ $(".a").click(); });
    // document.addEventListener("click", (e) => {
    //     const b = document.getElementById("next-button");
    //     b.click();
    // });

    document.addEventListener("scroll", () => {
        const b = document.getElementById("next-button");
        const x = document.getElementById("x");
        console.log(b.getBoundingClientRect().top);
        if (b.getBoundingClientRect().top + b.getBoundingClientRect().height / 2 < window.innerHeight / 2) {
            x.style.zIndex = 0;
        } else {
            x.style.zIndex = -3;
        }
    });
}

// additonal, if we have next slide.
// atlas makes u more https://updately.us/@Laura-Gao-mXDtPhnMp5kCYvjnLUaYVc/2022-09-24-Atlas-er-changed-me-dh1pnKbKPFsEfBUu6Cs9C4 confident and etc.
// and crave deep convos
// but you kinda turn into a jerk (metal monkey)
// it takes x, y, z for you to decide to be honest.
