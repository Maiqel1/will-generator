import { useContext } from "react";
import WillContext from "../context/WillContext";

function Will() {
  const { beneficiaries, posessions, nameAndDate } = useContext(WillContext);

  return (
    <>
      <h1 className="text-center mt-5 mb-3">YOUR WILL</h1>

      <div className="customCard container border bg-light rounded p-5">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="m-0 text-danger">{nameAndDate.fullname}</h2>
          <p className="m-0 d-flex align-items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_16_244)">
                <path
                  d="M11.7929 21.3869V11.6266H10.6346C9.80505 12.0688 9.00331 12.5614 8.23389 13.1015V14.3732C8.92007 13.9029 10.007 13.2387 10.5358 12.9514H10.5578V21.3869H11.7929V21.3869ZM13.9667 18.999C14.0527 20.1701 15.0536 21.5717 17.0829 21.5717C19.3848 21.5717 20.7425 19.6211 20.7425 16.3183C20.7425 12.7794 19.3134 11.4363 17.1689 11.4363C15.4745 11.4363 13.8807 12.666 13.8807 14.7465C13.8807 16.8691 15.3885 17.9853 16.9475 17.9853C18.3125 17.9853 19.1981 17.2972 19.4781 16.5397H19.5275C19.5202 18.9477 18.684 20.4994 17.1396 20.4994C15.9246 20.4994 15.2951 19.676 15.2183 18.999H13.9667V18.999ZM19.3701 14.7593C19.3701 16.0328 18.3473 16.9185 17.2036 16.9185C16.1039 16.9185 15.1103 16.2176 15.1103 14.7227C15.1103 13.2168 16.1753 12.5086 17.2476 12.5086C18.4058 12.5086 19.3701 13.2369 19.3701 14.7593Z"
                  fill="#AAAAAA"
                  fill-opacity="0.6"
                />
                <path
                  d="M6.40436 0C6.64701 0 6.87972 0.0963918 7.05129 0.26797C7.22287 0.439549 7.31926 0.672259 7.31926 0.914908V1.82982H21.9578V0.914908C21.9578 0.672259 22.0542 0.439549 22.2258 0.26797C22.3973 0.0963918 22.6301 0 22.8727 0C23.1153 0 23.3481 0.0963918 23.5196 0.26797C23.6912 0.439549 23.7876 0.672259 23.7876 0.914908V1.82982H25.6174C26.588 1.82982 27.5189 2.21538 28.2052 2.9017C28.8915 3.58801 29.2771 4.51885 29.2771 5.48945V25.6174C29.2771 26.588 28.8915 27.5189 28.2052 28.2052C27.5189 28.8915 26.588 29.2771 25.6174 29.2771H3.65963C2.68904 29.2771 1.7582 28.8915 1.07188 28.2052C0.385567 27.5189 0 26.588 0 25.6174V5.48945C0 4.51885 0.385567 3.58801 1.07188 2.9017C1.7582 2.21538 2.68904 1.82982 3.65963 1.82982H5.48945V0.914908C5.48945 0.672259 5.58584 0.439549 5.75742 0.26797C5.929 0.0963918 6.16171 0 6.40436 0V0ZM1.82982 7.31926V25.6174C1.82982 26.1027 2.0226 26.5681 2.36576 26.9113C2.70891 27.2545 3.17433 27.4472 3.65963 27.4472H25.6174C26.1027 27.4472 26.5681 27.2545 26.9113 26.9113C27.2545 26.5681 27.4472 26.1027 27.4472 25.6174V7.31926H1.82982Z"
                  fill="#AAAAAA"
                  fill-opacity="0.6"
                />
              </g>
              <defs>
                <clipPath id="clip0_16_244">
                  <rect width="29.2771" height="29.2771" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {nameAndDate.date}
          </p>
        </div>
        <div>
          <h3 className="bg-gr mt-3">Possessions</h3>

          <div className="mt-3">
            {posessions.map((posession) => {
              return (
                <ul>
                  <li>
                    <p>{posession}</p>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="bg-gr mt-3">Beneficiaries</h3>
          <div>
            <ul className="list-style-none">
              <li className="bg-bene px-4">
                {beneficiaries.map((beneficiary) => {
                  if (beneficiary > 1) {
                    return <span>{beneficiary}</span>;
                  } else {
                    return <span>{beneficiary},</span>;
                  }
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Will;
