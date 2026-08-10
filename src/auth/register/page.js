import PageSection from "../../components/PageSection";

export const metadata = {
  title: "Register",
  description: "Create a new AVS account.",
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <PageSection eyebrow="Register" title="Create your account">
        <div className="mx-auto max-w-xl rounded-[32px] border border-white/10 bg-slate-900/70 p-8">
          <div className="grid gap-4">
            <input className="rounded-2xl border border-white/10 bg-[#0f1b2e] px-4 py-3" placeholder="Full Name" />
            <input className="rounded-2xl border border-white/10 bg-[#0f1b2e] px-4 py-3" placeholder="Email" />
            <input className="rounded-2xl border border-white/10 bg-[#0f1b2e] px-4 py-3" placeholder="Password" />
          </div>
          <button className="mt-6 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950">Create Account</button>
        </div>
      </PageSection>
    </main>
  );
}
