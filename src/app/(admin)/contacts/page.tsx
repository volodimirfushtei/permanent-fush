import React from "react";
import Contacts from "@/components/contacts";

export interface PageProps {}
export default function Page({}: PageProps) {
  return (
    <div className="font-sans overflow-hidden pt-10">
      <Contacts />
    </div>
  );
}
