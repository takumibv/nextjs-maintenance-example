import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// メンテナンスモードの除外ページ
const maintenanceExclusionPaths = ["/"];

const isMaintenanceMode = Boolean(process.env.NEXT_PUBLIC_MAINTENANCE_MODE);
const allowedIps = process.env.NEXT_PUBLIC_MAINTENANCE_WHITELIST?.split(',') ?? [];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ip = getIP(request);

  // メンテナンスモードの対象かどうか
  const isMaintenanceTargetPath = !maintenanceExclusionPaths.some((path) => pathname === path);
  const isMaintenanceTargetIP = !allowedIps.includes(ip);

  if (isMaintenanceMode && isMaintenanceTargetPath && isMaintenanceTargetIP) {
    request.nextUrl.pathname = `/maintenance`;
    return NextResponse.rewrite(request.nextUrl);
  }
}

export const config = {
  matcher: [
    // 画面遷移以外のリクエストを除外する
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

// IPアドレスを取得する
function getIP (request: NextRequest) {
  // x-forwarded-for ヘッダーからIPを取得する
  const xff = request.headers.get('x-forwarded-for');

  return xff ? (Array.isArray(xff) ? xff[0] : xff.split(',')[0]) : '127.0.0.1';
};
