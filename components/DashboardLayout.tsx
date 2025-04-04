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
      cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 }}
      containerPadding={[0, 0]}
      margin={[0, 0]}
      rowHeight={36}
    >
      {children}
    </ResponsiveGridLayout>
  );
}
