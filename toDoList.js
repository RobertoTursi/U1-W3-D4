const aggiungiTask = () => {
    
    let inputHTML = document.querySelector("input")

    let ul = document.querySelector("ul")
    
    let nuovoLi = document.createElement("li")
    nuovoLi.innerText = inputHTML.value
    nuovoLi.onclick = fatto

    let clearButton = document.createElement("button")
    clearButton.innerText = "x"
    clearButton.onclick = clearTask


    ul.appendChild(nuovoLi)
    ul.appendChild(clearButton)
  }
  
  
  const fatto = (clickEvent) => { 
      clickEvent.target.style.textDecoration = "line-through"
  }

  const clearTask = (clickEvent) => {
    clickEvent.target.remove()
    
  }





/*
const clickOnButton = () => {
    let input = document.querySelector("input")
    let ul = document.querySelector("ul")

    const li = document.createElement("li")
    li.innerText = input.value
    li.onclick = fatto

    ul.appendChild(li)

}

const fatto = () => {
    clickEvent.target.style.textDecoration = "line-through"
}
*/


/*
const buttonToCreateNewTask = document.getElementById("buttonTask")
buttonToCreateNewTask.addEventListener("click", clickOnButton)

const clickOnButton = function () {
    //const divContainer = document.querySelector(".container div")
    const mainOfPage = document.querySelector("main")
    const input = document.getElementById("myInput")
    const inputValue = input.value
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    li.innerText = inputValue
    const button = document.createElement("button")
    button.innerText = "Cancella task"
    ul.appendChild(button)
    ul.appendChild(li) 
    mainOfPage.appendChild(div)
    //divContainer.appendChild(div)
}

const clickOnTask = function () {
    const clickableDiv = document.querySelector("div")
    clickableDiv.onclick = function () {
    const span = document.querySelector("div span")
    span.innerText.style.textDecoration = "line-through"
}
}


*/