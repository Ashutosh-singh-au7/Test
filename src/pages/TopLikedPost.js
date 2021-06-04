import React,{ useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { getTopLikedPost,getTopLikedPostDesc } from '../ApiFunctions/author';

const TopLikedPost = ({ history })=>{
    const [liked,setLikedPost] = useState([]);
    const [descending, setDescending] = useState([]);

    useEffect(()=>{
        getTopLikedPost().then((res)=>{
            console.log(res.data);
            setLikedPost(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    },[]);

    const onSubmit = ()=>{
        getTopLikedPostDesc().then((res)=>{
            console.log(res.data);
            setDescending(res.data);
            history.push('/like/sorted-post')
        })
    };

    return (
        <div className='container text-center'>
            {/*JSON.stringify(liked)*/}
            <button className='btn btn-danger btn-raised '><Link to='/'>Back To HomePage</Link></button>
            <br/>
            <br/>
            <button className='btn btn-primary btn-raised' onClick={onSubmit}>Sort in Descending</button>
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

export default TopLikedPost;