function filterArticles(data, isFromElsewhere, inputValue) {
  return data?.filter((article) => {
    const headingLower =
      article.attributes.heading.toLowerCase();

    return (
      article.attributes.fromElsewhere ===
        isFromElsewhere &&
      headingLower.includes(inputValue.toLowerCase())
    );
  });
}

export default filterArticles;
