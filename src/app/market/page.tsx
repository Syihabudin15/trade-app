import { Metadata } from "next";
import { ListMarket } from ".";

export const metadata: Metadata = { title: "Markets" };

export default function Page() {
  return (
    <div className="p-4">
      <div className="border-b-2 border-green-500 pb-2 w-[80%] sm:w-[50%] mx-auto font-bold text-xl text-center my-8">
        <h1>Cryptocurrency Markets</h1>
      </div>
      <ListMarket />
    </div>
  );
}
