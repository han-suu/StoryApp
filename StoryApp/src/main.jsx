import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home from './pages/home/Home.jsx'
import AddStory from './pages/addStory/addStory.jsx'
import AddChapter from './pages/addChapter/addChapter.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EditStory from './pages/editStory/editStory.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "addStory",
    element: <AddStory />,
  },
  {
    path: "editStory",
    element: <EditStory />,
  },
  {
    path: "addChapter",
    element: <AddChapter />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
