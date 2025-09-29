import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import HeadLink from "../components/Headlink";

export default function Layout() {
  return (
    <div className="font-primary flex flex-col h-screen">
      {/* Header */}
      <header className="h-16 fixed top-0 left-0 right-0 z-50 bg-white shadow">
        <Header />
      </header>

      {/* Sidebar + Main */}
      <div className="flex flex-1 pt-16"> 
        {/* Sidebar */}
        <aside className="w-40 fixed top-16 left-0 bottom-0 z-40 bg-gray-100 border-r">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-40 p-4 overflow-y-auto">
          <HeadLink />
          <div className="p-4 mx-2">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

