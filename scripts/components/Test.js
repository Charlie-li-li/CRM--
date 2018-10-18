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



class Test extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    	myScroll = new IScroll('.wrapper', iScrollOptions);
  }

  render() {
    return (
      <div className="wrapper">
      	<div className="scroller">
            <ul className="animated fadeIn">
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            <li className="Test"  >
              <span >姓名:lili</span>
              <span >年龄:26</span>
            </li>
            </ul>
        </div>
      </div>
      <Navigator />
    )
  }
}


export default Test
