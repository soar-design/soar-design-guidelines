"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  DataGrid,
  DataGridTable,
  DataGridPagination,
  ScrollArea,
  ScrollBar,
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
import { ChevronDown, ChevronUp } from "lucide-react";

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
  details: string; // New field
}

const demoData: IData[] = [
  {
    id: "1",
    name: "Kathryn Campbell",
    availability: "online",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    status: "active",
    flag: "🇺🇸",
    email: "kathryn@apple.com",
    company: "Apple",
    role: "CEO",
    joined: "2021-04-15",
    location: "San Francisco, USA",
    balance: 5143.03,
    details:
      "كاثرين هي قائدة رؤيوية في Apple، تركز على الابتكار ونمو الفريق.",
  },
  {
    id: "2",
    name: "Robert Smith",
    availability: "away",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    status: "inactive",
    flag: "🇬🇧",
    email: "robert@openai.com",
    company: "OpenAI",
    role: "CTO",
    joined: "2020-07-20",
    location: "London, UK",
    balance: 4321.87,
    details:
      "روبرت هو رائد تقني متخصص في الذكاء الاصطناعي والتعلم الآلي.",
  },
  {
    id: "3",
    name: "Sophia Johnson",
    availability: "busy",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    status: "active",
    flag: "🇨🇦",
    email: "sophia@meta.com",
    company: "Meta",
    role: "Designer",
    joined: "2019-03-12",
    location: "Toronto, Canada",
    balance: 7654.98,
    details:
      "صوفيا هي مصممة إبداعية شغوفة ببناء تجارب تركز على المستخدم.",
  },
  {
    id: "4",
    name: "Lucas Walker",
    availability: "offline",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    status: "inactive",
    flag: "🇦🇺",
    email: "lucas@tesla.com",
    company: "Tesla",
    role: "Developer",
    joined: "2022-01-18",
    location: "Sydney, Australia",
    balance: 3456.45,
    details:
      "لوكاس هو مطور موهوب يركز على حلول مبتكرة في تكنولوجيا السيارات.",
  },
  {
    id: "5",
    name: "Emily Davis",
    availability: "online",
    avatar: "https://randomuser.me/api/portraits/women/53.jpg",
    status: "active",
    flag: "🇩🇪",
    email: "emily@sap.com",
    company: "SAP",
    role: "Lawyer",
    joined: "2023-05-23",
    location: "Berlin, Germany",
    balance: 9876.54,
    details:
      "إيميلي محامية شركات متخصصة في اتفاقيات التكنولوجيا والبرمجيات.",
  },
  {
    id: "6",
    name: "James Lee",
    availability: "away",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    status: "active",
    flag: "🇲🇾",
    email: "james@keenthemes.com",
    company: "Keenthemes",
    role: "Director",
    joined: "2018-11-30",
    location: "Kuala Lumpur, MY",
    balance: 6214.22,
    details:
      "جيمس يشرف على تطوير المنتجات وقيادة الفريق في Keenthemes.",
  },
  {
    id: "7",
    name: "Isabella Martinez",
    availability: "busy",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    status: "inactive",
    flag: "🇪🇸",
    email: "isabella@bbva.es",
    company: "BBVA",
    role: "Product Manager",
    joined: "2021-06-14",
    location: "Barcelona, Spain",
    balance: 5321.77,
    details:
      "إيزابيلا تدير تطوير المنتجات والاستراتيجية لمنصات BBVA الرقمية.",
  },
  {
    id: "8",
    name: "Benjamin Harris",
    availability: "offline",
    avatar: "https://randomuser.me/api/portraits/men/61.jpg",
    status: "active",
    flag: "🇯🇵",
    email: "benjamin@sony.jp",
    company: "Sony",
    role: "Marketing Lead",
    joined: "2020-10-22",
    location: "Tokyo, Japan",
    balance: 8452.39,
    details:
      "بنجامين يقود حملات تسويقية مبتكرة لمنتجات Sony الرائدة.",
  },
  {
    id: "9",
    name: "Olivia Brown",
    availability: "online",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    status: "active",
    flag: "🇫🇷",
    email: "olivia@lvmh.fr",
    company: "LVMH",
    role: "Data Scientist",
    joined: "2019-09-17",
    location: "Paris, France",
    balance: 7345.1,
    details:
      "أوليفيا عالمة بيانات تحسن تحليلات المبيعات والتسويق في LVMH.",
  },
  {
    id: "10",
    name: "Michael Clark",
    availability: "away",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    status: "inactive",
    flag: "🇮🇹",
    email: "michael@eni.it",
    company: "ENI",
    role: "Engineer",
    joined: "2023-02-11",
    location: "Milan, Italy",
    balance: 5214.88,
    details:
      "مايكل مهندس رئيسي يطور حلول الطاقة المستدامة في ENI.",
  },
  {
    id: "11",
    name: "Ava Wilson",
    availability: "busy",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    status: "active",
    flag: "🇧🇷",
    email: "ava@vale.br",
    company: "Vale",
    role: "Software Engineer",
    joined: "2022-12-01",
    location: "Rio de Janeiro, Brazil",
    balance: 9421.5,
    details:
      "أفا تطور برمجيات متطورة لتحسين عمليات التعدين في Vale.",
  },
  {
    id: "12",
    name: "David Young",
    availability: "offline",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    status: "active",
    flag: "🇮🇳",
    email: "david@tata.in",
    company: "Tata",
    role: "Sales Manager",
    joined: "2020-03-27",
    location: "Mumbai, India",
    balance: 4521.67,
    details:
      "ديفيد يدير المبيعات الدولية لمنتجات Tata الصناعية والسيارات.",
  },
];

