export const convertTitleToHref = (title: string): string => {
    return title.toLowerCase().replace(" ", "-");
};