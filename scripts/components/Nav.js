import React from 'react'
import { hashHistory } from 'react-router'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            acitveNav:0
        }
        this.sendUrl=this.sendUrl.bind(this)
    }

    sendUrl(url,index) {
      this.setState({acitveNav: index})
      hashHistory.push(url)
    }

    render() {
        const {location } = this.props
        const { acitveNav } = this.state
        const navList = [
            { name: '机构', url: '/agency' },
            { name: '联系人', url: '' },
            { name: '负责人', url: '' }
        ]
        return (
          <nav>
            <ul className='nav'>
              {
                navList.map((item, index) => (
                  <li
                    className={acitveNav==index?"acive":null}
                    onTouchEnd={() => this.sendUrl(item.url,index)}
                    key={index}
                  >
                    {item.name}
                  </li>
                ))
              }
            </ul>
          </nav>
        )
    }
}

export default Nav
