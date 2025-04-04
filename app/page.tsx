import DashboardLayout from "@/components/DashboardLayout";
import GridItem from "@/components/GridItem";

import { DEFAULT_LAYOUTS } from "@/lib/constants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      <header>header</header>

      <DashboardLayout
        layouts={{
          lg: DEFAULT_LAYOUTS.fourColumns,
          md: DEFAULT_LAYOUTS.fourColumns,
          sm: DEFAULT_LAYOUTS.twoColumns,
          xs: DEFAULT_LAYOUTS.twoColumns,
          xxs: DEFAULT_LAYOUTS.twoColumns,
        }}
      >
        <GridItem key="card-2" handlePosition="topRight">
          2
        </GridItem>
        <GridItem key="card-3" handlePosition="topRight">
          3
        </GridItem>
        <GridItem key="card-4" handlePosition="topRight">
          4
        </GridItem>
        <GridItem key="card-5" handlePosition="topRight">
          5
        </GridItem>
        <GridItem key="card-6" handlePosition="topRight">
          6
        </GridItem>
        <GridItem key="card-7" handlePosition="topRight">
          7
        </GridItem>
        <GridItem key="card-8" handlePosition="topRight">
          8
        </GridItem>
        <GridItem key="card-9" handlePosition="topRight">
          9
        </GridItem>
        <GridItem key="card-10" handlePosition="topRight">
          10
        </GridItem>
      </DashboardLayout>
      <footer className="h-9">footer</footer>
    </main>
  );
}
