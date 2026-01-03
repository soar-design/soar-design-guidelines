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
    name: "Website Redesign",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-01-15",
  },
  {
    id: "2",
    name: "Mobile App",
    status: "Completed",
    priority: "Medium",
    dueDate: "2023-12-20",
  },
  {
    id: "3",
    name: "API Integration",
    status: "Not Started",
    priority: "Low",
    dueDate: "2024-02-01",
  },
  {
    id: "4",
    name: "Database Migration",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-01-10",
  },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Completed":
      return "success";
    case "In Progress":
      return "info";
    case "Not Started":
      return "secondary";
    default:
      return "secondary";
  }
};

const getPriorityVariant = (priority: string) => {
  switch (priority) {
    case "High":
      return "destructive";
    case "Medium":
      return "warning";
    case "Low":
      return "secondary";
    default:
      return "secondary";
  }
};

export default function TableWithBadges() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Due Date</TableHead>
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
