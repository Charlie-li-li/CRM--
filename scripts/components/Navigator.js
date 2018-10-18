import React, { Component } from 'react'
import { hashHistory } from 'react-router'

class Navigator extends Component {

  constructor(props) {
    super(props)
    this.sendUrl = this.sendUrl.bind(this)
  }

  sendUrl(url) {
    hashHistory.push(url)
  }

  render() {
    const data = [
      { name: '列表', url: '/list?status=show' },
      { name: '添加', url: '/form' },
      { name: '删除', url: '/list?status=edit' }
    ]

    return (
      <nav>
        <ul className="Navigator">
          {
            data.map((item, i) => (
              <li onTouchEnd={() => this.sendUrl(item.url)} key={i}>
                {item.name}
              </li>
            ))
          }
        </ul>
      </nav>
    )
  }
}

export default Navigator
