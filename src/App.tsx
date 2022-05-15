import "./styles.css";
import { StrikeList } from "./strike/StrikeList";
import ExpiryPicker from "./expiry/ExpiryPicker";
import { useEffect, useState } from "react";
import moment, { Moment } from "moment";
import { Box } from "@mui/material";

const rawDates = [
  "2022-05-09",
  "2022-05-10",
  "2022-05-11",
  "2022-05-13",
  "2022-05-16",
  "2022-05-17",
  "2022-05-18",
  "2022-05-20",
  "2022-05-23",
  "2022-05-24",
  "2022-05-25",
  "2022-05-27",
  "2022-05-31",
  "2022-06-01",
  "2022-06-03",
  "2022-06-06",
  "2022-06-10",
  "2022-06-17",
  "2022-06-24",
  "2022-06-30",
  "2022-07-15",
  "2022-07-29",
  "2022-08-19",
  "2022-08-31",
  "2022-09-16",
  "2022-09-30",
  "2022-10-21",
  "2022-10-31",
  "2022-11-18",
  "2022-12-16",
  "2022-12-30",
  "2023-01-20",
  "2023-02-17",
  "2023-03-17",
  "2023-03-31",
  "2023-04-21",
  "2023-05-19",
  "2023-06-16",
  "2023-09-15",
  "2023-12-15",
  "2024-12-20",
  "2025-12-19",
  "2026-12-18"
];
export default function App(): JSX.Element {
  const [dates, setDates] = useState<Moment[]>([]);

  useEffect(() => {
    let momentDates = rawDates.map((x) => moment.utc(x, "YYYY-MM-DD"));
    setDates(momentDates);
  }, []);

  return (
    <div className="App">
      <Box display="flex">
        <ExpiryPicker dates={dates} onDateClick={() => {}} />
        <StrikeList />
      </Box>
    </div>
  );
}
