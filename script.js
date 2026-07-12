const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const firstPage = document.getElementById("firstPage");
const secondPage = document.getElementById("secondPage");

const music1 = document.getElementById("music1");
const music2= document.getElementById("music2");
// لما الأولى تخلص شغل التانية
music1.addEventListener("ended", function () {
    music2.currentTime = 0;
    music2.play();
});

// لما التانية تخلص ارجع للأولى
music2.addEventListener("ended", function () {
    music1.currentTime = 0;
    music1.play();
});
const heartRain = document.getElementById("heartRain");

firstPage.style.display = "none";
const enterBtn = document.getElementById("enterBtn");
const passwordInput = document.getElementById("passwordInput");
const passwordScreen = document.getElementById("passwordScreen");
const error = document.getElementById("error");

// زر NO يهرب (شغال للموبايل والكمبيوتر)

function moveNoButton() {

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);

    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    moveNoButton();
});

noBtn.addEventListener("click", function(e) {
    e.preventDefault();
    moveNoButton();
});

// عند الضغط على YES

yesBtn.addEventListener("click", function () {

    music1.play();

    createHeartRain();

    firstPage.style.opacity = "0";

   
    
    setTimeout(function () {

        firstPage.style.display = "none";
         document.body.style.background = "url('background.jpeg')";
        //  document.body.style.background = "url('background2.jpeg')";
          document.body.style.backgroundSize = "cover";
         document.body.style.backgroundPosition = "center";
         document.body.style.backgroundRepeat = "no-repeat";
         document.body.style.backgroundAttachment="fixed"
        secondPage.style.display = "flex";

    }, 1000);

});
// ===========================
// القلوب المتساقطة
// ===========================

const hearts = ["❤️","💖","💕","💗","💘","💝"];

function createHeartRain(){

    setInterval(function(){

        const heart = document.createElement("span");

        heart.className = "heart";

        heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

        // مكان عشوائي في عرض الشاشة
        heart.style.left = Math.random() * window.innerWidth + "px";

        // حجم عشوائي
        heart.style.fontSize = (20 + Math.random()*35) + "px";

        // سرعة عشوائية
        heart.style.animationDuration = (3 + Math.random()*4) + "s";

        // ميل بسيط
        heart.style.transform =
            "rotate(" + (Math.random()*360) + "deg)";

        heartRain.appendChild(heart);

        setTimeout(function(){

            heart.remove();

        },7000);

    },120);

}
enterBtn.addEventListener("click", function(){

    if(passwordInput.value === "30/3/2026"){ // غير التاريخ هنا

        passwordScreen.style.display = "none";

        firstPage.style.display = "flex";

    }else{

        error.innerHTML = "Wrong Date ❤️";

    }

});