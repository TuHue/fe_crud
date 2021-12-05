import html from "../app/core.js";
import { connect } from "../app/store.js";

function Modal(props) {
    const { hideModal, objModal, indexEdit } = props;
    return html `
    <div class="modal ${hideModal && `modal__completed`}">
      <div class="modal__content">
        <h3 class="modal__title">${objModal.title}</h3>
        <div  
          class="model__form"
          onsubmit=""
        >
          <input
            name="fullname"
            id="fullname"
            type="text"
            placeholder="Enter your full name"
            required
            class="modal__input"
            value='${objModal.objStudent && objModal.objStudent.fullname}'
          />
          <input
            name="age"
            id="age"
            type="text"
            placeholder="Enter your age"
            required
            class="modal__input"
            value='${objModal.objStudent && objModal.objStudent.age}'
          />
          <input
            name="point"
            id="point"
            type="text"
            placeholder="Enter your point"
            class="modal__input"
            value='${objModal.objStudent && objModal.objStudent.point}'
          />
          <div class="modal__action">
            <button class="btn btn-model btn-model__back" onclick="dispatch('closeModal',true)">Back</button>
            <span 
            class="btn btn-model btn-model__add"\
             onclick="dispatch('saveStudent',{fullname:document.getElementById('fullname').value,age:document.getElementById('age').value,point:document.getElementById('point').value},${(indexEdit == null)?"add":indexEdit},true)">Save</span>
          </div>
        </div>
        <div class="modal__close">
          <i class="fas fa-times" onclick="dispatch('closeModal',true)"></i>
        </div>
      </div>
    </div>
  `;
}
export default connect()(Modal);