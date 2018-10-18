import React, { Component, PropTypes } from 'react'
import Title from './Title'

const propTypes = {
  routerContainer: PropTypes.object.isRequired
}



class Index extends Component {

  setTitle() {
    let titleList = ["机构列表", "机构详情"];
    const page = location.hash.split('/')[1];
    switch (page) {
      case "agencyDetail":
        return titleList[1]
      default:
        return titleList[0]
    }
  }

  componentDidMount() {
    document.addEventListener('touchmove', (e) => { e.preventDefault(); return false }, false)
  }

  render() {
    const { routerContainer } = this.props
    const title = this.setTitle()

    return (
      <section>
        <Title title={title} />
        {routerContainer}
      </section>
    )
  }
}

Index.propTypes = propTypes

export default Index
