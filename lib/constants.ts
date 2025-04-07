export const DEFAULT_LAYOUTS = {
  fourColumns: [
    { i: "card-2", x: 0, y: 0, w: 4, h: 1, minH: 1, minW: 4 },
    { i: "card-3", x: 0, y: 1, w: 3, h: 2.5, minH: 2.5, minW: 3 },
    { i: "card-6", x: 3, y: 2.5, w: 1, h: 2.5, minH: 2.5, minW: 1 },
    { i: "card-4", x: 0, y: 5, w: 3, h: 8, minH: 8, minW: 3 },
    { i: "card-7", x: 3, y: 5, w: 1, h: 5, minH: 5, minW: 1 },
    { i: "card-8", x: 3, y: 5, w: 1, h: 2, minH: 2, minW: 1 },
    { i: "card-9", x: 3, y: 5, w: 1, h: 1, minH: 1, minW: 1 },
    { i: "card-5", x: 0, y: 13, w: 3, h: 8, minH: 8, minW: 3 },
    { i: "card-10", x: 3, y: 13, w: 1, h: 8, minH: 8, minW: 1 },
  ],
  twoColumns: [
    { i: "card-2", x: 0, y: 0, w: 2, h: 1, minH: 1, minW: 2 },
    { i: "card-3", x: 0, y: 1, w: 1, h: 1.5, minH: 1.5, minW: 1 },
    { i: "card-6", x: 1, y: 2.5, w: 1, h: 1.5, minH: 1.5, minW: 1 },
    { i: "card-4", x: 0, y: 4, w: 1, h: 6, minH: 6, minW: 1 },
    { i: "card-7", x: 1, y: 4, w: 1, h: 3, minH: 3, minW: 1 },
    { i: "card-8", x: 1, y: 4, w: 1, h: 2, minH: 2, minW: 1 },
    { i: "card-9", x: 1, y: 4, w: 1, h: 1, minH: 1, minW: 1 },
    { i: "card-5", x: 0, y: 10, w: 1, h: 6, minH: 6, minW: 1 },
    { i: "card-10", x: 1, y: 10, w: 1, h: 6, minH: 6, minW: 1 },
  ],
};

export enum MENU_BAR_POSITIONS {
  top = "top",
  bottom = "bottom",
  left = "left",
  right = "right",
}
