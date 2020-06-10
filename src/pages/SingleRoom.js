import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TravelContext } from "../Context";

export default class SingleTrip extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
  }
  componentDidMount() {}
  render() {
    return <div>hello from single page</div>;
  }
}

import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { RoomContext } from "../Context";

export default class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultBcg,
  };

  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      slug,
      type,
      price,
      size,
      capacity,
      pets,
      breakfast,
      description,
      extras,
      images,
    } = room;
    return (
      <Hero hero="roomsHero">
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </Hero>
    );
  }
}
