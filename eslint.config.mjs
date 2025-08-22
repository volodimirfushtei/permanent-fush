import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier", // Додаємо prettier в кінці, щоб він перевизначив інші правила
  ),
  {
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": [
        "warn",
        {
          semi: true,
          trailingComma: "es5",
          singleQuote: false,
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          endOfLine: "auto",
        },
      ],
      "@typescript-eslint/no-unused-vars": "warn",
    },
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
