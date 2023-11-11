export const convertTitleToHref = (title: string): string => {
  return title
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(",", "")
    .replaceAll("/", "-");
};
