import { MarketData } from "@/components/IInterfaces";
import { DataOHCL } from "@prisma/client";

export const BASE_URL = `https://api.binance.com/api/v3`;
export const BASE_URL_WS = `wss://stream.binance.com:9443/ws`;
export const BASE_URL_FUTURE = `https://fapi.binance.com/fapi/v1`;
export const BASE_URL_FUTURE_WS = `wss://fstream.binance.com/ws`;

export const FutureBinanceMarketData = async (
  filter?: string
): Promise<MarketData[]> => {
  const res = await fetch(`${BASE_URL_FUTURE}/ticker/price`);
  let result = await res.json();
  if (filter) {
    result = result.filter((r: { symbol: string; price: string }) =>
      r.symbol.includes(filter.toUpperCase())
    );
  } else {
    result = result.filter((r: { symbol: string; price: string }) =>
      r.symbol.includes("USDT")
    );
  }
  return result;
};

export const FuturesCandleData = async (
  symbol: string,
  interval: string,
  limit: number,
  startTime?: number,
  endTime?: number
): Promise<DataOHCL[]> => {
  const res = await fetch(
    `${BASE_URL_FUTURE}/klines?symbol=${symbol}&interval=${interval}&limit=${limit}${
      startTime ? "&startTime=" + startTime : ""
    }${endTime ? "&endTime=" + endTime : ""}`
  );
  const response = await res.json();
  const data: DataOHCL[] = response.map((candle: any) => ({
    opentime: candle[0],
    open: parseFloat(candle[1]),
    high: parseFloat(candle[2]),
    low: parseFloat(candle[3]),
    close: parseFloat(candle[4]),
    closetime: parseFloat(candle[6]),
    volume: parseFloat(candle[5]),
    symbol: symbol,
    interval: interval,
  }));
  return data;
};
