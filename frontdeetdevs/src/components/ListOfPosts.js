import react from "react"
import Post from "./Post"
import '../App.css';
import {Button} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"



export default function ListOfPosts() {
    const navigate = useNavigate()
    let posts
    return (
        <div>
            <p>holala</p>
            {
                
                localStorage.getItem("posts") ? (
                    posts = JSON.parse(localStorage.getItem("posts")),
                    posts.map((post, index) => {
                        return <p key={index} >{post}</p>
                       
                })) : <p>nada</p>

            }
            <Button type="submit" onClick={() => {
                navigate(`/post`);
                }}>
                    Make a post
            </Button>
            
        </div>

        // posts["posts"].map(({content}, index) => {
        //     return <Post key={index} content={content}></Post>
        //   })
    )
}