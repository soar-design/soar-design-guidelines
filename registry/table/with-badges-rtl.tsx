"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Badge,
} from "@soar-design/soar-react-components";

const projects = [
  {
    id: "1",
    name: "إعادة تصميم الموقع",
    status: "قيد التنفيذ",
    priority: "عالي",
    dueDate: "2024-01-15",
  },
  {
    id: "2",
    name: "تطبيق الجوال",
    status: "مكتمل",
    priority: "متوسط",
    dueDate: "2023-12-20",
  },
  {
    id: "3",
    name: "تكامل API",
    status: "لم يبدأ",
    priority: "منخفض",
    dueDate: "2024-02-01",
  },
  {
    id: "4",
    name: "ترحيل قاعدة البيانات",
    status: "قيد التنفيذ",
    priority: "عالي",
    dueDate: "2024-01-10",
  },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case "مكتمل":
      return "success";
    case "قيد التنفيذ":
      return "info";
    case "لم يبدأ":
      return "secondary";
    default:
      return "secondary";
  }
};

const getPriorityVariant = (priority: string) => {
  switch (priority) {
    case "عالي":
      return "destructive";
    case "متوسط":
      return "warning";
    case "منخفض":
      return "secondary";
    default:
      return "secondary";
  }
};

export default function TableWithBadges() {
  return (
    <Table dir="rtl">
      <TableHeader>
        <TableRow>
          <TableHead>المشروع</TableHead>
          <TableHead>الحالة</TableHead>
          <TableHead>الأولوية</TableHead>
          <TableHead>تاريخ الاستحقاق</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell className="font-medium">{project.name}</TableCell>
            <TableCell>
              <Badge variant={getStatusVariant(project.status) as any}>{project.status}</Badge>
            </TableCell>
            <TableCell>
              <Badge variant={getPriorityVariant(project.priority) as any}>
                {project.priority}
              </Badge>
            </TableCell>
            <TableCell>{project.dueDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

