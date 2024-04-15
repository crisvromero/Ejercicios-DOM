// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']
const ul = document.createElement('ul')
const divPrinthere = document.querySelector('[data-function="printHere')
divPrinthere.appendChild(ul)
places.forEach((place) => {
  const li = document.createElement('li')
  li.textContent = place
  ul.append(li)
})
