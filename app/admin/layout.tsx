// app/admin/layout.tsx
import NavbarAdmin from './components/navbar-admin';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
      <div>
        <NavbarAdmin />
        <main className="p-6">{children}</main>
      </div>
  );
}
