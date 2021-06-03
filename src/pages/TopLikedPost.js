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
            <h3><Link to='/'>Back To HomePage</Link></h3>
            <br/>
            <button onClick={onSubmit}>Sort in Descending</button>
            <br/>
            <br/>
            {liked.map((l,i)=>{
                return (
                    <Fragment>
                        <div key={l.title} className="container">
                        <table key={l.title} className='table table-bordered'>
                                <thead className='thead-light'>
                                    <tr key={i}>
                                        <th scope='col'>Title</th>
                                        <th scope='col'>Author</th>
                                        <th scope='col'>Like</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td key={i}>{l.title}</td>
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