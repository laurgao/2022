

function slideFrench() {
    // noooo first: u have to be grudging!! u want to er not . u wanna webdev first.
    sceneDilemma();


    // sceneVideo(sceneSettings);
}


function sceneDilemma() {
    setupMeAtDesk();
    //     <div style="border: 3px black solid; padding: 2rem; text-align: center">
    //     <h2>Code</h2>
    // </div>
    // <div>
    // </div>

    const popupStyles = "display: absolute; visibility: hidden; max-width: 20rem; background-color: black; color: white; padding: 2rem; border-radius: 1rem;"
    // <div class="flex justify-center items-center">

    root.innerHTML = `
        <div style="padding: 2rem; text-align: center">
            <h1>So now, what is your top priority?</h1>
            <div class="flex justify-center items-center">
                <button onmouseover="showCode()" onmouseleave="hideCode()" onclick="clearRoot();sceneCode();">code</button>
                <button onmouseover="showFr()" onmouseleave="hideFr()" onclick="clearRoot();sceneFr();">french</button>
            </div>
            <div class="flex justify-center items-center">
            <div
            <div id="code" style="${popupStyles}">
                    <ul>
                        <li>You have fun</li>
                        <li>You have a notetaking app to take notes exactly in the system you want it</li>
                        <li>You're becoming a better programmer, skills will probably pay dividends in the future</li>
                    </ul>
                </div>
                <div id="fr" style="${popupStyles}">
                    <ul>
                        <li>You can to go EPFL, one of the best STEM universities in Europe</li>
                        <li>Your exam is in 3 weeks</li>
                        <li>You try your hand at self-studying supposedly "the hardest thing to learn"</li>
                    </ul>
                </div>
            </div>
        </div>
    `

}

function showFr() {
    const x = document.querySelector("#fr")
    x.style.visibility = "visible"
}


function hideFr() {
    const x = document.querySelector("#fr")
    x.style.visibility = "hidden"
}

function showCode(e) {
    const x = document.querySelector("#code")
    x.style.visibility = "visible"
}


function hideCode() {
    const x = document.querySelector("#code")
    x.style.visibility = "hidden"
}

const sceneCode = () => {
    root.innerHTML = `
        <div style="${meTableTextStyles}">
            Exactly. Why let dad dictate how you spend your time?
            <br/><br/>

            Seems like the right choice... or is it?
            <br/><br/>

            You imagine yourself in the exam room. You stare at the alphabet soup on the page and you're dizzy. Your answer sheet is blank, but you pray for the hour to end.
            <br/><br/>
            
            You sign up for the next B2 test in 3 months. More studying. 3 weeks now can save you 3 months of shame later.
            <br/><br/>

            Your number one priority will be French...
            <br/><br/>
            <button onclick="clearRoot();sceneFr2()">...you decide</button>
        </div>
    `

}

// In a journal entry that night, you write:
// <br/><br/>

// <blockquote>
//     Duolingo 10, or even 30 mins a day is not that bad. But any time over, and def over an hour, becomes a hedonic treadmill for XP. That’s how long it takes for you to lose sight of the bigger picture, and get consumed by desire for shiny object.
// </blockquote>

//        You try to convince yourself that you really do want to do Fren

{/* <br/><br/> */ }
//

const sceneFr2 = () => {
    root.innerHTML = `
    <div style="${meTableTextStyles}">


        They say immersion is the best way to learn a language. You can't go to France, but you guess you can...
        <br/><br/>
        <button onclick="newScreen(sceneVideo);">...pretend to be French for a few weeks</button>
    </div>
`

}

function sceneFr() {
    root.innerHTML = `
    <div style="${meTableTextStyles}">
        Exactly, web development is mostly just instant gratification anyway.
        <br/><br/>
        You think you're good at self-studying because you learnt full stack web development and quantum computing. But the internet is basically built for aspiring coders. All those "python for beginners" courses. Languages, on the other hand, are supposedly the most difficult thing to learn. My dad spent 10 years trying to improve his English, and he still sometimes has trouble understanding his colleagues.

        <br/><br/>
        <button onclick="sceneFr2();">do French</button>
    </div>
    `
}


