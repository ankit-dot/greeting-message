import React from "react";
import {
  Bell,
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
const Sidebar = () => {
  const sidebarItems = {
    links: [
      { label: "Greeting Message", href: "#" },
      { label: "Table Booking Flow", href: "#" },
      { label: "Appointment Flow", href: "#" },
    ],
  };
  return (
    <aside className="w-[300px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
      <div className="h-full px-3 py-4">
        <h3 className="mx-3 text-xl font-semibold" style = {{color:"rgba(34, 34, 34, 0.48)"}}>
          NAVIGATION
        </h3>
        <div className="mt-5">
          <div className="flex flex-col gap-1 ">
            {sidebarItems.links.map((link, index) => (
              <Link key={index} href={link.href}>
                <Button variant={"ghost"} className=" text-customGray text-xl w-full h-[60px] font-medium">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
