import { supabase } from "./client";
import { BUCKET_NAME } from "./storage";

export function getFileUrl(filePath) {
  const { data, error } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filePath);
  if (error) {
    console.log(error);
    return;
  } else {
    // Handle success
    return data.publicUrl;
  }
}