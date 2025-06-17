import { environment } from '../../environments/environment';

export const AppConfig = {
  APP_VERSION: 'v 0.17',
  BASE_API: environment.apiBaseUrl + environment.contextPath,
  endpointPath: {
    login: 'auth/login',
    menus: 'auth/menus',
    bankList: "master/bank/bankList",
    districtListOfBankBranch: "master/bank/districtListOfBankBranch",
    unMappedBranch: "master/bank/unMappedBranch",
    mappedBranch:"master/bank/mappedBranch",
    saveBranchMappingUnMapping: "master/bank/saveBranchMappingUnMapping",
    agency: "master/agency"

  },
};
