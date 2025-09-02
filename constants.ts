import { Question } from './types';

export const EXAM_DURATION_MINUTES = 40;
export const TOTAL_QUESTIONS = 40;

/*
This question bank was generated using a Gemini prompt:
"Generate 20 high-quality multiple-choice questions for the NORCET 9 nursing exam. The questions should cover a range of subjects including Fundamentals of Nursing, Medical-Surgical Nursing, Community Health Nursing, and Pharmacology. For each question, provide: a 'question' text, an array of 4 string 'options', the 'correctAnswerIndex' (0-3), and a detailed 'explanation' for the correct answer. Format the entire output as a single JSON array of objects that can be directly used in a TypeScript application."
*/
export const MOCK_QUESTIONS: Question[] = [
  {
    question: "A nurse is assessing a client with suspected fluid volume deficit (dehydration). Which finding would be most indicative of this condition?",
    options: [
      "Distended neck veins",
      "Increased urine output",
      "Tachycardia and hypotension",
      "Bounding peripheral pulses"
    ],
    correctAnswerIndex: 2,
    explanation: "In fluid volume deficit, the body compensates for the decreased circulating volume by increasing the heart rate (tachycardia) to maintain cardiac output, while blood pressure drops (hypotension) due to less volume. Distended neck veins and bounding pulses are signs of fluid overload. Increased urine output would worsen dehydration."
  },
  {
    question: "When administering a medication via the Z-track intramuscular injection technique, what is the primary purpose of this method?",
    options: [
      "To reduce the pain of the injection",
      "To allow for faster absorption of the medication",
      "To prevent leakage of irritating medication into subcutaneous tissue",
      "To administer a larger volume of medication"
    ],
    correctAnswerIndex: 2,
    explanation: "The Z-track method involves pulling the skin and subcutaneous tissue to the side before injection. After injecting the medication and withdrawing the needle, the displaced tissue is released, creating a sealed path that prevents the medication from leaking back into the subcutaneous layers, which is crucial for irritating drugs like iron dextran."
  },
  {
    question: "A client is prescribed Digoxin (Lanoxin). Which electrolyte imbalance should the nurse monitor for, as it can potentiate digoxin toxicity?",
    options: [
      "Hyperkalemia",
      "Hypokalemia",
      "Hypernatremia",
      "Hyponatremia"
    ],
    correctAnswerIndex: 1,
    explanation: "Hypokalemia (low potassium levels) is a major risk factor for digoxin toxicity. Potassium and digoxin compete for the same binding sites on the Na+/K+ ATPase pump. When potassium levels are low, more binding sites are available for digoxin, leading to an increased effect and potential for toxicity."
  },
  {
    question: "What is the priority nursing intervention for a client experiencing an anaphylactic reaction?",
    options: [
      "Administering an antihistamine like diphenhydramine",
      "Establishing intravenous access",
      "Administering epinephrine",
      "Applying oxygen via a non-rebreather mask"
    ],
    correctAnswerIndex: 2,
    explanation: "The immediate priority in anaphylaxis is to administer epinephrine. It is a potent vasoconstrictor and bronchodilator that rapidly counteracts the life-threatening effects of anaphylaxis, such as severe hypotension and bronchoconstriction. While other interventions are important, epinephrine is the first-line, life-saving treatment."
  },
  {
    question: "A public health nurse is teaching a community group about primary prevention of hypertension. Which topic would be most appropriate to include?",
    options: [
      "The importance of adhering to antihypertensive medication schedules",
      "How to use a home blood pressure monitoring device",
      "The benefits of regular exercise and a low-sodium diet",
      "Screening programs for early detection of high blood pressure"
    ],
    correctAnswerIndex: 2,
    explanation: "Primary prevention aims to prevent the disease from occurring in the first place. Therefore, teaching about lifestyle modifications like regular exercise and a low-sodium diet is a primary prevention strategy. Medication adherence and screening are forms of secondary prevention, which focuses on early detection and treatment."
  },
  {
    question: "A client with a chest tube suddenly becomes short of breath, and the nurse notes that there is no fluctuation (tidaling) in the water seal chamber. What is the most likely cause?",
    options: [
      "The client's lung has fully re-expanded",
      "The tubing is kinked or obstructed",
      "The suction is set too high",
      "There is a large air leak in the system"
    ],
    correctAnswerIndex: 1,
    explanation: "Cessation of tidaling in the water seal chamber suggests either that the lung has fully re-expanded (a positive outcome) or that the system is occluded. Given the client's sudden shortness of breath, an obstruction, such as a kink in the tubing or a clot, is the most likely and urgent cause to investigate."
  },
  {
    question: "Which of the following is a classic sign of Cushing's syndrome?",
    options: [
      "Hypoglycemia and weight loss",
      "Hypotension and skin hyperpigmentation",
      "Buffalo hump and moon facies",
      "Dehydration and hyponatremia"
    ],
    correctAnswerIndex: 2,
    explanation: "Cushing's syndrome is caused by prolonged exposure to high levels of cortisol. Classic signs include central obesity, a fatty pad between the shoulders (buffalo hump), and a rounded face (moon facies) due to redistribution of fat."
  },
  {
    question: "A nurse is preparing to administer 0.5 mg of a medication. The vial is labeled 1 mg/2 mL. How many mL should the nurse administer?",
    options: [
      "0.5 mL",
      "1 mL",
      "1.5 mL",
      "2 mL"
    ],
    correctAnswerIndex: 1,
    explanation: "This is a dose calculation problem. Using the formula (Dose required / Dose on hand) * Volume = Amount to administer: (0.5 mg / 1 mg) * 2 mL = 0.5 * 2 mL = 1 mL."
  },
  {
    question: "The 'Rule of Nines' is used in the care of a burn patient to:",
    options: [
      "Calculate the required intravenous fluid rate",
      "Determine the depth of the burn",
      "Estimate the percentage of total body surface area (TBSA) burned",
      "Assess the patient's level of consciousness"
    ],
    correctAnswerIndex: 2,
    explanation: "The Rule of Nines is a tool used to quickly estimate the total body surface area (TBSA) affected by a burn in an adult. This estimation is then used in formulas, like the Parkland formula, to calculate fluid resuscitation needs, but its primary purpose is the estimation of burn size."
  },
  {
    question: "A patient with chronic renal failure is advised to have a diet low in protein. What is the rationale for this dietary restriction?",
    options: [
      "To prevent fluid overload",
      "To reduce the production of urea and other nitrogenous waste products",
      "To decrease serum potassium levels",
      "To increase the synthesis of erythropoietin"
    ],
    correctAnswerIndex: 1,
    explanation: "The kidneys are responsible for filtering waste products from the blood, including urea, which is a byproduct of protein metabolism. In chronic renal failure, the kidneys' ability to filter is diminished. A low-protein diet helps to decrease the workload on the kidneys by reducing the amount of nitrogenous waste that needs to be excreted."
  },
  {
    question: "A nurse is caring for a client with a nasogastric (NG) tube. What is the most reliable method for confirming the tube's placement?",
    options: [
      "Auscultating for a rushing sound over the epigastrium after injecting air",
      "Aspirating gastric contents and checking the pH",
      "Asking the client to speak",
      "Obtaining a chest X-ray"
    ],
    correctAnswerIndex: 3,
    explanation: "The gold standard for confirming initial NG tube placement is a chest X-ray. While checking the pH of aspirate is a good bedside method for subsequent checks, and the auscultation method is common (but unreliable), the X-ray provides definitive visual confirmation that the tube is in the stomach and not in the respiratory tract."
  },
  {
    question: "Which type of immunity is acquired through vaccination?",
    options: [
      "Natural active immunity",
      "Artificial active immunity",
      "Natural passive immunity",
      "Artificial passive immunity"
    ],
    correctAnswerIndex: 1,
    explanation: "Vaccination introduces antigens into the body, stimulating the immune system to produce its own antibodies. Because the immunity is acquired through an artificial means (the vaccine) and the body actively produces the antibodies, it is called artificial active immunity."
  },
  {
    question: "A client diagnosed with schizophrenia is experiencing auditory hallucinations. Which nursing response is most therapeutic?",
    options: [
      "\"There is no one here; you are just imagining things.\"",
      "\"I don't hear any voices, but I can see that this is frightening for you.\"",
      "\"Why do you think you are hearing these voices?\"",
      "\"Try to listen to some music to distract yourself.\""
    ],
    correctAnswerIndex: 1,
    explanation: "This response validates the client's experience and feelings without reinforcing the hallucination. It acknowledges their fear and demonstrates empathy, which helps build a therapeutic rapport. Telling the client they are imagining things can be dismissive and damage trust."
  },
  {
    question: "What is the primary action of the medication Furosemide (Lasix)?",
    options: [
      "It is a potassium-sparing diuretic.",
      "It is a loop diuretic that inhibits reabsorption of sodium and chloride.",
      "It is an osmotic diuretic that increases the osmolarity of the filtrate.",
      "It is a beta-blocker that reduces cardiac output."
    ],
    correctAnswerIndex: 1,
    explanation: "Furosemide is a potent loop diuretic that works in the ascending loop of Henle in the kidneys. It inhibits the reabsorption of sodium and chloride, which in turn causes a large amount of water to be excreted in the urine, leading to a significant diuretic effect."
  },
  {
    question: "The Apgar score is assessed at 1 and 5 minutes after birth. Which of the following is NOT a component of the Apgar score?",
    options: [
      "Heart rate",
      "Respiratory effort",
      "Body temperature",
      "Muscle tone"
    ],
    correctAnswerIndex: 2,
    explanation: "The five components of the Apgar score are: Appearance (skin color), Pulse (heart rate), Grimace (reflex irritability), Activity (muscle tone), and Respiration (respiratory effort). Body temperature is a vital sign assessed in newborns but is not part of the Apgar scoring system."
  },
  {
    question: "A nurse is caring for a patient immediately after a cardiac catheterization via the femoral artery. What is a priority nursing assessment?",
    options: [
      "Monitoring urinary output",
      "Checking the insertion site for bleeding and assessing distal pulses",
      "Administering pain medication",
      "Encouraging deep breathing and coughing exercises"
    ],
    correctAnswerIndex: 1,
    explanation: "The most immediate and life-threatening complications after femoral artery catheterization are hemorrhage from the insertion site and compromised circulation to the affected extremity. Therefore, the priority is to frequently assess the site for bleeding or hematoma formation and to check the pedal pulses, color, and temperature of the leg to ensure adequate perfusion."
  },
  {
    question: "A patient is admitted with a diagnosis of diabetic ketoacidosis (DKA). The nurse would expect to see which type of breathing pattern?",
    options: [
      "Cheyne-Stokes respirations",
      "Apneustic breathing",
      "Kussmaul's respirations",
      "Bradypnea"
    ],
    correctAnswerIndex: 2,
    explanation: "Diabetic ketoacidosis is a state of severe metabolic acidosis. The body attempts to compensate by expelling carbon dioxide (an acid) through the lungs. This results in Kussmaul's respirations, which are characterized by deep, rapid, and labored breathing."
  },
  {
    question: "Which of the following vital signs would be most concerning in an adult patient?",
    options: [
      "BP 118/76 mmHg, HR 72 bpm, RR 18/min",
      "BP 130/84 mmHg, HR 88 bpm, RR 22/min",
      "BP 90/50 mmHg, HR 120 bpm, RR 28/min",
      "BP 140/90 mmHg, HR 60 bpm, RR 16/min"
    ],
    correctAnswerIndex: 2,
    explanation: "The combination of low blood pressure (hypotension), a very high heart rate (tachycardia), and a high respiratory rate (tachypnea) is highly indicative of shock, a life-threatening condition where there is inadequate tissue perfusion. This set of vital signs requires immediate investigation and intervention."
  },
  {
    question: "According to Erikson's stages of psychosocial development, which task is central to adolescence (12-18 years)?",
    options: [
      "Trust vs. Mistrust",
      "Initiative vs. Guilt",
      "Industry vs. Inferiority",
      "Identity vs. Role Confusion"
    ],
    correctAnswerIndex: 3,
    explanation: "The key psychosocial crisis during adolescence, according to Erikson, is Identity vs. Role Confusion. During this stage, adolescents explore their independence and develop a sense of self. They grapple with questions about who they are and what they want to do in life."
  },
  {
    question: "A nurse is teaching a patient about using a metered-dose inhaler (MDI) for asthma. Which instruction is correct?",
    options: [
      "\"Breathe in quickly and deeply as you press the canister.\"",
      "\"Hold your breath for 2 seconds after inhaling the medication.\"",
      "\"Use a spacer to increase the delivery of medication to your lungs.\"",
      "\"Administer two puffs one right after the other without waiting.\""
    ],
    correctAnswerIndex: 2,
    explanation: "Using a spacer is highly recommended as it improves the coordination between pressing the canister and inhaling, and it slows down the medication particles, allowing more of the drug to be deposited in the lungs instead of the mouth and throat. Patients should breathe in slowly (not quickly), hold their breath for about 10 seconds, and wait about 1 minute between puffs."
  },
  {
    question: "A nurse is caring for a client in the manic phase of bipolar disorder. Which of the following would be the most appropriate activity for this client?",
    options: [
        "A competitive game of chess",
        "A group therapy session",
        "Coloring in a coloring book in a quiet room",
        "Leading a high-energy aerobics class"
    ],
    correctAnswerIndex: 2,
    explanation: "Clients experiencing mania have high energy levels and are easily distracted. A simple, non-stimulating activity like coloring in a quiet room can help them focus and reduce sensory overload. Competitive games or highly social/energetic activities can escalate their mania."
  },
  {
      question: "A pregnant client in her third trimester reports feeling dizzy and lightheaded when lying on her back. The nurse should instruct the client to lie in which position?",
      options: [
          "Supine with a pillow under her head",
          "On her right side",
          "On her left side",
          "In a semi-Fowler's position"
      ],
      correctAnswerIndex: 2,
      explanation: "This condition is known as supine hypotensive syndrome. The gravid uterus compresses the inferior vena cava when the client is in a supine position, reducing venous return to the heart and causing hypotension. Lying on the left side displaces the uterus off the inferior vena cava, improving blood flow."
  },
  {
      question: "A child is brought to the emergency department with suspected epiglottitis. Which of the following is a priority nursing action?",
      options: [
          "Attempt to visualize the pharynx with a tongue depressor",
          "Prepare for immediate intubation or tracheostomy",
          "Administer a nebulized bronchodilator",
          "Obtain a throat culture for Streptococcus"
      ],
      correctAnswerIndex: 1,
      explanation: "Epiglottitis is a life-threatening emergency as it can cause complete airway obstruction. The priority is to secure the airway. Any attempt to visualize the pharynx (like using a tongue depressor) can trigger a laryngospasm and complete airway closure. Therefore, the team must be prepared for immediate intubation."
  },
  {
      question: "What is the primary purpose of administering Vitamin K (Phytonadione) to a newborn?",
      options: [
          "To enhance the absorption of iron",
          "To prevent hemorrhagic disease of the newborn",
          "To promote the closure of the ductus arteriosus",
          "To treat physiological jaundice"
      ],
      correctAnswerIndex: 1,
      explanation: "Newborns have sterile intestines and cannot synthesize Vitamin K, which is essential for the production of certain clotting factors in the liver. Administering Vitamin K shortly after birth prevents bleeding problems, known as hemorrhagic disease of the newborn."
  },
  {
      question: "A client is receiving a blood transfusion and suddenly develops chills, fever, and lower back pain. What is the nurse's first action?",
      options: [
          "Administer an antihistamine",
          "Slow down the transfusion rate",
          "Stop the transfusion immediately",
          "Notify the healthcare provider"
      ],
      correctAnswerIndex: 2,
      explanation: "These are classic signs of an acute hemolytic transfusion reaction, a life-threatening emergency. The first and most critical action is to stop the transfusion immediately to prevent any more incompatible blood from entering the patient's system. After stopping the transfusion, the nurse should maintain IV access with normal saline and then notify the provider."
  },
  {
      question: "Which finding is most characteristic of a detached retina?",
      options: [
        "Gradual blurring of central vision",
        "A sensation of a curtain falling over the visual field",
        "Severe, deep eye pain and nausea",
        "Yellow-colored sclera"
      ],
      correctAnswerIndex: 1,
      explanation: "A classic symptom of retinal detachment is the sudden appearance of floaters, flashes of light, and a shadow or 'curtain' descending over a portion of the visual field. It is a medical emergency requiring prompt treatment to prevent permanent vision loss."
  },
  {
      question: "A nurse is providing discharge instructions to a client with a new diagnosis of heart failure. Which statement by the client indicates a need for further teaching?",
      options: [
        "\"I will weigh myself every morning at the same time.\"",
        "\"I should call my doctor if I gain more than 2 pounds in one day.\"",
        "\"I can stop taking my water pill if my feet are not swollen.\"",
        "\"I will try to limit my salt intake to less than 2 grams per day.\""
      ],
      correctAnswerIndex: 2,
      explanation: "Clients with heart failure should never stop taking their medications, including diuretics ('water pills'), without consulting their provider. These medications are crucial for managing fluid volume, and stopping them can lead to rapid fluid accumulation and worsening of heart failure, even if symptoms like swelling have improved."
  },
  {
      question: "What is the therapeutic range for Lithium, a mood stabilizer used to treat bipolar disorder?",
      options: [
        "0.1-0.5 mEq/L",
        "0.6-1.2 mEq/L",
        "1.5-2.0 mEq/L",
        "2.0-2.5 mEq/L"
      ],
      correctAnswerIndex: 1,
      explanation: "Lithium has a very narrow therapeutic range. The maintenance therapeutic serum level is typically 0.6 to 1.2 mEq/L. Levels above 1.5 mEq/L are generally considered toxic and can lead to serious adverse effects, including tremors, confusion, seizures, and even death."
  },
  {
      question: "A nurse is teaching a parent about managing their child's atopic dermatitis (eczema). Which of the following is the most important recommendation?",
      options: [
        "Bathe the child daily with hot water and antibacterial soap.",
        "Apply emollients to the skin immediately after bathing.",
        "Dress the child in synthetic fabrics like polyester.",
        "Avoid all potential food allergens from the child's diet."
      ],
      correctAnswerIndex: 1,
      explanation: "The cornerstone of eczema management is maintaining skin hydration. Applying a thick emollient (moisturizer) to damp skin immediately after a lukewarm bath (not hot) helps to lock in moisture and repair the skin barrier. Harsh soaps and synthetic fabrics can irritate the skin."
  },
  {
      question: "During a home visit, a community health nurse finds an elderly client who lives alone and has multiple bruises in various stages of healing. The client seems fearful and withdrawn. The nurse should suspect:",
      options: [
        "An underlying bleeding disorder.",
        "Frequent falls due to poor balance.",
        "Elder abuse.",
        "A side effect of aspirin therapy."
      ],
      correctAnswerIndex: 2,
      explanation: "While other causes are possible, the combination of multiple bruises in various stages of healing, along with fearfulness and withdrawal in a vulnerable person, are classic indicators of potential elder abuse. The nurse has a duty to assess further and report any suspicions to the appropriate adult protective services agency."
  },
  {
    question: "A client with Parkinson's disease is experiencing bradykinesia. Which nursing intervention is most appropriate to help this client with their mobility?",
    options: [
      "Encourage the client to take long, slow steps.",
      "Advise the client to shuffle their feet to avoid falling.",
      "Suggest the client rock back and forth to initiate movement.",
      "Instruct the client to focus on a spot on the floor ahead of them."
    ],
    correctAnswerIndex: 2,
    explanation: "Bradykinesia, or slowness of movement, can make it difficult to initiate voluntary actions. Rocking gently from side to side can help to start the movement sequence. Focusing on a spot or using a marching rhythm can also help, but rocking is a key technique for initiation."
  },
  {
    question: "Which of the following is the most common opportunistic infection in clients with AIDS?",
    options: [
      "Kaposi's sarcoma",
      "Toxoplasmosis",
      "Pneumocystis jirovecii pneumonia (PCP)",
      "Tuberculosis"
    ],
    correctAnswerIndex: 2,
    explanation: "Pneumocystis jirovecii pneumonia (PCP) is the most common opportunistic infection associated with AIDS. It is a fungal pneumonia that is rare in healthy individuals but can be life-threatening in those with compromised immune systems."
  },
  {
    question: "A nurse is assessing a newborn for developmental dysplasia of the hip (DDH). Which of the following signs would be a positive Ortolani maneuver?",
    options: [
      "Asymmetrical gluteal folds",
      "A palpable 'clunk' as the femoral head is relocated into the acetabulum",
      "Limited abduction of the affected hip",
      "One knee appearing lower than the other when the hips are flexed (Galeazzi sign)"
    ],
    correctAnswerIndex: 1,
    explanation: "The Ortolani maneuver is performed by an experienced clinician to detect a dislocated hip. A positive sign is a palpable and often audible 'clunk' as the hip is abducted and the femoral head slips back into the acetabulum. Asymmetrical folds and limited abduction are also signs of DDH, but the 'clunk' defines a positive Ortolani test."
  },
  {
    question: "A client is prescribed Warfarin (Coumadin). The nurse should instruct the client to maintain consistency in their intake of which food?",
    options: [
      "Foods high in potassium, like bananas",
      "Foods high in iron, like red meat",
      "Foods high in vitamin C, like citrus fruits",
      "Foods high in vitamin K, like leafy green vegetables"
    ],
    correctAnswerIndex: 3,
    explanation: "Warfarin is an anticoagulant that works by inhibiting the synthesis of vitamin K-dependent clotting factors. A sudden increase in vitamin K intake (found in leafy greens like spinach and kale) can counteract the effect of warfarin, increasing the risk of clots. Therefore, clients should maintain a consistent intake of vitamin K, not avoid it entirely."
  },
  {
    question: "A charge nurse is making assignments on a medical-surgical unit. Which client is most appropriate to assign to a licensed practical nurse (LPN)?",
    options: [
      "A client requiring a blood transfusion for a low hemoglobin.",
      "A client who just returned from surgery and requires frequent neurologic assessments.",
      "A client with stable chronic obstructive pulmonary disease (COPD) requiring administration of routine medications.",
      "A client who needs discharge teaching about a new complex medication regimen."
    ],
    correctAnswerIndex: 2,
    explanation: "The scope of practice for an LPN typically includes caring for clients with stable and predictable conditions. Administering routine medications to a client with stable COPD falls within this scope. Blood transfusions, complex assessments on unstable patients, and comprehensive discharge teaching are tasks that should be performed by a Registered Nurse (RN)."
  },
  {
    question: "What is the priority nursing diagnosis for a client with a spinal cord injury at the C4 level?",
    options: [
      "Risk for impaired skin integrity",
      "Ineffective breathing pattern",
      "Impaired physical mobility",
      "Risk for autonomic dysreflexia"
    ],
    correctAnswerIndex: 1,
    explanation: "A spinal cord injury at the C4 level affects the phrenic nerve, which innervates the diaphragm. This leads to respiratory muscle weakness or paralysis, making an ineffective breathing pattern the most immediate life-threatening priority. While the other diagnoses are also relevant, maintaining a patent airway and adequate ventilation is paramount (ABCs)."
  },
  {
    question: "A client is receiving Total Parenteral Nutrition (TPN). Which of the following is a critical nursing intervention?",
    options: [
      "Monitor blood glucose levels regularly.",
      "Administer TPN through a peripheral IV line.",
      "Speed up the infusion rate if it falls behind schedule.",
      "Use the same IV line for administering antibiotics."
    ],
    correctAnswerIndex: 0,
    explanation: "TPN solutions are high in glucose (dextrose), which places the client at high risk for hyperglycemia. Regular monitoring of blood glucose levels (e.g., every 4-6 hours) is essential. TPN is hypertonic and must be given through a central line, the rate should never be 'caught up', and the line should be dedicated exclusively for TPN to prevent infection."
  },
  {
    question: "A school nurse is screening for scoliosis. Which of the following findings would be suggestive of this condition?",
    options: [
      "Even shoulder height and a straight spine.",
      "A prominent thoracic hump when the child bends forward (Adam's forward bend test).",
      "Full range of motion in the spine.",
      "Pain upon palpation of the spinous processes."
    ],
    correctAnswerIndex: 1,
    explanation: "The Adam's forward bend test is a key screening tool for scoliosis. When a child with scoliosis bends at the waist, the spinal curvature causes the rib cage to rotate, resulting in an asymmetrical back with a visible rib or scapular prominence on one side."
  },
  {
    question: "Which medication is used as an antidote for an overdose of benzodiazepines, such as lorazepam (Ativan)?",
    options: [
      "Naloxone (Narcan)",
      "Protamine sulfate",
      "Acetylcysteine",
      "Flumazenil"
    ],
    correctAnswerIndex: 3,
    explanation: "Flumazenil is a specific benzodiazepine receptor antagonist that can reverse the sedative effects of benzodiazepines. Naloxone is the antidote for opioids, protamine sulfate for heparin, and acetylcysteine for acetaminophen."
  },
  {
    question: "A nurse is educating a client about the prevention of deep vein thrombosis (DVT) after surgery. Which instruction is most important?",
    options: [
      "\"Remain on bed rest as much as possible to promote healing.\"",
      "\"Massage your lower legs to improve circulation.\"",
      "\"Perform early and frequent ambulation.\"",
      "\"Place pillows under your knees to keep them bent.\""
    ],
    correctAnswerIndex: 2,
    explanation: "Early and frequent ambulation is the most effective prophylaxis for preventing DVT. Walking contracts the calf muscles, which helps pump blood through the veins and prevents stasis. Bed rest increases the risk, massaging a leg could dislodge a clot, and placing pillows under the knees can compress the popliteal veins, impeding blood flow."
  }
];
