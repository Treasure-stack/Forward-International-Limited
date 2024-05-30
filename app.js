const menu = document.querySelector('.toggle-menu')
const closeIcon = document.querySelector('.back')
const dropDown = document.querySelector('.bars')


dropDown.addEventListener('click',()=>{
  menu.style.display = 'block'
  dropDown.style.display = 'none'
})

closeIcon.addEventListener('click',()=>{
  menu.style.display= 'none'
  dropDown.style.display='block'
})
