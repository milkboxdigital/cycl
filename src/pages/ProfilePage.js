import React, { Component } from "react";
import ScrollView from "../components/react-mobile-hackathon/devices/ScrollView";
import LoadingView from "../components/react-mobile-hackathon/devices/LoadingView";
import { BounceLoader } from "react-spinners";
import BottomBar from "../components/bottom-bar/BottomBar";
import RouteCard from "../components/route-card/RouteCard";
import SessionCard from "../components/session-card/SessionCard";

class ProfilePage extends Component {
  state = {
    ready: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ ready: true }), 500);
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

  renderProfile = () => {
    return (
      <div style={{ display: "flex", width: "100%", textAlign: "start" }}>
        <div
          style={{
            borderRadius: 32,
            width: 56,
            height: 56,
            background: "var(--skies)",
          }}
        />
        <div
          style={{
            flex: 1,
            marginLeft: 12,
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          <span style={{ color: "var(--dark)", font: "var(--title)" }}>
            Billy Lowe
          </span>
          <span
            style={{
              marginTop: 4,
              color: "var(--slate)",
              font: "var(--copy16)",
            }}
          >
            Rookie
          </span>
        </div>
        <img src="gear.svg" style={{ height: 22 }} />
      </div>
    );
  };

  renderPlanARoute = () => {
    return (
      <div
        style={{
          width: "100%",
          marginTop: 24,
          boxShadow: "0px 0px 4px rgba(151, 151, 151, 0.4)",
          borderRadius: 10,
          padding: "8px 18px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src="add_location.svg" style={{ height: 22 }} />
        <span
          style={{
            marginLeft: 16,
            color: "var(--slate)",
            font: "var(--copy16)",
          }}
        >
          Plan a route...
        </span>
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
        }}
      >
        <ScrollView
          style={{
            padding: "32px 24px 16px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {this.renderProfile()}
          {this.renderPlanARoute()}
          <span
            style={{
              marginTop: 30,
              color: "var(--dark)",
              font: "var(--title)",
              alignSelf: "flex-start",
            }}
          >
            Around you
          </span>
          <img src="/route1.png" style={{ marginTop: 12, width: "100%" }} />

          <span
            style={{
              marginTop: 32,
              color: "var(--dark)",
              font: "var(--title)",
              alignSelf: "flex-start",
            }}
          >
            Find suggested routes
          </span>
          <RouteCard
            to="/scenic"
            onClick={() => {}}
            title="A scenic journey to Opera House"
            description="Cycle through a traffic-free route and enjoy great views and a cuppa at the end!"
            estimatedTime="45 minutes"
            style={{ marginTop: 12 }}
          />
          <RouteCard
            onClick={() => {}}
            title="Navigating through Sydney"
            description="Learn the ropes in cycling alongside traffic in this easy bike route with several stops."
            estimatedTime="30 minutes"
            style={{ marginTop: 12 }}
          />

          <span
            style={{
              marginTop: 32,
              color: "var(--dark)",
              font: "var(--title)",
              alignSelf: "flex-start",
            }}
          >
            Cycling groups near you
          </span>
          <div
            style={{
              display: "flex",
              width: "100%",
              gap: "12px",
              marginTop: "12px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "157px",
              }}
            >
              <SessionCard
                to="/group-cycle"
                onClick={() => {}}
                title="Sip & Cycle"
                description="We are coffee enthusiasts who like to visit bike-friendly cafes during the weekends."
                numMembers="37"
                style={{ marginTop: 12 }}
              />
              <SessionCard
                to="/group-cycle"
                onClick={() => {}}
                title="Pedal Power 💪🏻"
                description="Want to get fit? Join us for short but intense rides happening every weekend!!"
                numMembers="23"
                style={{ marginTop: 12 }}
              />
            </div>
            <SessionCard
              to="/group-cycle"
              onClick={() => {}}
              title="Connect with nature 🌳"
              description="We plan leisurely  routes once a month going through nature trails, with stops along the way at bike-friendly areas!"
              numMembers="14"
              style={{ marginTop: 12, width: "157px", height: "max-content" }}
            />
          </div>
        </ScrollView>
        <BottomBar />
      </div>
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
    backgroundColor: "#fff",
  },
};

export default ProfilePage;
