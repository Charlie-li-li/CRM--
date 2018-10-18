import React, { PropTypes } from 'react'
import { hashHistory } from 'react-router'
import Nav from './Nav'
import Search from '../containers/searchContainer'

const propTypes = {
    getAgencyList: PropTypes.func.isRequired
}

class Agency extends React.Component {

    constructor(props) {
        super(props)
        this.initAgencyList = this.initAgencyList.bind(this)
    }
    clickHandle(id) {
        const url = `/agencyDetail/${id}`
        hashHistory.push(url)
    }
    componentDidMount() {
        const {search, getAgencyList} = this.props;
        const data = { search: search };
        getAgencyList(data);
    }
    initAgencyList() {
        const list = this.props.agencyList;
        if (list && list.length > 0) {
            return list.map((item, index) =>
                (
                  <li key={index} onClick={(e) => { this.clickHandle(item.id) } }>
                      <span>{item.cityValue}</span><span>{item.shortNameCn}</span>
                  </li>
                )
            )
        } else {
            return (
                <li>
                    <span>暂时没有数据</span><span></span>
                </li>)
        }
    }

    render() {
        return (
            <div className="agency">
                <Search />
                <div className='list_box'>
                    <p className="title">
                        <span>城市</span><span>机构名称</span>
                    </p>
                    <ul className="list">
                        {this.initAgencyList()}
                    </ul>
                </div>
                <Nav />
            </div>

        )
    }
}

Agency.propTypes = propTypes


export default Agency
