import swaggerAutogen from "swagger-autogen";
swaggerAutogen();

const outputFile = "./swagger_output.js";
const endpointFiles = ["./routes/userRoutes.js"];

swaggerAutogen(outputFile, endpointFiles);
