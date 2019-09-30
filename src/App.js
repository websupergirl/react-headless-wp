import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HashRouter, Route } from 'react-router-dom';
import Posts from './Posts/Posts';
import Post from './Posts/Post';
import Videos from './Videos/Videos';
import Video from './Videos/Video';

const client = new ApolloClient({
  uri: 'https://headless.thedevdrop.com/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
    <HashRouter basename="/">
        <div>
          <header>
            <h1>Headless WordPress and React Test with CPTs</h1>
          </header>
          <div className="content">
            <Route exact path="/" component={Posts} />
            <Route path="/posts" component={Posts} />
            <Route path="/post/:slug" component={Post} />
            <Route path="/videos" component={Videos} />
            <Route path="/video/:slug" component={Video} />
          </div>
        </div>
      </HashRouter>
    </ApolloProvider>
  );
}

export default App;
