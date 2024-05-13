function second(){
    let sec_left = document.getElementById('seconds')
    let seconds = sec_left.innerText; 
    seconds++;
    if (seconds<10){
        seconds = `0${seconds}`
    }
    if (seconds==61){
        seconds=0;
        
    }
    sec_left.innerHTML=seconds
    
}
setInterval(second, 1000);
function minut(){
    let min_left = document.getElementById('minutes')
    let minutes = min_left.innerText; 
    minutes++;
    if (minutes<10){
        minutes = `0${minutes}`
    }
    if (minutes==3){
        setTimeout(() => { location.href = "../html/gameover.html" }, 500)
    }
    min_left.innerText = minutes;
}
setInterval(minut, 60000);

let i = 0, j, bool, a = 10
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let arr2 = [null, null, null, null, null, null, null, null, null, null]
function clik(btnid) {
    let j = parseInt(btnid[1])
    if (arr[j] != 1) {
        i++;
        if (i % 2 == 1 && i != 9) {
            document.getElementById(btnid).style.backgroundImage = "url('../image/x.png')";
            arr[j] = 1
            arr2[j] = "x"
            a = Math.round(Math.random() * 10)
            if (a == 10 || a == 0) {
                a = 1
            }
            while (arr[a] == 1 && i != 9) {
                a++;
                if (a == 10 || a == 0) {
                    a = 1
                }
            }
            j = a;
            btnid = "a" + a.toString()
            setTimeout(() => {
                document.getElementById(btnid).style.backgroundImage = "url('../image/o.png')";
                arr[j] = 1
                arr2[j] = "o"
                i++;
            }, 450)
        }
        else if (i = 9) {
            document.getElementById(btnid).style.backgroundImage = "url('../image/x.png')";
            arr[j] = 1
            arr2[j] = "x"
        }
    }
    else {
        alert("Try again")
    }
    if ((arr2[1] == arr2[2]) && (arr2[1] == arr2[3]) && arr2[1] != null) {
        document.getElementById("a1").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a2").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a3").style.backgroundImage = "url('../image/l.png')";
        if (arr2[1] != "o") {
            setTimeout(() => { location.href = "../html/win.html" }, 500)
        } else {
            setTimeout(() => { location.href = "../html/gameover.html" }, 500)
        }
    }
    else if ((arr2[4] == arr2[5]) && (arr2[4] == arr2[6]) && arr2[4] != null) {
        document.getElementById("a4").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a5").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a6").style.backgroundImage = "url('../image/l.png')";
        if (arr2[4] != "o") {
            setTimeout(() => { location.href = "../html/win.html" }, 500)
        } else {
            setTimeout(() => { location.href = "../html/gameover.html" }, 500)
        }
    }
    else if ((arr2[7] == arr2[8]) && (arr2[7] == arr2[9]) && arr2[7] != null) {
        document.getElementById("a7").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a8").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a9").style.backgroundImage = "url('../image/l.png')";
        if (arr2[7] != "o") {
            setTimeout(() => { location.href = "../html/win.html" }, 500)
        } else {
            setTimeout(() => { location.href = "../html/gameover.html" }, 500)
        }
    }
    else if ((arr2[1] == arr2[4]) && (arr2[1] == arr2[7]) && arr2[1] != null) {
        document.getElementById("a1").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a4").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a7").style.backgroundImage = "url('../image/l.png')";
        if (arr2[1] != "o") {
            setTimeout(() => { location.href = "../html/win.html" }, 500)
        } else {
            setTimeout(() => { location.href = "../html/gameover.html" }, 500)
        }
    }
    else if ((arr2[2] == arr2[5]) && (arr2[2] == arr2[8]) && arr2[2] != null) {
        document.getElementById("a2").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a5").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a8").style.backgroundImage = "url('../image/l.png')";
         if (arr2[2] != "o") {
            setTimeout(() => { location.href = "../html/win.html" }, 500)
        } else {
            setTimeout(() => { location.href = "../html/gameover.html" }, 500)
        }
    }
    else if ((arr2[3] == arr2[6]) && (arr2[3] == arr2[9]) && arr2[3] != null) {
        document.getElementById("a3").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a6").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a9").style.backgroundImage = "url('../image/l.png')";
        if (arr2[3] != "o") {
            setTimeout(() => { location.href = "../html/win.html" }, 500)
        }
        else {
            setTimeout(() => { location.href = "../html/gameover.html" }, 500)
        }
    }
    else if ((arr2[1] == arr2[5]) && (arr2[1] == arr2[9]) && arr2[1] != null) {
        document.getElementById("a1").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a5").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a9").style.backgroundImage = "url('../image/l.png')";
        if (arr2[1] != "o") {
            setTimeout(() => { location.href = "../html/win.html" }, 500)
        }
        else {
            setTimeout(() => { location.href = "../html/gameover.html" }, 500)
        }

    }
    else if ((arr2[3] == arr2[5]) && (arr2[3] == arr2[7]) && arr2[3] != null) {
        document.getElementById("a3").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a5").style.backgroundImage = "url('../image/l.png')";
        document.getElementById("a7").style.backgroundImage = "url('../image/l.png')";
        if (arr2[3] != "o") {
            setTimeout(() => { location.href = "../html/win.html" }, 500)
        }
        else {
            setTimeout(() => { location.href = "../html/gameover.html" }, 500)
        }
    }
    else if(i>8){
        setTimeout(() => { location.href = "../html/gameover.html" }, 500)
    }

}
function previousPage() {
    window.location.reload()
}
function menu(){
    location.href="../html/xo.html"
}