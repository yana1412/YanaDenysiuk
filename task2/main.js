const images = document.querySelectorAll('.img')
const array = document.querySelectorAll('.images__wrapper')
const number = document.querySelector('#number')
const data = document.querySelector('#data')
const body = document.querySelector('body')
const btnClose = document.querySelector('.btn-close')

number.innerHTML=images.length + ' елементів'

data.innerHTML = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`

images.forEach((i)=>{
    i.addEventListener('click', ()=>{
        i.classList.add('show-js')
        if (i = 'show-js' ){
            body.classList.add('shadow-js')
            btnClose.classList.add('open')
        }
    })
})

btnClose.addEventListener('click', () => {
    body.classList.remove('shadow-js')
    images.forEach((i) => {
        i.classList.remove('show-js')
    })
    btnClose.classList.remove('open')
})






