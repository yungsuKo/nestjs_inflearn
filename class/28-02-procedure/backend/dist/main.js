"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const graphql_upload_1 = require("graphql-upload");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {});
    app.use((0, graphql_upload_1.graphqlUploadExpress)());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map