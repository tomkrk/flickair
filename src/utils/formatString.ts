const extractAuthorName = (authorString: string) => {
  const regex = /"([^"]+)"/;
  const authorNameMatches = authorString.match(regex)
  if (authorNameMatches && authorNameMatches[1]) {
    return authorNameMatches[1]
  };
}

const getSmallPicture = (url: string) => {
  return url.replace('_m.jpg', '_s.jpg');
}
export { extractAuthorName, getSmallPicture };