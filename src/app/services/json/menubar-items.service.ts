import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenubarItemsService {

  constructor() { }

  getPanelItems() {
    return [
      {
          "id": 473,
          "name": "Bank Account Management",
          "url": null,
          "subMenus": [
              {
                  "id": 214,
                  "name": "menu.BankDetail",
                  "url": null,
                  "subMenus": [
                      {
                          "id": 215,
                          "name": "Label.Add",
                          "url": "addBankDetails",
                          "subMenus": []
                      },
                      {
                          "id": 216,
                          "name": "Label.Manage",
                          "url": "manageBankDetails",
                          "subMenus": []
                      }
                  ]
              },
              {
                  "id": 226,
                  "name": "Label.treasury",
                  "url": null,
                  "subMenus": [
                      {
                          "id": 227,
                          "name": "Label.Add",
                          "url": "addTreasury",
                          "subMenus": []
                      },
                      {
                          "id": 228,
                          "name": "Label.Manage",
                          "url": "manageTreasury",
                          "subMenus": []
                      },
                      {
                          "id": 229,
                          "name": "Label.maps",
                          "url": "mapTreasury12",
                          "subMenus": []
                      }
                  ]
              },
              {
                  "id": 230,
                  "name": "Label.ManagePDA",
                  "url": null,
                  "subMenus": [
                      {
                          "id": 231,
                          "name": "Label.Add",
                          "url": "addTreasuryAccount",
                          "subMenus": []
                      },
                      {
                          "id": 232,
                          "name": "Label.Manage",
                          "url": "manageTreasuryAccount",
                          "subMenus": []
                      }
                  ]
              },
              {
                  "id": 233,
                  "name": "label.branchManagement",
                  "url": null,
                  "subMenus": [
                      {
                          "id": 234,
                          "name": "Label.Add",
                          "url": "addBankBranch",
                          "subMenus": []
                      },
                      {
                          "id": 235,
                          "name": "Label.modify",
                          "url": "updateBankBranch",
                          "subMenus": []
                      },
                      {
                          "id": 236,
                          "name": "Label.maps",
                          "url": "mapBankBranch",
                          "subMenus": []
                      },
                      {
                          "id": 315,
                          "name": "Label.view",
                          "url": "viewBankBranch",
                          "subMenus": []
                      },
                      {
                          "id": 316,
                          "name": "Label.delete",
                          "url": "deleteBankBranch",
                          "subMenus": []
                      },
                      {
                          "id": 354,
                          "name": "menu.ViewBranchDetails",
                          "url": "branchDetailsReport",
                          "subMenus": []
                      }
                  ]
              },
              {
                  "id": 237,
                  "name": "Label.BankAccount",
                  "url": null,
                  "subMenus": [
                      {
                          "id": 238,
                          "name": "Label.Add",
                          "url": "addBankAccount",
                          "subMenus": []
                      },
                      {
                          "id": 239,
                          "name": "Label.Manage",
                          "url": "manageBankAccount",
                          "subMenus": []
                      },
                      {
                          "id": 240,
                          "name": "menu.ViewPFMSStatus",
                          "url": "viewPFMSBankDetails",
                          "subMenus": []
                      },
                      {
                          "id": 353,
                          "name": "menu.ViewEgramPFMSDetails",
                          "url": "accountDetails",
                          "subMenus": []
                      },
                      {
                          "id": 402,
                          "name": "menu.DisableAccount",
                          "url": "getduplicateAccount",
                          "subMenus": []
                      }
                  ]
              },
              {
                  "id": 241,
                  "name": "Label.po",
                  "url": null,
                  "subMenus": [
                      {
                          "id": 242,
                          "name": "Label.Add",
                          "url": "addPostOffice",
                          "subMenus": []
                      },
                      {
                          "id": 243,
                          "name": "Label.Manage",
                          "url": "managePostOffice",
                          "subMenus": []
                      }
                  ]
              },
              {
                  "id": 244,
                  "name": "label.managePOAccount",
                  "url": null,
                  "subMenus": [
                      {
                          "id": 245,
                          "name": "Label.Add",
                          "url": "addPostOfficeAccount",
                          "subMenus": []
                      },
                      {
                          "id": 246,
                          "name": "Label.Manage",
                          "url": "managePostOfficeAccount",
                          "subMenus": []
                      },
                      {
                          "id": 247,
                          "name": "menu.ModifyStatus",
                          "url": "modifyStatusPostOfficeAccount",
                          "subMenus": []
                      }
                  ]
              },
              {
                  "id": 248,
                  "name": "Label.chequeBook",
                  "url": null,
                  "subMenus": [
                      {
                          "id": 249,
                          "name": "Label.Add",
                          "url": "addChequeBook",
                          "subMenus": []
                      },
                      {
                          "id": 250,
                          "name": "Label.Manage",
                          "url": "manageChequeBook",
                          "subMenus": []
                      },
                      {
                          "id": 251,
                          "name": "menu.ModifyStatus",
                          "url": "modifyChequeBookleafsStatus",
                          "subMenus": []
                      }
                  ]
              }
          ]
      },
      {
          "id": 474,
          "name": "Vendors Management",
          "url": null,
          "subMenus": [
              {
                  "id": 252,
                  "name": "Label.Beneficiary",
                  "url": null,
                  "subMenus": [
                      {
                          "id": 253,
                          "name": "Label.Add",
                          "url": "getAddBenificary",
                          "subMenus": []
                      },
                      {
                          "id": 254,
                          "name": "Label.Manage",
                          "url": "getModifyBenificary",
                          "subMenus": []
                      },
                      {
                          "id": 313,
                          "name": "Label.approve",
                          "url": "approveBenificary",
                          "subMenus": []
                      }
                  ]
              }
          ]
      }
    ]
  }


}




