/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
{
  const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
  let listadoUl = document.createElement('ul')
  document.body.appendChild(listadoUl)
  for (let i = 0; i < countries.length; i++) {
    const listLi = document.createElement('li' + i)
    listLi.textContent = countries[i]
    listadoUl.appendChild(listLi)
  }
}
//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const fnRemoveMe = document.querySelectorAll(`.fn-remove-me`)
fnRemoveMe.forEach((item) => item.parentNode.removeChild(item))

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const printHere = document.querySelector(`[data-function='printHere']`)
cars.forEach((car) => {
  let newCar = document.createElement('li')
  newCar.textContent = car
  printHere.appendChild(newCar)
  document.body.appendChild(printHere)
})

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */
const countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
const containerDiv = document.createElement('div')
document.body.appendChild(containerDiv)
countries.forEach((country) => {
  const countryDiv = document.createElement('div')
  countryDiv.classList.add('card')
  const h4Title = document.createElement('h4')
  h4Title.textContent = country.title
  const imgCountry = document.createElement('img')
  imgCountry.src = country.imgUrl
  containerDiv.appendChild(countryDiv).append(h4Title, imgCountry)
})

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.*/

const btnDeleteLast = document.createElement('button')
btnDeleteLast.textContent = 'Elimina'
document.body.appendChild(btnDeleteLast)
btnDeleteLast.addEventListener('click', () => {
  document
    .getElementsByClassName('card')
    [document.getElementsByClassName('card').length - 1].remove()
})

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html. */

for (let i = 0; i < countries.length; i++) {
  const btnsRemove = document.createElement('button')
  btnsRemove.textContent = `Borra`
  document.getElementsByClassName('card')[i].appendChild(btnsRemove)
  btnsRemove.onclick = function removeCard() {
    this.parentElement.remove()
  }
}
