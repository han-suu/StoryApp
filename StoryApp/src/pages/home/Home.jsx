import { useState,useEffect } from 'react';
import './Home.css'
import { Link } from "react-router-dom";
import axios from 'axios';

function Home() {
    const [stories, setStories] = useState([])
    const fetchData = ()=>{
        axios.get("http://localhost:3000/stories").then(
                (res)=>{
                    
                    setStories(res.data)
                }
            )
    }
    useEffect(() => {
      fetchData()
      
    }, [])
    const DeleteStory = async (id)=>{
        
        await axios.delete(`http://localhost:3000/stories/${id}`, {
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        })
        // REFRESH PAGE, CHANGE THIS TO ONLY REMOVE ITEM LATER
        window.location.reload(false);
    }
    return (
        <div>
            <h1>Story List</h1>
            <input type="text"  />
                <button type="button">Filter</button>
                
                <Link to={`/addStory`} className='nav-link'>Add Story</Link>
                <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Tags</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {stories.map(story=>{
                        return(
                            <tr key={story.id}>
                            <td>{story.title}</td>
                            <td>{story.author}</td>
                            <td>{story.category}</td>
                            <td>{story.tags}</td>
                            <td>{story.status}</td>
                            <td>
                                <Link to={`/editStory`} state={{ story: story }} className='nav-link'>Edit</Link>
                                <button onClick={()=>DeleteStory(story.id)}>Del</button>
                            </td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
        </div>
    )
}

export default Home
