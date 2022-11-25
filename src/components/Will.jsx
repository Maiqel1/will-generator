import { useContext } from "react";
import WillContext from "../context/WillContext";

function Will() {

    const {beneficiaries, posessions, nameAndDate} = useContext(WillContext)

  return (
    <>
        <h1 className="text-center">YOUR WILL</h1>

    <div className="customCard container bg-light p-5">
        <h2>{nameAndDate.fullname}</h2>
        <p>{nameAndDate.date}</p>

      {beneficiaries.map((beneficiary) => {
        return (
          <ul>
            <li>{beneficiary}</li>
          </ul>
        );
      })}

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
    </>
  );
}
export default Will;
