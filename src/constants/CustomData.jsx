import { AiOutlineBars } from "react-icons/ai";
import { SlBell } from "react-icons/sl";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

export const NavItems = [
  { id: 1, name: "Tasks", icon: <AiOutlineBars /> },
  { id: 2, name: "Alerts", icon: <SlBell /> },
  { id: 3, name: "Bookmarks", icon: <IoBookmarkOutline /> },
  { id: 4, name: "Help Documents", icon: <FaRegCircleQuestion /> },
  { id: 5, name: "Profile", icon: <FaRegUserCircle /> },
];

export const NavigateItem = [
  { id: 1, name: "My Dashboard", links: "", child: [] },
  { id: 2, name: "Go To Business Area Dashboard", links: "", child: [] },
  { id: 3, name: "Business User Portal", links: "", child: [] },
  { id: 4, name: "Global Insights and Reports", links: "", child: [] },
  {
    id: 5,
    name: "eContracts Administration",
    links: "",
    child: [
      { id: "e1", name: "Contract & Business Areas", links: "" },
      { id: "e2", name: "Terms & Clause Library", links: "" },
      { id: "e3", name: "Template Library", links: "" },
      { id: "e4", name: "Users & Permissions", links: "" },
      { id: "e5", name: "Admin Dashboard", links: "" },
    ],
  },
  { id: 6, name: "Account Management", links: "", child: [] },
  { id: 7, name: "Office 365", links: "", child: [] },
];
