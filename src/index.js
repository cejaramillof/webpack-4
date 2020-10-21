import text from './text' // can be without .js because webpack default expect .js
import search from './search'
import localRender from './render'
import './style.css'


const id = prompt('quien es ese pokemon')
search(id)
  .then(data => localRender(data))
  .catch(err => console.log(err))

// text();
// TO HMR

if (module.hot) {
  module.hot.accept('./text.js', function() {
    console.log('Hot M Reloading')
    text()
  })
}
