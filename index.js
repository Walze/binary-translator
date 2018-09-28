var mm = n => {

  var i = 1

  do {
    i++

    if (i > n) return 8

  } while (n % i !== 0 || i < 8)

  return i
}


var textField = document.querySelector('#char')
var binaryField = document.querySelector('#binary')
var spaces = document.querySelector('#spaces')

textField.addEventListener('keyup', () => {

  var chars = textField.value.trim()

  var binary = ''

  for (var i = 0; i < chars.length; i++) {

    var converted = chars.charCodeAt(i).toString(2)
    var space = spaces.checked
      ? ' '
      : ''

    binary += converted + space

  }

  binaryField.value = binary
})

binaryField.addEventListener('keyup', () => {

  var txt = binaryField.value.trim()

  var regex = new RegExp(`([10]{${mm(txt.length)}}|\s+)`, 'g')
  var chars = txt.match(regex)

  if (!chars) return

  var text = ''

  for (let i = 0; i < chars.length; i++) {

    var converted = String.fromCharCode('0b' + chars[i])

    text += converted

  }

  textField.value = text
})
