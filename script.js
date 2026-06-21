/* ==========================
   SUCCESS COACHING CENTRE
   SCRIPT.JS
========================== */

/* Loader */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 2500);

});


/* Falling Flowers */

const flowerContainer =
document.getElementById("flowers");

const flowers = [
    "🌸",
    "🌺",
    "🌼",
    "✨"
];

function createFlower() {

    const flower =
    document.createElement("div");

    flower.innerHTML =
    flowers[
        Math.floor(
            Math.random() * flowers.length
        )
    ];

    flower.style.position = "fixed";

    flower.style.left =
    Math.random() * 100 + "vw";

    flower.style.top = "-50px";

    flower.style.fontSize =
    (15 + Math.random() * 25) + "px";

    flower.style.opacity =
    Math.random();

    flower.style.zIndex = "5";

    flower.style.pointerEvents = "none";

    flowerContainer.appendChild(flower);

    let position = -50;

    const speed =
    1 + Math.random() * 3;

    const drift =
    (Math.random() - 0.5) * 2;

    const interval = setInterval(() => {

        position += speed;

        flower.style.top =
        position + "px";

        flower.style.left =
        parseFloat(flower.style.left)
        + drift + "px";

        if(position >
        window.innerHeight + 100){

            clearInterval(interval);

            flower.remove();

        }

    },20);

}

setInterval(createFlower,300);


/* Scroll Reveal Animation */

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0px)";

        }

    });

},{
    threshold:0.1
});

document.querySelectorAll(
".article, .roadmap-card, .highlight"
).forEach(el=>{

    el.style.opacity = "0";

    el.style.transform =
    "translateY(50px)";

    el.style.transition =
    "all 1s ease";

    observer.observe(el);

});


/* Hero Glow Effect */

const heroTitle =
document.querySelector(".hero h1");

let glow = true;

setInterval(()=>{

    if(glow){

        heroTitle.style.textShadow =
        "0 0 10px cyan, 0 0 25px cyan, 0 0 50px cyan";

    }else{

        heroTitle.style.textShadow =
        "0 0 5px cyan";

    }

    glow = !glow;

},1200);


/* Welcome Message */

setTimeout(()=>{

console.log(
"Welcome to Success Coaching Centre"
);

},3000);


/* Auto Year */

const footer =
document.querySelector("footer");

const year =
new Date().getFullYear();

footer.innerHTML +=
`<p>© ${year} Success Coaching Centre</p>`;

/* Music Control */

const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

let playing = false;

musicBtn.addEventListener("click", () => {

    if(!playing){

        bgMusic.play();

        musicBtn.innerHTML =
        "⏸️ संगीत बंद करें";

        playing = true;

    }else{

        bgMusic.pause();

        musicBtn.innerHTML =
        "🔊 प्रेरणादायक संगीत चालू करें";

        playing = false;
    }

});
