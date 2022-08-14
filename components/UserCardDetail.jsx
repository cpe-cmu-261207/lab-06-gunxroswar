import React from "react";
import { IconMailForward, IconMapPins } from "@tabler/icons";

export default function UserCardDetail(props) {
  return (
    <div className="text-center">
      <strong>
        <IconMailForward />
        {props.email}
      </strong>
      <br />
      <strong>
        <IconMapPins />
        {props.address}
      </strong>
    </div>
  );
}
