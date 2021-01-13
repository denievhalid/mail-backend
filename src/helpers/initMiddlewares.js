import cors from "cors";
import bodyParser from "body-parser";

function initMiddlewares(app) {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
}

export default initMiddlewares;
