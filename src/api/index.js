import axios from 'axios'

const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URI
})

// 아래의 board는 프론트가 아닌 백안의 router/board 입니다.
function createPost(boardInfo) {
	return instance.post('/board', boardInfo)
}

function patchPost() {
	return instance.get('/board')
}

function patchOnePost(id) {
	return instance.get(`/board/${id}`)
}

function deleteOnePost(id) {
	return instance.delete(`/board/${id}`)
}

function updateOnePost(id, boardInfo) {
	return instance.put(`/board/${id}`, boardInfo)
}

export { createPost, patchPost, patchOnePost, deleteOnePost, updateOnePost }
