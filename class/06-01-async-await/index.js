import axios from "axios";

// 비동기방식
async function fetchPost() {
	const result = axios.get("https://koreanjson.com/posts/1");
	console.log(result); // Promise { <pending> }
}

fetchPost();

// 동기방식
async function fetchPost2() {
	const result = await axios.get("https://koreanjson.com/posts/1");
	console.log(result); // {data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}
}

fetchPost2();
