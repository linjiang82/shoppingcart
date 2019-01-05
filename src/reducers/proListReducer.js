const initState = {
  loading:false,
  prolist:[],
  error:null,
  searchKeyword:''
}

const proListReducer = (state=initState,action) =>{
  switch (action.type) {
    case 'getProListBegin':
      return state = {
        ...state,
        loading:true
      }
      break;
    case 'getProListSuccess':
      return state = {
        ...state,
        loading:false,
        prolist:action.payload
      }
      break;
    case 'getProListError':
      return state = {
        ...state,
        loading:false,
        error:action.payload
      }
      break;
      case 'filterPro':
      return state = {
              ...state,
              searchKeyword:action.keyword
          }
      break;
  
    default:
      return state;
  }
}
export default proListReducer;