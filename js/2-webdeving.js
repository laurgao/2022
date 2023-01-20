function slide1() {
    // create div html element
    const div = document.createElement('div');
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.display = "flex";

    // You're reliving 2022, but as Laura Gao.
    // Play as me.
    // On January 1st, 2022, you are coding. You're building Scratchpad, an app to dump your messy notes without clogging your second brain.
    // Your mantra: build tools for your wfs, not wfs around tools.
    createLauraCircle();
    // On school days, you're a puppet dragged from one class to the next. The real day starts when you get home at 4. That's when you can deep work.
    
    div.innerHTML = `
        <div class="flex flex-col items-center justify-center w-screen h-screen text-center" style="z-index: 0;">
            <p style=" max-width: 500px;">
            On January 1st, you <br/>are developing Scratchpad.
            <br/><br/>
            You add a line of code, and the button shines <br/>with a bright sky blue. You feel powerful when programming; your fingers wielding magic.
            <br/><br/>
            You love winter break. Without the mandatory conveyor belt of a school day, you have the <br/>luxury of intensely pursuing your goals <br/>for 8 hours daily.                
            </p>
            <button onClick="clearRoot();slide2();">keep coding</button>
        </div>
    `

    root.appendChild(div);
}

function writeOn(element, newText, interval=200, delay=0) {
    // element.style.transition = "opacity 2000ms ease-in-out";
    // element.style.opacity = "0";
    // element.innerHTML = newText // fades in
    // element.style.opacity = 1
    // element.innerHTML = ""
    const words = newText.split(" ");
    // periods in regexpr need to be escaped.
    const timeTaken = (newText.split(" ").length - newText.split(/\.|,/).length - 1) * interval + (newText.split(/\.|,/).length-1) * 600
    let i = 0;
    // let intervalId = interval(() => addWord(i), 250);
    setTimeout(() => addWord(i), delay)
    const addWord = (idx) => {
        const word = words[idx];
        element.innerHTML += word
        if (idx === words.length - 1) {
            // clearInterval(intervalId);
        } else {
            element.innerHTML += " "
            i = idx + 1;

            if ([".", ","].includes(word.charAt(word.length - 1))) {
                // clearInterval(intervalId);
                setTimeout(() => addWord(i), 600);
            } else {
                setTimeout(() => addWord(i), interval);
            }
        }
    }
    return timeTaken;
}

