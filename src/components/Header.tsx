import React from 'react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Separator } from './ui/separator';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 bg-white dark:bg-black border-b border-black-100 dark:border-white-900">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-3xl font-display font-bold text-black dark:text-white">HELO</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/fleet" className="text-black dark:text-white hover:text-black-600 dark:hover:text-white-200">Fleet</a>
          <a href="/infrastructure" className="text-black dark:text-white hover:text-black-600 dark:hover:text-white-200">Infrastructure</a>
          <a href="/membership" className="text-black dark:text-white hover:text-black-600 dark:hover:text-white-200">Membership</a>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-black dark:text-white">
                More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <a href="/about" className="flex w-full">About Us</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/contact" className="flex w-full">Contact</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/careers" className="flex w-full">Careers</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button asChild variant="default">
            <a href="/register">Register Interest</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                <a href="/fleet" className="text-black dark:text-white hover:text-black-600 dark:hover:text-white-200 py-2">Fleet</a>
                <Separator />
                <a href="/infrastructure" className="text-black dark:text-white hover:text-black-600 dark:hover:text-white-200 py-2">Infrastructure</a>
                <Separator />
                <a href="/membership" className="text-black dark:text-white hover:text-black-600 dark:hover:text-white-200 py-2">Membership</a>
                <Separator />
                <a href="/about" className="text-black dark:text-white hover:text-black-600 dark:hover:text-white-200 py-2">About Us</a>
                <Separator />
                <a href="/contact" className="text-black dark:text-white hover:text-black-600 dark:hover:text-white-200 py-2">Contact</a>
                <Separator />
                <a href="/careers" className="text-black dark:text-white hover:text-black-600 dark:hover:text-white-200 py-2">Careers</a>
                <Separator />
                <Button asChild className="mt-4">
                  <a href="/register">Register Interest</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header; 