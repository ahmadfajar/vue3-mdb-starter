/// <reference types="vite/client" />
/// <reference types="vue-mdbootstrap/component" />

import { BoardItem } from "@/components/types";

export * from "@/components/types";

declare module 'vue' {
  export interface GlobalComponents {
    BoardItem: typeof BoardItem;
  }
}
