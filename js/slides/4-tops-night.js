const objStyles = "border: black 3px solid; padding: 2rem; border-radius: 1rem;";
framedObjComponent = (innerHTML, exhibitName, x, y, extra) =>
    `<div style="position: absolute; left: ${x}rem; top: ${y}rem;">
        ${extra ? extra : ""}
        <div style="${objStyles} ${extra ? "margin-top: 1rem;" : ""}">${innerHTML}</div>
        <p style="font-weight: 700; margin-top: 1rem;">${exhibitName}</p>
    </div>
    
    
    `;

function createButton(text, onclick) {
    const button = document.createElement("button");
    button.textContent = text;
    button.onclick = onclick;
    return button;
}

function nextSlide() {
    canvas.style.zIndex = -1; // reset
    newScreen(slideZapata);
}

function slideTN() {
    window.scrollTo(0, 0);
    canvas.style.zIndex = 1;

    // html shit
    var ss = 70;
    var sss = 80;
    var x = 0;
    var y = 0;
    root.innerHTML = `
    <div class="flex" style="position: absolute; top: 0; left: 0;" id="root-sub">

        <div style="min-width:40rem;max-width: 40rem;margin: 2rem; z-index: -2;">
            <h1 style="font-weight: bold">TOPS Night</h1>
            <p>You came into TOPS Night excied to edit videos. You left with a greater appreciation of the art of inspiring team members to have the same dream that you do.</p>

            <br/>
            <b>Quick stats</b>
            <p>Time spent: 150-200 hours</p>
            <p>When: June 10 - Jul 28</p>
            <p>(recording production) team combined hours: 400-500</p>
            <p>Main contributors: Gloria, JW, Sarah</p>
            <p>ty to Amy L, Quan, Theo, Alvin, Amy J</p>
            <br/>
            <p class="text-stone-500">Scroll around.</p>

        </div>


        ${framedObjComponent(`<div style="position: relative; z-index: 3">${igEmbed}</div>`, "Exhibit D: hype reel", 40, 130 /*50, 20*/)}

        ${framedObjComponent(`<img src="images/topsnight/467mb.png"></img>`, "Exhibit E: editor struggles", 10, 40)}
        ${framedObjComponent(
        `<a href='https://www.instagram.com/topsnight22/'><img src="images/topsnight/insta.png"></img></a>`,
        // "Exhibit F: <a href='https://www.instagram.com/topsnight22/'>Lowkey proud of this feed</a>", // links no work bc z-index
        "Exhibit F: Lowkey proud of this feed. @topsnight22 on instagram",
        80,
        10
    )}
        
        ${framedObjComponent(
        `
            <iframe style="position: relative; z-index: 2;" width="560" height="315" src="https://www.youtube.com/embed/VHsB_bHXdpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        "Exhibit A: TOPS Night 2022 Intro",
        125,
        80,
        `<p>
            While walking home from your editing session, Gloria suggests that
            you replicate the Marvel intro.<br/><br/>
            You download Maxon Cinema 4D, and the software is foreign. How
            do you zoom in? How do you even create a keyframe? Yea, there’s no
            way you can mimic *Marvel’s* editing.<br/><br/>
            But... gosh, it would look so cool. A professional-looking logo to
            commence a (hopefully) professionally-produced film. You must try.<br/><br/>
            Fast forward. 5 days of YouTube tutorials and desperate Reddit
            posts later. Pictures drop in like flipping comic book pages,
            colored footage play on the three-dimensional letters’ walls. You ask Quan to
            compose the TOPS Night 2022 theme song to gradually
            build up tension, and you feel like a *real* filmmaker, editing to custom-composed music.<br/><br/>
            Creating this piece was rediscovering the joy of perfectionism, of
            devoting all of your to every frame.
            </p>`,
        null
    )}

        ${framedObjComponent(`<img src="images/topsnight/chatreplay.png"/>`, "Exhibit B: TOPS Night premiere, Jul 28, 2022", 85, 100)}

        ${framedObjComponent(
        `<p style="width: ${ss}rem;">
                Fairview Mall's white lights pierce down. Two hard drives jut out my laptop. On screen, Annie belts, "If you find me, will you know me?" I splice in the closeup. The four of us must look funny, in a food court, surrounded by chit-chatting families.
                <br/><br/>
                Gloria, the sound sorceress. Splicing in audio at every microphone crack. She models a three-dimensional "TOPS Night," so I can animate a grand Marvel-style intro, footage replaying on the letters' walls.
                <br/><br/>
                JW, the overhead organizer. To release on Thursday, we'll start exporting on Monday. Without him, we could’ve premiered 3 weeks late instead of 1. 
                <br/><br/>
                Sarah, the color conqueror. She defeats the harsh stage lights; Annie’s dress blazes white. After the first draft, she sends over a page of my rushed cuts.
                <br/><br/>
                TOPS Night. Our magnum opus. A 2 hour 40 minute film. Goal: reawaken the TOPS tradition that COVID killed—fun performances, professional production.
                <br/><br/>
                The director. Behind her, SD cards cover her desk. A wizard of camera angles and special effects. Inspiring teammates to bleed the mission as much as she does. She looks at them now, crowded around her, and she hits play.
                <br/><br/>
                In the back of the room, three eighth-graders lean forward, a glint in their eyes. The same energy we had 3 years ago watching our first TOPS Night, excited for this new and dazzling high school.
            
            </p>`,
        "Exhibit C: Artistic interpretation.",
        5,
        sss
    )}

        <img src="images/topsnight/keyboard.png" style="position: absolute; top: 50vh; left: 50vw; transform: translate(-50%, -50%); z-index: -2;"/>
        
        <div style="position: absolute; width: ${ss + sss + 12 + 4}rem; height: ${160}rem;" id="absolute-pos-fuckery"></div>
    </div>
    <div style="position: absolute; width: ${ss + sss + 12 + 4}rem; height: ${160}rem; z-index: -10;"></div>
    `;

    const div = document.querySelector("#absolute-pos-fuckery");
    const button = createButton("next", () => nextSlide());
    button.style.position = "absolute";
    button.style.bottom = "4rem";
    button.style.right = "4rem";
    button.style.zIndex = 10;
    // button.style.left
    div.appendChild(button);

    // pixi shit
    const person = new PIXI.Container();
    const personStill = PIXI.Sprite.from("images/sprite/01.png");
    let personMoving = [
        PIXI.Sprite.from("images/sprite/02.png", { resourceOptions: { createBitmap: false } }),
        PIXI.Sprite.from("images/sprite/03.png"),
        PIXI.Sprite.from("images/sprite/04.png", { resourceOptions: { createBitmap: false } }),
        PIXI.Sprite.from("images/sprite/05.png"),
    ];

    // personLeft.height = 200;
    // personLeft.width = 100;
    for (let i = 0; i < personMoving.length; i++) {
        personMoving[i].height = 200;
        personMoving[i].width = 100;
    }

    personMoving = new AS(personMoving, person);
    personMoving.hide();

    person.addChild(personStill);
    personStill.height = 200;
    personStill.width = 100;
    // personStill.scale._x *= -1; // works.
    person.pivot.x = 50;
    person.pivot.y = 100;
    person.x = app.screen.width / 2;
    person.y = app.screen.height / 2;
    // personStill.scale.y = -1 // doesnt work >:( for either.
    // animate(personLeft)
    app.stage.addChild(person);

    const arrowKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    let isFacingLeft = true;

    const rootSub = document.querySelector("#root-sub");
    const speed = 10;
    document.addEventListener("keydown", (e) => {
        if (arrowKeys.includes(e.key)) {
            e.preventDefault();
            if (!personMoving.visible) {
                personStill.alpha = 0;
                personMoving.animate();
            }
            // scale is always 1 or -1 for container.
            if (e.key === "ArrowLeft") {
                x += speed;
                // left: 37
                if (!isFacingLeft) {
                    person.scale.x *= -1;
                    isFacingLeft = true;
                }
            } else if (e.key === "ArrowRight") {
                x -= speed;
                if (isFacingLeft) {
                    person.scale.x *= -1;
                    isFacingLeft = false;
                }
            } else if (e.key === "ArrowUp") {
                y += speed;
            } else {
                y -= speed;
            }
            rootSub.style.left = x + "px";
            rootSub.style.top = y + "px";
        }
    });

    document.addEventListener("keyup", (e) => {
        if (arrowKeys.includes(e.key)) {
            // stopAnimate(personLeft);
            personMoving.hide();
            personStill.alpha = 1;
        }
    });
}

const igEmbed = `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/tv/CgdOoMAD3tG/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/tv/CgdOoMAD3tG/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Voir cette publication sur Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/tv/CgdOoMAD3tG/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Une publication partagée par TOPS Night (@topsnight22)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>`;
