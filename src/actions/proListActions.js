import axios from 'axios'


const getProList = (dispatch)=>{
  dispatch(getProListBegin())
  axios.get('../productList.json').then(response=>
    dispatch(getProListSuccess(response))
    ).catch((error)=>dispatch(getProListError(error)))
}
const getProListBegin = ()=>{
  return {
    type:"getProListBegin"
  }
}
const getProListSuccess = response => {
  return {
    type:"getProListSuccess",
    payload:response.data
  }
}
const getProListError = error => {
  return {
    type:"getProListError",
    payload:error
  }
}
export default getProList;