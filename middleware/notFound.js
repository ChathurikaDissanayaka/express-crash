const notFound = (req, res, next) => {
  const error = new Error("Not foud");
  error.status = 404;
  next(error);
};

export default notFound;
