//Controller action
exports.show = (req, res) => {
	//Check if path is root or page
	const path = (req.path === '/') ? '/home' : req.path;

	res.render(`pages${path}`);
}
