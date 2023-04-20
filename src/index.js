document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addToDoList(e.target.new_task_description.value)
    form.reset()
  })


});

function addToDoList(todo){
  const li = document.createElement('li')
  const btn = document.createElement('button')
  btn.textContent = 'x'
  btn.addEventListener('click', handleDelete)
  li.textContent = `${todo}  `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}