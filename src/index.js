document.addEventListener("DOMContentLoaded", () => {
   
  let inputBox = document.getElementById('create-task-form')
  // console.log(inputBox)
  

  inputBox.addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo(e.target.newtask.value)
    inputBox.reset()
    
  } )
  
})

function handleToDo(list) {
  let p = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' x'
  p.textContent = list
  p.appendChild(btn)
  
  document.querySelector('#tasks').appendChild(p)
}
function handleDelete(e) {
  e.target.parentNode.remove()

}

// let p = document.getElementById('tasks')
//     let li = p.createElement("li")
//     let btn = p.createElement("button")
//     btn.textContent = "x"
//     li.textContent = `${cont}`
//     btn.addEventListener("click", (e){
//       p.removeChild()
//     }) 