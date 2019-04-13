import React, { Component } from 'react';

class Fave extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFave: false
    }
  }

  handleClick = (e) => {
    e.stopPropagation()
    // console.log('Fave component is clicked')
    this.setState(prevState => ({ isFave:!prevState.isFave }))
  }

  render() {

      console.log(this.state)
      const isfavorite = this.state.isFave ? 'remove_from_queue' : 'add_to_queue'

      return (
        <div
          className={`film-row-fave ${isfavorite}`}
          onClick={this.handleClick} >
          <p className="material-icons">add_to_queue</p>
        </div>
      )
  }
}

export default Fave
