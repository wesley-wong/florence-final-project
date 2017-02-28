import React, { Component } from 'react';
import axios from 'axios';

import RequestQueue from './request-queue.component.jsx';
import NurseList from './nurse-list.component.jsx';
import CareAideList from './care-aid-list.component.jsx';


class Nurse extends Component {
  constructor(props){
    super(props);
    this.state = {
      stationId: "master",
      requests: [],
      nurses: [],
    };

    this.serverRequest = axios.create({
      baseURL: "http://localhost:8080/api/",
      responseType: 'json', // default
      withCredentials: false // default
    });
  }

  componentDidMount() {
    this.serverRequest.get("requests").then((result) => {
      this.setState({requests: result.data}, () => {
        console.log(this.state.requests);
      });
    })

    this.serverRequest.get("nurses").then((result) => {
      this.setState({nurses: result.data}, () => {
        console.log(this.state.requests);
      });
    })

    this.props.route.assignWebSocketId(this.state.stationId);
  }

  render(){
    return (
      <div className='tile is-ancestor nurse-station'>
        <RequestQueue requests={this.state.requests} />
        <div className='tile is-vertical is-parent'>
          <CareAideList nurses={this.state.nurses} />
          <NurseList nurses={this.state.nurses} />
        </div>
      </div>
    );
  }
}

export default Nurse
