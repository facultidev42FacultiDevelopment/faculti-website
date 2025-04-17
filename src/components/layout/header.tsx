"use client";

import { Bell, User, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchBar from "@/components/layout/search-bar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { useSidebar } from "../custom/app-sidebar";

export default function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="w-full bg-background/85 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60 border-b border-border/15 shadow-md transition-colors duration-200 h-16">
      <div className="h-full flex items-center justify-between px-5 md:px-6 lg:px-8">
        <div className="flex items-center gap-3 w-full max-w-[650px]">
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden h-10 w-10 rounded-full bg-background/95 border-border/40 shadow hover:shadow-md transition-shadow duration-200"
            onClick={toggleSidebar}
          >
            <Menu className="h-5 w-5 text-foreground/80" />
          </Button>
          
          <div className="w-full">
            <SearchBar />
          </div>
        </div>

        <div className="flex items-center space-x-3 md:space-x-4 pr-3">
          <Button 
            variant="outline" 
            size="icon" 
            className="relative rounded-full h-10 w-10 bg-background/95 border-border/40 shadow hover:shadow-md transition-shadow duration-200"
          >
            <Bell className="h-5 w-5 text-foreground/80" />
            <motion.span 
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: [0.8, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-primary shadow-glow"
            />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2 pl-1.5 pr-2 rounded-full bg-background/95 border-border/40 shadow hover:shadow-md transition-shadow duration-200 h-10"
              >
                <Avatar className="h-7 w-7">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
                  <AvatarFallback className="bg-primary/10 text-primary">SC</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={6} alignOffset={-5} className="w-56 bg-card/95 backdrop-blur-lg border-border/30 shadow-xl rounded-xl py-1.5">
              <DropdownMenuLabel className="font-normal px-3 py-2">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">shadcn</p>
                  <p className="text-xs leading-none text-muted-foreground">m@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="my-1 opacity-70" />
              <DropdownMenuItem className="cursor-pointer px-3 py-2 hover:bg-accent/60 transition-colors duration-150 focus:bg-accent/70">
                <User className="mr-2.5 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer px-3 py-2 hover:bg-accent/60 transition-colors duration-150 focus:bg-accent/70">
                <Settings className="mr-2.5 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="my-1 opacity-70" />
              <DropdownMenuItem className="cursor-pointer px-3 py-2 text-destructive focus:bg-destructive/10 focus:text-destructive hover:bg-destructive/5 transition-colors duration-150">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}