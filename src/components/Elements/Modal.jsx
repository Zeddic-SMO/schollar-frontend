const Modal = (props) => {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-[black] bg-opacity-50 flex justify-center items-center">
        {props.children}
      </div>
    </>
  );
};

export default Modal;
