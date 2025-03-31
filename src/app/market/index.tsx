"use client";

import dynamic from "next/dynamic";

export const ListMarket = dynamic(
  () => import("@/app/market/Utils").then((d) => d.ListMarket),
  {
    ssr: false,
    loading: () => <>Loading....</>,
  }
);
