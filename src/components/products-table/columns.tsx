"use client";
import { ColumnDef } from "@tanstack/react-table";

export type ProductProp = {
    id: number;
    product_name: string;
    product_image: string;
    product_quantity: number;
    product_price: number;
    category: number;
};

export const columns: ColumnDef<ProductProp>[] = [
    {
        accessorKey: "id",
        header: "Product ID",
    },
    {
        accessorKey: "product_name",
        header: "Product Name",
    },
    {
        accessorKey: "product_quantity",
        header: "Quantity",
    },
    {
        accessorKey: "product_price",
        header: "Price",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        id: "actions",
    },
];
