import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useUserProvider } from "../../api/FetchAPiProvider";
import { IUsers } from "../../Types";
import Header from "../common/Header";

const UserDetails = () => {
  const { userData } = useUserProvider();
  const { id } = useParams();
  const singleUser = userData.filter((user: IUsers) => user.login.md5 === id);

  const singleRandomUser = singleUser[0];
  console.log(singleRandomUser);

  return (
    <Box>
      <Header />
      <Box sx={{ mx: "auto", width: 350, borderRadius: "100%", mt: 3 }}>
        <img
          src={singleRandomUser?.picture?.large}
          style={{ width: "300px", borderRadius: "50%" }}
          alt=""
        />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5">
          Name:{" "}
          {`${singleRandomUser?.name.title}  ${singleRandomUser?.name.first} ${singleRandomUser?.name.last}`}
        </Typography>
        <Typography variant="h5">Gender: {singleRandomUser?.gender}</Typography>
        <Typography variant="h5">E-mail: {singleRandomUser?.email}</Typography>

        <Typography variant="h5">Phone: {singleRandomUser?.phone}</Typography>
      </Box>
    </Box>
  );
};

export default UserDetails;
