import React, { Component } from "react";
import ScrollView from "../components/react-mobile-hackathon/devices/ScrollView";
import LoadingView from "../components/react-mobile-hackathon/devices/LoadingView";
import { BounceLoader } from "react-spinners";
import Button from "../components/button";
import NewCyclist from "../assets/new_cyclist.svg";
import CasualRider from "../assets/casual_rider.svg";
import LevellingUp from "../assets/levelling_up.svg";
import SeasonedCyclist from "../assets/seasoned_cyclist.svg";
import RangeSlider from "../components/range-slider";

class NewPage extends Component {
  state = {
    ready: false,
    difficulty: 0,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ ready: true }), 500);
  }

  renderLoading = () => {
    return (
      <LoadingView
        style={{
          background: "var(--olive)",
          position: "absolute",
          zIndex: 100,
        }}
      >
        <BounceLoader color="var(--lime)" loading={!this.state.ready} />
      </LoadingView>
    );
  };

  renderBody = () => {
    return (
      <ScrollView
        isDark
        style={{
          paddingTop: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img src="/logo.svg" style={{ width: 74, height: 37 }} />

        <span
          style={{
            marginTop: 68,
            font: "var(--title)",
            color: "var(--lime)",
            width: 296,
          }}
        >
          Are you a seasoned cyclist or just starting out?
        </span>
        <span
          style={{
            marginTop: 68,
            font: "var(--feature)",
            color: "var(--cream)",
          }}
        >
          {this.state.difficulty === 0 && "New to cycling"}
          {this.state.difficulty === 1 && "Casual rider"}
          {this.state.difficulty === 2 && "Levelling up"}
          {this.state.difficulty === 3 && "Seasoned cyclist"}
        </span>
        <div
          style={{
            height: "200px",
            width: 185,
            position: "relative",
          }}
        >
          <img
            src={NewCyclist}
            style={{
              marginTop: 30,
              width: 185,
              opacity: this.state.difficulty === 0 ? "1" : "0",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
          <img
            src={CasualRider}
            style={{
              marginTop: 30,
              width: 185,
              position: "absolute",
              opacity: this.state.difficulty === 1 ? "1" : "0",
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
          <img
            src={LevellingUp}
            style={{
              marginTop: 30,
              width: 185,
              position: "absolute",
              opacity: this.state.difficulty === 2 ? "1" : "0",
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
          <img
            src={SeasonedCyclist}
            style={{
              marginTop: 30,
              width: 185,
              position: "absolute",
              opacity: this.state.difficulty === 3 ? "1" : "0",
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </div>
        <span
          style={{
            marginTop: 32,
            font: "var(--copy16)",
            color: "var(--cream)",
          }}
        >
          {this.state.difficulty === 0 && (
            <React.Fragment>
              “Cycling sounds fun, <br />
              but I don’t know where to start!”
            </React.Fragment>
          )}
          {this.state.difficulty === 1 && (
            <React.Fragment>
              "I only cycle for fun, <br />
              I’d love to make friends along the way.”
            </React.Fragment>
          )}
          {this.state.difficulty === 2 && (
            <React.Fragment>
              “I want to get more serious about cycling, <br />
              but I need help in getting there.”
            </React.Fragment>
          )}
          {this.state.difficulty === 3 && (
            <React.Fragment>
              “I’ve been cycling for ages, <br />
              and am always looking for new adventures”
            </React.Fragment>
          )}
        </span>
        <div
          style={{ display: "flex", alignContent: "center", marginTop: "42px" }}
        >
          <RangeSlider
            value={this.state.difficulty}
            onChange={(e) =>
              this.setState({ difficulty: parseInt(e.target.value) })
            }
          />
        </div>
        <Button
          label="Next"
          to={this.state.difficulty === 3 ? "/search" : "/profile"}
          style={{ marginTop: 110 }}
        />
      </ScrollView>
    );
  };

  render() {
    return (
      <div style={styles.container}>
        {this.renderBody()}
        {this.state.ready ? null : this.renderLoading()}
      </div>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "30px",
    backgroundColor: "var(--olive)",
  },
};

export default NewPage;
