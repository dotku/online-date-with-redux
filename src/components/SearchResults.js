import React from 'react';

class SearchResults extends React.Component {
  genCandidatesList(candidates) {
    if (!candidates || !candidates.length) {
      return 'no candidates are found';
    }
    return (
      <div>
        <ul className="list-unstyled">
          {candidates.map((candidate, index) =>
            <li className="text-left row" key={index}>
              <div className="col-md-4 col-xs-6">
                <span style={{width: '28px', display: 'inline-block'}}>{'#' + (index + 1)}</span>
                <img className="photo"
                  alt={candidate.name.first + ' ' + candidate.name.last}
                  src={candidate.picture.medium} />
              </div>
              <div className="col-md-8 col-xs-6" style={{padding: '1em'}}>
                <div><span className="name lead">{candidate.name.first + ' ' +candidate.name.last}</span></div>
                <div><span className="age lead">{this._calculateAge(candidate.dob)}</span></div>
                <div>
                  <button onClick={() => {this.props.onModalOpen(candidate)}}>Contact</button>
                </div>
              </div>
            </li>
          )}
        </ul>
        <div className="text-right">* the results is in randomized order</div>
      </div>
    );
  }

  _calculateAge(birthday) { // birthday is a date
    birthday = new Date(birthday);
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  render() {
    const results = this.props.candidates.data.results || [];
    return (
      <div id="searchResults">
        <h2>{results.length} Candidates Found</h2>
        {this.genCandidatesList(results)}
      </div>
    );
  }
}

export default SearchResults;
