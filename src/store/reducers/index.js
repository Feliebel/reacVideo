import {combineReducers} from 'redux'
import busca from './busca'
import reproduz from './reporduz-video'


const rootReducer = combineReducers({
    busca,
    reproduz
})

export default rootReducer