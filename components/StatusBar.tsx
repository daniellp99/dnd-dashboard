"use client";
import { MENU_BAR_POSITIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  BellIcon,
  ChevronDownIcon,
  Link2Icon,
  ListRestartIcon,
  MessageSquareIcon,
  Wallet2Icon,
  XIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import MenuOrientationSelect from "@/components/MenuOrientationSelect";
import { searchParamsParsers } from "@/lib/searchParams";
import { useQueryStates } from "nuqs";

export default function StatusBar() {
  const [{ navbar, statusbar }, setPositions] =
    useQueryStates(searchParamsParsers);

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2",
        statusbar === MENU_BAR_POSITIONS.top &&
          navbar === MENU_BAR_POSITIONS.left &&
          "col-start-2 col-end-6 row-start-1 row-end-2 flex-row divide-x-2 px-2",
        statusbar === MENU_BAR_POSITIONS.top &&
          navbar === MENU_BAR_POSITIONS.right &&
          "col-start-1 col-end-5 row-start-1 row-end-2 flex-row divide-x-2 px-2",
        statusbar === MENU_BAR_POSITIONS.top &&
          navbar === MENU_BAR_POSITIONS.top &&
          "col-start-1 col-end-6 row-start-2 row-end-3 flex-row divide-x-2 px-2",
        statusbar === MENU_BAR_POSITIONS.top &&
          navbar === MENU_BAR_POSITIONS.bottom &&
          "col-start-1 col-end-6 row-start-1 row-end-2 flex-row divide-x-2 px-2",

        statusbar === MENU_BAR_POSITIONS.bottom &&
          navbar === MENU_BAR_POSITIONS.left &&
          "col-start-2 col-end-6 row-start-5 row-end-6 flex-row divide-x-2 px-2",
        statusbar === MENU_BAR_POSITIONS.bottom &&
          navbar === MENU_BAR_POSITIONS.right &&
          "col-start-1 col-end-5 row-start-5 row-end-6 flex-row divide-x-2 px-2",
        ((statusbar === MENU_BAR_POSITIONS.bottom &&
          navbar === MENU_BAR_POSITIONS.top) ||
          (statusbar === MENU_BAR_POSITIONS.bottom &&
            navbar === MENU_BAR_POSITIONS.bottom)) &&
          "col-start-1 col-end-6 row-start-5 row-end-6 flex-row divide-x-2 px-2",

        statusbar === MENU_BAR_POSITIONS.left &&
          navbar === MENU_BAR_POSITIONS.top &&
          "col-start-1 col-end-2 row-start-2 row-end-6 flex-col divide-x-0 divide-y-2 px-0 py-2",
        statusbar === MENU_BAR_POSITIONS.left &&
          navbar === MENU_BAR_POSITIONS.bottom &&
          "col-start-1 col-end-2 row-start-1 row-end-5 flex-col divide-x-0 divide-y-2 px-0 py-2",
        statusbar === MENU_BAR_POSITIONS.left &&
          navbar === MENU_BAR_POSITIONS.left &&
          "col-start-2 col-end-3 row-start-1 row-end-6 flex-col divide-x-0 divide-y-2 px-0 py-2",
        statusbar === MENU_BAR_POSITIONS.left &&
          navbar === MENU_BAR_POSITIONS.right &&
          "col-start-1 col-end-2 row-start-1 row-end-6 flex-col divide-x-0 divide-y-2 px-0 py-2",

        statusbar === MENU_BAR_POSITIONS.right &&
          navbar === MENU_BAR_POSITIONS.top &&
          "col-start-5 col-end-6 row-start-2 row-end-6 flex-col divide-x-0 divide-y-2 px-0 py-2",
        statusbar === MENU_BAR_POSITIONS.right &&
          navbar === MENU_BAR_POSITIONS.bottom &&
          "col-start-5 col-end-6 row-start-1 row-end-5 flex-col divide-x-0 divide-y-2 px-0 py-2",
      )}
    >
      <div
        className={cn(
          (statusbar === MENU_BAR_POSITIONS.top ||
            statusbar === MENU_BAR_POSITIONS.bottom) &&
            "py-2 pr-2",
          (statusbar === MENU_BAR_POSITIONS.left ||
            statusbar === MENU_BAR_POSITIONS.right) &&
            "pb-2 pr-0",
        )}
      >
        <Button
          size="sm"
          className="border-blue-800 bg-blue-700/30 text-xs text-blue-400"
        >
          <ListRestartIcon size={16} />
          <span
            className={cn(
              (statusbar === MENU_BAR_POSITIONS.top ||
                statusbar === MENU_BAR_POSITIONS.bottom) &&
                "inline-flex",
              (statusbar === MENU_BAR_POSITIONS.left ||
                statusbar === MENU_BAR_POSITIONS.right) &&
                "hidden",
            )}
          >
            PRESET 1
          </span>
        </Button>
      </div>
      <div
        className={cn(
          "flex items-center gap-2",
          (statusbar === MENU_BAR_POSITIONS.top ||
            statusbar === MENU_BAR_POSITIONS.bottom) &&
            "flex-row",
          (statusbar === MENU_BAR_POSITIONS.left ||
            statusbar === MENU_BAR_POSITIONS.right) &&
            "flex-col",
        )}
      >
        <Button variant="ghost" size="sm">
          <Wallet2Icon className="size-3" />
          <span
            className={cn(
              (statusbar === MENU_BAR_POSITIONS.left ||
                statusbar === MENU_BAR_POSITIONS.right) &&
                "hidden",
            )}
          >
            Wallet Tracker
          </span>
        </Button>
        <Button variant="ghost" size="sm">
          <XIcon className="size-3" />
          <span
            className={cn(
              (statusbar === MENU_BAR_POSITIONS.left ||
                statusbar === MENU_BAR_POSITIONS.right) &&
                "hidden",
            )}
          >
            Twitter Tracker
          </span>
        </Button>
      </div>
      <div
        className={cn(
          "flex grow items-center justify-between gap-2",
          (statusbar === MENU_BAR_POSITIONS.top ||
            statusbar === MENU_BAR_POSITIONS.bottom) &&
            "mx-2 flex-row",
          (statusbar === MENU_BAR_POSITIONS.left ||
            statusbar === MENU_BAR_POSITIONS.right) &&
            "mx-0 my-2 flex-col",
        )}
      >
        <div
          className={cn(
            "flex items-center gap-2.5 text-sm",
            (statusbar === MENU_BAR_POSITIONS.top ||
              statusbar === MENU_BAR_POSITIONS.bottom) &&
              "flex-row",
            (statusbar === MENU_BAR_POSITIONS.left ||
              statusbar === MENU_BAR_POSITIONS.right) &&
              "flex-col",
          )}
        >
          <span className="text-yellow-500">$83K</span>
          <span className="hidden text-blue-400 md:block">$1795</span>
          <span className="text-green-500">$119.2</span>
        </div>
        <div className="flex items-center p-2">
          <span className="mr-1 h-2 w-2 rounded-full bg-[#12af80]"></span>
          <span className="sr-only">Connection is stable</span>
        </div>
      </div>
      <div
        className={cn(
          "flex items-center",
          (statusbar === MENU_BAR_POSITIONS.top ||
            statusbar === MENU_BAR_POSITIONS.bottom) &&
            "flex-row",
          (statusbar === MENU_BAR_POSITIONS.left ||
            statusbar === MENU_BAR_POSITIONS.right) &&
            "flex-col",
        )}
      >
        <Button variant="ghost" size="icon">
          US
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
        <MenuOrientationSelect
          defaultValue={statusbar}
          onValueChange={(value) =>
            setPositions({ statusbar: value as MENU_BAR_POSITIONS })
          }
          label="Status Bar Position"
        />
      </div>
    </div>
  );
}
