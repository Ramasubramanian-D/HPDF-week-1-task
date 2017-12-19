import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton';
import NavigationExpandMoreIcon  from 'material-ui/svg-icons/navigation/expand-more';
import './tweets.css';
import { SocialShare } from 'material-ui/svg-icons/social/share';
import { NotificationSms, AvReplay } from 'material-ui/svg-icons';
import ActionFavouriteBorder  from 'material-ui/svg-icons/action/favorite-border';
import ActionSystemUpdateAlt from 'material-ui/svg-icons/action/system-update-alt';

const style = {
  height: '1000px',
  marginTop: '15px',
  marginLeft: '310px',
  marginRight: '310px',
  marginBottom: '25px'
}

const labelstyle = {
    color: '#9E9E9E'
}
const OthersTweets = () => (
  <div style={style}>
    <Paper className="tweetstyle" zDepth={3} rounded={false} >
      <div className="containerdiv">    
          <Avatar src="https://i.ytimg.com/vi/cuEcczm2mZs/maxresdefault.jpg" size={50} />
          <h3 className="usernamestyle" >Monesh <span> <p className="handlestyle">@monesh97 . 1h</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
      </div>
      <div className="contentContainer">
          <p>Okay, so, when are our Netflix accounts and pizzas getting linked to #Aadhaar ?! </p>
      </div>
      <div className="buttoncontainer">
          <FlatButton label="32k"  labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<NotificationSms color="#9E9E9E" />} />
          <FlatButton label="128k"  labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<AvReplay color="#9E9E9E" />} />
          <FlatButton label="64k"  labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionFavouriteBorder color="#9E9E9E" />} />
          <FlatButton disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionSystemUpdateAlt color="#9E9E9E" />} />
      </div>
  </Paper>
  <Paper className="tweetstyle" zDepth={3} rounded={false} >
      <div className="containerdiv">    
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Rahul_Gandhi.jpg/1200px-Rahul_Gandhi.jpg" size={50} />
          <h3 className="usernamestyle" >Rahul Gandhi <span> <p className="handlestyle">@rahulgandhi . 13 days ago</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
      </div>
      <div className="contentContainer">
          <p>#Aadhaar Is A #DigitalPanopticon That Would Unleash The Most Inhuman Atrocities On Indians In Near Future. It Is Neither A Digital Marvel Nor An Empowering Technology. </p>
          <img src="https://pbs.twimg.com/media/DQdtGJWXcAAVCes.jpg" />
      </div>
      <div className="buttoncontainer">            
          <FlatButton label="24k" labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<NotificationSms color="#9E9E9E" />}  />
          <FlatButton label="360k"  labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<AvReplay color="#9E9E9E" />} />
          <FlatButton label="600k"   labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionFavouriteBorder color="#9E9E9E" />} />
          <FlatButton disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionSystemUpdateAlt color="#9E9E9E" />} />
      </div>
  </Paper>
  <Paper className="tweetstyle" zDepth={3} rounded={false} >
      <div className="containerdiv">    
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/9/90/PM_Modi_2015.jpg" size={50} />
          <h3 className="usernamestyle" >Narendra modi <span> <p className="handlestyle">@Namo . 15 days ago</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
      </div>
      <div className="contentContainer">
          <p>Aadhaar has bought greatness into the nation !! #digitalindia  </p>
      </div>
      <div className="buttoncontainer">
          <FlatButton label="10k" labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<NotificationSms color="#9E9E9E" />} />
          <FlatButton label="33k"  labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<AvReplay color="#9E9E9E" />} />
          <FlatButton label="480k"   labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionFavouriteBorder color="#9E9E9E" />} />
          <FlatButton disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionSystemUpdateAlt color="#9E9E9E" />} />
      </div>
  </Paper>
  <Paper className="tweetstyle" zDepth={3} rounded={false} >
      <div className="containerdiv">    
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_VwyiauDXSHPy91f5moh45mNBjqFM369jl6LBG3cyGoFbAo5" size={50} />
          <h3 className="usernamestyle" >vikram <span> <p className="handlestyle">@viki . nov 12</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
      </div>
      <div className="contentContainer">
          <p>link our waist size to aadhaar :P </p>
          <img src="https://pbs.twimg.com/media/DQbkPGgVoAE3mOX.jpg" className="img" />
      </div>
      <div className="buttoncontainer">
          <FlatButton label="1k" labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<NotificationSms color="#9E9E9E" />}  />
          <FlatButton label="11k"  labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<AvReplay color="#9E9E9E" />} />
          <FlatButton label="21k"   labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionFavouriteBorder color="#9E9E9E" />} />
          <FlatButton disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionSystemUpdateAlt color="#9E9E9E" />} />
      </div>
  </Paper>
  </div>
);

export default OthersTweets;