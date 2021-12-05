import html from "../app/core.js";
import { connect } from "../app/store.js";

function StudentItem({ student, index }) {
    const { fullname, age, point } = student;
    return html `
    <tr>
  
    <td>${index}</td>
    <td>${fullname}</td>
    <td>${age}</td>
    <td>${point}</td>
    <td class="app__action">
      <button class="btn btn--delete btn--action" onclick="dispatch('deleteStudent',${index})">Delete</button>
      <button class="btn btn--edit btn--action"  onclick="dispatch('showModal',false,${index})">Edit</button>
    </td>
  </tr>
  `;
}
export default StudentItem;