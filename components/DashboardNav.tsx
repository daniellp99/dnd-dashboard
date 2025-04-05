import {
  ActivityIcon,
  BellIcon,
  ChevronDown,
  DollarSign,
  GlobeIcon,
  HandHelpingIcon,
  InfinityIcon,
  LandmarkIcon,
  MessageSquareIcon,
  RadarIcon,
  SearchIcon,
  TriangleIcon,
  UserIcon,
  WalletIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navLinks = [
  { name: "Discover", href: "#", icon: GlobeIcon },
  { name: "Pulse", href: "#", icon: ActivityIcon },
  { name: "Trackers", href: "#", icon: RadarIcon },
  { name: "Perpetuals", href: "#", icon: InfinityIcon },
  { name: "Yield", href: "#", icon: HandHelpingIcon },
  { name: "Portfolio", href: "#", icon: WalletIcon },
  { name: "Rewards", href: "#", icon: DollarSign },
];

export default function DashboardNav() {
  return (
    <header className="flex h-16 w-full flex-row items-center justify-between px-2 md:h-screen md:w-10 md:flex-col md:px-0 md:py-2">
      <div className="flex flex-row items-center gap-4 md:flex-col">
        <div className="mx-auto flex items-center gap-2">
          <TriangleIcon size={32} />
          <span className="text-xl font-bold md:hidden">
            AXIOM
            <span className="text-muted-foreground ml-0.5 text-xs font-normal">
              PRO
            </span>
          </span>
        </div>
        <nav className="hidden items-center gap-2 md:flex md:flex-col">
          {navLinks.map((link) => (
            <TooltipProvider key={link.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="p-1.5" variant="ghost" size="icon">
                    <link.icon size={20} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" align="center">
                  {link.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </nav>
      </div>
      <div className="flex flex-row items-center gap-2 md:flex-col">
        <div className="relative md:hidden">
          <SearchIcon className="text-muted-foreground absolute left-2 top-1/2 size-4 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by token or C..."
            className="w-52 rounded-md bg-[#1a1f27] py-1.5 pl-8 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
          />
        </div>
        <Button className="text-foreground rounded-full bg-blue-600 hover:bg-blue-700 md:order-last md:p-2 md:has-[>svg]:px-2.5">
          <span className="md:hidden">Deposit</span>
          <LandmarkIcon size={40} className="hidden md:block" />
        </Button>
        <div className="bg-secondary flex flex-row items-center rounded-full md:flex-col">
          <Button
            className="rounded-full p-1.5"
            variant="secondary"
            size="icon"
          >
            <BellIcon size={20} />
          </Button>
          <Button
            className="rounded-full p-1.5"
            variant="secondary"
            size="icon"
          >
            <MessageSquareIcon size={20} />
          </Button>
          <Button
            className="gap-0.5 rounded-full p-1.5"
            variant="secondary"
            size="icon"
          >
            0
            <ChevronDown size={20} className="text-muted-foreground" />
          </Button>
        </div>
        <Button className="rounded-full p-1.5" variant="secondary" size="icon">
          <UserIcon size={20} />
        </Button>
      </div>
    </header>
  );
}
