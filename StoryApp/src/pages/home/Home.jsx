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
                            <td><button>Edit</button><button>Del</button></td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
        </div>
    )
}

export default Home
