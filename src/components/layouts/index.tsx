"use client";

import { LoadingOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";

export const UserProvider = dynamic(
  () => import("@/components/layouts/UserContext").then((d) => d.UserProvider),
  {
    ssr: false,
  }
);

export const AntdConfig = dynamic(
  () => import("@/components/layouts/AntdConfig"),
  {
    ssr: false,
  }
);

export const DefaultLayout = dynamic(
  () => import("@/components/layouts/DefaultLayout"),
  {
    ssr: false,
    loading: () => <LoadingOutlined />,
  }
);
