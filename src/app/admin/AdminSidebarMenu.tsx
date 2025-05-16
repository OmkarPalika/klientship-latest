import React from "react";
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { Home, Layers, Users, Settings } from "lucide-react";

export default function AdminSidebarMenu({ onNavigate }: { onNavigate?: (section: string) => void }) {
  const { state } = useSidebar();
  const [activeSection, setActiveSection] = React.useState<string>("dashboard");
  const handleNavigate = (section: string) => {
    setActiveSection(section);
    onNavigate?.(section);
  };
  return (
    <SidebarContent className="p-2">
      <SidebarHeader className="mb-2">
        {state !== "collapsed" && (
          <span className="text-lg font-bold transition-all duration-200">Admin Panel</span>
        )}
      </SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton variant={activeSection === "dashboard" ? "default" : "outline"} onClick={() => handleNavigate("dashboard")} tooltip="Dashboard">
            <Home className="mr-2" />
            {state !== "collapsed" && "Dashboard"}
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton variant={activeSection === "services" ? "default" : "outline"} onClick={() => handleNavigate("services")} tooltip="Services">
            <Layers className="mr-2" />
            {state !== "collapsed" && "Services"}
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton variant={activeSection === "users" ? "default" : "outline"} onClick={() => handleNavigate("users")} tooltip="Users">
            <Users className="mr-2" />
            {state !== "collapsed" && "Users"}
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarSeparator />
        <SidebarMenuItem>
          <SidebarMenuButton variant={activeSection === "settings" ? "default" : "outline"} onClick={() => handleNavigate("settings")} tooltip="Settings">
            <Settings className="mr-2" />
            {state !== "collapsed" && "Settings"}
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
  );
}
