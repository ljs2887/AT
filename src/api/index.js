import axios from 'axios'

const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URI
})

// 아래의 board는 프론트가 아닌 백안의 router/board 입니다.
function createBoardPost(boardInfo) {
	// 리액트에서 백엔드로 데이터를 보내줌
	return instance.post('/board', boardInfo)
}

function patchBoardPost() {
	return instance.get('/board')
}

function patchBoardOnePost(id) {
	return instance.get(`/board/${id}`)
}

function boardDeleteOnePost(id) {
	return instance.delete(`/board/${id}`)
}

function updateOnePost(id, boardInfo) {
	return instance.put(`/board/${id}`, boardInfo)
}

function createNoticePost(noticeInfo) {
	return instance.post('/notice', noticeInfo)
}

function patchNoticePost() {
	return instance.get('/notice')
}

function patchNoticeOnePost(id) {
	return instance.get(`/notice/${id}`)
}

function noticeDeleteOne(id) {
	return instance.delete(`/notice/${id}`)
}

function noticeUpdateOne(id, boardInfo) {
	return instance.put(`/notice/${id}`, boardInfo)
}

function commentCreate(id, commentInfo) {
	return instance.post(`/comment/${id}`, commentInfo)
}

function commentOnePost(id) {
	return instance.get(`/comment/${id}`)
}

export {
	createBoardPost,
	patchBoardPost,
	patchBoardOnePost,
	boardDeleteOnePost,
	updateOnePost,
	createNoticePost,
	patchNoticePost,
	patchNoticeOnePost,
	noticeDeleteOne,
	noticeUpdateOne,
	commentCreate,
	commentOnePost
}
