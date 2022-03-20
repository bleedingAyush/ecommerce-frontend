import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import useClickOutside from "../Hooks/useClickOutside";
import "./Dropdown.css";

interface DropdownProps {
  value: string[];
  initialValue: string;
  styles: object;
  dropdownStyles: object;
  textStyles: object;
  downArrowStyles?: object;
}

const Dropdown = ({
  value,
  initialValue,
  styles,
  dropdownStyles,
  textStyles,
  downArrowStyles,
}: DropdownProps) => {
  const [isDropdownVisibile, setIsDropdownVisible] = useState(false);
  const [textValue, setText] = useState(initialValue);
  const [heightStyle, setHeightStyle] = useState<number>();
  const closeDropdown = () => setIsDropdownVisible(false);
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisibile);
  const dropdownRef = useClickOutside(closeDropdown);
  const nodeRef: React.MutableRefObject<any> = useRef(null);

  useEffect(() => {
    if (value.length == 1) {
      setHeightStyle(30);
    } else if (value.length == 2) {
      setHeightStyle(50);
    } else {
      setHeightStyle(90);
    }
  }, [value.length]);

  return (
    <>
      <div className="dropdown-container" ref={dropdownRef} style={styles}>
        <button className="drp-btn" onClick={toggleDropdown} style={styles}>
          <span className="main-text" style={textStyles}>
            {textValue}
          </span>
          <CSSTransition
            classNames={"arrow-down-anim"}
            timeout={400}
            nodeRef={nodeRef}
            in={isDropdownVisibile}
          >
            <svg
              ref={nodeRef}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3d3d3d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="down-arrow-svg"
              style={downArrowStyles}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </CSSTransition>
        </button>
        {isDropdownVisibile && (
          <div
            className="dropdown-content"
            style={{
              height: `${heightStyle}px`,
              ...dropdownStyles,
              ...textStyles,
            }}
          >
            {value.map((item: any) => {
              return (
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setText(item);
                    closeDropdown();
                  }}
                  key={item}
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;

Dropdown.defaultProps = {
  value: ["25 L", "26 L", "27 L", "28 L"],
  initialValue: "35 L",
  styles: {},
  dropdownStyles: {},
  textStyles: {},
};
