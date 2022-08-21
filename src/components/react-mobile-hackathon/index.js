import React, { Component } from "react";
import IPhoneX from "./devices/IPhoneX";
import { QRCode } from "react-qr-svg";

let is_safari =
  /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
let is_chrome = /Chrome|CriOS/.test(navigator.userAgent);
is_safari = is_safari && !is_chrome;

class MobileHackathon extends Component {
  render() {
    return (
      <div
        className="react-app-container"
        style={{
          width: "100%",
          height: is_safari ? "calc(100vh - 72px)" : "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IPhoneX>{this.props.children}</IPhoneX>
        <div
          className="react-app-link-container"
          style={{
            marginLeft: 226,
            display: "flex",
            flexDirection: "column",
            color: "var(--cream)",
            font: "var(--feature)",
            padding: 16,
          }}
        >
          <img src="logo.svg" style={{ width: 395 }} />
          <span
            style={{
              color: "var(--cream)",
              font: "var(--feature)",
              marginTop: 64,
              marginBottom: 48,
            }}
          >
            Cycl around NSW with ease.
          </span>
          <a
            target="_blank"
            href="https://github.com/callistusystan/cycl"
            style={{
              textDecoration: "none",
              color: "var(--cream)",
              display: "flex",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <span style={{ borderBottom: "1px solid var(--cream)" }}>
              Git repo
            </span>
            <span style={{ marginLeft: 12 }}>↗</span>
          </a>
          <a
            target="_blank"
            href="https://www.figma.com/file/4G6REebpYfX2NsLUyF6R1T/cycl?node-id=921%3A389"
            style={{
              textDecoration: "none",
              color: "var(--cream)",
              display: "flex",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <span style={{ borderBottom: "1px solid var(--cream)" }}>
              Figma mock
            </span>
            <span style={{ marginLeft: 12 }}>↗</span>
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=0-rMjcsL0gI"
            style={{
              textDecoration: "none",
              color: "var(--cream)",
              display: "flex",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <span style={{ borderBottom: "1px solid var(--cream)" }}>
              Video pitch
            </span>
            <span style={{ marginLeft: 12 }}>↗</span>
          </a>
          <a
            target="_blank"
            href="https://hackerspace.govhack.org/projects/cycl"
            style={{
              textDecoration: "none",
              color: "var(--cream)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ borderBottom: "1px solid var(--cream)" }}>
              Govhack project page
            </span>
            <span style={{ marginLeft: 12 }}>↗</span>
          </a>

          <div style={{ display: "flex", alignItems: "center", marginTop: 64 }}>
            <span style={{ color: "var(--cream)", font: "var(--feature)" }}>
              Built by
            </span>
            <img src="milkbox.svg" style={{ marginLeft: 12, width: 128 }} />
          </div>
        </div>
      </div>
    );
  }
}

export default MobileHackathon;