function sceneVideo() {
    // const scene = new PIXI.Container();

    // // Setup:
    // // Duolingo journal entry
    // // Think like a native speaker.
    // // A native speaker wouldn't be indulging in English physics videos.

    // // load yt images.
    // const video1 = PIXI.Sprite.from("images/video-3b1b.png");
    // const video2 = PIXI.Sprite.from("images/video-fr.png");
    // const video3 = PIXI.Sprite.from("images/video-me.png");


    // function recurseTillLoaded() {
    //     if (video1.width != 1) {
    //         const m = 2 * 4; // 2rem
    //         // let w = app.screen.width - 2 * m
    //         let w = 900;


    //         let scaleFactor = w / video1.width;
    //         const h = video1.height * scaleFactor;

    //         // const minH = h * 3 + 4 * m
    //         // if (minH > app.screen.height) w = w/minH * app.screen.height
    //         // console.log(minH, app.screen.height)
    //         // scaleFactor = w / video1.width;

    //         const mx = (app.screen.width - w) / 2

    //         video1.height *= scaleFactor;
    //         video1.width = w;
    //         video2.height *= scaleFactor;
    //         video2.width = w;
    //         video3.height *= scaleFactor;
    //         video3.width = w;

    //         video1.x = mx
    //         video2.x = mx
    //         video3.x = mx

    //         video2.y = 1 * m + h;
    //         video3.y = 2 * m + 2 * h;

    //         scene.y = app.screen.height - (h * 3 + 2 * m + 5 * m) // make it 5m from bottom.
    //     } else {
    //         setTimeout(recurseTillLoaded, 100);
    //     }
    // }
    // recurseTillLoaded();

    // video2.on("mousedown", () => {
    //     console.log("hhh")
    //     newScreen(sceneSettings);
    // })

    // 1644/303
    const w = 800; // mvp = not responsive skull
    const h = w * 303 / 1644;
    document.body.style.backgroundColor = "white"

    root.innerHTML = `
    <div style="text-align: center; padding: 2rem; margin: 0 auto; justify-content: space-evenly;" class="flex flex-col h-screen items-center">
    <div>
        <h1>Watch the French video</h1>
        <p>A French person would not binge physics videos in English.</p>
    </div>
    <div class="flex flex-col">
        <img src="images/video-3b1b.png" width=${w} height=${h} style="margin-bottom: 2rem;" />
        <img src="images/video-fr.png" width=${w} height=${h} style="margin-bottom: 2rem; cursor: pointer" onclick="newScreen(sceneSettings);" />
        <img src="images/video-me.png" width=${w} height=${h} />
    </div>
    </div>
    `

    // scene.addChild(video1);
    // scene.addChild(video2);
    // scene.addChild(video3);

    // app.stage.addChild(scene);

}

function sceneSettings() {
    document.body.style.backgroundColor = "#f5f5f4" // reset from scene video
    // console.log("hhh")
    sceneRecap();
}


function sceneRecap() {
    setupMeAtDesk();
    root.innerHTML = `
        <div style="${meTableTextStyles}">
        ${addBr(`You type "quark definition." Google's first result: "Particule fondamentale électriquement chargée."

        Sigh. Life would be easier if you don’t have to use your brain every time you Google.

        Reading <i>Boule de Suif</i> is walking in a pool, water pushing your leg back with every step. You copy down each sentence, arrows swimming across the page, ever second word is highlighted with a definition scribbled next to it.

        You fall asleep listening to <i>Le precepteur</i>. A stream of unrecognizeable sounds; once in a while you catch a "bonjour."

        French makes you want to bonk your head against the wall. Unlike web development, there are no signs of progress. A week later, you aren't sure if your skills have improved.
        `)}
        
        <button onclick="clearRoot();a();">keep going</button>
        </div>
    `
}

function a() {
    root.innerHTML = `
    <div style="${meTableTextStyles}">
    ${addBr(`A month later. You passed the B2 exam. EPFL requires a B2 but heavily recommends C1. You're scared, because the guidelines say that a C1 speaker is "indistinguishable from a native speaker."
    
    A combination of sunk cost, challenging yourself, and wanting to make dad happy: the next three months is C1 prep. You put yourself on a coding ban: if you start, you won't stop. A distraction.

    Full immersion, you tell yourself. You write your blog posts and weekly reflections in French. You get a French chemistry textbook, so you can practice French while studying for school. You miss web dev, so you read through all the React hooks documentation in French.

    You watch French videos at least an hour a day. It's easier to stay awake if they're about <a href="https://youtu.be/M86YM6QA4-M">special relativity</a> or <a href="https://www.youtube.com/watch?v=kAm_I8nwjnc" target="_blank">Camus' absurdism</a>. 

    If you can get yourself to C1 level, you've made it in life, you think. This is probably the hardest exam you've ever taken. How many people can get from B2 to C1 in 3 months?`
    )}
    
    <button onclick="newScreen(b);">push through</button>
    </div>
`
}

