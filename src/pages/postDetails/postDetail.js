import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { getPost, getComment } from '../../ApiFunctions/author';

const PostDetail = ({ match }) =>{
    const [detail,setDetail] = useState([]);
    const [comment,setComment] = useState([]);
    
    useEffect(()=>{
        getPost(match.params.slug).then((res)=>{
            console.log(res.data);
            setDetail(res.data);
        })
    },[match.params.slug]);

    useEffect(()=>{
        getComment(match.params.slug).then((res)=>{
            console.log(res.data);
            setComment(res.data);
        })
    },[match.params.slug])

    const { id, author, title } = detail;
    const { body, postId } = comment;

    // console.log(body,postId)

    return (
        <div className="container text-center">
            <h1 className="text-success">Title: {title}</h1>
            <hr/>
            <h2 className="text-info">Author Name: {author}</h2>
            <hr/>
            {postId === id ? (
                <Fragment>
                <h3>
                <span className="text-info">Comment:&nbsp;&nbsp; {body}</span><br/><br/>
                <hr/>
                <span className="text-info">AuthorId:&nbsp;&nbsp; <Link to={`/author/${id}`}>{id}</Link></span>
                <hr/>
                </h3>
                </Fragment>
            ): (
                'No comment'
            )}
            <h4><Link to='/'>Back to homepage</Link></h4>
        </div>
    )
};

export default PostDetail;