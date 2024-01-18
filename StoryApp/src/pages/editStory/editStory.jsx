import './editStory.css'
import { useState } from "react"
import { Link,useLocation,useNavigate } from "react-router-dom";
import axios from 'axios';

function EditStory() {
  const location = useLocation()
  const { story } = location.state
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: story.title,
    author: story.author,
    synopsis: story.synopsis,
    category: story.category,
    tags: story.tags,
    coverImages: null,
    status: story.status,
  });

  const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
    });
  };
  const handleInputImage = (e) => {
    
    setFormData({
      ...formData,
      coverImages: e.target.files[0],
      });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Access form data from the state object
    console.log(formData);
    // Perform further actions, such as sending data to a server
    navigate("/"); 
    await axios.put(`http://localhost:3000/stories/${story.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    };

  const handleCancel = ()=>{
    console.log("Are you sure you want to cancel adding the story without saving the data?")
    navigate("/"); 
    
  }

  const chapters = [{id:'1', title:'Builan Ku', updated:'13 December 2023'}, {id:'2', title:'Toko Loak', updated:'11 January 2021'}]

  return (
    <div>
        <h1>Edit Story</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" id='' name='title' placeholder='Title' 
                value={formData.title}
                onChange={handleInputChange}
                />

                <label>Author</label>
                <input type="text" id='' name='author'  placeholder='Author'
                value={formData.author}
                onChange={handleInputChange}
                />

                <label>Synopsis</label>
                <textarea cols="30" rows="10" placeholder='Synopsis' name='synopsis'
                value={formData.synopsis}
                onChange={handleInputChange}
                ></textarea>

                <label>Category</label>
                <select name="category" id=""
                value={formData.category}
                onChange={handleInputChange}
                >
                    <option disabled value> -- select category -- </option>
                    <option value="Financial">Financial</option>
                    <option value="Technology">Technology</option>
                    <option value="Health">Health</option>
                </select>

                <label>Tags</label>
                <input type="text" name='tags' id="" 
                value={formData.tags}
                onChange={handleInputChange}
                />
            
                <label>Cover Images</label>
                <input type="file" name="coverImages" id="" 
                
                onChange={handleInputImage}
                />

                <label>Status</label>
                <select name="status" id=""
                value={formData.status}
                onChange={handleInputChange}
                >
                    <option disabled value> -- select status -- </option>
                    <option value="Publish">Publish</option>
                    <option value="Draft">Draft</option>
                </select>
                <div className='chapterList'>
                    
                    <Link to={`/addChapter`} className='nav-link'>Add Chapter</Link>
                    <table>
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Last Updated</th>
                            <th>Action</th>
                        </tr>
                        {chapters.map(chapter=>{
                            return(
                                <tr key={chapter.id}>
                                <td>{chapter.title}</td>
                                <td>{chapter.updated}</td>
                                <td><button>Edit</button><button>Del</button></td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                    </table>
                </div>
                <button type='button' onClick={handleCancel}>Cancel</button>
                <input type="submit" value="Save"/>
            </form>
    </div>
  )
}

export default EditStory
