import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import rohit from '@salesforce/resourceUrl/Rohit';
export const PROFILE_IMAGE = rohit

export const SOCIAL_LINKS=[
    {
        type: "linkedin",
        label: "linkedin/rohit-kumar-saini-sfdc/",
        link: "https://www.linkedin.com/in/rohit-kumar-saini-sfdc/",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    {
        type: "trailhead",
        label: "trailhead/rohitsaini",
        link: "https://trailblazer.me/id/rohitsaini",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    },
    {
        type: "github",
        label: "github/Rohit-Saini-Sfdc",
        link: "https://github.com/Rohit-Saini-Sfdc",
        icon: SOCIAL + '/SOCIAL/github.svg'
    }
]

export const USER_DETAILS={
    NAME:'Rohit Saini',
    ROLE:'Senior Salesforce Developer',
    EMAIL:'itsmersaini@gmail.com',
    PHONE:'(302)-397-4426',
    LOCATION:'Austin, TX'
}

export const CAREER_SUMMARY={
    HEADING:"CAREER SUMMARY",
    DESCRIPTION: "I am a Salesforce certified professional with a total and relevant experience of 8+ years in Salesforce Application "+
    "Designing, Development, Administration and Configuration. I am a Lightning enthusiast with experience in building "+
    "Lightning Components, Lightning Web Components and Classic to Lightning migration. I have hands-on experience in "+
    "customization using Apex classes, Apex triggers, Visualforce pages, Batch classes as well as automating complex "+
    "business processes using Salesforce features such as Workflows, Approval Process, Process Builder, sharing rules, "+
    "validation rules, etc. I have worked as Technical Architect, Technical Lead, and Senior developer roles in "+
    "Salesforce.com projects supporting CRM Service & Sales function for large Salesforce implementations.",
    KEYS_POINTS:[
        
    ]
}

export const EXPERIENCE_DATA={
    HEADING: "Work Experience",
    EXPERIENCES: [
        {
            ROLE: "Senior Salesforce Developer",
            COMPANY_NAME: "GlobalLogic Inc",
            DURATION: "Jan 2021 - Present",
            CLIENT: "Google LLC",
            DESCRIPTION:
                "Designing and Implementing different NPS Surveys",
            DESCRIPTION_POINT_HEADER: "Responsibilities",
            DESCRIPTION_POINTS: [
                "Understand the salesforce design and Integration options with Qualtrics",
                "Create Survey templates, email invitation templates and their translations in Qualtrics",
                "Use Qualtrics APIs to send Survey Invitations"
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Qualtrics",
                ]
            },
        },
        {
            ROLE: "Senior Salesforce Developer",
            COMPANY_NAME: "GlobalLogic Inc",
            DURATION: "Dec 2019 - Dec 2020",
            CLIENT: "Google LLC",
            DESCRIPTION:
                "Upgrading the existing Salesforce CRM Platform (Classic interface) to the enhanced Salesforce Lightning Integration platform. Along with the upgrade, the support processes would be enhanced and re-built on the new platform. ",
            DESCRIPTION_POINT_HEADER: "Responsibilities",
            DESCRIPTION_POINTS: [
                "Design and develop OOTB and custom features related to Case, Entitlements and reporting for new service cloud implementation.",
                "Implement Apex triggers, Batch jobs, Queueable jobs, and OOTB configurations as per business needs.",
                "Design and Implement custom UIs using LWC and Aura.",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'SFDC Features used',
                LIST: [
                    "LWC",
                    "Aura",
                    "Apex Trigger",
                    "Batch",
                    "Queueable",
                    "Workflow/Process Builder",
                    "Flow",
                    "Outbound Messaging",
                    "Salesforce Connect",
                    "Reports & Dashboards",
                ]
            },
        },
        {
            ROLE: "Technical Architect",
            COMPANY_NAME: "Tata Consultancy Services",
            DURATION: "Apr 2018 – Dec 2019",
            CLIENT: "DuPont",
            DESCRIPTION:
                "DuPont completed the merger with Dow and were looking for migrating the Dow applications in SFDC. Worked on multiple projects including 1) MS Dynamics to SFDC migration, 2) Implementation of CanadaBuildingCode, 3) Classic to Lightning migration 4) Service cloud implementation, 5)AEM to SFDC SSO ",
            DESCRIPTION_POINT_HEADER: "Responsibilities",
            DESCRIPTION_POINTS: [
                "Work with stakeholders to collect requirements in business workshops, and creation of BRD.",
                "Design technical solution, creation of technical design documents and get sign off from technical review board",
                "Define Data migration strategy for migration of data using different tools like Data loader, Magic Mover etc.",
                "Supervise offshore team and review code",
                "Design and Implement lightning applications using Lightning Aura components",
                "Explore SSO solutions for the client using Connected Apps and custom App handlers."
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'SFDC Features used',
                LIST: [
                    "Aura Components",
                    "Communities",
                    "Apex",
                    "Data loader",
                    "Process builder",
                    "Connected Apps",
                ]
            }
        },
        {
            ROLE: "Technical Lead",
            COMPANY_NAME: "Tata Consultancy Services",
            DURATION: "Jul 2015 – Apr 2018)",
            CLIENT: "DuPont",
            DESCRIPTION:
                "Efficiently Run & Maintain DuPont’s 60+ Applications in Salesforce and 7 BU production Orgs. Suggest continuous Improvements in the systems and provide solutions to ad hoc development requests from business. ",
            DESCRIPTION_POINT_HEADER: "Responsibilities",
            DESCRIPTION_POINTS: [
                "Design and implement automations through Batch/Scheduled classes to process data received from Dodge Pipeline and other external systems like Construction Intelligence Center.",
                "Fix bugs of multiple applications using Rest API callouts to different fulfillment systems, and using External Objects from SAP Hana.",
                "Manage the deployment pipeline using change sets, Ant migration, Eclipse, Copado managed package tool etc. and do POCs to establish new deployment and version control processes for the organization.",
                "Redesign multiple VF page based implementations using advanced Apex & VF components.",
                "Establish SF2SF connections between different SFDC orgs to move data seamlessly.",
                "Analyze recurring tickets, identify automation areas and automate different periodic tasks.",
                "Analyze impact from critical updates, product updates, and new release changes from SFDC.",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'SFDC Features used',
                LIST: [
                    "VF Pages",
                    "Apex Trigger",
                    "Batch Apex",
                    "Data loader",
                    "REST Api",
                    "Salesforce Connect",
                    "SF2SF Integration",
                ]
            }
        },
        {
            ROLE: "Salesforce Developer",
            COMPANY_NAME: "Tata Consultancy Services",
            DURATION: "(Mar 2015 – July 2015",
            CLIENT: "GE Healthcare",
            DESCRIPTION:
                "Implement Apttus Configure Price Quote (CPQ) AppExchange package for Salesforce to intelligently configure price and quote new deals, add-on sales and renewals all inside Salesforce.",
            DESCRIPTION_POINT_HEADER: "Responsibilities",
            DESCRIPTION_POINTS: [
                " SFDC configuration and development",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'SFDC Features Used',
                LIST: [
                    "Apex Class",
                    "Test Class",
                ]
            }
        },
        {
            ROLE: "Salesforce Developer",
            COMPANY_NAME: "Metacube Softwares pvt ltd",
            DURATION: "Jan 2013 – Mar 2015)",
            CLIENT: "Cadence Design Systems",
            DESCRIPTION:
                "Develop new processes around contract management modules using Apttus contract management and approvals AppExchange tools. ",
            DESCRIPTION_POINT_HEADER: "Responsibilities",
            DESCRIPTION_POINTS: [
                "Customize Apttus Contract Management and Apttus Approval Management packages. Create custom VF page wizards for creating different types of agreements and adding products to them.",
                "Fix bugs of multiple applications using Rest API callouts to different fulfillment systems, and using External Objects from SAP Hana.",
                "Configure Adobe Echosign package for sending documents for e-signature.",
                "Form Agreement templates in MS word utilizing the Apttus X-Author tool .",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Tools & Technologies used',
                LIST: [
                    "VF Pages",
                    "Apex Class",
                    "Apttus Contract Management",
                    "Apttus advanced Approval Management",
                    "Data loader",
                    "Apttus X-Author",
                ]
            }
        },
    ]
}


 export const EDUCATION_DATA={
     ICON: SOCIAL + '/SOCIAL/education.svg',
     HEADING: "EDUCATION",
     LIST:[
         {
             NAME: "B. Tech. in Electronics & Communications Engineering",
             UNIVERSITY_NAME: "Government Engineering College, Ajmer (Rajasthan, India)",
             DURATION: "2008 - 2012",
         }
     ]
 }

 export const AWARDS_DATA={
     ICON: SOCIAL + '/SOCIAL/awards.svg',
     HEADING: "Accolades",
     LIST: [
         {
             NAME: "4XTrailhead Ranger",
             DESCRIPTION:"",
         },
         {
             NAME: "13XSuperbadges",
             DESCRIPTION:"",
         },
     ]
 }

