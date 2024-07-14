"use client";
import { ColumnDef } from "@tanstack/react-table";

export type ProductProp = {
    id: number;
    name: string;
    image: string[];
    quantity: number;
    price: number;
    category: string;
};

export const columns: ColumnDef<ProductProp>[] = [
    {
        accessorKey: "id",
        header: "Product ID",
    },
    {
        accessorKey: "name",
        header: "Product Name",
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
    },
    {
        accessorKey: "price",
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
