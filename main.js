let userArray
let currentUser


window.onload = function() {
  fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(user => userArray = user)
    .then(user => displayPeople())

}


let list = document.getElementById("people-list")
const displayPeople = () => {
  for(let i = 0; i < userArray.results.length; i++) {
    let newButton = document.createElement("button")
    newButton.innerHTML = "+"
    newButton.onclick = function(){expandDetails(userArray.results[i], this)};
    newButton.id = i
    let nextUser = document.createElement("p")
    nextUser.style.margin = "0"
    console.log(userArray.results[i].name.first)
    nextUser.innerHTML = userArray.results[i].name.first + " " + userArray.results[i].name.last
    // list.appendChild(document.createElement("br"))

    list.appendChild(nextUser)
    list.appendChild(newButton)
    isExpandedList.push(false)
  }
}

let isExpandedList = []
const expandDetails = (user, button) => {
  if (!isExpandedList[button.id]) {
    //expand
    let address = document.createElement("p")
    address.innerHTML = user.location.street.number + " " + user.location.street.name + ", " + user.location.city + " " + user.location.state + " " + user.location.postcode
    button.parentElement.insertBefore(address, button)
    button.innerHTML = "-"
    isExpandedList[button.id] = true
  } else {
    //close
    button.previousElementSibling.remove()
    isExpandedList[button.id] = false
    button.innerHTML = "+"


  }
}