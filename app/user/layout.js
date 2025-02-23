import { ThemeToggle } from "@/components/customUi/ThemeToggle";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import UserSidebar from "@/components/sidebars/UserSidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function UserLayout({ children }) {
  return (
    <SidebarProvider>
      <UserSidebar />
      <section className="flex-1 px-8 ">
        <section className="flex gap-4 items-center justify-between my-2">
          <section className="flex gap-4 items-center">
            <SidebarTrigger />
            <Breadcrumbs />
          </section>
          <section>
            <ThemeToggle />
          </section>
        </section>
        <Separator />
        {/* <UserNavbar>
          <SidebarTrigger />
        </UserNavbar> */}
        {children}
      </section>
    </SidebarProvider>
  );
}
