// Section 1

var close1 = document.getElementById("close1")
var section1 = document.querySelector(".section1")

close1.addEventListener("click", function () {
    section1.style.display = "none"

})

// Section 2


// Section 3

var slider1 = document.getElementById("img1")
var slider2 = document.getElementById("img2")
var slider3 = document.getElementById("img3")

var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")

slider1.style.transitionDuration = "2s"
slider2.style.transitionDuration = "2s"
slider3.style.transitionDuration = "2s"


function sliderposchange() {
    if (sliderpos == 1) {
        slider1.style.left = "0"
        slider2.style.left = "100%"
        slider3.style.left = "200%"

    } else if (sliderpos == 2) {
        slider1.style.left = "-100%"
        slider2.style.left = "0"
        slider3.style.left = "100%"

    } else if (sliderpos == 3) {
        slider1.style.left = "-200%"
        slider2.style.left = "-100%"
        slider3.style.left = "0"

    }
}

var sliderpos = 1

btn1.addEventListener("click", function () {
    if (sliderpos == 1) {
        sliderpos = 3
    } else {
        sliderpos--
    }
    sliderposchange()

})

btn2.addEventListener("click", function () {
    if (sliderpos == 3) {
        sliderpos = 1
    } else {
        sliderpos++
    }
    sliderposchange()

})

// Section 8

var heart1 = document.querySelectorAll(".heart1")
var heart2 = document.querySelectorAll(".heart2")



function colorchange(val){
    heart1[val].addEventListener("click", function () {
        heart1[val].style.display = "none"
        heart2[val].style.display = "inline"
        
    })
    
    heart2[val].addEventListener("click", function () {
        heart1[val].style.display = "inline"
        heart2[val].style.display = "none"
    })
}

for(var count=0; count<heart1.length;count++){
    colorchange(count)
}


