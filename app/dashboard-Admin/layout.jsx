import Aside from "@components/Aside";

export default function DashboardLayout({ children }) {
  return (
    <section className="lg:flex">
      <aside className="lg:w-1/4 lg:mt-20 lg:min-h-screen bg-cyan-950 shadow-lg">
        <Aside />
      </aside>
      <main className="lg:w-3/4 p-4 lg:mt-20">{children}</main>
    </section>
  );
}
