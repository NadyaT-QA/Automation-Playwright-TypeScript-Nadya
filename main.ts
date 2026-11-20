import {
  formatId,
  calculateSLA,
  isOverdue,
  validateTitle,
  isCategoryAllowed,
  formatRequestSummary,
} from "./request-utils";

const allowedCategories = ["Bug", "Feature", "Support"];

const requests = [
  { id: 1, title: "Login bug", priority: 1, hours: 10, category: "Bug", status: "Open" },
  { id: 2, title: "Dark mode", priority: 4, hours: 50, category: "Feature", status: "New" },
  { id: 3, title: "Hi", priority: 2, hours: 20, category: "Support", status: "Open" },
  { id: 4, title: "Slow page", priority: 1, hours: 30, category: "Bug", status: "Closed" },
  { id: 5, title: "Add export", priority: 3, hours: 200, category: "Feature", status: "New" },
  { id: 6, title: "Reset pass", priority: 2, hours: 40, category: "Support", status: "Open" },
  { id: 7, title: "Other test", priority: 1, hours: 5, category: "Other", status: "New" },
  { id: 8, title: "Fix typo", priority: 3, hours: 100, category: "Bug", status: "Closed" },
];

console.log("REQUESTS REPORT");
console.log("-".repeat(50));

for (let i = 0; i < requests.length; i++) {
  let req = requests[i];

  let summary = formatRequestSummary(req.id, req.title, req.status);
  let sla = calculateSLA(req.priority);
  let overdue = isOverdue(req.hours, sla);
  let titleOk = validateTitle(req.title);
  let categoryOk = isCategoryAllowed(req.category, allowedCategories);

  console.log(summary);
  console.log("  SLA:", sla, "h | Overdue:", overdue, "| Title OK:", titleOk, "| Category OK:", categoryOk);
}