import DOMPurify from "dompurify";

export const sendHTMLShare = (content) => {
  return DOMPurify.sanitize(content, {
    ALLOWED_TAGS: [],
  });
};
