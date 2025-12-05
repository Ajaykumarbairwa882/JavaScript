const department = [
  {
    eid: 1,
    did: 1,
    name: "Engineering",
    floor: 3,
    techStack: ["React", "Node.js", "MongoDB"],
  },
  {
    eid: 2,
    did: 2,
    name: "HR",
    floor: 1,
    techStack: [],
  },
  {
    eid: 3,
    did: 3,
    name: "Marketing",
    floor: 2,
    campaigns: ["1", "2"],
  },
];

const projects = [
  { eid: 1, projectId: "P101", title: "Inventory System", budget: 200000 },
  { eid: 1, projectId: "P102", title: "Chat App", budget: 120000 },
  { eid: 2, projectId: "P201", title: "Employee Portal", budget: 150000 },
];

const achievements = [
  {
    eid: 3,
    aid: 3,
    awards: ["Employee of the Month", "Star Performer"],
    certifications: ["1", "2"],
  },
];

const campaigns = [
  { cid: "1", eid: 3, name: "Diwali Promo", reach: "1M+" },
  { cid: "2", eid: 3, name: "New Year Blast", reach: "2M+" },
];

const certifications = [
  { eid: 3, ceid: "1", name: "Google Ads", year: 2023 },
  { eid: 3, ceid: "2", name: "SEO Pro", year: 2024 },
];