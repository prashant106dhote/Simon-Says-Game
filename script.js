let gamesq = [];
let usersq = [];
let started = false;
let level = 0;
let butns = ["yello", "red", "blue", "green"]
let h3 = document.querySelector("h3")
let btn = document.querySelector(".btn")
let restart = document.querySelector(".restart")

function reset() {
        gamesq = [];
        usersq = []
        started = false;
        level = 0;
}

restart.addEventListener("click", function () {
        if (started == false) {
                started = true
                console.log("game is started");
                levelup()
        }
});


function gameflash(btn) {
        btn.classList.add("flash")
        setTimeout(() => {
                btn.classList.remove("flash")
        }, 250)
}
function userflash(btn) {
        btn.classList.add("userflash")
        setTimeout(() => {
                btn.classList.remove("userflash")
        }, 250)
}
function levelup() {
        usersq = []
        level++;
        h3.innerText = `Level : ${level}`
        let randind = Math.floor(Math.random() * 3)

        let rancolor = butns[randind]
        let ranBtn = document.querySelector(`.${rancolor}`)

        console.log(ranBtn);
        console.log(rancolor);

        gamesq.push(rancolor)
        // console.log(gamesq);

        gameflash(ranBtn)

}
function cheakAns(inx) {

        if (usersq[inx] == gamesq[inx]) {
                if (usersq.length == gamesq.length) {
                        setTimeout(levelup, 1000)


                }

        }
        else {
                h3.innerHTML = `Game Over Score is : <span> ${level}</span></br>  Press Restart Key & Start the Game`

                reset();
                restart.innerText = "Restart"
                document.querySelector("body").style.backgroundColor = "red"
                setTimeout(() => {
                        document.querySelector("body").style.backgroundColor="#fdf6e3";
                }, 150)

        }
}
function pressbtn() {
        let btn = this;
        userflash(btn)
        usercolor = btn.getAttribute("id")
        usersq.push(usercolor)
        console.log(usersq);
        cheakAns(usersq.length - 1)

}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
        btn.addEventListener("click", pressbtn,)
       

}
