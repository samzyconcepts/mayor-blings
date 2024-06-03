import ProductDataTable from "./data-table";
import { columns as defaultColumns, ProductProp } from "./columns";
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

import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

interface ProductTableProp {
    onUpdateClick: (productId: number) => void;
    onDeleteClick: (productId: number) => void;
}

const ProductTable = ({ onUpdateClick, onDeleteClick }: ProductTableProp) => {
    const products = useSelector((state: RootState) => state.products.products);

    const columns = defaultColumns.map((column) => {
        if (column.id === "actions") {
            return {
                ...column,
                cell: ({ row }: { row: { original: ProductProp } }) => {
                    const product = row.original;
                    const productId = product.id;

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
                                <DropdownMenuItem onClick={() => onUpdateClick(productId)}>
                                    Update
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => onDeleteClick(productId)}>
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

    return <ProductDataTable columns={columns} data={products} />;
};

export default ProductTable;
