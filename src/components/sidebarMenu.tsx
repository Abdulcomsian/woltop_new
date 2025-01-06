import { useState } from 'react';
import React  from 'react';
import { Button } from './ui/button';
// import { cn } from '~/lib/cn';
import classNames from "classnames";
import Home from '~/app/pages/Home';
// import { cn } from "~/components/ui/utils"; // Utility for conditional class names, if needed
import { SidebarMenuItem, SidebarMenuButton, SidebarMenuAction } from "~/components/ui/sidebar";
// import { SidebarMenuItem, SidebarMenuButton, SidebarMenuAction,DropdownMenuContent,
//      DropdownMenuTrigger , DropdownMenu , MoreHorizontal} from "~/components/ui/sidebar";


export default function sidebarMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
 
 <SidebarMenuItem>
  <SidebarMenuButton asChild>
    <a href="#">
      <Home />
      <span>Home</span>
    </a>
  </SidebarMenuButton>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <SidebarMenuAction>
        <MoreHorizontal />
      </SidebarMenuAction>
    </DropdownMenuTrigger>
    <DropdownMenuContent side="right" align="start">
      <DropdownMenuItem>
        <span>Edit Project</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span>Delete Project</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</SidebarMenuItem>

    </div>
  )
}
