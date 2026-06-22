interface Props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function AuthCard({ title, subtitle, children }: Props) {
  return (
    <div className="flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-black">{title}</h2>

          <p className="mt-2 text-zinc-500">{subtitle}</p>
        </div>

        {children}
      </div>
    </div>
  );
}