export const CERTIFICATION_DATA={
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "CERTIFICATIONS (13X)",
    LIST: [
        {
            NAME: "Salesforce Certified Application Architect",
        },
        {
            NAME: "Salesforce Certified JavaScript Developer 1",
        },
        {
            NAME: "Salesforce Certified Platform Developer II",
        },
        {
            NAME: "Salesforce Certified Einstein Analytics and Discovery Consultant",
        },
        {
            NAME: "Salesforce Certified Advanced Administrator (SCAA)",
        },
        {
            NAME: "Salesforce Certified Administrator (SCA)",
        },
        {
            NAME: "Salesforce Certified Data Architecture and Management Designer",
        },
        {
            NAME: "Salesforce Certified Sharing and Visibility Designer",
        },
        {
            NAME: "Salesforce Certified Service Cloud Consultant",
        },
        {
            NAME: "Salesforce Certified Sales Cloud Consultant",
        },
        {
            NAME: "Salesforce Certified Platform Developer I",
        },
        {
            NAME: "Salesforce Platform App Builder",
        },
        {
            NAME: "Field Service lightning consultant",
        }
    ]
}

export const LANGUAGES_DATA={
    HEADING: "Languages",
    LIST: [
        {
            NAME: "English",
            LEVEL: "Intermediate",
        },
        {
            NAME: "Hindi",
            LEVEL: "Native",
        },
    ]
}

