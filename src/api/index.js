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

function commentDeleteOne(id, password) {
	return instance.delete(`/comment/${id}?password=${password}`)
}

function commentOneFatch(id) {
	return instance.get(`/comment/${id}/one`)
}

function commentUpdateOne(id, commentInfo) {
	return instance.put(`/comment/${id}/one`, commentInfo)
}

function createSuggestionsPost(suggestionsInfo) {
	// 리액트에서 백엔드로 데이터를 보내줌
	return instance.post('/suggestions', suggestionsInfo)
}

function patchSuggestionsPost() {
	return instance.get('/suggestions')
}

function patchSuggestionsOnePost(id) {
	return instance.get(`/suggestions/${id}`)
}

function suggestionsDeleteOnePost(id) {
	return instance.delete(`/suggestions/${id}`)
}

function suggestionsupdateOnePost(id, SuggestionsInfo) {
	return instance.put(`/suggestions/${id}`, SuggestionsInfo)
}

function suggestionsCommentCreate(id, SuggestionsCommentInfo) {
	return instance.post(`/suggestionscomment/${id}`, SuggestionsCommentInfo)
}

function suggestionsCommentOnePost(id) {
	return instance.get(`/suggestionscomment/${id}`)
}

function suggestionsCommentDeleteOne(id, password) {
	return instance.delete(`/suggestionscomment/${id}?password=${password}`)
}

function suggestionsCommentOneFatch(id) {
	return instance.get(`/suggestionscomment/${id}/one`)
}

function suggestionsCommentUpdateOne(id, suggestionscommentInfo) {
	return instance.put(`/suggestionscomment/${id}/one`, suggestionscommentInfo)
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
	commentOnePost,
	commentDeleteOne,
	commentOneFatch,
	commentUpdateOne,
	createSuggestionsPost,
	patchSuggestionsPost,
	patchSuggestionsOnePost,
	suggestionsDeleteOnePost,
	suggestionsupdateOnePost,
	suggestionsCommentCreate,
	suggestionsCommentOnePost,
	suggestionsCommentDeleteOne,
	suggestionsCommentOneFatch,
	suggestionsCommentUpdateOne
}
