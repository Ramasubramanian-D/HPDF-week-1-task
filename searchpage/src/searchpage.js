import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainAppBar from './Appbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import OthersTweets from '../tweets';
import MainSearchBar from './Mainsearchbar';
import Searchfilters from './searchfilters';
import Relatedsearches from './Relatedsearches';
import FollowerSuggestion from '../Followersuggestion';
import People from './people';
import Tweets from './tweets';


class SearchPage extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
            <MainAppBar />
            <div style="searchBar">
            </div>
            <MainSearchBar />
            <Searchfilters />
            <Relatedsearches />
            <FollowerSuggestion />
            <People />
            <Tweets />
        
        </div>
      </MuiThemeProvider>
    );
  }
}

export default SearchPage;
