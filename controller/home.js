module.exports = {
	index: async (fish) => {
		fish.ctx.body = 'Ctrl Home'
	},
	detail: async (fish) => {
		fish.ctx.body = 'Ctrl Detail'
	},
	test: async (fish) => {
		fish.ctx.body = 'Test fish-node！！'
	},
}
