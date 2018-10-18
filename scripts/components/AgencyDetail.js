import React, { PropTypes } from 'react'
import Nav from './Nav'
import Search from '../containers/AgencyDetailContainer'

const propTypes = {
    getAgencyDetail: PropTypes.func.isRequired
}

class AgencyDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {params, getAgencyDetail} = this.props
        const data = { instId: params.id }
        if (data.instId) {
            getAgencyDetail(data)
        }
    }

    agencyDetail() {
        let {data} = this.props;
        if (data && data.length > 0) {
            return data.map((item, index) => (
                <ul key={item.id} className="detail">
                    <li><span>全称：</span><label>{item.fullNameCn}</label></li>
                    <li><span>简称：</span><label>{item.shortNameCn}</label></li>
                    <li><span>代码：</span><label>{item.instCode}</label></li>
                    <li><span>类型：</span><label>{item.industryTypeValue}</label></li>
                    <li><span>地址：</span><label>{item.address}</label></li>
                    <li><span>别名：</span><label>{item.alias.join(',')}</label></li>
                    <li><span>标签：</span><label>
                      {item.tags.map(child => child.tagValue).join(',')}
                    </label></li>
                    <li><span>联系人数量：</span><label>{item.contactCount}</label></li>
                </ul>
            ))
        }
    }

    render() {
        return (
            <div className="agency">
                {this.agencyDetail()}
                <Nav />
            </div>
        )
    }

}

AgencyDetail.propTypes = propTypes

export default AgencyDetail;
