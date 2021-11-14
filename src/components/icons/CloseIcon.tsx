interface iProp {
  iconClick: Function;
}
export default function CloseIcon({ iconClick }: iProp) {
  function onClick() {
    iconClick();
  }
  return (
    <button onClick={onClick} className="svg-button">
      <svg
        viewBox="0 0 24 24"
        data-uia="previewModal-closebtn"
        role="button"
        aria-label="close"
      >
        <path
          d="M12 10.586l7.293-7.293 1.414 1.414L13.414 12l7.293 7.293-1.414 1.414L12 13.414l-7.293 7.293-1.414-1.414L10.586 12 3.293 4.707l1.414-1.414L12 10.586z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  );
}
