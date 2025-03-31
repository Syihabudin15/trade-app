"use client";

import { Input } from "antd";

export const FormItem = ({
  type,
  label,
  required,
  value,
  setValue,
  lWidth,
  prefix,
  suffix,
}: {
  type?: "input" | "area" | "select" | "checkbox" | "radio";
  label: string;
  required?: boolean;
  value: any;
  setValue: Function;
  lWidth?: number;
  prefix?: React.ReactNode | string;
  suffix?: React.ReactNode | string;
}) => {
  return (
    <div className={`flex gap-2 flex-col sm:flex-row sm:items-center p-2`}>
      <p className={`flex gap-1 ${lWidth ? `w-[${lWidth}px]` : "w-22"}`}>
        <span className={required ? "block text-red-500" : "hidden"}>*</span>
        <span>{label}</span>
      </p>
      <p className="hidden sm:block">:</p>
      {!type && (
        <div>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            prefix={prefix}
            suffix={suffix}
          />
        </div>
      )}
    </div>
  );
};
