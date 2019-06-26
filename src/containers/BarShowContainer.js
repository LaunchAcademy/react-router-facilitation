import React, { Component }  from 'react'
import Bar from '../components/Bar'

class BarShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        reviews: []
      }
    }
  }

  componentDidMount() {
    // debugger;
    let barId = this.props.match.params.id;
    fetch(`http://localhost:4567/api/v1/bars/${barId}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      // debugger
      this.setState({data: json})
    })
  }

  render() {
    return(
      <div className="bars-container">
      <h3> Bar Showssssssss Container </h3>
        <Bar
          key={this.state.data.id}
          id={this.state.data.id}
          name={this.state.data.name}
          averageRating={this.state.data.average_rating}
          reviews={this.state.data.reviews}
        />
      </div>
    )
  }
}

export default BarShowContainer
