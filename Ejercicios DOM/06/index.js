// Elimina el elemento que tenga la clase .fn-remove-me
const removeMe = document.querySelector('.fn-remove-me')
if (removeMe) {
  removeMe.parentNode.removeChild(removeMe)
} else {
  console.log('el elemento no existe')
}
