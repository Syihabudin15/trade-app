"use client";

import { LoadingOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";

export const FormLogin = dynamic(
  () => import("@/app/login/Utils").then((d) => d.FormLogin),
  { ssr: false, loading: () => <LoadingOutlined /> }
);
