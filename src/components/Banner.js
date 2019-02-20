//Lesson: if only pass mapDispatchToState, should pass null as the 1st argument, otherwise will show dispatch undefined error.
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {filterPro} from '../actions/userActions'
import {FormGroup, FormControl} from 'react-bootstrap'
import './Banner.css'

class Banner extends Component{ 
  constructor(props, context) {
  super(props, context);
}
  render(){

    return <div className='banner'>
        <div className='bannerName'>AUMover</div>
        <form className='searchBar'>
        <FormGroup
          controlId="formBasicText"
          className='customizeBSC'
        >
          <FormControl
            type="text"
            placeholder="Search"
            onChange={(e)=>this.props.onChange(e.target.value)}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
      </div>
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (kw) => {
      dispatch(filterPro(kw))
    }
  }
}

export default Banner=connect(null,mapDispatchToProps)(Banner);
