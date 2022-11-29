const delay = (data, tick) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data)
		}, tick)
	})

module.exports = {
	getName() {
		return delay('fish!', 1000)
	},
	getAge() {
		return 20
	},
}
