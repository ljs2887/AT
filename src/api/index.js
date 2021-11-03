import axios from 'axios'

const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URI
})

function createPost(boardInfo) {
	return instance.post('/board', boardInfo)
}

function patchPost() {
	return instance.get('/board')
}

export { createPost, patchPost }
