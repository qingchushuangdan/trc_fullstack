import React, {Component} from 'react'
class App extends Component{
  render() {
    return ( // jsx = js + XML
      <ul className = "items">
        <li>vue</li>
        <li>{false ? 'react': 'REACT'}</li>
      </ul>
      // <div>
      //   Hello world
      // </div>
    )
  }
}
export default App