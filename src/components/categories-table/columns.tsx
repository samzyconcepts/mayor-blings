"use client";
import { ColumnDef } from "@tanstack/react-table";
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

type CategoryProps = {
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
        cell: ({ row }) => {
            const category = row.original;
            const categoryId = category.id;

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
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(categoryId.toLocaleString())
                            }>
                            Update
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
