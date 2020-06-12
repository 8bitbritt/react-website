import React, { Component } from 'react';

const gallery = [
    {
    "name" : "Museum Sign",
    "image" : 'img/2.jpg'
},
{
    "name" : "Golden Koi Fish",
    "image" : 'img/3.jpg' 
},
{
    "name" : "Bridge in Tokyo",
    "image" : 'img/4.jpg'
} ,
{
    "name" : "Unicorn Gundam Diver City",
    "image" : 'img/5.jpg'
},
{
    "name" : "Street in Tokyo",
    "image" : 'img/6.jpg'
},
{
    "name" : "Bridge in Tokyo",
    "image" : 'img/7.jpg'
},
{
    "name" : "Garden in Tokyo",
    "image" : 'img/8.jpg'
}
]

class Images extends Component{
    render(){
        return(
            <div className="gallery">
            {Object.keys(gallery).map(key => (
                <img src={gallery[key].image} key={key} alt={gallery[key].name} />
            ))}
          </div>
        )
    }
}

export default Images;