//state này kh phải của react, 
//là trạng thái của Redux. Là nơi lưu trữ data của Redux
//Coi rootReducer là công nhân

const initState = {
    users: [
        {id: '1' , name: 'Thy Gạo'},
        {id: '2' , name: 'Thục Gà'}
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {

    switch(action.type){
        case 'DELETE_USER':
            let users = state.users;

            users = users.filter(item=> item.id !== action.payload.id)
            //... để copy, cập nhật state mới nhất
            return {...state, users};

        case 'CREATE_USER':
            let id = Math.floor(Math.random()*1000)
            let user = {id: id, name: `random - ${id}`}

            return {...state, users:[...state.users, user]};
        default:
            return state;
    }
}

export default rootReducer;