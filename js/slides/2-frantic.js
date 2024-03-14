text1 = `A disjointed, unrelated task every day that leaves no time for Scratchpad, your supposed big project. This calendar makes you want to puke. You hate the unmoving bricks up classes that eat away your prime working hours. You're angry how you bend like wet spaghetti to tasks other people want you to do, but then

You think about what Harrison, your TKS director said: if you don't have time for xyz, it's because you didn't make time for it. Everyone has the same 24 hours a day. How you spend your time is a reflection of your priorities.

There will always be an excuse. A test tomorrow. A lab next week. A Spinoza book dad wants you to read.

If you don't fight for your priorities, no one else will. You resolve that from now on, you won't let things that matters the most to be at the mercy of things that matter less.`

text2 = `You're reminded of a tweet: Only the disciplined are free in life. The undisciplined are a slave to their passions, their emotions.

Only those who set their own priorities are free. The rest - a slave to other people grabbing chunks of their calendar for themselves like hunks of meat.`


function slideFranticSchedule() {
    const scene = new PIXI.Container();
    const franticSchedule = PIXI.Sprite.from("images/frantic-schedule-1.png");
    // const franticSchedule2 = PIXI.Sprite.from("images/frantic-schedule-2.png"); franticSchedule2.alpha = 0;
    const zoomedSchedule = PIXI.Sprite.from("images/schedule-zoomed-out.png");

    const div = document.createElement("div");
    const divBlank = document.createElement("div");
    divBlank.style.height = `${1000}vh`;
    divBlank.style.width = "20px";
    divBlank.style.zIndex = -3
    // divBlank.style.position = "absolute" // make it not impact other root content.

    let newW;
    function recurseUntilSpriteLoaded() {
        if (franticSchedule.height != 1) {

            const scaleFactor = app.screen.height / franticSchedule.height
            newW = franticSchedule.width * scaleFactor;
            franticSchedule.height = app.screen.height;
            franticSchedule.width = newW;
            scene.x = app.screen.width / 4;

            // franticSchedule2.height = app.screen.height;
            // franticSchedule2.width = newW;

            scene.addChild(franticSchedule);
            // scene.addChild(franticSchedule2);
            scene.addChild(zoomedSchedule);

            const text1Obj = new PIXI.Text(text1);
            text1Obj.x = newW + 450 - document.documentElement.scrollTop
            const textStyle = new PIXI.TextStyle({
                fontFamily: "FuturaHandwritten",
                wordWrap: true,
                wordWrapWidth: 640
            })
            text1Obj.style = textStyle
            text1Obj.y = app.screen.height * .5 - text1Obj.height * .5
            scene.addChild(text1Obj)

            // matches height of zoomedschedule to the screen height always.
            zoomedSchedule.x = newW + 450 + 640 + 450;
            zoomedSchedule.height = app.screen.height;
            zoomedSchedule.width = app.screen.height / 0.5625;

            const text2Obj = new PIXI.Text(text2);
            text2Obj.x = newW + 450 + 640 + 450 + (zoomedSchedule.width * .7) - document.documentElement.scrollTop
            text2Obj.style = textStyle
            text2Obj.y = 200

            scene.addChild(text2Obj)
            app.stage.addChild(scene);

        } else {
            setTimeout(recurseUntilSpriteLoaded, 100);
        }
    }
    recurseUntilSpriteLoaded();

    div.style.position = "fixed";
    div.className = "h-screen w-full flex items-center justify-center"
    div.style.transition = "opacity 500ms"
    div.style.opacity = 0

    // create button that says "next"
    const b = document.createElement("button");
    b.innerText = "next"
    b.onclick = () => {
        newScreen(slideFrench)
    };
    div.appendChild(b);

    root.appendChild(div);
    root.appendChild(divBlank);

    // var imageNumber = 1;
    // move the schedule to the left on scroll
    window.addEventListener("scroll", function (e) {
        const threshold = 10 * window.innerHeight - 1.4 * window.innerWidth

        Tween.get(scene, { loop: false })
            .to({ x: -document.documentElement.scrollTop + app.screen.width / 4 }, 20, createjs.Ease.linear)

        if (document.documentElement.scrollTop >= threshold) {
            div.style.opacity = 1
        } else {
            div.style.opacity = 0
        }

        // Honestly I'm gonna not switch to the second image because it doesn't rlly add much
        // and it makes it jankier.
        // if (imageNumber === 1 && scene.x < app.screen.width / 8) {
        //     // switch to second image
        //     Tween.get(franticSchedule2, { loop: false })
        //     .to({ alpha: 1 }, 500)

        //     Tween.get(franticSchedule, { loop: false })
        //     .to({ alpha: 0 }, 500)
        //     imageNumber = 2;
        // } else if (imageNumber === 2 && scene.x >= app.screen.width / 8) {
        //     // switch to first image
        //     Tween.get(franticSchedule2, { loop: false })
        //     .to({ alpha: 0 }, 500)

        //     Tween.get(franticSchedule, { loop: false })
        //     .to({ alpha: 1 }, 500)
        //     imageNumber = 1;
        // }
    });
}