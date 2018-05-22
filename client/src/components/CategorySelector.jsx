const CategorySelector = (props) => (
  <div>
    <select onChange={(e) => props.changeCategory(e.target.value)}>
      <option value="">--Select a Category--</option>
      <option value="job">Job</option>
      <option value="interview">Interview</option>
      <option value="personal">Personal</option>
    </select>
  </div>
);