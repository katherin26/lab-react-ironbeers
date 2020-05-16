import React from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Beers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  async componentWillMount() {
    const apiResponse = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers"
    );
    console.log(apiResponse.data);
    this.setState({
      beers: apiResponse.data,
    });
  }

  generateCardForBeer(beer) {
    const cardStyle = {
      width: "100%",
    };

    return (
      <div className="col-3" key={beer._id}>
        <div className="card" style={cardStyle}>
          <img
            className="card-img-top img-thumbnail"
            src={beer.image_url}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{beer.name}</h5>
            <p className="card-text">
              {beer.tagline}
              <br />
              Contributed By {beer.contributed_by}
            </p>
            <Link className="btn btn-primary" to={`/beers/${beer._id}`}>
              <i className="fas fa-beer"></i> Drink
            </Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const beerCards = this.state.beers.map(this.generateCardForBeer);
    return (
      <div className="container-fluid">
        <Header></Header>
        <div className="row justify-content-center">{beerCards}</div>
      </div>
    );
  }
}
