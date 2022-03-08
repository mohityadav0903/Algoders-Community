import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import './Post.css'
import Aos from "aos";
import "aos/dist/aos.css";

function Post({ post }) {
    useEffect(()=>{
        Aos.init({duration:3000})
    })
    console.log(parse(post.desc))
    const postDesc = parse(post.desc);
   return <div className='post card ' data-aos="zoom-out">
        {/* {post.photo && <img className='postImg card-img-top img-fluid' src={post.photo} alt=""/>} */}
        <div className="postInfo card-body">
            <div className="postcats">
                {post.categories.map((cat) => <span key={cat} className="postcat">{cat}</span>)}
            </div>
            <span className="postTitle card-title">{post.title}</span>
           <span className="postDate  my-1">{new Date(post.createdAt).toDateString()}</span>
           <span className=" my-1">{post.username}</span>
           <Link to={`/post/${post._id}`} className='link'>     <button class="btn btn-primary text-white">Read More</button></Link>

           {/* {console.log(post.desc.substring(0,100))} */}
            {/* <p className='postDesc container-fluid'>{postDesc}</p> */}
        </div>
  </div>
}

export default Post;
