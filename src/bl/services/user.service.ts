import axios from "axios";

export const getRoles = async (user: any) => {
  let response = await axios.get("http://localhost:3001/api/roles", {
    params: {
      userId: user.sub,
    },
  });
  if (response.data) {
    return response.data;
  }
  return [];
};

export const isAdmin = async (user: any): Promise<boolean> => {
  let roles = await getRoles(user);
  return roles.includes((r: any) => r.name === "admin");
};