// But the video is the artifact that would be remembered. You can produce a recording much better than a single camera. 
function b() {

    root.innerHTML = `
    <div style="${meTableTextStyles}">
    It's June 10. At your school bbq, you're walking around the track with Gloria. She tells you about the TOPS Night dress rehearsal after school today, how max attendance is 300 due to covid. A recording will be streamed online afterwards.
    <br/><br/>
    Ahh. TOPS Night.
    <br/><br/>

    You think about when you were in Grade 8. If you stretch your back straight, you can peak over the sea of heads. The curtain opens, the music rolls. In perfect sync, students sit on the desk, and swing their right legs over their left.
    <br/><br/>

    You walk home that night in awe of the production quality, with renewed excitement to join the charming student body.
    <br/><br/>

    "How are you guys planning to record?"
    <br/><br/>

    "I don't know. JW said something about sticking a camera in the center of the room. Honestly, not the main priority right now."
    <br/><br/>

    Yeah, you can imagine. JW and Gloria are busy enough already, trying to get all the performances lit properly. Grade-8-Laura would be proud if you...
    <br/><br/>
    
    <button onclick="clearRoot();c();">help reinvigorate TOPS Night?</button>
    </div>
`
    const bg = PIXI.Sprite.from("images/glowalk/glowalk-bg.png");
    bg.width = app.screen.width;
    const people = PIXI.Sprite.from("images/glowalk/glowalk-people.png");
    people.width = app.screen.width * 287 / 1920;
    people.x = app.screen.width * 300 / 1920// 1180
    people.y = app.screen.height - 405 - 8
    app.stage.addChild(bg);
    app.stage.addChild(people); // 287x405

}

//             <li>You work towards a goal you set 3 years ago, that you'll be professional and cool like previous generations of TOPS students. You'll feel warm inside.</li>

function c() {
    insertDilemma(
        {
            "buttonText": "TOPS Night",
            "nextScene": () => d1(),
            "descrip": `
            <ul>
                <li>You get to indulge in video editing: the second-most addicting work.</li>
                <li>You feel pretty confident about C1 already</li>
            </ul>
            `,
        },
        {
            "buttonText": "French",
            "nextScene": () => d2(),
            "descrip": `
            <ul>
                <li>TOPS Night is the day right before your C1 exam. You need to sleep well before big exams.</li>
                <li>C'mon mate, one more week. What a shame if you cop out now.</li>
                <li>Filmmaking is an artistic <i>hobby</i>, which means it doesnt detract from the, you know, <i>important</i> work.</li>
            </ul>
            `,
        },
    )
}

function d1() {
    root.innerHTML = `
    <div style="${meTableTextStyles}">
        Yea, you've been doing this "have 1 priority at a time" thing for the past few months. Multitasking, too, is a skill.
        <br/><br/>
    <button onclick="clearRoot();e();">let's get started</button>
    </div>
    `
}

function d2() {
    root.innerHTML = `
    <div style="${meTableTextStyles}">
        ${addBr(`You go home that night and listen to <i>Travailler en Profondeur</i>, the French audiobook of Cal Newport's <i>Deep Work</i>. Your daily routine, except today
        
        as you try to doze off, your mind drifts back. You were so excited to go to TOPS because you thought you can be part of a student body that could create such professional production. You watched last year's livestream dreaming about how you'd edit it, when it was your grade's turn. You wouldn't be able to live with yourself if you didn't try.

        Gloria told you how she basically just decided to take charge of stage operations. You think of a quote:
        `)}

        <blockquote>
        There are two kinds of people, those who do the work and those who take the credit. Try to be in the first group; there is less competition there.
        <br/><br/>
        ⁠—Indira Gandhi
        </blockquote>

        ${addBr(`
        You decide that you'll just take charge of the filming and production of the recording.`)}

        <button onclick="clearRoot();e();">let's get started</button>

    </div>
    `
}

// You're going to record every performance from 3 camera angles, you decide. 
function e() {
    root.innerHTML = `
    <div style="${meTableTextStyles}">
        ${addBr(`
        A full Saturday editing the graduation video, motion tweening the text, planning the camera angles. A breath of fresh air after stepping off a crowded train. It's been a while.

        A few excited spiels about cutting between closeup and wide shots as the music flows. You get a couple of friends to man the 4 cameras.
        
        Some classmates went out to get you bubble tea a couple hours ago, but it sits untouched in the back room. You check your watch, and you realize you've been continuously standing in tight black boots for 5 hours.

        You get home that night at 11pm. There goes your pre-exam restful sleep.
        `)}

        <button onclick="newScreen(slideTN);">welp</button>

    </div>
    `
}