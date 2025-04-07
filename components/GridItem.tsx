import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { GripIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const gridItemVariants = cva("", {
  variants: {
    handlePosition: {
      topLeft: "top-1 left-1",
      topRight: "top-1 right-1",
      bottomLeft: "bottom-1 left-1",
    },
  },

  defaultVariants: {
    handlePosition: "topLeft",
  },
});

export default function GridItem({
  children,
  handlePosition,
}: { children: React.ReactNode } & VariantProps<typeof gridItemVariants>) {
  return (
    <Card variant="item" className="relative">
      <Button
        size="icon"
        variant="ghost"
        className={cn(
          gridItemVariants({ handlePosition }),
          "draggable-handle absolute size-5 hover:cursor-grab active:cursor-grabbing",
        )}
      >
        <GripIcon size={20} />
      </Button>
      {children}
    </Card>
  );
}
