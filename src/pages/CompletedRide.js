import React, { Component } from "react";
import LoadingView from "../components/react-mobile-hackathon/devices/LoadingView";
import Button from "../components/button/Button";
import ScrollView from "../components/react-mobile-hackathon/devices/ScrollView";
import { BounceLoader } from "react-spinners";
import BottomBar from "../components/bottom-bar/BottomBar";

class CompletedRidePage extends Component {
  state = {
    ready: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ ready: true }), 1500);
  }

  renderLoading = () => {
    return (
      <LoadingView
        style={{ background: "#fff", position: "absolute", zIndex: 100 }}
      >
        <BounceLoader color="var(--lime)" loading={!this.state.ready} />
      </LoadingView>
    );
  };

  renderFeedback = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          borderRadius: "10px",
          background: "var(--cream)",
          marginTop: "32px",
          padding: "12px 16px 16px",
        }}
      >
        <p style={{ font: "var(--title)" }}>How was your ride?</p>
        <p
          style={{
            font: "var(--copy14)",
            color: "var(--slate)",
            marginTop: "4px",
          }}
        >
          We understand that sometimes things may not have panned out exactly
          they way you expect them to. If you’ve come across any broken
          streetlamps, potholes, or the like, please let us know so we can take
          steps to improve your journey.
        </p>

        <Button
          variant="secondary"
          onClick={() => {}}
          label="Send us your thoughts"
          style={{ marginRight: "auto", marginLeft: "auto", marginTop: "16px" }}
          small
        />
      </div>
    );
  };

  renderBody = () => {
    return (
      <div
        style={{
          flex: 1,
          maxHeight: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <img src="/pro_route2.png" style={{ width: "100%", marginLeft: 0, marginTop: -50 }} />
        <ScrollView
          style={{
            background: "#fff",
            boxShadow: "0px 0px 4px rgba(151, 151, 151, 0.4)",
            borderRadius: '10px 10px 40px 40px',
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "475px",
            transition: "height 0.2s ease-in-out",
            display: "flex",
            padding: "0 24px",
            paddingTop: 14,
            flexDirection: "column",
          }}
        >
          <div style={{ marginTop: "10px", padding: "0 16px" }}>
            <svg
              width="34"
              height="36"
              viewBox="0 0 34 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.6534 4.13487C13.1885 -1.24401 20.8114 -1.24401 22.3465 4.13487C22.8367 5.85261 24.6015 6.8715 26.3342 6.43718C31.76 5.07714 35.5714 11.6788 31.6807 15.6976C30.4382 16.9811 30.4382 19.0188 31.6807 20.3022C35.5714 24.3211 31.76 30.9228 26.3342 29.5627C24.6015 29.1284 22.8367 30.1473 22.3465 31.865C20.8114 37.2439 13.1885 37.2439 11.6534 31.865C11.1632 30.1473 9.39843 29.1284 7.66571 29.5627C2.23993 30.9228 -1.57154 24.3211 2.31918 20.3022C3.56168 19.0188 3.56168 16.9811 2.31918 15.6976C-1.57154 11.6788 2.23993 5.07714 7.66571 6.43718C9.39843 6.8715 11.1632 5.85261 11.6534 4.13487ZM23.8642 14.2202C24.262 13.7428 24.1975 13.0335 23.7202 12.6357C23.2429 12.2379 22.5335 12.3024 22.1357 12.7797L16.9404 19.0142C16.3842 19.6816 16.0427 20.0872 15.7613 20.3413C15.6308 20.4591 15.5534 20.5061 15.5163 20.524C15.5088 20.5277 15.5034 20.5299 15.5 20.5311C15.4966 20.5299 15.4912 20.5277 15.4837 20.524C15.4466 20.5061 15.3692 20.4591 15.2387 20.3413C14.9573 20.0872 14.6158 19.6816 14.0596 19.0141L11.8642 16.3797C11.4665 15.9024 10.7571 15.8379 10.2798 16.2357C9.80248 16.6335 9.73799 17.3429 10.1357 17.8202L12.379 20.5121C12.8717 21.1034 13.3159 21.6366 13.7308 22.0112C14.1822 22.4188 14.7508 22.7819 15.5 22.7819C16.2492 22.7819 16.8178 22.4188 17.2692 22.0112C17.6841 21.6366 18.1283 21.1034 18.621 20.5121L23.8642 14.2202Z"
                fill="#A5D8D6"
              />
            </svg>
            <h1
              style={{
                font: "var(--feature",
                marginTop: "16px",
                fontWeight: 400,
              }}
            >
              You're here!
            </h1>
            <p style={{ marginTop: "4px", font: "var(--copy16)" }}>
              Total time elapsed: 13 minutes
            </p>
            <p
              style={{
                marginTop: "4px",
                font: "var(--copy14)",
                color: "var(--lime)",
              }}
            >
              You were ahead of schedule by 1 minute.
            </p>
          </div>
          {this.renderFeedback()}
        </ScrollView>
        <BottomBar style={{ background: "var(--snow)" }} />
      </div>
    );
  };

  render() {
    return (
      <div style={styles.container}>
        <img
          src="back.svg"
          style={{ position: "absolute", top: 42, left: 16, cursor: "pointer" }}
        />
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
    backgroundColor: "#fff",
  },
};

export default CompletedRidePage;
