import React from "react";

const Cardadmin = ({
  name,
  avgRating,
  typefood,
  foodcategory,
  image,
  dayaddfood,
  price,
}) => {
  return (
    <div>
      <div className="card w-11/12 bg-base-100 shadow-xl mt-12">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h1 className="card-title">{name}</h1>
          <div className="mb-3 flex">
            <div className="rating rating-sm mt-1">
              {[...new Array(Math.floor(avgRating))].map(() => (
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-warning"
                />
              ))}
              {[...new Array(5 - Math.floor(avgRating))].map(() => (
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2"
                />
              ))}
            </div>
          </div>
          <p>ประเภทอาหาร : {typefood}</p>
          <p>หมวดหมู่อาหาร : {foodcategory}</p>
          <p>วันเพิ่มอาหาร : {dayaddfood}</p>
          <div className="text-orange-600">
            <h2>฿ {price}</h2>
          </div>
          <div className="justify-end card-actions">
            <button className="btn btn-error">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1808_4530)">
                  <g clip-path="url(#clip0_1808_4530)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.43797 5.00385C4.71198 4.9696 4.96188 5.16396 4.99613 5.43797L5.94138 13H12.0586L13.0039 5.43797C13.0381 5.16396 13.288 4.9696 13.562 5.00385C13.836 5.0381 14.0304 5.288 13.9961 5.56201L12.9961 13.562C12.9649 13.8122 12.7522 14 12.5 14H5.49999C5.24783 14 5.03513 13.8122 5.00385 13.562L4.00385 5.56201C3.9696 5.288 4.16396 5.0381 4.43797 5.00385Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 3.5C2.5 3.22386 2.72386 3 3 3H15C15.2761 3 15.5 3.22386 15.5 3.5C15.5 3.77614 15.2761 4 15 4H3C2.72386 4 2.5 3.77614 2.5 3.5Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.45999 0.97998C7.32738 0.97998 7.20021 1.03266 7.10644 1.12643C7.01267 1.2202 6.95999 1.34737 6.95999 1.47998V3.20998C6.95999 3.48612 6.73613 3.70998 6.45999 3.70998C6.18385 3.70998 5.95999 3.48612 5.95999 3.20998V1.47998C5.95999 1.08216 6.11803 0.700625 6.39933 0.41932C6.68064 0.138016 7.06217 -0.0200195 7.45999 -0.0200195H10.46C10.8578 -0.0200195 11.2393 0.138016 11.5207 0.41932C11.802 0.700625 11.96 1.08216 11.96 1.47998V3.47998C11.96 3.75612 11.7361 3.97998 11.46 3.97998C11.1838 3.97998 10.96 3.75612 10.96 3.47998V1.47998C10.96 1.34737 10.9073 1.2202 10.8135 1.12643C10.7198 1.03266 10.5926 0.97998 10.46 0.97998H7.45999Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_1808_4530"
                    x="0"
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
                      result="effect1_dropShadow_1808_4530"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1808_4530"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_1808_4530">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(2)"
                    />
                  </clipPath>
                </defs>
              </svg>
              ลบ
            </button>
            <button className="btn btn-warning">
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1808_4522)">
                  <g clip-path="url(#clip0_1808_4522)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.44 0.994202C13.374 0.994202 13.3087 1.00727 13.2477 1.03266C13.1868 1.05804 13.1315 1.09524 13.085 1.1421L13.0829 1.14418L7.4672 6.74031L7.10829 8.92247L9.25677 8.53575L14.8558 2.91707L14.8579 2.915C14.9048 2.86852 14.942 2.81322 14.9674 2.75229C14.9927 2.69136 15.0058 2.62601 15.0058 2.56C15.0058 2.49399 14.9927 2.42864 14.9674 2.36771C14.942 2.30678 14.9048 2.25148 14.8579 2.205L14.8565 2.20355L13.795 1.1421C13.7485 1.09524 13.6932 1.05804 13.6323 1.03266C13.5714 1.00727 13.506 0.994202 13.44 0.994202ZM12.8631 0.109562C13.0459 0.0334091 13.242 -0.00579834 13.44 -0.00579834C13.638 -0.00579834 13.8341 0.0334089 14.0169 0.109562C14.1993 0.185546 14.3648 0.296811 14.5041 0.436962C14.5044 0.437274 14.5047 0.437587 14.505 0.437899L15.5621 1.495C15.5624 1.49531 15.5627 1.49562 15.563 1.49592C15.7032 1.63518 15.8145 1.80075 15.8904 1.98314C15.9666 2.16592 16.0058 2.36198 16.0058 2.56C16.0058 2.75802 15.9666 2.95408 15.8904 3.13687C15.8145 3.31914 15.7033 3.48462 15.5633 3.62383C15.5629 3.62422 15.5625 3.62461 15.5621 3.625L9.85418 9.35294C9.78197 9.4254 9.68927 9.47397 9.58858 9.49209L6.58858 10.0321C6.42872 10.0609 6.26485 10.0102 6.14913 9.89621C6.03341 9.78222 5.98027 9.61913 6.00664 9.45885L6.50664 6.41885C6.52366 6.31537 6.57278 6.21986 6.64707 6.14583L12.3761 0.436752C12.5154 0.296699 12.6809 0.185507 12.8631 0.109562Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.5 2.5C3.36739 2.5 3.24021 2.55268 3.14645 2.64645C3.05268 2.74021 3 2.86739 3 3V12.5C3 12.6326 3.05268 12.7598 3.14645 12.8536C3.24022 12.9473 3.36739 13 3.5 13H13C13.1326 13 13.2598 12.9473 13.3536 12.8536C13.4473 12.7598 13.5 12.6326 13.5 12.5V9.5C13.5 9.22386 13.7239 9 14 9C14.2761 9 14.5 9.22386 14.5 9.5V12.5C14.5 12.8978 14.342 13.2794 14.0607 13.5607C13.7794 13.842 13.3978 14 13 14H3.5C3.10217 14 2.72064 13.842 2.43934 13.5607C2.15804 13.2794 2 12.8978 2 12.5V3C2 2.60218 2.15804 2.22064 2.43934 1.93934C2.72064 1.65804 3.10218 1.5 3.5 1.5H6.5C6.77614 1.5 7 1.72386 7 2C7 2.27614 6.77614 2.5 6.5 2.5H3.5Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_1808_4522"
                    x="0"
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
                      result="effect1_dropShadow_1808_4522"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1808_4522"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_1808_4522">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(2)"
                    />
                  </clipPath>
                </defs>
              </svg>
              แก้ไข
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardadmin;
