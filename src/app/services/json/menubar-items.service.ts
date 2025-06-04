import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenubarItemsService {
  constructor() {}

  getPanelItems() {
    return [
      {
        id: 118,
        name: 'Profile Management',
        url: null,
        subMenus: [
          {
            id: 113,
            name: 'menu.myprofile',
            url: null,
            subMenus: [
              {
                id: 477,
                name: 'menu.myprofile',
                url: 'modifyPRIASoftUserProfile',
                subMenus: [],
              },
              {
                id: 563,
                name: 'Re-Verify Checker profile of lower panchayat',
                url: 'modifyPRIASoftUserProfileBDO',
                subMenus: [],
              },
              {
                id: 564,
                name: 'View Verify Checker profile of lower panchayat',
                url: 'viewPRIASoftUserProfileBDO',
                subMenus: [],
              },
            ],
          },
          {
            id: 119,
            name: 'Label.GeneralProfile',
            url: null,
            subMenus: [
              {
                id: 120,
                name: 'Label.Add',
                url: 'saveprofile',
                subMenus: [],
              },
              {
                id: 1033,
                name: 'Approve Profile',
                url: 'approveAllProfile',
                subMenus: [],
              },
            ],
          },
          {
            id: 122,
            name: 'Basic Profile',
            url: null,
            subMenus: [
              {
                id: 448,
                name: 'Add',
                url: 'addBasicProfile',
                subMenus: [],
              },
              {
                id: 1016,
                name: 'Approve Basic Profile',
                url: 'approvebasicprofile',
                subMenus: [],
              },
            ],
          },
          {
            id: 125,
            name: 'Label.GeneralElectionDetails',
            url: null,
            subMenus: [
              {
                id: 123,
                name: 'Label.Add',
                url: 'addgeneralelectiondetails',
                subMenus: [],
              },
              {
                id: 124,
                name: 'Label.Manage',
                url: 'managegeneralelectiondetails',
                subMenus: [],
              },
              {
                id: 282,
                name: 'menu.ModeratePhotos',
                url: 'moderateERPhoto',
                subMenus: [],
              },
            ],
          },
          {
            id: 128,
            name: 'menu.ElectedMember',
            url: null,
            subMenus: [
              {
                id: 126,
                name: 'Label.Add',
                url: 'addelectedmemberdetails',
                subMenus: [],
              },
              {
                id: 127,
                name: 'Label.Manage',
                url: 'manageelectedmemberdetails',
                subMenus: [],
              },
            ],
          },
          {
            id: 360,
            name: 'menu.CommitteeMember',
            url: null,
            subMenus: [
              {
                id: 129,
                name: 'Label.Add',
                url: 'addstandingCommitteeMember',
                subMenus: [],
              },
              {
                id: 130,
                name: 'Label.Manage',
                url: 'managestandingcommitteeMember',
                subMenus: [],
              },
            ],
          },
          {
            id: 362,
            name: 'menu.MiscellaneousDetails',
            url: null,
            subMenus: [
              {
                id: 361,
                name: 'Label.Add',
                url: 'addMiscellaneousDetails',
                subMenus: [],
              },
              {
                id: 368,
                name: 'Label.Add',
                url: 'addemployeedetailsstate',
                subMenus: [],
              },
              {
                id: 369,
                name: 'Label.Manage',
                url: 'manageemployeedetailsstate',
                subMenus: [],
              },
            ],
          },
          {
            id: 365,
            name: 'menu.DeliveryofServices',
            url: 'serviceIndicator',
            subMenus: [],
          },
          {
            id: 366,
            name: 'menu.EmployeeDetails',
            url: null,
            subMenus: [
              {
                id: 363,
                name: 'Label.Add',
                url: 'addemployeedetails',
                subMenus: [],
              },
              {
                id: 364,
                name: 'Label.Manage',
                url: 'manageemployeedetails',
                subMenus: [],
              },
            ],
          },
          {
            id: 447,
            name: 'menu.DeliveryofServices',
            url: 'serviceIndicatorDetails',
            subMenus: [],
          },
          {
            id: 1017,
            name: 'Basic Profile',
            url: null,
            subMenus: [
              {
                id: 1018,
                name: 'Add ',
                url: 'addBasicProfile',
                subMenus: [],
              },
              {
                id: 1019,
                name: 'View',
                url: 'viewBasicProfile',
                subMenus: [],
              },
            ],
          },
          {
            id: 1064,
            name: 'Water Security Plan',
            url: null,
            subMenus: [
              {
                id: 1065,
                name: 'Add',
                url: 'waterBudgeting',
                subMenus: [],
              },
              {
                id: 1066,
                name: 'Manage',
                url: 'updateWaterBudgeting',
                subMenus: [],
              },
            ],
          },
        ],
      },
      {
        id: 131,
        name: 'Funds / Resource Envelope',
        url: null,
        subMenus: [
          {
            id: 132,
            name: 'menu.BudgetAllocation',
            url: null,
            subMenus: [
              {
                id: 481,
                name: 'menu.BudgetAllocation',
                url: 'addbudgetaryallocation',
                subMenus: [],
              },
            ],
          },
        ],
      },
      {
        id: 133,
        name: 'Panchayat Development Plan',
        url: null,
        subMenus: [
          {
            id: 134,
            name: 'menu.Suggestions',
            url: null,
            subMenus: [
              {
                id: 135,
                name: 'menu.resisterSuggestions',
                url: 'addsuggestion',
                subMenus: [],
              },
              {
                id: 136,
                name: 'menu.manageSuggestions',
                url: 'searchsuggestiongs',
                subMenus: [],
              },
            ],
          },
          {
            id: 137,
            name: 'menu.activityPool',
            url: null,
            subMenus: [
              {
                id: 138,
                name: 'menu.registerActivity',
                url: 'addactivity',
                subMenus: [],
              },
              {
                id: 139,
                name: 'menu.manageActivity',
                url: 'manageactivity',
                subMenus: [],
              },
              {
                id: 977,
                name: 'Activity Spatial Planning',
                url: 'activityGISMap',
                subMenus: [],
              },
            ],
          },
          {
            id: 140,
            name: 'menu.actionPlan',
            url: null,
            subMenus: [
              {
                id: 141,
                name: 'menu.registerPlan',
                url: 'addactionplan',
                subMenus: [],
              },
              {
                id: 142,
                name: 'menu.managePlan',
                url: 'manageplan',
                subMenus: [],
              },
              {
                id: 352,
                name: 'menu.UploadCert',
                url: 'showUploadCertTiedCom',
                subMenus: [],
              },
              {
                id: 1032,
                name: 'Approve Panchayat Development Plan',
                url: 'getApproveActionPlanLevelI',
                subMenus: [],
              },
            ],
          },
          {
            id: 428,
            name: 'Revert GP Plan',
            url: 'getRevertRecentActionPlan1',
            subMenus: [],
          },
          {
            id: 561,
            name: 'Mark Activity AS Completed',
            url: null,
            subMenus: [
              {
                id: 562,
                name: 'Mark Activity AS Completed',
                url: 'markActivityCompleted',
                subMenus: [],
              },
            ],
          },
          {
            id: 979,
            name: 'Gram Sabha Sankalp',
            url: null,
            subMenus: [
              {
                id: 980,
                name: 'Add',
                url: 'gramSabhaSankalp',
                subMenus: [],
              },
            ],
          },
          {
            id: 981,
            name: 'Gram Sabha Resolution',
            url: null,
            subMenus: [
              {
                id: 982,
                name: 'Add',
                url: 'sankalpResolution',
                subMenus: [],
              },
            ],
          },
        ],
      },
      {
        id: 143,
        name: 'Voucher/E-Payment Management',
        url: null,
        subMenus: [
          {
            id: 144,
            name: 'Label.receiptVoucher',
            url: null,
            subMenus: [
              {
                id: 145,
                name: 'Label.Add',
                url: 'addReceiptVoucher',
                subMenus: [],
              },
              {
                id: 146,
                name: 'Label.Manage',
                url: 'manageReceiptVoucher',
                subMenus: [],
              },
              {
                id: 147,
                name: 'menu.GenMiscReceipt',
                url: 'genrec',
                subMenus: [],
              },
            ],
          },
          {
            id: 148,
            name: 'Label.paymentVoucher',
            url: null,
            subMenus: [
              {
                id: 149,
                name: 'Label.Add',
                url: 'AddPaymentVoucher',
                subMenus: [],
              },
              {
                id: 150,
                name: 'Label.Manage',
                url: 'managePaymentVoucher11',
                subMenus: [],
              },
              {
                id: 151,
                name: 'menu.GenerateMiscPay',
                url: 'genpay',
                subMenus: [],
              },
              {
                id: 312,
                name: 'Label.OnlinepaymentVoucher',
                url: 'AddPaymentVoucherOnline',
                subMenus: [],
              },
              {
                id: 314,
                name: 'Label.Manage',
                url: 'managePaymentVoucher',
                subMenus: [],
              },
              {
                id: 317,
                name: 'menu.ViewPFMSStatus',
                url: 'vouchersPFMSStatus',
                subMenus: [],
              },
              {
                id: 569,
                name: 'Payment Recovery',
                url: 'voucherAmountRecovery',
                subMenus: [],
              },
              {
                id: 578,
                name: 'Transfer Amount from One PRI to another PRI of same level',
                url: 'panchayatAccChanges',
                subMenus: [],
              },
            ],
          },
          {
            id: 152,
            name: 'Label.contraVoucher',
            url: null,
            subMenus: [
              {
                id: 153,
                name: 'Label.Add',
                url: 'OpenContraVoucher',
                subMenus: [],
              },
              {
                id: 154,
                name: 'Label.Manage',
                url: 'manageContraVoucher',
                subMenus: [],
              },
            ],
          },
          {
            id: 155,
            name: 'Label.journalVoucher',
            url: null,
            subMenus: [
              {
                id: 156,
                name: 'Label.Add',
                url: 'addJournalVoucher',
                subMenus: [],
              },
              {
                id: 157,
                name: 'Label.Manage',
                url: 'manageJournalVoucher',
                subMenus: [],
              },
            ],
          },
          {
            id: 579,
            name: 'Legacy Payment Monitoring XVFC',
            url: null,
            subMenus: [
              {
                id: 580,
                name: 'Label.Add',
                url: 'OfflinePaymentXVFC',
                subMenus: [],
              },
              {
                id: 581,
                name: 'Label.Manage',
                url: 'manageOfflinePaymentXVFCScheme',
                subMenus: [],
              },
            ],
          },
        ],
      },
      {
        id: 158,
        name: 'Accounting Management',
        url: null,
        subMenus: [
          {
            id: 159,
            name: 'menu.ClosingofBooks',
            url: null,
            subMenus: [
              {
                id: 160,
                name: 'Label.closedaybook',
                url: 'showDayBook',
                subMenus: [],
              },
              {
                id: 161,
                name: 'menu.CloseMonthBook',
                url: 'showMonthBook',
                subMenus: [],
              },
              {
                id: 162,
                name: 'menu.CloseYearBook',
                url: 'showYearBook',
                subMenus: [],
              },
              {
                id: 163,
                name: 'Label.marchSupp',
                url: 'marchsup',
                subMenus: [
                  {
                    id: 164,
                    name: 'Label.Add',
                    url: '36951',
                    subMenus: [],
                  },
                  {
                    id: 165,
                    name: 'Label.Manage',
                    url: '37316',
                    subMenus: [],
                  },
                ],
              },
              {
                id: 169,
                name: 'menu.SchemeDBClose',
                url: 'showSchemeWiseDayBook',
                subMenus: [],
              },
            ],
          },
          {
            id: 166,
            name: 'psSection11.BC',
            url: null,
            subMenus: [
              {
                id: 167,
                name: 'Label.Add',
                url: 'AddBankReconciliation',
                subMenus: [],
              },
              {
                id: 168,
                name: 'Label.Manage',
                url: 'ManageBankReconciliation',
                subMenus: [],
              },
            ],
          },
        ],
      },
      {
        id: 170,
        name: 'Works/Progress Management',
        url: null,
        subMenus: [
          {
            id: 171,
            name: 'Label.activityOutput',
            url: null,
            subMenus: [
              {
                id: 172,
                name: 'menu.registerActivityOutput',
                url: 'defineactivityoutput',
                subMenus: [],
              },
            ],
          },
          {
            id: 173,
            name: 'menu.TechnicalSanction',
            url: null,
            subMenus: [
              {
                id: 174,
                name: 'menu.registerTechnicalApproval',
                url: 'workSearchDataFrTechnicalApproval',
                subMenus: [],
              },
              {
                id: 175,
                name: 'menu.manageTechnicalApproval',
                url: 'workSearchDataFrManageTechnicalApproval',
                subMenus: [],
              },
            ],
          },
          {
            id: 176,
            name: 'menu.AdminSanction',
            url: null,
            subMenus: [
              {
                id: 177,
                name: 'menu.registerAdminApproval',
                url: 'workSearchDataFradminApproval',
                subMenus: [],
              },
              {
                id: 178,
                name: 'menu.manageAdminApproval',
                url: 'worksearchdatafrmanageadminapproval',
                subMenus: [],
              },
            ],
          },
          {
            id: 179,
            name: 'menu.FundsEarmarked',
            url: null,
            subMenus: [
              {
                id: 180,
                name: 'Label.Add',
                url: 'workSearchDataFrfundrelease1',
                subMenus: [],
              },
              {
                id: 181,
                name: 'Label.Manage',
                url: 'worksearchdatafrmanagefundrelease1',
                subMenus: [],
              },
            ],
          },
          {
            id: 182,
            name: 'Label.progReporting',
            url: null,
            subMenus: [
              {
                id: 183,
                name: 'menu.registerProgressReporting',
                url: 'workListforphysicalprogress',
                subMenus: [],
              },
              {
                id: 407,
                name: 'Update Asset Location',
                url: 'updateassetlocationsearch',
                subMenus: [],
              },
              {
                id: 582,
                name: 'Revert Saving Amount',
                url: 'getRevertRemainingExpenditureAmount',
                subMenus: [],
              },
              {
                id: 1003,
                name: 'Revert Remaining Expenditure Amount',
                url: 'getRevertRemainingExpenditureAmount',
                subMenus: [],
              },
            ],
          },
          {
            id: 375,
            name: 'menu.ActivityDelegation',
            url: null,
            subMenus: [
              {
                id: 376,
                name: 'Label.Add',
                url: 'addImplementingAgency',
                subMenus: [],
              },
              {
                id: 377,
                name: 'Label.modify',
                url: 'modifyImplementingAgency',
                subMenus: [],
              },
            ],
          },
          {
            id: 410,
            name: 'Revert Activity Status',
            url: 'getRevertActivityStatus',
            subMenus: [],
          },
          {
            id: 1001,
            name: 'Restify Asset Category Mapping',
            url: null,
            subMenus: [
              {
                id: 1002,
                name: 'Add',
                url: 'updateAstCatAndSubCatOfSanitationList',
                subMenus: [],
              },
            ],
          },
          {
            id: 1057,
            name: 'Fund Release',
            url: null,
            subMenus: [
              {
                id: 1058,
                name: 'Add Fund Release',
                url: 'getTotalFundsReceipt',
                subMenus: [],
              },
              {
                id: 1059,
                name: 'Manage Fund Release',
                url: 'manageTotalFundsReceipt',
                subMenus: [],
              },
            ],
          },
        ],
      },
      {
        id: 184,
        name: 'menu.mActionSoft',
        url: null,
        subMenus: [
          {
            id: 483,
            name: 'menu.mActionSoft',
            url: null,
            subMenus: [
              {
                id: 185,
                name: 'menu.RegisterNewUser',
                url: 'registerForMActionSoft',
                subMenus: [],
              },
              {
                id: 186,
                name: 'menu.manageuser',
                url: 'modifyRegistration',
                subMenus: [],
              },
              {
                id: 187,
                name: 'menu.ModeratePhotos',
                url: 'managemactionphoto',
                subMenus: [],
              },
              {
                id: 318,
                name: 'menu.Deactivate',
                url: 'deactivateUser',
                subMenus: [],
              },
            ],
          },
        ],
      },
      {
        id: 191,
        name: 'Master Data Management',
        url: null,
        subMenus: [
          {
            id: 192,
            name: 'menu.processflow',
            url: null,
            subMenus: [
              {
                id: 193,
                name: 'Label.Add',
                url: 'addprocessflow',
                subMenus: [],
              },
            ],
          },
          {
            id: 194,
            name: 'Label.changeFinYear',
            url: 'setFinancialYear',
            subMenus: [],
          },
          {
            id: 195,
            name: 'Label.accounthead',
            url: null,
            subMenus: [
              {
                id: 196,
                name: 'Label.Add',
                url: 'accheadadd',
                subMenus: [],
              },
              {
                id: 197,
                name: 'Label.Manage',
                url: 'manageacchead',
                subMenus: [],
              },
              {
                id: 347,
                name: 'Label.maps',
                url: 'showMapMajorHeadForm',
                subMenus: [],
              },
            ],
          },
          {
            id: 198,
            name: 'Label.Scheme',
            url: null,
            subMenus: [
              {
                id: 199,
                name: 'Label.Add',
                url: 'schemeCreate',
                subMenus: [],
              },
              {
                id: 200,
                name: 'Label.Manage',
                url: 'schemeModify',
                subMenus: [],
              },
              {
                id: 201,
                name: 'Label.maps',
                url: 'mapScheme',
                subMenus: [],
              },
            ],
          },
          {
            id: 202,
            name: 'menu.StateHeadAccount',
            url: null,
            subMenus: [
              {
                id: 203,
                name: 'Label.Add',
                url: 'hoa',
                subMenus: [],
              },
              {
                id: 204,
                name: 'Label.Manage',
                url: 'shoa',
                subMenus: [],
              },
            ],
          },
          {
            id: 205,
            name: 'Label.fundReleasePRI',
            url: null,
            subMenus: [
              {
                id: 206,
                name: 'Label.Add',
                url: 'fundp',
                subMenus: [],
              },
              {
                id: 207,
                name: 'Label.Manage',
                url: 'mfundp',
                subMenus: [],
              },
            ],
          },
          {
            id: 208,
            name: 'menu.MapDesignation',
            url: null,
            subMenus: [
              {
                id: 209,
                name: 'Label.Add',
                url: 'addmapdesignation',
                subMenus: [],
              },
              {
                id: 210,
                name: 'Label.Manage',
                url: 'managemapdesignation',
                subMenus: [],
              },
            ],
          },
          {
            id: 211,
            name: 'Label.ElectionTerm',
            url: null,
            subMenus: [
              {
                id: 212,
                name: 'Label.Add',
                url: 'addelectionterms',
                subMenus: [],
              },
              {
                id: 213,
                name: 'Label.Manage',
                url: 'managesetelectiontermbyelection',
                subMenus: [],
              },
            ],
          },
          {
            id: 217,
            name: 'Label.itemMaster',
            url: null,
            subMenus: [
              {
                id: 218,
                name: 'Label.Add',
                url: 'addStockItemsMaster',
                subMenus: [],
              },
              {
                id: 219,
                name: 'Label.Manage',
                url: 'manageStockItemsMaster',
                subMenus: [],
              },
              {
                id: 378,
                name: 'menu.MapStockItems',
                url: 'showMapItemForm',
                subMenus: [],
              },
            ],
          },
          {
            id: 220,
            name: 'Label.CommitteeDetails',
            url: null,
            subMenus: [
              {
                id: 221,
                name: 'Label.Add',
                url: 'addstandingCommittee',
                subMenus: [],
              },
              {
                id: 222,
                name: 'Label.Manage',
                url: 'managestandingCommittee',
                subMenus: [],
              },
            ],
          },
          {
            id: 223,
            name: 'menu.Services',
            url: null,
            subMenus: [
              {
                id: 224,
                name: 'Label.Add',
                url: 'createservice',
                subMenus: [],
              },
              {
                id: 225,
                name: 'Label.Manage',
                url: 'manageservice',
                subMenus: [],
              },
            ],
          },
          {
            id: 255,
            name: 'Label.yearlyblen',
            url: null,
            subMenus: [
              {
                id: 256,
                name: 'Label.Add',
                url: 'addOpeningBalancePRIAsoft',
                subMenus: [],
              },
              {
                id: 257,
                name: 'Label.Manage',
                url: 'manageOpeningbalancePRIASoft',
                subMenus: [],
              },
              {
                id: 258,
                name: 'Label.delete',
                url: 'deleteopeningBalance',
                subMenus: [],
              },
              {
                id: 259,
                name: 'Label.noe',
                url: 'addNoteOfErrorPRIAsoft',
                subMenus: [],
              },
            ],
          },
          {
            id: 260,
            name: 'Label.stockitemdtls',
            url: null,
            subMenus: [
              {
                id: 261,
                name: 'Label.Add',
                url: 'addStockOpeninBalance',
                subMenus: [],
              },
              {
                id: 262,
                name: 'Label.Manage',
                url: 'manageStockOpeninBalance',
                subMenus: [],
              },
            ],
          },
          {
            id: 333,
            name: 'menu.ViewCodes',
            url: null,
            subMenus: [
              {
                id: 334,
                name: 'Label.schemeCodes',
                url: 'viewSchemeComponentXML',
                subMenus: [],
              },
              {
                id: 335,
                name: 'Label.bankCode',
                url: 'getBankListForXML',
                subMenus: [],
              },
              {
                id: 336,
                name: 'menu.ViewBranchCodes',
                url: 'showViewBranchFormXML',
                subMenus: [],
              },
              {
                id: 337,
                name: 'Label.viewtreasuryCode',
                url: 'getTreasuryListForXml',
                subMenus: [],
              },
              {
                id: 338,
                name: 'Label.viewpoCode',
                url: 'getPOListForXml',
                subMenus: [],
              },
              {
                id: 339,
                name: 'Label.viewAgencyCode',
                url: 'getAgencyForXML',
                subMenus: [],
              },
              {
                id: 340,
                name: 'Label.viewEmployeeCode',
                url: 'getEmployeeForXML',
                subMenus: [],
              },
              {
                id: 341,
                name: 'menu.ViewCitizenCodes',
                url: 'getCitizenForXML',
                subMenus: [],
              },
            ],
          },
          {
            id: 357,
            name: 'menu.NOErrorApp',
            url: 'getdistrictNOEForm',
            subMenus: [],
          },
          {
            id: 456,
            name: 'Label.schemeComp',
            url: null,
            subMenus: [
              {
                id: 457,
                name: 'Label.Add',
                url: 'schemeComponentCreate',
                subMenus: [],
              },
              {
                id: 458,
                name: 'Label.Manage',
                url: 'schemeComponentModify',
                subMenus: [],
              },
            ],
          },
          {
            id: 555,
            name: 'Extend Supplementary Plan',
            url: null,
            subMenus: [
              {
                id: 557,
                name: 'Extend Supplementary Plan',
                url: 'getExtendPlan',
                subMenus: [],
              },
            ],
          },
          {
            id: 556,
            name: 'Exempt Mission Antyodaya Survey',
            url: null,
            subMenus: [
              {
                id: 558,
                name: 'Exempt Mission Antyodaya Survey',
                url: 'maForm',
                subMenus: [],
              },
            ],
          },
          {
            id: 1028,
            name: 'Service Delivery',
            url: null,
            subMenus: [
              {
                id: 1029,
                name: 'Register Service',
                url: 'registerService',
                subMenus: [],
              },
              {
                id: 1030,
                name: 'Panchayat Service Delivery',
                url: 'panchayatServiceDelivery',
                subMenus: [],
              },
              {
                id: 1053,
                name: 'Manage Registered Services',
                url: 'manageRegisteredServices',
                subMenus: [],
              },
            ],
          },
          {
            id: 1054,
            name: 'Exempt Panchayat Election',
            url: null,
            subMenus: [
              {
                id: 1055,
                name: 'Exempt',
                url: 'byPassElectionTermGet',
                subMenus: [],
              },
            ],
          },
          {
            id: 1061,
            name: 'Employee Designation',
            url: null,
            subMenus: [
              {
                id: 1062,
                name: 'Add',
                url: 'addEmployeeDesignation',
                subMenus: [],
              },
              {
                id: 1063,
                name: 'Manage',
                url: 'modifyEmployeeDesignation',
                subMenus: [],
              },
            ],
          },
          {
            id: 1068,
            name: 'Define Asset Configuration',
            url: null,
            subMenus: [
              {
                id: 1069,
                name: 'ADD',
                url: 'assetConfiguration',
                subMenus: [],
              },
            ],
          },
        ],
      },
      {
        id: 283,
        name: 'Label.report',
        url: null,
        subMenus: [
          {
            id: 284,
            name: 'menu.FinYearProgRpt',
            url: null,
            subMenus: [],
          },
          {
            id: 285,
            name: 'menu.MASReg',
            url: null,
            subMenus: [
              {
                id: 287,
                name: 'menu.FormatI',
                url: 'reportAnnualAction',
                subMenus: [],
              },
              {
                id: 288,
                name: 'menu.FormatII',
                url: 'annualConsolidatedReport',
                subMenus: [],
              },
              {
                id: 289,
                name: 'menu.FormatIII',
                url: 'monthlyReconciliationReport',
                subMenus: [],
              },
              {
                id: 290,
                name: 'menu.FormatIV',
                url: 'registerReceivablesPayablesReport',
                subMenus: [],
              },
              {
                id: 291,
                name: 'menu.FormatVII',
                url: 'getInventoryRegisterReport',
                subMenus: [],
              },
              {
                id: 292,
                name: 'menu.FormatVIII',
                url: 'getDemandCollectionReport',
                subMenus: [],
              },
            ],
          },
          {
            id: 293,
            name: 'menu.AccountingReports',
            url: null,
            subMenus: [
              {
                id: 294,
                name: 'Label.daybook',
                url: 'dayBook',
                subMenus: [],
              },
              {
                id: 295,
                name: 'menu.MonthCashBook',
                url: 'cashBook',
                subMenus: [],
              },
              {
                id: 296,
                name: 'menu.MonthCashBookORI',
                url: 'cashBookConsolidatedNew',
                subMenus: [],
              },
              {
                id: 297,
                name: 'Label.ledgerbook',
                url: 'LedgerReport',
                subMenus: [],
              },
              {
                id: 298,
                name: 'Label.journalbook',
                url: 'JournalReport',
                subMenus: [],
              },
              {
                id: 299,
                name: 'menu.RegisterAdvORI',
                url: 'RegisterOfAdvanceOdisha1',
                subMenus: [],
              },
              {
                id: 300,
                name: 'Label.OBReport',
                url: 'OpeningBalances',
                subMenus: [],
              },
              {
                id: 301,
                name: 'Label.Bankreport',
                url: 'reportMapBankAccount',
                subMenus: [],
              },
              {
                id: 331,
                name: 'Label.ffcPaymentReport',
                url: 'statePaymentReport',
                subMenus: [],
              },
              {
                id: 342,
                name: 'PRIs registered on PFMS and Accounting',
                url: 'panchayatAPreport',
                subMenus: [],
              },
              {
                id: 343,
                name: 'menu.registeredPFMS',
                url: 'panchayatPFMSreport',
                subMenus: [],
              },
              {
                id: 344,
                name: 'menu.VendorWiseExpDetail',
                url: 'vendorInterface',
                subMenus: [],
              },
              {
                id: 345,
                name: 'menu.PendingFiles',
                url: 'pendingFilesReport',
                subMenus: [],
              },
              {
                id: 346,
                name: 'Label.BranchDetail',
                url: 'branchDetailsReport',
                subMenus: [],
              },
              {
                id: 348,
                name: 'menu.RecAnalysis',
                url: 'slReceiptAnalysisReport1',
                subMenus: [],
              },
              {
                id: 349,
                name: 'menu.ExpAnalysis',
                url: 'slExpenditureAnalysisReport1',
                subMenus: [],
              },
              {
                id: 350,
                name: 'menu.Form30RecAnalysis',
                url: 'formReceiptAnalysisReport1',
                subMenus: [],
              },
              {
                id: 351,
                name: 'menu.Form30ExpAnalysis',
                url: 'formExpenditureAnalysisReport1',
                subMenus: [],
              },
              {
                id: 358,
                name: 'menu.StatusReport',
                url: 'statusReport',
                subMenus: [],
              },
              {
                id: 371,
                name: 'menu.AdvanceLedgerORI',
                url: 'advanceLedgerReportOdisha',
                subMenus: [],
              },
              {
                id: 372,
                name: 'menu.VoucherReport',
                url: 'voucherReport',
                subMenus: [],
              },
              {
                id: 373,
                name: 'Label.deductionrpt',
                url: 'deductionReport',
                subMenus: [],
              },
              {
                id: 408,
                name: 'Label.VendorWiseDetails',
                url: 'vendorDetails',
                subMenus: [],
              },
              {
                id: 409,
                name: 'Reverse Receipt Data(Treasury-PFMS)',
                url: 'getReverseReceiptDataReport',
                subMenus: [],
              },
              {
                id: 435,
                name: 'Tied Expenditure',
                url: 'tiedExpenditure',
                subMenus: [],
              },
              {
                id: 439,
                name: 'Vendor Wise Expenditure Detail',
                url: 'districtVendorDetails',
                subMenus: [],
              },
              {
                id: 441,
                name: 'Vendor/Account wise Expenditure Detail',
                url: 'districtWiseVendorDetails',
                subMenus: [],
              },
              {
                id: 443,
                name: 'Month Wise Reverse Receipt',
                url: 'monthWiseReverseReceipt',
                subMenus: [],
              },
              {
                id: 459,
                name: 'Vendor Wise IP Address and Expenditure Details',
                url: 'vendorWiseIPAddReport',
                subMenus: [],
              },
              {
                id: 461,
                name: 'Panchayat Profile Details',
                url: 'stateWiseMakerCheckerReport',
                subMenus: [],
              },
              {
                id: 499,
                name: 'Receipt Cancellation Report',
                url: 'receiptCancilationReport',
                subMenus: [],
              },
              {
                id: 500,
                name: 'OB Cancellation Report',
                url: 'obCancellationReport',
                subMenus: [],
              },
              {
                id: 565,
                name: 'View Verify Checker profile of lower panchayat',
                url: 'userProfileNewVerifedCAG',
                subMenus: [],
              },
              {
                id: 566,
                name: 'Macker Checker Profile Details Report',
                url: 'makerCheckerProfileReport',
                subMenus: [],
              },
              {
                id: 567,
                name: 'State Wise View Verify Checker profile of lower panchayat',
                url: 'userProfileAll',
                subMenus: [],
              },
              {
                id: 570,
                name: 'Mismatch in Checkers Reverified Profile Name And DSC Name',
                url: 'mismatchCheckerProfile',
                subMenus: [],
              },
              {
                id: 571,
                name: 'Details Of Payments In Month',
                url: 'getDetailsOfPaymentsInMonth',
                subMenus: [],
              },
              {
                id: 572,
                name: 'Duplicate Mobile Number(Consolidated)',
                url: 'getMobileNumberDuplicate',
                subMenus: [],
              },
              {
                id: 573,
                name: 'Maker and Checker Hierarchy ',
                url: 'Hierarchy',
                subMenus: [],
              },
              {
                id: 574,
                name: 'Reverse Receipt Date Wise (Treasury-PFMS)',
                url: 'receiptVoucherStatusNewData',
                subMenus: [],
              },
              {
                id: 575,
                name: 'Treasury Voucher Approve/Reject',
                url: 'treasuryVoucherAppRej',
                subMenus: [],
              },
              {
                id: 1023,
                name: 'Consolidated Scheme Wise Unspent Balance',
                url: 'schemeWiseUnspendBalanceVillage',
                subMenus: [],
              },
            ],
          },
          {
            id: 302,
            name: 'Label.otherreports',
            url: null,
            subMenus: [
              {
                id: 303,
                name: 'menu.SchemewiseTrialBal',
                url: 'trialBalanceReport?type=S',
                subMenus: [],
              },
              {
                id: 304,
                name: 'menu.TrialBal',
                url: 'trialBalanceReport?type=T',
                subMenus: [],
              },
              {
                id: 305,
                name: 'menu.IncExpReport',
                url: 'trialBalanceReport?type=I',
                subMenus: [],
              },
              {
                id: 306,
                name: 'menu.BalanceSheet',
                url: 'trialBalanceReport?type=B',
                subMenus: [],
              },
              {
                id: 307,
                name: 'Label.fundDiversionReport',
                url: 'fundDiversionReport',
                subMenus: [],
              },
              {
                id: 308,
                name: 'Label.accountWiseCashBook',
                url: 'accountCashBookReport',
                subMenus: [],
              },
              {
                id: 309,
                name: 'Label.remiReport',
                url: 'remittanceBalanceReport',
                subMenus: [],
              },
              {
                id: 370,
                name: 'Label.subsidiaryCB',
                url: 'subsidiaryCashBook',
                subMenus: [],
              },
              {
                id: 1067,
                name: 'Developed Asset Category Wise Report ',
                url: 'assetCategoryWiseReport',
                subMenus: [],
              },
            ],
          },
          {
            id: 496,
            name: 'PFMS Bank ePO Payment Pending Report',
            url: null,
            subMenus: [
              {
                id: 497,
                name: 'Send Email',
                url: 'pFMSBankPaymentEmail',
                subMenus: [],
              },
              {
                id: 498,
                name: 'View Email',
                url: 'viewPFMSEmailedData',
                subMenus: [],
              },
            ],
          },
          {
            id: 559,
            name: 'Planning',
            url: null,
            subMenus: [
              {
                id: 330,
                name: 'menu.ActivityStatusReport',
                url: 'activityStatusStateReport',
                subMenus: [],
              },
              {
                id: 560,
                name: 'Monthly Bulletin Report',
                url: 'monthlyReport',
                subMenus: [],
              },
            ],
          },
        ],
      },
      {
        id: 399,
        name: 'menu.PanchayatWindow',
        url: 'panchayatWindow',
        subMenus: [],
      },
      {
        id: 473,
        name: 'Bank Account Management',
        url: null,
        subMenus: [
          {
            id: 214,
            name: 'menu.BankDetail',
            url: null,
            subMenus: [
              {
                id: 215,
                name: 'Label.Add',
                url: 'addBankDetails',
                subMenus: [],
              },
              {
                id: 216,
                name: 'Label.Manage',
                url: 'manageBankDetails',
                subMenus: [],
              },
            ],
          },
          {
            id: 226,
            name: 'Label.treasury',
            url: null,
            subMenus: [
              {
                id: 227,
                name: 'Label.Add',
                url: 'addTreasury',
                subMenus: [],
              },
              {
                id: 228,
                name: 'Label.Manage',
                url: 'manageTreasury',
                subMenus: [],
              },
              {
                id: 229,
                name: 'Label.maps',
                url: 'mapTreasury12',
                subMenus: [],
              },
            ],
          },
          {
            id: 230,
            name: 'Label.ManagePDA',
            url: null,
            subMenus: [
              {
                id: 231,
                name: 'Label.Add',
                url: 'addTreasuryAccount',
                subMenus: [],
              },
              {
                id: 232,
                name: 'Label.Manage',
                url: 'manageTreasuryAccount',
                subMenus: [],
              },
            ],
          },
          {
            id: 233,
            name: 'label.branchManagement',
            url: null,
            subMenus: [
              {
                id: 234,
                name: 'Label.Add',
                url: 'addBankBranch',
                subMenus: [],
              },
              {
                id: 235,
                name: 'Label.modify',
                url: 'updateBankBranch',
                subMenus: [],
              },
              {
                id: 236,
                name: 'Label.maps',
                url: 'mapBankBranch',
                subMenus: [],
              },
              {
                id: 315,
                name: 'Label.view',
                url: 'viewBankBranch',
                subMenus: [],
              },
              {
                id: 316,
                name: 'Label.delete',
                url: 'deleteBankBranch',
                subMenus: [],
              },
              {
                id: 354,
                name: 'menu.ViewBranchDetails',
                url: 'branchDetailsReport',
                subMenus: [],
              },
            ],
          },
          {
            id: 237,
            name: 'Label.BankAccount',
            url: null,
            subMenus: [
              {
                id: 238,
                name: 'Label.Add',
                url: 'addBankAccount',
                subMenus: [],
              },
              {
                id: 239,
                name: 'Label.Manage',
                url: 'manageBankAccount',
                subMenus: [],
              },
              {
                id: 240,
                name: 'menu.ViewPFMSStatus',
                url: 'viewPFMSBankDetails',
                subMenus: [],
              },
              {
                id: 353,
                name: 'menu.ViewEgramPFMSDetails',
                url: 'accountDetails',
                subMenus: [],
              },
              {
                id: 402,
                name: 'menu.DisableAccount',
                url: 'getduplicateAccount',
                subMenus: [],
              },
            ],
          },
          {
            id: 241,
            name: 'Label.po',
            url: null,
            subMenus: [
              {
                id: 242,
                name: 'Label.Add',
                url: 'addPostOffice',
                subMenus: [],
              },
              {
                id: 243,
                name: 'Label.Manage',
                url: 'managePostOffice',
                subMenus: [],
              },
            ],
          },
          {
            id: 244,
            name: 'label.managePOAccount',
            url: null,
            subMenus: [
              {
                id: 245,
                name: 'Label.Add',
                url: 'addPostOfficeAccount',
                subMenus: [],
              },
              {
                id: 246,
                name: 'Label.Manage',
                url: 'managePostOfficeAccount',
                subMenus: [],
              },
              {
                id: 247,
                name: 'menu.ModifyStatus',
                url: 'modifyStatusPostOfficeAccount',
                subMenus: [],
              },
            ],
          },
          {
            id: 248,
            name: 'Label.chequeBook',
            url: null,
            subMenus: [
              {
                id: 249,
                name: 'Label.Add',
                url: 'addChequeBook',
                subMenus: [],
              },
              {
                id: 250,
                name: 'Label.Manage',
                url: 'manageChequeBook',
                subMenus: [],
              },
              {
                id: 251,
                name: 'menu.ModifyStatus',
                url: 'modifyChequeBookleafsStatus',
                subMenus: [],
              },
            ],
          },
        ],
      },
      {
        id: 474,
        name: 'Vendors Management',
        url: null,
        subMenus: [
          {
            id: 252,
            name: 'Label.Beneficiary',
            url: null,
            subMenus: [
              {
                id: 253,
                name: 'Label.Add',
                url: 'getAddBenificary',
                subMenus: [],
              },
              {
                id: 254,
                name: 'Label.Manage',
                url: 'getModifyBenificary',
                subMenus: [],
              },
              {
                id: 313,
                name: 'Label.approve',
                url: 'approveBenificary',
                subMenus: [],
              },
            ],
          },
        ],
      },
    ];
  }
}
