// src/app/[slug]/layout.tsx
import { ReactNode } from "react";

export default function SlugLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      {/* Вміст сторінки */}
      <div className="content">{children}</div>
    </div>
  );
}
