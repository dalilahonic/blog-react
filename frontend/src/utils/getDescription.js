function getDescription(content) {
  return content.split(' ').slice(0, 22).join(' ');
}

export default getDescription;
