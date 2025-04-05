import {
  BellIcon,
  ChevronDownIcon,
  Link2Icon,
  ListRestartIcon,
  MessageSquareIcon,
  Wallet2Icon,
  XIcon,
} from "lucide-react";
import { Button } from "./ui/button";

export default function StatusBar() {
  return (
    <div className="flex h-16 w-full flex-row items-center justify-between gap-2 divide-x-2 px-2 md:h-screen md:w-10 md:flex-col md:divide-x-0 md:divide-y-2 md:px-0 md:py-2">
      <div className="py-2 pr-2 md:pb-2 md:pr-0">
        <Button
          size="sm"
          className="border-blue-800 bg-blue-700/30 text-xs text-blue-400"
        >
          <ListRestartIcon size={16} />
          <span className="md:hidden">PRESET 1</span>
        </Button>
      </div>
      <div className="flex flex-row items-center gap-2 md:flex-col">
        <Button variant="ghost" size="sm">
          <Wallet2Icon className="size-3" />
          <span className="text-sm md:hidden">Wallet Tracker</span>
        </Button>
        <Button variant="ghost" size="sm">
          <XIcon className="size-3" />
          <span className="text-sm md:hidden">Twitter Tracker</span>
        </Button>
      </div>
      <div className="mx-2 flex grow flex-row items-center justify-between gap-2 md:mx-0 md:my-2 md:flex-col">
        <div className="flex flex-row items-center gap-2.5 text-sm md:flex-col">
          <span className="text-yellow-500">$83K</span>
          <span className="hidden text-blue-400 md:block">$1795</span>
          <span className="text-green-500">$119.2</span>
        </div>
        <div className="flex items-center p-2">
          <span className="mr-1 h-2 w-2 rounded-full bg-[#12af80]"></span>
          <span className="sr-only">Connection is stable</span>
        </div>
      </div>
      <div className="flex flex-row items-center md:flex-col">
        <Button variant="ghost" size="sm">
          <span className="text-sm">US</span>
          <ChevronDownIcon className="size-2" />
        </Button>
        <Button variant="ghost" size="sm" className="text-xs">
          <BellIcon className="size-3" />
        </Button>
        <Button variant="ghost" size="sm" className="text-xs">
          <MessageSquareIcon className="size-3" />
        </Button>
        <Button variant="ghost" size="sm" className="text-xs">
          <Link2Icon className="size-3" />
        </Button>
        <Button variant="ghost" size="sm" className="text-xs">
          <MessageSquareIcon className="size-3 text-blue-400" />
        </Button>
      </div>
    </div>
  );
}
