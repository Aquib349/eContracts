import { HiClipboardDocumentList } from "react-icons/hi2";
import { PiAmazonLogoBold } from "react-icons/pi";
import { MdOutlineSummarize } from "react-icons/md";
import { BsDiamondFill } from "react-icons/bs";
import { LuActivity } from "react-icons/lu";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { MdRebaseEdit } from "react-icons/md";
import { MdSyncProblem } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { AiOutlineFileDone } from "react-icons/ai";
import { LuFileSignature } from "react-icons/lu";
import { MdEditSquare } from "react-icons/md";
import { ImFilesEmpty } from "react-icons/im";
import { FaUserLock } from "react-icons/fa";
import { LuFileCog } from "react-icons/lu";

export const Settings = [
  { id: 1, name: "Edit Metadata", icon: <MdEditSquare /> },
  { id: 2, name: "Edit Title & Description", icon: <MdEditSquare /> },
  { id: 3, name: "Permissions", icon: <FaUserLock /> },
  { id: 4, name: "Properties", icon: <LuFileCog /> },
  { id: 5, name: "Duplicate", icon: <ImFilesEmpty /> },
  { id: 6, name: "Review & Update", icon: <MdEditSquare /> },
];

export const summary = [
  {
    id: 1,
    name: "Summary",
    icon: <MdOutlineSummarize />,
    link: "summary",
  },
  {
    id: 2,
    name: "Documents",
    icon: <HiClipboardDocumentList />,
    link: "documents",
  },
  {
    id: 3,
    name: "Acitvity",
    icon: <LuActivity />,
    link: "activity",
  },
  {
    id: 4,
    name: "Issues",
    icon: <MdOutlineReportGmailerrorred />,
    link: "issues",
  },
  {
    id: 5,
    name: "Amendments",
    icon: <PiAmazonLogoBold />,
    link: "amendments",
  },
  {
    id: 6,
    name: "Clauses",
    icon: <MdRebaseEdit />,
    link: "clauses",
  },
  {
    id: 7,
    name: "Obligations",
    icon: <BiError />,
    link: "obligations",
  },
  {
    id: 8,
    name: "Correspondance",
    icon: <MdSyncProblem />,
    link: "correspondance",
  },
  {
    id: 9,
    name: "Compliance",
    icon: <AiOutlineFileDone />,
    link: "compilance",
  },
  {
    id: 10,
    name: "Notes",
    icon: <LuFileSignature />,
    link: "notes",
  },
];
