const app = require('./presentation/app')
const port = process.env.PORT ?? 8020;

app.listen(port, () => {
    console.log(`Employee Management API running on http://localhost:${port}`);
});