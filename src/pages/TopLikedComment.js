import React,{ useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { getTopLikedComment, getTopLikedCommentDesc } from '../ApiFunctions/author';

const TopLikedComment = ({ history })=>{
    const [liked,setLikedPost] = useState([]);
    const [descending, setDescending] = useState([]);

    useEffect(()=>{
        getTopLikedComment().then((res)=>{
            console.log(res.data);
            setLikedPost(res.data);
        })
    },[]);

    const onSubmit = ()=>{
        getTopLikedCommentDesc().then((res)=>{
            console.log(res.data);
            setDescending(res.data);
            history.push('like/sorted-comment')
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
                                    <tr key={l.body}>
                                        <td>{l.body}</td>
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

export default TopLikedComment;