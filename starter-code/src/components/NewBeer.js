import React from "react";
import Header from "./Header";
import axios from "axios";

export default class NewBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
      },
    };
  }

  handleInputChange(e) {
    const updatedBeer = { ...this.state.beer };
    updatedBeer[e.target.id] = e.target.value;
    this.setState({ beer: updatedBeer });
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log("Creating beer");
    console.log(this.state.beer);
    const apiResponse = await axios.post(
      "https://ih-beers-api2.herokuapp.com/beers/new",
      this.state.beer
    );

    this.setState({
      beer: {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
      },
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header></Header>
        <div className="row justify-content-center">
          <div className="col-4">
            <h1 className="text-center">New Beer</h1>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Beer Name"
                  value={this.state.beer.name}
                  id="name"
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>

              <div className="form-group">
                <label>Tagline</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Beer Tagline"
                  value={this.state.beer.tagline}
                  id="tagline"
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Description"
                  value={this.state.beer.description}
                  id="description"
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>

              <div className="form-group">
                <label>First Brewed</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="First Brewed"
                  value={this.state.beer.first_brewed}
                  id="first_brewed"
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>

              <div className="form-group">
                <label>Brewers Tips</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Brewers Tips"
                  value={this.state.beer.brewers_tips}
                  id="brewers_tips"
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>

              <div className="form-group">
                <label>Attenuation Level</label>
                <input
                  type="number"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Attenuation Level"
                  value={this.state.beer.attenuation_level}
                  id="attenuation_level"
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>

              <div className="form-group">
                <label>Contributed by</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Contributed by"
                  value={this.state.beer.contributed_by}
                  id="contributed_by"
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>

              <button
                className="btn btn-primary"
                onClick={(e) => this.handleSubmit(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
