import axiosClient from "../api/axiosClient";

const userApi = {
  getAll({ params, signal } = {}) {
    return axiosClient.get("/users", { params, signal });
  },
  getById({ id, signal } = {}) {
    return axiosClient.get(`/users/${id}`, { signal });
  },
  create(data) {
    return axiosClient.post("/users", data);
  },
  remove(id) {
    return axiosClient.delete(`/users/${id}`);
  },
};
export default userApi;
