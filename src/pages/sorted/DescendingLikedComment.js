import React,{ useState, useEffect, Fragment} from 'react';
import { getTopLikedCommentDesc } from '../../ApiFunctions/author';
import { Link } from 'react-router-dom';

const DescendingLikedPost = ({ history })=>{
    const [liked,setLikedPost] = useState([]);

    useEffect(()=>{
        getTopLikedCommentDesc().then((res)=>{
            console.log(res.data);
            setLikedPost(res.data);
        })
    },[]);

    const onSubmit = ()=>{
        history.push('/comment')
    };

    return (
        <div className='container text-center'>
            {/*JSON.stringify(liked)*/}
            <h3><Link to='/'>Back To HomePage</Link></h3>
            <br/>
            <button onClick={onSubmit}>Sort in Ascending</button>
            <br/>
            <br/>
            {liked.map((l,i)=>{
                return (
                    <Fragment>
                        <div key={l.body} className="container">
                        <table key={l.body} className='table table-bordered'>
                                <thead className='thead-light'>
                                    <tr>
                                        <th scope='col'>Body</th>
                                        <th scope='col'>Author</th>
                                        <th scope='col'>Like</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td key={i}>{l.body}</td>
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