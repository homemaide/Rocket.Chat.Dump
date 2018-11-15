Meteor.methods({
	getUserMentionsByChannel({ roomId, options }) {
		check(roomId, String);

		if (!Meteor.userId()) {
			throw new Meteor.Error('error-invalid-user', 'Invalid user', { method: 'getUserMentionsByChannel' });
		}

		const room = RocketChat.models.Rooms.findOneById(roomId);

		if (!room) {
			throw new Meteor.Error('error-invalid-room', '无效房间', { method: 'getUserMentionsByChannel' });
		}

		const user = RocketChat.models.Users.findOneById(Meteor.userId());

		return RocketChat.models.Messages.findVisibleByMentionAndRoomId(user.username, roomId, options).fetch();
	}
});
