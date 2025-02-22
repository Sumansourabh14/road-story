import UserSidebar from "@/components/sidebars/UserSidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function UserLayout({ children }) {
  return (
    <SidebarProvider>
      <UserSidebar />
      <section>
        <SidebarTrigger />
        <Separator />
        {/* <UserNavbar>
          <SidebarTrigger />
        </UserNavbar> */}
        {children}
      </section>
    </SidebarProvider>
  );
}
