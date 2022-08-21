import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoadingView from "../components/react-mobile-hackathon/devices/LoadingView";
import Button from "../components/button/Button";
import ScrollView from "../components/react-mobile-hackathon/devices/ScrollView";
import { BounceLoader } from "react-spinners";

class SearchResultPage extends Component {
  state = {
    ready: false,
    isStart: false,
    goodRoute: false,
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

  renderContent = () => {
    if (this.state.isStart) {
      return (
        <Link
          to="/completed-ride"
          style={{
            cursor: "auto",
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            flex: 1,
            width: "100%",
          }}
        >
          <img src="turn_left.svg" style={{ width: 28, height: 28 }} />
          <span
            style={{
              color: "var(--dark)",
              font: "var(--title)",
              marginLeft: 16,
            }}
          >
            Turn left in 200m
          </span>
        </Link>
      );
    }
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            marginTop: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 16px",
          }}
        >
          <span style={{ color: "var(--dark)", font: "var(--copy14)" }}>
            Estimated arrival time:
          </span>
          <span style={{ color: "var(--dark)", font: "var(--title)" }}>
            {this.state.goodRoute ? '4:50pm' : '4:52pm'}
          </span>
        </div>

        <div style={{ width: "100%", flex: 1 }} />

        <div
          style={{
            width: "100%",
            display: "flex",
            marginTop: 21,
            marginBottom: 19,
          }}
        >
          <Button
            variant="secondary"
            onClick={() => {}}
            label="Save"
            style={{ marginRight: 8 }}
          />
          <Button
            onClick={() => {
              this.setState({ isStart: true });
            }}
            label="Start ride!"
            style={{ marginLeft: 8 }}
          />
        </div>
      </div>
    );
  };

  renderPopupContent = () => {
    if (this.state.isStart) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "var(--cream)",
              width: 55,
              minHeight: 4,
              height: 4,
              borderRadius: 10,
              marginTop: 14,
              marginBottom: 16,
            }}
          />
          {this.renderContent()}
        </div>
      );
    }
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "var(--cream)",
            width: 55,
            minHeight: 4,
            height: 4,
            borderRadius: 10,
            marginTop: 14,
          }}
        />
        <div
          style={{
            padding: "24px 16px 0",
            width: '100%',
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              color: "var(--lime)",
              font: "var(--copy14)",
              textAlign: "left",
            }}
          >
            {this.state.goodRoute ? '14 minutes •  3.2km' : '16 minutes •  3.3km'}
          </span>
          <span
            style={{ marginTop: 4, color: "var(--dark)", font: "var(--title)" }}
          >
            Opera House
          </span>

          <span
            style={{
              marginTop: 12,
              color: "var(--slate)",
              font: "var(--copy14)",
            }}
          >
            {this.state.goodRoute ? 'via Pitt St' : 'via Kenn St'}
          </span>
        </div>

        <div
          style={{
            marginTop: 16,
            width: "100%",
            height: 1,
            backgroundColor: "var(--olive)",
          }}
        />

        {this.renderContent()}
      </div>
    );
  };

  renderPopup = () => {
    let height = 255;
    if (this.state.isStart) height = 100;
    return (
      <div
        style={{
          borderRadius: "10px 10px 40px 40px",
          boxShadow: "0px 0px 4px rgba(151, 151, 151, 0.4)",
          background: "#fff",
          height,
          transition: "height 0.2s ease-in-out",
          paddingTop: 8,
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <ScrollView
          style={{
            width: "100%",
            display: "flex",
            padding: "0 24px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {this.renderPopupContent()}
        </ScrollView>
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
          cursor: 'pointer',
        }}
      >
        <img
          onClick={() => this.setState({goodRoute: true,})}
          src={this.state.goodRoute ? 'pro_route2.png' : 'pro_route1.png'}
          style={{ width: "100%", marginLeft: 0, marginTop: -50 }}
        />
        <div style={{display: 'flex', alignItems: 'center', position: 'absolute', top: 265, left: 132}}>
          <BounceLoader size="30" color="red" style={{position: 'absolute',}} />
          <div style={{marginLeft: -100, marginTop: -19, background: '#fff', padding: '0 8px 2px', borderRadius: 10, boxShadow: '0px 0px 4px rgba(151, 151, 151, 0.4)',}}>
            <span style={{font: 'var(--copy12)', color: 'var(--dark)'}}>Road works</span>
          </div>
        </div>

        <div style={{display: 'flex', alignItems: 'center', position: 'absolute', top: 339, left: 142}}>
          <BounceLoader size="30" color="red" style={{position: 'absolute',}} />
          <div style={{marginLeft: -108, marginTop: -19, background: '#fff', padding: '0 8px 2px', borderRadius: 10, boxShadow: '0px 0px 4px rgba(151, 151, 151, 0.4)',}}>
            <span style={{font: 'var(--copy12)', color: 'var(--dark)'}}>Heavy Traffic</span>
          </div>
        </div>
        {this.renderPopup()}
      </div>
    );
  };

  render() {
    return (
      <div style={styles.container}>
        <div
          style={{
            width: "calc(100% - 48px)",
            height: "100px",
            position: "absolute",
            background: "var(--snow)",
            margin: "40px 24px 0",
            borderRadius: "10px",
            padding: "8px 18px",
            display: "flex",
            gap: "18px",
          }}
        >
          <Link to="/profile">
            <img
              src="back.svg"
              style={{
                cursor: "pointer",
                width: "20px",
                height: "20px",
              }}
            />
          </Link>
          <div style={{ flexGrow: "1" }}>
            <p>Pyrmont</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ lineHeight: "5px", color: "var(--slate)" }}>
                .
              </span>
              <span style={{ lineHeight: "5px", color: "var(--slate)" }}>
                .
              </span>
              <span style={{ lineHeight: "5px", color: "var(--slate)" }}>
                .
              </span>
            </div>
            <p style={{ marginTop: "8px" }}>Opera House</p>
            <div
              style={{
                width: "100%",
                height: "1px",
                marginTop: "4px",
                background: "var(--cream)",
              }}
            ></div>
            <p
              style={{
                font: "var(--copy12)",
                color: "var(--slate)",
                marginTop: "4px",
              }}
            >
              + Add another stop
            </p>
          </div>
        </div>
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

export default SearchResultPage;
