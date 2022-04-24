angular.module('appModule').service('Employees', EmployeesService);

const employeesUrl = 'https://fe-task.getsandbox.com/employees';

function EmployeesService($http) {
  const getEmployees = () => {
    return $http.get(employeesUrl);
  };

  const loadMoreEmployees = (currentPage) => {
    return $http.get(employeesUrl + '?page=' + currentPage);
  };

  return {
    getEmployees,
    loadMoreEmployees,
  };
}
