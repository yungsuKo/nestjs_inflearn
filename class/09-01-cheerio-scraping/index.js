import axios from "axios";
import cheerio from "cheerio";

async function createBoardAPI(mydata) {
	// 입력된 데이터에서 URL을 추출
	const myurl = mydata.contents.split(" ").filter((word) => {
		return word.includes("https://");
	})[0];

	// 스크래핑
	const result = await axios.get(myurl);

	// 스크래핑 결과에서 OG 태그를 찾아서 반환
	const $ = cheerio.load(result.data);
	$("meta").each((index, element) => {
		if ($(element).attr("property")) {
			const key = $(element).attr("property").split(":")[1];
			const value = $(element).attr("content");
			console.log(key, value);
		}
	});

	return result;
}

const frontendData = {
	title: "안녕하세요",
	contents: "이거 추천해요. https://www.naver.com",
};

createBoardAPI(frontendData);
