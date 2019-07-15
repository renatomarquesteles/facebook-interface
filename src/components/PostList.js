import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Neymar Jr',
          avatar: 'https://i.imgur.com/6iTmYNn.jpg'
        },
        date: '20 Jun 2011',
        content: 'To chegando com os refrii rapaziada !!',
        comments: [
          {
            id: 2,
            author: {
              name: 'Gabriel Medina',
              avatar: 'https://i.imgur.com/u4oLHdy.jpg'
            },
            content: 'Aí sim!! Sextou!!'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Dinho Ouro Preto',
          avatar: 'https://i.imgur.com/O2eYtlT.jpg'
        },
        date: '2 Apr 2013',
        content: 'falta uma banda q una todas as tribos.Como foi o Norvana',
        comments: [
          {
            id: 4,
            author: {
              name: 'Cid Não Salvo',
              avatar: 'https://i.imgur.com/DaDLjOl.png'
            },
            content: 'saudades Curte Cobem'
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="postList">
        {this.state.posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
