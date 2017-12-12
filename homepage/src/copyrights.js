import React from 'react';
import Paper from 'material-ui/Paper';

const styleCard = {
    height: '140px',
    width: '280px',
    marginTop: '10px',
    marginBottom: '10px',
    marginRight: '0px',
    marginLeft: '5px',
    padding: '10px',
    fontFamily: 'Helvetica',
    fontSize: '15px',
    color: '#BDBDBD',
    float: 'right',
    clear: 'right'
  };
  

const CopyRights = () => (
  <div>
    <Paper style={styleCard} zDepth={3} >
        <div>
            <p> &copy; 2017 Twitter <a>About</a>   <a>Help Center</a> <a>Terms</a>   <a>Privacy policy</a>  <a>Cookies</a> <a>Ads info</a>    <a>Brand</a>   <a>Blog</a>    <a>Status</a>  <a>Apps</a>    <a>Jobs</a>    <a>Marketing</a>   <a>Businesses</a>  <a>Developers</a> </p>          
        </div>
    </Paper>
  </div>
);

export default CopyRights;