const express  = require('express');

const path = require('path');

const app  = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const contactRoutes = require('./routes/contactus');

const bodyParser = require('body-parser');

const statusController = require('./controllers/status');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);

app.use('/shop',shopRoutes);

app.use(contactRoutes);

app.use(statusController.get404);

app.listen(4000);