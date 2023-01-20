function flyBack() {
    const scene = new PIXI.Container();
    const plane = PIXI.Sprite.from("images/atlas/plane.png");
    const me = PIXI.Sprite.from("images/sprite/01.png")
    // set x, y, width, height
    plane.height = 416 /2;
    plane.width = 827/2;
    const y = app.screen.height - plane.height - 80 
    plane.x += 200
    plane.y = y;

    me.height = 100;
    me.width = 50;
    me.y = app.screen.height - me.height - 20;
    me.x += plane.width
    me.width = 50;
    me.x += 200;

    // function recurseUntilSpriteLoaded() {
    //     if (franticSchedule.height != 1) {
            
    //     } else {
    //         setTimeout(recurseUntilSpriteLoaded, 100);
    //     }
    // }
    // recurseUntilSpriteLoaded();


    scene.x = app.screen.width - plane.width - 400
    scene.addChild(plane);
    scene.addChild(me);
    app.stage.addChild(scene);

    const button = document.createElement("button")
    button.textContent = "fly home"
    button.onclick = () => getOnPlane();

    root.innerHTML += `
    <div style="float: right; ${boringStyles}" id="sub-root">
        Atlas makes you <a href="https://updately.us/@Laura-Gao-mXDtPhnMp5kCYvjnLUaYVc/2022-09-24-Atlas-er-changed-me-dh1pnKbKPFsEfBUu6Cs9C4">a lot more confident and a little too arrogant</a>. A new appreciation for radical honesty, but you kind of <a href="https://www.lauragao.ca/essays/im-a-metal-monkey">turn into a jerk</a>.
        <br/><br/>
        it takes <a href="https://chrislakin.substack.com/p/thoughts-on-and-conjectures-about">finite and infinite games</a>, <a href="https://www.patreon.com/posts/whats-nicky-risk-63289449">functional decision theory</a>, <a href="https://slatestarcodex.com/2014/07/30/meditations-on-moloch/">Meditations on Moloch</a>, a friend "Laura, I don't think I can trust you anymore" and hours-long talks past midnight for you to decide you'll <a href="https://www.lauragao.ca/essays/civilizational-inadequacy">almost-categorically follow honesty and integrity.</a>
        <br/><br/>
        For the first time, your peers are like you---wholly nerdy, half rationalist, mildly awkward. It's warm.
        <br/><br/>

    </div>
    `
    const subRoot = document.querySelector("#sub-root")
    button.style.marginTop = "2rem"
    button.style.float = "right"
    button.style.marginRight = "4rem"
    subRoot.appendChild(button);

    function getOnPlane() {
        button.onclick = null; // so u cant get on plane twice.
        const t1 = 500;
        Tween.get(me, { loop: false })
        .to({ x: me.x - 250, y: y }, t1, createjs.Ease.easeInOut)

        setTimeout(() => planeMove() ,t1+250)
    }
    function planeMove() {
        const t2 = 1500;
        Tween.get(scene, {loop: false})
        .to({x: -200, y: -y}, t2, createjs.Ease.easeInOut)
        setTimeout(() => land(), t2)
    }
    function land() {
        const t3 = 1500;
        clearRoot();
        root.style.opacity = 
        Tween.get(scene, {loop: false})
        .to({x: app.screen.width - plane.width, y: -y}, 0, )
        .to({x: 0, y: 0}, t3)

        // <div class="flex items-center justify-center w-screen h-screen">
        root.innerHTML = `
            <div style="position: relative; text-align: center; max-width: 56rem; color: white; margin: 2rem auto; top: 50%; transform: translateY(-50%)" id="containerz">
                <p style="text-transform: uppercase; font-size: 1rem; opacity: 0.5; margin-bottom: 2rem;">September 2022, Toronto</p>
                <h1 style="margin-bottom: 2rem;">The Sellout's Dilemma, Round 3</h1>
                <p style="font-size: 1.5rem; opacity: 0.8"> the final boss: university applications</p>
            </div>
        `
        // </div>

        body.style.transition = "background-color 2s"
        body.style.backgroundColor = "#292524" // stone 800

        button.onclick = () => {
            // reset
            body.style.backgroundColor = "#f5f5f4"
            setTimeout(() => xyz.removeChild(button), 2000);
            appsA()
        }
        button.style.visibility = "hidden"
        button.style.color = "white"
        button.style.float = "" // reset
        button.textContent = "play"
        button.className = "small"
        const xyz = document.getElementById("containerz")
        xyz.appendChild(button);

        setTimeout(() => landingText(), t3+500)
    }
    function landingText() {
        button.style.visibility = "visible"
    }
}

const meTableTextStyles = "padding: 2rem; text-align: right; max-width: 50vw; float: right"

