import categories from '../helpers/categories'
import { Link } from "react-router-dom";
const CategoryList = () => {
    return (
<div className="fd-sidebar-item">
    <h4>Popular categories</h4>
    <ul className="category-ul">
    {categories.map((cat) => (
                               
                               <li key={cat.url}> <Link to={cat.url}> {cat.name} </Link></li>
                               ))}
    </ul>
</div>

)
}
export default CategoryList