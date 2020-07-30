import * as React from "react";

import {IButtonMoreProps} from "@components/button-more/interface";


const ButtonMore: React.FC<IButtonMoreProps> = (props) => {
  const {hide, children, onButtonClick} = props;

  if (hide) {
    return null;
  }
  return <div className="catalog__more">
    <button
      className="catalog__button"
      type="button"
      onClick={onButtonClick}
    >
      {children}
    </button>
  </div>;
};

export default ButtonMore;
