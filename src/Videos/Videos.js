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
                    content
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
                  {
                        data.videos.edges.map((video, key) => {
                          return (
                            <div key={key}>
                              <h3>&quot;{video.node.title}&quot; by {video.node.author.name}</h3>
                              <div dangerouslySetInnerHTML={{__html: video.node.content}} />
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

export default Videos;
