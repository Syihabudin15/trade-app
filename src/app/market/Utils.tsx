"use client";

import { MarketData } from "@/components/IInterfaces";
import { FutureBinanceMarketData } from "@/utils/Trades";
import { Input, Spin } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ListMarket = () => {
  const [data, setData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    (async () => {
      setLoading(true);
      setInterval(async () => {
        const temp = await FutureBinanceMarketData();
        setData(temp.sort((a, b) => a.symbol.localeCompare(b.symbol)));
      }, 1000);
      setLoading(false);
    })();
  }, []);

  return (
    <Spin spinning={loading}>
      <div className="py-2 px-5">
        <Input.Search
          placeholder="Symbol"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex gap-4 justify-around flex-wrap my-8">
        {search
          ? data
              .filter((f) => f.symbol.includes(search.toUpperCase()))
              .map((d) => (
                <Link href={`/market/${d.symbol}`} key={d.symbol}>
                  <div className="border rounded shadow border-green-500 p-4 w-44">
                    <p className="font-bold">{d.symbol}</p>
                    <p>{d.price}</p>
                  </div>
                </Link>
              ))
          : data.map((d) => (
              <Link href={`/market/${d.symbol}`} key={d.symbol}>
                <div className="border rounded shadow border-green-500 p-4 w-44">
                  <p className="font-bold">{d.symbol}</p>
                  <p>{d.price}</p>
                </div>
              </Link>
            ))}
      </div>
    </Spin>
  );
};
