"use client";

import { FormItem } from "@/components/inputs";
import { SecurityScanOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import { useState } from "react";

export const FormLogin = () => {
  return (
    <div className="flex bg-gradient-to-br from-green-400 to-blue-400 items-center p-4 h-[81vh]">
      <div className="flex-1 hidden sm:flex justify-center">
        <Image src="favicon.ico" alt="Security Image" />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-full sm:w-[70%]">
          <Form />
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  const [data, setData] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });
  return (
    <div className="bg-gray-50 flex flex-col items-center p-4 rounded shadow">
      <p className="font-bold text-xl my-5">Login Form</p>
      <FormItem
        label="Username"
        value={data.username}
        setValue={(e: string) => setData((prev) => ({ ...prev, username: e }))}
        prefix={<UserOutlined />}
        required
      />
      <FormItem
        label="Password"
        value={data.password}
        setValue={(e: string) => setData((prev) => ({ ...prev, password: e }))}
        prefix={<SecurityScanOutlined />}
        required
      />
      <Button block type="primary" className="my-8">
        Login
      </Button>
    </div>
  );
};
