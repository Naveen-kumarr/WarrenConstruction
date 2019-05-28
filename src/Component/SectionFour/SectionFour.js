import React, { Component } from 'react';
import './SectionFour.css'
import Gallery from '../../Images/gallery.jpg'
import {Modal} from 'react-bootstrap'
export default class SectionFirst extends Component {
	state={
	constructionsection3:[
	{id:1,image:Gallery},
	{id:2,image:Gallery},
	{id:3,image:Gallery},
	{id:4,image:Gallery},
	{id:5,image:Gallery},
	{id:6,image:Gallery}
	]
	,
	show:false
	}
	 handleClose = () => {
    this.setState({ show: false });
  }
 handleShow= () => { 
    this.setState({ show: true });
  }

render()
{
return(
<div>
<div className="container">
<div className="row">
{this.state.constructionsection3.map(cs=>{
	return(
<div className="col-md-4 col-sm-12 image">
<img src={cs.image} className="imageclass "/>
 <div className="middle">
    <div className="text">
	<p>Construction Sight</p>
	<p>Commercial</p>
	<i className="fa fa-link iconclass" aria-hidden="true"></i>
	<i className="fa fa-search-plus iconclass" aria-hidden="true" onClick={this.handleShow}></i>
	</div>
  </div>
</div>
	   )
  })}

</div>
</div>

<Modal show={this.state.show} className="modalclass" onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            
          </Modal.Header>
      
		  <img src={Gallery}/>
		 
         
        </Modal>
</div>
)
}
}