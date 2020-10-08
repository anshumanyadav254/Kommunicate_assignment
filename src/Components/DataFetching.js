import React, { useEffect, useState } from "react";

import axios from "axios";
function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, seteroor] = useState("");
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((respose) => {
          console.log(respose)
        setLoading(false);
        setPost(respose.data);
        seteroor("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        seteroor("Some thing went wrong");
      });
  }, []);
  return (
    <div>
      {/* {post.email} */}
      {loading ? "loading" : post.data.fisrt_name}
      {error ? error : null}
    </div>
  );
}
export default DataFetchingOne;
