import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainAppBar from './Appbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import OthersTweets from './tweets';
import TrendsCard from './Trends';
import MainSearchBar from './Mainsearchbar';
import Searchfilters from './searchfilters';
import Relatedsearches from './Relatedsearches';
import FollowerSuggestion from './Followersuggestion';
import './followersuggestion.css'
import Tweets from './tweets';

class SearchPage extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
            <MainAppBar />
            <div className="searchname">
              <h3>aadhar </h3>
            </div>
            <MainSearchBar />
            <div id="containerDiv">
              <Searchfilters />
              <Relatedsearches />
              <TrendsCard />
              <FollowerSuggestion />
              <OthersTweets />
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default SearchPage;
