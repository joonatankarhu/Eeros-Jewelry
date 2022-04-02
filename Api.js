// Import the Commerce module
import Commerce from '@chec/commerce.js';
import 'publicKey' from '.env'

// Create a Commerce instance
const commerce = new Commerce({publicKey}, true);

commerce.products.list().then((product) => console.log(product));

// const app = document.getElementById('api-products-container')


// var request = new XMLHttpRequest()
// request.open('GET', 'pk_391011518f592c7606f6097e317e72fe0e75e15bb96a4', true)
// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(product => {

//     console.log(product);

//     app.appendChild(productContainer)


//     const productContainer = document.createElement('div')
//     productContainer.setAttribute('class', 'product-item-column')

//     /* Product */
//         const myProduct = document.createElement('div')
//         myProduct.setAttribute('class', 'product-item')

//     /* Product Image */
//         const productImageContainer = document.createElement('div')
//         productImageContainer.setAttribute('class', 'product-image')
//         const productImage = document.createElement('img')
//         productImage.src = product.image

//     /* Product Description */
//         const productDescription = document.createElement('div')
//         productDescription.setAttribute('class', 'product-description')
//         const productHeader = document.createElement('h2')
//         productHeader.textContent = product.title
//         const productPara = document.createElement('p')
//         productPara.textContent = product.description


//     /* Product Order Button */
//         const productOrderDiv = document.createElement('div')
//         productOrderDiv.setAttribute('class', 'order-button')
//         const productOrderButton = document.createElement('button')
//         productOrderButton.textContent = 'Place Order'

//         productContainer.appendChild(myProduct)
//         myProduct.appendChild(productImageContainer)
//             productImageContainer.appendChild(productImage)
//         myProduct.appendChild(productDescription)
//             productDescription.appendChild(productHeader)
//             productDescription.appendChild(productPara)
//         myProduct.appendChild(productOrderDiv)
//             productOrderDiv.appendChild(productOrderButton)
      
//     })
//   } else {
//     const errorMessage = document.createElement('p')
//     errorMessage.textContent = `Error - Something went wrong...`
//     app.appendChild(errorMessage)
//   }
// }

// request.send()