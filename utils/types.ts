export type UnemptyArray<T> = [T, ...T[]]

export type Error = {
  message: string
}

export type ApiData<T> = {
  data: T
}
