module.exports.init = (app, repo, socket) => {
	app.post('/events', (req, res) => {

		var event = req.body;

		// validation
		if (!event.name || !event.entity_id || !event.payload){
			res.status(400).send("Not valida event");
		} else {

		repo.addEventToStream(event.name, event.entity_id, event.version, event.payload, (err, ev) => {
			if(err){
				res.status(400).send(err);
			} else {
			socket.emit(ev.name, ev);
			res.send(ev);
			}
		});
	}

	});

	app.get('/events', (req, res) => {
		repo.getAllEvents((err, events)=>{
			res.send(events);
		})
	});

	app.get('/entities/:id', (req, res) => {
		repo.getEventsByEntity(req.params.id, (err, events)=>{
			if(err){
				res.status(400).send(err);
			} else {
				res.send(events);
			}
		})
	})
}