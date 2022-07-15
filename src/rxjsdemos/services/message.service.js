import {Subject} from 'rxjs'


const subject=new Subject()

export const messageService={
    //next means next subscriber , next subscript ..etc
    // In sendMessage we can make api call (message=>{fetch(url)}) and set to {text:response}
    sendMessage:(message) => subject.next({text:message}),//producer
    clearMessages: ()=> subject.next(),//Can be provider
    getMessage: ()=> subject.asObservable() // whoever calls getMessage are Consumers
}