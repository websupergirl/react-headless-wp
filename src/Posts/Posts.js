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
                  {
                        data.posts.edges.map((post, key) => {
                          return (
                            <div key={key}>
                              <h3>{post.node.title}</h3>
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
