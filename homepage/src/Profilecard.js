import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import CardMedia from 'material-ui/Card'
import './profilecard.css'

const styleCard = {
  height: '300px',
  width: '280px',
  marginTop: '0px',
  marginBottom: '0px',
  marginRight: '5px',
  marginLeft: '0px',
  paddingRight: '10px',
  float: 'left',
  clear: 'right'
};


const ProfileCard = () => (
  <div>
    <Paper style={styleCard} zDepth={3} >
        <div>
        <img src="https://cdn.images.express.co.uk/img/dynamic/galleries/x701/315374.jpg" className="imgstyle"/>
        <div className="containerdiv">    
          <Avatar src="https://metrouk2.files.wordpress.com/2016/09/610084506.jpg?w=748&h=498&crop=1" size={50} />
          <p className="headerstyle"> man united <br />  <p className="handlestyle"> @manunited </p>  </p>
        </div>
        <div className="statContainer">
          <div className="Button">
            <p className="title">tweets</p>
            <p className="statnumber">245</p>
          </div>
          <div className="Button">
            <p className="title">tweets</p>
            <p className="statnumber">245</p>
          </div>
          <div className="Button">  
            <p className="title">tweets</p>
            <p className="statnumber">245</p>
          </div> 
        </div>  
        </div>
    </Paper>
  </div>
);

export default ProfileCard;