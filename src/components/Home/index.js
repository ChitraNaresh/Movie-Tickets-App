import {Component} from 'react'
import FirstPage from '../FirstPage'
import './index.css'
import Booking from '../Booking'

class Home extends Component {
  state = {
    intialData: [],
    intialVal: true,
    movieName: '',
    summaryVal: '',
  }

  componentDidMount() {
    this.fetchData()
  }

  onChangeIntialVal = (name, summary) => {
    const {intialVal} = this.state
    return this.setState({
      intialVal: !intialVal,
      movieName: name,
      summaryVal: summary,
    })
  }

  fetchData = async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=all')
    const data = await response.json()
    this.setState({intialData: data})
  }

  render() {
    const {intialData, intialVal, movieName, summaryVal} = this.state
    return (
      <div>
        <h1 className="main-heading">Movies Booking App</h1>
        <ul className="home-container">
          {intialVal ? (
            intialData.length > 0 &&
            intialData.map(eachItemVal => (
              <FirstPage
                eachItem={eachItemVal}
                key={eachItemVal.score}
                onChangeIntialVal={this.onChangeIntialVal}
              />
            ))
          ) : (
            <Booking
              movieName={movieName}
              onChangeIntialVal={this.onChangeIntialVal}
              summaryPass={summaryVal}
            />
          )}
        </ul>
      </div>
    )
  }
}

export default Home
