import express from "express";

const app = express();

fs.readdirSync('./routes')
    .filter( async fileName => {
       const importedRoute = await import(`./routes/${fileName}`);
       app.use(fileName, importedRoute.default);
    })