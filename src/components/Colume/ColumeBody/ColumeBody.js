import React, { useRef } from "react";
import PropTypes from "prop-types";
import Input from "../../Input";
import { uniqueKey } from "../../../utils/funtions";

function ColumeBody({ list, addItem, changeItem }) {
  const cloneList = [...list];
  const ol = useRef(null);

  cloneList.push({
    onChange: ({ target }) => {
      addItem({ value: target.value });

      // not the best solution  )))
      setTimeout(() => {
        const lastChilde = ol.current
          .querySelector("li:nth-last-child(2)")
          .querySelector("input");
        lastChilde.focus();
      });
    },
    value: "",
    key: uniqueKey()
  });

  return (
    <ol ref={ol}>
      {cloneList.map(({ value, key, onChange }, index) => {
        return (
          <li key={key}>
            <Input
              value={value}
              onChange={
                onChange || (event => changeItem({ event, index, list }))
              }
            />
          </li>
        );
      })}
    </ol>
  );
}

ColumeBody.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
  addItem: PropTypes.func.isRequired,
  changeItem: PropTypes.func.isRequired
};
export default ColumeBody;
