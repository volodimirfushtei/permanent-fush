import React from "react";

import BrowsCoursePage from "@/components/brows-course";

export interface PageProps {
  children: React.ReactNode;
}
export default function Page({}: PageProps) {
  return (
    <div>
      <BrowsCoursePage />
    </div>
  );
}
