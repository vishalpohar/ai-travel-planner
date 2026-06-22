import AuthHero from "@/components/auth/AuthHero";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <AuthHero
        title="Plan your next adventure with AI."
        description="Generate smart itineraries, estimate budgets, discover hotels and create personalized packing lists."
      />

      <LoginForm />
    </div>
  );
}
