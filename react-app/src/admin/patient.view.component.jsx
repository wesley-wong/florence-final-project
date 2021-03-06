import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Patient from './patient.component.jsx';
import axios from 'axios';
import cookie from 'react-cookie';

class PatientView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      patients: []
    };
    this.serverRequest = axios.create({
      baseURL: 'http://localhost:8080/api/',
      withCredentials: false, // default
      headers: {'x-access-token': cookie.load('session')},
    });
  }

  getPatients(callback) {
    this.serverRequest.get('patients').then((results) => {
      this.setState({patients: results.data}, () => {
        if (callback) {
          callback();
        }
      });
    });
  }

  componentDidMount() {
    this.getPatients();
  }

  render () {
    return (
      <ReactCSSTransitionGroup
        transitionName='fadeTransition'
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <table className='table is-striped admin-table'>
          <thead className='admin-table-head'>
            <tr className='admin-table-row'>
              <th className='admin-table-header'>ID</th>
              <th className='admin-table-header'>Name</th>
              <th className='admin-table-header'>Bed</th>
              <th className='admin-table-header'>Room</th>
            </tr>
          </thead>
          <tbody className='admin-table-body'>
          {this.state.patients.map(patient => {
            return <Patient key={patient.id}
              id={patient.id}
              first_name={patient.first_name}
              last_name={patient.last_name}
              bed={patient.bed_id}
              room={patient.room_id}
              />
          }
          )}
          </tbody>
        </table>
      </ReactCSSTransitionGroup>
    );
  }
}

export default PatientView;
