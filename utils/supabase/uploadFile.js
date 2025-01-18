import { supabase } from "./client";
import { BUCKET_NAME, IMAGE_BUCKET_NAME } from "./storage";

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

export async function uploadImageFile(file, name) {
  const { data, error } = await supabase.storage
    .from(IMAGE_BUCKET_NAME)
    .upload(`/discussion-images/${name}`, file);
  if (error) {
    return error;
  } else {
    // Handle success
    return data;
  }
}
