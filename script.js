document.getElementById('button').addEventListener('click', button)
function button () {
  document.getElementById('paragraph2').innerHTML = 'This should work, right?'
  document.body.style.backgroundColor = 'chocolate'
}

document.getElementById('button2').addEventListener('click', button2)
function button2 () {
  document.getElementById('paragraph2').innerHTML = 'Yes, it should'
  document.body.style.backgroundColor = 'lightblue'
}

document.getElementById('add').addEventListener('click', diskCord)
function diskCord () {
  alert('ERROR DO NOT CLICK OK')
  document.getElementById('back').style.backgroundColor = 'red'
}

// change text & ackground colours through buttons & add warning button.