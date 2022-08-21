import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import Button from '../components/button/Button';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import { BounceLoader } from 'react-spinners';

const Review = ({img, name, skill, comment}) => {
  let avatar = (<div style={{minWidth: 45, minHeight: 45, width: 45, height: 45, borderRadius: 100, background: 'var(--skies)'}} />);
  if (img) {
    avatar = (<img src={img} style={{borderRadius: 100, minWidth: 45, minHeight: 45, width: 45, height: 45}} />);
  }
  return (
    <div style={{display: 'flex', marginTop: 24,}}>
      {avatar}
      <div style={{marginLeft: 16, display: 'flex', flexDirection: 'column'}}>
        <span style={{color: 'var(--dark)', font: 'var(--title)'}}>{name}</span>
        <span style={{marginTop: 4, color: 'var(--slate)', font: 'var(--copy12)'}}>{skill}</span>
        <span style={{marginTop: 8, color: 'var(--dark)', font: 'var(--copy14)'}}>{comment}</span>
      </div>

    </div>
  );
};

class ScenicPage extends Component {

    state = {
        ready: false,
        isReview: false,
        isStart: false,
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

    renderContent = () => {
      if (this.state.isStart) {
        return (
          <Link to="/completed-ride" style={{cursor: 'auto', textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', flex: 1, width: '100%'}}>
            <img src="turn_left.svg" style={{width: 28, height: 28,}} />
            <span style={{color: 'var(--dark)', font: 'var(--title)', marginLeft: 16}}>
              Turn left in 200m
            </span>
          </Link>
        );
      }
      if (!this.state.isReview) {
        return (
          <div style={{display: 'flex', flexDirection: 'column', flex: 1, width: '100%'}}>
            <div style={{width: '100%', marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px'}}>
              <span style={{color: 'var(--dark)', font: 'var(--copy14)'}}>
                Estimated arrival time:
              </span>
              <span style={{color: 'var(--dark)', font: 'var(--title)'}}>
                4:52pm
              </span>
            </div>

            <div style={{width: '100%', flex: 1,}} />

            <div style={{width: '100%', display: 'flex', marginTop: 21, marginBottom: 19,}}>
              <Button
                  variant="secondary"
                  onClick={() => {
                    this.setState({isReview: true})
                  }}
                  label="Reviews" style={{marginRight: 8}} />
              <Button 
                  onClick={() => {
                    this.setState({isStart: true})
                  }}
                  label="Start ride!" style={{marginLeft: 8}} />
            </div>
          </div>
        );
      }
      return (
        <div style={{display: 'flex', flexDirection: 'column', flex: 1, width: '100%', padding: '0 16px'}}>
          <span style={{marginTop: 24, color: 'var(--dark)', font: 'var(--title)'}}>
            Read Cycl reviews
          </span>
          <Review img="" name="Andrea Lewis" skill="Rookie" comment="Fantastic route for beginners. Great recommendation from Cycl." />
          <Review img="" name="Jamie Johnson" skill="Veteran" comment="Brought my teenage nephew on this route as his first official ride and he loved it, especially because some treats were part of the ride!" />
          
          <div style={{marginTop: 32, padding: '8px 12px', border: '1px solid var(--cream)', borderRadius: 2, cursor: 'text'}}>
            <span style={{color: 'var(--slate)', font: 'var(--copy14)'}}>
              You can only submit a review after you’ve cycled the route at least once.
            </span>
          </div>

          <div
              style={{
                marginTop: 24, background: '#E3E3E3', borderRadius: 60, width: 120, height: 30, alignSelf: 'flex-end',
                display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#8C8C8C', font: 'var(--copy12)',
              }}>
            Submit
          </div>
          <Button 
              onClick={() => {
                this.setState({isStart: true})
              }}
              label="Start ride!"
              style={{marginTop: 21, marginBottom: 16, alignSelf: 'center',}} />
        </div>
      );
    }

    renderPopupContent = () => {
      if (this.state.isStart) {
        return (
          <div style={{
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', width: '100%',}}>
            <div style={{background: 'var(--cream)', width: 55, minHeight: 4, height: 4, borderRadius: 10, marginTop: 14, marginBottom: 16,}} />
            {this.renderContent()}
          </div>
        );
      }
      return (
        <div style={{
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', width: '100%',}}>
          <div style={{background: 'var(--cream)', width: 55, minHeight: 4, height: 4, borderRadius: 10, marginTop: 14}} />
          <div style={{padding: '24px 16px 0', display: 'flex', flexDirection: 'column'}}>
            <span style={{color: 'var(--lime)', font: 'var(--copy14)', textAlign: 'left'}}>
              45 minutes  •  2.4km
            </span>
            <span style={{marginTop: 4, color: 'var(--dark)', font: 'var(--title)'}}>A scenic journey to <br/>Opera House</span>
            <span style={{marginTop: 4, color: 'var(--dark)', font: 'var(--copy16)'}}>
              Cycle through a traffic-free route and enjoy great views and a cuppa at the end!
            </span>

            <span style={{marginTop: 12, color: 'var(--slate)', font: 'var(--copy14)'}}>
              via Harbour Bridge and Argyle Street
            </span>

          </div>

          <div style={{marginTop: 16, width: '100%', height: 1, backgroundColor: 'var(--olive)'}} />

          {this.renderContent()}
        </div>
      );
    }

    renderPopup = () => {
      let height = 333;
      if (this.state.isReview) height = 575;
      if (this.state.isStart) height = 100;
      return (
        <div style={{
          borderRadius: '10px 10px 40px 40px',
          boxShadow: '0px 0px 4px rgba(151, 151, 151, 0.4)',
          background: '#fff',
          height,
          transition: 'height 0.2s ease-in-out',
          paddingTop: 8, position: 'absolute', bottom: 0, width: '100%',}}>
          <ScrollView
              style={{
                width: '100%',
                display: 'flex', 
                padding: '0 24px',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
            {this.renderPopupContent()}
          </ScrollView>
        </div>
      );
    };

    renderBody = () => {
        return (
          <div style={{flex: 1, maxHeight: '100%', display: 'flex', flexDirection: 'column' }}>
            <Link to="/">
              <img src="/route1.png" style={{width: '350%',marginLeft: -350, marginTop: -80}} />
            </Link>
            {this.renderPopup()}
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

export default ScenicPage;
