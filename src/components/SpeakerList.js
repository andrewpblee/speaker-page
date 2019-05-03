import React from "react";
import Faker from "faker";
import { connect } from "react-redux";
import { fetchSpeakers } from "../actions";
import "./SpeakerList.css";

class SpeakerList extends React.Component {
  componentDidMount() {
    this.props.fetchSpeakers();
  }

  renderList() {
    return this.props.speakers.map(speaker => {
      return (
        <div className="speaker-container" key={speaker.id}>
          <div className="img-container">
            <img src={Faker.image.avatar()} alt={speaker.name} />
          </div>
          <div className="speaker-info">
            <h2>{speaker.name}</h2>
            <p>{speaker.company.name}</p>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>SPEAKERS</h1>
        <div className="line" />
        <div className="speakers">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    speakers: state.speakers
  };
};

export default connect(
  mapStateToProps,
  { fetchSpeakers }
)(SpeakerList);
