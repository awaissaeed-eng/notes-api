const express = require('express');
   const app = express();
   const notesRoutes = require('./routes/notes');

   app.use(express.json()); // middleware to parse JSON body
   app.use('/notes', notesRoutes);

   app.listen(3000, () => console.log('Server running on port 3000'));