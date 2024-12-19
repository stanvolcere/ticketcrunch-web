export default function Layout({ children }: { 
  children: React.ReactNode }) {
  return (
    <div>
      <aside>Dashboard Sidebar</aside>
      <main>{children}</main>
    </div>
  );
}
