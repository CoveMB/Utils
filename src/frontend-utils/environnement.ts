export const isBrowser = (): boolean => typeof window !== 'undefined';

export const isLocation = (location: string): boolean => isBrowser() && window.location.pathname.includes(location);