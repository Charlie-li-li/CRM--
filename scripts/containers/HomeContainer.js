import { connect } from 'react-redux'
import React from 'react'
import Home from '../components/Home'
import RouterDemo from './RouterDemo'

const mapStateToProps = () => ({
  routerContainer: <RouterDemo />
})

export default connect(mapStateToProps, null)(Home)
