import React, { Component} from 'react';
import { LocalPicker, GoogleMapsAdapter } from './../map/lib1';

class Pickup extends Component {

  state = {
    value: { lat: 4.8496909, lng: -74.0390537 }
  }

  handleChange = value => {
    this.setState({ value })
    localStorage.setItem('pos1_lat', JSON.stringify(value.lat));
    localStorage.setItem('pos1_lng', JSON.stringify(value.lng));
  }

  render() {
    return (
        <LocalPicker
          adapter={GoogleMapsAdapter}
          value={this.state.value}
          onChange={this.handleChange}
          inputPlaceholder="Enter the full address"
          adapterConfig={{
            map: {
              zoom: 8
            },
            text: {
              loadingText: 'Loading...'
            }
          }}
        />
    );
  }
}

export default Pickup;
