"use client";

import React from "react";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";
const ClarityProvider = () => {
  useEffect(() => {
    Clarity.init("YOUR_PROJECT_ID");
  }, []);

  return null;
};

export default ClarityProvider;
