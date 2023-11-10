"use client";

import { Locale } from "$/i18n.config";
import config from "$/tailwind.config";

const colors: {} = config.theme?.colors || {};

export default function Theme({ children, params: { lang } }: { children: React.ReactNode; params: { lang: Locale } }) {
  return (
    <div className="flex justify-start items-center flex-wrap gap-5">
      {Object.keys(colors).map((color) => (
        <div key={color} className={`flex justify-center items-center w-40 h-40 bg-${color}`}>
          {color}
        </div>
      ))}
    </div>
  );
}
