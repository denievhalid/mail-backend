import { messageRoutes, userRoutes } from "../routes";
import errorHandler from "../middlewares/errorHandler";

function initRoutes(app) {
  const routes = [
    {
      path: "/users",
      handler: userRoutes,
    },
    {
      path: "/messages",
      handler: messageRoutes,
    },
  ];

  routes.forEach(({ path, handler }) => {
    app.use(path, handler);
  });

  app.use(errorHandler);
}

export default initRoutes;
