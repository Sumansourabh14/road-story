"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import React from "react";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter(Boolean);
  let breadcrumbPath = "";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathnames.map((path, index) => {
          breadcrumbPath = breadcrumbPath + `/${path}`;

          return (
            <React.Fragment key={path}>
              {index === pathnames.length - 1 ? (
                <BreadcrumbItem>
                  <BreadcrumbPage>{path}</BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={breadcrumbPath}>
                      {path}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
