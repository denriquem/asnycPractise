const axios = require("axios");

module.exports.getPosts = () => {
	return axios.get("https://jsonplaceholder.typicode.com/posts");
};

module.exports.getSinglePost = (postID) => {
	return axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`);
};

module.exports.getComment = (postID) => {
	return axios.get(
		`https://jsonplaceholder.typicode.com/posts/${postID}/comments`
	);
};
