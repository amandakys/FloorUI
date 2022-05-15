import { Box } from "@mui/material";
import { StrikeInputType, STRIKE_TYPE } from "../App";

export const StrikeTag = (props: { strike: StrikeInputType }) => {
  console.log(props.strike.type, "type");

  return (
    <Box
      sx={{
        backgroundColor:
          props.strike.type === STRIKE_TYPE.P ? "#87B0FF" : "#FFCB7F",
        height: "45px",
        width: "65px",
        alignItems: "center",
        display: "flex"
      }}
    >
      {props.strike.strike}
    </Box>
  );
};
