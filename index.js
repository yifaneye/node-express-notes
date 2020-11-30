import express from 'express';
import routes from "./src/routes/routes";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/portfolio', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hi there!'));

app.listen(PORT, () => console.log('Server is running!'));
