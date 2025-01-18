import { supabase } from "./client";
import { BUCKET_NAME, IMAGE_BUCKET_NAME } from "./storage";

export function getFileUrl(filePath) {
  const { data, error } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filePath);
  if (error) {
    return;
  } else {
    // Handle success
    return data.publicUrl;
  }
}

export function getImageFileUrl(filePath) {
  const { data, error } = supabase.storage
    .from(IMAGE_BUCKET_NAME)
    .getPublicUrl(filePath);
  if (error) {
    return;
  } else {
    // Handle success
    return data.publicUrl;
  }
}
