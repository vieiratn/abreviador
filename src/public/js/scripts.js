const button = document.querySelector('#copy-button')

button.addEventListener('click', (_) => {
    const input = document.querySelector('#copy-input')
    console.log(input)
    input.select()
    document.execCommand('copy')
})