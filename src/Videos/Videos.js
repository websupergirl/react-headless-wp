import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

const Videos = () => (
  <Query query={gql`
    {
        videos {
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
                <h1>Enjoy some videos!</h1>
                  {
                        data.videos.edges.map((post, key) => {
                          return (
                            <div key={key}>
                              <h3>&quot;{post.node.title}&quot; by {post.node.author.name}</h3>
                              <Link to={`/video/${post.node.slug}`}>Watch Video</Link>
                            </div>
                          );
                        })
                        }
                <hr></hr>
                <Link to={`/`}>Return to all posts.</Link>
                </div>
              );
            }
        }

  </Query>

);

export default Videos;
