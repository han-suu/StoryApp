import './addStory.css'

function AddStory() {

  return (
    <div>
        <h1>Add Story</h1>
        <input type="text"  placeholder='Title'/>
            <input type="text"  placeholder='Author'/>
            <br />
            <textarea cols="30" rows="10" placeholder='Synopsis'></textarea>
            <br/>
            <select name="category" id="">
                <option disabled selected value> -- select category -- </option>
                <option value="Financial">Financial</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
            </select>
            <input type="text" name="" id="" />
            <br/>
            <input type="file" name="" id="" />
            <select name="category" id="">
                <option disabled selected value> -- select status -- </option>
                <option value="Publish">Publish</option>
                <option value="Draft">Draft</option>
            </select>
            <div className='chapterList'>
                <button>Add Chapter</button>
                <table>
                <tr>
                    <th>Title</th>
                    <th>Last Updated</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>The Moon that Never Smile</td>
                    <td>18 January 2024</td>
                    <td><button>Edit</button><button>Del</button></td>
                </tr>
                <tr>
                    <td>The Moon that Never Smile</td>
                    <td>18 January 2024</td>
                    <td><button>Edit</button><button>Del</button></td>
                </tr>
            </table>
            </div>
    </div>
  )
}

export default AddStory
