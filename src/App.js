import React, { Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import ShowAuthor from './pages/showAuthor';
import AuthorDetail from './pages/AuthorDetails/authorDetail';
import PostDetail from './pages/postDetails/postDetail';
import SideDrawer from './components/SideDrawer';
import TopLikedPost from './pages/TopLikedPost';
import TopLikedComment from './pages/TopLikedComment';
import DescendingLikedPost from './pages/sorted/DescendingPost';
import DescendingLikeComment from './pages/sorted/DescendingLikedComment';

function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;
