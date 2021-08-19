import React from "react";
import User from "./User";
import { userPerPage } from "../utils/constant";

const Users = ({ user, page }) => {
  const startIndex = (page - 1) * userPerPage;

  const selectedUsers = user.slice(startIndex, startIndex + userPerPage);

  return selectedUsers.map((user) => <User user={user} key={user.id} />);
};

export default Users;
