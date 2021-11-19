// @flow
export type Consent = "full" | "functional" | "none"

export const getItem = (key: string, fallback?: string): ?string => {
  if (typeof document === "undefined") return fallback

  return localStorage.getItem(key)
}

export const persistItem = (key: string, item: string, consent: Consent) => {
  if (typeof document === "undefined" || consent === "none") return

  localStorage.setItem(key, item)
}

export const removeAllItems = () => {
  if (typeof document === "undefined") return

  localStorage.clear()
}
