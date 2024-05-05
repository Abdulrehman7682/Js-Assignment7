let rightNowDate = new Date()
console.log(rightNowDate)
document.getElementById("state").innerHTML = rightNowDate
let allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//Get Name OF Today
function todayName() {
    let day = new Date()
    let dayName = day.getDay()
    console.log(dayName)
    let dayNameWord = allDays[dayName]
    console.log(dayNameWord)
    let html = "Today is '<span style= 'color:red; font-size:20px'>" + dayNameWord + "'</span>"
    document.getElementById("Output").innerHTML = html
}
//Calculate Days Since I Born
function daysSinceBorn() {
    let dob = document.getElementById("input-Text").value
    if (!dob) {
        alert("Please type your Date of Birth")
        return
    }
    let date = new Date()
    let dateBirth = new Date(dob)
    let dateOfBirth = date.getTime() - dateBirth.getTime()
    let Birth = dateOfBirth / (1000 * 60 * 60 * 24)
    console.log(Birth)
    let birthInDays = Math.floor(Birth)
    let html = "<span style= 'color:red; font-size:20px;'>'" + birthInDays + "'</span> days have been passed since you born."
    document.getElementById("Output").innerHTML = html
}
//When Your Next Birthday
function nextBirthday() {
    let dob = document.getElementById("input-Text").value
    if (!dob) {
        alert("Please type your Date of Birth")
        return
    }
    let date = new Date()
    let dateBirth = new Date(dob)
    let dateOfBirth = dateBirth.getTime() - date.getTime()
    let Birth = dateOfBirth / (1000 * 60 * 60 * 24)
    console.log(Birth)
    let birthInDays = Math.floor(Birth)
    let html = "<span style= 'color:red; font-size:20px;'>'" + birthInDays + "'</span> days are left in your Birthday."
    document.getElementById("Output").innerHTML = html
}
// Greet User 
function greetUser() {
    let name = prompt("Please Type Your Name")
    let msg = "Good "
    let date = new Date()
    let day = date.getHours()
    if (day >= 4 && day < 12) {
        msg += "Morning"
    }
    else if (day >= 12 && day < 17) {
        msg += "Afternoon"
    }
    else if (day >= 17 && day < 20) {
        msg += "Evening"
    } else {
        msg += "Night"
    }
    let html = "<span style= 'color:green;font-size:20px;'>" + msg + " '" + name + "'</span>"
    document.getElementById("Output").innerHTML = html
}
//Tell Time
function tellTime() {
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let sec = date.getSeconds()
    let html = "<br>You clicked the button @" + hour + ":" + minutes + ":" + sec
    document.getElementById("Output").innerHTML += html
}
//Tell Time 1
function tellTime1() {
    tellTime()
}
//Tell Time 2
function tellTime2() {
    tellTime()
}
//Tell Time 3
function tellTime3() {
    tellTime()
}
//Calculate Tax
function calculateTax() {
    let bill = +prompt("Type Your Bill Here")
    if (!bill) {
        alert("Please Type Your Bill To Calculate")
        return
    }
    let tax = 18
    let totalTax = bill * (tax / 100)
    let html = "Tax = " + totalTax
    document.getElementById("Output").innerHTML = html
}
// Calculate Total
function calculateTotal() {
    let bill = +prompt("Type Your Bill Here")
    if (bill <= 600) {
        tax = 9
    } else {
        tax = 18
    }
    let totalTax = bill * (tax / 100)
    let totalBill = totalTax + bill
    totalBill = Math.round(totalBill)
    let html = "Bill =<span style= 'color:green;'> " + bill + "</span>" + "<br>" + "Tax =<span style= 'color:red;'> " + totalTax + "</span>" + "<br>" + "Total = " + totalBill
    document.getElementById("Output").innerHTML = html
}
//Clear
document.getElementById("clear-output").onclick = function () {
    document.getElementById("Output").innerHTML = ""
}
//clear input
document.getElementById("clear").onclick = function () {
    document.getElementById("input-Text").value = ""
}
