import app from './rout';

const port = process.env.PORT || 3000;
const ip = process.env.IP || '0.0.0.0';


app.listen(port, ip, () =>{
	console.log('Server running on http://%s:%s', ip, port);
});


export default app;