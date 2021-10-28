import "./Project.css"

export default function ProjectCategories({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "active list-group-item project-btn p-2" : "list-group-item project-btn p-2"}
      onClick={() => setSelected(id)}
    >
			<button class="tag">{title}</button>
    </li>
  );
}