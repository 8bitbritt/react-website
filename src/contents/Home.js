import React, { Component } from 'react';
import Wheel from '../img/1.jpg';
class Home extends Component {
render() {
return (
<div className="container home">
<img src={Wheel} alt="Ferris Wheel"></img>
<h1>Photography</h1>
</div>
)
}
}
export default Home