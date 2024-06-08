type StateType={
    age:number
    childrenCount:number
    name:string
}
type ActionType={
    type:string
    [key:string]:any
}

export const userReducer = (state:StateType,action:ActionType)=>{ //reducer  это функция которая принимает state(user) и инструкцию (action)которая говорит как преобразовывать state(user)
switch(action.type){
    case'INCREMENT-AGE':
    let newState={...state}
        newState.age=state.age+1;
        return state;
    case'INCREMENT-CHILDREN-COUNT':
return{
    ...state,
    childrenCount:state.childrenCount+1
}
       // state.childrenCount=state.childrenCount+1;
      //  return state;

    default:
        throw new Error('I dont')
}
}
