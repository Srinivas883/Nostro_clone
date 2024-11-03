var close1 = document.getElementById("close1")
var section1 = document.querySelector(".section1")

close1.addEventListener("click", function () {
    section1.style.display = "none"

})

//section 3

function checkboxcheck(checbox__value) {

    checbox__value.addEventListener("click", function () {
        if (checbox__value.checked == true) {
            for (count = 0; count < container3__div.length; count++) {
                if (container3__div[count].textContent.toUpperCase().indexOf(checbox__value.value.toUpperCase()) < 0) {
                    container3__div[count].style.display = "none"
                }
            }
        }
        else {
            for (count = 0; count < container3__div.length; count++) {
                container3__div[count].style.display = "block"
            }
        }
    })

}

// search functionality

var searchbar = document.getElementById("searchbar")

searchbar.addEventListener("keyup", function () {

    for (count = 0; count < container3__div.length; count++) {
        if (container3__div[count].textContent.toUpperCase().indexOf(searchbar.value.toUpperCase()) < 0) {
            container3__div[count].style.display = "none"
        }
        else {
            container3__div[count].style.display = "block"
        }
    }

})

// selecting container 3 div 
var container3__div = document.querySelector(".container3__imgs").querySelectorAll("div")

// selecting checkbox
var summer = document.getElementById("summer")
var party = document.getElementById("party")
var beach = document.getElementById("beach")
var red = document.getElementById("red")
var blue = document.getElementById("blue")
var white = document.getElementById("white")
var green = document.getElementById("green")

checkboxcheck(summer)
checkboxcheck(party)
checkboxcheck(beach)
checkboxcheck(red)
checkboxcheck(blue)
checkboxcheck(white)
checkboxcheck(green)


var old1 = document.getElementById("old1")
var new1 = document.getElementById("new1")

// OLD
old1.addEventListener("click", function () {
    if (old1.checked == true) {
        for (count = 0; count < container3__div.length; count += 2) {
            console.log(count)
            container3__div[count + 1].style.display = "none"
        }
    }


    else {
        for (count = 0; count < container3__div.length; count++) {
            container3__div[count].style.display = "block"
        }
    }
})

// NEW
new1.addEventListener("click", function () {
    if (new1.checked == true) {
        for (count = 0; count < container3__div.length; count += 2) {
            console.log(count)
            container3__div[count].style.display = "none"
        }
    }


    else {
        for (count = 0; count < container3__div.length; count++) {
            container3__div[count].style.display = "block"
        }
    }
})


