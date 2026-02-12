import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getAssetPath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/thamani-web' : '';
    return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
};
