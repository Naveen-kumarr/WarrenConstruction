import React, { Component } from 'react'
import './ServicesSectionTwo.css'
import {Modal} from 'react-bootstrap'
import Service1 from '../../../Images/services.jpg'
export default class SectionTwo extends Component {
	state={
	services:[
	{id:1,title:"GENERAL CONSTRUCT",desc:"Still struggling with old-fashioned and defunct electrical system? Are you looking for customized electrical solution fo",button:"VIEW DETAIL",image:Service1},
	{id:2,title:"RENOVATION",desc:"For us, sustainability is the first and the most important element for a projects construction, then aesthetics was seco",button:"VIEW DETAIL",image:Service1},
	{id:3,title:"INTERIOR DESIGN",desc:"Architecture portrays great regional diversity ,developed along different lineshaving different characteristics encompas",button:"VIEW DETAIL",image:Service1},
	{id:4,title:"ELECTRIC SYSTEM",desc:"Still struggling with old-fashioned and defunct electrical system? Are you looking for customized electrical solution fo",button:"VIEW DETAIL",image:Service1},
	{id:5,title:"CONSULTATION",desc:"We provide comprehensive construction management consulting services that provide the best results for your project. Our",button:"VIEW DETAIL",image:Service1},
	{id:6,title:"PROJECTS PARTNERING",desc:"Construction partnering is a type of business partnering used in the architecture, engineering and construction industry",button:"VIEW DETAIL",image:Service1}
	],
	show:false
	}
	 handleClose = () => {
    this.setState({ show: false });
  }
 handleShow= () => { 
    this.setState({ show: true });
	}
render() {
return (
<div>
<div className="container">
{this.state.services.map(ser=>{return(


<div className="row pt-5">
<div className="col-md-6 col-sm-12">
<div className="hovereffect">
<img src={ser.image} className="modifiedimage" onClick={this.handleShow}/>
</div>
</div>
<div className="col-md-6 col-sm-12">
<a href="#"><h4 className="header pt-5">{ser.title}</h4></a>
<p className="paragraph">{ser.desc}</p>
<a href="#"><p className="modified">{ser.button}</p></a>
</div>
</div>
)})}
</div>
<Modal show={this.state.show} className="modalclass" onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            
          </Modal.Header>
      
		  <img src={Service1}/>
		 
         
        </Modal>
</div>
)
}
}