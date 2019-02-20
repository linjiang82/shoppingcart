import {removeProperty} from '../utils/utils'

const initState = {
  loading:false,
  prolist:[],
  error:null,
  searchKeyword:'',
  categoryKeyword:{}
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
      case 'selectCat':
      let keyword=action.keyword.split(':');
      if(keyword[0] in state.categoryKeyword) {  
        if(!state.categoryKeyword[keyword[0]].includes(keyword[1]))
            {
            return state = {
                    ...state,
                    categoryKeyword:{...state.categoryKeyword,
                    [keyword[0]]:[...state.categoryKeyword[keyword[0]],keyword[1]]}
            }
          }
        else return state;
        }
      else {
        return state = {
                ...state,
                categoryKeyword:{...state.categoryKeyword,
                [keyword[0]]:[keyword[1]]}
        }
      }
      break;
      case 'delSelectCat':
      {
      let keyword = action.keyword.split(' ');
      let restKeyword = state.categoryKeyword[keyword[0]].filter(i=>i!=keyword[1])
      restKeyword = restKeyword.length==0?removeProperty(state.categoryKeyword, keyword[0]):{...state.categoryKeyword,[keyword[0]]:restKeyword}
      console.log(restKeyword)
      
      return state = {
              ...state,
              categoryKeyword: restKeyword
              }
      break;
        }
  
    default:
      return state;
  }
}
export default proListReducer;