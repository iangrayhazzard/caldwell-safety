/** @type {import('prettier').Config} */
const config = {
	experimentalTernaries: true,
	tabWidth: 4,
	useTabs: true,
	semi: false,
	quoteProps: "consistent",

	importOrder: [
		"^(react/(.*)$)|^(react$)",
		"^(next/(.*)$)|^(next$)",
		"<THIRD_PARTY_MODULES>",
		"",
		"^@/config/(.*)$",
		"^@/types/(.*)$",
		"^@/lib/(.*)$",
		"^@/server/(.*)$",
		"^@/utils/(.*)$",
		"^@/components/ui/(.*)$",
		"^@/components/shared/(.*)$",
		"^@/components/global/(.*)$",
		"^@/components/(.*)$",
		"^@/styles/(.*)$",
		"^@/app/(.*)$",
		"",
		"^[./]",
	],
	importOrderParserPlugins: ["typescript", "jsx"],
	tailwindFunctions: ["cn", "tv"],
	plugins: [
		"@ianvs/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss",
	],
}

export default config
