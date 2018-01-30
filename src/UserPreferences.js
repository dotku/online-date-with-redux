import React from 'react';

class UserPreferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div>
        <h2>Search Criteria</h2>
        <form className="form text-left">
          <div className="form-group">
            <label className="control-label">{'Age: '}</label>
            <input type="text"
              name="ageMin"
              value={this.props.ageMin}
              size="3"
              onChange={this.props.onAgeMinChange}/>
            {'to'}
            <input type="text"
              name="ageMax"
              value={this.props.ageMax}
              size="3"
              onChange={this.props.onAgeMaxChange}/>
          </div>

          <div className="form-group">
            <label className="control-label">{'Gender: '}</label>
            <label className="radio-inline">
              <input type="radio" value="" name="gender"
                checked={this.props.gender === ''}
                onChange={this.props.onGenderChange}
              />
              {'Any'}
            </label>
            <label className="radio-inline">
              <input type="radio" value="male" name="gender"
                checked={this.props.gender === 'male'}
                onChange={this.props.onGenderChange}
              />
              {'Male'}
            </label>
            <label className="radio-inline">
              <input type="radio" value="female" name="gender"
                checked={this.props.gender === 'female'}
                onChange={this.props.onGenderChange}
              />
              {'Female'}
            </label>
          </div>
          <div className="text-right">
            <button type="button" className="btn btn-default"
              onClick={this.props.onReset}>Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserPreferences;