
function changeColor() {
    console.log('clicked')
    let butColor = document.getElementById('buttonBgc')
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    butColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

}

