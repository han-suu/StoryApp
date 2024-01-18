import './addChapter.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react"
import { useNavigate } from "react-router-dom";
function AddChapter() {
  const navigate = useNavigate();
  const [story, setStory] = useState("")
  const [title, setTitle] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    let chapter = {title:title,story:story}
    console.log(chapter) 
    navigate("/addStory");  
  }

  const handleInputTitle = (event)=>{
    setTitle(event.target.value)
  }
  
  const handleCancel = ()=>{
    console.log("Are you sure you want to cancel adding the chapter without saving the data?")
    navigate("/addStory");
  }
  
  return (
    <div>
        <h1>Add Chapter</h1>
        <form onSubmit={handleSubmit}>
          <input type="text"  placeholder='Title' value={title} onChange={handleInputTitle}/>
          <ReactQuill theme="snow" value={story} onChange={setStory} />
          <button type='button' onClick={handleCancel}>Cancel</button>
          <input type="submit" value="Save"/>
        </form>
        
    </div>
  )
}

export default AddChapter
