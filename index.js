

// function logOut(){
//     console.log(42)
// }
// logOut()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36 
// //sum is a global variable 
// //so it can be used in another function
// let sum = lap1 + lap2 + lap3
// function myLog() {
//     console.log(sum)
// }
// myLog()

// let lapsCompleted = 0

// function increase() {
//     lapsCompleted = lapsCompleted +1
//     console.log(lapsCompleted);
// }

// increase();
// increase();
// increase();




//  let message = "You have three new notifications"
//  let username = "per"
//  let messageToUser = message + ", "+ username + "!"
//  console.log(messageToUser)

// let welcomeEl = document.getElementById("welcome-el")

// let Name = "Elefue Chima"
// let greeting = "Welcome back "
// let myGreeting = greeting +  Name +"."
// welcomeEl.innerText = myGreeting
let saveEl= document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

console.log(saveEl)

function increment(){
    
count = count +=1
countEl.textContent = count

}

function save() {
let countStr = count + " - "
saveEl.textContent += countStr

 countEl.textContent = 0
 count = 0
}
console.log("Let's count people on the subway!")


// //classwork

// let firstName = "Chima"
// let lastName = "Elefue "
// let fullName = lastName + firstName
// console.log(fullName)
// let welcomeEl = document.getElementById("welcome-el")
// let greeting = "Hi there "
// let myGreeting = greeting + fullName
// welcomeEl.innerText = myGreeting
// console.log(myGreeting)


// let myPoints = 3
// function add3Points() {
//     myPoints += 3
// }
// function remove1Point() {
//     myPoints -= 1
// }
// add3Points()
// remove1Point()
// add3Points()
// add3Points()
// remove1Point()
// console.log(myPoints)