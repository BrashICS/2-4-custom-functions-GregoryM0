/**
 * 2.4 - Custom Functions
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * This is a playground. Feel free to play.
 **/ 


// Example custom function using Number() and prompt()
function circle_area() {

    let radius = Number(prompt("What is the radius of the circle?"));

    console.log(`The area is: ${Math.PI * radius**2}`);

}

/*****  Your code goes below  *****/


function to_celsius() {
    let celcius = +prompt("what is the tempurature in fahrenheit")
    let fahrenheit = (celcius * 9/5) + 32 
    console.log(fahrenheit)
    }
    

    function to_fahrenheit() {
        let fahrenheit = +prompt("what is the tempurature in celcius")
        let celcius = (fahrenheit - 32) * 5/9
        console.log(celcius)
        }

function roll_d10() {
   let num = Math.random() * 10
     num = Math.floor(Math.random() * 10)
    console.log(num)
}

let volume = 5

function show_volume() {
 console.log(volume)
}

function volume_up() {
volume = volume + 1
console.log(`The volume is ${volume}`)
}
function volume_down() {
    volume = volume - 1
    console.log(`The volume is ${volume}`)
    }

function random_volume() {
volume = Math.random * 10
console.log(volume)
}

function born_in() {
let birth_date = prompt("How old are you?")
year = (2024 - birth_date)
console.log(year)
}

function roll_d20() {
    let num = Math.random() * 20
      num = Math.round(Math.random() * 20)
     console.log(num)
     alert (`You rolled ${roll_d20}`)
}