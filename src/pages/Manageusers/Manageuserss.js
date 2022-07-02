import React from "react";

const Manageuserss = ({
  number,
  name,
  role,
  phone,
  email,
  password,
  buildtime,
}) => {
  return (
    <tr className="hover">
      <th>{number}</th>
      <td>{name}</td>
      <td>{role}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{password}</td>
      <td>{buildtime}</td>
      <td>
        <select class="select w-30 max-w-xs select-bordered">
          <option disabled selected>
            ผู้ใช้
          </option>
          <option>หัวหน้า</option>
          <option>พนักงาน</option>
        </select>
      </td>
      <td>
        <button className="btn btn-error text-white">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1138_4932)">
              <g clip-path="url(#clip0_1138_4932)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.21 0.994141C14.144 0.994141 14.0787 1.00721 14.0177 1.03259C13.9568 1.05798 13.9015 1.09518 13.855 1.14204L13.853 1.14412L8.23722 6.74025L7.87831 8.92241L10.0268 8.53569L15.6259 2.917L15.6279 2.91494C15.6748 2.86846 15.712 2.81316 15.7374 2.75223C15.7628 2.6913 15.7758 2.62594 15.7758 2.55994C15.7758 2.49393 15.7628 2.42858 15.7374 2.36765C15.712 2.30672 15.6748 2.25142 15.6279 2.20494L15.6265 2.20349L14.565 1.14204C14.5185 1.09518 14.4632 1.05798 14.4023 1.03259C14.3414 1.00721 14.276 0.994141 14.21 0.994141ZM13.6332 0.109501C13.816 0.0333481 14.012 -0.00585938 14.21 -0.00585938C14.408 -0.00585938 14.6041 0.0333479 14.7869 0.109501C14.9693 0.185485 15.1348 0.29675 15.2741 0.436901C15.2744 0.437213 15.2747 0.437526 15.275 0.437838L16.3321 1.49494C16.3324 1.49525 16.3327 1.49555 16.3331 1.49586C16.4732 1.63512 16.5845 1.80069 16.6605 1.98307C16.7366 2.16586 16.7758 2.36192 16.7758 2.55994C16.7758 2.75796 16.7366 2.95402 16.6605 3.1368C16.5845 3.31908 16.4733 3.48456 16.3333 3.62377C16.3329 3.62416 16.3325 3.62455 16.3321 3.62494L10.6242 9.35287C10.552 9.42534 10.4593 9.47391 10.3586 9.49203L7.3586 10.032C7.19874 10.0608 7.03487 10.0101 6.91915 9.89615C6.80343 9.78216 6.75029 9.61907 6.77665 9.45879L7.27665 6.41879C7.29368 6.31531 7.3428 6.2198 7.41709 6.14577L13.1462 0.436691C13.2854 0.296638 13.4509 0.185446 13.6332 0.109501Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.27002 2.5C4.13741 2.5 4.01023 2.55268 3.91647 2.64645C3.8227 2.74021 3.77002 2.86739 3.77002 3V12.5C3.77002 12.6326 3.8227 12.7598 3.91647 12.8536C4.01023 12.9473 4.13741 13 4.27002 13H13.77C13.9026 13 14.0298 12.9473 14.1236 12.8536C14.2173 12.7598 14.27 12.6326 14.27 12.5V9.5C14.27 9.22386 14.4939 9 14.77 9C15.0462 9 15.27 9.22386 15.27 9.5V12.5C15.27 12.8978 15.112 13.2794 14.8307 13.5607C14.5494 13.842 14.1678 14 13.77 14H4.27002C3.87219 14 3.49066 13.842 3.20936 13.5607C2.92805 13.2794 2.77002 12.8978 2.77002 12.5V3C2.77002 2.60218 2.92805 2.22064 3.20936 1.93934C3.49066 1.65804 3.87219 1.5 4.27002 1.5H7.27002C7.54616 1.5 7.77002 1.72386 7.77002 2C7.77002 2.27614 7.54616 2.5 7.27002 2.5H4.27002Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_1138_4932"
                x="0.77002"
                y="0"
                width="18"
                height="18"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1138_4932"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1138_4932"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_1138_4932">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(2.77002)"
                />
              </clipPath>
            </defs>
          </svg>
          แบน
        </button>
      </td>
    </tr>
  );
};

export default Manageuserss;
