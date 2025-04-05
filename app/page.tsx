import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChartLineIcon,
  ChevronDownIcon,
  ChevronsDownIcon,
  ClockIcon,
  ExternalLinkIcon,
  EyeIcon,
  FileTextIcon,
  GridIcon,
  LineChartIcon,
  Link2Icon,
  LockIcon,
  MoreHorizontalIcon,
  SettingsIcon,
  Share2Icon,
  StarIcon,
  SwitchCameraIcon,
  UserIcon,
} from "lucide-react";

import DashboardNav from "@/components/DashboardNav";
import DynamicDashboardLayout from "@/components/DynamicDashboardLayout";
import GridItem from "@/components/GridItem";
import StatusBar from "@/components/StatusBar";
import { Button } from "@/components/ui/button";

import { DEFAULT_LAYOUTS } from "@/lib/constants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      <DashboardNav />
      <DynamicDashboardLayout
        layouts={{
          lg: DEFAULT_LAYOUTS.fourColumns,
          md: DEFAULT_LAYOUTS.fourColumns,
          sm: DEFAULT_LAYOUTS.twoColumns,
          xs: DEFAULT_LAYOUTS.twoColumns,
          xxs: DEFAULT_LAYOUTS.twoColumns,
        }}
      >
        <GridItem key="card-2" handlePosition="topRight">
          <div className="mx-2 flex h-full items-center justify-start gap-2">
            <StarIcon size={16} />
            <ChartLineIcon size={16} />
          </div>
        </GridItem>
        <GridItem key="card-3" handlePosition="topRight">
          <div className="flex h-full items-center justify-between">
            <div className="flex items-center gap-2 px-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-500">
                <span className="font-bold text-white">₿</span>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="font-bold">Bitcoin</span>
                  <span className="ml-1 text-gray-400">Bitcoin</span>
                </div>
                <div className="flex items-center text-xs text-green-500">
                  <span>29d</span>
                  <Link2Icon className="ml-2 size-3" />
                  <EyeIcon className="ml-2 size-3" />
                  <MoreHorizontalIcon className="ml-2 size-3" />
                </div>
              </div>
              <div className="px-3">
                <div className="text-2xl font-bold">$30.2M</div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Price</span>
                  <span>$0.03</span>
                </div>
              </div>
              <div className="px-3">
                <div className="text-sm font-medium">Liquidity</div>
                <div className="text-sm">$1.26M</div>
              </div>
              <div className="px-3">
                <div className="text-sm font-medium">Supply</div>
                <div className="text-sm">1B</div>
              </div>
            </div>

            <div className="flex items-center px-3">
              <Button variant="ghost" size="sm" className="text-xs">
                <MoreHorizontalIcon className="size-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-xs">
                <Share2Icon className="size-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-xs">
                <StarIcon className="size-4" />
              </Button>
            </div>
          </div>
        </GridItem>
        <GridItem key="card-4" handlePosition="topRight">
          <div className="mr-7 flex flex-wrap items-center p-1 text-xs">
            <Button variant="ghost" size="sm" className="px-2 text-xs">
              1m
            </Button>
            <Button variant="ghost" size="sm" className="px-2 text-xs">
              <LineChartIcon className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" className="px-2 text-xs">
              <span>Indicators</span>
            </Button>
            <Button variant="ghost" size="sm" className="px-2 text-xs">
              <GridIcon className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center px-2 text-xs"
            >
              <span>Display Options</span>
              <ChevronDownIcon className="ml-1 size-3" />
            </Button>
            <Button variant="ghost" size="sm" className="px-2 text-xs">
              <span>Hide All Bubbles</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="px-2 text-xs text-blue-400"
            >
              <span>USD/SOL</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="px-2 text-xs text-blue-400"
            >
              <span>MarketCap/Price</span>
            </Button>
            <div className="ml-auto flex items-center">
              <Button variant="ghost" size="sm" className="px-2 text-xs">
                <span>Axiom</span>
                <ChevronsDownIcon className="ml-1 size-3" />
              </Button>
              <Button variant="ghost" size="icon" className="px-2 text-xs">
                <SettingsIcon className="size-3" />
              </Button>
              <Button variant="ghost" size="icon" className="px-2 text-xs">
                <ExternalLinkIcon className="size-3" />
              </Button>
              <Button variant="ghost" size="icon" className="px-2 text-xs">
                <EyeIcon className="size-3" />
              </Button>
            </div>
          </div>
          <div className="relative h-full flex-1 overflow-hidden bg-gray-900">
            <div className="absolute left-2 top-2 text-xs">
              <div className="font-medium">
                titcoin/USD on Raydium V4 · 1 · axiom.trade
              </div>
              <div className="text-gray-400">Volume 1.304K</div>
            </div>

            <div className="absolute right-2 top-2 text-xs">
              <div>36M</div>
              <div className="mt-4">34.8M</div>
              <div className="mt-4">34M</div>
              <div className="mt-4">33M</div>
              <div className="mt-4">32M</div>
              <div className="mt-4">31M</div>
              <div className="mt-4 text-red-500">30.2M</div>
            </div>

            <div className="flex h-full items-center justify-center">
              {/* Placeholder for the actual chart */}
              <div className="text-gray-500">
                <LineChartIcon className="mx-auto mb-4 h-24 w-24 opacity-20" />
                <div className="text-center">
                  Chart visualization would go here
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-between border-t border-gray-800 p-1 text-xs">
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="px-2 text-xs">
                  3m
                </Button>
                <Button variant="ghost" size="sm" className="px-2 text-xs">
                  1m
                </Button>
                <Button variant="ghost" size="sm" className="px-2 text-xs">
                  5d
                </Button>
                <Button variant="ghost" size="sm" className="px-2 text-xs">
                  1d
                </Button>
                <Button variant="ghost" size="sm" className="px-2 text-xs">
                  <ClockIcon className="size-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <div>12:53:46 (UTC)</div>
                <Button variant="ghost" size="sm" className="px-2 text-xs">
                  %
                </Button>
                <Button variant="ghost" size="sm" className="px-2 text-xs">
                  log
                </Button>
                <Button variant="ghost" size="sm" className="px-2 text-xs">
                  auto
                </Button>
              </div>
            </div>
          </div>
        </GridItem>
        <GridItem key="card-5" handlePosition="topRight">
          <div className="flex h-full flex-col">
            <div className="flex h-9 items-center justify-between text-sm">
              <span>Trades</span>
              <span>Positions</span>
              <span>Orders</span>
              <span>Holders (20194)</span>
              <span>Top Traders</span>
              <span>Dev Tokens</span>

              <div className="ml-auto flex items-center space-x-2 pr-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="border-blue-800 bg-blue-900/30 text-xs text-blue-400"
                >
                  <span className="mr-1">⚡</span>
                  <span>Instant Trade</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="border-gray-700 text-xs"
                >
                  <FileTextIcon className="mr-1 h-3 w-3" />
                  <span>Trades Panel</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="border-gray-700 text-xs"
                >
                  <span className="mr-1">🔍</span>
                  <span>DEV</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="border-gray-700 text-xs"
                >
                  <UserIcon className="mr-1 h-3 w-3" />
                  <span>YOU</span>
                </Button>
                <Button variant="ghost" size="sm" className="p-1 text-xs">
                  <MoreHorizontalIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="m-0 p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="p-2 text-left font-normal text-gray-400">
                        <div className="flex items-center">
                          <span>Age</span>
                          <ChevronDownIcon className="ml-1 h-3 w-3" />
                        </div>
                      </th>
                      <th className="p-2 text-left font-normal text-gray-400">
                        Time
                      </th>
                      <th className="p-2 text-left font-normal text-gray-400">
                        Type
                      </th>
                      <th className="p-2 text-left font-normal text-gray-400">
                        <div className="flex items-center">
                          <span>MC</span>
                          <ChevronDownIcon className="ml-1 h-3 w-3" />
                        </div>
                      </th>
                      <th className="p-2 text-left font-normal text-gray-400">
                        Amount
                      </th>
                      <th className="p-2 text-left font-normal text-gray-400">
                        <div className="flex items-center">
                          <span>Total USD</span>
                          <div className="ml-1 h-3 w-3 rounded-full border border-green-500"></div>
                        </div>
                      </th>
                      <th className="p-2 text-left font-normal text-gray-400">
                        Trader
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        age: "9s",
                        price: "$30.2M",
                        amount: "5.91K",
                        total: "$176.0",
                        trader: "F1G...UWK",
                      },
                      {
                        age: "10s",
                        price: "$30.2M",
                        amount: "7.89K",
                        total: "$238.4",
                        trader: "Bg1...ey8",
                      },
                      {
                        age: "20s",
                        price: "$30.2M",
                        amount: "7.89K",
                        total: "$238.4",
                        trader: "Bg1...ey8",
                      },
                      {
                        age: "20s",
                        price: "$30.2M",
                        amount: "6.99",
                        total: "$0.21",
                        trader: "F3q...wLr",
                      },
                      {
                        age: "22s",
                        price: "$30.2M",
                        amount: "39.48",
                        total: "$1.19",
                        trader: "yo1...FHA",
                      },
                    ].map((trade, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-800 hover:bg-gray-900"
                      >
                        <td className="p-2">{trade.age}</td>
                        <td className="p-2"></td>
                        <td className="p-2 text-green-500">Buy</td>
                        <td className="p-2">{trade.price}</td>
                        <td className="p-2">{trade.amount}</td>
                        <td className="p-2 text-green-500">{trade.total}</td>
                        <td className="p-2">
                          <div className="flex items-center">
                            <div className="mr-1 h-3 w-3 rounded-full bg-red-500"></div>
                            <span>{trade.trader}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="ml-1 p-0"
                            >
                              <EyeIcon className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="ml-1 p-0"
                            >
                              <StarIcon className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </GridItem>
        <GridItem key="card-6" handlePosition="topRight">
          <div className="flex h-full shrink items-center justify-evenly gap-2">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">5m Vol</span>
              <span className="text-sm">$23.6K</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Buys</span>
              <span className="text-sm text-green-500">51/$10.3K</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Sells</span>
              <span className="text-sm text-red-500">20/$13.5K</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Net Vol.</span>
              <span className="text-sm text-red-500">-$3.22K</span>
            </div>
          </div>
        </GridItem>
        <GridItem key="card-7" handlePosition="topRight">
          <div className="flex h-full flex-col">
            <div className="flex px-4">
              <Button className="text-foreground flex-1 bg-green-500 hover:bg-green-600">
                Buy
              </Button>
              <Button variant="ghost" className="text-foreground flex-1">
                Sell
              </Button>
            </div>

            <div className="flex flex-1 flex-col">
              <div className="flex h-10 items-end justify-between border-b-2">
                <div className="rounded-none underline underline-offset-8">
                  Market
                </div>
                <div className="rounded-none">Limit</div>
                <div className="rounded-none">Adv.</div>
              </div>

              <div className="m-0 flex-1 overflow-auto p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-gray-400">AMOUNT</div>
                  <div className="flex items-center">
                    <span>0.0</span>
                    <Button variant="ghost" size="sm" className="ml-1 p-0">
                      <MoreHorizontalIcon className="size-4" />
                    </Button>
                  </div>
                </div>

                <div className="mb-4 grid grid-cols-4 gap-2">
                  <Button
                    variant="outline"
                    className="border-gray-700 py-1 text-xs"
                  >
                    0.01
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 py-1 text-xs"
                  >
                    0.1
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 py-1 text-xs"
                  >
                    1
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 py-1 text-xs"
                  >
                    10
                  </Button>
                </div>

                <div className="mb-4 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center">
                      <ArrowUpIcon className="mr-1 h-3 w-3" />
                      <span>20%</span>
                    </div>
                    <div className="flex items-center">
                      <LockIcon className="mr-1 h-3 w-3" />
                      <span>0.001</span>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <LockIcon className="mr-1 h-3 w-3" />
                      <span>0.001</span>
                      <ArrowDownIcon className="ml-1 h-3 w-3" />
                    </div>
                    <div className="flex items-center">
                      <span>Off</span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <SwitchCameraIcon id="advanced-trading" className="mr-2" />
                    <label htmlFor="advanced-trading" className="text-xs">
                      Advanced Trading Strategy
                    </label>
                  </div>
                </div>

                <Button className="w-full rounded-full bg-green-500 py-6 text-white hover:bg-green-600">
                  Buy titcoin
                </Button>
              </div>
            </div>
          </div>
        </GridItem>
        <GridItem key="card-8" handlePosition="topRight">
          <div className="flex h-full items-center p-4">
            <div>
              <div className="text-xs text-gray-400">Bought</div>
              <div className="text-green-500">$0</div>
            </div>
            <div>
              <div className="text-xs text-gray-400">Sold</div>
              <div className="text-red-500">$0</div>
            </div>
            <div>
              <div className="text-xs text-gray-400">Holding</div>
              <div>$0</div>
            </div>
            <div className="">
              <div>PnL</div>
              <div className="text-green-500">+$0 (+0%)</div>
            </div>
          </div>
        </GridItem>
        <GridItem key="card-9" handlePosition="topRight">
          <div className="mr-7 grid h-full grid-cols-3 gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 bg-blue-900/20 text-xs"
            >
              PRESET 1
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 text-xs"
            >
              PRESET 2
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 text-xs"
            >
              PRESET 3
            </Button>
          </div>
        </GridItem>
        <GridItem key="card-10" handlePosition="topRight">
          <div className="flex h-full flex-col">
            <Button
              variant="ghost"
              className="w-full justify-start py-2 text-xs"
            >
              <span>Token Info</span>
              <ChevronDownIcon className="size-4" />
            </Button>

            <div className="mt-2 grid grow grid-cols-3 place-items-stretch gap-0 divide-x-2">
              <div className="border-b-2 text-center">
                <div className="font-bold text-red-500">17.36%</div>
                <div className="text-xs text-gray-400">Top 10 H.</div>
              </div>
              <div className="border-b-2 text-center">
                <div className="font-bold text-green-500">0.46%</div>
                <div className="text-xs text-gray-400">Dev H.</div>
              </div>
              <div className="border-b-2 text-center">
                <div className="font-bold text-green-500">0.46%</div>
                <div className="text-xs text-gray-400">Snipers H.</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-red-500">32.17%</div>
                <div className="text-xs text-gray-400">Insiders</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-red-500">38.24%</div>
                <div className="text-xs text-gray-400">Bundlers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-green-500">98.99%</div>
                <div className="text-xs text-gray-400">LP Burned</div>
              </div>
            </div>
          </div>
        </GridItem>
      </DynamicDashboardLayout>
      <StatusBar />
    </main>
  );
}
