import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class Post extends React.PureComponent {
  render() {
    const { props } = this;

    if (!props.data.post) {
      return (<h2>Hang on!</h2>);
    }

    return (
      <div>
        <h2>{props.data.post.title}</h2>
        <div dangerouslySetInnerHTML={{__html: props.data.post.content}} />
      </div>
    );
  }
}

const GetPostBySlug = gql`
    query getPostBySlug($slug: String) {
        post: postBy(uri: $slug) {
            title
            slug
            content
        }
    }
`;

export default graphql(GetPostBySlug, {
  options: (props) => {
    const { slug } = props.match.params;
    return {
      variables: {
        slug,
      },
    };
  },
})(Post);
