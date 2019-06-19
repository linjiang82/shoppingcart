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
    case 'getProListSuccess':
      return state = {
        ...state,
        loading:false,
        prolist:action.payload
      }
    case 'getProListError':
      return state = {
        ...state,
        loading:false,
        error:action.payload
      }
      case 'filterPro':
      return state = {
              ...state,
              searchKeyword:action.keyword
          }
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
        }
  
    default:
      return state;
  }
}
export default proListReducer;