export function displayTimeAgo(createdAt, updatedAt) {
  const now = new Date();
  const createdDate = new Date(createdAt);
  const updatedDate = new Date(updatedAt);

  const isEdited = updatedDate > createdDate;
  const timeToDisplay = createdDate; // Always display the createdAt time

  const diffMs = now - timeToDisplay; // Difference in milliseconds
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  let prefix = isEdited ? "Edited: " : "";

  if (diffDays >= 1) {
    // Display date if more than 1 day
    return `${prefix}Published on ${timeToDisplay.toLocaleDateString()}`;
  } else if (diffHours >= 1) {
    return `${prefix}Published ${diffHours} hour${
      diffHours > 1 ? "s" : ""
    } ago`;
  } else if (diffMinutes >= 1) {
    return `${prefix}Published ${diffMinutes} minute${
      diffMinutes > 1 ? "s" : ""
    } ago`;
  } else {
    return `${prefix}Published ${diffSeconds} second${
      diffSeconds > 1 ? "s" : ""
    } ago`;
  }
}
