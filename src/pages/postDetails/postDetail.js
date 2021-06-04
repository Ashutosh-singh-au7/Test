import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { getPost, getComment } from '../../ApiFunctions/author';
import { Tooltip } from 'antd'
import { ForwardOutlined, RollbackOutlined } from '@ant-design/icons'

const PostDetail = ({ match }) =>{
    const [detail,setDetail] = useState([]);
    const [comment,setComment] = useState([]);
    const [tooltip, setTooltip] = useState('Go to Author Comment Page');
    
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
            <h1 className="text-muted"><u>Post Details</u></h1>
            <hr/>
            <h1 className="text-primary">Title <ForwardOutlined/>{title}</h1>
            <hr/>
            <h2 className="text-info">Author Name <ForwardOutlined/>{author}</h2>
            <hr/>
            {postId === id ? (
                <Fragment>
                <h3>
                <span className="text-primary">Comment <ForwardOutlined />&nbsp; {body}</span><br/><br/>
                <hr/>
                <span className="text-warning">AuthorId <ForwardOutlined/>:&nbsp; <Tooltip title={tooltip}><Link to={`/author/${id}`}>{id}</Link></Tooltip></span>
                <hr/>
                </h3>
                </Fragment>
            ): (
                'No comment'
            )}
            <h4><Link to='/'> <RollbackOutlined/> Back to homepage</Link></h4>
        </div>
    )
};

export default PostDetail;