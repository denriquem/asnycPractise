const wrapperController = require("./apiWrappers/wrappers");

let finalObject = {};

let printFunction = async () => {
	response = await wrapperController.getPosts();
	// console.log(response);
	finalObject.postID = response.data[0].id;

	response2 = await wrapperController.getSinglePost(finalObject.postID);
	finalObject.title = response2.data.title;

	response3 = await wrapperController.getComment(finalObject.postID);
	let commentsForPost = response3.data;
	finalObject.commentNames = commentsForPost.map((comment) => {
		return comment.name;
	});

	console.log(finalObject);
};

// Promise.all([
// 	wrapperController.getSinglePost(finalObject.postID),
// 	wrapperController.getComment(finalObject.postID),
// ]).then((res) => {
// 	res.forEach((x) => console.log(x.data));
// });

printFunction();
