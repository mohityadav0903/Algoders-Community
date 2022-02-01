import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import './write.css'

const Write = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const {user}=useContext(Context);
    const handleSubmit =async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            desc,
            username: user.username,
        };
        console.log(newPost);
        if (file) {
            const formData = new FormData();
            const filename = Date.now() + file.name;
            formData.append('name', filename);
            formData.append('file', file);
            newPost.photo = filename;
            try {
                await axios.post('http://localhost:5000/api/upload', formData);
             } catch (error) {
                
            }
        }
        console.log(newPost);
        try {
            const res = await axios.post('http://localhost:5000/api/posts', newPost);
            window.location.replace('/post/' + res.data._id);
            
        } catch (error) {
            
        }
        
    }
    return <div className='write'>
       { console.log(file)}
        {file&&<img  className='writeImg' src={URL.createObjectURL(file)} alt='img'/>}
             <form className='writeForm' onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fas fa-folder-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])} />
                <input type="text" placeholder='title' className='writeInput' autoFocus={ true} onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell Your Story.....' type="text" className='writeInput writeText' onChange={e=>setDesc(e.target.value)}></textarea>
            </div>
            <button className="writeSubmit" type='submit'>Publish</button>
            </form>
  </div>;
};

export default Write;
