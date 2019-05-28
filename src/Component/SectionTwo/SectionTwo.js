import React, { Component } from 'react';
import './SectionTwo.css'
import Icon1 from '../../Images/icon1.PNG'
import Icon2 from '../../Images/icon2.PNG'
import Icon3 from '../../Images/icon3.PNG'
export default class SectionFirst extends Component {
	state={
		constructionsection:[
		{id:1,part1:Icon1,heading:"POWERFUL BUILDER",part2:"Donec tincidunt nunc est, vestibulum magna placerat ut. Pellentesque accumsan, erat ut sollicitudin euismod, velit tortor feugiat erat, rutrum"},
		{id:2,part1:Icon2,heading:"CUSTOMIZABLE",part2:"Donec tincidunt nunc est, vestibulum magna placerat ut. Pellentesque accumsan, erat ut sollicitudin euismod, velit tortor feugiat erat, rutrum"},
		{id:3,part1:Icon3,heading:"BEAUTIFUL DESIGN",part2:"Donec tincidunt nunc est, vestibulum magna placerat ut. Pellentesque accumsan, erat ut sollicitudin euismod, velit tortor feugiat erat, rutrum"},
		]
	}
render()
{
return(
<div>
<div className="container-fluid">
  <div className="row">
  <div className="col-md-3 col-sm-12 firstcol">
	<p className="firstsecsmallheading">INTRODUCTION</p>
	<h2 className="firstsecheading">CLEAN DESIGN</h2>
	<p className="firstsectext">Donec tincidunt nunc est, vestibulum magna placerat ut. Pellentesque accumsan, erat ut sollicitudin euismod</p>
	<a href="#" style={{listStyleType:"none",textDecoration:"none"}}><p className="readmorebutton" >READ MORE</p></a>
  </div>
  {this.state.constructionsection.map(cs=>{
	  return (
  <div className="col-md-3 col-sm-12 customcol">
	<img src={cs.part1} className="textpadding"/>
	<h5 className="sectionalheading">{cs.heading}</h5>
	<p>{cs.part2}</p>
  </div>
   )
  })}
  </div>
</div>
</div>
)
}
}