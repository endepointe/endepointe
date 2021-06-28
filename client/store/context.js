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

const StoreContext = createContext(initialState);

export function EndePointeWrapper({children}) {
	return (
		<StoreContext.Provider value={initialState}>
			{children}
		</StoreContext.Provider>
	)
}

export function useStoreContext() {
	console.log(StoreContext)
	return useContext(StoreContext);
}