import React, { useRef, useCallback, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { ModalView, ModalContent, ModalCloseButton } from "../styles";
import { GrClose } from "react-icons/gr";
const Modal = (props: { message: string; state: boolean; fn: Function }) => {
  const animation = useSpring({
    config: {
      duration: 25,
    },
    opacity: props.state ? 1 : 0,
    transform: props.state ? "scale(1)" : "scale(.8)",
    transition: "all 200ms",
  });
  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      props.fn();
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && props.state) {
        props.fn();
      }
    },
    [props.fn, props.state]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  const modalRef = React.useRef<HTMLDivElement>(null);
  return (
    <>
      {props.state ? (
        <>
          <ModalView ref={modalRef} onClick={(e) => closeModal(e)}>
            <animated.div style={animation}>
              <ModalContent>
                <ModalCloseButton onClick={() => props.fn()}>
                  <GrClose />
                </ModalCloseButton>
                <p>{props.message}</p>
              </ModalContent>
            </animated.div>
          </ModalView>
        </>
      ) : null}
    </>
  );
};

export default Modal;
