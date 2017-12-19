import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton';
import NavigationExpandMoreIcon  from 'material-ui/svg-icons/navigation/expand-more';
import './tweets.css';
import { ToggleStar } from 'material-ui/svg-icons/toggle/star';
import { SocialShare } from 'material-ui/svg-icons/social/share';
import { NotificationSms, AvReplay } from 'material-ui/svg-icons';

const style = {
  height: '1000px',
  marginTop: '15px',
  marginLeft: '310px',
  marginRight: '310px',
  marginBottom: '25px'
}

const labelstyle = {
    fontFamily: 'helvetica',
    fontSize: '15px',
    textAlign: 'left',
    padding: '0px',
    fontWeight: 'bold',
    color: '#9E9E9E'
}
  
  const Buttonstyle = {
    width: '140px',
    height: '100%',
    display: 'block',
    margin: '0px',
    marginTop: '3px'
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
          <FlatButton label="32k" />
          <FlatButton label="128k" />
          <FlatButton label="64k" />
          <FlatButton  />
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
          <FlatButton label="24k" />
          <FlatButton label="360k" />
          <FlatButton label="600k" />
          <FlatButton  />
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
          <FlatButton label="10k" />
          <FlatButton label="33k" />
          <FlatButton label="480k" />
          <FlatButton  />
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
          <FlatButton label="1k" />
          <FlatButton label="11k" />
          <FlatButton label="21k" />
          <FlatButton  />
      </div>
  </Paper>
  </div>
);

export default OthersTweets;