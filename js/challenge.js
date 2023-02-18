function increaseCounter () {
    let count = Number(document.getElementById("counter").innerHTML)
    document.getElementById("counter").innerHTML = count + 1
}

function decreaseCounter () {
    let count = Number(document.getElementById("counter").innerHTML)
    document.getElementById("counter").innerHTML = count - 1
}


function likeCounter () {
    let count = (document.getElementById("counter").innerHTML)
    let numberOfLikes = 0
    numberOfLikes += 1
    const ul = document.getElementsByClassName("likes")
    const li = document.createElement("li")
    li.innerText = (`${count} has been liked ${numberOfLikes} time`)
    ul[0].appendChild(li)
}


setInterval(increaseCounter, 1000)

document.getElementById("plus").addEventListener("click", increaseCounter)
document.getElementById("minus").addEventListener("click", decreaseCounter)
document.getElementById("heart").addEventListener("click", likeCounter)
