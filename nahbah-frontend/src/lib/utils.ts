import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Centralized function for image URLs
export const getImageUrl = (image: string | null | undefined): string | null => {
  if (!image) return null;
  
  // If it's already a full URL (e.g., Cloudinary in prod), return it
  if (image.startsWith('http')) return image;
  
  // In development, construct local URL
  if (import.meta.env.DEV) {
    return `http://127.0.0.1:8000/media/${image}`;
  }
  
  // In production, construct Cloudinary URL (fallback if API returns public_id)
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  return `http://res.cloudinary.com/${cloudName}/image/upload/${image}`;
};
