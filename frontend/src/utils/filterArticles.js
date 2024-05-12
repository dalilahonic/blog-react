function filterArticles(data, isFromElsewhere, inputValue) {
  return data?.filter((article) => {
    const headingLower = article.title.toLowerCase();

    return (
      article.isFromExternalSource === isFromElsewhere &&
      headingLower.includes(inputValue.toLowerCase())
    );
  });
}

export default filterArticles;
