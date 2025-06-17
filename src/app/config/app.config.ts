import { environment } from '../../environments/environment';

export const AppConfig = {
  encryptionKey : 'urwz0BFEnXCSJJGSS3GgAgupk2Wt2eMFe1idLe7xXcg=',
  APP_VERSION: 'v 0.17',
  BASE_API: environment.apiBaseUrl + environment.contextPath,
  endpointPath: {
    login: 'auth/login',
    menus: 'auth/menus',
    bankList: "master/branch/bankList",
    districtListOfBankBranch: "master/branch/districtListOfBankBranch",
    unMappedBranch: "master/branch/unMappedBranch",
    mappedBranch:"master/branch/mappedBranch",
    saveBranchMappingUnMapping: "master/branch/saveBranchMappingUnMapping",
    agency: "master/agency",
    masterAgency:"master/bankAccount/master/agency"

  },
};
