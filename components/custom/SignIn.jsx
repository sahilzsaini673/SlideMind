"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";

function SignIn() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      console.log("User Image URL:", session.user.image);
    }
  }, [status, session]);

  if (!session) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="text-white border border-gray-900 cursor-pointer">
            Sign in
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="flex flex-col items-center justify-center text-center py-12 border-grey-900">
          <AlertDialogHeader className="flex flex-col items-center justify-center text-center">
            <AlertDialogTitle className="text-white text-center text-4xl">
              SlideMind
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-gray-300 text-center mt-2">
              To use SlideMind you must log into an existing account or create
              one using one of the options below.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex !flex-col justify-center mt-6">
            <AlertDialogAction
              onClick={() => signIn("github")}
              className="w-full md:w-72 p-5"
            >
              Continue With GitHub
            </AlertDialogAction>
            <AlertDialogAction
              onClick={() => signIn("google")}
              className="w-full xl:mt-2 md:w-72 p-5"
            >
              Continue With Google
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  } else {
    return (
      <>
        <Button
          onClick={() => signOut()}
          className="text-white border border-gray-900 cursor-pointer"
        >
          Sign Out
        </Button>
      </>
    );
  }
}

export default SignIn;
