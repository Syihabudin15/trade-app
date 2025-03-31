import { Metadata } from "next";
import { FormLogin } from ".";

export const metadata: Metadata = { title: "Login" };

export default function Page() {
  return (
    <div>
      <FormLogin />
    </div>
  );
}
