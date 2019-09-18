import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import Posts from './Posts/Posts';
import Post from './Posts/Post';

const client = new ApolloClient({
  uri: 'https://headless.thedevdrop.com/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <header>
            <h1>Headless WordPress and React Test</h1>
          </header>
          <div className="content">
            <Route exact path="/react-headless-wp/" component={Posts} />
            <Route path="/react-headless-wp/posts" component={Posts} />
            <Route path="/react-headless-wp/post/:slug" component={Post} />
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
