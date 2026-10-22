import {useNavigate} from 'react-router-dom'
const Home=()=>{
    const navigate= useNavigate();
    return(
        <div className="homepage">
            <h1>Home Page</h1>
            <button onClick={()=> navigate('/bloglist')}>Go to Blog List</button>
            <button onClick={()=>navigate('/addblog')}>Go to add blog</button>
            <button onClick={()=>navigate('/favorites')}>Go to favourites</button>
        </div>
    )
};
export default Home;