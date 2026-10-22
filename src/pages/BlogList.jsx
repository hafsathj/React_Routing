import { Link } from 'react-router-dom'
const BlogList = () => {
    const blogs = [
        {
            id: 20,
            name: "django Developer"
        },
        {
            id:21,
            name:"python Developer"
        }
    ]
    return (
        <div className="bloglist">
            <h1>BlogList</h1>
            {blogs.map((blog,index)=>(
                <p>
                  ({index+1}) <Link to={`/blogs/${blog.id}`}>{blog.name}</Link>
                </p>
            ))}
        </div>
    )
};
export default BlogList