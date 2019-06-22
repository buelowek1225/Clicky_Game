// imported files and boiler plate
import React from 'react';


// setting the state of the json image array and clickcount (score)
class Fungus extends React.Component {
  state = {
    imageUrl: "",
    clicked: false
  };

  // Componants to display on the page: navbar, header, grid of images, footer
  render() {
    return (
      <div className="col-sm-3 paragraph-format">
        <figure className="figure">
          <img className="fungaiImages" src={this.state.imageUrl} onClick={()=>this.imageClick(11)} alt="fungai"/>
        </figure> 
      </div>
    )
  }
}

export default Fungus;
