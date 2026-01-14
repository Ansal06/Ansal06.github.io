export const siteConfig = {
  name: "Ansal Kanu",
  title: "An Undergraduate at University of Delhi",
  description: "Personal website",
  theme: "dark",
  accentColor: "#60a5fa",
  social: {
    email: "kanuansal06@gmail.com",
    linkedin: "https://linkedin.com/in/ansal-kanu-a625771b6/",
    instagram: "https://instagram.com/ansalcan",
    github: "https://github.com/Ansal06",
  },
  aboutMe:
    "I'm a Third Year Physics major at University of Delhi. My research interests currently span Gravitational Wave Lensing, Fourier Optics & Computational Imaging as well as Quantum Computing Algorithms. ",
  interests: [
  "Gravitational Waves",
  "Fourier Optics",
  "Computational Imaging",
  "Quantum Computing"
],

  projects: [
    {
      name: "Gravitational Lensing by a composite massive black hole-subhalo system",
      description:
        "Simulations of microlensing by massive black holes embedded in subhalos",
      link: "https://github.com/Ansal06/mbh-subhalo-lensing",
      github:"https://github.com/Ansal06/mbh-subhalo-lensing", 
      skills: ["Gravitational Wave Lensing", "Python", "Linux", "GLoW"],
      category: "Gravitational Waves",
      image: "/images/lensing.jpg",
    },
    {
      name: "Iterative Phase Retrieval using the Hybrid Input-Output Algorithm",
      description:
        "Iterative phase retrieval using the Hybrid Input-Output (HIO) algorithm with both plane and vortex beam illumination",
      link: "https://github.com/Ansal06/Iterative-Phase-Retrieval",
      github: "https://github.com/Ansal06/Iterative-Phase-Retrieval",
      skills: ["Phase Retrieval", "Computational imaging", "Fourier Optics", "Python"],
      image: "/images/retrieval.png",
    },
    {
      name: "Quantum Walks and Monte Carlo",
      description:
        "Quantum Galton Board implementation for Monte Carlo simulation using quantum walks, featuring Gaussian, exponential, and hadamard distribution generation with NISQ noise mitigation",
      link: "https://github.com/Ansal06/Quantum-Walks-Monte-Carlo",
      github: "https://github.com/Ansal06/Quantum-Walks-Monte-Carlo",
      skills: ["qiskit", "Quantum Computing", "Monte Carlo Simulation","NISQ"],
      image: "/images/quantumwalk.jpg",
    },
  ],
 experience: [
  {
    company: "Wave-optics Lensing by Massive Black Hole Subhalos",
    title: "Research Project — Gravitational Wave Lensing",
    dateRange: "Ongoing",
    bullets: [
      "Simulating gravitational lensing signatures of compact massive subhalos using parametric mass models",
      "Developing scripts with GLoW to compute amplification and time delays and investigate detectability regimes for LISA",
      "Comparing point-mass and extended (NFW-type) lens models to study finite-size lensing effects",
      "Exploring parameter regimes relevant for detection in time-domain gravitational-wave follow-up surveys",
    ],
  },

  {
    company: "IIT Delhi — Phase Retrieval Project",
    title: "Iterative Phase Retrieval Using the Hybrid Input–Output Algorithm",
    dateRange: "2024",
    bullets: [
      "Implemented a Hybrid Input–Output (HIO) phase retrieval algorithm for coherent imaging reconstruction",
      "Investigated constraint design to improve convergence and suppress twin-image artifacts",
      "Reproduced results from 'Twin-stagnation-free phase retrieval with vortex phase illumination' (Kularia et al.)",
      "Released reproducible code, tutorials, and project report as a citable record (Zenodo DOI: 10.5281/zenodo.16447566)",
    ],
  },

  {
    company: "Womanium Quantum Program + WISER QIntern",
    title: "Quantum Walks and Monte Carlo",
    dateRange: "2025",
    bullets: [
      "Developed a quantum Galton board framework using Qiskit to simulate quantum walks",
      "Designed variational quantum algorithms to optimize gate parameters for target distributions",
      "Investigated noise mitigation strategies and distribution fidelity metrics",
    ],
  },

  {
    company: "NASA–Caltech Sagan Summer Workshop",
    title: "Exoplanet Demographics and Survey Bias Correction",
    dateRange: "2025",
    bullets: [
      "Corrected detection biases in transit, radial velocity, imaging, and astrometry surveys to compute occurrence rates",
      "Modeled stellar accelerations to derive companion mass distributions using Monte Carlo orbital simulations",
    ],
  },
],
education: [
  {
    school: "Ramjas College, University of Delhi",
    degree: "B.Sc. (Hons.) Physics — Third Year",
    dateRange: "2023 – 2027 (expected)",
    achievements: [
      "GPA: 8.7 / 10.0",
      "Core subjects: Physics and Mathematics with electives in other disciplines",
      "Meritorious Award — Course topper of the year (2025)",
      "Among top 0.2 percentile scorers in Physics — CUET UG 2023",
    ],
  },

  {
    school: "Maharishi Vidya Mandir, Silchar",
    degree: "AISSCE (CBSE) — High School",
    dateRange: "2023",
    achievements: [
      "Percentage: 93.8%",
      "Subjects: Physics, Chemistry, Mathematics, Computer Science",
      "World Rank 544 in Fizika 2021 — International Physics Competition",
    ],
  },
],
};