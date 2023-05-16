export const isBrowser = (): boolean => typeof window !== "undefined";

export const isLocation = (locationToCheck: string): boolean =>
  isBrowser() && window.location.pathname.includes(locationToCheck);
