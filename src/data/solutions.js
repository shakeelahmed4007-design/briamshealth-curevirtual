import patImg from '../assets/Pati.png'
import docImg from '../assets/doc.png'
import hosImg from '../assets/hospital.png'

export const solutions = [
  {
    title: 'For Patients',
    tagline: 'Healthcare at your fingertips.',
    items: [
      'Consult with doctors',
      'Book appointments',
      'Access health records',
      'Get e-prescriptions',
      'Secure messaging',
    ],
    image: patImg,
    btnText: 'Explore for Patients',
    footerText: 'Quality care, when you need it most.',
  },
  {
    title: 'For Providers',
    tagline: 'Power your practice with digital tools.',
    items: [
      'Manage appointments',
      'Virtual consultations',
      'Patient management',
      'EHR & e-prescriptions',
      'Analytics & reporting',
    ],
    image: docImg,
    btnText: 'Explore for Providers',
    footerText: 'Work smarter. Care better.',
  },
  {
    title: 'For Clinics & Hospitals',
    tagline: 'Expand your reach. Improve outcomes.',
    items: [
      'End-to-end platform',
      'Multi-provider support',
      'Secure & scalable',
      'Analytics & insights',
      'Dedicated support',
    ],
    image: hosImg,
    btnText: 'Explore for Facilities',
    footerText: 'Grow your services with CureVirtual.',
  },
]
