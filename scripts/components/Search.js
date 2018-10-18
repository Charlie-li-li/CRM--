import React from 'react'
import { hashHistory } from 'react-router'


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.searchList = this.searchList.bind(this)
    }

    componentDidMount() {

        //console.log(this)

    }

    searchList() {
        let queryString = [];
        let cityName = this.refs.city.value;
        let instName = this.refs.inst.value;
        if (instName) {
            let agencyObj = { queryType: "INST_SHORT_NAME", queryValues: [{ "key": instName, "value": instName }] };
            queryString.push(agencyObj);
        }
        if (cityName) {
            let cityObj = { queryType: "CITY", queryValues: [{ "key": cityName, "value": cityName }] };
            queryString.push(cityObj);
        }
        // if (queryString.length > 0) {
        const {search} = this.props;
        search.queryString = queryString;
        search.pageNum = 1;
        let data = { search: search, searchType: "SEARCH" };//多一个参数区分click查询加载还是列表加载  
        this.props.getAgencyList(data);
        // }

    }
    render() {
        return (
            <ul className="searchbox">
                <li> <span>城市：</span><input type="text" className="city_name" ref='city' placeholder="请输入城市" /></li>
                <li> <span>银行：</span><input type="text" className="agency_name" ref='inst' placeholder="请输入机构名称" /></li>
                <li><input type="button" onClick={this.searchList} value="查询" className="search_btn" /></li>
            </ul>
        )
    }
}

export default Search