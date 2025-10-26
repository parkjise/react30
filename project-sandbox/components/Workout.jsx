import { AiFillDelete } from "react-icons/ai";
import Dropdown from "./Dropdown";
export default function Workout({ onClick, workout }) {
  return (
    <div className="card m-3 p-3 shadow">
      <div className="row align-items-center ">
        <div className="col-6">
          <Dropdown className="ms-1" />
        </div>
        <div className="col-5">
          <div className="d-flex justify-content-center">
            <h3>
              <input
                type="number"
                style={{
                  border: "none",
                  borderBottom: "1px solid lightGray",
                  maxWidth: 60,
                  textAlign: "center",
                  outline: "none",
                  margin: "none",
                  marginBottom: "1.5rem",
                }}
              />
            </h3>

            <span className="text-muted">
              <select style={{ border: "none" }}>
                <option value="min">min</option>
                <option value="km">km</option>
              </select>
            </span>
          </div>

          <div class="badge rounded-pill bg-purple text-white px-3 fs-6 ">
            <input
              type="time"
              style={{
                width: "130px",
                border: "none",
                outline: "none",
                margin: "none",
                color: "#fff",
                fontWeight: 500,
                backgroundColor: "var(--purple)",
              }}
            />
          </div>
        </div>
        <button
          className="btn col-1 text-danger fw-bold fs-4
          "
          onClick={() => onClick(workout.id)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}
