import "dotenv/config";
import App from "./app";
import { validateEnv } from "@core/utils";

import UsersRoute from "@modules/users/users.route";


validateEnv();

const routes = [
  new UsersRoute(),
];
const app = new App(routes);

app.listen();
