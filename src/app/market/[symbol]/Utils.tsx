"use client";

import { BASE_URL_FUTURE_WS } from "@/utils/Trades";
import { DataOHCL } from "@prisma/client";
import { useEffect, useState } from "react";
import moment from "moment";
import ReactApexChart from "react-apexcharts";

export const CandleStream = ({ symbol }: { symbol: string }) => {
  const [liveData, setLiveData] = useState<DataOHCL[]>([]);

  useEffect(() => {
    console.log(symbol);
    const ws = new WebSocket(
      `${BASE_URL_FUTURE_WS}/${symbol.toLowerCase()}@kline_1m`
    );
    ws.onmessage = (event) => {
      const { k } = JSON.parse(event.data);
      console.log(k);
      const newCandle: DataOHCL = {
        opentime: k.t,
        closetime: k.T,
        open: parseFloat(k.o),
        high: parseFloat(k.h),
        low: parseFloat(k.l),
        close: parseFloat(k.c),
        volume: parseFloat(k.v),
        symbol: k.s,
        id: Date.now().toString(),
        interval: k.i,
      };
      setLiveData((prev) => {
        const temp = prev;
        if (temp.length !== 0) {
          if (temp[temp.length - 1].opentime === newCandle.opentime) {
            temp[temp.length - 1] = newCandle;
            return [...temp];
          } else {
            return [...temp, newCandle];
          }
        } else {
          return [newCandle];
        }
      });
    };
    ws.onopen = () => {
      console.log("WebSocket connection established");
    };
    ws.onerror = () => {
      console.log("WebSocket connection Error");
    };
    ws.onclose = () => {
      console.log("WebSocket connection Close");
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-2">
      <div className="flex-1 border p-2 rounded shadow border-green-500">
        <CandleChart symbol={symbol} series={liveData} />
      </div>
      <div className="flex-1 border p-2 rounded shadow border-green-500"></div>
    </div>
  );
};

const CandleChart = ({
  series,
  symbol,
}: {
  series: DataOHCL[];
  symbol: string;
}) => {
  return (
    <div>
      {series && (
        <ReactApexChart
          type="candlestick"
          key={symbol}
          series={[
            {
              name: "candle_" + symbol,
              data: series.map((k) => {
                return {
                  x: k.opentime,
                  y: [k.open, k.high, k.low, k.close],
                };
              }),
            },
          ]}
          options={{
            chart: {
              type: "candlestick",
              zoom: {
                enabled: true,
                type: "x",
                allowMouseWheelZoom: true,
              },
            },
            tooltip: {
              enabled: true,
            },
            xaxis: {
              type: "datetime",
              labels: {
                formatter: function (val: string | number) {
                  return ` ${moment(val).format("HH:mm")} `;
                },
              },
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </div>
  );
};
