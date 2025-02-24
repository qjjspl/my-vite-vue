import { DefineStoreOptions } from 'pinia'

declare module 'pinia' {
  interface DefineStoreOptions<Id extends string, S, G, A> {
    persist?: {
      enabled: boolean
      strategies?: {
        key?: string
        storage?: Storage
        paths?: string[]
      }[]
    }
  }
}

declare module 'pinia-plugin-persist' {
  import { PiniaPlugin } from 'pinia'

  const piniaPluginPersist: PiniaPlugin
  export default piniaPluginPersist
}
