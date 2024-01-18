import './addChapter.css'

function AddChapter() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit")    
  };

  return (
    <div>
        <h1>Add Chapter</h1>
        <form onSubmit={handleSubmit}>

        </form>
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
