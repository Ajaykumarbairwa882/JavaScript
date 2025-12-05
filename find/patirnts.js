const patients = [
  {
    id: 1,
    name: "Ravi",
    critical: true,
    medicalCondition: {
      diagnosis: "Severe Pneumonia",
      symptoms: ["Fever", "Cough"],
      vitals: "Oxygen Level: 82%",
    },
  },
  {
    id: 2,
    name: "Prajjal",
    critical: false,
    medicalCondition: {
      diagnosis: "Seasonal Allergy",
      symptoms: ["Sneezing", "Watery eyes"],
      vitals: "Oxygen Level: 97%",
    },
  },
  {
    id: 3,
    name: "Roshni",
    critical: false,
    medicalCondition: {
      diagnosis: "Migraine",
      symptoms: ["Headache", "Nausea"],
      vitals: "Oxygen Level: 98%",
    },
  },
  {
    id: 4,
    name: "Neha",
    critical: false,
  },
  {
    id: 5,
    name: "Jitendra",
    critical: false,
  },
  {
    id: 6,
    name: "Jitendra",
    critical: false,
  },
  {
    id: 7,
    name: "Jitendra",
    critical: false,
  },
  {
    id: 8,
    name: "Jitendra",
    critical: false,
  },
];

let medicalConditions = [
  {
    diagnosis: "Gastric Reflux",
    symptoms: ["Burning sensation", "Chest discomfort"],
    vitals: "Oxygen Level: 99%",
  },
  {
    diagnosis: "Migraine",
    symptoms: ["Headache", "Nausea"],
    vitals: "Oxygen Level: 98%",
  },
  {
    diagnosis: "Seasonal Allergy",
    symptoms: ["Sneezing", "Watery eyes"],
    vitals: "Oxygen Level: 97%",
  },
  {
    diagnosis: "Asthma Attack",
    symptoms: ["Shortness of breath", "Wheezing"],
    vitals: "Oxygen Level: 88%",
  },
  {
    diagnosis: "High Fever",
    symptoms: ["Body ache", "Chills"],
    vitals: "Temperature: 102°F",
  },
];

// const data = patients.filter((m) => !m.medicalCondition).map((m) => m.id);
// // console.log(data);

// console.log(medicalConditions);

const data = patients.filter((m) => !m.medicalCondition).map((m) => m.id);

medicalConditions = medicalConditions.map((m, i) => ({
  id: data[i],
  ...m,
}));

// console.log(medicalConditions);

// const ans = patients.map((patient) => {
//   const condition = medicalConditions.find((m) => m.id === patient.id);

//   return {
//     ...patient,
//     medicalCondition: condition || patient.medicalCondition || {},
//   };
// });

// console.log(ans);

const updatedPatients = patients.map((p) => {
  const found = medicalConditions.find((m) => m.id === p.id);
  return found ? { ...p, medicalCondition: found } : p;
});

console.log(updatedPatients);

const ans = patients.map((patient) => {
  if (patient.medicalCondition) {
    return patient;
  } else {
    const matchedcond = medicalConditions.find((m) => m.id === patient.id);
    const { id: remove, ...restobj } = matchedcond;

    return {
      ...patient,
      medicalCondition: restobj,
    };
  }
});

console.log(ans);
