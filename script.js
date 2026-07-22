// ===============================
// BATMAN PROPOSAL WEBSITE
// ===============================

// Get all pages
const pages = document.querySelectorAll(".page");

// Show a page
function nextPage(pageNumber){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document
        .getElementById("page"+pageNumber)
        .classList.add("active");

}

// ===============================
// QUIZ
// ===============================

function wrongAnswer(){

    document.getElementById("quizResult").innerHTML=
    "❌ Access Denied <br><br> Nice try Batman...<br>Your Batwoman remembers better ❤️";

}

function correctAnswer(){

    document.getElementById("quizResult").innerHTML=
    "✅ Identity Verified ❤️";

    setTimeout(function(){

        nextPage(3);

        startTyping();

    },1500);

}

// ===============================
// TYPEWRITER EFFECT
// ===============================

const letter = `

Every conversation with you makes my day brighter.

Every smile of yours stays in my heart.

You have become my favorite notification,

my favorite person,

and my favorite place to find happiness.

I love waking up to your 4+ new messages.

That literally makes my day so much better.

Please never stop doing that...

It makes my heart so much happier ❤️

I don't know what tomorrow brings...

But I know I want you beside me.

So today...

I just have one question...

`;

let index = 0;

function startTyping(){

    const typing = document.getElementById("typingText");

    typing.innerHTML="";

    index=0;

    type();

}

function type(){

    if(index < letter.length){

        document.getElementById("typingText").innerHTML +=
        letter.charAt(index);

        index++;

        setTimeout(type,35);

    }

}


// ===============================
// YES BUTTON
// ===============================

function showCelebration() {

    nextPage(5);

    // Play music
    const song = document.getElementById("loveSong");

    if (song) {
        song.play().catch(() => {
            console.log("Autoplay blocked. Click play if needed.");
        });
    }

    // Confetti
    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    // More confetti after 1 second
    setTimeout(() => {

        confetti({
            particleCount: 180,
            spread: 140,
            origin: { y: 0.7 }
        });

    }, 1000);

}

// ===============================
// RUNNING NO BUTTON
// ===============================

const noBtn = document.getElementById("noBtn");

if (noBtn) {

    noBtn.addEventListener("mouseenter", () => {

        const x = Math.random() * 300 - 150;
        const y = Math.random() * 200 - 100;

        noBtn.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}

// ===============================
// FLOATING HEARTS
// ===============================

const hearts = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 6) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 350);

// ===============================
// SHOW VERIFIED AFTER LOADING
// ===============================

setTimeout(() => {

    const verified =
        document.getElementById("verified");

    if (verified) {

        verified.style.display = "block";

    }

}, 3000);

// ===============================
// OPTIONAL MESSAGE
// ===============================

console.log(
"❤️ Batman found his Batwoman ❤️"
);