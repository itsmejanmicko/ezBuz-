import { Link, useLocation } from "react-router-dom";
import { sideLink } from "../utils/helper/helper";

export default function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <aside className="bg-primary h-screen text-white">
      <main className="flex flex-col items-center justify-center pt-2">
        <div className="w-full items-center text-center">
          {sideLink.map((item, index) => (
            <div
              className={pathname === item.link ? "bg-gray-700" : ""}
              key={index}
            >
              <Link
                to={item.link}
                className="block py-2 px-4 hover:bg-secondary rounded my-2"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </aside>
  );
}
