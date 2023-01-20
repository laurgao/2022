function concl() {
    root.innerHTML = `
    <div style="position: absolute; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1;">
    <h4>the end</h4>
    <p
        style="text-align: center;  max-width: 500px;"
    >It’s January 19th, and you spent your past week making this annual review. You estimate 30 hours spent so far. Holy fuck. You’re behind on all your classes, the English and Linear Algebra and Politics. You win some, you lose some.
    <br/>
    </p>
    <button onclick="goals2023()">keep moving forward</button>
    </div>
`
    createLauraCircle();
    
}

function goals2023() {
    root.innerHTML = `<div style="position: absolute; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1;">

    <div style="max-width: 650px">
    <h3 style="text-align: center">In 2023, you want to</h3>
    <ul>
        <li style="margin-bottom: 1rem;">travel. you want to live somewhere that’s not toronto. you want to live on your own, be fully responsible for yourself. you want to have the courage to make decisions your parents don’t agree with, and earn their respect as an equal. you do not believe you’ll achieve your goals if you restrict yourself to your parents’ ideas.
        <li style="margin-bottom: 1rem;">make more friends. 2022 proved that you’re able to clamp down, call on your discipline, and do the work you need to do. In 2023, you can be less worried about work. Your biggest bottleneck to starting a startup or trying out internships in different fields is having a total of ~5 close friends. In the best case scenario, you’d be giving talks and pitching to VCs and going to spontaneous social events because you’re physically in the area. Don’t fall into the socially-awkward programmer trope.
        <li>build cool things. like this game/website. you want to reconnect with the joy of the craft.
    </ul>
    <br/>

    <div style="text-align: center" >
    <button onclick="roastMe()">keep moving forward</button>
    </div>

    </div>

    </div>`
    createLauraCircle(450);
}

function roastMe() {
    root.innerHTML = `<div style="position: absolute; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1;">

    <div style="max-width: 750px;text-align: center;">
    In 2023, you hope to choose the uh other path of the sellout's dilemma more often?
    <br/><br/>
    You made it to the end of 2022. You've seen my year. You've seen my uh proud moments and not-so-proud ones. Now, you're in a prime position to
    <br/><br/>
    <a href="https://me.lauragao.ca/feedback" target="blank" style="display: inline-block;"><button onclick="">roast me*</button></a>
    <br/><br/>
        <div style="font-size: 12px;" class="text-stone-500">
        * I mean it. I want your criticsm. I want to get more in touch with the world, not just my world. For the purposes of this, I operate by <a href="https://malcolmocean.com/2013/11/crockers-rules/">Crocker's rules</a>, i.e.: 
        <br/><br/>
        <blockquote>
        other people are allowed to optimize their messages for information, not for being nice to you. Crocker’s Rules means that you have accepted full responsibility for the operation of your own mind – if you’re offended, it’s your fault.
        </blockquote>
        <br/><br/>
        Pls don't be a grinfucker, i.e. giving bland positive feedback when your honest feedback would be negative---you’re "grinning at them but in the long-run the lack of honest feedback is fucking them over."
        </div>
    </div>

    </div>`
    createLauraCircle(500);
}

// 
{/* <br/><br/>
Note: I made this website 2 years ago. */}
//