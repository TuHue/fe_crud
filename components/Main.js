import html from "../app/core.js";
import { connect } from "../app/store.js";
import StudentItem from "./StudentItem.js";

function Main(props) {
    const { students } = props;
    return html `
    <div class="container">
      <div class="app">
        <div class="app__header">
          <button
            class="btn btn-primary btn__add"
            onclick="dispatch('showModal',false)"
            id="btn__add"
            title="Add Item for List"
          >
            Add
          </button>
          <div action="" class="form form__search">
          <input type="text" class="form__input" id="keysearch" name="key" placeholder="Search name student..." />
          <button
            class="btn btn-primary btn__search"
            title="Search item in list"
            onclick="dispatch('searchStudent',document.getElementById('keysearch').value)"
          >
            Search
          </button>
          <button class="btn" onclick="dispatch('selectAll')">All</button>   

          </div>
        </div>
        <div class="app__content">
          <div class="app__table">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Point</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody id="app-items">
              ${students.map((student,index)=> StudentItem({student,index}))}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </div>
  `;
}
export default connect()(Main);