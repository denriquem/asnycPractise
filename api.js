const axios = require("axios");

let getPosts = () => {
	return axios.get("https://jsonplaceholder.typicode.com/posts");
};

let getSinglePost = (postID) => {
	return axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`);
};

let getComment = (postID) => {
	return axios.get(
		`https://jsonplaceholder.typicode.com/posts/${postID}/comments`
	);
};

let finalObject = {};

Promise.all([getPosts(), getSinglePost(1)]).then((res) => {
	// console.log(res);
	let bla = res.forEach((x) => console.log(x.data));
});

// let printFunction = async () => {
// 	response = await getPosts();
// 	// console.log(response);

// 	finalObject.postID = response.data[0].id;

// 	// console.log(finalObject);

// 	response2 = await getSinglePost(finalObject.postID);

// 	finalObject.title = response2.data.title;

// 	response3 = await getComment(finalObject.postID);

// 	// console.log(response3.data);

// 	let commentsForPost = response3.data;

// 	finalObject.commentNames = commentsForPost.map((comment) => {
// 		return comment.name;
// 	});

// 	console.log(finalObject);
// };

// printFunction();
