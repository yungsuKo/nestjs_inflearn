# 운영체제 및 프로그램 설치 (하나하나 입력하는 방식)
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn

# 1. 운영체제 설치(node 14버전과 npm과 yarn이 모두 설치되어있는 리눅스)
FROM node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
COPY ./index.js /index.js

# 3. 도커안에서 index.js 실행시키기
CMD node index.js
# CMD는 실행할 때 사용됨. 마지막에 한 번만 실행할 수 있음.
# RUN은 저장할 때 사용됨.