//For watchAgeUp generator function , so it will watch
import {takeLatest,put,delay} from 'redux-saga/effects'
//listerner
function* ageUpAsync(){
    /*//axios.get(url) call is possible
    // .then(resp => {
        //put is internal dispatch
        yield put {type:'AGE_UP',value:resp.data}
    })*/
    yield delay(4000)
    // yeild logdetails()
   yield put({type:'AGE_UP_ASYNC',value:1})
}
export function* watchAgeUp(){
    yield takeLatest('AGE_UP',ageUpAsync)
}
//Promise --> async/await --> generator functins(yield) with sagas