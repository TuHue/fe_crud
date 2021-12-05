import storare from "../util/storare.js";

const objStudent = {
    fullname: '',
    age: null,
    point: null
}

const init = {
    students: storare.get(),
    hideModal: true,
    indexEdit: null,
    objModal: {
        title: "",
        objStudent: objStudent
    }
}

const actions = {
    showModal: function(state, status, index) {
        if (index === undefined) {
            state.objModal.title = "Create a student";
        } else {
            state.objModal.title = "Edit a student";
            state.indexEdit = index;
            state.objModal.objStudent = state.students[index];
        }
        state.hideModal = status;
    },
    saveStudent: function(state, student, action, status) {
        if (action === "add") {
            state.students.push(student);
        } else {
            state.students[action] = student;
        }
        state.hideModal = status;
        state.objModal.objStudent = objStudent;
        storare.set(state.students);
    },
    deleteStudent: function(state, index) {
        state.students.splice(index, 1);
        storare.set(state.students);

    },
    closeModal: function(state, status) {
        state.hideModal = status;
    },
    searchStudent: function(state, key) {
        state.students = storare.get();
        state.students = state.students.filter(student => student.fullname === key);
    },
    selectAll: function(state) {
        state.students = storare.get();
    }
}

export default function reducer(state = init, action, agrs) {
    actions[action] && actions[action](state, ...agrs)
    return state;
}