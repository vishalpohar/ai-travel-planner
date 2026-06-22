import GuestRoute from "@/components/auth/GuestRoute";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GuestRoute>
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        {children}
      </main>
    </GuestRoute>
  );
}
