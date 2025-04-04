import DashboardLayout from "@/components/DashboardLayout";
import GridItem from "@/components/GridItem";
import ReactGridLayout from "react-grid-layout";

export default function Home() {
  // TODO: read layouts from local storage or provide the follows as default
  const layoutLG: ReactGridLayout.Layout[] = [
    { i: "card-2", x: 0, y: 0, w: 4, h: 1 },
    { i: "card-3", x: 0, y: 1, w: 3, h: 2.5 },
    { i: "card-6", x: 3, y: 2.5, w: 1, h: 2.5 },
    { i: "card-4", x: 0, y: 5, w: 3, h: 8 },
    { i: "card-7", x: 3, y: 5, w: 1, h: 5 },
    { i: "card-8", x: 3, y: 5, w: 1, h: 2 },
    { i: "card-9", x: 3, y: 5, w: 1, h: 1 },
    { i: "card-5", x: 0, y: 13, w: 3, h: 8 },
    { i: "card-10", x: 3, y: 13, w: 1, h: 8 },
  ];
  const layoutSM: ReactGridLayout.Layout[] = [
    { i: "card-2", x: 0, y: 0, w: 2, h: 1 },
    { i: "card-3", x: 0, y: 1, w: 1, h: 1.5 },
    { i: "card-6", x: 1, y: 2.5, w: 1, h: 1.5 },
    { i: "card-4", x: 0, y: 4, w: 1, h: 6 },
    { i: "card-7", x: 1, y: 4, w: 1, h: 3 },
    { i: "card-8", x: 1, y: 4, w: 1, h: 2 },
    { i: "card-9", x: 1, y: 4, w: 1, h: 1 },
    { i: "card-5", x: 0, y: 10, w: 1, h: 6 },
    { i: "card-10", x: 1, y: 10, w: 1, h: 6 },
  ];
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      <header>header</header>

      <DashboardLayout
        layouts={{
          lg: layoutLG,
          md: layoutLG,
          sm: layoutSM,
          xs: layoutSM,
          xxs: layoutSM,
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
