import React from "react";

import BrowsCoursePage from "@/components/brows-course";

export interface PageProps {}
export default function Page({}: PageProps) {
  return (
    <div>
      <BrowsCoursePage />
    </div>
  );
}
