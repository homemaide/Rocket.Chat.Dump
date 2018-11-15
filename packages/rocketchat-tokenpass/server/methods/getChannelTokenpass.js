Meteor.methods({
	getChannelTokenpass(rid) {
		check(rid, String);

		if (!Meteor.userId()) {
			throw new Meteor.Error('error-invalid-user', 'Invalid user', { method: 'getChannelTokenpass' });
		}

		const room = RocketChat.models.Rooms.findOneById(rid);

		if (!room) {
			throw new Meteor.Error('error-invalid-room', '无效房间', { method: 'getChannelTokenpass' });
		}

		return room.tokenpass;
	}
});
