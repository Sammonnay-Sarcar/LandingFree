"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen relative">
      {/* Background Image */}
      <Image
        src="https://illustrations.popsy.co/amber/app-launch.svg"
        alt="Login page background"
        fill
        className="object-cover opacity-20"
      />

      {/* Foreground Card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold">Login</CardTitle>
            <CardDescription>
              Enter your email and password to login to your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-4">
              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm text-blue-600 hover:underline underline-offset-4"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-4 mt-4">
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
            <Link href="/register" className="w-full">
              <Button variant="secondary" className="w-full">
                Sign Up Instead
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
