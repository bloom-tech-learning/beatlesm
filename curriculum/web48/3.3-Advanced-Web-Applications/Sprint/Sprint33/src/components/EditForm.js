import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialArticle = {
    id:"",
    headline: "",
    author: "",
    summary: "",
    body: ""
};

const EditForm = (props)=> {
    console.log('props in EditForm: ', props);
    const [article, setArticle]  = useState(initialArticle);
    const {handleEdit, handleEditCancel, editId} = props;

    console.log('useParams: ', useParams());
    const { id } = useParams();
    const { push } = useHistory();

    useEffect (() => {
        axiosWithAuth().get(`/articles/${editId}`)
        .then (res => {
            console.log('res in api Get: ', res);
            setArticle(res.data);                
        })
        .catch(err => {
            console.log('err');
        })        

      }, [])

    const handleChange = (e)=> {
        setArticle({
            ...article,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // 
      !editing && axiosWithAuth().put(`articles/${editId}`, article)
        .then (res => {           
            handleEdit(article); 
            setEditing(false); 
            push(`/view`);             
        })
        .catch(err => {
            console.log(err);
        })         
    }


    const handleCancel = (e) => {
        e.preventDefault();
        // handleEditCancel();
        setEditing(true); 
    }

    return(<FormContainer onSubmit={handleSubmit}>
        <h3>Edit Article</h3>
        <div>
            <label>Headline</label>
            <input value={article.headline} id="headline" name="headline" onChange={handleChange}/>
        </div>
        <div>
            <label>Author</label>
            <input value={article.author} id="author" name="author" onChange={handleChange}/>
        </div>
        <div>
            <label>Summary</label>
            <input value={article.summary} id="summary" name="summary" onChange={handleChange}/>
        </div>
        <div>
            <label>Body</label>
            <input value={article.body} id="body" name="body" onChange={handleChange}/>
        </div>
        <Button id="editButton">Edit Article</Button>
        <Button onClick={handleCancel}>Cancel</Button>
    </FormContainer>);
}

export default EditForm;

//Task List:
// 1. On mount, make a http request to retrieve the article with the id `editId.`
// 2. Save result of request to local state.

const FormContainer = styled.form`
    padding: 1em;
    width: 400px;
    background: white;

    label {
        margin-top: 0.5em;
    }

    input {
        padding: 0.5em;
    }
    
    div { 
        margin: 0.5em 0;
    }
`

const Button = styled.button`
    width: 100%;
    padding:1em;
    margin-top: 1em;
`