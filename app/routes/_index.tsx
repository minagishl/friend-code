import type { MetaFunction } from "@remix-run/cloudflare";
import { Config } from "~/types";

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

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-4">
        <div className="space-y-3">
          {config.codes?.map((code) => (
            <button
              key={code.code}
              className="w-full flex justify-between items-center p-4 rounded-lg bg-teal-50 hover:bg-teal-100 transition-all duration-200 group"
              onClick={() => copyToClipboard(code.code)}
            >
              <span className="font-medium text-gray-700 text-base font-sans tracking-wider">
                {code.name}
              </span>
              <span className="text-teal-600 font-mono text-lg group-hover:scale-105 transition-transform">
                {code.code}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
