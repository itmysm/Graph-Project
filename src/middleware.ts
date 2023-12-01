import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "../i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales: string[] = i18n.locales.map((locale) => locale.label);

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every((locale) => !pathname.startsWith(`/${locale.label}/`) && pathname !== `/${locale.label}`);

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const theLocale = getLocale(request);
    return NextResponse.redirect(new URL(`/${theLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url));
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets).*)"],
};
