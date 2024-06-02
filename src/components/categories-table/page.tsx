import CategoryDataTable from "./data-table";
import { columns as defaultColumns } from "./columns";
import Button from "../ui/Button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

// redux state selector
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

interface CategoryTableProp {
    onUpdateClick: (categoryId: number) => void;
    onDeleteClick: (categoryId: number, categoryName: string) => void;
}

const CategoryTable = ({ onUpdateClick, onDeleteClick }: CategoryTableProp) => {
    const categories = useSelector((state: RootState) => state.categories.categories);

    const columns = defaultColumns.map((column) => {
        if (column.id === "actions") {
            return {
                ...column,

                cell: ({ row }) => {
                    const category = row.original;
                    const categoryId = category.id;
                    const categoryName = category.category_name;

                    return (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button variant="ghost">
                                    <span className="sr-only">Open menu</span>
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem onClick={() => onUpdateClick(categoryId)}>
                                    Update
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => onDeleteClick(categoryId, categoryName)}>
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    );
                },
            };
        }

        return column;
    });

    return <CategoryDataTable columns={columns} data={categories} />;
};

export default CategoryTable;
