const form = document.querySelector('#form')
const input = document.querySelector('#input')
const list = document.querySelector('#list')
const resetButton = document.querySelector('#reset')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const response = await fetch(`http://universities.hipolabs.com/search?country=${input.value}&limit=5`)
    const data = await response.json()

    data.forEach((i, index) => {
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerHTML = `<span>${index + 1}</span><span>${i.alpha_two_code}</span><span>${i.country}</span><span>${i.name}</span><a href="${i.web_pages[0]}">${i.web_pages[0]}</a>`
        list.appendChild(item)
        list.classList.add('show')
    })
})

resetButton.addEventListener('click', () => {
    input.value = ""
    list.innerHTML = ""
    list.classList.remove('show')
})