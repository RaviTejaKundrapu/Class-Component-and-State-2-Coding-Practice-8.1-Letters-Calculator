// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  countingLetters = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    const countLength = count.length
    return (
      <div className="app-container">
        <div className="countImageContainer">
          <div className="countContainer">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="note" htmlFor="Enter the phrase">
              Enter the phrase
            </label>
            <input
              type="text"
              className="inputbox"
              onChange={this.countingLetters}
              placeholder="Enter the phrase"
              id="Enter the phrase"
            />
            <p className="count">No.of letters: {0 + countLength}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
