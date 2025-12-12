"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      {/* Left banner */}
      <section className="relative w-full lg:w-1/2 p-6 lg:p-10">
        <div className="rounded-3xl overflow-hidden border border-white/10">
          <Image
            src="/img/suibanner.jpg"
            alt="Sui banner"
            width={1200}
            height={1200}
            className="h-[280px] sm:h-[360px] lg:h-[calc(100vh-4rem)] w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Right form */}
      <section className="w-full lg:w-1/2 flex items-start lg:items-center justify-center px-6 lg:px-10">
        <div className="w-full max-w-md mt-6 sm:mt-10">
          <button className="mb-8 text-white/70 hover:text-white transition" aria-label="Go back">
            ←
          </button>
          <div className="mb-6">
            <h1 className="text-3xl font-semibold">Log in</h1>
          </div>
          <p className="text-sm text-white/60 mb-8">
            Login with your Sui wallet or enter your details.
          </p>

          <form className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm">Email Address</span>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={18} />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-full bg-[#030F1C] border border-white/30 px-12 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#C0E6FF]"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm">Password</span>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={18} />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-full bg-[#030F1C] border border-white/30 px-12 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#C0E6FF]"
                />
              </div>
            </label>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 select-none">
                <input type="checkbox" className="accent-[#C0E6FF]" />
                <span className="text-white/80">Stay logged in</span>
              </label>
              <Link href="#" className="text-[#C0E6FF] hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#C0E6FF] text-[#030F1C] font-semibold py-3 hover:brightness-95 transition"
            >
              Log In
            </button>
          </form>

          <p className="mt-4 text-sm text-white/70">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#C0E6FF] hover:underline">
              Sign up
            </Link>
            .
          </p>

          <div className="my-8 flex items-center gap-4 text-white/40">
            <div className="h-px flex-1 bg-white/10" />
            <span>OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="flex items-center justify-center">
            <button className="flex items-center gap-3 rounded-full border border-white/20 bg-[#030F1C] px-5 py-3 text-white hover:bg-white/5 transition" aria-label="Continue with Google">
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill="#EA4335" d="M12 10.2v3.6h8.5c-.3 2.1-2.5 6.1-8.5 6.1-5.1 0-9.2-4.2-9.2-9.3S6.9 1.3 12 1.3c2.9 0 4.9 1.2 6 2.3l-2.8 2.7C14.5 5.4 13.4 4.8 12 4.8c-3.3 0-6 2.7-6 6s2.7 6 6 6c3.4 0 4.7-2.4 4.9-3.7H12z"/>
                <path fill="#4285F4" d="M23.5 12c0-.8-.1-1.6-.2-2.4H12v4.5h6.5c-.3 1.7-1.4 3.1-3 4l4.7 3.7c2.7-2.5 4.3-6.1 4.3-9.8z"/>
                <path fill="#FBBC05" d="M12 24c3.6 0 6.6-1.2 8.8-3.2l-4.7-3.7c-1.3.9-3 1.4-4.1 1.4-3.2 0-5.9-2.2-6.8-5.2L.4 15.5C2.1 20.5 6.7 24 12 24z"/>
                <path fill="#34A853" d="M5.2 13.3c-.3-.9-.5-1.8-.5-2.8s.2-1.9.5-2.8L.4 6.5C-.5 8.6-1 10.7-1 12.9s.5 4.3 1.4 6.4l3.8-3.9z"/>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

          <div className="mt-10 text-center text-xs text-white/50">powered by Sui</div>
        </div>
      </section>
    </main>
  );
}