import React from 'react';
import './About.css';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-151524212-3');
ReactGA.pageview('/about');

class About extends React.PureComponent<{}> {
  render() {
    return (
      <div className="row">
        <div className="col text-center">
          <div className="about-data">
            <h4 className="about-header">About</h4>
            <p>
              Background by <a href="https://twitter.com/gofthie" target="blank" rel="noopener noreferrer">gofthie</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;