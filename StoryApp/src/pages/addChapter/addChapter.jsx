import './addChapter.css'

function AddChapter() {

  return (
    <div>
        <h1>Add Chapter</h1>
        <input type="text"  placeholder='Title'/>
        <br />
        <textarea cols="30" rows="10" placeholder='Synopsis'></textarea>
        <br/>
        <button>Cancel</button>
        <button>Save</button>
    </div>
  )
}

export default AddChapter
