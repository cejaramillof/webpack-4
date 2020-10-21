import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import './sass.scss'
import './less.less'
import './stylus.styl'

function App() {
  const [loaderList, setLoaderList] = useState([])
  async function handleClick() {
    setLoaderList(data.loaders)
    const { alerta } = await import('./alert')
    alert('omg')
  }
  return (
    <div>
      <p className="sass">sass</p>
      <p className="less">less</p>
      <p className="stylus">stylus</p>
      <p className="post-css">postcss</p>
      <ul>
        {
          loaderList.map((item, index) => <Loader key={index} {...item} />)
        }
      </ul>
      <button onClick={handleClick}>Loaders</button>
    </div>
  )
}

export default App