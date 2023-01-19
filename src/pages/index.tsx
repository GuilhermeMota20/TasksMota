import MenuUser from "../components/MenuUser";
import Sidebar from "../components/Sidebar";
import TasksSection from "../components/TasksSection";

export default function Home() {
  return (
    <>
      <section className="min-h-screen text-slate-600">
        <Sidebar />
        <TasksSection />
        <MenuUser />
      </section>
    </>
  )
} 
