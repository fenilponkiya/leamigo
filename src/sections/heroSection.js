import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import React from "react";

export const HeroSection = (isBadge) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="text-foreground font-normal hover:text-primary "
                >
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="text-foreground font-normal hover:text-primary"
                >
                  Tours
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="text-foreground font-normal hover:text-primary"
                >
                  Phuket
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h6 className="text-sm font-normal text-left block sm:text-left mt-2">
          THE 10 BEST Phuket Tours & Excursions
        </h6>
      </div>
      {isBadge && (
        <>
          <Badge className="bg-[var(--chart-5)] text-[var(--primary)] mr-2">
            Bestseller
          </Badge>
          <Badge className={"bg-[var(--muted)]"}>Free cancellation</Badge>
        </>
      )}
    </>
  );
};
