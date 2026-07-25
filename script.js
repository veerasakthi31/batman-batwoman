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

Since the day I met you, you've been living in my heart 24/7, 

and I never want that to end.

I love hearing your voice. I love the way you say,

"Sollu la," "Saptiya la" , "Kaasu venumna kelu la."

I love that you message me during your break, even if it's just for an hour.

There are so many things I love about you. 

In fact, there's not a single thing I don't love about you.

I love the way you reply to my reels. You know what the best part of my day is? 

Waking up to 4+ new messages from you. Please never stop doing that.

I have just one request for you.

The Batman I saw on the very first day,

the love I saw in his eyes that day — please never let that change, 

whether it's after 30 days or 30 years. I always want to know, 

just by looking into your eyes, how deeply you love me.

"I love you" doesn't even come close to expressing what I feel for you.

I want to spend this lifetime beside you...

showing you, every single day,

how much you mean to me.

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
