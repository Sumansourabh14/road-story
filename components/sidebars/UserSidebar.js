"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Car,
  Edit,
  FileVideo,
  Home,
  Info,
  LayoutDashboard,
  Route,
  Speech,
  User2,
  Video,
} from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { NavUser } from "../navigation/NavUser";
import Image from "next/image";

const userItems = [
  {
    title: "Dashboard",
    url: "/user/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Trips",
    url: "/user/trips",
    icon: Route,
  },
  {
    title: "Profile",
    url: "/user/profile",
    icon: User2,
  },
  {
    title: "Update Profile",
    url: "/user/profile/update",
    icon: Edit,
  },
];

const platformItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Upload Video",
    url: "/upload-video",
    icon: FileVideo,
  },
  {
    title: "Videos",
    url: "/videos",
    icon: Video,
  },
  {
    title: "Discussions",
    url: "/discussions",
    icon: Speech,
  },
  {
    title: "Cars",
    url: "/cars",
    icon: Car,
  },
  {
    title: "About",
    url: "/about",
    icon: Info,
  },
];

const UserSidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link href="/">
          <Image
            src="/images/road-storyy-logo.png"
            width={30}
            height={30}
            alt="road story logo"
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>User-specific</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userItems.map((item) => (
                <SidebarMenuItem key={item.title} title={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {platformItems.map((item) => (
                <SidebarMenuItem key={item.title} title={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {!!user && (
        <SidebarFooter>
          <NavUser user={user} />
        </SidebarFooter>
      )}
    </Sidebar>
  );
};

export default UserSidebar;
