"use client";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";

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
        <LoginForm />
      </section>
    </main>
  );
}