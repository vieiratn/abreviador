const button = document.querySelector('#copy-button')

button.addEventListener('click', (e) => {
    const input = document.querySelector('#copy-input').value
    console.log(input)
    input.select()
    document.execCommand('copy')
})