import AuthHero from "@/components/auth/AuthHero";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <AuthHero
        title="Create your travel companion."
        description="Build personalized itineraries, manage budgets and travel smarter with AI."
      />

      <RegisterForm />
    </div>
  );
}
