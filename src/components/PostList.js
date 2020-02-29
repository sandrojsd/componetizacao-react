import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Alexsandro Trindade',
          avatar: 'https://avatars0.githubusercontent.com/u/18552211?s=460&v=4'
        },
        date: '29 Fev 2020',
        content: 'Aprendendo componentização com Reat, o que vocês acharam?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Aldenor Jr',
              avatar: 'https://avatars3.githubusercontent.com/u/1765922?s=460&v=4'
            },
            date: '29 Fev 22020',
            content:
              'Caraca Alex, ficou muito legal, parabéns!!!!!!!!'
          },
          {
            id: 2,
            author: {
              name: 'Aldenor Jr',
              avatar: 'https://avatars3.githubusercontent.com/u/1765922?s=460&v=4'
            },
            date: '29 Fev 22020',
            content:
              'Depois que dar uma olhada oh!'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Alexsandro Trindade',
          avatar: 'https://avatars0.githubusercontent.com/u/18552211?s=460&v=4'
        },
        date: '29 Fev 2020',
        content: 'Partiu aprender mais sobre ReactJS',
        comments: [
          {
            id: 1,
            author: {
              name: 'Aldenor Jr',
              avatar: 'https://avatars3.githubusercontent.com/u/1765922?s=460&v=4'
            },
            date: '29 Fev 22020',
            content:
              ':)'
          }
        ]
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;