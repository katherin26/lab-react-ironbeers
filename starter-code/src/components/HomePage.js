import React from "react";
import image_beers from "../assets/images/beers.png";
import image_newbeer from "../assets/images/new-beer.png";
import image_randombeer from "../assets/images/random-beer.png";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  render() {
    let divStyle = {
      width: "1000px",
    };

    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-6 text-center">
              <div className="card" style={divStyle}>
                <img src={image_beers} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">All Beers</h5>
                  <Link className="btn btn-primary" to="/beers">
                    Go
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6 text-center">
              <div className="card" style={divStyle}>
                <img src={image_newbeer} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Random Beer</h5>
                  <Link className="btn btn-primary" to="/random-beer">
                    Go
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6 text-center">
              <div className="card" style={divStyle}>
                <img
                  src={image_randombeer}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">New Beer</h5>
                  <Link className="btn btn-primary" to="/new-beer">
                    Go
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
