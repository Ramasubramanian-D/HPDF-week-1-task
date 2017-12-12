import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainAppBar from './Appbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProfileCard from './Profilecard';
import TrendsCard from './Trends';
import TweetCard from './TweetMaker';
import OthersTweets from './tweets';
import CopyRights from './copyrights';
import FollowerSuggestion from './Followersuggestion';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <MainAppBar/>
          <div id="containerDiv">
            <ProfileCard />
            <FollowerSuggestion />
            <TrendsCard />
            <CopyRights />
            <TweetCard/>
            <OthersTweets/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
