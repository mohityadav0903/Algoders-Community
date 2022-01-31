import React from 'react';
import './write.css'

const Write = () => {
    return <div className='write'>
        <img className='writeImg' src="https://th.bing.com/th/id/R.5be9f1b1662308e3eb08f4be0823c2d3?rik=5chxrOybiZYj4w&riu=http%3a%2f%2fhdwpro.com%2fwp-content%2fuploads%2f2016%2f03%2fBeautiful-Scenery-Wallpaper-1229x768.jpg&ehk=JyNqHIEZdmUL5xhzHM%2fKU%2fcA%2bMmJU7Fj3GdWX%2f1LN6Y%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fas fa-folder-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}} />
                <input type="text" placeholder='title' className='writeInput' autoFocus={ true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell Your Story.....' type="text" className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
      </form>
  </div>;
};

export default Write;
