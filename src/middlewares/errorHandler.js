export default (error, req, res, next) => {
  const status = error.status || 500;

  const payload = {
    errors: [],
  };

  return res.status(status).json(error);
};
