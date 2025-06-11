import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyImpactAreasService {

  constructor() { }


  getKeyImpactArea(){
    return [
      {
        title: "Panchayat/Council Status",
        icon: "pachayatCouncil",
        type: "default",
        cards: [
          { heading: "2,57,542 GPs", subtext: "Profile created", progress: 85 },
          { heading: "2,57,542 GPs", subtext: "Profile created", additional: "Elected Representation (Active)" },
          { heading: "2,57,542 GPs", subtext: "Profile created", progress: 75 }
        ]
      },
      {
        title: "Planning & Reporting",
        icon: "planingAndReporting",
        type: "planning",
        smallCards: [
          { heading: "332 ZPs", subtext: "Uploaded ZP Plan (2025-2026)", progress: 85 },
          { heading: "332 ZPs", subtext: "Uploaded ZP Plan (2025-2026)", progress: 15 },
          { heading: "332 ZPs", subtext: "Uploaded ZP Plan (2025-2026)", progress: 65 },
          { heading: "332 ZPs", subtext: "Uploaded ZP Plan (2025-2026)", progress: 44 }
        ],
        footerCard: { heading: "2,57,542 GPs", subtext: "Profile created", progress: 75 }
      },
      {
        title: "Accounting",
        icon: "Accounting",
        type: "accounting",
        cards: [
          { heading: "2,57,542 GPs", accounting: { OB: "Rs.44700.17 Cr.", Receipt: "Rs.4554.93 Cr.", Expenditure: "Rs.6537.33 Cr." } },
          { heading: "2,57,542 GPs", accounting: { ZPs: "567", BPs: "5,396", GPs: "2,13,947" } },
          { heading: "2,57,542 GPs", accounting: { OB: "Rs.44700.17 Cr.", Receipt: "Rs.4554.93 Cr.", Expenditure: "Rs.6537.33 Cr." } }
        ]
      },
      {
        title: "Audit",
        icon: "Audit",
        type: "audit",
        smallCards: [
          { heading: "11,678", lines: ["Registered", "Auditors", "(2024-2025)"] },
          { heading: "2,61,924", lines: ["Registered", "Auditors", "(2024-2025)"] },
          { heading: "0", lines: ["Observations", "Recorded", "(2024-2025)"] },
          { heading: "0", lines: ["Audit Reports", "Generated", "(2024-2025)"] }
        ],
        footerCard: { heading: "10 GPs", subtext: "Audit Plans (2024-2025)", progress: 15 }
      }
    ];
  }
}
