import { lazy } from "react";

export const LoginPages = lazy(() => import("../../pages/LoginPages"));
export const DashboardPages = lazy(() => import("../../pages/index"));
export const MasterDataPages = lazy(() => import("../../pages/MasterData"));
export const ReportsPages = lazy(() => import("../../pages/Reports"));
