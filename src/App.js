import React, { useState,Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import ShowAuthor from './pages/showAuthor';
import AuthorDetail from './pages/AuthorDetails/authorDetail';
import PostDetail from './pages/postDetails/postDetail';
import SideDrawer from './components/SideDrawer';
import TopLikedPost from './pages/TopLikedPost';
import styled, { ThemeProvider } from 'styled-components';
import TopLikedComment from './pages/TopLikedComment';
import DescendingLikedPost from './pages/sorted/DescendingPost';
import DescendingLikeComment from './pages/sorted/DescendingLikedComment';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import Toggle from './components/Toggle';

const StyledApp = styled.div`
  color: ${props => props.theme.fontColor}
`;

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = ()=>{
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <Fragment>
    <ThemeProvider theme={theme === 'light'? lightTheme : darkTheme}>
    <GlobalStyles/>
    <StyledApp>
    <Toggle onClick={themeToggler}/>
    <SideDrawer/>
        <Switch>
          <Route exact path='/' component={ShowAuthor} />
          <Route exact path='/author/:slug' component={AuthorDetail} />
          <Route exact path='/author/posts/:slug' component={PostDetail} />
          <Route exact path='/like' component={TopLikedPost} />
          <Route exact path='/comment' component={TopLikedComment}/>
          <Route exact path='/like/sorted-post' component={DescendingLikedPost}/>
          <Route exact path='/like/sorted-comment' component={DescendingLikeComment}/>
        </Switch>
        </StyledApp>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
