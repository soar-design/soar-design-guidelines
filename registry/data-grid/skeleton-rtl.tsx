"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardTable,
  CardTitle,
  CardToolbar,
  DataGrid,
  DataGridColumnHeader,
  DataGridPagination,
  DataGridTable,
  ScrollArea,
  ScrollBar,
  Skeleton,
} from "@soar-design/soar-react-components";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
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
  {
    id: "7",
    name: "إيزابيلا مارتينيز",
    availability: "busy",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    status: "inactive",
    flag: "🇪🇸",
    email: "isabella@bbva.es",
    company: "BBVA",
    role: "Product Manager",
    joined: "2021-06-14",
    location: "برشلونة، إسبانيا",
    balance: 5321.77,
  },
  {
    id: "8",
    name: "بنجامين هاريس",
    availability: "offline",
    avatar: "https://randomuser.me/api/portraits/men/61.jpg",
    status: "active",
    flag: "🇯🇵",
    email: "benjamin@sony.jp",
    company: "Sony",
    role: "Marketing Lead",
    joined: "2020-10-22",
    location: "طوكيو، اليابان",
    balance: 8452.39,
  },
  {
    id: "9",
    name: "أوليفيا براون",
    availability: "online",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    status: "active",
    flag: "🇫🇷",
    email: "olivia@lvmh.fr",
    company: "LVMH",
    role: "Data Scientist",
    joined: "2019-09-17",
    location: "باريس، فرنسا",
    balance: 7345.1,
  },
  {
    id: "10",
    name: "مايكل كلارك",
    availability: "away",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    status: "inactive",
    flag: "🇮🇹",
    email: "michael@eni.it",
    company: "ENI",
    role: "Engineer",
    joined: "2023-02-11",
    location: "ميلانو، إيطاليا",
    balance: 5214.88,
  },
  {
    id: "11",
    name: "أفا ويلسون",
    availability: "busy",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    status: "active",
    flag: "🇧🇷",
    email: "ava@vale.br",
    company: "Vale",
    role: "Software Engineer",
    joined: "2022-12-01",
    location: "ريو دي جانيرو، البرازيل",
    balance: 9421.5,
  },
  {
    id: "12",
    name: "ديفيد يونغ",
    availability: "offline",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    status: "active",
    flag: "🇮🇳",
    email: "david@tata.in",
    company: "Tata",
    role: "Sales Manager",
    joined: "2020-03-27",
    location: "مومباي، الهند",
    balance: 4521.67,
  },
];

export default function DataGridSkeleton() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: true },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  const handleToggleLoading = () => {
    setIsLoading((prev) => !prev);
  };

  const columns = useMemo<ColumnDef<IData>[]>(
    () => [
      {
        accessorKey: "name",
        id: "name",
        header: ({ column }) => (
          <DataGridColumnHeader title="المستخدم" visibility={true} column={column} />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-3">
              <Avatar className="size-8">
                <AvatarImage
                  src={row.original.avatar}
                  alt={row.original.name} />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
              <div className="space-y-px">
                <div className="font-medium text-foreground">
                  {row.original.name}
                </div>
                <div className="text-muted-foreground">
                  {row.original.email}
                </div>
              </div>
            </div>
          );
        },
        meta: {
          skeleton: (
            <div className="flex items-center gap-3 h-[41px]">
              <Skeleton className="size-8 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          ),
        },
        size: 200,
        enableSorting: true,
        enableHiding: false,
        enableResizing: true,
      },
      {
        accessorKey: "email",
        id: "email",
        header: ({ column }) => (
          <DataGridColumnHeader title="البريد الإلكتروني" visibility={true} column={column} />
        ),
        cell: (info) => (
          <Link
            href={`mailto:${info.getValue()}`}
            className="hover:text-primary hover:underline"
          >
            {info.getValue() as string}
          </Link>
        ),
        size: 150,
        meta: {
          headerClassName: "",
          cellClassName: "text-left",
          skeleton: <Skeleton className="w-28 h-7" />,
        },
        enableSorting: true,
        enableHiding: true,
        enableResizing: true,
      },
      {
        accessorKey: "location",
        id: "location",
        header: ({ column }) => (
          <DataGridColumnHeader title="الموقع" visibility={true} column={column} />
        ),
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
        size: 160,
        meta: {
          headerClassName: "",
          cellClassName: "text-start",
          skeleton: <Skeleton className="w-28 h-7" />,
        },
        enableSorting: true,
        enableHiding: true,
        enableResizing: true,
      },
      {
        accessorKey: "status",
        id: "status",
        header: ({ column }) => (
          <DataGridColumnHeader title="الحالة" visibility={true} column={column} />
        ),
        cell: ({ row }) => {
          const status = row.original.status;

          if (status == "active") {
            return (
              <Badge variant="primary" appearance="outline">
                معتمد
              </Badge>
            );
          } else {
            return (
              <Badge variant="destructive" appearance="outline">
                قيد الانتظار
              </Badge>
            );
          }
        },
        meta: {
          skeleton: <Skeleton className="w-16 h-7" />,
        },
        size: 100,
        enableSorting: true,
        enableHiding: true,
        enableResizing: false,
      },
    ],
    []
  );

  const [columnOrder, setColumnOrder] = useState<string[]>(
    columns.map((column) => column.id as string)
  );

  const table = useReactTable({
    columns,
    data: demoData,
    pageCount: Math.ceil((demoData?.length || 0) / pagination.pageSize),
    getRowId: (row: IData) => row.id,
    state: {
      pagination,
      sorting,
      columnOrder,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <DataGrid
      table={table}
      recordCount={demoData?.length || 0}
      isLoading={isLoading}
      tableClassNames={{
        edgeCell: "px-5",
      }}
      tableLayout={{
        columnsPinnable: true,
        columnsMovable: true,
        columnsVisibility: true,
      }}
    >
      <Card>
        <CardHeader className="py-3.5">
          <CardTitle>الموظفون</CardTitle>
          <CardToolbar>
            <Button variant="outline" size="sm" onClick={handleToggleLoading}>
              {isLoading ? "تعطيل التحميل" : "تفعيل التحميل"}
            </Button>
          </CardToolbar>
        </CardHeader>
        <CardTable>
          <ScrollArea>
            <DataGridTable />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardTable>
        <CardFooter>
          <DataGridPagination />
        </CardFooter>
      </Card>
    </DataGrid>
  );
}
