type StateType={
    age:number
    childrenCount:number
    name:string
}
type ActionType={
    type:string
    [key:string]:any
}

export const userReducer = (state:any,action:any)=>{ //reducer  это функция которая принимает state(user) и инструкцию (action)которая говорит как преобразовывать state(user)
switch(action.type){
    case'BLABLA1':

    case'YO':

    default:
        throw new Error('I dont')
}
}
