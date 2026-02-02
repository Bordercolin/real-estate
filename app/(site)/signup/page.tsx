import React from "react";
import Container from "../../components/layout/Container";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="py-12">
      <Container className="max-w-md">
        <h1 className="tracking-tight">Sign up</h1>
        <p className="mt-2 text-sm text-black/70">
          Placeholder auth UI. We’ll connect backend auth later.
        </p>

        <Card className="mt-6 p-6">
          <form className="grid gap-4">
            <label>
              <div className="text-xs font-semibold text-black/70">Name</div>
              <input className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/20" />
            </label>
            <label>
              <div className="text-xs font-semibold text-black/70">Email</div>
              <input className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/20" />
            </label>
            <label>
              <div className="text-xs font-semibold text-black/70">Password</div>
              <input
                type="password"
                className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/20"
              />
            </label>
            <Button type="button" className="w-full">
              Create account
            </Button>
            <div className="text-center text-xs text-black/60">
              Already have an account?{" "}
              <Link className="font-semibold hover:underline underline-offset-4" href="/login">
                Login
              </Link>
            </div>
          </form>
        </Card>
      </Container>
    </div>
  );
}