export const SKILLS_DATA ={
    HEADING: "SKILLS & TOOLS",
    SKILLS:[
        {
            HEADING: "Key Skills",
            SKILLS_LIST: [
                { NAME: "Apex", LEVEL: "95" },
                { NAME: "Security & Sharing", LEVEL: "95" },
                { NAME: "Aura/LWC", LEVEL: "90" },
                { NAME: "Visualforce", LEVEL: "85" },
                { NAME: "Service Cloud", LEVEL: "90" },
                { NAME: "Sales Cloud", LEVEL: "80" },
                { NAME: "REST Api", LEVEL: "80" },
                { NAME: "SOAP Api", LEVEL: "70" },
                { NAME: "Identity and Access Mgmt", LEVEL: "70" },
                { NAME: "Integrations", LEVEL: "70" },
                { NAME: "Communities", LEVEL: "65" },
                { NAME: "Salesforce Einstein analytics", LEVEL: "60" },
            ],
        },
        {
            HEADING: "Tools",
            SKILLS_LIST: [
                { NAME: "Data Loader", LEVEL: "98" },
                { NAME: "Visual Studio Code", LEVEL: "90" },
                { NAME: "Salesforce CLI", LEVEL: "80" },
                { NAME: "Eclipse Force.com IDE", LEVEL: "80" },
                { NAME: "X-author", LEVEL: "80" },
                { NAME: "Ant-Migration", LEVEL: "60" },
            ],
        },
        {
            HEADING: "AppExchange",
            SKILLS_LIST: [
                { NAME: "Docusign", LEVEL: "90" },
                { NAME: "Echosign", LEVEL: "80" },
                { NAME: "Conga Composer", LEVEL: "75" },
                { NAME: "Apttus Advanced Approvals", LEVEL: "80" },
                { NAME: "Apttus Contract Management", LEVEL: "80" },
                { NAME: "CloudCraze Ecommerce", LEVEL: "50" },
                { NAME: "Copado", LEVEL: "50" },
                { NAME: "Servicemax", LEVEL: "50" },
                { NAME: "Financialforce", LEVEL: "50" },
                { NAME: "Stripe", LEVEL: "50" },
            ],
        },
        
    ],
    OTHERS_SKILLS:{
        HEADING: 'OTHERS',
        SKILLS_LIST: [
            "Git",
            "Code Review",
        ]
    }
}

export const INTERESTS_DATA = {
    HEADING: "Interests",
    LIST: ["Reading", "Dancing", "Cricket"]
}