RocketChat.saveRoomReadOnly = function(rid, readOnly) {
	if (!Match.test(rid, String)) {
		throw new Meteor.Error('invalid-room', '无效房间', {
			'function': 'RocketChat.saveRoomReadOnly'
		});
	}
	return RocketChat.models.Rooms.setReadOnlyById(rid, readOnly);
};
