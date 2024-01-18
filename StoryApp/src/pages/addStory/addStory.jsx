import './addStory.css'
import { useState } from "react"
import { Link } from "react-router-dom";
function AddStory() {

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        synopsis: '',
        category: '',
        tags: '',
        coverImages: '',
        status: '',
      });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Access form data from the state object
        console.log(formData);
        // Perform further actions, such as sending data to a server
      };

      const chapters = [{id:'1', title:'Builan Ku', updated:'13 December 2023'}, {id:'2', title:'Toko Loak', updated:'11 January 2021'}]
  return (
    <div>
        <h1>Add Story</h1>
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
                value={formData.file}
                onChange={handleInputChange}
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
                
                <input type="submit" value="Submit"/>
            </form>

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
    </div>
  )
}

export default AddStory
