"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  return (
    <div className="w-full min-h-screen relative">
      {/* Background Image */}
      <Image
        src="https://illustrations.popsy.co/amber/app-launch.svg"
        alt="Register page background"
        fill
        className="object-cover opacity-20"
      />

      {/* Foreground Card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-lg">
          <CardHeader className="text-center">
            <h2 className="text-2xl font-semibold">Register</h2>
            <CardDescription>Create an account to get started</CardDescription>
          </CardHeader>

          <CardContent className="mt-4 space-y-4">
            {/* Username Field */}
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Field */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>

            {/* Password Field */}
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                required
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4 mt-4">
            <Button className="w-full">Register</Button>
            <Button
              variant="secondary"
              className="w-full"
              onClick={handleLoginRedirect}
            >
              Login Instead
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
