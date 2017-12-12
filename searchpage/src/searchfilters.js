import React from 'react';
import Paper from 'material-ui/Paper';
const styleCard = {
    height: '50px',
    width: '280px',
    marginTop: '10px',
    marginBottom: '10px',
    float: 'left',
    paddingLeft: '15px',
    paddingBottom: '5px'
  };

  const Searchfilters = () => (
    <div>
      <Paper style={styleCard} zDepth={3} >
        <div>
            <h3> Search filters </h3>
        </div>
      </Paper>
    </div>
  );
  
  export default Searchfilters;