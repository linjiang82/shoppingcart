import axios from 'axios'


const getProList = (dispatch)=>{
  dispatch(getProListBegin())
  axios.get('../productList.json').then(response=>
    dispatch(getProListSuccess(response))
    ).catch((error)=>dispatch(getProListError(error)))
}
const getProListBegin = ()=>{
  console.log(1)
  return {
    type:"getProListBegin"
  }
}
const getProListSuccess = response => {
  console.log(2)  
  return {
    type:"getProListSuccess",
    payload:response.data
  }
}
const getProListError = error => {
  console.log(3)
  return {
    type:"getProListError",
    payload:error
  }
}
export default getProList;