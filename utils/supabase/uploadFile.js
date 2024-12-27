import { supabase } from "./client";
import { BUCKET_NAME } from "./storage";

// Upload file using standard upload
export async function uploadFile(file, name) {
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(`/clips/${name}`, file);
  if (error) {
    return error;
  } else {
    // Handle success
    return data;
  }
}
