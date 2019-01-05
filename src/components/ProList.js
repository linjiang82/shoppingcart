import React, {Component} from 'react'
import axios from 'axios'
import './Prolist.css'
import getProList from '../actions/proListActions'
import {connect} from 'react-redux'
var i=0;
class Prolist extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
   getProList(this.props.dispatch) 
  }
  render(){
    console.log(this.props.proList,i++)
    if(this.props.proList.error){
      return <div>Something went wrong!</div>
    }
    else if(this.props.proList.loading){
      return <div>loading...</div>
    }
    else 
    {
    let cat=[];
    let Prolist = this.props.proList.prolist;
    for (let idx in Prolist)
    { let currentCat = Prolist[idx]
      let subC = [];
      for (let idx in currentCat['sub-cat'])
      {
        let currentSubCat = currentCat['sub-cat'][idx];
        let children = [];
        
        for (let idx in currentSubCat.children){
          children.push(<a href='#'><div className='children'>{currentSubCat.children[idx]}</div></a>)
        }
          subC.push(<div className='subC-ctn'>
            <a href='#'><span><strong>{currentSubCat['sub-cat-title']}</strong></span></a>
            <div className='flex-ctn'>{children}</div>
            </div>)
      } 
      cat.push(<div className='flex-ctn cat-ctn' onMouseOver={this.props.over} onMouseOut={this.props.out}>
        <a href='#'><span><strong>{currentCat['cat-title']}&nbsp;&nbsp;&gt;</strong></span></a>
        <div className='subC'>{subC}</div>
        </div>)
    } 
    
    return (
      <ul className='prolist'>
        {cat}
      </ul>
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
      e.currentTarget.childNodes[0].style='color:black'
    }
  }
}
export default Prolist = connect(mapStateToProps,mapDispatchToProps)(Prolist);