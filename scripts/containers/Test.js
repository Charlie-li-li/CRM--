import React, { Component, PropTypes } from 'react'
import iScroll from 'iscroll'
import ReactIScroll from 'react-iscroll'
import Navigator from '../components/Navigator'

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

  loadData(x, y) {
    var html = "";
    for (var i = x; i < y; i++) {
      html += `<li className="Test"  >
              ${i}
              </li>`
    }
    return html
  }

  componentDidMount() {
    var _this=this
    var html = _this.loadData(1,20)
    document.querySelector(".animated").innerHTML += html;
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    let myScroll = new iScroll('#wrapper', iScrollOptions);

    // myScroll.on('scrollStart', function () {
    //   console.log("distY"+this.distY);
    //    console.log("pointY"+this.pointY)
    // });

    // myScroll.on('scroll', function () {

    //   // minY = minY < this.y ? minY : this.y;
    //   // console.log(this);
    //   alert(2);
    // });

    myScroll.on('scrollEnd', function () {
      if (myScroll.maxScrollY == myScroll.y) {
        setTimeout(function () {
        var html=_this.loadData(20,40);
        document.querySelector(".animated").innerHTML += html; 
            myScroll.destroy();
            let amyScroll = new iScroll('#wrapper', iScrollOptions);
                    
           amyScroll.on('scrollEnd', function () {
              if (myScroll.maxScrollY == myScroll.y) {
                setTimeout(function () {
                  alert("haha")
                },2000);
              }
            });
        },2000);
      }
    });






  }

  render() {
    return (
      <div>
        <div id="wrapper">
          <div id="scroller">
            <ul className="animated fadeIn">
              <li className="Test"  >
                <span >姓名:lili</span>
              </li>
              <li className="Test"  >
                <span >姓名:lili</span>
              </li>
              <li className="Test"  >
                <span >姓名:lili</span>
              </li>
              <li className="Test"  >
                <span >姓名:lili</span>
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
      </div>
    )
  }
}


export default Test
