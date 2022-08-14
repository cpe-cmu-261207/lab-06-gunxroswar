import React, { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";
import UserCardDetail from "./UserCardDetail";

export default function Usercard(props) {
  const [isTap, setIsTap] = useState(false);
  const onClickHandler = () => {
    {
      isTap === false ? setIsTap(true) : setIsTap(false);
    }
  };
  return (
    <div>
      <div className="border-bottom">
        <div className="d-flex align-items-center p-3" onClick={onClickHandler}>
          <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
          <span className="text-center display-6 me-auto">{props.name}</span>
          {isTap === false ? <IconChevronDown /> : <IconChevronUp />}
        </div>
      </div>
      {isTap === false ? null : (
        <UserCardDetail email={props.email} address={props.address} />
      )}
    </div>
  );
}
