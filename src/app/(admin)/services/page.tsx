"use client";

import React from "react";
import { services } from "@/data/favors";
import ServicesSection from "@/components/services-section";

export default function Page() {
  return (
    <div>
      <ServicesSection services={services} />
    </div>
  );
}
