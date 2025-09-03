import React from "react";

import TestErrorBoundary from "@/components/test-error-boundary";
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 px-4 py-6">
      <TestErrorBoundary />
    </div>
  );
}
