import * as React from "react";

import {IButtonMoreProps} from "@components/button-more/interface";


const ButtonMore: React.FC<IButtonMoreProps> = (props: React.PropsWithChildren<IButtonMoreProps>) => {
  const {hide, children, onButtonClick} = props;

  if (hide) {
    return null;
  }
  return <button
    className="catalog__button"
    type="button"
    onClick={onButtonClick}
  >
    {children}
  </button>;
};

export default ButtonMore;
