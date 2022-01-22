import React, { useCallback, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { ModalView, ModalContent, ModalCloseButton } from "../styles";
import { GrClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { selectModal, setModal } from "../features/sneakersSlice";
const Modal = (props: { children: any }) => {
  const { children } = props;
  const modalstate = useSelector(selectModal);
  const dispatch = useDispatch();

  const animation = useSpring({
    config: {
      duration: 25,
    },
    opacity: modalstate ? 1 : 0,
    transform: modalstate ? "scale(1)" : "scale(.8)",
    transition: "all 200ms",
  });
  const handleClose = (value: boolean) => {
    dispatch(setModal(value));
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && modalstate) {
        handleClose(false);
      }
    },
    [handleClose, modalstate]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  const modalRef = React.useRef<HTMLDivElement>(null);

  return (
    <ModalView ref={modalRef}>
      <animated.div style={animation}>
        <ModalCloseButton onClick={() => dispatch(setModal(false))}>
          <GrClose />
        </ModalCloseButton>
        <ModalContent>
          <div>{children}</div>
        </ModalContent>
      </animated.div>
    </ModalView>
  );
};

export default Modal;
