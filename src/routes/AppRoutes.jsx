import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import UseCase from "../pages/UseCase/UseCase";
import UseCaseDetail from "../pages/UseCase/UseCaseDetail";
import LifeAtSNSSquare from "../pages/LifeAtSNSSquare";
import HomePage from '../pages/Home';
import AgentsDetails from "../pages/agentWorkbench/AgentsDetails";
import CategoriesDetails from "../pages/agentWorkbench/CategoriesDetails";
import Categories from "../pages/agentWorkbench/Categories";
import AgentWorkbenchIndex from "../pages/agentWorkbench/Index";
import AgentWorkbenchLayout from "../pages/agentWorkbench/AgentWorkbenchLayout";
import Sidebar from "../pages/agentWorkbench/components/Sidebar";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={< HomePage/>} />
      <Route path="/usecase" element={<UseCase />} />
      <Route path="/usecase/:id" element={<UseCaseDetail />} />
      <Route path="/life-at-sns" element={<LifeAtSNSSquare />} />
      <Route path="/agent-workbench" element={<AgentWorkbenchLayout />}>
        {/* Landing Page */}
        <Route index element={<AgentWorkbenchIndex />} />
         <Route path="categories/:categoryId" element={<Sidebar />}>
          {/* Categories List */}
          <Route index element={<Categories />} />

          {/* Category Details */}
          <Route path="agents" element={<CategoriesDetails />} />
          <Route path="agents/:agentId" element={<CategoriesDetails />} />
         </Route>
     

        {/* Agent Details */}
        <Route path="categories/:categoryId/agents/:agentId" element={<AgentsDetails />} />
    </Route>
    </Routes>
  );
}
