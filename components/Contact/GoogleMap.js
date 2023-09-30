import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';

export class GoogleMap extends React.Component {
  render() {
    return (
      
        <Map 
          google={this.props.google}
          style={{width: '100%', height: '30vh'}}
          
          className={'map'}
          initialCenter={{
            lat: 48.870743126751215,
            lng: 2.3047539244887383
          }}
          zoom={12}
          onClick={this.onMapClicked}
        >
          <Marker
            title={'MANSA PRO'}
            name={'SOMA'}
            position={{lat: 48.870743126751215, lng: 2.3047539244887383}}
          />
        </Map>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBipowndZqQtfQZAC59gcTADCj5kIxU5js'
})(GoogleMap);