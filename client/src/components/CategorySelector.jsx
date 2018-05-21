const CategorySelector = (props) => (
  <div>
    <select onChange={(e) => props.changeCategory(e.target.value)}>
      <option value="">--Select a Category--</option>
      <option value="Job">Job</option>
      <option value="Interview">Interview</option>
      <option value="Personal">Personal</option>
    </select>
  </div>
);