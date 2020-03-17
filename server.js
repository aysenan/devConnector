const express = require('express');

const app = express();
app.get('/',(res,req)=> res.setEncoding("API running"));
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server started on port ${PORT}`));