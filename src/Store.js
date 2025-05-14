import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'

const Store = configureStore({
    reducer: {
        name: reducer.name
    }
})

export default Store