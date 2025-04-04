"use client";

import { ReactNode, useMemo } from "react";
import { Layouts, Responsive, WidthProvider } from "react-grid-layout";

import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function DashboardLayout({
  children,
  layouts,
}: {
  children: ReactNode;
  layouts: Layouts;
}) {
  const ResponsiveGridLayout = useMemo(() => WidthProvider(Responsive), []);

  const [storageLayouts, setStorageLayouts] = useLocalStorage<Layouts>(
    "layouts",
    layouts,
  );

  return (
    <ResponsiveGridLayout
      isBounded
      draggableHandle=".draggable-handle"
      className="grow"
      layouts={storageLayouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 }}
      containerPadding={[0, 0]}
      margin={[0, 0]}
      rowHeight={36}
      onLayoutChange={(_, layouts) => {
        setStorageLayouts(layouts);
      }}
    >
      {children}
    </ResponsiveGridLayout>
  );
}
