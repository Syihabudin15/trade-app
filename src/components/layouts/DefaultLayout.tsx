"use client";
import { Button, Menu } from "antd";
import { AntdConfig, UserProvider } from ".";
import {
  DollarCircleFilled,
  GlobalOutlined,
  HomeFilled,
  LoginOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";
import { IUserContext, useUser } from "./UserContext";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useUser();

  return (
    <UserProvider>
      <AntdConfig>
        <div className="flex justify-between fixed top-0 w-full py-2 px-4 items-center z-10 bg-gradient-to-br from-green-400 to-blue-400">
          <p className="font-bold drop-shadow-xl flex-1 text-gray-100">
            TradeApp
          </p>
          <div className="hidden sm:flex flex-1 items-center justify-end">
            <div className="flex-2">
              <DefaultMenu user={user} />
            </div>
            <div className="flex-1 flex gap-2 text-xs justify-end">
              <Link href={"/login"} title="Login">
                <button className="text-gray-100 rounded shadow bg-blue-500 hover:bg-blue-600 cursor-pointer py-1 px-2">
                  <LoginOutlined /> Login
                </button>
              </Link>
            </div>
          </div>
          <div className="sm:hidden">
            <MobileMenu user={user} />
          </div>
        </div>
        <div className="py-10 sm:py-15">{children}</div>
      </AntdConfig>
    </UserProvider>
  );
}

const MobileMenu = ({ user }: { user: IUserContext | null }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)} ghost type="dashed">
        <MenuOutlined />
      </Button>
    </div>
  );
};
const DefaultMenu = ({ user }: { user: IUserContext | null }) => {
  return (
    <div>
      <Menu
        style={{ background: "none", border: "none" }}
        items={
          user
            ? allMenu
                .filter(
                  (m) => m.type === "AUTHORIZED" && m.role.includes(user.role)
                )
                .map((m) => ({
                  label: m.label,
                  title: m.label,
                  key: m.key,
                  icon: m.icon,
                }))
            : allMenu
                .filter((m) => m.type === "UNAUTHORIZED")
                .map((m) => ({
                  label: m.label,
                  title: m.label,
                  key: m.key,
                  icon: m.icon,
                }))
        }
        mode="horizontal"
        theme="dark"
      />
    </div>
  );
};

interface IMenuList {
  label: string;
  key: string;
  icon: React.ReactNode;
  type: "UNAUTHORIZED" | "AUTHORIZED";
  role: string[];
}

const allMenu: IMenuList[] = [
  {
    label: "Home",
    key: "/",
    icon: <HomeFilled />,
    type: "UNAUTHORIZED",
    role: [],
  },
  {
    label: "About",
    key: "/about",
    icon: <GlobalOutlined />,
    type: "UNAUTHORIZED",
    role: [],
  },
  {
    label: "Pricing",
    key: "/prices",
    icon: <DollarCircleFilled />,
    type: "UNAUTHORIZED",
    role: [],
  },
];
