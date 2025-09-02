import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import UseCase from "../pages/UseCase/UseCase";
import UseCaseDetail from "../pages/UseCase/UseCaseDetail";
import LifeAtSNSSquare from "../pages/LifeAtSNSSquare";
import HomePage from '../pages/Home';
import AgentWorkbench from "../pages/AwpPage3";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={< HomePage/>} />
      <Route path="/usecase" element={<UseCase />} />
      <Route path="/usecase/:id" element={<UseCaseDetail />} />
      <Route path="/life-at-sns" element={<LifeAtSNSSquare />} />
      <Route path="/agentworkbench" element={<AgentWorkbench />} />
    </Routes>
  );
}
