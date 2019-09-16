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
            <Route exact path="/" component={Posts} />
            <Route path="/posts" component={Posts} />
            <Route path="/post/:slug" component={Post} />
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
