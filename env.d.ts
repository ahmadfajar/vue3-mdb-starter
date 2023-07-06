/// <reference types="vite/client" />
/// <reference types="vue-mdbootstrap/component" />

import { BoardItem } from "@/components/types";

export * from "@/components/types";

declare interface TypesConfig {}


declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BoardItem: TypesConfig extends Record<'BoardItem', infer T> ? T : typeof BoardItem;
  }
}
