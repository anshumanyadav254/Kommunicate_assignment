import React, { Component } from "react";
import axios from "axios";
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
    {/* {posts.map((post)=><div>{post.email}</div>)} */}
    Data is Not showing here you can check in console i am fixing it... 

        {posts.length
          ? posts.map((post) => <div key={post.id}>  Name - {post.data[0].first_name}{post.data.last_name} Email - {post.email } 
          avtar - {post.data.avatar}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
