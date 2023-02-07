import Header from "../components/Header";

export default function Home() {
  return (
    <section className="text-slate-600 dark:bg-slate-900 dark:text-slate-400 pt-5 pb-8 sm:pb-16 px-4 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen flex flex-col gap-6">
      <Header />
      <h1>Tela inicial</h1>
    </section>
  );
};