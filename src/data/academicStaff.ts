export type AcademicStaffMember = {
  name: string;
  image: string;
  subject: string;
  subjectCode: string;
  role: string;
  qualifications: string[];
  practicalRole?: string;
};

export const subjectOrder = [
  { name: 'Engineering Technology', code: 'ET', description: 'Design, materials, systems and practical engineering.' },
  { name: 'Science for Technology', code: 'SFT', description: 'Scientific foundations for understanding technology.' },
  { name: 'Information & Communication Technology', code: 'ICT', description: 'Computing, information systems and digital practice.' },
];

export const academicStaff: AcademicStaffMember[] = [
  { name: 'Mr. Prasan Kalansuriya', image: '/Assets/Staff/prasan-kalansuriya.png', subject: 'Engineering Technology', subjectCode: 'ET', role: 'Instructor', qualifications: ['B.Tech. Engineering (Hons), OUSL', 'NDQS'] },
  { name: 'Mr. Hasmin Haider', image: '/Assets/Staff/hasmin-haider.png', subject: 'Engineering Technology', subjectCode: 'ET', role: 'Instructor', qualifications: ['B.Ed. in Technology'], practicalRole: 'Civil & Electrical Practical Demonstrator' },
  { name: 'Mr. K. Sulaxan', image: '/Assets/Staff/k-sulaxan.png', subject: 'Engineering Technology', subjectCode: 'ET', role: 'Instructor', qualifications: ['B.Tech. in Construction Technology'] },
  { name: 'Mr. Dulanjana Perera', image: '/Assets/Staff/dulanjana-perera.png', subject: 'Engineering Technology', subjectCode: 'ET', role: 'Instructor', qualifications: ['Diploma in IT', 'Diploma in English', 'B.Sc. Engineering (Hons) in Civil Engineering', 'M.Sc. in Financial Mathematics'] },
  { name: 'Mr. M.A.M. Wafees', image: '/Assets/Staff/mam-wafees.png', subject: 'Engineering Technology', subjectCode: 'ET', role: 'Instructor', qualifications: ['B.Ed. in Engineering Technology (Hons)', 'BIT, UOM'], practicalRole: 'Automobile Practical Demonstrator' },

  { name: 'Ms. Aradhana Nilmini', image: '/Assets/Staff/aradhana-nilmini.png', subject: 'Science for Technology', subjectCode: 'SFT', role: 'Instructor', qualifications: ['B.E.T. (Hons) in Polymer PT, USJP', 'M.Sc. in Materials Science (reading), UOM'] },
  { name: 'Mr. Akila Weerasinghe', image: '/Assets/Staff/akila-weerasinghe.png', subject: 'Science for Technology', subjectCode: 'SFT', role: 'Instructor', qualifications: ['B.Sc., Faculty of Applied Sciences, WUSL', 'PGDE (reading), OUSL'] },
  { name: 'Mr. M.T.A. Anshak', image: '/Assets/Staff/mta-anshak.png', subject: 'Science for Technology', subjectCode: 'SFT', role: 'Instructor', qualifications: ['B.Tech. in Aquaculture and Seafood Technology, OCUSL'] },
  { name: 'Mr. A.H. Zameerudeen', image: '/Assets/Staff/ah-zameerudeen.png', subject: 'Science for Technology', subjectCode: 'SFT', role: 'Instructor', qualifications: ['Sc. Sp. Tr.'], practicalRole: 'Tamil Medium Practical Demonstrator' },
  { name: 'Mr. M.H.M. Faizal', image: '/Assets/Staff/mhm-faizal.png', subject: 'Science for Technology', subjectCode: 'SFT', role: 'Instructor', qualifications: ['B.Ed. (Hons) in Science', 'Sc. Sp. Tr.'], practicalRole: 'English & Sinhala Medium Practical Demonstrator' },

  { name: 'Mr. Janitha Dissanayaka', image: '/Assets/Staff/janitha-dissanayaka.png', subject: 'Information & Communication Technology', subjectCode: 'ICT', role: 'Instructor', qualifications: ['B.Sc. in Electronic & Computer Studies', 'M.Sc. in Computer Science', 'M.Sc. in Cyber Security'] },
  { name: 'Mr. Aqeel Ishak', image: '/Assets/Staff/aqeel-ishak.png', subject: 'Information & Communication Technology', subjectCode: 'ICT', role: 'Instructor', qualifications: ['BIT, UOC'] },

  { name: 'Mr. M.R.M. Muaz', image: '/Assets/Staff/mrm-muaz.png', subject: 'Bio System Technology', subjectCode: 'BST', role: 'Instructor', qualifications: ['Bio System Technology (UG), UWU'] },
  { name: 'Mr. Subair Afkar', image: '/Assets/Staff/subair-afkar.png', subject: 'GEN Z English', subjectCode: 'ENG', role: 'English', qualifications: ['Diploma in English', 'HND in Film and Theatre Acting', 'B.Ed. in TESL'] },
];

export const additionalSubjects = [
  { name: 'Bio System Technology', code: 'BST' },
  { name: 'GEN Z English', code: 'ENG' },
];
