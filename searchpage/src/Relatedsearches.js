import React from 'react';
import Paper from 'material-ui/Paper';
const styleCard = {
  width: '280px',
  marginTop: '10px',
  marginBottom: '10px',
  cssFloat: 'left',
  clear: 'left'
  };

const liststyle = {
  listStyleType: 'none',
  color: '#40C4FF',
  fontFamily: 'arial',
  fontSize: '15px',
  fontWeight: 'normal',
  paddingLeft: '30px',
  paddingTop: '2px'
}

const header = {
  fontFamily: 'arial',
  fontWeight: 'bold',
  paddingLeft: '20px',
  paddingTop: '8px',
  paddingBottom: '2px'
}

const link = {
  textDecoration: 'underline',
  color: 'black'
}
  
  const Relatedsearches = () => (
    <div>
      <Paper style={styleCard} zDepth={3} >
        <div>
            <h3 style={header}> related searches </h3>
            <ul style={liststyle}>
                <li onMouseOver={link}>ceos</li>
                <li onMouseOver={link}>gujarat assembly elections</li>
                <li onMouseOver={link}>frdi</li>
                <li onMouseOver={link}>pmnrf</li>
                <li onMouseOver={link}>fssai</li>
            </ul>
        </div>
      </Paper>
    </div>
  );
  
  export default Relatedsearches;
