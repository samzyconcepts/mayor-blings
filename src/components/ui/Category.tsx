interface CategoryProp {
    imgUrl: string;
    categoryName: string;
}

const Category = ({ imgUrl, categoryName }: CategoryProp) => {
    return (
        <div>
            <div className="w-72 h-80 overflow-hidden">
                <img src={imgUrl} alt={imgUrl} className="object-cover w-full h-full" />
            </div>
            <h1 className="text-center capitalize py-4">{categoryName}</h1>
        </div>
    );
};
export default Category;
