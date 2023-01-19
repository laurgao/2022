class SimpleScene { // abstract class
    constructor(text, nextSlide, buttonText) {
    //   this.height = height;
    //   this.width = width;
      this.text = text;
      this.nextSlide = nextSlide;
    this.buttonText = buttonText;
    }

    // override this one
    draw() {
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

        div.innerHTML = `
            <div class="flex flex-col items-center justify-center w-screen h-screen text-center" style="z-index: 0;">
                <p style=" max-width: 500px;">
                    ${this.text}
                </p>
                <button onClick="clearRoot();${this.nextSlide};">${this.buttonText}</button>
            </div>
        `

        root.appendChild(div);
        // console.log("draw() not implemented")
    }
  }


const afterFrench = new SimpleScene(`
The thing about doing what other people want you to do is that it gets easier after a while.
<br/><br/>
You begin to like French. When you open YouTube, your recommendations are filled with physics videos. "La relativité restreinte" "La mécanique quantique" "La champ electromagnetique". You can't help but be curious.
<br/><br/>
You open a novel in the new language and the words come easily to your brain. This is your life now.
You sign up for all the French events on duolingo and spend at least an hour a day engaged in French
conversation. You fall asleep to Le Precepteur talking about Camus' philosophie de l'absurde. For the
first time, you feel confident.
'insert spacedrep journla entry'

You're walking around and Gloria - TN. It's June 16th. Your exam is June 17th.
The logical thing to do would be clamp down the next week.

However, you feel confident.

You think about TOPS Night in 2019. 'insert that paragraph about being in the audience'

You were so excited. - convey that

You edit on the bus and run through your spacedrep in the minutes between renders.
On June 17th, your dad drives you to C1 exam. You spent this year thus far devoted to this language.
`, "s2", "take the C1")
  

// you spend the next week on ur summative projects, having not started them before C1+TOPS Night double whammy.
// review classes. 

const s2 = new SimpleScene(`
You hedge your bets on having passed. Partly tired, partly you feel more confident about your performance now than during the B2.
<br/><br/>
Dad said after C1, you can spend your time on whatever you want. July and August are your rare window of freedom before you have to grind applications in September.
<br/><br/>
But first, you have the national leadership conference for FBLA! You think you deserve to spend a week on vacation.
`, "s2", "Go to Chicago")

// you edit on the bus, laptop on your knees and mouse on your keyboard.
// you spend the first day in hotel room editing till emma and anushka drag you around the city.

// show some draftssss
// exhibit A: tops night. play the video. 

// You're proud. You got the same score. You very concretely went up one language level in 3 months.
// You estimate spending 200-300 hours on French past year.
// you're winning. you always win.
// atlas too.

// I went into tops night excited to edit videos. i left having a greater appreciation for the art of
// inspiring others to have the same vision that i do.

// you decide that applications are your #1 priority.
// nothing else - talked about 4 years. this is the last time you're selling out.
// you dont make a HOSA promo video you told amy youd make. nor fbla website. you hand in your politics
// assignment 2 weeks late. the world around you burns?
// youre sad, but youre ok with that you guess. much better than the other way around.

// you can defect on shit that doesnt matter for uni apps which is a sellout thing.
// now you have ur own goals like making website and travelling and its much harder to defect
// on other things for.

// i think its easy to get the shallow interpretation - what am i selling out? webdeving?
// buiding prjs for myself? developping skills that would help me get future job / found future
// company / be future successful?
// rn, not travelling and shit is selling out my relationships. 

// today (jan 16) i left house late late late bus 2 buses later than quans. mom: we've been telling
// you to wake up earlier. that's one strike against shit that im not doing well.


// when you take it to the extremes, youd much rather be living ur life and having a shit relationship
// w parents than the other way around.
// your choices - reflect ur values.