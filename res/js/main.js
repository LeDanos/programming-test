const start = document.getElementById("start");
const timer = document.getElementById("timer");
const timerBar = document.getElementById("timerBar");
const end = document.getElementById("end");
const scoreEnd = document.getElementById("scoreEnd");
const game = document.getElementById("game");
const confirm = document.getElementById("confirm");
const question = document.getElementById("question");
const input = document.getElementById("input");

let time = 30
let score = 0
let questionID=0

start.onclick=()=>{
    start.style.display="none"
    game.style.display="block"
    setTimer()
    questionGen()
}

//timer
function setTimer() {
    setTimeout(() => {
    time--
    timerBar.style.width=`${(100/30)*time}%`
    console.log(time)
    if (time>0) {
        setTimer()
    }else{
        game.style.display="none"
        scoreEnd.innerHTML="Skóre: "+score
        end.style.display="block"
    }
}, 1000);
}

//questions
function questionGen() {
    let random = Math.random()
    if (random<1/23) {
        question.innerHTML="Co ve vývojovém diagramu znamená zaoblený obdelník? (Zapište oboje odděleno / )"
        questionID=1
    }else if (random<2/23){
        question.innerHTML="Co ve vývojovém diagramu znamená rovnoběžník? (Zapište oboje odděleno / )"
        questionID=2
    }else if (random<3/23){
        question.innerHTML="Co ve vývojovém diagramu znamená kosočtverec?"
        questionID=3
    }else if (random<4/23){
        question.innerHTML="Co ve vývojovém diagramu znamená obdelník?"
        questionID=4
    }else if (random<5/23){
        question.innerHTML="Jak nazýváme zápis kódu v programu?"
        questionID=5
    }else if (random<6/23){
        question.innerHTML="Jak nazýváme kód který zpracovává procesor?"
        questionID=6
    }else if (random<7/23){
        question.innerHTML="Jaký jazyk je rychlejší? Interpretovaný nebo Kompilovaný?"
        questionID=7
    }else if (random<8/23){
        question.innerHTML="Jaký jazyk je pomalejší? Interpretovaný nebo Kompilovaný?"
        questionID=8
    }else if (random<9/23){
        question.innerHTML="Co znamená zkratka JIT?"
        questionID=9
    }else if (random<10/23){
        question.innerHTML="Co spouští programy v jazyce Java?"
        questionID=10
    }else if (random<11/23){
        question.innerHTML="Co v Javě poskytuje programovací nástroje a technologie?"
        questionID=11
    }else if (random<12/23){
        question.innerHTML="Co slouží k vývoji softwaru v jazyce Java?"
        questionID=12
    }else if (random<13/23){
        question.innerHTML="Jak se nazívají operátory + - * / % ?"
        questionID=13
    }else if (random<14/23){
        question.innerHTML="Jak se nazívá operátor ++ ?"
        questionID=14
    }else if (random<15/23){
        question.innerHTML="Jak se nazívá operátor -- ?"
        questionID=15
    }else if (random<16/23){
        question.innerHTML="Jak se nazívá operátor = ?"
        questionID=16
    }else if (random<17/23){
        question.innerHTML="Jak se nazívají operátory += -= *= /= %= ?"
        questionID=17
    }else if (random<18/23){
        question.innerHTML="Jak se nazívají operátory == != > < >= <= ?"
        questionID=18
    }else if (random<19/23){
        question.innerHTML="Jak se nazívají operátory && || ! ?"
        questionID=19
    }else if (random<20/23){
        question.innerHTML="Jak se nazívá operátor podmínka ? true : false ?"
        questionID=20
    }else if (random<21/23){
        question.innerHTML="U jakýho typu cyklu můžeš nastavit přesný počet opakování?"
        questionID=21
    }else if (random<22/23){
        question.innerHTML="U jakýho typu cyklu můžeš nastavit aby se opakoval dokud platí podmínka?"
        questionID=22
    }else{
        question.innerHTML="Jaký typ cyklu se opakuje alespoň jednou?"
        questionID=23
    }
}

//answers
confirm.onclick=()=>{
    switch (questionID) {
        case 1:
            if (input.value=="start/konec"||input.value=="start / konec"||input.value=="Start / Konec"||input.value=="Start/Konec") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 2:
            if (input.value=="vstup/výstup"||input.value=="vstup / výstup"||input.value=="Vstup / Výstup"||input.value=="Vstup/Výstup"||input.value=="input/output"||input.value=="input / output"||input.value=="Input / Output"||input.value=="Input/Output") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 3:
            if (input.value=="podmínka"||input.value=="Podmínka") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 4:
            if (input.value=="akce"||input.value=="Akce") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 5:
            if (input.value=="zdrojový"||input.value=="Zdrojový") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 6:
            if (input.value=="strojový"||input.value=="Strojový") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 7:
            if (input.value=="kompilovaný"||input.value=="Kompilovaný") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 8:
            if (input.value=="interpretovaný"||input.value=="Interpretovaný") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 9:
            if (input.value=="Just in time"||input.value=="Just In Time"||input.value=="Just in Time") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 10:
            if (input.value=="JVM") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 11:
            if (input.value=="JRE") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 12:
            if (input.value=="JDK") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 13:
            if (input.value=="aritmatické"||input.value=="Aritmatické") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 14:
            if (input.value=="inkrementační"||input.value=="Inkrementační") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 15:
            if (input.value=="dekrementační"||input.value=="Dekrementační") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 16:
            if (input.value=="přiřazovací"||input.value=="Přiřazovací") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 17:
            if (input.value=="složené přiřazovací"||input.value=="Složené přiřazovací"||input.value=="Složené Přiřazovací") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 18:
            if (input.value=="porovnávací"||input.value=="Porovnávací") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 19:
            if (input.value=="logické"||input.value=="Logické") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 20:
            if (input.value=="ternární"||input.value=="Ternátní"||input.value=="ternární operátor"||input.value=="Ternátní operátor") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 21:
            if (input.value=="for") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 22:
            if (input.value=="while") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
        case 23:
            if (input.value=="do while") {
                score+=100
                if (time+5>30) {
                    time=30
                }else{
                    time+=5
                }
            } else {
                score-=50
            }
            questionGen()
            updateScore()
            break;
    }
}

function updateScore() {
    score.innerHTML="Skóre: "+score
}