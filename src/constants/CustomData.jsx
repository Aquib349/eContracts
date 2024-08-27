import { AiOutlineBars } from "react-icons/ai";
import { SlBell } from "react-icons/sl";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import dashboard from "../assets/dashboard.png";
import BADashboard from "../assets/BADashboard.png";
import office365 from "../assets/pngegg.png";
import { FcTemplate } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcFlowChart } from "react-icons/fc";
import { FcServices } from "react-icons/fc";

export const NavItems = [
  { id: 1, name: "Tasks", icon: <AiOutlineBars /> },
  { id: 2, name: "Alerts", icon: <SlBell /> },
  { id: 3, name: "Bookmarks", icon: <IoBookmarkOutline /> },
  { id: 4, name: "Help Documents", icon: <FaRegCircleQuestion /> },
  { id: 5, name: "Profile", icon: <FaRegUserCircle /> },
];

export const NavigateItem = [
  { id: 1, name: "Dashboard", links: "", child: [], icon: dashboard },
  {
    id: 2,
    name: "Business Area Dashboard",
    links: "",
    child: [],
    icon: BADashboard,
  },
  { id: 3, name: "BU Portal", links: "", child: [], icon: <FcTemplate /> },
  {
    id: 4,
    name: "Global Insights and Reports",
    links: "",
    child: [],
    icon: <FcBullish />,
  },
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
    icon: <FcFlowChart />,
  },
  {
    id: 6,
    name: "Account Management",
    links: "",
    child: [],
    icon: <FcServices />,
  },
  { id: 7, name: "Office 365", links: "", child: [], icon: office365 },
];
