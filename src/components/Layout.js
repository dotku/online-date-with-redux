import * as qs from 'query-string'
import { connect } from 'react-redux'
import axios from 'axios'
import React, { Component } from 'react'
import { fetchCandidate } from '../actions/candidateActions'
import UserPreferences from './UserPreferences'
import SearchResults from './SearchResults'
import ContactModal from './ContactModal'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    // this.props = qs.parse(window.location.search);
    // this.defaultState = {
    //   candidates: [],
    //   currentCandidate: {
    //     name: '',
    //     phone: '',
    //     cell: '',
    //     email: '',
    //   },
    //   ageMin: 18,
    //   ageMax: 90,
    //   gender: '',
    //   results: 10,
    // };
    // this.state = this.defaultState;

  }
  componentWillMount() {
    this.props.dispatch(fetchCandidate());
    console.log('componentWillMount props', this.props);
    console.log('componentWillMount state', this.state);
    this.setState({
      // candidates: this.props.candidates.data.results
    });
    // var apiURL = 'https://randomuser.me/api/?' + qs.stringify(this.state);
    // axios.get(apiURL)
    //   .then(res => {
    //     this.setState({
    //       candidates: res.data.results,
    //     })
    // });
  }

  componentDidMount() {
    console.log('componentDidMount props', this.props);
  }

  _query() {
    var self = this;
    var params = {
      gender: this.state.gender,
      results: this.state.results,
    }
    var apiURL = 'https://randomuser.me/api/?' + qs.stringify(params);
    console.log(this.props);
    axios
      .get(apiURL)
      .then(res => {
        this.setState({
          candidates: res.data.results.filter((item) => {
            if (self._calculateAge(item.dob) >= self.state.ageMin
              && self._calculateAge(item.dob) <= self.state.ageMax) {
              return item;
            }
            return null;
          }),
        });
      });
  }

  _calculateAge(birthday) { // birthday is a date
    birthday = new Date(birthday);
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  _onAgeMinChange = (e) => {
    this.setState({ageMin: e.target.value}, () => this._query());
  };

  _onAgeMaxChange = (e) => {
    this.setState({ageMax: e.target.value}, () => this._query());
  };

  _onGenderChange = (e) => {
    this.setState({gender: e.target.value}, () => this._query());
  };
  _onReset = (e) => {
    console.log('reset', this.props);

    this.setState(this.defaultState, () => this._query());
  };
  _onModalOpen = (candidate) => {
    console.log(candidate);
    this.setState({
      modalOpen: true,
      currentCandidate: {
        name: candidate.name.first + ' ' +candidate.name.last,
        phone: candidate.phone,
        cell: candidate.cell,
        email: candidate.email,
      },
    });
  };
  _onModalClose = (e) => {
    this.setState({modalOpen: false})
  }
  render() {
    console.log('render this.props', this.props);
    return (<div>
      <SearchResults
          onModalOpen={this._onModalOpen}
          {...this.props}/>
    </div>);
    // return (
    //   <div>
    //     <UserPreferences
    //       onGenderChange={this._onGenderChange}
    //       onAgeMinChange={this._onAgeMinChange}
    //       onAgeMaxChange={this._onAgeMaxChange}
    //       onReset={this._onReset}
    //       {...this.state}/>
    //     <ContactModal
    //       onModalClose={this._onModalClose}
    //       {...this.state}/>
    //   </div>
    // );
  }
}

function select(state) {
  return {
    candidates: state.candidates
  }
}

export default connect(select)(Layout);