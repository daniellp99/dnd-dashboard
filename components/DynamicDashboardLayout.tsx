"use client";

import dynamic from "next/dynamic";

const DynamicDashboardLayout = dynamic(
  () => import("@/components/DashboardLayout"),
  {
    ssr: false,
  },
);

export default DynamicDashboardLayout;
