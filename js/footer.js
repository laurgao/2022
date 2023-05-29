

const slides = [
    // {
    //     fn: slide0,
    //     name: "Introduction",
    // },
    {
        fn: slide1,
        name: "Web Development",
    },
    {
        fn: slideFranticSchedule,
        name: "Frantic Schedule",
    },
    {
        fn: slideFrench,
        name: "French",
    },
    {
        fn: slideTN,
        name: "TOPS Night",
    },
    {
        fn: slideZapata,
        name: "Zapata",
    },
    {
        fn: slideAtlas,
        name: "Atlas",
    },
    {
        fn: slideApps,
        name: "Applications",
    },
    {
        fn: slideConcl,
        name: "Conclusion",
    },
];
function footer() {
    const footer = document.querySelector("#footer");
    // create div
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.gap = "1rem";
    // add div to footer
    footer.appendChild(div);

    for (let i = 0; i < slides.length; i++) {
        console.log(slides[i]);
        // create a circle for every scene
        const wrapper = document.createElement("div");
        const button = document.createElement("button");
        wrapper.appendChild(button);
        button.className = "footer";
        wrapper.className = "flex items-center justify-center";
        button.style.width = "2rem";
        button.style.height = "2rem";
        button.style.borderRadius = "50%";
        button.style.border = "1px solid white";
        button.style.backgroundColor = currentSlide === i ? "#e7e5e4" : "transparent";
        button.style.zIndex = 2;
        // circle.style.transition = "background-color 0.15s";

        // create popup
        const popup = document.createElement("div");
        popup.className = "absolute";
        popup.style.padding = "0.5rem 1rem";
        popup.innerHTML = i + 1 + ". " + slides[i].name;
        popup.style.backgroundColor = "#292524";
        popup.style.borderRadius = "0.5rem";
        popup.style.bottom = "0";
        popup.style.color = "#e7e5e4";
        popup.style.opacity = 0;
        popup.style.transition = "transform 0.25s ease-in-out, opacity 0.25s ease-in-out";
        popup.style.zIndex = 1;

        // make a triangle on the bottom of the popup pointing to the circle
        const triangle = document.createElement("div");
        triangle.style.border = "1rem solid transparent";
        triangle.style.borderTop = "1rem solid #292524";
        triangle.style.position = "absolute";
        triangle.style.bottom = "-2rem";
        triangle.style.left = "50%";
        triangle.style.transform = "translateX(-50%)";
        popup.appendChild(triangle);

        button.onmouseenter = () => {
            popup.style.transform = "translateY(-200%)";
            popup.style.opacity = "1";
        };

        button.onmouseleave = () => {
            popup.style.transform = "translateY(0)";
            popup.style.opacity = "0";
        };

        button.onclick = () => {
            updateSlideNumber(i);
            newScreen(slides[i].fn);
        };

        wrapper.appendChild(popup);
        div.appendChild(wrapper);
    }
}


const newScreen = (newScreenFn) => {
    const slideFns = slides.map((s) => s.fn);
    const index = slideFns.indexOf(newScreenFn);
    if (index) updateSlideNumber(index);

    root.innerHTML = "";
    app.stage.removeChildren();
    newScreenFn();
};

