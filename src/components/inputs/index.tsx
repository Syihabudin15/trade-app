"use client";

import dynamic from "next/dynamic";

export const FormItem = dynamic(
  () => import("@/components/inputs/FormInput").then((d) => d.FormItem),
  {
    ssr: false,
    loading: () => <LoadingInput />,
  }
);
const LoadingInput = () => (
  <div className="w-full bg-gradient-to-r from-gray-100 to-gray-50 animate-pulse py-2 px-4"></div>
);
