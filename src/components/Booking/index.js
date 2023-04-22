import {Component} from 'react'
import './index.css'

class Booking extends Component {
  state = {
    userName: '',
    timings: '',
    price: '',
    userList: [],
    isTrue: false,
  }

  onBack = () => this.setState(prevState => ({isTrue: !prevState.isTrue}))

  onBooking = event => {
    event.preventDefault()
    const {userName, timings, price} = this.state
    const userDetails = {
      userName,
      timings,
      price,
    }
    this.setState(prevState => ({
      userList: [...prevState.userList, userDetails],
    }))
    this.setState({userName: ''})
  }

  onInputUser = event => this.setState({userName: event.target.value})

  onChangeTimings = event => this.setState({timings: event.target.value})

  onPrice = event => this.setState({price: event.target.value})

  render() {
    const {userName, timings, price, isTrue, userList} = this.state
    const {movieName, onChangeIntialVal, summaryPass} = this.props
    const onBackFun = isTrue && onChangeIntialVal()
    const saveData = localStorage.setItem('userData', JSON.stringify(userList))
    const realData = summaryPass.split(/[<p></p><b></b>]/)
    return (
      <div className="booking-container">
        <div className="booking-form">
          <h1>{movieName} Movie</h1>
          <p>{realData}</p>
          <div>
            <form onSubmit={this.onBooking}>
              <div>
                <label htmlFor="userNameVal">User Name</label>
                <br />
                <input
                  type="text"
                  className="input-el-user"
                  id="userNameVal"
                  value={userName}
                  placeholder="Enter your name"
                  onChange={this.onInputUser}
                />
              </div>
              <div>
                <label htmlFor="userTimings" className="choose-time">
                  Choose Your Time
                </label>
                <br />
                <select
                  id="userTimings"
                  onChange={this.onChangeTimings}
                  className="input-el"
                >
                  <option value="10 AM" selected>
                    10 AM
                  </option>
                  <option value="1 AM">1 AM</option>
                  <option value="4 AM">4 AM</option>
                  <option value="7 AM">7 AM</option>
                </select>
              </div>
              <div>
                <p>Prices</p>
                <div>
                  <input
                    selected
                    type="radio"
                    id="hundredRupees"
                    name="price"
                    value="100"
                    onChange={this.onPrice}
                  />
                  <label htmlFor="hundredRupees">100 Rs</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="twoHundredRupees"
                    name="price"
                    onChange={this.onPrice}
                    value="200"
                  />
                  <label htmlFor="twoHundredRupees" className="input-el">
                    200 Rs
                  </label>
                </div>
              </div>
              <button type="submit" className="input-el">
                Book Your Ticket
              </button>
            </form>
            <div>
              <button type="submit" onClick={this.onBack} className="input-el">
                Back To Home
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Booking
