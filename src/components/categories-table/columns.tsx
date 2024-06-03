"use client";
import { ColumnDef } from "@tanstack/react-table";

export type CategoryProps = {
    id: number;
    category_name: string;
    category_description: string;
    category_image: string;
    created_at: string;
    updated_at: string;
};

export const columns: ColumnDef<CategoryProps>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "category_name",
        header: "Category Name",
    },
    {
        accessorKey: "created_at",
        header: "Created at",
    },
    {
        id: "actions",
    },
];
