import CategoryDataTable from "./data-table";
import { columns } from "./columns";

// redux state selector
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const CategoryTable = () => {
    const categories = useSelector((state: RootState) => state.categories.categories);

    return <CategoryDataTable columns={columns} data={categories} />;
};

export default CategoryTable;
