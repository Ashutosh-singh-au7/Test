import React, { useState, useEffect } from 'react';
import { getAuthor } from '../ApiFunctions/author';
import { Link } from 'react-router-dom';

const ShowAuthor = ()=>{
    const [author, setAuthor] = useState([]);
    // const { id, name } = author;
    // console.log(id,name);
    
    useEffect(()=>{
        getAuthor().then((res)=>{
            // console.log(JSON.stringify(res.data,null,4));
            setAuthor(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    },[]);


    const showAuthor = ()=>{
        return (
            <div className="container-fluid">
            <div className="col pt-4 text-center">
            <hr/>
            <h1 className="text-danger">List of Author</h1>
            <hr/>
            {author.map((a)=>{
                return (
                    <div key={a.id}>
                        <h2><Link to={`author/${a.id}`}>{a.name}</Link></h2>
                    </div>
                )
            })}
            </div>
            </div>
        )
    }

    return (
        <div>
            {showAuthor()}
        </div>
    )
};
export default ShowAuthor;