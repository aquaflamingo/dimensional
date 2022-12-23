import React from "react"
import { SuspenseLoaderProps } from "../types/types"

const SuspenseLoader = ({ message }: SuspenseLoaderProps) => {
  return <div className="text-white">{message}</div>;
};

export default SuspenseLoader
