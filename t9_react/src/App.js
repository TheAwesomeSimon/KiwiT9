import Decode from './Components/Decode';
import Encode from './Components/Encode';
import Home from './Components/Home';
import NewWord from './Components/NewWord';
import React from 'react';
import { AppDiv, Svg } from './Components/Styled'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

class App extends React.Component {
  getPath() {
    return <path d="M24 12.148l-1.361 1.465-10.639-9.883-10.639 
            9.868-1.361-1.465 12-11.133 12 11.148zm-4 1.749l-2 10.103h-12l-2-10.103 8-7.444 8 
            7.444zm-7 6.103c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm1-5c0-1.105-.896-2-2-2s-2 .895-2 
            2 .896 2 2 2 2-.895 2-2z"/>;
  }
  render() {
    return (
      <AppDiv>
        <Svg onClick={() => { this.props.history.push(`/home`) }} viewBox="0 0 27 27">
          {this.getPath()}
        </Svg>
        <h1>T9 translator</h1>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route exact path='/home' component={Home} />
          <Route exact path='/decode' component={Decode} />
          <Route exact path='/encode' component={Encode} />
          <Route exact path='/addWord' component={NewWord} />
        </Switch>
      </AppDiv>
    )
  }
}

export default withRouter(App);