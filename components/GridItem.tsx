import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { GripIcon } from "lucide-react";

const gridItemVariants = cva(
  "absolute flex size-5 items-center justify-center  text-muted-foreground hover:cursor-grab active:cursor-grabbing",
  {
    variants: {
      handlePosition: {
        topLeft: "top-1 left-1",
        topRight: "top-1 right-1",
        bottomLeft: "bottom-1 left-1",
        bottomRight: "bottom-1 right-1",
      },
    },

    defaultVariants: {
      handlePosition: "topLeft",
    },
  },
);

export default function GridItem({
  children,
  handlePosition,
}: { children: React.ReactNode } & VariantProps<typeof gridItemVariants>) {
  return (
    <Card variant="item" className="relative size-full">
      <span className={cn(gridItemVariants({ handlePosition }))}>
        <GripIcon size={24} className="draggable-handle" />
      </span>
      {children}
    </Card>
  );
}
