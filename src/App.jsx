import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "./shared/navbar/Navbar";
import Sidebar from "./shared/sidebar/Sidebar";
import ToggleMenuProvider from "./context/ToggleMenuContext";
import Requests from "./pages/requests/Requests";
import Dashboard from "./pages/dashboard/Dashboard";
import Contracts from "./pages/contracts/Contracts";
import Activities from "./pages/activities/Activities";
import Pipeline from "./pages/pipeline/Pipeline";
import ContractDetail from "./pages/contracts/Contract Detail/ContractDetail";
import Summary from "./pages/contracts/Contract Detail/main body/Contract content/summary/Summary";
import Documents from "./pages/contracts/Contract Detail/main body/Contract content/documents/Documents";
import Activity from "./pages/contracts/Contract Detail/main body/Contract content/activity/Activity";
import Issues from "./pages/contracts/Contract Detail/main body/Contract content/issues/Issues";
import Amendments from "./pages/contracts/Contract Detail/main body/Contract content/amendments/Amendments";
import Clauses from "./pages/contracts/Contract Detail/main body/Contract content/clauses/Clauses";
import Obligations from "./pages/contracts/Contract Detail/main body/Contract content/obligations/Obligations";
import Correspondance from "./pages/contracts/Contract Detail/main body/Contract content/correspondance/Correspondance";
import Compilance from "./pages/contracts/Contract Detail/main body/Contract content/compilance/Compilance";
import Notes from "./pages/contracts/Contract Detail/main body/Contract content/notes/Notes";

function App() {
  return (
    <>
      <ToggleMenuProvider>
        <div className="">
          <Navbar />
          <Sidebar />
          <Outlet />
        </div>
      </ToggleMenuProvider>
    </>
  );
}

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "requests",
        element: <Requests />,
      },
      {
        path: "contracts",
        element: <Contracts />,
      },
      {
        path: "contractDetail",
        element: <ContractDetail />,
        children: [
          {
            path: "summary",
            element: <Summary />,
          },
          {
            path: "documents",
            element: <Documents />,
          },
          {
            path: "activity",
            element: <Activity />,
          },
          {
            path: "issues",
            element: <Issues />,
          },
          {
            path: "amendments",
            element: <Amendments />,
          },
          {
            path: "clauses",
            element: <Clauses />,
          },
          {
            path: "obligations",
            element: <Obligations />,
          },
          {
            path: "correspondance",
            element: <Correspondance />,
          },
          {
            path: "compilance",
            element: <Compilance />,
          },
          {
            path: "notes",
            element: <Notes />,
          },
        ],
      },
      {
        path: "activities",
        element: <Activities />,
      },
      {
        path: "pipeline",
        element: <Pipeline />,
      },
    ],
  },
]);

export default Router;
