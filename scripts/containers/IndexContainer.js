import { connect } from 'react-redux'
import React from 'react'
import Index from '../components/Index'
import RouterDemo from './RouterDemo'

const mapStateToProps = () => ({
  routerContainer: <RouterDemo />
})

export default connect(mapStateToProps, null)(Index)
