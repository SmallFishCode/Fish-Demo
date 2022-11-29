module.exports = (fish) => ({
	'get /': fish.$ctrl.home.index,
	'get /detail': fish.$ctrl.home.detail,
	'get /test': fish.$ctrl.home.test,
})
