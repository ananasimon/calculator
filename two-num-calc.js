let number1 = document.getElementById("n1")
let number2 = document.getElementById("n2")
let btnSum = document.getElementById("plus")
let btnSub = document.getElementById("minus")
let btnMult = document.getElementById("multiply")
let btnDiv = document.getElementById("divide")
let btnDivInt = document.getElementById("divide-integer")
let btnPow = document.getElementById("power")
let result = document.getElementById("res")
let crazyCapy = document.getElementById("crazy-capy")
let eatingCapy = document.getElementById("eating-capy")

crazyCapy.style.opacity = '0.1'
eatingCapy.style.opacity = '0.1'

btnSum.addEventListener ('click', function () {
    let n1 = +number1.value
    let n2 = +number2.value
    result.style.color = 'rgb(66, 21, 7)'
    result.innerHTML = `${n1} + ${n2} = ${n1 + n2}`
    crazyCapy.style.opacity = '0.9'
    eatingCapy.style.opacity = '0.9'
})


btnSub.addEventListener ('click', function(){
    let n1 = +number1.value
    let n2 = +number2.value
    result.style.color = 'rgb(66, 21, 7)'
    result.innerHTML = `${n1} - ${n2} = ${n1 - n2}`
    crazyCapy.style.opacity = '0.9'
    eatingCapy.style.opacity = '0.9'
})

btnMult.addEventListener ('click', function() {
    let n1 = +number1.value
    let n2 = +number2.value
    result.style.color = 'rgb(66, 21, 7)'
    result.innerHTML = `${n1} &times ${n2} = ${n1*n2}`
    crazyCapy.style.opacity = '0.9'
    eatingCapy.style.opacity = '0.9'
})

btnDiv.addEventListener ('click', function() {
    let n1 = +number1.value
    let n2 = +number2.value
    if (n2 == 0) {
        result.style.color = 'red'
        crazyCapy.style.opacity = '0.1'
        eatingCapy.style.opacity = '0.1'
        result.innerHTML = "ERROR: cannot divide by zero"
    }
    else {
        let divi = Math.floor((n1/n2)*100)/100
        result.innerHTML = `${n1} : ${n2} = ${divi}`
        result.style.color = 'rgb(66, 21, 7)'
        crazyCapy.style.opacity = '0.9'
        eatingCapy.style.opacity = '0.9'
    } 
    
})

btnDivInt.addEventListener ('click', function(){
    let n1 = +number1.value
    let n2 = +number2.value
    if (n2 == 0) {
        result.style.color = 'red'
        crazyCapy.style.opacity = '0.1'
        eatingCapy.style.opacity = '0.1'
        result.innerHTML = "ERROR: cannot divide by zero"
    }
    else {
        let divInt = (n1 - n1%n2)/n2
        result.style.color = 'rgb(66, 21, 7)'
        result.innerHTML = `${n1} % ${n2} = ${divInt} (remainder ${n1%n2})`
        crazyCapy.style.opacity = '0.9'
        eatingCapy.style.opacity = '0.9'
    }
})

btnPow.addEventListener ('click', function(){
    let n1 = +number1.value
    let n2 = +number2.value
    let pow = Math.pow(n1, n2)
    result.style.color = 'rgb(66, 21, 7)'
    result.innerHTML = `${n1} ^ ${n2} = ${pow}`
    crazyCapy.style.opacity = '0.9'
    eatingCapy.style.opacity = '0.9'
})

