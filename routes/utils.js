const toDate = function (dateStr){
	return Date.parse(dateStr);
};

module.exports.toDate = toDate;

const throwError = function (status, message, link){
	let err = new Error(message);
	err.status = status;
	err.link = link;
	return err
};

module.exports.throwError = throwError;