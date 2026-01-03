"use client";

import { useMemo, useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  DataGrid,
  DataGridColumnHeader,
  DataGridTable,
  DataGridPagination,
  ScrollArea,
  ScrollBar,
} from "@soar-design/soar-react-components";
import {
  ColumnDef,
  ExpandedState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import type { VariantProps } from "class-variance-authority";
import { SquareMinus, SquarePlus } from "lucide-react";

interface OrderItemData {
  id: string;
  productName: string;
  category: string;
  price: string;
  quantity: number;
}

interface Data {
  id: string;
  orderNumber: string;
  customer: string;
  customerEmail: string;
  customerAvatar: string;
  total: string;
  status: {
    label: string;
    variant: VariantProps<typeof Badge>["variant"];
  };
  items: OrderItemData[];
}

const demoData: Data[] = [
  {
    id: "1",
    orderNumber: "SO-001",
    customer: "جون سميث",
    customerEmail: "john.smith@email.com",
    customerAvatar: "1.png",
    total: "$459.97",
    status: {
      label: "تم الشحن",
      variant: "primary",
    },
    items: [
      {
        id: "1-1",
        productName: "سماعات لاسلكية",
        category: "إلكترونيات",
        price: "$199.99",
        quantity: 1,
      },
      {
        id: "1-2",
        productName: "غطاء الهاتف",
        category: "إكسسوارات",
        price: "$99.99",
        quantity: 1,
      },
      {
        id: "1-3",
        productName: "حامي الشاشة",
        category: "إكسسوارات",
        price: "$29.99",
        quantity: 2,
      },
      {
        id: "1-4",
        productName: "كابل الشحن",
        category: "إلكترونيات",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "1-5",
        productName: "مكبر صوت بلوتوث",
        category: "إلكترونيات",
        price: "$89.99",
        quantity: 1,
      },
      {
        id: "1-6",
        productName: "حامل الهاتف",
        category: "إكسسوارات",
        price: "$39.99",
        quantity: 1,
      },
      {
        id: "1-7",
        productName: "تنظيم الكابلات",
        category: "إكسسوارات",
        price: "$19.99",
        quantity: 2,
      },
      {
        id: "1-8",
        productName: "شاحن لاسلكي",
        category: "إلكترونيات",
        price: "$49.99",
        quantity: 1,
      },
      {
        id: "1-9",
        productName: "فأرة ألعاب",
        category: "إلكترونيات",
        price: "$79.99",
        quantity: 1,
      },
      {
        id: "1-10",
        productName: "لوحة مفاتيح ألعاب",
        category: "إلكترونيات",
        price: "$59.99",
        quantity: 1,
      },
      {
        id: "1-11",
        productName: "سجادة الفأرة",
        category: "إكسسوارات",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "1-12",
        productName: "مصباح مكتب",
        category: "منزل",
        price: "$79.99",
        quantity: 1,
      },
    ],
  },
  {
    id: "2",
    orderNumber: "SO-002",
    customer: "سارة جونسون",
    customerEmail: "sarah.johnson@email.com",
    customerAvatar: "2.png",
    total: "$249.48",
    status: {
      label: "قيد المعالجة",
      variant: "info",
    },
    items: [
      {
        id: "2-1",
        productName: "أحذية جري",
        category: "رياضة",
        price: "$89.99",
        quantity: 1,
      },
      {
        id: "2-2",
        productName: "جوارب رياضية",
        category: "رياضة",
        price: "$59.51",
        quantity: 1,
      },
      {
        id: "2-3",
        productName: "زجاجة ماء",
        category: "رياضة",
        price: "$24.99",
        quantity: 1,
      },
      {
        id: "2-4",
        productName: "متتبع اللياقة",
        category: "إلكترونيات",
        price: "$74.99",
        quantity: 1,
      },
    ],
  },
  {
    id: "3",
    orderNumber: "SO-003",
    customer: "مايك ديفيس",
    customerEmail: "mike.davis@email.com",
    customerAvatar: "3.png",
    total: "$189.97",
    status: {
      label: "تم التسليم",
      variant: "success",
    },
    items: [
      {
        id: "3-1",
        productName: "كوب قهوة",
        category: "منزل",
        price: "$89.99",
        quantity: 1,
      },
      {
        id: "3-2",
        productName: "حبوب القهوة",
        category: "طعام",
        price: "$24.99",
        quantity: 1,
      },
      {
        id: "3-3",
        productName: "مطحنة قهوة",
        category: "منزل",
        price: "$49.99",
        quantity: 1,
      },
      {
        id: "3-4",
        productName: "مخفقة الحليب",
        category: "منزل",
        price: "$24.99",
        quantity: 1,
      },
      {
        id: "3-5",
        productName: "فلتر القهوة",
        category: "منزل",
        price: "$9.99",
        quantity: 1,
      },
      {
        id: "3-6",
        productName: "وعاء السكر",
        category: "منزل",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "3-7",
        productName: "طقم شاي",
        category: "منزل",
        price: "$39.99",
        quantity: 1,
      },
      {
        id: "3-8",
        productName: "مبيض القهوة",
        category: "طعام",
        price: "$14.99",
        quantity: 1,
      },
      {
        id: "3-9",
        productName: "طاولة قهوة",
        category: "أثاث",
        price: "$199.99",
        quantity: 1,
      },
      {
        id: "3-10",
        productName: "مفارش المائدة",
        category: "منزل",
        price: "$12.99",
        quantity: 1,
      },
      {
        id: "3-11",
        productName: "مناديل",
        category: "منزل",
        price: "$7.99",
        quantity: 1,
      },
      {
        id: "3-12",
        productName: "شموع",
        category: "منزل",
        price: "$16.99",
        quantity: 1,
      },
      {
        id: "3-13",
        productName: "مزهرية",
        category: "منزل",
        price: "$29.99",
        quantity: 1,
      },
      {
        id: "3-14",
        productName: "زهور",
        category: "منزل",
        price: "$24.99",
        quantity: 1,
      },
      {
        id: "3-15",
        productName: "مفرش طاولة",
        category: "منزل",
        price: "$18.99",
        quantity: 1,
      },
    ],
  },
  {
    id: "4",
    orderNumber: "SO-004",
    customer: "إيميلي ويلسون",
    customerEmail: "emily.wilson@email.com",
    customerAvatar: "4.png",
    total: "$299.97",
    status: {
      label: "ملغي",
      variant: "destructive",
    },
    items: [
      {
        id: "4-1",
        productName: "حامل اللابتوب",
        category: "إلكترونيات",
        price: "$99.99",
        quantity: 1,
      },
      {
        id: "4-2",
        productName: "فأرة لاسلكية",
        category: "إلكترونيات",
        price: "$49.99",
        quantity: 1,
      },
      {
        id: "4-3",
        productName: "لوحة مفاتيح",
        category: "إلكترونيات",
        price: "$79.99",
        quantity: 1,
      },
      {
        id: "4-4",
        productName: "شاشة",
        category: "إلكترونيات",
        price: "$69.99",
        quantity: 1,
      },
      {
        id: "4-5",
        productName: "كاميرا ويب",
        category: "إلكترونيات",
        price: "$89.99",
        quantity: 1,
      },
      {
        id: "4-6",
        productName: "ميكروفون",
        category: "إلكترونيات",
        price: "$59.99",
        quantity: 1,
      },
      {
        id: "4-7",
        productName: "سماعات",
        category: "إلكترونيات",
        price: "$129.99",
        quantity: 1,
      },
      {
        id: "4-8",
        productName: "محول USB",
        category: "إلكترونيات",
        price: "$29.99",
        quantity: 1,
      },
      {
        id: "4-9",
        productName: "منظم الكابلات",
        category: "إكسسوارات",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "4-10",
        productName: "سجادة مكتب",
        category: "مكتب",
        price: "$24.99",
        quantity: 1,
      },
    ],
  },
  {
    id: "5",
    orderNumber: "SO-005",
    customer: "ديفيد براون",
    customerEmail: "david.brown@email.com",
    customerAvatar: "5.png",
    total: "$179.97",
    status: {
      label: "قيد الانتظار",
      variant: "warning",
    },
    items: [
      {
        id: "5-1",
        productName: "مصباح مكتب",
        category: "منزل",
        price: "$79.99",
        quantity: 1,
      },
      {
        id: "5-2",
        productName: "منظم مكتب",
        category: "منزل",
        price: "$39.99",
        quantity: 1,
      },
      {
        id: "5-3",
        productName: "طقم دفاتر",
        category: "مكتب",
        price: "$29.99",
        quantity: 1,
      },
      {
        id: "5-4",
        productName: "طقم أقلام",
        category: "مكتب",
        price: "$29.99",
        quantity: 1,
      },
      {
        id: "5-5",
        productName: "دباسة",
        category: "مكتب",
        price: "$12.99",
        quantity: 1,
      },
      {
        id: "5-6",
        productName: "مشابك ورق",
        category: "مكتب",
        price: "$4.99",
        quantity: 1,
      },
      {
        id: "5-7",
        productName: "مجلد",
        category: "مكتب",
        price: "$8.99",
        quantity: 1,
      },
      {
        id: "5-8",
        productName: "قلم تمييز",
        category: "مكتب",
        price: "$6.99",
        quantity: 1,
      },
      {
        id: "5-9",
        productName: "ممحاة",
        category: "مكتب",
        price: "$2.99",
        quantity: 1,
      },
      {
        id: "5-10",
        productName: "مسطرة",
        category: "مكتب",
        price: "$3.99",
        quantity: 1,
      },
      {
        id: "5-11",
        productName: "آلة حاسبة",
        category: "مكتب",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "5-12",
        productName: "تقويم",
        category: "مكتب",
        price: "$14.99",
        quantity: 1,
      },
      {
        id: "5-13",
        productName: "لوحة بيضاء",
        category: "مكتب",
        price: "$24.99",
        quantity: 1,
      },
      {
        id: "5-14",
        productName: "علامات",
        category: "مكتب",
        price: "$9.99",
        quantity: 1,
      },
      {
        id: "5-15",
        productName: "دبابيس",
        category: "مكتب",
        price: "$5.99",
        quantity: 1,
      },
    ],
  },
  {
    id: "6",
    orderNumber: "SO-006",
    customer: "ليزا أندرسون",
    customerEmail: "lisa.anderson@email.com",
    customerAvatar: "6.png",
    total: "$329.95",
    status: {
      label: "تم الشحن",
      variant: "primary",
    },
    items: [
      {
        id: "6-1",
        productName: "مكبر صوت بلوتوث",
        category: "إلكترونيات",
        price: "$129.99",
        quantity: 1,
      },
      {
        id: "6-2",
        productName: "حامل الهاتف",
        category: "إكسسوارات",
        price: "$39.99",
        quantity: 1,
      },
      {
        id: "6-3",
        productName: "تنظيم الكابلات",
        category: "إكسسوارات",
        price: "$19.99",
        quantity: 2,
      },
      {
        id: "6-4",
        productName: "شاحن لاسلكي",
        category: "إلكترونيات",
        price: "$49.99",
        quantity: 1,
      },
      {
        id: "6-5",
        productName: "ساعة ذكية",
        category: "إلكترونيات",
        price: "$199.99",
        quantity: 1,
      },
      {
        id: "6-6",
        productName: "سوار لياقة",
        category: "إلكترونيات",
        price: "$79.99",
        quantity: 1,
      },
      {
        id: "6-7",
        productName: "غطاء الهاتف",
        category: "إكسسوارات",
        price: "$24.99",
        quantity: 1,
      },
      {
        id: "6-8",
        productName: "حامي الشاشة",
        category: "إكسسوارات",
        price: "$14.99",
        quantity: 1,
      },
      {
        id: "6-9",
        productName: "حامل سيارة",
        category: "إكسسوارات",
        price: "$29.99",
        quantity: 1,
      },
      {
        id: "6-10",
        productName: "شاحن محمول",
        category: "إلكترونيات",
        price: "$39.99",
        quantity: 1,
      },
      {
        id: "6-11",
        productName: "كابل USB",
        category: "إلكترونيات",
        price: "$9.99",
        quantity: 1,
      },
      {
        id: "6-12",
        productName: "محول",
        category: "إلكترونيات",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "6-13",
        productName: "سماعات",
        category: "إلكترونيات",
        price: "$89.99",
        quantity: 1,
      },
      {
        id: "6-14",
        productName: "سماعات أذن",
        category: "إلكترونيات",
        price: "$59.99",
        quantity: 1,
      },
      {
        id: "6-15",
        productName: "ميكروفون",
        category: "إلكترونيات",
        price: "$49.99",
        quantity: 1,
      },
    ],
  },
  {
    id: "7",
    orderNumber: "SO-007",
    customer: "روبرت تايلور",
    customerEmail: "robert.taylor@email.com",
    customerAvatar: "7.png",
    total: "$159.96",
    status: {
      label: "قيد المعالجة",
      variant: "info",
    },
    items: [
      {
        id: "7-1",
        productName: "فأرة ألعاب",
        category: "إلكترونيات",
        price: "$79.99",
        quantity: 1,
      },
      {
        id: "7-2",
        productName: "لوحة مفاتيح ألعاب",
        category: "إلكترونيات",
        price: "$59.99",
        quantity: 1,
      },
      {
        id: "7-3",
        productName: "سجادة الفأرة",
        category: "إكسسوارات",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "7-4",
        productName: "سماعات ألعاب",
        category: "إلكترونيات",
        price: "$99.99",
        quantity: 1,
      },
      {
        id: "7-5",
        productName: "كرسي ألعاب",
        category: "أثاث",
        price: "$299.99",
        quantity: 1,
      },
      {
        id: "7-6",
        productName: "مكتب ألعاب",
        category: "أثاث",
        price: "$199.99",
        quantity: 1,
      },
      {
        id: "7-7",
        productName: "شريط RGB",
        category: "إلكترونيات",
        price: "$29.99",
        quantity: 1,
      },
      {
        id: "7-8",
        productName: "جهاز تحكم",
        category: "إلكترونيات",
        price: "$49.99",
        quantity: 1,
      },
      {
        id: "7-9",
        productName: "شاشة ألعاب",
        category: "إلكترونيات",
        price: "$399.99",
        quantity: 1,
      },
      {
        id: "7-10",
        productName: "بطاقة رسوميات",
        category: "إلكترونيات",
        price: "$599.99",
        quantity: 1,
      },
      {
        id: "7-11",
        productName: "ذاكرة RAM",
        category: "إلكترونيات",
        price: "$89.99",
        quantity: 1,
      },
      {
        id: "7-12",
        productName: "قرص SSD",
        category: "إلكترونيات",
        price: "$129.99",
        quantity: 1,
      },
      {
        id: "7-13",
        productName: "معالج",
        category: "إلكترونيات",
        price: "$299.99",
        quantity: 1,
      },
      {
        id: "7-14",
        productName: "لوحة أم",
        category: "إلكترونيات",
        price: "$199.99",
        quantity: 1,
      },
      {
        id: "7-15",
        productName: "مزود طاقة",
        category: "إلكترونيات",
        price: "$149.99",
        quantity: 1,
      },
    ],
  },
  {
    id: "8",
    orderNumber: "SO-008",
    customer: "جينيفر مارتينيز",
    customerEmail: "jennifer.martinez@email.com",
    customerAvatar: "8.png",
    total: "$89.97",
    status: {
      label: "تم التسليم",
      variant: "success",
    },
    items: [
      {
        id: "8-1",
        productName: "سجادة يوجا",
        category: "رياضة",
        price: "$29.99",
        quantity: 1,
      },
      {
        id: "8-2",
        productName: "زجاجة ماء",
        category: "رياضة",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "8-3",
        productName: "أشرطة مقاومة",
        category: "رياضة",
        price: "$39.99",
        quantity: 1,
      },
      {
        id: "8-4",
        productName: "أثقال",
        category: "رياضة",
        price: "$49.99",
        quantity: 1,
      },
      {
        id: "8-5",
        productName: "كيتل بيل",
        category: "رياضة",
        price: "$59.99",
        quantity: 1,
      },
      {
        id: "8-6",
        productName: "حبل قفز",
        category: "رياضة",
        price: "$14.99",
        quantity: 1,
      },
      {
        id: "8-7",
        productName: "أسطوانة رغوية",
        category: "رياضة",
        price: "$24.99",
        quantity: 1,
      },
      {
        id: "8-8",
        productName: "كرة تمرين",
        category: "رياضة",
        price: "$34.99",
        quantity: 1,
      },
      {
        id: "8-9",
        productName: "مكعب يوجا",
        category: "رياضة",
        price: "$12.99",
        quantity: 1,
      },
      {
        id: "8-10",
        productName: "حزام تمدد",
        category: "رياضة",
        price: "$9.99",
        quantity: 1,
      },
      {
        id: "8-11",
        productName: "منشفة صالة",
        category: "رياضة",
        price: "$7.99",
        quantity: 1,
      },
      {
        id: "8-12",
        productName: "حمالة صدر رياضية",
        category: "ملابس",
        price: "$29.99",
        quantity: 1,
      },
      {
        id: "8-13",
        productName: "شورت تمرين",
        category: "ملابس",
        price: "$24.99",
        quantity: 1,
      },
      {
        id: "8-14",
        productName: "أحذية جري",
        category: "رياضة",
        price: "$89.99",
        quantity: 1,
      },
      {
        id: "8-15",
        productName: "خلاط بروتين",
        category: "رياضة",
        price: "$12.99",
        quantity: 1,
      },
    ],
  },
  {
    id: "9",
    orderNumber: "SO-009",
    customer: "كريستوفر لي",
    customerEmail: "christopher.lee@email.com",
    customerAvatar: "9.png",
    total: "$199.98",
    status: {
      label: "ملغي",
      variant: "destructive",
    },
    items: [
      {
        id: "9-1",
        productName: "ساعة ذكية",
        category: "إلكترونيات",
        price: "$199.99",
        quantity: 1,
      },
      {
        id: "9-2",
        productName: "سوار الساعة",
        category: "إكسسوارات",
        price: "$29.99",
        quantity: 1,
      },
      {
        id: "9-3",
        productName: "قاعدة شحن",
        category: "إلكترونيات",
        price: "$39.99",
        quantity: 1,
      },
      {
        id: "9-4",
        productName: "حامي الشاشة",
        category: "إكسسوارات",
        price: "$14.99",
        quantity: 1,
      },
      {
        id: "9-5",
        productName: "غطاء",
        category: "إكسسوارات",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "9-6",
        productName: "حزام",
        category: "إكسسوارات",
        price: "$24.99",
        quantity: 1,
      },
      {
        id: "9-7",
        productName: "كابل",
        category: "إلكترونيات",
        price: "$9.99",
        quantity: 1,
      },
      {
        id: "9-8",
        productName: "محول",
        category: "إلكترونيات",
        price: "$12.99",
        quantity: 1,
      },
      {
        id: "9-9",
        productName: "حامل",
        category: "إكسسوارات",
        price: "$16.99",
        quantity: 1,
      },
      {
        id: "9-10",
        productName: "قاعدة",
        category: "إكسسوارات",
        price: "$22.99",
        quantity: 1,
      },
      {
        id: "9-11",
        productName: "غطاء",
        category: "إكسسوارات",
        price: "$8.99",
        quantity: 1,
      },
      {
        id: "9-12",
        productName: "قبضة",
        category: "إكسسوارات",
        price: "$11.99",
        quantity: 1,
      },
      {
        id: "9-13",
        productName: "عدسة",
        category: "إكسسوارات",
        price: "$6.99",
        quantity: 1,
      },
      {
        id: "9-14",
        productName: "مرشح",
        category: "إكسسوارات",
        price: "$4.99",
        quantity: 1,
      },
      {
        id: "9-15",
        productName: "طقم تنظيف",
        category: "إكسسوارات",
        price: "$7.99",
        quantity: 1,
      },
    ],
  },
  {
    id: "10",
    orderNumber: "SO-010",
    customer: "أماندا وايت",
    customerEmail: "amanda.white@email.com",
    customerAvatar: "10.png",
    total: "$149.97",
    status: {
      label: "قيد الانتظار",
      variant: "warning",
    },
    items: [
      {
        id: "10-1",
        productName: "طقم سكاكين مطبخ",
        category: "منزل",
        price: "$79.99",
        quantity: 1,
      },
      {
        id: "10-2",
        productName: "لوح تقطيع",
        category: "منزل",
        price: "$29.99",
        quantity: 1,
      },
      {
        id: "10-3",
        productName: "طقم أدوات",
        category: "منزل",
        price: "$39.99",
        quantity: 1,
      },
      {
        id: "10-4",
        productName: "مناشف أطباق",
        category: "منزل",
        price: "$12.99",
        quantity: 1,
      },
      {
        id: "10-5",
        productName: "حامي الأواني",
        category: "منزل",
        price: "$8.99",
        quantity: 1,
      },
      {
        id: "10-6",
        productName: "حامل أواني",
        category: "منزل",
        price: "$14.99",
        quantity: 1,
      },
      {
        id: "10-7",
        productName: "أكواب قياس",
        category: "منزل",
        price: "$16.99",
        quantity: 1,
      },
      {
        id: "10-8",
        productName: "ملاعق قياس",
        category: "منزل",
        price: "$9.99",
        quantity: 1,
      },
      {
        id: "10-9",
        productName: "أوعية خلط",
        category: "منزل",
        price: "$24.99",
        quantity: 1,
      },
      {
        id: "10-10",
        productName: "ملعقة مسطحة",
        category: "منزل",
        price: "$6.99",
        quantity: 1,
      },
      {
        id: "10-11",
        productName: "خفاقة",
        category: "منزل",
        price: "$4.99",
        quantity: 1,
      },
      {
        id: "10-12",
        productName: "مغرفة",
        category: "منزل",
        price: "$7.99",
        quantity: 1,
      },
      {
        id: "10-13",
        productName: "ملقط",
        category: "منزل",
        price: "$11.99",
        quantity: 1,
      },
      {
        id: "10-14",
        productName: "فتاحة علب",
        category: "منزل",
        price: "$13.99",
        quantity: 1,
      },
      {
        id: "10-15",
        productName: "فتاحة زجاجات",
        category: "منزل",
        price: "$5.99",
        quantity: 1,
      },
    ],
  },
  {
    id: "11",
    orderNumber: "SO-011",
    customer: "مايكل غارسيا",
    customerEmail: "michael.garcia@email.com",
    customerAvatar: "11.png",
    total: "$279.96",
    status: {
      label: "تم الشحن",
      variant: "primary",
    },
    items: [
      {
        id: "11-1",
        productName: "كرسي مكتب",
        category: "أثاث",
        price: "$199.99",
        quantity: 1,
      },
      {
        id: "11-2",
        productName: "سجادة مكتب",
        category: "مكتب",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "11-3",
        productName: "حامل شاشة",
        category: "إلكترونيات",
        price: "$59.99",
        quantity: 1,
      },
      {
        id: "11-4",
        productName: "مصباح مكتب",
        category: "مكتب",
        price: "$39.99",
        quantity: 1,
      },
      {
        id: "11-5",
        productName: "حامل أقلام",
        category: "مكتب",
        price: "$12.99",
        quantity: 1,
      },
      {
        id: "11-6",
        productName: "منظم ملفات",
        category: "مكتب",
        price: "$24.99",
        quantity: 1,
      },
      {
        id: "11-7",
        productName: "دباسة",
        category: "مكتب",
        price: "$16.99",
        quantity: 1,
      },
      {
        id: "11-8",
        productName: "مشابك ورق",
        category: "مكتب",
        price: "$4.99",
        quantity: 1,
      },
      {
        id: "11-9",
        productName: "مجلد",
        category: "مكتب",
        price: "$8.99",
        quantity: 1,
      },
      {
        id: "11-10",
        productName: "قلم تمييز",
        category: "مكتب",
        price: "$6.99",
        quantity: 1,
      },
      {
        id: "11-11",
        productName: "ممحاة",
        category: "مكتب",
        price: "$2.99",
        quantity: 1,
      },
      {
        id: "11-12",
        productName: "مسطرة",
        category: "مكتب",
        price: "$3.99",
        quantity: 1,
      },
      {
        id: "11-13",
        productName: "آلة حاسبة",
        category: "مكتب",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "11-14",
        productName: "تقويم",
        category: "مكتب",
        price: "$14.99",
        quantity: 1,
      },
      {
        id: "11-15",
        productName: "لوحة بيضاء",
        category: "مكتب",
        price: "$24.99",
        quantity: 1,
      },
    ],
  },
  {
    id: "12",
    orderNumber: "SO-012",
    customer: "جيسيكا تومبسون",
    customerEmail: "jessica.thompson@email.com",
    customerAvatar: "12.png",
    total: "$119.97",
    status: {
      label: "قيد المعالجة",
      variant: "info",
    },
    items: [
      {
        id: "12-1",
        productName: "طقم العناية بالبشرة",
        category: "جمال",
        price: "$59.99",
        quantity: 1,
      },
      {
        id: "12-2",
        productName: "قناع وجه",
        category: "جمال",
        price: "$29.99",
        quantity: 1,
      },
      {
        id: "12-3",
        productName: "مرطب",
        category: "جمال",
        price: "$29.99",
        quantity: 1,
      },
      {
        id: "12-4",
        productName: "منظف",
        category: "جمال",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "12-5",
        productName: "تونر",
        category: "جمال",
        price: "$24.99",
        quantity: 1,
      },
      {
        id: "12-6",
        productName: "مصل",
        category: "جمال",
        price: "$39.99",
        quantity: 1,
      },
      {
        id: "12-7",
        productName: "كريم عيون",
        category: "جمال",
        price: "$34.99",
        quantity: 1,
      },
      {
        id: "12-8",
        productName: "واقي شمس",
        category: "جمال",
        price: "$16.99",
        quantity: 1,
      },
      {
        id: "12-9",
        productName: "مقشر",
        category: "جمال",
        price: "$22.99",
        quantity: 1,
      },
      {
        id: "12-10",
        productName: "مرطب شفاه",
        category: "جمال",
        price: "$7.99",
        quantity: 1,
      },
      {
        id: "12-11",
        productName: "كريم يد",
        category: "جمال",
        price: "$12.99",
        quantity: 1,
      },
      {
        id: "12-12",
        productName: "لوشن الجسم",
        category: "جمال",
        price: "$18.99",
        quantity: 1,
      },
      {
        id: "12-13",
        productName: "شامبو",
        category: "جمال",
        price: "$14.99",
        quantity: 1,
      },
      {
        id: "12-14",
        productName: "بلسم",
        category: "جمال",
        price: "$14.99",
        quantity: 1,
      },
      {
        id: "12-15",
        productName: "قناع شعر",
        category: "جمال",
        price: "$19.99",
        quantity: 1,
      },
    ],
  },
  {
    id: "13",
    orderNumber: "SO-013",
    customer: "دانيال رودريغيز",
    customerEmail: "daniel.rodriguez@email.com",
    customerAvatar: "13.png",
    total: "$89.98",
    status: {
      label: "تم التسليم",
      variant: "success",
    },
    items: [
      {
        id: "13-1",
        productName: "قميص",
        category: "ملابس",
        price: "$19.99",
        quantity: 2,
      },
      {
        id: "13-2",
        productName: "جينز",
        category: "ملابس",
        price: "$49.99",
        quantity: 1,
      },
      {
        id: "13-3",
        productName: "هودي",
        category: "ملابس",
        price: "$39.99",
        quantity: 1,
      },
      {
        id: "13-4",
        productName: "سترة",
        category: "ملابس",
        price: "$34.99",
        quantity: 1,
      },
      {
        id: "13-5",
        productName: "جاكيت",
        category: "ملابس",
        price: "$79.99",
        quantity: 1,
      },
      {
        id: "13-6",
        productName: "شورت",
        category: "ملابس",
        price: "$24.99",
        quantity: 1,
      },
      {
        id: "13-7",
        productName: "بنطلون",
        category: "ملابس",
        price: "$44.99",
        quantity: 1,
      },
      {
        id: "13-8",
        productName: "فستان",
        category: "ملابس",
        price: "$59.99",
        quantity: 1,
      },
      {
        id: "13-9",
        productName: "تنورة",
        category: "ملابس",
        price: "$29.99",
        quantity: 1,
      },
      {
        id: "13-10",
        productName: "بلوزة",
        category: "ملابس",
        price: "$34.99",
        quantity: 1,
      },
      {
        id: "13-11",
        productName: "جوارب",
        category: "ملابس",
        price: "$9.99",
        quantity: 1,
      },
      {
        id: "13-12",
        productName: "ملابس داخلية",
        category: "ملابس",
        price: "$14.99",
        quantity: 1,
      },
      {
        id: "13-13",
        productName: "قبعة",
        category: "ملابس",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "13-14",
        productName: "وشاح",
        category: "ملابس",
        price: "$16.99",
        quantity: 1,
      },
      {
        id: "13-15",
        productName: "قفازات",
        category: "ملابس",
        price: "$12.99",
        quantity: 1,
      },
    ],
  },
  {
    id: "14",
    orderNumber: "SO-014",
    customer: "أشلي كلارك",
    customerEmail: "ashley.clark@email.com",
    customerAvatar: "14.png",
    total: "$199.97",
    status: {
      label: "تم الشحن",
      variant: "primary",
    },
    items: [
      {
        id: "14-1",
        productName: "تابلت",
        category: "إلكترونيات",
        price: "$199.99",
        quantity: 1,
      },
      {
        id: "14-2",
        productName: "غطاء تابلت",
        category: "إكسسوارات",
        price: "$29.99",
        quantity: 1,
      },
      {
        id: "14-3",
        productName: "حامي الشاشة",
        category: "إكسسوارات",
        price: "$14.99",
        quantity: 1,
      },
      {
        id: "14-4",
        productName: "قلم رقمي",
        category: "إكسسوارات",
        price: "$39.99",
        quantity: 1,
      },
      {
        id: "14-5",
        productName: "لوحة مفاتيح",
        category: "إلكترونيات",
        price: "$79.99",
        quantity: 1,
      },
      {
        id: "14-6",
        productName: "فأرة",
        category: "إلكترونيات",
        price: "$49.99",
        quantity: 1,
      },
      {
        id: "14-7",
        productName: "كابل الشحن",
        category: "إلكترونيات",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "14-8",
        productName: "محول طاقة",
        category: "إلكترونيات",
        price: "$24.99",
        quantity: 1,
      },
      {
        id: "14-9",
        productName: "قاعدة",
        category: "إكسسوارات",
        price: "$34.99",
        quantity: 1,
      },
      {
        id: "14-10",
        productName: "حامل",
        category: "إكسسوارات",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "14-11",
        productName: "غطاء",
        category: "إكسسوارات",
        price: "$16.99",
        quantity: 1,
      },
      {
        id: "14-12",
        productName: "قبضة",
        category: "إكسسوارات",
        price: "$11.99",
        quantity: 1,
      },
      {
        id: "14-13",
        productName: "عدسة",
        category: "إكسسوارات",
        price: "$6.99",
        quantity: 1,
      },
      {
        id: "14-14",
        productName: "مرشح",
        category: "إكسسوارات",
        price: "$4.99",
        quantity: 1,
      },
      {
        id: "14-15",
        productName: "طقم تنظيف",
        category: "إكسسوارات",
        price: "$7.99",
        quantity: 1,
      },
    ],
  },
  {
    id: "15",
    orderNumber: "SO-015",
    customer: "كيفن ويلسون",
    customerEmail: "kevin.wilson@email.com",
    customerAvatar: "15.png",
    total: "$159.96",
    status: {
      label: "قيد الانتظار",
      variant: "warning",
    },
    items: [
      {
        id: "15-1",
        productName: "سماعات ألعاب",
        category: "إلكترونيات",
        price: "$99.99",
        quantity: 1,
      },
      {
        id: "15-2",
        productName: "جهاز تحكم ألعاب",
        category: "إلكترونيات",
        price: "$59.99",
        quantity: 1,
      },
      {
        id: "15-3",
        productName: "فأرة ألعاب",
        category: "إلكترونيات",
        price: "$79.99",
        quantity: 1,
      },
      {
        id: "15-4",
        productName: "لوحة مفاتيح ألعاب",
        category: "إلكترونيات",
        price: "$129.99",
        quantity: 1,
      },
      {
        id: "15-5",
        productName: "كرسي ألعاب",
        category: "أثاث",
        price: "$299.99",
        quantity: 1,
      },
      {
        id: "15-6",
        productName: "مكتب ألعاب",
        category: "أثاث",
        price: "$199.99",
        quantity: 1,
      },
      {
        id: "15-7",
        productName: "شريط RGB",
        category: "إلكترونيات",
        price: "$29.99",
        quantity: 1,
      },
      {
        id: "15-8",
        productName: "سجادة الفأرة",
        category: "إكسسوارات",
        price: "$19.99",
        quantity: 1,
      },
      {
        id: "15-9",
        productName: "شاشة ألعاب",
        category: "إلكترونيات",
        price: "$399.99",
        quantity: 1,
      },
      {
        id: "15-10",
        productName: "بطاقة رسوميات",
        category: "إلكترونيات",
        price: "$599.99",
        quantity: 1,
      },
      {
        id: "15-11",
        productName: "ذاكرة RAM",
        category: "إلكترونيات",
        price: "$89.99",
        quantity: 1,
      },
      {
        id: "15-12",
        productName: "قرص SSD",
        category: "إلكترونيات",
        price: "$129.99",
        quantity: 1,
      },
      {
        id: "15-13",
        productName: "معالج",
        category: "إلكترونيات",
        price: "$299.99",
        quantity: 1,
      },
      {
        id: "15-14",
        productName: "لوحة أم",
        category: "إلكترونيات",
        price: "$199.99",
        quantity: 1,
      },
      {
        id: "15-15",
        productName: "مزود طاقة",
        category: "إلكترونيات",
        price: "$149.99",
        quantity: 1,
      },
    ],
  },
];

// Sub-table component for order items
function OrderItemsSubTable({ items }: { items: OrderItemData[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5, // Show 5 items per page for sub-tables
  });

  const columns = useMemo<ColumnDef<OrderItemData>[]>(
    () => [
      {
        accessorKey: "productName",
        header: ({ column }) => (
          <DataGridColumnHeader title="المنتج" column={column} />
        ),
        cell: (info) => info.getValue() as string,
        enableSorting: true,
        size: 200,
      },
      {
        accessorKey: "category",
        header: ({ column }) => (
          <DataGridColumnHeader title="الفئة" column={column} />
        ),
        cell: (info) => info.getValue() as string,
        enableSorting: true,
        size: 120,
      },
      {
        accessorKey: "price",
        header: ({ column }) => (
          <DataGridColumnHeader title="السعر" column={column} />
        ),
        cell: (info) => info.getValue() as string,
        enableSorting: true,
        size: 100,
      },
      {
        accessorKey: "quantity",
        header: ({ column }) => (
          <DataGridColumnHeader title="الكمية" column={column} />
        ),
        cell: (info) => info.getValue() as number,
        enableSorting: true,
        size: 80,
      },
    ],
    []
  );

  const table = useReactTable({
    data: items,
    columns,
    pageCount: Math.ceil(items.length / pagination.pageSize),
    state: {
      sorting,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getRowId: (row: OrderItemData) => row.id,
  });

  return (
    <div className="bg-muted/30 p-4">
      <DataGrid
        table={table}
        recordCount={items.length}
        tableLayout={{
          cellBorder: true,
          rowBorder: true,
          headerBackground: true,
          headerBorder: true,
        }}
      >
        <div className="w-full space-y-2.5">
          <div className="bg-card rounded-lg border border-muted-foreground/20">
            <div className="w-full">
              <ScrollArea>
                <DataGridTable />
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
          <DataGridPagination className="pb-1.5"            />
        </div>
      </DataGrid>
    </div>
  );
}

export default function DataGridSubDataGrid() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [expandedRows, setExpandedRows] = useState<ExpandedState>({});
  const [columnOrder, setColumnOrder] = useState<string[]>([
    "expand",
    "orderNumber",
    "customer",
    "total",
    "status",
  ]);

  const columns = useMemo<ColumnDef<Data>[]>(
    () => [
      {
        id: "expand",
        header: () => null,
        cell: ({ row }) => {
          return row.getCanExpand() ? (
            <Button
              onClick={row.getToggleExpandedHandler()}
              mode="icon"
              size="sm"
              variant="ghost"
            >
              {row.getIsExpanded() ? <SquareMinus /> : <SquarePlus />}
            </Button>
          ) : null;
        },
        size: 25,
        enableResizing: false,
        meta: {
          expandedContent: (row) => <OrderItemsSubTable items={row.items} />,
        },
      },
      {
        accessorKey: "customer",
        id: "customer",
        header: ({ column }) => (
          <DataGridColumnHeader title="العميل" visibility={true} column={column} />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-3">
              <Avatar className="size-8">
                <AvatarImage
                  src={row.original.customerAvatar}
                  alt={row.original.customer} />
                <AvatarFallback>
                  {row.original.customer.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-px">
                <div className="font-medium text-foreground">
                  {row.original.customer}
                </div>
                <div className="text-muted-foreground">
                  {row.original.customerEmail}
                </div>
              </div>
            </div>
          );
        },
        enableSorting: true,
        enableHiding: true,
        enableResizing: true,
        size: 200,
      },
      {
        accessorKey: "items",
        id: "items",
        header: ({ column }) => (
          <DataGridColumnHeader title="العناصر" visibility={true} column={column} />
        ),
        cell: (info) => {
          const items = info.getValue() as OrderItemData[];
          const itemCount = items.length;
          return (
            <div
              className="text-sm font-medium text-foreground hover:text-primary cursor-pointer"
              onClick={() => info.row.getToggleExpandedHandler()()}
            >
              {itemCount} {itemCount === 1 ? "عنصر" : "عناصر"}
            </div>
          );
        },
        enableSorting: true,
        enableHiding: true,
        enableResizing: true,
        size: 120,
      },
      {
        accessorKey: "total",
        id: "total",
        header: ({ column }) => (
          <DataGridColumnHeader title="الإجمالي" visibility={true} column={column} />
        ),
        cell: (info) => info.getValue() as string,
        enableSorting: true,
        enableHiding: true,
        enableResizing: true,
        size: 100,
      },
      {
        accessorKey: "status",
        id: "status",
        header: ({ column }) => (
          <DataGridColumnHeader title="الحالة" visibility={true} column={column} />
        ),
        cell: ({ row }) => {
          const status = row.original.status;
          return (
            <Badge variant={status.variant} appearance="light">
              {status.label}
            </Badge>
          );
        },
        enableSorting: true,
        enableHiding: true,
        enableResizing: true,
        size: 120,
      },
    ],
    []
  );

  const table = useReactTable({
    columns,
    data: demoData,
    pageCount: Math.ceil((demoData?.length || 0) / pagination.pageSize),
    getRowId: (row: Data) => row.id,
    getRowCanExpand: (row) =>
      Boolean(row.original.items && row.original.items.length > 0),
    state: {
      pagination,
      sorting,
      expanded: expandedRows,
      columnOrder,
    },
    columnResizeMode: "onChange",
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onExpandedChange: setExpandedRows,
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
      tableLayout={{
        columnsPinnable: true,
        columnsResizable: true,
        columnsMovable: true,
        columnsVisibility: true,
      }}
    >
      <div className="w-full space-y-2.5">
        <div className="w-full">
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
