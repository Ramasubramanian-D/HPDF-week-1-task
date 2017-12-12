import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const styleCard = {
    height: '200px',
    width: '20%',
    marginTop: '10px',
    marginBottom: '10px',
    cssFloat: 'left'
};
  
const Searchbarstyle = {
  height: '50px',
  width: '100%',
  margin: '0px',
  marginBottom: '5px',
};

const Buttonstyle = {
  width: '100px',
  height: '100%',
  display: 'block',
  margin: '0px',
  marginTop: '3px'
}

const options = {
  marginLeft: '125px',
  marginTop: '8px'
}

const labelstyle = {
  color: '#9E9E9E',
  fontSize: '15px',
  fontWeight: 'bold',
  fontFamily: 'helvetica'
}

const labelstyletweet = {
  color: '#039BE5',
  fontSize: '15px',
  fontWeight: 'bold',
  fontFamily: 'helvetica'
}

const followsearch = {
  borderRadius: '25px',
  border: '1px solid #039BE5',
  width: '200px',
  fontSize: '10px',
  textAlign: 'center'
}

const followsearchdiv = {
  borderRadius: '25px',
  width: '140px',
  fontSize: '10px',
  textAlign: 'center',
  marginLeft: '350px',
  marginTop: '8px'
}

const clickfunction = () => {
  this.labelstyle.color="";
  this.Buttonstyle.borderBottom="2px solid #039BE5";
}

const MainSearchBar = () => (
  <div>
    <Paper style={Searchbarstyle} zDepth={2} >
      <div className="buttons">
        <FlatButton label="top" onClick={clickfunction} labelStyle={labelstyle} style={Buttonstyle} disableTouchRipple='true' hoverColor="#E1F5FE">                        
        </FlatButton>
        <FlatButton label="latest" labelStyle={labelstyle} style={Buttonstyle} disableTouchRipple='true' hoverColor="#E1F5FE">             
        </FlatButton>
        <FlatButton label="people" labelStyle={labelstyle} style={Buttonstyle} disableTouchRipple='true' hoverColor="#E1F5FE">           
        </FlatButton>
        <FlatButton label="photos" labelStyle={labelstyle} style={Buttonstyle} disableTouchRipple='true' hoverColor="#E1F5FE">           
        </FlatButton>
        <FlatButton label="videos" labelStyle={labelstyle} style={Buttonstyle} disableTouchRipple='true' hoverColor="#E1F5FE">           
        </FlatButton>
        <FlatButton label="news" labelStyle={labelstyle} style={Buttonstyle} disableTouchRipple='true' hoverColor="#E1F5FE">           
        </FlatButton>
        <FlatButton label="broadcast" labelStyle={labelstyle} style={Buttonstyle} disableTouchRipple='true' hoverColor="#E1F5FE">           
        </FlatButton>
        <div style={followsearchdiv}>
          <FlatButton label="Follow search" labelStyle={labelstyletweet} style={followsearch} disableTouchRipple='true' hoverColor="#E1F5FE" />
        </div>
        <MoreVertIcon style={options} />
      </div>
    </Paper>
  </div>
);

export default MainSearchBar;
