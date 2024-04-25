let tog = "Red"
var rollingSound = new Audio('rolldice.mp3')
var winSound = new Audio('win.mp3')

var qs = ['⅔ x ¾ =', '⅚ + ⅙ =', 'Berapa mil dalam 5 kilometer?', 'Berapa luas lingkaran yang panjang radiusnya 10cm?', 'Berapa meter dalam 300 centimeter?', 'Apa FPB dari 21 dan 35?', '7 + 9 =', 'Berapa keliling persegi panjang di mana lebar sisinya 7cm dan panjang sisinya dua kali lebarnya?', 'Apa FPB dari 100 dan 125?', 'Berapa lebar suatu persegi panjang jika panjangnya 8cm dan kelilingnya 22cm?'];
var ans = ['1/2', '1', '12.43', '314cm^2', '3m', '7', '16', '42cm', '25', '3cm'];
var random = Math.floor(Math.random()*10);

var p1sum = 0
var p2sum = 0

function changePlayer(){
    tog = (tog=="Red") ? "Yellow" : "Red"
    if (tog == "Yellow") {
        document.getElementById('tog').innerText = "Yellow's Turn : "
        play('p1', 'p1sum', 0, num)

    }

    else if (tog=="Red") {
        document.getElementById('tog').innerText = "Red's Turn : "

        play('p2', 'p2sum', 55, num)

    }
    }

function quizp1(pak){
var mak = prompt(`${qs[random]}`)
if (mak == ans[random]){
p1sum = pak
}else{
    p1sum = p1sum - num;
}
}

function quizp2(pak){
    var mak = prompt(`${qs[random]}`)
    if (mak == ans[random]){
    p2sum = pak
    }else{
        p2sum = p2sum - num;
    }
    }

function play(player, psum, correction, num) {
    var sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
        }

        if (p1sum == 1) {
            quizp1(38);
        }
        if (p1sum == 4) {
            quizp1(14);
        }
        if (p1sum == 8) {
            quizp1(30)
        }
        if (p1sum == 21) {
            quizp1(42)
        }
        if (p1sum == 28) {
            quizp1(76)
        }
        if (p1sum == 32) {
            p1sum = 10
        }
        if (p1sum == 36) {
            p1sum = 6
        }
        if (p1sum == 48) {
            p1sum = 26
        }
        if (p1sum == 50) {
            quizp1(67)
        }
        if (p1sum == 62) {
            p1sum = 18
        }
        if (p1sum == 71) {
            quizp1(92)
        }
        if (p1sum == 80) {
            quizp1(99)
        }
        if (p1sum == 88) {
            p1sum = 24
        }
        if (p1sum == 95) {
            p1sum = 56
        }
        if (p1sum == 97) {
            p1sum = 78
        }
        sum = p1sum



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
        }
        

        if (p2sum == 1) {
            quizp2(38)
        }
        if (p2sum == 4) {
            quizp2(14)
        }
        if (p2sum == 8) {
            quizp2(30)
        }
        if (p2sum == 21) {
            quizp2(42)
        }
        if (p2sum == 28) {
            quizp2(76)
        }
        if (p2sum == 32) {
            p2sum = 10
        }
        if (p2sum == 36) {
            p2sum = 6
        }
        if (p2sum == 48) {
            p2sum = 26
        }
        if (p2sum == 50) {
            quizp2(67)
        }
        if (p2sum == 62) {
            p2sum = 18
        }
        if (p2sum == 71) {
            quizp2(92)
        }
        if (p2sum == 80) {
            quizp2(99)
        }
        if (p2sum == 88) {
            p2sum = 24
        }
        if (p2sum == 95) {
            p2sum = 56
        }
        if (p2sum == 97) {
            p2sum = 78
        }

        sum = p2sum



    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Red Won !!")
        }
        else if (player == 'p2') {
            alert("Yellow Won !!")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = num = Math.floor(Math.random() * 6) + 1;
    random = Math.floor(Math.random()*10);

    document.getElementById("dice").innerText = num
    changePlayer();
})