function slide2() {
    const scene = new PIXI.Container();
    const sceneDoor = new PIXI.Container();
    const bg = PIXI.Sprite.from("images/scene-1-bg.png");
    const me = PIXI.Sprite.from("images/scene-1-me.png");
    const meDropped = PIXI.Sprite.from("images/scene-1-me-head-down.png");
    // add larm and rarm
    const larm = PIXI.Sprite.from("images/scene-1-larm.png");
    const rarm = PIXI.Sprite.from("images/scene-1-rarm.png");
    const journalGraph = PIXI.Sprite.from("images/commitment-graph.png");

    const w = app.screen.width * 0.5625 > app.screen.height ? app.screen.height / 0.5625 : app.screen.width;
    const ww = w * 0.7;
    picturesY = app.screen.height - ww * 0.5625;

    journalGraph.width = ww * 0.75;
    journalGraph.height = ww * 0.5625 * 0.75;
    journalGraph.x = ww * 0.6;
    journalGraph.y = app.screen.height - ww * 0.5625 //* 0.75
    journalGraph.alpha = 0.6

    me.width = ww;
    me.height = ww * 0.5625;
    meDropped.width = ww;
    meDropped.height = ww * 0.5625;
    bg.x = 0;
    bg.y = 0;
    bg.width = ww;
    bg.height = ww * 0.5625;
    larm.width = ww;
    larm.height = ww * 0.5625;

    const rarmOrigin = { x: 0.53, y: 0.5 };
    rarm.x = ww * rarmOrigin.x;
    rarm.y = ww * 0.5625;
    rarm.y *= rarmOrigin.y;
    rarm.width = ww;
    rarm.height = ww * 0.5625;

    let isTyping = true;
    // make left arm rotate in a repeating loop with Tween.js
    rarm.anchor.set(rarmOrigin.x, rarmOrigin.y);
    Tween.get(rarm, { loop: isTyping })
        .to({ rotation: 0.2 }, 200, createjs.Ease.linear)
        .to({ rotation: -0.1 }, 200, createjs.Ease.linear)


    // give larm same rotation as rarm
    larm_origin = {x: .54, y: 0.5};
    larm.anchor.set(larm_origin.x, larm_origin.y);
    larm.x = ww * larm_origin.x;
    larm.y = ww * 0.5625 * larm_origin.y;
    Tween.get(larm, { loop: isTyping })
        .to({ rotation: 0.2}, 200, createjs.Ease.linear)
        .to({ rotation: -0 }, 200, createjs.Ease.linear)
    
    scene.addChild(bg);
    scene.addChild(larm);
    scene.addChild(rarm);
    scene.addChild(me);

    // add door sprite
    const door = PIXI.Sprite.from("images/scene-1-door.png");
    door.width = ww;
    door.height = ww * 0.5625;
    sceneDoor.x = app.screen.width - ww;
    sceneDoor.addChild(door);

    scene.y = picturesY
    sceneDoor.y = picturesY

    // pause for 5 seconds
    // setTimeout(() => {}, 5000);

    // add 3 knock sprites
    const knock1 = PIXI.Sprite.from("images/scene-1-knock.png"); knock1.alpha = 0;
    const knock2 = PIXI.Sprite.from("images/scene-1-knock.png"); knock2.alpha = 0;
    const knock3 = PIXI.Sprite.from("images/scene-1-knock.png"); knock3.alpha = 0;
    // set rotation to negative 30 degrees
    // knock1.rotation = -0.5235987755982988;

    // set position to 0.8, 0.3
    knock1.x = ww * 0.8;
    knock1.y = ww * 0.5625 * 0.3;
    knock1.rotation = -0.5235987755982988;

    // set position to 0.9, 0.5; rotation to 20 degrees
    knock2.x = ww * 0.9;  
    knock2.y = ww * 0.5625 * 0.5;
    knock2.rotation = 0.3490658503988659;

    // set position to 0.7, 0.5; rotation to -10 degrees
    knock3.x = ww * 0.7;
    knock3.y = ww * 0.5625 * 0.5;
    knock3.rotation = -0.17453292519943295;
    

    // add to screen
    sceneDoor.addChild(knock1);
    sceneDoor.addChild(knock2);
    sceneDoor.addChild(knock3);

    // play typing sound
    const typing = new Audio("sound/typing.mp3");
    typing.play();
    setTimeout(() => typing.pause(), 5000);


    function knock() {
        typing.pause();
        isTyping = false;

        knocking = new Audio("sound/knocking.mp3");
        knocking.play();

        Tween.get(knock1, { loop: false })
        .to({alpha: 1}, 0)

        Tween.get(knock2, { loop: false })
        .wait(200)
        .to({alpha: 1}, 0)

        Tween.get(knock3, { loop: false })
        .wait(400)
        .to({alpha: 1}, 0)

        // create b utton saying "open door" html element
        const button = document.createElement('button');
        button.textContent = "open door";
        // on click, call opendoor function   
        button.onclick = () => {clearRoot();app.stage.removeChild(journalGraph);openDoor();}
        button.style.position = "absolute";
        button.style.bottom = "2rem";
        button.style.right = "2rem";

        // add button to screen
        root.appendChild(button);

        
    }

    function openDoor() {
        // make dad slide in
        const dad = PIXI.Sprite.from("images/scene-1-dad.png"); dad.x = ww;
        const talkingIndicatorMe = PIXI.Sprite.from("images/talking-indicator.png");
        const talkingIndicatorDad = PIXI.Sprite.from("images/talking-indicator.png");
        dad.width = ww;
        dad.height = ww * 0.5625;

        // add dad to screen
        sceneDoor.addChild(dad);

        // make dad slide in with tweenjs
        const t = 1000;
        Tween.get(dad, { loop: false })
        .to({x: ww}, 0)
        .to({x: 0}, t, createjs.Ease.linear)
        
        const button = document.createElement('button');
        button.textContent = "hi, dad!";
        button.style.position = "absolute";
        button.style.bottom = "2rem";
        button.style.left = "50%";
        button.style.transition = "opacity 0.5s ease-in-out";
        button.style.opacity = 0;

            
        const br = 1000;
        setTimeout(() => {
            button.style.opacity = 1;
            root.appendChild(button);
        }, t + br)

        // on click, call opendoor function
        button.onclick = () => {
            button.style.visibility = "hidden";
            const dadDiv = document.createElement("div")
            const descrip = document.createElement("div")
            descrip.style.backgroundColor = "#f5f5f4" // stone 100.
            const myDiv = document.createElement("div")
            root.style.padding = "2rem";
            root.style.textAlign = "center";
            root.appendChild(dadDiv);
            root.appendChild(descrip);
            root.appendChild(myDiv);

            talkingIndicatorMe.x = app.screen.width * 0.1;
            talkingIndicatorMe.y = app.screen.height * 0.2;

            talkingIndicatorDad.x = app.screen.width * 0.6;
            talkingIndicatorDad.y = app.screen.height * 0.05;
            // scene.addChild(talkingIndicatorMe);
            // scene.addChild(talkingIndicatorDad);
            myDiv.style.position = "absolute";
            myDiv.style.top = "16rem";
            myDiv.style.left = "20rem";

            dadDiv.style.position = "absolute";
            dadDiv.style.top = "8rem";
            dadDiv.style.right = "12rem";
            dadDiv.style.width = "36rem";
            
            descrip.style.position = "relative";
            descrip.style.textAlign = "left";
            // descrip.style.top = "50%";
            // descrip.style.left = "50%";
            // descrip.style.opacity = "0.5";
            descrip.style.color = "#78716c" // stone 500
            descrip.style.fontStyle = "italic";
            // descrip.style.width = "20rem"

            const t = writeOn(myDiv, "hi, dad")
            console.log(t)
            setTimeout(() => writeOn(dadDiv, "Just checking in. Have you been studying French?"), 1000) // 2000
            // TODO: move descrip to the left of me?
            setTimeout(() => writeOn(descrip, "Ah, right. French. If you pass the B2 level exam, you can apply to EPFL. A Swiss university.", 100)
            , 4000)

            const anJuLeYe = `You think about what dad told you. 安居乐业. An ancient Chinese proverb. First live in a safe place, then develop a career.
            <br/><br/>
            Dad abandoned his middle class job and your 3-bedroom apartment to move to Canada, a few years on minimum wage and 3 people sharing 1 bedroom. Going to college again; his PhD in China not mattering; learning a foreign language. But it gives his children a democratic society, a fair justice system, a free-er education system. An ju le ye.
            <br/><br/>
            
            You know Switzerland has 4x less murders per capita than Canada and 13x less than the US. But walking down these Toronto streets, you haven’t really felt unsafe. The difference between Canada and other western liberal democracies seems marginal compared to that between Canada and China, and
            <br/><br/>
            
            You don’t want to live your life running away from worst case scenarios. You think about Sigil in SF building startups.
            <br/><br/>
            
            
            
            `

            setTimeout(() => {
                button.style.visibility = "visible";
                button.textContent = "I'm programming."
            }, 10000) 

            
            button.onclick = () => {
                button.style.visibility = "hidden";
                myDiv.innerHTML = "";
                dadDiv.innerHTML = "";
                descrip.innerHTML = "";
                const x = writeOn(myDiv, "I'm programming.")
                const y = writeOn(
                    dadDiv,
                    "You have the rest of your career to do that. Now, you have this one-in-a-lifetime opportunity. Find a good place to live, and then think about career.",
                    200,
                    x + br
                )
                const z = writeOn(descrip, anJuLeYe, 50, x + y + 2 * br)
                // YOu know switzerland has 4x less murders per cpaita than canada and 13x less than the US
                // also better healthcare, justice system, etc.
                // setTimeout(() => writeOn(descrip, "<p>you saw on the news a 19 year old guy just got shot in downtown last weekend.</p>"), 4000)
                // setTimeout(() => descrip.innerHTML +="<p>but you walk these streets and you nvr felt unsafe. you dying in toronto from murder is like 1 in a million.</p>", 5000)
                // setTimeout(() => descrip.innerHTML +="you don't want to live life avoiding the worst case scenario. you want to chase carrots not run away from sticks. you think about sigil in SF building startups.", 7000)
                

                setTimeout(() => {
                    button.style.visibility = "visible"
                    button.textContent = "I don't want Switzerland"
                }, x + y + z + 3 * br)
                
                button.onclick = () => {
                    myDiv.innerHTML = "";
                    dadDiv.innerHTML = "";
                    descrip.innerHTML = "";
                    button.textContent = "";
                    myDiv.style.top = "6rem";

                    const x = writeOn(myDiv, "I don't know if I want to go to Switzerland?");
                    console.log(x)
                    const y = writeOn(dadDiv, "Where do you want to go?", 200, x + br);
                    const z = writeOn(myDiv, "<br/><br/>Silicon Valley.", 200, x + y + 2* br);
                    const w = writeOn(dadDiv, "<br/><br/>You know that Switzerland is pretty advanced in technology too. They have CERN and the large hadron collider. Internet originated from Switzerland.", 200, x + y + z + 3 * br)

                    // setTimeout(() => {y = writeOn(dadDiv, "Where do you want to go?")}, x)

                    
                    // root.innerHTML += "<div id='z' style='position: absolute; left: 20rem; top: 12rem; display: block; width: 36rem;'></div>"
                    // const zz = document.getElementById("z")
                    // let z;
                    // let w;
                    // setTimeout(() => {z = writeOn(myDiv, "<br/><br/>Silicon Valley.")}, x+y);
                    // setTimeout(() => {w = writeOn(dadDiv, "<br/><br/>You know that Switzerland is pretty advanced in technology too. They have CERN and the large hadron collider. Internet originated from Switzerland.")}, x+y+z);
                    
                    // root.innerHTML += "<div id='w' style='position: absolute; right: 12rem; top: 16rem;'></div>"
                    // const ww = document.getElementById("ww")

                    // setTimeout(() => {
                    //     // writeOn(descrip, "I'm not against living in Switzerland. I just... don't love it enough to put that much effort?")
                    //     writeOn(descrip, "Switzerland seems cool, but I don’t love it enough to spend a few months learning a language.")
                    // }, 2000)

                    // change button to "ok i'll consider it", following the format of prev button changes. copilot, do it:
                    setTimeout(() => button.textContent = "ok i'll consider it", x+y+z+w+4*br)
                    button.onclick = () => {
                        myDiv.innerHTML = "";
                        dadDiv.innerHTML = "";
                        descrip.innerHTML = "";
                        button.textContent = "";
                        Tween.get(dad, { loop: false })
                        .to({x: ww}, t, createjs.Ease.linear)

                        setTimeout(() => {
                            button.textContent = "a few weeks later..."
                            button.onclick = () => newScreen(() => slideFranticSchedule());
                        }, t + br);
                        
                    }

                    
                    
                }
            }
        };

        
        // here we say no to dad.
        // I mean, tbh, switzerland doesn't sound bad. id rathergo there than canada. but i hate the rest of it: find a safe place to live and then career?


        // ofc 

        // this writing is bad because it is not specific and evocative.



        // button: "hi, dad!"
        // dad: "hi, laura. so this winter break great chance to work on french la? how is it going?"
        // button: "bruh im a programmer i don't wanna do french"
        // dad: "la swizterland best country. the social security. the find good place to live and then study! you have rest of ur career
        // to do CS. now onc ein lifetime opportunity study la french and go to epfl. "
        // button: "bruh i don't wanna go to switzerland"
        // dad: "why not? switzerland has cern u can code in cern. b2 test soon ah!"
        // noooooooooooo. i wanna do code code code.
    }

    // add text as html element
    const div = document.createElement('div');
    div.class = "flex flex-col w-screen justify-center items-center";
    div.style.padding = "2rem";
    div.innerHTML = `
        <p  style="max-width: 90rem;">
            You’ve been here the entire afternoon, and now, you can’t look at your computer without your eyes hurting.
        </p>
    `

    var button = document.createElement("button");
        // <button onclick="headDrop();">I'm tired</button>
    button.onclick = () => headDrop();
    button.textContent = "oops";
    div.appendChild(button);

    // const text = document.createElement('p');
    // text.textContent = "You're coding. You feel a thirst for a big project. The past 5 days in buidling scratchpad, you tried more things tthan all of prev combined. React hooks. Mongodb $selectors. You're floating. If you're not learning new things, you're dying, you decide.";
    // ideally: talk about escape chains of mediocrity
    // ideally: illustrate the shift from bashing to theory
    root.appendChild(div);

    app.stage.addChild(scene);
    app.stage.addChild(sceneDoor);

    function headDrop() {
        
        console.log("dropped")
        scene.removeChild(me);
        scene.removeChild(larm);
        scene.removeChild(rarm);
        scene.addChild(meDropped);
        typing.pause();
        const hitTable = new Audio("sound/hit-table.mp3");
        hitTable.play();
        app.stage.addChild(journalGraph);
        div.innerHTML = `
            In a journal entry, you write:
            <br/><br/>
            <blockquote>
                I feel a thirst for a big project. I tried more things in webdev in the past 5 days than all of previous scratchpad combined, and I'm floating. I'm alive. If I'm not using new React.js hooks and MongoDB $selectors and NumPy methods, I'm dying.
                <br/><br/>
                I wonder how it feels to be Samson, to have comitted months building out his notetaking/blogging app, Postulate. David Perell has been writing for 5 years. Only with sticking to one thing for a lot of time can you escape the chains of mediocrity and tap into exponential growth.
            </blockquote>
        `
        setTimeout(() => {
            knock();
        }, 20000); // guess how long it takes to read?
    }

}
