import Header from "../components/Header";
import ModalNewTasks from "../components/Modals/ModalNewTasks";
import TasksSection from "../components/TasksSection";

export default function Home() {
  return (
    <>
      <ModalNewTasks />

      <section className="text-slate-600 pt-5 pb-8 sm:pb-16 px-4 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen flex flex-col gap-6">
        <Header />
        <TasksSection />
      </section>
    </>
  )
} 
