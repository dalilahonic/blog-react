function getLink(heading) {
  return heading.toLowerCase().split(' ').join('-');
}

export default getLink;
