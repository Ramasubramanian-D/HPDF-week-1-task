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
  marginTop: '0.5px',
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
                <Avatar src="https://orig00.deviantart.net/8126/f/2017/106/9/f/paul_pogba___desktop_wallpaper_by_pranayshah7-db607qn.png" size={50} />
                <h3 className="usernamestyle" >paul pogba <span> <p className="handlestyle">@paulpogba . 19h</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
            </div>
            <div className="contentContainer">
                <p>good game and three important points on to the next game #mufc </p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KfQqK_BGz61YT2w1QJhnhMKFpOKhTUROYEx8fOAoVYjVGKkh" width="100%" />
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
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Chris_Pratt_by_Gage_Skidmore_2.jpg/1200px-Chris_Pratt_by_Gage_Skidmore_2.jpg" size={50} />
                <h3 className="usernamestyle" >Chris prat <span> <p className="handlestyle">@chrisprat . 1day ago</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
            </div>
            <div className="contentContainer">
                <p>the avenger's teaser infinity war trailer is out and obviously its awesome <a href="www.youtube.com/watch?v=6ZfuNTqbHE8" >www.youtube.com/=?fsdgffg </a>  </p>
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
                <Avatar src="https://media.wired.com/photos/597b8d2989235e4259684287/1:1/w_2400,c_limit/ELONMUSK-FA.jpg" size={50} />
                <h3 className="usernamestyle" >Elon Musk <span> <p className="handlestyle">@Elonmusk . 1day ago</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
            </div>
            <div className="contentContainer">
                <p>check out this company they are doing awesome work. kudos guys !!  <a href="www.hasura.io" >hasura.io </a>  </p>
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
                <Avatar src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2015/09/Incredible-India-600x168.jpg" size={50} />
                <h3 className="usernamestyle" >incredible india <span> <p className="handlestyle">@incredible india . 1day ago</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
            </div>
            <div className="contentContainer">
                <p>It’s exhilarating, it’s surreal. Drive down the Zuluk loop, with 32 hairpin turns, and give yourself the biggest adrenaline rush ever! #Sikkim #IncredibleIndia</p>
                <img src="https://pbs.twimg.com/media/DQwZJfQV4AEKaCQ.png" className="img" />
            </div>
            <div className="buttoncontainer">
                <FlatButton label="1k" />
                <FlatButton label="11k" />
                <FlatButton label="21k" />
                <FlatButton  />
            </div>
        </Paper>
        <Paper className="tweetstyle" zDepth={3} rounded={false} >
            <div className="containerdiv">    
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcA4V3oWu5a87MR6bH1V4DCFADLV4GnQWVSumwCEYXDxeZ1jA" size={50} />
                <h3 className="usernamestyle" >Hasura Education <span> <p className="handlestyle">@hasuraedu . 1day ago</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
            </div>
            <div className="contentContainer">
                <p>IMAD is back for enrollment on Feb 2018 register now to learn all about application development !! </p>
            </ div>
            <div className="buttoncontainer">
                <FlatButton label="151" />
                <FlatButton label="253" />
                <FlatButton label="600" />
                <FlatButton style={Buttonstyle} disableTouchRipple='true' hoverColor="#81D4FA" icon={<NotificationSms viewBox="0 0 35 35" color="#9E9E9E"/>}   />
            </div>
        </Paper>
    </div>
);

export default OthersTweets;