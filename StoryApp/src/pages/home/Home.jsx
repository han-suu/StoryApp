import './Home.css'
import { Link } from "react-router-dom";
function Home() {

  return (
    <div>
        <h1>
            Story List
            <input type="text"  />
            <button type="button">Filter</button>
            
            <Link to={`/addStory`} className='nav-link'>Add Story</Link>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Tags</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </h1>
    </div>
  )
}

export default Home
