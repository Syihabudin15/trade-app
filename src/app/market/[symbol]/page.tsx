import { Metadata } from "next";
import { CandleStream } from ".";

export const metadata: Metadata = { title: "KLines" };

type tParams = Promise<{ symbol: string }>;

export default async function Page({ params }: { params: tParams }) {
  const { symbol } = await params;
  return (
    <div className="p-4">
      <div className="border-b-2 border-green-500 pb-2 w-[80%] sm:w-[50%] mx-auto font-bold text-xl text-center my-8">
        <h1>KLines {symbol && symbol.toUpperCase()}</h1>
      </div>
      <CandleStream symbol={symbol} />
    </div>
  );
}