function appsA() {
    app.stage.removeChildren();
    setupMeAtDesk();
    const xyz = document.getElementById("containerz")
    xyz.style.transition = "top 2s, color 2s, transform 2s"
    xyz.style.top = "0%";
    xyz.style.transform = "translateY(0%)";
    xyz.style.color = "black";
    

    setTimeout(() => root.innerHTML += `
    <div style="text-align: center; max-width: 56rem; margin: 0 auto;">
        <p>
            It’s September. You give a 15-minute presentation wrapping up your work this internship. You walk out of the Zapata office, knowing that it’ll probably be a few weeks, or months, before you’re back.
        <br/><br/>
            It’s September, and you should start writing university application essays. You don’t yet know how you’ll write, just that if you spend 5 hours a day for the next 7 weeks, you’ll probably get somewhere.        
        </p>
        <button onclick="appsB()">next</button>
    </div>
    `, 2000)
}


function appsB() {
    root.innerHTML = `<div style="${meTableTextStyles}">
        <p>
            You write in your journal this day:
            <br/><br/>
            <blockquote>
            Doesn't Atlas have a lower acceptance rate than Stanford? Didn't you think that your life would be complete “and now I can do what I want” when you got the C1, the same way you now feel towards college acceptance? If a uni label would simply be a more intense version of what I already have, would its attainment be enough? would I want the next big thing - "sure MIT is cool and all but a 300k job would make me look even cooler"? 
            <br/><br/>
            But what if writing college apps, arguably the most important thing I'll do all year and what will decide the people I spend the next 4 years with, is not the time to question my unyielding discipline?
            </blockquote>
            <br/><br/>
        </p>
        <button onclick="appsC()">next</button>
    </div>`
}

function appsC() {
    clearRoot();
    insertDilemma({
        "buttonText": "write essays",
        "descrip": "",
        "nextScene": appsD1,

    }, {
        "buttonText": "make an Atlas vlog",
        "descrip": "",
        "nextScene": appsD2,
    },  "<h1>Quoi faire?</h1>");
}

function appsD1() {
    root.innerHTML = `<div style="${meTableTextStyles}">
        <p>
            You worked 4 years of your high school to culminate in getting into university! What a shame if you cop out now.
            <br/><br/>
            After apps, you have all of second semester, January to June, free to do whatever: make a video a week. Redesign all of Scratchpad UI.
            <br/><br/>
            You decide to suck it up and work on applications for the next 4 months. But this really is the last one. Nothing after will be as important as applications. Then, you will start living your life.
            <br/><br/>
        </p>
        <button onclick="appsE()">write write write write write</button>
    </div>`
}

function appsD2() {
    root.innerHTML = `<div style="${meTableTextStyles}">
        <p>
            ${addBr(`You thought you made it after you got into TOPS. Then, 

            People told you grade 11 marks would matter the most. You’d better work harder, because it’d be much more difficult than gr 10. it wasn’t.
            
            Then, it was <i>you can code after you pass your C1</i>. Then, it was you’ll travel and live in SF for a month after application season—girl you worked 4 years of your high school to culminate in getting into university! What a shame if you cop out now.
            
            Next year, you’ll say you’ll have fun after you graduate college. Then, you’ll create that animated documentary after you get a job. Then, after you’re financially free. Then, after you get married. Then, after you retire.
            
            <i>Then, you’ll start living your life. Then, you’ll stop waiting for the day you no longer have to wait, when you stop sacrificing today for an imagined tomorrow.</i>
            
            Living your life how you want it can only come from the inside. It isn’t after any exam is over, or after any application. It is whenever you decide you’ll stop making excuses.
            
            But after apps, you have all of second semester, January to June, free to do whatever: make a video a week. Redesign all of Scratchpad UI.
            
            You decide to suck it up and work on applications for the next 4 months. But this really is the last one. Nothing after will be as important as applications. Then, you will start living your life.
            
            `)}
        </p>
        <button onclick="appsE()">write write write write write</button>
    </div>`
}

function appsE() {
    root.innerHTML = `<div style="${meTableTextStyles}">
        <p>
            ${addBr(`You start working on applications, and you’re meticulous about it. 

            Filmmaking would have lush brown hair billowing around her as you stare into her eyes. Your secret lover, a guilty indulgence, an education system that pushes you apart.
            
            Three more weeks, you tell yourself. Three more weeks, and then you submit. And then, no more applications. Then, I can spend as much time with her as I want. 
            
            Now, though, you have to clamp down. Make the MIT admissions officer feel your joy as you run out the door with her, your surroundings blurring around you.
            
            Ms. Brennan introduced you to Lungs by Maggie O’Farrell, how she makes you feel that repetitive mundanity of teenage life. Without telepathy or brain computer interfaces, you write to transmit your mental state into someone else’s head. Editing is the task of picking the metaphors, adjectives that wrap around your feelings like a soft blanket. Words you want to reach out and grab them and tuck them next to your heart. 
            
            Your base chance for MIT is 2% because you don’t have US citizenship, which means you need to be radical. After the admissions officer reads her 50 allocated applications for the day, she’ll go to sleep thinking about yours.            
            
            `)}
        </p>
        <button onclick="appsF()">a few weeks later...</button>
    </div>`
}

