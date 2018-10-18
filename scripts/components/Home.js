import React, { Component, PropTypes } from 'react'
import Title from './Title'

const propTypes = {
  routerContainer: PropTypes.object.isRequired
}

class Home extends Component {
  componentDidMount() {
    document.addEventListener('touchmove', (e) => { e.preventDefault(); return false }, false)
  }

  render() {
    const { routerContainer } = this.props
    return (
      <section>
        <Title title="React+Redux Mobile" />
        {routerContainer}
      </section>
    )
  }
}
Home.propTypes = propTypes
export default Home
