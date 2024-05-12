import { Link } from "react-router-dom";
interface CategoryProp {
    id: number;
    imgUrl: string;
    categoryName: string;
}

const Category = ({ id, imgUrl, categoryName }: CategoryProp) => {
    return (
        <Link to={`/category/${id}`} className="w-fit">
            <div className="w-72 h-80 overflow-hidden">
                <img src={imgUrl} alt={imgUrl} className="object-cover w-full h-full" />
            </div>
            <h1 className="text-center capitalize py-4">{categoryName}</h1>
        </Link>
    );
};
export default Category;
