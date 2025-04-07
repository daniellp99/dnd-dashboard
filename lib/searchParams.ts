import { createSearchParamsCache, parseAsStringEnum } from "nuqs/server";
import { MENU_BAR_POSITIONS } from "./constants";

export const searchParamsParsers = {
  navbar: parseAsStringEnum<MENU_BAR_POSITIONS>(
    Object.values(MENU_BAR_POSITIONS),
  ).withDefault(MENU_BAR_POSITIONS.top),
  statusbar: parseAsStringEnum<MENU_BAR_POSITIONS>(
    Object.values(MENU_BAR_POSITIONS),
  ).withDefault(MENU_BAR_POSITIONS.bottom),
};

export const searchParamsCache = createSearchParamsCache(searchParamsParsers);
