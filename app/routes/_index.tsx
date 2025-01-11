import type { MetaFunction } from "@remix-run/cloudflare";
import { Config, Codes } from "~/types";

const config: Config = {
  username: "minagishl",
  codes: [
    {
      name: "原神",
      code: "834849436",
    },
    {
      name: "崩壊：スターレイル",
      code: "800114624",
    },
    {
      name: "ゼンレスゾーンゼロ",
      code: "1300002075",
    },
    {
      name: "Nintendo Switch",
      code: "SW-2824-9215-2318",
    },
    {
      name: "Discord",
      link: "https://discord.com/users/592245307853635645",
    },
  ],
};

export const meta: MetaFunction = () => {
  return [
    { title: "フレンドコードリスト" },
    {
      name: "description",
      content: `ユーザー ${config.username} のフレンドコードリスト`,
    },
  ];
};

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

function onClick(code: Codes) {
  if ("code" in code && code.code) {
    copyToClipboard(code.code);
  } else {
    window.open(code.link, "_blank");
  }
}

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <span className="pb-6 flex w-full text-center justify-center text-teal-600">
          \\ クリックでコピー //
        </span>
        <div className="space-y-3">
          {config.codes?.map((code) => (
            <button
              key={code.code}
              className="w-full flex flex-col justify-between items-center text-center p-4 rounded-lg bg-teal-50 hover:bg-teal-100 transition-all duration-200 group overflow-ellipsis sm:flex-row"
              onClick={() => onClick(code)}
            >
              <span className="font-medium text-gray-700 text-base font-sans tracking-wider w-full text-left sm:text-center sm:w-auto">
                {code.name}
              </span>
              <span className="text-teal-600 font-mono text-lg group-hover:scale-105 group-hover:translate-x-2.5 sm:group-hover:-translate-x-0.5 transition-transform sm:max-w-[50%] truncate w-full text-left sm:text-right sm:w-auto">
                {code.code ? code.code : new URL(code.link ?? "").hostname}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
