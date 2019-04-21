import React, {Component} from 'react';
import Authors from "./Authors";
import Contributors from "./Contributors";

class Application extends Component {

  constructor(props) {
    super(props);
    this.state = {
      metadata: {
        title: "Time Tracking",
        version: "1.0.0",
        authors: [
          {
            id: 1,
            firstName: "Richard",
            lastName: "Feynman",
            email: "rfeynman@email.com"
          },
          {
            id: 2,
            firstName: "Michael",
            lastName: "Faraday",
            email: "mfaraday@email.com"
          },
          {
            id: 3,
            firstName: "Werner",
            lastName: "Heisenberg",
            email: "wheisenberg@gmail.com"
          }
        ],
        contributors: [
          {
            id: 1,
            firstName: "Isaac",
            lastName: "Newton",
            email: "inewton@gmail.com"
          },
          {
            id: 2,
            firstName: "Nikola",
            lastName: "Tesla",
            email: "ntesla@gmail.com"
          }
        ]
      },
      features: [],
      selected: null
    };

    this.loadFeature = this.loadFeature.bind(this);
  };

  // TODO Implement me
  loadFeature(feature) {

  }

  render() {
    const {metadata} = this.state;
    const {authors, contributors} = metadata;

    return (
      <div className="featurebook">
        <div className="featurebook-metadata">
          <div className="featurebook-title">
            <a href="#">{metadata.title} {metadata.version}</a>
          </div>
          <Authors authors={authors}/>
          <Contributors contributors={contributors}/>
        </div>
      </div>
    )
  }

}

export default Application;
