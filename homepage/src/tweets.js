import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton';
import NavigationExpandMoreIcon  from 'material-ui/svg-icons/navigation/expand-more';
import './tweets.css';
import { NotificationSms, AvReplay } from 'material-ui/svg-icons';
import ActionFavouriteBorder  from 'material-ui/svg-icons/action/favorite-border';
import ActionSystemUpdateAlt from 'material-ui/svg-icons/action/system-update-alt';

const style = {
  height: '1000px',
  marginTop: '0.5px',
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
                <Avatar src="https://orig00.deviantart.net/8126/f/2017/106/9/f/paul_pogba___desktop_wallpaper_by_pranayshah7-db607qn.png" size={50} />
                <h3 className="usernamestyle" >paul pogba <span> <p className="handlestyle">@paulpogba . 19h</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
            </div>
            <div className="contentContainer">
                <p>good game and three important points on to the next game #mufc </p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KfQqK_BGz61YT2w1QJhnhMKFpOKhTUROYEx8fOAoVYjVGKkh" width="100%" />
            </div>
            <div className="buttoncontainer">
                <FlatButton label="32k" labelPosition="before" labelStyle={labelstyle}  disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<NotificationSms color="#9E9E9E" />}  />
                <FlatButton label="128k"  labelPosition="before" labelStyle={labelstyle}  disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<AvReplay color="#9E9E9E" />} />
                <FlatButton label="64k" labelPosition="before" labelStyle={labelstyle}  disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionFavouriteBorder color="#9E9E9E" />} />
                <FlatButton  disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionSystemUpdateAlt color="#9E9E9E" />} />
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
                <FlatButton label="24k" labelPosition="before" labelStyle={labelstyle}  disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<NotificationSms color="#9E9E9E" />} />
                <FlatButton label="360k"  labelPosition="before" labelStyle={labelstyle}  disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<AvReplay color="#9E9E9E" />}/>
                <FlatButton label="600k" labelPosition="before" labelStyle={labelstyle}  disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionFavouriteBorder color="#9E9E9E"/>} />
                <FlatButton  disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionSystemUpdateAlt color="#9E9E9E" />} />
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
                <FlatButton label="10k" labelPosition="before" labelStyle={labelstyle}  disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<NotificationSms color="#9E9E9E" />}  />
                <FlatButton label="33k"  labelPosition="before" labelStyle={labelstyle}  disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<AvReplay color="#9E9E9E" />}/>
                <FlatButton label="480k" labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionFavouriteBorder color="#9E9E9E" />} />
                <FlatButton  disableTouchRipple='true' hoverColor="#E6F7FE"   icon={<ActionSystemUpdateAlt color="#9E9E9E"color="#9E9E9E" />}/>
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
                <FlatButton label="1k" labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<NotificationSms color="#9E9E9E" />}  />
                <FlatButton label="11k"  labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<AvReplay color="#9E9E9E" />}/>
                <FlatButton label="21k" labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionFavouriteBorder color="#9E9E9E" />} />
                <FlatButton  disableTouchRipple='true' hoverColor="#E6F7FE"   icon={<ActionSystemUpdateAlt color="#9E9E9E" />}/>
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
                <FlatButton label="151" labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<NotificationSms color="#9E9E9E" />}  />
                <FlatButton label="253"  labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<AvReplay color="#9E9E9E" />} />
                <FlatButton label="600" labelPosition="before" labelStyle={labelstyle} disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionFavouriteBorder color="#9E9E9E" />} />
                <FlatButton  disableTouchRipple='true' hoverColor="#E6F7FE"  icon={<ActionSystemUpdateAlt color="#9E9E9E" />}   />
            </div>
        </Paper>
    </div>
);

export default OthersTweets;