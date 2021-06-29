import { createContext, useContext } from "react";

const initialState = {
	currentBlog: {
		id: '',
		title: '',
		posted: '',
		modified: '',
		content: ''
	}
}

const BlogContext = createContext(initialState);

function init(state) {
	console.log(state)
	initialState.currentBlog.id = state.id;
	initialState.currentBlog.title = state.title;
	initialState.currentBlog.posted = state.posted;
	initialState.currentBlog.modified = state.modified;
	initialState.currentBlog.content = state.content;
}

export function blogReducer(state, action) {
	switch(action.type) {
		case 'SET_BLOG':
			init(action.payload)
		break;
		case 'GET_BLOG':
			return {
				state: initialState.currentBlog
			}
		default: 
		break;
	}
}

export function BlogWrapper({children}) {
	return (
		<BlogContext.Provider value={initialState}>
			{children}
		</BlogContext.Provider>
	)
}

export function useBlogContext() {
	return useContext(BlogContext);
}