export default function DataGridExpandableRow() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: true },
  ]);

  const columns = useMemo<ColumnDef<IData>[]>(
    () => [
      {
        id: "id",
        header: () => null,
        cell: ({ row }) => {
          return row.getCanExpand() ? (
            <Button
              {...{
                className: "size-6 text-muted-foreground",
                onClick: row.getToggleExpandedHandler(),
                mode: "icon",
                variant: "ghost",
              }}
            >
              {row.getIsExpanded() ? <ChevronUp /> : <ChevronDown />}
            </Button>
          ) : null;
        },
        size: 12,
        meta: {
          expandedContent: (row) => (
            <div className="ms-12 py-3 text-muted-foreground text-sm">
              {row.details}
            </div>
          ),
        },
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
        header: "البريد الإلكتروني",
        cell: (info) => (
          <Link
            href={`mailto:${info.getValue()}`}
            className="hover:text-primary hover:underline"
          >
            {info.getValue() as string}
          </Link>
        ),
        size: 150,
      },
      {
        accessorKey: "location",
        header: "الموقع",
        cell: (info) => <span>{info.getValue() as string}</span>,
        size: 150,
        meta: {
          headerClassName: "",
          cellClassName: "text-start",
        },
      },
      {
        accessorKey: "status",
        id: "status",
        header: "الحالة",
        cell: ({ row }) => {
          const status = row.original.status;

          if (status == "active") {
            return (
              <Badge variant="primary" appearance="outline">
                موافق عليه
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
        size: 100,
      },
    ],
    []
  );

  const table = useReactTable({
    columns,
    data: demoData,
    pageCount: Math.ceil((demoData?.length || 0) / pagination.pageSize),
    getRowId: (row: IData) => row.id,
    getRowCanExpand: (row) => Boolean(row.original.details),
    state: {
      pagination,
      sorting,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <DataGrid
      table={table}
      recordCount={demoData?.length || 0}
      tableLayout={{ headerBackground: false }}
    >
      <div className="w-full space-y-2.5">
        <div className="w-full" style={{ border: "none" }}>
          <ScrollArea>
            <DataGridTable />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <DataGridPagination />
      </div>
    </DataGrid>
  );
}

