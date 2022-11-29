module.exports = {
	'get /': async (fish) => {
		const name = await fish.$service.user.getName()
		fish.ctx.body = '用户名：' + name
	},
	'get /detail': async (fish) => {
		const age = await fish.$service.user.getAge()
		fish.ctx.body = '用户年龄：' + age
	},
}
