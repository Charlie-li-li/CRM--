import React, { Component, PropTypes } from 'react'
import iScroll from 'iscroll'
import ReactIScroll from 'react-iscroll'
import Navigator from './Navigator'

const iScrollOptions = {
  preventDefault: false,
  mouseWheel: true,
  scrollbars: false,
  scrollX: true
}

const propTypes = {
  getList: PropTypes.func.isRequired,
  delItem: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired
}

class List extends Component {
  constructor(props) {
    super(props)
    this.removeObj = this.removeObj.bind(this)
  }

  componentDidMount() {
    const { getList } = this.props
    getList()
  }

  removeObj(id) {
    const { delItem } = this.props
    delItem(id)
  }

  render() {
    const { list, location } = this.props
    const { status } = location.query
    if (!list.list) {
      return null
    }
    return (
      <div>
        <div className="ListContainer ">
          <ReactIScroll
            iScroll={iScroll}
            options={iScrollOptions}
            ref="monthIScroll1"
          >
            <ul className="animated fadeIn">
              {
                list.list.map((k, i) => (
                  <li className="list" key={i} >
                    <span >姓名:{list.data[k].name}</span>
                    <span >年龄:{list.data[k].age}</span>
                    {
                      status === 'edit' ? (
                        <span
                          className="cursor"
                          onTouchEnd={() => this.removeObj(k)}
                          title={k}
                        >
                          删除
                        </span>
                      )
                      : null
                    }
                  </li>
                ))
              }
            </ul>
          </ReactIScroll>
        </div>
        <Navigator />
      </div>
    )
  }
}

List.propTypes = propTypes

export default List
