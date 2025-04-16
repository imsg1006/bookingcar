"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/SidebarAce";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconCar,
  IconCarSuv,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "../../../../lib/utils" 
import { BackgroundBoxesDemo } from "./Landing";  
import { Card, FocusCards } from "./focus-cards";
import { FocusCardsDemo } from "./Cards";
import Dashboard from "../dashboard";

export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard", 
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-full max-h-full flex-1 flex-col overflow-auto h-full rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen", 
      )}
    >
      <div className="fixed z-50 h-full " >

      <Sidebar open={open} setOpen={setOpen} >
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
             
          </div>
        </SidebarBody>
      </Sidebar>  
              </div>
      <div className="flex-col w-full ml-10 ">
      <BackgroundBoxesDemo/> 
      <Dashboard/>

      </div>
       
     </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    > 
       <IconCar/>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      > 
      Carvo
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href=""
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >  
    <IconCar/>
     </a>
  );
};

 
