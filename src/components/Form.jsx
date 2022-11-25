import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import WillContext from "../context/WillContext";

function Form() {

    const { beneficiaries, posessions, handleChangePosessions,handleAddPosessions, handleAddBeneficiaries, handleChange, handleNameAndDateChange, nameAndDate } =
    useContext(WillContext);
  const navigate = useNavigate();

  return (
    <div className="formCard col-8 mx-auto p-4 mt-4">
        <div className="justify-content-center d-flex">
        <div className="col-10">
          <label htmlFor="fullname">FullName</label>
          <br />
          <input
            className="form-control"
            type="text"
            value={nameAndDate.fullname}
            name="fullname"
            onChange={handleNameAndDateChange}
          />
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <div className="col-10">
          <label htmlFor="date">Date:</label> <br />
          <input
            className="form-control"
            type="date"
            value={nameAndDate.date}
            name="date"
            onChange={handleNameAndDateChange}
          />
        </div>
      </div>

      <div className="justify-content-center mt-3">
            <div className="d-flex justify-content-between container col-10">
            <label htmlFor="beneficiaries">Beneficiaries</label>
            <button onClick={() => handleAddBeneficiaries()}>+</button>
            </div>
        {beneficiaries.map((data, i) => {
          return (
            <center>
              <div className="col-10">
                <input
                  onChange={(e) => handleChange(e, i)}
                  className="col-10 col-md-10 mt-3 form-control"
                />
                {/* <button>x</button> */}
              </div>
            </center>
          );
        })}
      </div>

        <div>
        <div className="justify-content-center mt-4">
            <div className="d-flex justify-content-between container col-10">
            <label htmlFor="Posessions">Posessions</label>
            <button onClick={() => handleAddPosessions()}>+</button>
            </div>
        {posessions.map((data, i) => {
          return (
            <center>
              <div className="col-10">
                <input
                  onChange={(e) => handleChangePosessions(e, i)}
                  className="col-10 col-md-10 mt-3  form-control"
                />
                {/* <button>x</button> */}
              </div>
            </center>
          );
        })}
        {/* <button onClick={() => navigate("/submit")}>View Will</button> */}
      </div>
        </div>
        <div className="justify-content-center d-flex mt-5">
        <button className="btn col-10 btn-danger" onClick={() => navigate("/will")}>View Will</button>
        </div>

    </div>
  )
}
export default Form