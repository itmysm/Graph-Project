import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "error" | "start"
declare module "E:/Personal/Graph-Project/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}