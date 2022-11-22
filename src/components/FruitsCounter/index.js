import {Components} from 'react'

import './index.css'

class FruitsCounter extends Components {
  state = {count: 0, count1: 0}

  mango = () => {
    const {count} = this.state
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  banana = () => {
    const {count1} = this.state
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  render() {
    const {count, count1} = this.state
    return (
      <div className="bg-container">
        <div className="se-container">
          <h1 className="heading">
            Bob ate {count} mangoes {count1} bananas
          </h1>
          <div className="images">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
              className="image"
              alt="Mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="image"
              alt="Banana"
            />
          </div>
          <div className="imgs">
            <button className="button" type="button" onClick={this.mango}>
              Eat Mango
            </button>
            <button className="button" type="button" onClick={this.banana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
