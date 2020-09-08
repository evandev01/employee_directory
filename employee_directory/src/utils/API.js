import axios from "axios";

// Export array of employees
export default {
  getEmployees: function() {
    return axios
      .get("https://api.github.com/orgs/github/public_members")
      .then(res => {
        const employees = res.data;
        return employees.map(employee => {
          return {
            login: employee.login,
            image: employee.avatar_url,
            profileUrl: employee.html_url
          };
        });
      });
  }
};
