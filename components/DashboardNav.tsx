"use client";
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

import { MENU_BAR_POSITIONS } from "@/lib/constants";
import { searchParamsParsers } from "@/lib/searchParams";
import { cn } from "@/lib/utils";
import { useQueryStates } from "nuqs";
import MenuOrientationSelect from "./MenuOrientationSelect";

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
  const [{ navbar, statusbar }, setPositions] =
    useQueryStates(searchParamsParsers);
  return (
    <header
      className={cn(
        "flex items-center justify-between",
        navbar === MENU_BAR_POSITIONS.top &&
          "col-start-1 col-end-6 row-start-1 row-end-2 flex-row px-2",
        navbar === MENU_BAR_POSITIONS.bottom &&
          "col-start-1 col-end-6 row-start-4 row-end-5 flex-row px-2",
        navbar === MENU_BAR_POSITIONS.bottom &&
          statusbar !== MENU_BAR_POSITIONS.bottom &&
          "col-start-1 col-end-6 row-start-5 row-end-6 flex-row px-2",
        navbar === MENU_BAR_POSITIONS.left &&
          "col-start-1 col-end-2 row-start-1 row-end-6 flex-col px-0 py-2",
        navbar === MENU_BAR_POSITIONS.right &&
          "col-start-4 col-end-5 row-start-1 row-end-6 flex-col px-0 py-2",
        navbar === MENU_BAR_POSITIONS.right &&
          statusbar !== MENU_BAR_POSITIONS.right &&
          "col-start-5 col-end-6 row-start-1 row-end-6 flex-col px-0 py-2",
        navbar === MENU_BAR_POSITIONS.left &&
          statusbar === MENU_BAR_POSITIONS.top &&
          "col-start-1 col-end-2 row-start-2 row-end-6 flex-col px-0 py-2",
        navbar === MENU_BAR_POSITIONS.left &&
          statusbar === MENU_BAR_POSITIONS.bottom &&
          "col-start-1 col-end-2 row-start-2 row-end-5 flex-col px-0 py-2",
        navbar === MENU_BAR_POSITIONS.right &&
          statusbar === MENU_BAR_POSITIONS.top &&
          "col-start-5 col-end-6 row-start-2 row-end-6 flex-col px-0 py-2",
        navbar === MENU_BAR_POSITIONS.right &&
          statusbar === MENU_BAR_POSITIONS.bottom &&
          "col-start-5 col-end-6 row-start-2 row-end-5 flex-col px-0 py-2",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-4",
          (navbar === MENU_BAR_POSITIONS.top ||
            navbar === MENU_BAR_POSITIONS.bottom) &&
            "flex-row",
          (navbar === MENU_BAR_POSITIONS.left ||
            navbar === MENU_BAR_POSITIONS.right) &&
            "flex-col",
        )}
      >
        <div className="mx-auto flex items-center gap-2">
          <TriangleIcon size={32} />
          <span className="text-xl font-bold md:hidden">
            AXIOM
            <span className="text-muted-foreground ml-0.5 text-xs font-normal">
              PRO
            </span>
          </span>
        </div>
        <nav
          className={cn(
            "hidden items-center gap-2 md:flex",
            (navbar === MENU_BAR_POSITIONS.top ||
              navbar === MENU_BAR_POSITIONS.bottom) &&
              "flex-row",
            (navbar === MENU_BAR_POSITIONS.left ||
              navbar === MENU_BAR_POSITIONS.right) &&
              "flex-col",
          )}
        >
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
      <div
        className={cn(
          "flex items-center gap-2",
          (navbar === MENU_BAR_POSITIONS.top ||
            navbar === MENU_BAR_POSITIONS.bottom) &&
            "flex-row",
          (navbar === MENU_BAR_POSITIONS.left ||
            navbar === MENU_BAR_POSITIONS.right) &&
            "flex-col",
        )}
      >
        <div
          className={cn(
            "relative",
            (navbar === MENU_BAR_POSITIONS.left ||
              navbar === MENU_BAR_POSITIONS.right) &&
              "hidden",
          )}
        >
          <SearchIcon className="text-muted-foreground absolute left-2 top-1/2 size-4 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by token or C..."
            className="w-52 rounded-md bg-[#1a1f27] py-1.5 pl-8 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
          />
        </div>
        <Button
          className={cn(
            "text-foreground rounded-full bg-blue-600 hover:bg-blue-700",
            (navbar === MENU_BAR_POSITIONS.left ||
              navbar === MENU_BAR_POSITIONS.right) &&
              "order-last p-2 has-[>svg]:px-2.5",
          )}
        >
          <span
            className={cn(
              (navbar === MENU_BAR_POSITIONS.left ||
                navbar === MENU_BAR_POSITIONS.right) &&
                "hidden",
            )}
          >
            Deposit
          </span>
          <LandmarkIcon
            size={40}
            className={cn(
              "hidden",
              (navbar === MENU_BAR_POSITIONS.left ||
                navbar === MENU_BAR_POSITIONS.right) &&
                "block",
            )}
          />
        </Button>
        <div
          className={cn(
            "bg-secondary flex items-center rounded-full",
            (navbar === MENU_BAR_POSITIONS.top ||
              navbar === MENU_BAR_POSITIONS.bottom) &&
              "flex-row",
            (navbar === MENU_BAR_POSITIONS.left ||
              navbar === MENU_BAR_POSITIONS.right) &&
              "flex-col",
          )}
        >
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
            className="rounded-full p-1.5"
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
        <MenuOrientationSelect
          defaultValue={navbar}
          onValueChange={(value) =>
            setPositions({ navbar: value as MENU_BAR_POSITIONS })
          }
          label="Navbar Position"
        />
      </div>
    </header>
  );
}
