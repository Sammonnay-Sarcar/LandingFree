import React from 'react'
import Image from 'next/image'
import next from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldError
} from "@/components/ui/field"
import { Input } from "@/components/ui/input" 
import { Button } from '@/components/ui/button';

export default function Home()  {
  const user = true;
  return (
    <>
    {user &&<FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input id="username" type="text" placeholder="John Doe" />
            <FieldError>
              Please recheck your username
            </FieldError>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <FieldDescription>
              Must be at least 8 characters long.
            </FieldDescription>
            <Input id="password" type="password" placeholder="********" />
          </Field>
        </FieldGroup>
      </FieldSet>}
      </>
  );
}
