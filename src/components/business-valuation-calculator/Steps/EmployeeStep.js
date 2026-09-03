export default function EmployeesStep({ form, update }) {
  if (!form) return null; 

  return (
    <div className="grid">
      <div>
        <label>Number of full-time employees</label>
        <input
              type="text"
              value={form.employees ? `${form.employees.toLocaleString()}` : ""}
              placeholder="$0"
              onChange={(e) => {
                const raw = e.target.value.replace(/[^0-9]/g, "");
                update("employees", Number(raw));
              }}
            />
      </div>
      <div>
        <label>Number of contractors (optional)</label>
         <input
              type="text"
              value={form.contractors ? `${form.contractors.toLocaleString()}` : ""}
              placeholder="$0"
              onChange={(e) => {
                const raw = e.target.value.replace(/[^0-9]/g, "");
                update("contractors", Number(raw));
              }}
            />
      </div>
      <div>
        <label>Owner involvement</label>
        <select
          value={form.ownerInvolvement}
          onChange={(e) =>
            update("ownerInvolvement", e.target.value)
          }
        >
          <option value="">Select</option>
          <option value="veryhands-on">Very hands-on</option>
          <option value="somewhatinvolved">Somewhat involved</option>
          <option value="mostlysystemised">Mostly systemised</option>
        </select>
      </div>
    </div>
  );
}
