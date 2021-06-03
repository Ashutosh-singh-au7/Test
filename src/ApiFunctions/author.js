import axios from 'axios';


export const getAuthor = ()=>{
    return axios.get('http://localhost:3001/author');
};

export const getAuthorById = (slug)=>{
    return axios.get(`http://localhost:3001/author/${slug}`)
}

export const getPostOfAuthor = (slug)=>{
    return axios.get(`http://localhost:3001/posts/${slug}`)
}

export const getPost = (slug)=>{
    return axios.get(`http://localhost:3001/posts/${slug}`)
}

export const getComment = (slug)=>{
    return axios.get(`http://localhost:3001/comments/${slug}`)
}

export const getAuthorByCount = ()=>{
    return axios.get(`http://localhost:3001/author?_limit=3`)
}

export const getTopLikedPost = ()=>{
    return axios.get(`http://localhost:3001/posts?_sort=Like&&_order=ASC`);
}

export const getTopLikedPostDesc = ()=>{
    return axios.get(`http://localhost:3001/posts?_sort=Like&&_order=DESC`);
}

export const getTopLikedComment = ()=>{
    return axios.get(`http://localhost:3001/comments?_sort=Like&&_order=ASC`);
}

export const getTopLikedCommentDesc = ()=>{
    return axios.get(`http://localhost:3001/comments?_sort=Like&&_order=DESC`);
}