import type { NextRequest } from "next/server";
import { refreshToken } from "./utils/Auths";

export async function middleware(request: NextRequest) {
  return await refreshToken(request);
}

export const config = {
  matcher: ["/auths/:path*"],
};
