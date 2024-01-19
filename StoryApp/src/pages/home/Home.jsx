import { useState,useEffect } from 'react';
import './Home.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Home() {
    // TODO : PISAH TAG MAKE REGEX , SEARCH REALTIME, MODAL CANCEL MODAL FILTER
    const [stories, setStories] = useState([])
    const [filtered, setFiltered] = useState([])
    const fetchData = ()=>{
        axios.get("http://localhost:3000/stories").then(
                (res)=>{
                    
                    setStories(res.data)
                    setFiltered(res.data)
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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [filter, setFilter] = useState({category:"Financial", status:"Publish"})
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilter({
          ...filter,
          [name]: value,
          });
        };
    // MOVE TO BE LATER MYB?, also add ANY option
    const filtering = ()=>{
        let tempFilter = []
        
        stories.map(story=>{
            if (story.category==filter.category && story.status==filter.status) {
                tempFilter.push(story)
            }
            
        })
        console.log(tempFilter)
        
    }
    return (
        <div>
            <h1>Story List</h1>
            <input type="text" placeholder='Search' />
            <Button variant="primary" onClick={handleShow}>
                Filter
            </Button>
            
            <Link to={`/addStory`} className='nav-link add-story'>Add Story</Link>
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
                    {filtered.map(story=>{
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
                                <Button variant="danger">Danger</Button>{' '}
                            </td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    data-bs-theme="dark"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Filter</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>Category</label>
                        <select name="category" id=""
                        value={filter.category}
                        onChange={handleInputChange}
                        >
                            
                            <option value="Financial">Financial</option>
                            <option value="Technology">Technology</option>
                            <option value="Health">Health</option>
                        </select>

                        <label>Status</label>
                        <select name="status" id=""
                        value={filter.status}
                        onChange={handleInputChange}
                        >
                            
                            <option value="Publish">Publish</option>
                            <option value="Draft">Draft</option>
                        </select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={filtering}>Filter</Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}

export default Home
