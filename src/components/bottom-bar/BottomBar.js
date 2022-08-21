import React from "react";
import DeviceBar from '../react-mobile-hackathon/devices/DeviceBar';

const Button = ({ img, label }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer'}}>
      <img src={img} />
      <span style={{marginTop: 4, font: 'var(--copy12)', color: 'var(--dark)'}}>{label}</span>
    </div>
  );
}

const BottomBar = ({ children, style }) => {
  return (
    <DeviceBar
        title='Bottom Bar'
        position='bottom'
        titleStyle={{
            color: 'rgb(250, 250, 255)'
        }}
        style={{
            ...style,
            justifySelf: 'flex-end',
            boxShadow: '0px 0px 4px rgba(151, 151, 151, 0.4)',
            display: 'flex',
            justifyContent: 'space-around',
        }}>
        <Button img="profile.svg" label="Profile" />
        <Button img="history.svg" label="History" />
        <Button img="saved.svg" label="Saved" />
        <Button img="upcoming.svg" label="Upcoming" />
    </DeviceBar>
  );
};

export default BottomBar;