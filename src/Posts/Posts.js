import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

const Posts = () => (
  <Query query={gql`
    {
        posts {
            edges {
                node {
                    title
                    slug
                    author {
                      name
                    }
                }
            }
        }
    }  
    `}
  >
    {
            ({ loading, error, data }) => {
              if (loading) {
                return (<h1>Hang on!</h1>);
              }
              return (
                <div>
                <h3>Wait! Would you like to watch some videos instead?</h3>
                <Link to={`/videos/`}>Sure, go with videos.</Link>
                <hr></hr>
                  {
                        data.posts.edges.map((post, key) => {
                          return (
                            <div key={key}>
                              <h3>&quot;{post.node.title}&quot; by {post.node.author.name}</h3>
                              <Link to={`/post/${post.node.slug}`}>Read More</Link>
                            </div>
                          );
                        })
                        }
                </div>
              );
            }
        }

  </Query>

);

export default Posts;
