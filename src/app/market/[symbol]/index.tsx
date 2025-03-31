"use client";

import dynamic from "next/dynamic";

export const CandleStream = dynamic(
  () => import("@/app/market/[symbol]/Utils").then((d) => d.CandleStream),
  {
    ssr: false,
    loading: () => <>Loading ...</>,
  }
);
