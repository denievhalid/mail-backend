import { messageRoutes, userRoutes } from "../routes";

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
}

export default initRoutes;
