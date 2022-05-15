import { Box } from "@mui/material";
import { Leg, StrikeInputType } from "../App";

export const InputBar = (props: { legs: Leg[] }) => {
  console.log(props.legs);
  return (
    <Box sx={{ backgroundColor: "#2E3E47", height: "100vh", width: "300px" }} />
  );
};