function appsF() {    
    root.innerHTML = `<div style="padding: 2rem; text-align: center; max-width: 56rem; margin: 0 auto;">
<p>
    ${addBr(`At the bus stop, you think about your English assignment, an argumentative essay. You want to write about sex—read some papers about your brain’s neurochemistry, explore what philosophies other than Buddhism and Stoicism say. You have a boyfriend now, so it’s no longer rainbow theory philosophy that will never be thought about outside debates.`)}
    </p>
    </div>`
    insertDilemma({
        "buttonText": "English",
        "descrip": "",
        "nextScene": appsG1,

    }, {
        "buttonText": "MIT",
        "descrip": "",
        "nextScene": appsG2,
    }, "<h1>Quoi faire?</h1>");
}

function appsG1() {
    root.innerHTML = `<div style="${meTableTextStyles}">
        <p>
            ${addBr(`But last year, you’re angry that your favourite coding projects were the game and website you made for your CS class. While your paper on quantum optimization algorithm sits unpublished, your personal website unupdated since last year. How your Laura Complex prevents you from working on a project without devoting all of yourself to it. A website with a car that drives down as you scroll forward because you think you know the javascript to make that happen, and you won’t be able to live with yourself if you didn’t try.

            <blockquote>“Things which matter most must never be at the mercy of things which matter least.” —Goethe.</blockquote>
            
            You’d rather have good MIT essays than a good English essay. You have to learn to make sacrifices in accordance with your own values, or else the world will choose them for you.
            
            `)}
        </p>
        <button onclick="appsH()">keep writing</button>
    </div>`
}

function appsG2() {
    root.innerHTML = `<div style="${meTableTextStyles}">
        <p>
            ${addBr(`Last your, your favourite coding projects were the game and website you made for your CS class. You're angry how this is all while your paper on quantum optimization algorithm sits unpublished, your personal website unupdated since last year. How your Laura Complex prevents you from working on a project without devoting all of yourself to it. A website with a car that drives down as you scroll forward because you think you know the javascript to make that happen, and you won’t be able to live with yourself if you didn’t try.

            <blockquote>“Things which matter most must never be at the mercy of things which matter least.” —Goethe.</blockquote>
            
            You’d rather have good MIT essays than a good English essay. You have to learn to make sacrifices in accordance with your own values, or else the world will choose them for you.
            
            `)}
        </p>
        <button onclick="appsH()">keep writing</button>
    </div>`
}

function appsH() {
    root.innerHTML = `<div style="${meTableTextStyles}">
        <p>
            ${addBr(`You hit submit. Confetti rolls down your screen. Your chest doesn’t magically untighten.
            
            `)}
        </p>
        <button onclick="appsI()">the road still carries on</button>
    </div>`
}


function appsI() {
    root.innerHTML = `<div style="${meTableTextStyles}">
        <p>
            ${addBr(`From the front of the room, Ms. Brennan calls out. “Laura, come up here.”

            Before you stand up, you already know what this is about.
            
            She gestures to the computer. “Laura Gao,” next to a blank document. 
            
            “Laura, what’s up? This is not like you.”
            
            There’s a reason she’s not scolding you for not handing in the assignment on time, asking if you have time management issues, telling you to stop misbehaving. I sense it in the way she doesn’t say anything more, like you betrayed an unwritten code of integrity. How she looks at you, her eyes, searching for an explanation.
            
            The same blue eyes you stared into when she said your common app essay showed her how obsessed you are with filmmaking and
            
            “Uh… I don’t know. I didn’t do it.” Any explanation you give will sound like an excuse, you think, so you try not to give one. Inevitably, a lame one slips out. “busy with applications, I guess.”
            
            You sense it in the way she tells you that now to focus on the summative, how you wordlessly go back to your desk and her lingering gaze on your back.
            
            What you should've said was: you’re right. It’s not like me. You should have said: It hurts me more to do a task mediocrely than to not do it at all. I’m so tired of waiting, of “one more assignment then I can code,” of “I’ll write my yearly review after exams,” I have the rest of my career to be a programmer after I graduate, of forcing myself to not touch javascript for the past 4 months. I have this sickness that I’m putting off my art, a sickness that grows every time I put off what is important in favour of what is urgent. American university applications was the last straw: a 4 month coding hiatus, my days are filled with “how does Maggie O’Farrell write <i>Lungs</i> such that we feel like we’re experiencing the sexual harassment with her,” “how do I write this essay that the MIT admissions officers will feel a whole in their heart after I leave Atlas,” forced to get good at a foreign craft. You can’t stand waiting another second before you work on a personal project: even if it’s for English, a course that pulled you through university applications and Ms. Brennan, who makes you see ideas in the air again. Even if it’s two weeks late, even if you’d promise to make your websites the moment exams are over; how can you trust that if you don’t keep your previous vow? You can’t stand your life. You can’t stand to be here, in this city, in this school, with these classmates who take computer engineering because it’s a “free 100.” You have to concentrate everything on going against the current, on preserving the bits of Laura left, against an education system that prefers you as a rule-following robot. You cannot bear for anything to slow you down, distract you; you vowed that nothing would, not after January 1st. You also should have said: thank you.
            
            Thank you, thank you.
            
            `)}
        </p>
        <button onclick="newScreen(concl)">forward</button>
    </div>`
}
