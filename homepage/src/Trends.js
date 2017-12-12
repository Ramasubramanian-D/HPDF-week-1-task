import React from 'react';
import Paper from 'material-ui/Paper';
import './Trends.css'

const styleCard = {
  height: '400px',
  width: '280px',
  marginTop: '10px',
  marginBottom: '10px',
  marginRight: '5px',
  marginLeft: '0px',
  float: 'left',
  clear: 'left'
};

const headerstyle = {
    fontSize: '25px',
    fontFamily: 'helvetica',
    fontWeight: 'bold',
    paddingLeft: '10px',
    paddingTop: '10px' 
}
const TrendsCard = () => (
  <div>
    <Paper style={styleCard} zDepth={3} >
      <div id="Trends">
        <h1 style={headerstyle}> Trends for you </h1>
        <ul>
          <li>
            <div>
              <p className="trend">#manchesterunited</p>
              <p className="tweetcount">24k tweets</p>
            </div>
          </li>
          <li>
            <div>
              <p className="trend">#hasura</p>
              <p className="tweetcount">20k tweets</p>
            </div>
          </li>
          <li>
            <div>
              <p className="trend">#IMAD2018</p>
              <p className="tweetcount">12k tweets</p>
            </div>
          </li>
          <li>
            <div>
              <p className="trend">#hpdf</p>
              <p className="tweetcount">5k tweets</p>
            </div>
          </li>
        </ul>
      </div>
    </Paper>
  </div>
);

export default TrendsCard;