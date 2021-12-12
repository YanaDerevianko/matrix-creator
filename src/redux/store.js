import { configureStore } from '@reduxjs/toolkit';
import reducer from './matrix/matrix-reducer'


const store = configureStore({reducer});

export default store;