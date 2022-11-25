import { useContext } from "react";
import WillContext from "../context/WillContext";

function Will() {
  const { beneficiaries, posessions, nameAndDate } = useContext(WillContext);

  return (
    <>
      <h1 className="text-center mt-5 mb-3">YOUR WILL</h1>

      <div className="customCard container border bg-light rounded p-5">
        <div className="justify-content-between align-items-center">
          <p>
            I <span className="fw-bolder">{nameAndDate.fullname}</span> make,
            publish and declare this to be my last will this day{" "}
            <span className="fw-bolder">{nameAndDate.date}</span>
          </p>
          <div>
            I direct that all my just debt, secured and unsecured be paid
            equally as soon as reasonable to my beneficiary below. All of my
            possessions namely:{" "}
            <ul className="fw-bold py-4">
              {posessions.map((posession) => {
                return (
                  <li>
                    <p>{posession}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="bg-bene d-flex gap-2 list-style-type-none p-3">
           <li className="fw-bolder">Beneficiaries:</li> {beneficiaries.map((beneficiary) => {
              if (beneficiary > 1) {
                return <li className="px-0">{beneficiary}</li>;
              } else {
                return <li className="px-0">{beneficiary},</li>;
              }
            })}
          </ul>
        </div>
        <div className="text-end py-5">Sign: ________________</div>
        <div className="text-end">
        <button className="btn btn-danger px-4" >Print Will</button>
        </div>
      </div>
    </>
  );
}
export default Will;
