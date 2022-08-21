import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import { BounceLoader } from 'react-spinners';
import BottomBar from '../components/bottom-bar/BottomBar';

const CafeCard = ({cafeName, suburb, style}) => {
  return (
    <div style={{marginTop: 12, background: 'var(--cream)', padding: '12px 16px', display: 'flex', flexDirection: 'column', ...style}}>
      <span style={{marginTop: 4, color: 'var(--dark)', font: 'var(--title)'}}>
        {cafeName}, {suburb}
      </span>
      <span style={{marginTop: 4, color: 'var(--dark)', font: 'var(--copy14)'}}>
        Found a new bike-friendly cafe! Popular menu items are their hazelnut coffee lattes, lamingtons, and pesto gnocchi. 
      </span>
      <span style={{marginTop: 16, color: 'var(--slate)', font: 'var(--copy12)'}}>
        Meeting point at {suburb}
      </span>
    </div>
  );
}

class GroupCyclePage extends Component {

    state = {
        ready: false,
    };

    componentDidMount() {
        setTimeout(() => this.setState({ ready: true }), 500);
    }

    renderLoading = () => {
        return (
            <LoadingView style={{background: '#fff', position: 'absolute', zIndex: 100,}}>
                <BounceLoader color='var(--lime)' loading={!this.state.ready} />
            </LoadingView>
        );
    };

    renderPopup = () => {
      return (
        <div style={{
          borderRadius: '10px 10px 0 0 ',
          boxShadow: '0px 0px 4px rgba(151, 151, 151, 0.4)',
          background: '#fff',
          height: 550,
          marginBottom: 72,
          transition: 'height 0.2s ease-in-out',
          paddingTop: 8, position: 'absolute', bottom: 0, width: '100%',}}>
          <ScrollView
              style={{
                width: '100%',
                display: 'flex', 
                padding: '24px',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
            <div style={{padding: '0 16px', display: 'flex', flexDirection: 'column'}}>
              <span style={{color: 'var(--lime)', font: 'var(--copy14)'}}>37 members</span>
              <span style={{marginTop: 4, color: 'var(--dark)', font: 'var(--title)'}}>Sip &amp; Cycle</span>
              <span style={{marginTop: 4, color: 'var(--dark)', font: 'var(--copy16)'}}>
                We are coffee enthusiasts who like to visit bike-friendly cafes during the weekends.
              </span>
            </div>

            <span style={{alignSelf: 'flex-start', marginTop: 32, color: 'var(--dark)', font: 'var(--title)'}}>Upcoming rides</span>

            <CafeCard cafeName="GG Espresso" suburb="Sydney" style={{background: 'var(--sunshine)'}} />

            <span style={{alignSelf: 'flex-start', marginTop: 32, color: 'var(--dark)', font: 'var(--title)'}}>Past rides</span>

            <CafeCard cafeName="Ground Control Cafe" suburb="Sydney" />
            <CafeCard cafeName="Guylian Belgian Chocolate Cafe" suburb="Sydney" />
          </ScrollView>
        </div>
      );
    };

    renderBody = () => {
        return (
          <div style={{flex: 1, maxHeight: '100%', display: 'flex', flexDirection: 'column' }}>
            <img src="/coffee_sip.png" style={{width: '100%',}} />
            {this.renderPopup()}
            <BottomBar style={{position: 'absolute', zIndex: 10000, bottom: 0, background: '#fff'}} />
          </div>
        );
    };

    render() {
        return (
            <div style={styles.container}>
              <Link to="/profile">
                <img src="back.svg" style={{position: 'absolute', top: 42, left: 16, cursor: 'pointer'}} />
              </Link>
              {this.renderBody()}
              {this.state.ready ? null : this.renderLoading()}
            </div>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
    }
};

export default GroupCyclePage;
