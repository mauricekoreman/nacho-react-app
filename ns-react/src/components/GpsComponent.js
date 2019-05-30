import React from "react"
import axios from "axios";

class GpsComponent extends React.Component{
  // To show a photo in our React app, we need to store the API response in state.
  constructor() {
    super()

    this.state = {
      latitude: '',
      longitude: '',
      city:'',
    }

    this.getMyLocation = this.getMyLocation.bind(this)
  }

  componentDidMount() {
    this.getMyLocation()
    // this.getMyCity()
  }

  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
        axios.get("https://geocode.xyz/"+ this.state.latitude +","+ this.state.longitude + "?json=1&auth=708506218534296685130x2493")
        .then(res=>{
          this.setState({city: res.data.city});
        })
        .catch(error =>{
          console.log(error);
        });

      }, (error) => {
        this.setState({ latitude: 'error-latitude', longitude: 'error-longitude' })
      })
    }
  }
  render() {
    const { latitude, longitude, city} = this.state
    return (
      <div>
        <h1>{latitude} {longitude} {city}</h1>
      </div>
    );
  }
}
export default GpsComponent;