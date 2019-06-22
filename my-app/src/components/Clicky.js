// imported files and boiler plate
import React from 'react';
import './Clicky.css';
import imageArrayJson from "./images.json";

// setting the state of the json image array and clickcount (score)
class Clicky extends React.Component {
  state = {
    imageArray: imageArrayJson,
    clickCount: 0
  };

  // imageclick arrow function. 
  imageClick = (index) => {
    this.setState({ clickCount: this.state.clickCount + 1 });
    if (this.state.imageArray[index].clicked === true){
      this.setState({ clickCount: 0 });
      this.state.imageArray.forEach((image) => {
        image.clicked = false;
      })
      // add a modal letting the user know they already clicked that image(they lost or they won)
    } else {
      this.state.imageArray[index].clicked = true;
      this.shuffle(this.state.imageArray);
      this.setState({ imageArray: this.state.imageArray });
    } 
  }

  // source: https://javascript.info/task/shuffle
  // math.random choose random number between 0 and 1, -0.5 will make that number neg half the time and positive half the time.
  // sort function (knows to do something with this???... going to try it)
  shuffle = (imageArray) => {
    imageArray.sort(() => Math.random() - 0.5);
  }

  // Componants to display on the page: navbar, header, grid of images, footer
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="navbar-brand">Clicky Game</div>
          <div className="navbar-brand">You guessed correctly!</div>
          <div className="navbar-brand">Score: {this.state.clickCount} | Max Possible Score: 12</div>
        </nav>
        <header>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Clicky Game!</h1>
              <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
          </div>
        </header>
        <div className="container mx-auto">
          <div className="row justify-content-center">
            <div className="col-sm-3 paragraph-format">
              <figure className="figure">
                <img className="fungaiImages" src={this.state.imageArray[0].imgUrl} onClick={()=>this.imageClick(0)} alt="fungai"/>
              </figure>
            </div>
            <div className="col-sm-3 paragraph-format">
              <figure className="figure">
              <img className="fungaiImages" src={this.state.imageArray[1].imgUrl} onClick={()=>this.imageClick(1)} alt="fungai"/>
              </figure> 
            </div>
            <div className="col-sm-3 paragraph-format">
              <figure className="figure fungiImages">
              <img className="fungaiImages" src={this.state.imageArray[2].imgUrl} onClick={()=>this.imageClick(2)} alt="fungai"/>
              </figure> 
            </div>
            <div className="col-sm-3 paragraph-format">
              <figure className="figure fungiImages">
              <img className="fungaiImages" src={this.state.imageArray[3].imgUrl} onClick={()=>this.imageClick(3)} alt="fungai"/>
              </figure> 
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-3 paragraph-format">
              <figure className="figure">
                <img className="fungaiImages" src={this.state.imageArray[4].imgUrl} onClick={()=>this.imageClick(4)} alt="fungai"/>
              </figure>
            </div>
            <div className="col-sm-3 paragraph-format">
              <figure className="figure">
              <img className="fungaiImages" src={this.state.imageArray[5].imgUrl} onClick={()=>this.imageClick(5)} alt="fungai"/>
              </figure> 
            </div>
            <div className="col-sm-3 paragraph-format">
              <figure className="figure">
              <img className="fungaiImages" src={this.state.imageArray[6].imgUrl} onClick={()=>this.imageClick(6)} alt="fungai"/>
              </figure> 
            </div>
            <div className="col-sm-3 paragraph-format">
              <figure className="figure">
              <img className="fungaiImages" src={this.state.imageArray[7].imgUrl} onClick={()=>this.imageClick(7)} alt="fungai"/>
              </figure> 
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-3 paragraph-format">
              <figure className="figure">
                <img className="fungaiImages" src={this.state.imageArray[8].imgUrl} onClick={()=>this.imageClick(8)} alt="fungai"/>
              </figure>
            </div>
            <div className="col-sm-3 paragraph-format">
              <figure className="figure">
              <img className="fungaiImages" src={this.state.imageArray[9].imgUrl} onClick={()=>this.imageClick(9)} alt="fungai"/>
              </figure> 
            </div>
            <div className="col-sm-3 paragraph-format">
              <figure className="figure">
              <img className="fungaiImages" src={this.state.imageArray[10].imgUrl} onClick={()=>this.imageClick(10)} alt="fungai"/>
              </figure> 
            </div>
            <div className="col-sm-3 paragraph-format">
              <figure className="figure">
              <img className="fungaiImages" src={this.state.imageArray[11].imgUrl} onClick={()=>this.imageClick(11)} alt="fungai"/>
              </figure> 
            </div>
          </div>      
        </div>
        <footer className="footer footer-details fixed-bottom text-center">
          <div className="margin-top-25">
              "Clicky Game!"
              <img alt="react" className="reactLogo" src={"./images/react-logo-1000-transparent.png"}></img>
          </div>
        </footer>
      </div>
    )
  }
}

export default Clicky;
