import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// メンテナンスモードの除外ページ
const maintenanceExclusionPaths = ["/"];

const isMaintenanceMode = Boolean(process.env.NEXT_PUBLIC_MAINTENANCE_MODE);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // メンテナンスモードの対象かどうか
  const isMaintenanceTargetPath = !maintenanceExclusionPaths.some((path) => pathname === path);

  if (isMaintenanceMode && isMaintenanceTargetPath) {
    console.log("メンテナンスにリダイレクトする", pathname, isMaintenanceMode);
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
