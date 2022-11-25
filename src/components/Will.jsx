import { useContext } from "react";
import WillContext from "../context/WillContext";

function Will() {

    const {beneficiaries, posessions, nameAndDate} = useContext(WillContext)

  return (
    <>
        <h1 className="text-center">YOUR WILL</h1>

    <div className="customCard container border bg-light rounded p-5">
        <div className="d-flex justify-content-between align-items-center">
        <h2 className="m-0">{nameAndDate.fullname}</h2>
        <p className="m-0">{nameAndDate.date}</p>
        </div>
<div>
  <h3>Summarry</h3>
  
      <div className="mt-3">
      {posessions.map((posession) => {
        return (
          <ul>
            <li>{posession}</li>
          </ul>
        );
      })}
      </div>
</div>
    <div>
      <h3>Beneficiaries</h3>
      <div>
      {beneficiaries.map((beneficiary) => {
        return (
          <ul>
            <li>{beneficiary}</li>
          </ul>
        );
      })}
      </div>
    </div>

      
    </div>
    </>
  );
}
export default Will;
