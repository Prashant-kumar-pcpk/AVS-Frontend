import PageSection from "../../components/PageSection";

export const metadata = {
  title: "Login",
  description: "Sign in to your AVS account.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <PageSection eyebrow="Login" title="Welcome back">
        <div className="mx-auto max-w-xl rounded-[32px] border border-white/10 bg-slate-900/70 p-8">
          <div className="grid gap-4">
            <input className="rounded-2xl border border-white/10 bg-[#0f1b2e] px-4 py-3" placeholder="Email" />
            <input className="rounded-2xl border border-white/10 bg-[#0f1b2e] px-4 py-3" placeholder="Password" />
          </div>
          <button className="mt-6 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950">Sign In</button>
        </div>
      </PageSection>
    </main>
  );
}
