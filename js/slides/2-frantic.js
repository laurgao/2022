function slideFranticSchedule() {
    // document.body.style.overflow = "hidden"; // hide scroll bar

    const scene = new PIXI.Container();
    const franticSchedule = PIXI.Sprite.from("images/frantic-schedule-1.png");
    const franticSchedule2 = PIXI.Sprite.from("images/frantic-schedule-2.png"); franticSchedule2.alpha = 0;

    const zoomedSchedule = PIXI.Sprite.from("images/schedule-zoomed-out.png");

    // console.log(PIXI.Loader.shared)
    // var x = PIXI.AssetLoader;

    const div = document.createElement("div");
    const divBlank = document.createElement("div");
    divBlank.style.height = `${1000}vh`;
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

            franticSchedule2.height = app.screen.height;
            franticSchedule2.width = newW;

            // document.body.style.height = `${franticSchedule.width / app.screen.width}vh`;

            scene.addChild(franticSchedule);
            scene.addChild(franticSchedule2);
            scene.addChild(zoomedSchedule);
            // const w = app.screen.width * 0.5625 < app.screen.height ? app.screen.height * 0.5625 : app.screen.width;
            // const h = app.screen.height * 0.5625 < app.screen.width ? app.screen.width * 0.5625 : app.screen.height;

            app.stage.addChild(scene);
            div.style.left = `${newW + app.screen.width / 2 - document.documentElement.scrollTop}px`;

            window.addEventListener("scroll", function (e) {
                div.style.left = `${newW + app.screen.width / 2 - document.documentElement.scrollTop}px`;
            })

            zoomedSchedule.x = newW + app.screen.width * 0.75;
            zoomedSchedule.height = app.screen.height;
            zoomedSchedule.width = app.screen.height / 0.5625;


        } else {
            setTimeout(recurseUntilSpriteLoaded, 100);
        }
    }
    recurseUntilSpriteLoaded();

    //     <p style="position: relative; left: 70vw; width: 40rem">
    // Your Laura complex prevents you from doing a task without devoting all of yourself. It hurts you to not. You can't write a physics lab report without using overleaf and learning latex, because that would make it look more like a scientific paper. You can't just write a silly quantum mechanics story without bringing in mathematical formulations of entanglement. You can't make a website for CS class without bringing in the React.js and typescript, using a logarithmic function to adjust for the zoom-in as you scroll down. You think of a reddit comment: "Don't half-ass two things, whole-ass one thing."
    // </p>

    //

    div.style.position = "fixed";
    div.className = "h-screen"
    // div.style.top = "50%";
    // div.style.transform = "translateY(-50%)"
    //  done in the cracks of free time between the unmoving bricks of classes. 

    // A disjointed, unrelated task every day that leaves no time for Scratchpad, your supposed big project. This calendar makes you want to puke. You hate the unmoving bricks up classes that eat away your prime working hours. You're angry how you bend like wet spaghetti to tasks other people want you to do, but then

    // You think about what Harrison, your TKS director said: if you don't have time for xyz, it's because you didn't make time for it. Everyone has the same 24 hours a day. How you spend your time is a reflection of your priorities. 

    // There will always be an excuse. A test tomorrow. A lab next week. A Spinoza book dad wants you to read.

    // If you don't fight for your priorities, no one else will. You resolve that from now on, you won't let things that matters the most to be at the mercy of things that matter less.

    // This calendar makes you want to puke: A disjointed, unrelated task every day. You haven't touched Scratchpad, your supposed big project, for the past 2 weeks. You're angry at the unmoving bricks of classes that eat up all your prime working hours, how you bend like but then
    // <br/><br/>
    // You think about what Harrison, your TKS director said: if you don't have time for xyz, it's because you didn't make time for it. Everyone has the same 24 hours a day. How you spend your time is a reflection of your priorities. 
    // <br/><br/>
    // There will always be an excuse. A test tomorrow. A lab next week. A Spinoza book dad wants you to read.
    // <br/><br/>
    // You resolve that from now on, you won't let things that matters the most to be at the mercy of things that matter less. You'll stop putting off what you want to do for what other people want to do.
    div.innerHTML = `
    <p style="width: 40rem; position: relative; top: 50%; transform: translateY(-50%)">

        ${addBr(`A disjointed, unrelated task every day that leaves no time for Scratchpad, your supposed big project. This calendar makes you want to puke. You hate the unmoving bricks up classes that eat away your prime working hours. You're angry how you bend like wet spaghetti to tasks other people want you to do, but then

        You think about what Harrison, your TKS director said: if you don't have time for xyz, it's because you didn't make time for it. Everyone has the same 24 hours a day. How you spend your time is a reflection of your priorities. 
    
        There will always be an excuse. A test tomorrow. A lab next week. A Spinoza book dad wants you to read.
    
        If you don't fight for your priorities, no one else will. You resolve that from now on, you won't let things that matters the most to be at the mercy of things that matter less.`)}
    </p>
    <p style="width: 40rem; position: absolute; left: 100vw; bottom: 70vh">
    You're reminded of a tweet:
    Only the disciplined are free in life. The undisciplined are a slave to their passions, their emotions.
    <br/><br/>
    Only those who set their own priorities are free. The rest - a slave to other people grabbing chunks of their calendar for themselves like hunks of meat.
    </p>
    <button onClick="newScreen(slideFrench)" style="position: absolute; left: 150vw">next</button>

    `
    // <button class="small" onclick="() => console.log('pls')" style="position: absolute; left: 150vw">next</button>

    // create small button that says "next"
    // const b = document.createElement("button");
    // b.className = "small";
    // b.style.position = "absolute";
    // b.style.left = "150vw";
    // b.onclick = () => {
    //     newScreen(slideFrench)
    // };

    // div.appendChild(b);
    root.appendChild(div);
    root.appendChild(divBlank)


    var imageNumber = 1;
    // var prevScrollTop = document.documentElement.scrollTop;
    // move the schedule to the left on scroll
    const handleScroll = (e) => {
        // console.log(document.body.scrollTop) // 0
        // var goingDown = document.documentElement.scrollTop > prevScrollTop;

        Tween.get(scene, { loop: false })
            .to({ x: -document.documentElement.scrollTop + app.screen.width / 4 }, 200, createjs.Ease.linear)
        // .to({ x: goingDown ? franticSchedule.x - 200 : franticSchedule.x + 200 }, 200, createjs.Ease.linear)

        if (imageNumber === 1 && scene.x < app.screen.width / 8) {
            // switch to second image
            Tween.get(franticSchedule2, { loop: false })
                .to({ alpha: 1 }, 500)

            Tween.get(franticSchedule, { loop: false })
                .to({ alpha: 0 }, 500)
            imageNumber = 2;
        } else if (imageNumber === 2 && scene.x > 0) {
            // switch to first image
            Tween.get(franticSchedule2, { loop: false })
                .to({ alpha: 0 }, 500)

            Tween.get(franticSchedule, { loop: false })
                .to({ alpha: 1 }, 500)
            imageNumber = 1;
        }
        // prevScrollTop = document.documentElement.scrollTop;
    }
    window.addEventListener("scroll", (e) => {
        // console.log(document.body.scrollTop) // 0
        // var goingDown = document.documentElement.scrollTop > prevScrollTop;

        Tween.get(scene, { loop: false })
            .to({ x: -document.documentElement.scrollTop + app.screen.width / 4 }, 200, createjs.Ease.linear)
        // .to({ x: goingDown ? franticSchedule.x - 200 : franticSchedule.x + 200 }, 200, createjs.Ease.linear)

        if (imageNumber === 1 && scene.x < app.screen.width / 8) {
            // switch to second image
            Tween.get(franticSchedule2, { loop: false })
                .to({ alpha: 1 }, 500)

            Tween.get(franticSchedule, { loop: false })
                .to({ alpha: 0 }, 500)
            imageNumber = 2;
        } else if (imageNumber === 2 && scene.x > 0) {
            // switch to first image
            Tween.get(franticSchedule2, { loop: false })
                .to({ alpha: 0 }, 500)

            Tween.get(franticSchedule, { loop: false })
                .to({ alpha: 1 }, 500)
            imageNumber = 1;
        }
        // prevScrollTop = document.documentElement.scrollTop;
    });

    // you hate this schedule. you think of what ur tks mentors said: if u dont have time for sth it's bc
    // you didn't make time for it. everyone has the same 24 hours a day. they decide how to spend that time.
    // u decide what ur priorities are.
    // so i decide if xyz is my priority. i don't let anythign else stop it! 
    // "things that matter more should nvr be at the mercy of things that matter less"  
    // i resolve even if i have test next day -- there is always excuse ot not do what matters
    // the most! so i do wahte matters most yada yada yada


    // the Sellout's dilemma
    // hmm so what is the important thing? fuck it's 2-3 weeks till b2. i guess it bettr be french.

}