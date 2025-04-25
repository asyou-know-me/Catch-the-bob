let container = document.querySelector(".container");
let cth = document.querySelector(".mtxt");
let nxt = document.querySelector(".btn");
let btn = document.querySelector(".clck");
let name = document.querySelector(".name");
let go = document.querySelector(".go");
let msg = document.querySelector(".msg");
let cont = document.querySelector(".count");
let gs = document.querySelector(".gs");
let drop = document.querySelector(".drop");
let userName = document.querySelector(".user-nae");
let bob = document.querySelector(".bob");
let score = document.querySelector(".score");
let huh = document.querySelector(".huh");
let spec = document.querySelector(".spec");
let exit = document.querySelector(".exit");
let ext = document.querySelector(".ext");
let exitClr = document.querySelector(".po");
let count;
var scount = 0;

window.onload = function(){
        setTimeout(() => {
                bob.classList.remove("hide");
                spec.classList.remove("hide");
                exitClr.classList.remove("hide");
                // bobHldr.classList.remove("hide");
        },11000)
}
ext.addEventListener("mouseover", () => {
        huh.classList.remove("hide");
        huh.innerText = "Exiting already ?";
})

exitClr.addEventListener("click", () => {
        exit.classList.remove("hide");
})
bob.addEventListener("mouseover",() =>{
        let maxWidth = window.innerWidth - bob.clientWidth;
        let maxHeight = window.innerHeight - bob.clientHeight;
        
        let randomX = Math.random() * maxWidth;
        let randomY = Math.random() * maxHeight;

        bob.style.left = randomX + "px";
        bob.style.top = randomY + "px";


        // bob.style.top = Math.floor(Math.random() * 90 + 5) + "%";
        // bob.style.left = Math.floor(Math.random() * 90 + 5) + "%";
});
bob.addEventListener("click",() =>{
        scount++;
        score.innerText = `Score : ${scount}` ;
        if(scount == 1){
                huh.classList.remove("hide");
        }else if(scount == 2){
                huh.innerText = "What ?! Already twice ?!!"
                huh.classList.remove("hide");
        }else{
                huh.classList.add("hide");
        }
        let maxWidth = window.innerWidth - bob.clientWidth;
        let maxHeight = window.innerHeight - bob.clientHeight;
        
        let randomX = Math.random() * maxWidth;
        let randomY = Math.random() * maxHeight;

        bob.style.left = randomX + "px";
        bob.style.top = randomY + "px";
        
});
function sha(){
        msg.classList.add("hide");
        cont.classList.add("hide");
        gs.classList.add("hide")
        drop.classList.remove("hide"); 
}
function stcount(count){
        if(count < 0){
                let namess = sessionStorage.getItem("names");
                if(namess){
                        userName.innerText = `Welcome , ${namess}`;
                }
                sha();
        }else{
                cont.innerText = count;
                setTimeout(() => { stcount(count - 1 )},1000);              
        }
}
stcount(10);


function nxtpg(){
        setTimeout(() => {
                cth.classList.add("hide");
                btn.classList.add("hide");
                name.classList.remove("hide");
                go.classList.remove("hide");
                
        }, 250);
}
function goo(){
        var names = name.value;
        console.log(names);
        sessionStorage.setItem("names",names);
        window.location.href = "slctinsc.html";
        alert(`Is ${names} your name ?`)
        
}
