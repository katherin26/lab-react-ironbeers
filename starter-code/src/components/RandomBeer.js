import React from "react";
import axios from "axios";
import Header from "./Header";

export default class RandomBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {},
    };
  }

  async componentWillMount() {
    const apiResponse = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers/random"
    );
    this.setState({
      beer: apiResponse.data,
    });
  }

  render() {
    const cardStyle = {
      width: "100%",
    };
    return (
      <div className="container-fluid">
        <Header></Header>
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="card" style={cardStyle}>
              <img
                className="card-img-top img-thumbnail"
                src={this.state.beer.image_url}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{this.state.beer.name}</h5>
                <p className="card-text">
                  {this.state.beer.tagline}
                  <br />
                  <br />
                  <b>Contributed By</b>: {this.state.beer.contributed_by}
                  <br />
                  <b>First Brewed</b>: {this.state.beer.first_brewed}
                  <br />
                  <b>Attenuation Level</b>: {this.state.beer.attenuation_level}
                  <br />
                  <b>Description</b>: {this.state.beer.description}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
