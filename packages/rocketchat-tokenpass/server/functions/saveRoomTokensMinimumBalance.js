import s from 'underscore.string';

RocketChat.saveRoomTokensMinimumBalance = function(rid, roomTokensMinimumBalance) {
	if (!Match.test(rid, String)) {
		throw new Meteor.Error('invalid-room', '无效房间', {
			'function': 'RocketChat.saveRoomTokensMinimumBalance'
		});
	}

	const minimumTokenBalance = parseFloat(s.escapeHTML(roomTokensMinimumBalance));

	return RocketChat.models.Rooms.setMinimumTokenBalanceById(rid, minimumTokenBalance);
};
