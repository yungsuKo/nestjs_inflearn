import express from "express";
import mongoose from "mongoose";
import Board from "./models/board.model.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/boards", async (req, res) => {
	// 데이터 등록 로직
	const results = await Board.find();
	console.log(results);
	res.send(`${results} 게시물 조회에 성공하였습니다`);
});
app.post("/boards", async (req, res) => {
	// 데이터 등록 로직
	const board = new Board({
		writer: req.body.writer,
		title: req.body.title,
		contents: req.body.contents,
	});
	await board.save();
	console.log("게시물 등록 완료!");
	res.send("게시물 등록에 성공하였습니다");
});

// MongoDB 접속
mongoose.connect("mongodb://my-database:27017/mydocker03");

//  Backend api 서버 오픈
app.listen("3000", function () {
	console.log("I'm serving");
});
