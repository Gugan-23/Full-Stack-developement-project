const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state, { ...action.payload, id: Date.now() }];
      case 'DELETE_TASK':
        return state.filter(task => task.id !== action.payload);
      case 'COMPLETE_TASK':
        return state.map(task =>
          task.id === action.payload ? { ...task, completed: true } : task
        );
      default:
        return state;
    }
  };
  
  export default taskReducer;
  