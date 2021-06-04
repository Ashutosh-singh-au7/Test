import React,{ useState, useEffect, Fragment} from 'react';
import { getTopLikedPostDesc } from '../../ApiFunctions/author';
import { Link } from 'react-router-dom';
import { RollbackOutlined } from '@ant-design/icons';

const DescendingLikedPost = ({ history })=>{
    const [liked,setLikedPost] = useState([]);

    useEffect(()=>{
        getTopLikedPostDesc().then((res)=>{
            console.log(res.data);
            setLikedPost(res.data);
        })
    },[]);

    const onSubmit = ()=>{
        history.push('/like')
    };

    return (
        <div className='container text-center'>
            {/*JSON.stringify(liked)*/}
            <button className='btn btn-danger btn-raised '><Link to='/'><RollbackOutlined/> Back To HomePage</Link></button>
            <br/>
            <br/>
            <button className='btn btn-primary btn-raised' onClick={onSubmit}>Sort in Ascending</button>
            <br/>
            <br/>
            {liked.map((l,i)=>{
                return (
                    <Fragment key={i}>
                        <div className="container">
                        <table className='table table-bordered'>
                                <thead className='thead-light'>
                                    <tr>
                                        <th scope='col'>Title</th>
                                        <th scope='col'>Author</th>
                                        <th scope='col'>Like</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{l.title}</td>
                                        <td>{l.author}</td>
                                        <td>{l.Like}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Fragment>
                )
            })}
        </div>
    )
};

export default DescendingLikedPost;