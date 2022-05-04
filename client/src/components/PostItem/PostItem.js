import React, {useState} from 'react'
import './PostItem.css'
export default function Postitem(props) {
    const {title, user, text, subreddit, _id} = props.post
    const [votes, setVotes] = useState(0);
  return (
    <div className="post">
        <div className="post_left">
            <i onClick={() => setVotes(votes + 1)} className="fas fa-caret-up"></i>
                <span>{votes}</span>
            <i onClick={() => setVotes(votes - 2)} className="fas fa-caret-down"></i>
        </div>
        <div className="post_center">
            <img src={`https://picsum.photos/id/${Math.floor(
               Math.random() * 50
           )}/400/300`}/>
        </div>
        <div className="post_right">
            <h3><a href={`/post/${_id}/comment`}>{title}</a></h3>
            <span className="post_info">
                {text}
                {" "}<a href ={`/u/${user}`}>{user}</a> {" "}
                to
                {" "}<a href={`/r/${subreddit}`}>{subreddit}</a>
            </span>
            <p className="post_info">
                {0} <a href={`/post/${_id}/comment`}> comments</a> | share | save | hide | report
            </p>
        </div>
    </div>
  )
}
