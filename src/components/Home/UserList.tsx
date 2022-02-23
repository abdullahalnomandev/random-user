import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserProvider } from "../../api/FetchAPiProvider";
import { IUsers } from "../../Types";

interface IProps {
  [x: string]: any;
  users: IUsers;
}

const UserList = () => {
  const {userData,fetchUsers}=useUserProvider()
  useEffect(() => {
    fetchUsers()
  }, []);

  const navigate = useNavigate()

  return (
    <div>

      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        style={{ color: "#ddd" }}
      >
        User List
      </Typography>
      <Box sx={{ width: "50%", margin: { md: "auto" } }}>
        <List>
          {userData?.map((user:IProps) => (
            <ListItem onClick={()=> navigate(`/user/${user.login.md5}`)} >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar src={user?.picture?.large} />
                  </ListItemAvatar>
                  <ListItemText primary={ `${user.name.title} ${user.name.first} ${user.name.last}`} />
                </ListItemButton>
        
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default UserList;
