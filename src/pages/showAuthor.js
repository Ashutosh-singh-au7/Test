import React, { useState, useEffect } from 'react';
import { getAuthor } from '../ApiFunctions/author';
import { Link } from 'react-router-dom';
import { Pagination, Tooltip } from 'antd';

const ShowAuthor = ()=>{
    const [author, setAuthor] = useState([]);
    const [productsCount, setProductsCount] = useState(0);
    const [page, setPage] = useState(1);
    const [tooltip, setTooltip] = useState('Click to show Details');
    // const { id, name } = author;
    // console.log(id,name);
    
    useEffect(()=>{
        getAuthor().then((res)=>{
            // console.log(JSON.stringify(res.data,null,4));
            setAuthor(res.data);
            setProductsCount(res.data.length);
        }).catch((err)=>{
            console.log(err)
        })
    },[]);


    const showAuthor = ()=>{
        return (
            <div className="container-fluid">
            <div className=" text-center col pt-4">
            <hr/>
            <h1 className="text-muted"><u>List of Author</u></h1>
            <hr/>
            {author.map((a)=>{
                return (
                    <div  className="" key={a.id}>
                        <Tooltip  key={a.id} placement="top" title={tooltip}>
                        <h2><Link to={`author/${a.id}`}>{a.name}</Link></h2>
                        </Tooltip>
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
            <div className='row'>
            <nav className='col-md-4 offset-md-4 text-center pt-5 p-3'>
                <Pagination
                    className='text-primary'
                    size='small'
                    current={page}
                    total={(productsCount / 1) * 10}
                    onChange={(value)=> setPage(value)}
                    responsive
                />
            </nav>
        </div>
        </div>
    )
};
export default ShowAuthor;