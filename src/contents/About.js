import React, { Component } from 'react';
import Selfie from '../img/selfie.png';
class About extends Component {
render() {
return (
<div className="container about">
<h2>About Me</h2>
<div className="about-content">
<img src={Selfie} alt="Selfie" />
<h4>Hey there,</h4>
<h3><strong>I'm Photography Person!</strong><br/>
Traveler and Photographer Extraordinaire</h3>
<br></br>
<p>I was born with a camera in my hand and a flashbulb on my head. I enjoy traveling around the world to take mediocre pictures of plants and buildings.
</p>
</div>
</div>
)
}
}
export default About