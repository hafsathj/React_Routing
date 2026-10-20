import { Link } from "react-router-dom"
const NavigationBar=()=>{
    return(
        <div className="nav-container">
            <div className="navmenu">
                <Link to="/">Home</Link>
            </div>
            <div className="navmenu">
                <Link to="/bloglist">Blogs List</Link>
            </div>
            <div className="navmenu">
                <Link to="/addblog" >AddBlog</Link>
            </div>
            <div className="navmenu">
                <Link to="/favorites">Favorites</Link>
            </div>
        </div>
    )
}
export default NavigationBar