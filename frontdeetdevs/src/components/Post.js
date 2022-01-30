import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import react from "react"
import '../App.css';
import {Button, Textarea} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"



export default function Post({content}) {

  const [post, setPost] = useState([{
    post: ""
  }])
  const navigate = useNavigate()
  function handlePost(e) {
    setPost(e.target.value)
  }


  return (
    <div>
        <form onSubmit={(e) => handlePost(e)}>

          <Textarea label="write your post" onChange={handlePost}>

          </Textarea>
          <Button type="submit" onClick={() => {

            let posts = [post]
            if (localStorage.getItem("posts")) {
              posts = JSON.parse(localStorage.getItem("posts"));
              posts.push(post)
            }
            localStorage.setItem("posts", JSON.stringify(posts));


                navigate(`/listOfPosts`);
              }}>
                  Post
          </Button>
        </form>

    </div>
  )
}