import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { drawerActions } from '../../store/reducers/drawer-slice';
import { getAuthorById, getPostOfAuthor } from '../../ApiFunctions/author';
import { Tooltip } from 'antd'
import { ForwardOutlined, RollbackOutlined } from '@ant-design/icons'

const AuthorDetail = ({ match })=>{
    const [value, setValue] = useState([]);
    const [post, setPost] = useState([]);
    const [tooltip, setTooltip] = useState('Click to see post details');

    const dispatch = useDispatch();
    const { drawer } = useSelector((state)=> state.drawer);

    useEffect(()=>{
        getAuthorById(match.params.slug).then((res)=>{
            console.log(res.data)
            setValue(res.data)
        });
    },[match.params.slug]);

    useEffect(()=>{
        getPostOfAuthor(match.params.slug).then((res)=>{
            console.log(res.data);
            setPost(res.data)
            dispatch(drawerActions.setVisible({
                drawer: true
            }))
        })
    },[match.params.slug, dispatch]);

    const { name } = value;
    const { id ,title, author } = post;

    const showSingleAuthor = ()=>{
        return (
            <div className="container-fluid navbar-header">
            <div className="col text-center pt-4">
            <h1 className="text-muted"><u>Author Details</u></h1>
            <hr/>
            <br/>
            <br/>
            <h2 className="text-warning">Name <ForwardOutlined />&nbsp;{name}</h2><br/>
            <hr/>
            {author === name ? (
                <h2 className="text-primary"> Comment <ForwardOutlined /> &nbsp;<Tooltip title={tooltip}><Link to={`posts/${id}`}>{title}</Link></Tooltip></h2>
            ) : (
                ''
            )}
            </div>
            <hr/>
            </div>
        )
    }
    return (
        <div className="text-center container">
            {showSingleAuthor()}
            <h4><Link to='/'><RollbackOutlined/>  Back to homepage</Link></h4>
            <hr/>
            <hr/>
        </div>
    )
};

export default AuthorDetail;