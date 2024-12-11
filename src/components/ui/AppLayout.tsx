import { Outlet } from "react-router";
import { Box } from "@mui/material";

function AppLayout() {
  return (
    <Box>
      <h1>Hello Finance App</h1>
      <Outlet />
    </Box>
  );
}

export default AppLayout;
