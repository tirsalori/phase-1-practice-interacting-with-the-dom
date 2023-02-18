function increaseCounter () {
    let count = Number(document.getElementById("counter").innerHTML)
    document.getElementById("counter").innerHTML = count + 1
}

function decreaseCounter () {
    let count = Number(document.getElementById("counter").innerHTML)
    document.getElementById("counter").innerHTML = count - 1
}

const numbersObj = {}

function likeCounter () {
    let count = Number(document.getElementById("counter").innerHTML)
    const ul = document.getElementsByClassName("likes")
    if (numbersObj[count] === undefined) {
        const li = document.createElement("li")
        li.setAttribute("id", count)
        ul[0].appendChild(li)
        numbersObj[count] = 0
        numbersObj[count]++
        li.innerText = (`${count} has been liked 1 time.`)
    } else {
        let liCount = document.getElementById(count)
        numbersObj[count]++
        liCount.innerText = (`${count} has been liked ${numbersObj[count]} times`)
    }
}

function pauseCounter () {
    if (document.getElementById("pause").innerText === "pause") {
        document.getElementById("plus").disabled = true
        document.getElementById("minus").disabled = true
        document.getElementById("heart").disabled = true
        document.getElementById("pause").innerText = "resume"
        clearInterval(counter)
    } else {
        document.getElementById("plus").disabled = false
        document.getElementById("minus").disabled = false
        document.getElementById("heart").disabled = false
        document.getElementById("pause").innerText = "pause"
        setInterval(increaseCounter, 1000)
    }
}

function leaveComment (event) {
    event.preventDefault()
    let comment = document.getElementById("comment-input").value
    if (comment !== ""){
        document.getElementById("list").innerHTML += comment
        document.getElementById("list").innerHTML += "<br>"
    }   
}

const counter = setInterval(increaseCounter, 1000)

document.getElementById("plus").addEventListener("click", increaseCounter)
document.getElementById("minus").addEventListener("click", decreaseCounter)
document.getElementById("heart").addEventListener("click", likeCounter)
document.getElementById("pause").addEventListener("click", pauseCounter)
document.getElementById("submit").addEventListener("click", leaveComment)
