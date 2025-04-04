"use client";

import { ReactNode } from "react";
import { Layouts, Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function DashboardLayout({
  children,
  layouts,
}: {
  children: ReactNode;
  layouts: Layouts;
}) {
  return (
    <ResponsiveGridLayout
      draggableCancel=".not-draggable"
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      containerPadding={{
        xxs: [15.5, 15.5],
        xs: [15.5, 15.5],
        sm: [16, 16],
        md: [16, 16],
      }}
      margin={{
        xxs: [15.5, 15.5],
        xs: [15.5, 15.5],
        sm: [16, 16],
        md: [16, 16],
      }}
    >
      {children}
    </ResponsiveGridLayout>
  );
}
