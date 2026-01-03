"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DataGrid,
  DataGridTableDndRowHandle,
  DataGridTableDndRows,
  ScrollArea,
  ScrollBar,
} from "@soar-design/soar-react-components";
import { DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface IData {
  id: string;
  name: string;
  availability: "online" | "away" | "busy" | "offline";
  avatar: string;
  status: "active" | "inactive";
  flag: string; // Emoji flags
  email: string;
  company: string;
  role: string;
  joined: string;
  location: string;
  balance: number;
}

const demoData: IData[] = [
  {
    id: "1",
    name: "كاثرين كامبل",
    availability: "online",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    status: "active",
    flag: "🇺🇸",
    email: "kathryn@apple.com",
    company: "Apple",
    role: "CEO",
    joined: "2021-04-15",
    location: "سان فرانسيسكو، الولايات المتحدة",
    balance: 5143.03,
  },
  {
    id: "2",
    name: "روبرت سميث",
    availability: "away",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    status: "inactive",
    flag: "🇬🇧",
    email: "robert@openai.com",
    company: "OpenAI",
    role: "CTO",
    joined: "2020-07-20",
    location: "لندن، المملكة المتحدة",
    balance: 4321.87,
  },
  {
    id: "3",
    name: "صوفيا جونسون",
    availability: "busy",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    status: "active",
    flag: "🇨🇦",
    email: "sophia@meta.com",
    company: "Meta",
    role: "Designer",
    joined: "2019-03-12",
    location: "تورنتو، كندا",
    balance: 7654.98,
  },
  {
    id: "4",
    name: "لوكاس ووكر",
    availability: "offline",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    status: "inactive",
    flag: "🇦🇺",
    email: "lucas@tesla.com",
    company: "Tesla",
    role: "Developer",
    joined: "2022-01-18",
    location: "سيدني، أستراليا",
    balance: 3456.45,
  },
  {
    id: "5",
    name: "إيميلي ديفيس",
    availability: "online",
    avatar: "https://randomuser.me/api/portraits/women/53.jpg",
    status: "active",
    flag: "🇩🇪",
    email: "emily@sap.com",
    company: "SAP",
    role: "Lawyer",
    joined: "2023-05-23",
    location: "برلين، ألمانيا",
    balance: 9876.54,
  },
  {
    id: "6",
    name: "جيمس لي",
    availability: "away",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    status: "active",
    flag: "🇲🇾",
    email: "james@keenthemes.com",
    company: "Keenthemes",
    role: "Director",
    joined: "2018-11-30",
    location: "كوالالمبور، ماليزيا",
    balance: 6214.22,
  },
];

export default function DataGridDraggableRows() {
  const columns = useMemo<ColumnDef<IData>[]>(
    () => [
      {
        id: "drag",
        cell: ({ row }) => (
          <DataGridTableDndRowHandle rowId={row.id} />
        ),
        size: 40,
      },
      {
        accessorKey: "name",
        id: "name",
        header: "الاسم",
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage
                  src={row.original.avatar}
                  alt={row.original.name} />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
              <Link
                href="#"
                className="font-medium text-foreground hover:text-primary"
              >
                {row.original.name}
              </Link>
            </div>
          );
        },
        size: 175,
        enableSorting: true,
        enableHiding: false,
      },
      {
        accessorKey: "email",
        id: "email",
        header: "البريد الإلكتروني",
        cell: (info) => (
          <Link
            href={`mailto:${info.getValue()}`}
            className="hover:text-primary hover:underline"
          >
            {info.getValue() as string}
          </Link>
        ),
        size: 200,
        meta: {
          headerClassName: "",
          cellClassName: "",
        },
      },
      {
        accessorKey: "location",
        id: "location",
        header: "الموقع",
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-1.5">
              {row.original.flag}
              <div className="font-medium text-foreground">
                {row.original.location}
              </div>
            </div>
          );
        },
        size: 170,
        meta: {
          headerClassName: "",
          cellClassName: "text-start",
        },
      },
    ],
    []
  );

  const [data, setData] = useState(demoData);

  const dataIds = useMemo<UniqueIdentifier[]>(
    () => data?.map(({ id }) => id),
    [data]
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setData((data) => {
        const oldIndex = dataIds.indexOf(active.id);
        const newIndex = dataIds.indexOf(over.id);
        return arrayMove(data, oldIndex, newIndex);
      });
    }
  };

  const table = useReactTable({
    columns,
    data,
    getRowId: (row: IData) => row.id,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <DataGrid
      table={table}
      recordCount={data?.length || 0}
      tableLayout={{ rowsDraggable: true }}
    >
      <div className="w-full">
        <ScrollArea>
          <DataGridTableDndRows
            handleDragEnd={handleDragEnd}
            dataIds={dataIds} />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </DataGrid>
  );
}
