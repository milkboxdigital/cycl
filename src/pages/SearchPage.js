import React, { Component } from "react";
import ScrollView from "../components/react-mobile-hackathon/devices/ScrollView";
import LoadingView from "../components/react-mobile-hackathon/devices/LoadingView";
import { BounceLoader } from "react-spinners";
import BottomBar from "../components/bottom-bar/BottomBar";
import RouteCard from "../components/route-card/RouteCard";
import Button from "../components/button";
import { Link } from "react-router-dom";

class SearchPage extends Component {
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

  renderSearchBar = () => {
    return (
      <div
        style={{
          width: "100%",
          boxShadow: "0px 0px 4px rgba(151, 151, 151, 0.4)",
          borderRadius: 10,
          padding: "8px 18px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src="search_back.svg" style={{ height: 22 }} />
        <span
          style={{
            marginLeft: 16,
            font: "var(--copy16)",
          }}
        >
          Opera House
        </span>
      </div>
    );
  };

  renderFilters = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          textAlign: "left",
          marginTop: "20px",
          position: "relative",
          paddingBottom: "20px",
        }}
      >
        <p style={{ font: "var(--mini-title)" }}>Choose cycl style</p>
        <div
          style={{
            display: "flex",
            width: "100%",
            marginTop: "18px",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              borderRadius: "60px",
              background: "#E3E3E3",
              padding: "2px 12px",
              paddingTop: 4,
              font: "var(--copy12)",
              color: "#8C8C8C",
              border: "0",
            }}
            disabled
          >
            Scenic
          </button>
          <button
            style={{
              borderRadius: "60px",
              background: "#E3E3E3",
              padding: "2px 12px",
              paddingTop: 4,
              font: "var(--copy12)",
              color: "#8C8C8C",
              border: "0",
            }}
            disabled
          >
            Quickest
          </button>
          <button
            style={{
              borderRadius: "60px",
              background: "var(--lime)",
              padding: "2px 12px",
              paddingTop: 4,
              font: "var(--copy12)",
              border: "0",
            }}
          >
            No traffic
          </button>
          <button
            style={{
              borderRadius: "60px",
              background: "var(--lime)",
              padding: "2px 12px",
              paddingTop: 4,
              font: "var(--copy12)",
              border: "0",
            }}
          >
            No hills
          </button>
        </div>
        <div
          style={{
            width: "calc(100% + 48px)",
            height: "6px",
            background: "var(--cream)",
            position: "absolute",
            bottom: "-6px",
            marginLeft: "-24px",
          }}
        />
      </div>
    );
  };

  renderRecentSearchItem = (address, time, distance, cafeName) => {
    return (
      <Link
        to="/search-result"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "18px 0",
          borderBottom: "1px solid var(--cream)",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ font: "var(--copy16)", color: "var(--dark)" }}>
            {address}
          </p>
          <span
            style={{
              font: "var(--copy14)",
              color: "var(--slate)",
              marginTop: "4px",
            }}
          >
            {time} • {distance}
          </span>
        </div>
        {cafeName && (
          <div
            style={{
              borderRadius: "47px",
              background: "var(--cream)",
              padding: "4px 12px",
              paddingTop: 6,
              font: "var(--copy12)",
              color: "var(--slate)",
              border: "0",
              height: "max-content",
              display: "flex",
              gap: "4px",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.125 1.64951C3.64665 1.71232 3.18056 1.89582 2.775 2.2L1.675 3.025C1.32877 3.28467 1.125 3.69221 1.125 4.125V8.43951C1.125 9.54599 2.3882 10.1776 3.27339 9.51371C3.53114 9.32039 3.82303 9.19564 4.125 9.13942V1.64951Z"
                fill="#979797"
              />
              <path
                d="M4.875 9.13942C5.17697 9.19564 5.46886 9.32039 5.72661 9.51371L5.775 9.55C6.18056 9.85417 6.64665 10.0377 7.125 10.1005V2.61057C6.82303 2.55436 6.53114 2.4296 6.27339 2.23629L6.225 2.2C5.81944 1.89582 5.35335 1.71232 4.875 1.64951V9.13942Z"
                fill="#979797"
              />
              <path
                d="M7.875 2.61057V10.1005C8.35335 10.0377 8.81944 9.85417 9.225 9.55L10.325 8.725C10.6712 8.46532 10.875 8.05779 10.875 7.625V3.31048C10.875 2.204 9.6118 1.5724 8.72661 2.23629C8.46886 2.4296 8.17697 2.55436 7.875 2.61057Z"
                fill="#979797"
              />
            </svg>

            {cafeName}
          </div>
        )}
      </Link>
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
            textAlign: "left",
          }}
        >
          {this.renderSearchBar()}
          {this.renderFilters()}
          <p
            style={{
              font: "var(--mini-title)",
              marginTop: "26px",
              width: "100%",
            }}
          >
            Recent searches
            {this.renderRecentSearchItem(
              "Opera house",
              "45 mins",
              "2.4km",
              "GG Espresso"
            )}
            {this.renderRecentSearchItem("Darling Sq", "20 mins", "1.5km")}
            {this.renderRecentSearchItem(
              "225 George Street, Sydney",
              "30 mins",
              "2.0km",
              "Precint"
            )}
            {this.renderRecentSearchItem(
              "Barangaroo Ferry Terminal",
              "25 mins",
              "1.8km",
              "Three Beans"
            )}
            {this.renderRecentSearchItem(
              "48 Pirrama Rd, Pyrmont",
              "10 mins",
              "0.8km"
            )}
            {this.renderRecentSearchItem("North Sydney", "60 mins", "4km")}
          </p>
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

export default SearchPage;
