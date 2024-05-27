"use client";

import { Button } from "@components/ui/button";
import Image from "next/image";
import { MuseoModerno } from "next/font/google";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const museoModerno = MuseoModerno({
  subsets: ["latin"],
});

const NavBar = () => {
  const isUserLoggedIn = true;

  return (
    <>
      <header className="spark-navbar">
        <Link href="/about" className="spark-flex-row gap-1">
          <Image
            src={"/assets/images/spark.png"}
            className="spark-logo w-12 sm:w-16"
            alt="logo"
            width={60}
            height={0}
          />

          <span
            className={`${museoModerno.className} font-semibold text-2xl sm:text-3xl -mx-2 drop-shadow-lg`}
          >
            Spark
          </span>
        </Link>
        <div className="spark-flex-row gap-3">
          {isUserLoggedIn ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Menu color="#000000" className="flex sm:hidden" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border-none mx-5">
                  <DropdownMenuLabel>Menu</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Create Post</DropdownMenuItem>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="outline"
                className="shadow-lg shadow-neutral-200 scale-75 md:scale-100 -mx-3 md:mx-0 hidden sm:flex"
              >
                Login
              </Button>
              <Button
                className="shadow-lg shadow-neutral-200 scale-75 md:scale-100 hidden sm:flex"
                variant={"default"}
              >
                Register
              </Button>
              <Avatar className="scale-90 sm:scale-125 sm:mx-3">
                <AvatarImage className="" src="https://github.com/shadcn.png" />
                <AvatarFallback>Profile</AvatarFallback>
              </Avatar>
            </>
          ) : (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Menu color="#000000" className="sm:flex md:hidden" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border-none mx-5">
                  <DropdownMenuLabel>Menu</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Login</DropdownMenuItem>
                  <DropdownMenuItem>Register</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="outline"
                className="shadow-lg shadow-neutral-200 hidden md:flex"
              >
                Login
              </Button>
              <Button
                className="shadow-lg shadow-neutral-200 hidden md:flex"
                variant={"default"}
              >
                Register
              </Button>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default NavBar;