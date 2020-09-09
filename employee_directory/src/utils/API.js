import axios from "axios";

// Export array of employees
export default {
  getEmployees: function() {
    return axios
      .get("https://randomuser.me/api/?results=25")
  }
};
