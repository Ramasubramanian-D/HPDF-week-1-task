import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import ImageAddAPhoto from 'material-ui/svg-icons/image/add-a-photo';

const style = {
  height: '50px',
  marginTop: '0px',
  marginBottom: '0px',
  marginLeft: '310px',
  marginRight: '310px',
  borderColor: 'black',
  marginBottom: '0px',
  backgroundColor: '#B3E5FC'
};

const Textfieldstyle = {
  borderRadius: '5px',
  backgroundColor: '#FFFFFF',
  height: '35px',
  width: '80%',
  paddingLeft: '10px',
  marginTop: '0px'

}
const iconstyle = {
  margin:'0px',
  marginLeft: '40px',
  paddingRight: '0px',
  marginTop: '0px'
}

const tweetcontainer = {
  marginTop: '4px',
  display: 'flex',
}

const textbox = {
  backgroundColor: 'white',
  display: 'flex',
  borderRadius: '8px',
  paddingLeft: '2px',
  marginLeft: '10px',
  marginTop: '5px',
  height: '35px',
  width: '400px'
}

const imgbutton = {
  marginLeft: '0px',
  marginRight: '0px',
  marginTop: '4px'
}
const TweetCard = () => (
  <div>
    <Paper style={style} zDepth={3} >
      <div style={tweetcontainer}>
        <Avatar
          src="https://www.hcltech.com/sites/default/files/left_mu.png"
          size={40}
          style={iconstyle}
        />
        <div style={textbox}>
          <TextField hintText="First name" style={Textfieldstyle} underlineShow={false} >  
          </TextField>
          <ImageAddAPhoto viewBox="0 0 30 30" color="#1565C0" style={imgbutton}/>
        </div>
     </div>
    </Paper>
  </div>
);


export default TweetCard;