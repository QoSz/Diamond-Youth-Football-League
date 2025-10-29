"use client";

import { Button } from "@/components/ui/button";
import { User, Home } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 w-full items-center px-4">
          {/* Logo */}
          <div className="mr-4 flex-1 md:mr-8 md:flex-none">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center"
              aria-label="Diamond Youth Football League Home"
            >
              <Image
                src="/dyfl-logo.svg"
                alt="Diamond Youth Football League logo"
                width={200}
                height={200}
                priority
                className="block h-16 w-auto object-contain shrink-0"
                sizes="64px"
              />
              <span className="sr-only">Diamond Youth Football League</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-end space-x-4 md:flex md:space-x-6">
            <Link
              href="/"
              className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-foreground/80"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-foreground/80"
            >
              <User className="h-4 w-4" />
              <span>About</span>
            </Link>

            <Link
              href="/leagues"
              className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-foreground/80"
            >
              <Image src="/football.svg" alt="Leagues" width={16} height={16} />
              <span>Leagues</span>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[400px] border-b' : 'max-h-0'
          }`}
        >
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-foreground/80 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>

            <Link
              href="/about"
              className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-foreground/80 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User className="h-4 w-4" />
              <span>About Us</span>
            </Link>

            <Link
              href="/leagues"
              className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-foreground/80 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image src="/football.svg" alt="Leagues" width={16} height={16} />
              <span>Leagues</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
