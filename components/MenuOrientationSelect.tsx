import { MENU_BAR_POSITIONS } from "@/lib/constants";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import {
  LayoutIcon,
  PanelTopIcon,
  PanelBottomIcon,
  PanelLeftIcon,
  PanelRightIcon,
} from "lucide-react";
import { SelectProps } from "@radix-ui/react-select";

export default function MenuOrientationSelect({
  label,
  ...props
}: SelectProps & { label: string }) {
  return (
    <Select {...props}>
      <SelectTrigger size="sm">
        <SelectValue placeholder={<LayoutIcon size={20} />} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          <SelectItem value={MENU_BAR_POSITIONS.top}>
            <PanelTopIcon size={20} />
          </SelectItem>
          <SelectItem value={MENU_BAR_POSITIONS.bottom}>
            <PanelBottomIcon size={20} />
          </SelectItem>
          <SelectItem value={MENU_BAR_POSITIONS.left}>
            <PanelLeftIcon size={20} />
          </SelectItem>
          <SelectItem value={MENU_BAR_POSITIONS.right}>
            <PanelRightIcon size={20} />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
