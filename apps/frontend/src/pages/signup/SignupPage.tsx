import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { setAuthToken, signup } from "../../shared/api/client";

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

type SignupForm = z.infer<typeof signupSchema>;

export function SignupPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const form = useForm<SignupForm>();

  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: async (session) => {
      setAuthToken(session.token);
      await queryClient.invalidateQueries();
      navigate("/");
    }
  });

  return (
    <main className="site-container grid min-h-[calc(100vh-140px)] place-items-center py-10">
      <section className="grid w-full max-w-[840px] grid-cols-[340px_minmax(0,1fr)] overflow-hidden rounded-sm bg-white shadow-card max-md:grid-cols-1">
        <div className="flex min-h-[560px] flex-col justify-between bg-brand-blue px-8 py-10 text-white">
          <div>
            <p className="mb-4 text-4xl font-semibold">Looks like you&apos;re new here!</p>
            <p className="max-w-[240px] text-[1.12rem] leading-8 text-white/90">
              Sign up with your email to get started with cart, wishlist and orders.
            </p>
          </div>

          <div className="flex justify-center pb-2">
            <div className="relative h-32 w-44">
              <div className="absolute inset-x-0 bottom-0 h-2 rounded-full bg-blue-900/40" />
              <div className="absolute bottom-2 left-6 h-12 w-14 rounded-sm bg-red-400" />
              <div className="absolute bottom-2 right-6 h-10 w-16 rounded-sm bg-brand-yellow" />
              <div className="absolute bottom-4 left-1/2 h-20 w-24 -translate-x-1/2 rounded-md border-4 border-slate-700 bg-slate-200" />
              <div className="absolute bottom-11 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-slate-400" />
              <div className="absolute bottom-6 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded bg-slate-700" />
            </div>
          </div>
        </div>

        <form
          className="flex min-h-[560px] flex-col px-8 py-10"
          onSubmit={form.handleSubmit((values) => {
            const result = signupSchema.safeParse(values);
            if (!result.success) {
              const err = result.error.flatten();
              if (err.fieldErrors.name?.[0]) form.setError("name", { message: err.fieldErrors.name[0] });
              if (err.fieldErrors.email?.[0]) form.setError("email", { message: err.fieldErrors.email[0] });
              if (err.fieldErrors.password?.[0]) form.setError("password", { message: err.fieldErrors.password[0] });
              return;
            }
            signupMutation.mutate(result.data);
          })}
        >
          <div className="space-y-7">
            <label className="block">
              <span className="text-[15px] text-slate-500">Enter Full Name</span>
              <input
                {...form.register("name")}
                className="mt-3 w-full border-0 border-b-2 border-slate-300 bg-transparent px-0 pb-3 pt-1 outline-none transition-colors focus:border-brand-blue"
              />
              {form.formState.errors.name ? (
                <p className="mt-1 text-sm font-medium text-red-600">{form.formState.errors.name.message}</p>
              ) : null}
            </label>

            <label className="block">
              <span className="text-[15px] text-slate-500">Enter Email</span>
              <input
                {...form.register("email")}
                className="mt-3 w-full border-0 border-b-2 border-slate-300 bg-transparent px-0 pb-3 pt-1 outline-none transition-colors focus:border-brand-blue"
                type="email"
              />
              {form.formState.errors.email ? (
                <p className="mt-1 text-sm font-medium text-red-600">{form.formState.errors.email.message}</p>
              ) : null}
            </label>

            <label className="block">
              <span className="text-[15px] text-slate-500">Create Password</span>
              <input
                {...form.register("password")}
                className="mt-3 w-full border-0 border-b-2 border-slate-300 bg-transparent px-0 pb-3 pt-1 outline-none transition-colors focus:border-brand-blue"
                type="password"
              />
              {form.formState.errors.password ? (
                <p className="mt-1 text-sm font-medium text-red-600">{form.formState.errors.password.message}</p>
              ) : null}
            </label>

            <p className="text-sm leading-6 text-slate-500">
              By continuing, you agree to Flipkart&apos;s <span className="font-medium text-brand-blue">Terms of Use</span> and{" "}
              <span className="font-medium text-brand-blue">Privacy Policy</span>.
            </p>
          </div>

          {signupMutation.isError ? <p className="mt-5 text-sm font-semibold text-red-600">Signup failed. The email may already be registered.</p> : null}

          <button
            className="mt-6 min-h-12 rounded-sm bg-[#fb641b] px-4 text-base font-semibold text-white transition hover:bg-[#f45d12] disabled:opacity-60"
            disabled={signupMutation.isPending}
            type="submit"
          >
            {signupMutation.isPending ? "Creating account..." : "Create account"}
          </button>

          <div className="mt-auto pt-10 text-center">
            <p className="text-[15px] font-semibold text-brand-blue">
              Existing user? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
