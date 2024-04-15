// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const nuevoDiv = document.createElement('div')
document.body.appendChild(nuevoDiv)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const otroDiv = document.createElement('div')
const parrafo = document.createElement('p')
otroDiv.appendChild(parrafo)
document.body.appendChild(otroDiv)

/* 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript. */
const divsConP = document.createElement('div')
for (let i = 1; i <= 6; i++) {
  const nuevaP = document.createElement('p' + i)
  divsConP.appendChild(nuevaP)
}
document.body.appendChild(divsConP)

/* 1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'. */
const parrafoDinamico = document.createElement('p')
parrafoDinamico.textContent = 'Soy dinámico!'
document.body.appendChild(parrafoDinamico)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('h2.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

/* 1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array. */
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ulApps = document.createElement('ul')
for (let i = 0; i < apps.length; i++) {
  const liApps = document.createElement('li' + i)
  liApps.textContent = apps[i]
  ulApps.appendChild(liApps)
}
document.body.appendChild(ulApps)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const nodesToRemove = document.querySelectorAll('.fn-remove-me')
nodesToRemove.forEach((node) => node.parentNode.removeChild(node))

/* 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */
const pMedio = document.createElement('p')
pMedio.textContent = 'Voy  en medio!'
const primerDiv = document.getElementsByTagName('div')[0]
const segundoDiv = document.getElementsByTagName('div')[1]
primerDiv.parentNode.insertBefore(pMedio, segundoDiv)

/* 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here */

const divsAgregar = document.querySelectorAll('div.fn-insert-here')
divsAgregar.forEach((div) => {
  const pDentro = document.createElement('p')
  pDentro.textContent = 'Voy dentro!'
  div.appendChild(pDentro)
})
