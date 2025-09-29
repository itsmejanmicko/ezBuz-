import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { DashboardPages, LoginPages, MasterDataPages, ReportsPages } from "../utils/helper/lazy";
import Layout from "../layout";

const routes = [
  { path: "/", element: <LoginPages /> },
  { path: "/dashboard", element: <DashboardPages /> },
  {path:"/masterdata", element: <MasterDataPages />},
  {path:"/reports", element: <ReportsPages />},

  
];

export default function RouterIndex() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LoginPages />} />
        <Route element={<Layout />}>
          {routes
            .filter(route => route.path !== "/") 
            .map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
        </Route>
      </Routes>
    </Suspense>
  );
}
