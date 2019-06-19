import React, {Component} from 'react'
import './Prolist.css'
import getProList from '../actions/proListActions'
import {filterPro, clearKw, selectCat, delSelectCat} from '../actions/userActions'
import {connect} from 'react-redux'
import Adbanner from './carousel'

var i=0;
class Prolist extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    console.log('will mount')
   getProList(this.props.dispatch) 
  }
  render(){
    if(this.props.proList.error){
      return <div>Something went wrong!</div>
    }
    else if(this.props.proList.loading){
      console.log('loading')
      return <div>loading...</div>
    }
    else{
    let cat=[];
    let Prolist = this.props.proList.prolist;
    for (let idx in Prolist)
    { let currentCat = Prolist[idx];
      let brand = [];
      for (let idx in currentCat['sub-cat'])
      {
        let currentSubCat = currentCat['sub-cat'][idx];
        let productName = [];
        
        for (let idx in currentSubCat.children)
        {
          productName.push(<a><div className='children' onClick={this.props.clickProduct}>{currentSubCat.children[idx]}</div></a>)
        }
      
          brand.push(<div className='subC-ctn' onClick={this.props.clickBrand}>
            <a href='#'><span><strong>{currentSubCat['sub-cat-title']}</strong></span></a>
            <div className='flex-ctn' >{productName}</div>
            </div>)
      } 
    
      cat.push(<div className='flex-ctn cat-ctn' onMouseOver={this.props.over} onMouseOut={this.props.out} >
        <a href='#'><span className='flex-ctn'><strong onClick={this.props.clickCat}>{currentCat['cat-title']}</strong><span className='most-right'>&nbsp;&nbsp;&gt;</span></span></a>
        <div className='subC'>{brand}</div>
        </div>)
    }
    console.log(cat);
    
      let selectCat=[];
      // this.props.proList.categoryKeyword.map(i=>
      //   selectCat.push(<a className='selectCat' onClick={e=>this.props.delSelectCat(e)}>{i}<span className='btn-x'></span></a>)
      // )
      for( let [key,value] of Object.entries(this.props.proList.categoryKeyword)){
        // console.log(key,value)
        let kwArray=[];
        value.map(i=>{
          kwArray.push(<span onClick={this.props.delSelectCat}>&nbsp;{i}&nbsp;</span>)
        })
        selectCat.push(<span>[{key}:{kwArray}]</span>)
      }
    
  
    
    return (

      <div className='prolist'>
        <div className='categories'><strong><a>Categories&nbsp;&nbsp;&gt;</a></strong>{selectCat}</div>
        <ul className='list'>
          {cat}
        </ul>
        <Adbanner className='adbanner'/>
      </div>
    )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    proList: state.proList
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    over: (e) => {
      e.stopPropagation();
      e.currentTarget.childNodes[1].style='display:grid'
      e.currentTarget.childNodes[0].style='color:#ff5000'
    },
    out: (e) => {
      e.stopPropagation();
      e.currentTarget.childNodes[1].style='display:none'
      e.currentTarget.childNodes[0].style='color:#337ab7'
    },
    clickProduct: (e) => {
      e.stopPropagation();
      let keyword = e.currentTarget.firstChild.textContent;
      dispatch(selectCat(`name:${keyword}`))
    },
    clickBrand: (e) => {
      e.stopPropagation();
      let keyword = e.currentTarget.firstChild.textContent;
      dispatch(selectCat(`Brand:${keyword}`))
    },
    clickCat: (e) => {
      e.stopPropagation();
      let keyword = e.currentTarget.firstChild.textContent;
      dispatch(selectCat(`Cat:${keyword}`))
    },
    delSelectCat: (e) => {
      let keyword =`${e.target.parentNode.childNodes[4].textContent.trim()} ${e.target.textContent.trim()}`; 
      dispatch(delSelectCat(keyword))
    }
  }
}
export default Prolist = connect(mapStateToProps,mapDispatchToProps)(Prolist);
