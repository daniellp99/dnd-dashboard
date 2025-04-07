"use client";

import { ReactNode, useMemo } from "react";
import { Layouts, Responsive, WidthProvider } from "react-grid-layout";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { MENU_BAR_POSITIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useQueryStates } from "nuqs";
import { searchParamsParsers } from "@/lib/searchParams";

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

  const [{ navbar, statusbar }] = useQueryStates(searchParamsParsers);

  return (
    <section
      className={cn(
        navbar === MENU_BAR_POSITIONS.top &&
          statusbar === MENU_BAR_POSITIONS.top &&
          "col-start-1 col-end-6 row-start-3 row-end-6",
        ((navbar === MENU_BAR_POSITIONS.top &&
          statusbar === MENU_BAR_POSITIONS.bottom) ||
          (navbar === MENU_BAR_POSITIONS.bottom &&
            statusbar === MENU_BAR_POSITIONS.top)) &&
          "col-start-1 col-end-6 row-start-2 row-end-5",
        navbar === MENU_BAR_POSITIONS.bottom &&
          statusbar === MENU_BAR_POSITIONS.bottom &&
          "col-start-1 col-end-6 row-start-1 row-end-4",
        navbar === MENU_BAR_POSITIONS.left &&
          statusbar === MENU_BAR_POSITIONS.left &&
          "col-start-3 col-end-6 row-start-1 row-end-6",
        navbar === MENU_BAR_POSITIONS.right &&
          statusbar === MENU_BAR_POSITIONS.right &&
          "col-start-1 col-end-4 row-start-1 row-end-6",
        ((navbar === MENU_BAR_POSITIONS.left &&
          statusbar === MENU_BAR_POSITIONS.right) ||
          (navbar === MENU_BAR_POSITIONS.right &&
            statusbar === MENU_BAR_POSITIONS.left)) &&
          "col-start-2 col-end-5 row-start-1 row-end-6",
        ((navbar === MENU_BAR_POSITIONS.top &&
          statusbar === MENU_BAR_POSITIONS.left) ||
          (navbar === MENU_BAR_POSITIONS.left &&
            statusbar === MENU_BAR_POSITIONS.top)) &&
          "col-start-2 col-end-6 row-start-2 row-end-6",
        ((navbar === MENU_BAR_POSITIONS.bottom &&
          statusbar === MENU_BAR_POSITIONS.left) ||
          (navbar === MENU_BAR_POSITIONS.left &&
            statusbar === MENU_BAR_POSITIONS.bottom)) &&
          "col-start-2 col-end-6 row-start-1 row-end-5",
        ((navbar === MENU_BAR_POSITIONS.top &&
          statusbar === MENU_BAR_POSITIONS.right) ||
          (navbar === MENU_BAR_POSITIONS.right &&
            statusbar === MENU_BAR_POSITIONS.top)) &&
          "col-start-1 col-end-5 row-start-2 row-end-6",
        ((navbar === MENU_BAR_POSITIONS.bottom &&
          statusbar === MENU_BAR_POSITIONS.right) ||
          (navbar === MENU_BAR_POSITIONS.right &&
            statusbar === MENU_BAR_POSITIONS.bottom)) &&
          "col-start-1 col-end-5 row-start-1 row-end-5",
      )}
    >
      <ResponsiveGridLayout
        isBounded
        draggableHandle=".draggable-handle"
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
    </section>
  );
}
