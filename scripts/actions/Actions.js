import * as types from '../constants/ActionTypes'

const apiURL = 'http://127.0.0.1:8081/'
const crmURL = 'http://crmdevserver001:8080/'
export const fetchGetList = (payLoad) => ({
  type: types.GET_LIST,
  payLoad
})

export const getAgencyList = (data) => {
  return {
    type: types.RECEIVE_AGENCYLIST,
    data
  }
}


export const getSearchAgencyList = (data) => {
  return {
    type: types.RECEIVE_SEARCHAGENCYLIST,
    data
  }
}

export const getAgencyDetail = (data) => {
  return {
    type: types.RECEIVE_AGENCYDETAILLIST,
    data
  }
}

export const fetchAgencyList = (obj) => {

  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    mode: 'cors',
    body: JSON.stringify(Object.assign({}, types.REQUEST_DATA, obj.search))
  }

  return (dispatch) => {
    fetch(`${crmURL}inst/getInstList`, params).then(response => {
      response.json().then(json => {
        if (obj.searchType) {
          dispatch(getSearchAgencyList(json.result))
        }
        else {
          console.info(1);
          dispatch(getAgencyList(json.result))
        }
      })
    })
  }
}


export const fetchAgencyDetail = (obj) => {

  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    mode: 'cors',
    body: JSON.stringify(Object.assign({}, types.REQUEST_DATA, obj))
  }

  return (dispatch) => {
    fetch(`${crmURL}inst/getInstDetail`, params).then(response => {
      response.json().then(json => {
        dispatch(getAgencyDetail(json.result))
      })
    })
  }
}

export const getList = () => {
  const params = {
    method: 'GET'
  }
  return (dispatch) => {
    fetch(`${apiURL}getData`, params).then((response) => {
      response.json().then((json) => {
        dispatch(fetchGetList(json))
      })
    })
  }
}

export const delItem = (id) => {
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    mode: 'cors',
    body: JSON.stringify({ id })
  }

  return (dispatch) => {
    fetch(`${apiURL}del`, params).then(response => {
      response.json().then(json => {
        dispatch(fetchGetList(json))
      })
    })
  }
}

export const saveItem = (obj, callback) => {
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    mode: 'cors',
    body: JSON.stringify(obj)
  }
  return dispatch => {
    fetch(`${apiURL}save`, params).then(response => {
      response.json().then(json => {
        dispatch(fetchGetList(json))
        callback()
      })
    })
  }
}
