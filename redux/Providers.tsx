"use client";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { ProviderType } from "@/types";

const Providers = ({ children }: ProviderType) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
