import { Link ,NavLink} from "react-router-dom"
const NavigationBar=()=>{
    return(
        <div className="nav-container">
            <div className="navmenu">
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="navmenu">
                <NavLink to="/bloglist">Blogs List</NavLink>
            </div>
            <div className="navmenu">
                <NavLink to="/addblog" >AddBlog</NavLink>
            </div>
            <div className="navmenu">
                <NavLink to="/favorites">Favorites</NavLink>
            </div>
        </div>
    )
}
export default NavigationBar