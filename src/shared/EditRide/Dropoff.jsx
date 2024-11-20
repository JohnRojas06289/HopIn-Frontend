import React, { Component} from 'react';
import { LocalPicker, GoogleMapsAdapter } from './map/lib2'

class Dropoff extends Component {

  state = {
    value: { lat: 4.8496909, lng: -74.0390537 }
  }

  handleChange = value => {
    this.setState({ value })
    localStorage.setItem('pos2_lat', JSON.stringify(value.lat));
    localStorage.setItem('pos2_lng', JSON.stringify(value.lng));
  }

  render() {
    return (
        <LocalPicker
          adapter={GoogleMapsAdapter}
          value={this.state.value}
          onChange={this.handleChange}
          inputPlaceholder="Introduzca la dirección completa"
          adapterConfig={{
            map: {
              zoom: 8
            },
            text: {
              loadingText: 'Cargando...'
            }
          }}
        />
    );
  }
}

export default Dropoff;
