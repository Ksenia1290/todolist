import { userReducer } from './user-reducer';

test ('user reducer should increment only age',()=>{//описание что тест проверяет
    const startState={age:20,childrenCount:2,name:'Dimych'};//стартовые данные

    const endState=userReducer(startState,{type:'INCREMENT-AGE'})
expect(endState.age).toBe(21);
expect(endState.childrenCount).toBe(2)
});

test('user reducer should increment only childrenCount',()=>{
    const startState={age:28,childrenCount:2,name:'Dimych'};
 });