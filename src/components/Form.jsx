import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import WillContext from "../context/WillContext";

function Form() {
    const { beneficiaries, posessions, handleChangePosessions,handleAddPosessions, handleAddBeneficiaries, handleChange, handleNameAndDateChange, nameAndDate, handleDeleteBeneficiary, handleDeletePosession } =
    useContext(WillContext);

  const navigate = useNavigate();

  return (
    <div className="formCard col-8 mx-auto p-4 mt-4">

        <div className="justify-content-center d-flex">
      {/* NAME FIELD */}
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

      {/* DATE FIELD */}

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

      {/* BENEFICIARIES INPUT */}

      <div className="justify-content-center mt-3">
            <div className="d-flex justify-content-between container p-0 col-10">
            <label htmlFor="beneficiaries">Beneficiaries</label>
            <button className="btn btn-danger" onClick={() => handleAddBeneficiaries()}>+</button>
            </div>
        {beneficiaries.map((data, i) => {
          return (
            <center>
              <div className="d-flex col-10 mt-3 pr-5" style={{paddingRight: '3rem', paddingLeft: '0rem'}}>
                <input
                value={data}
                  onChange={(e) => handleChange(e, i)}
                  className="col-10 col-md-12 form-control"
                />
                <button className="btn btn-danger btn-sm close mt-1 ms-3" onClick={() => handleDeleteBeneficiary(i)}> x</button>
              </div>
            </center>
          );
        })}
      </div>

      {/* POSESSIONS INPUT*/}

        <div>
        <div className="justify-content-center mt-4">
            <div className="d-flex justify-content-between container p-0 col-10">
            <label htmlFor="Posessions">Posessions</label>
            <button className="btn-danger btn" onClick={() => handleAddPosessions()}>+</button>
            </div>
        {posessions.map((data, i) => {
          return (
            <center>
              <div className=" d-flex col-10 mt-3 pr-5" style={{paddingRight: '3rem', paddingLeft: '0rem'}}>
                <input
                value={data}
                  onChange={(e) => handleChangePosessions(e, i)}
                  className="col-8 col-md-10  form-control"
                />
                <button className="btn btn-danger btn-sm close mt-1 ms-3" onClick={() => handleDeletePosession(i)}>x</button>
              </div>
            </center>
          );
        })}
      </div>
        </div>
        <div className="justify-content-center d-flex mt-5">
        <button className="btn col-10 btn-danger" onClick={() => navigate("/will")}>View Will</button>
        </div>

    </div>
  )
}
export default Form