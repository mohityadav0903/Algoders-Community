import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import { storage } from '../../firebase/firebase';
import './write.css'

const Write = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const [url,setUrl]=useState("");
    const [cat, setCat] = useState('');
    const { user } = useContext(Context);
    const newPost = {
        title,
        desc,
        categories: cat,
        username: user.username,
    };

    const handleChangeFile = (e)=> {
        console.log("gya");
        setFile(e.target.files[0]);
        console.log(file);
       
    };
    useEffect(() => {
        firebaseImage();
    }, [file]);
    const firebaseImage = () => {
        console.log(file);
        if (file) {
            const uploadTask = storage.ref(`images/${file.name}`).put(file);
            console.log("heelo");
            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(file.name)
                        .getDownloadURL()
                        .then(url => {
                            console.log(url);
                            setUrl(url);
                            console.log(url);
                        });
                }
            );
        }

    };
  
    const handleDataTransfer = async () => {
        if (url) {
          console.log("hello");
          const formData = new FormData();
          const filename = Date.now() + file.name;
          formData.append('name', filename);
          formData.append('file', file);
          newPost.photo =url;
          try {
              await axios.post('https://algo-backend.herokuapp.com/api/upload', formData);
           } catch (error) {
              
          }
        }
      }
    


    const handleSubmit =async (e) => {
        e.preventDefault();
        console.log(newPost);
        handleDataTransfer();
        console.log(file);
        console.log(url);
       console.log(newPost);
        try {
            const res = await axios.post('https://algo-backend.herokuapp.com/api/posts', newPost);
            window.location.replace('/post/' + res.data._id);
            
        } catch (error) {
            
        }
        
    }
    console.log(file)
    return <div className='write'>
        { console.log(file)}
        {file&&<img  className='writeImg' src={url} alt='img'/>}
             <form className='writeForm' onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fas fa-folder-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}}  onChange={handleChangeFile} />
                <input type="text" placeholder='title' required className='writeInput' autoFocus={ true} onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell Your Story.....' type="text" required rows="2" cols='2' className='writeInput writeText' onChange={e=>setDesc(e.target.value)}></textarea>
            </div>
            <div className="writeFormGroup">
            <label>Select Category</label> 
                <select onChange={(e)=>setCat(e.target.value)} >
                <option value='CPP'>CPP</option>
                <option value="WEB DEV" >WEB DEV</option>
                <option value="PYTHON" >PYTHON</option>
                <option value="C">C</option>
            </select>
            </div>
            <button className="writeSubmit" type='submit'>Publish</button>
            </form>
  </div>;
};

export default Write;
