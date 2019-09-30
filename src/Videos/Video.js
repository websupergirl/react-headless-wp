import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

class Video extends React.PureComponent {
  render() {
    const { props } = this;

    if (!props.data.video) {
      return (<h2>Hang on!</h2>);
    }

    return (
      <div>
        <h2>&quot;{props.data.video.title}&quot; posted by {props.data.video.author.name}</h2>
        <div dangerouslySetInnerHTML={{__html: props.data.video.content}} />
        <hr></hr>
        <Link to={`/videos/`}>Go back to the video list.</Link>
      </div>
    );
  }
}

const GetVideoBySlug = gql`
    query getVideoBySlug($slug: String) {
        video: videoBy(uri: $slug) {
            title
            slug
            content
            author {
              name
            }
        }
    }
`;

export default graphql(GetVideoBySlug, {
  options: (props) => {
    const { slug } = props.match.params;
    return {
      variables: {
        slug,
      },
    };
  },
})(Video);
