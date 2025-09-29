
import {SalesSvg, RoutesSvg, TicketSvg,RevenueSvg, SalesIncrease} from "./imageHelper";

export const sideLink = [
  { name: "Dashboard", link: "/dashboard" },
  { name: "Master Data", link: "/masterdata" },
  { name: "Reports", link: "/reports" },
];


export const dashboardData = [
  { id: 1, title: "Total Sales Today", icon: SalesSvg, value: "₱25,000",color: "bg-[#2BB883]",sales:SalesIncrease},
  { id: 2, title: "Active Routes", icon: RoutesSvg, value: "15",color: "bg-[#688CFF]", sales:SalesIncrease},
  { id: 3, title: "Average Ticket Price", icon: TicketSvg, value: "30",color: "bg-[#2BB883]",sales:SalesIncrease },
  { id: 4, title: "Total Revenue this month", icon: RevenueSvg, value: "₱500,000",color: "bg-[#688CFF]",sales:SalesIncrease },
];


