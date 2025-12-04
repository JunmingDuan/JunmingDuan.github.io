// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-group",
          title: "Group",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/group/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-presentations",
          title: "Presentations",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/presentations/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "nav-openings",
          title: "Openings",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/openings/";
          },
        },{id: "news-talk-at-the-beijing-seminar-on-computational-fluid-dynamics-organized-by-the-beijing-institute-of-applied-physics-and-computational-mathematics",
          title: 'Talk at the Beijing Seminar on Computational Fluid Dynamics, organized by the Beijing...',
          description: "",
          section: "News",},{id: "news-poster-session-of-annual-meeting-of-the-science-challenge-project-hosted-at-jilin-university-our-poster-with-dan-ling-and-huazhong-tang-is-one-of-the-five-best-posters",
          title: 'Poster session of Annual Meeting of the Science Challenge Project, hosted at Jilin...',
          description: "",
          section: "News",},{id: "news-talk-at-the-12th-national-annual-meeting-of-computational-mathematics-held-in-harbin",
          title: 'Talk at the 12th National Annual Meeting of Computational Mathematics, held in Harbin....',
          description: "",
          section: "News",},{id: "news-talk-at-the-workshop-on-numerical-methods-for-complex-physical-problems-hosted-at-nanjing-university-of-aeronautics-and-astronautics",
          title: 'Talk at the Workshop on Numerical Methods for Complex Physical Problems, hosted at...',
          description: "",
          section: "News",},{id: "news-talk-at-the-annual-meeting-on-high-resolution-method-for-multi-material-hydrodynamics-of-the-science-challenge-project-hosted-at-xiamen-university",
          title: 'Talk at the Annual Meeting on High-Resolution Method for Multi‑Material Hydrodynamics of the...',
          description: "",
          section: "News",},{id: "news-talk-at-the-forum-on-numerical-methods-and-applications-in-fluids-hosted-at-xiangtan-university",
          title: 'Talk at the Forum on Numerical Methods and Applications in Fluids, hosted at...',
          description: "",
          section: "News",},{id: "news-talk-at-the-symposium-on-high-fidelity-numerical-simulation-of-fluid-problems-hosted-at-peking-university",
          title: 'Talk at the Symposium on High-Fidelity Numerical Simulation of Fluid Problems, hosted at...',
          description: "",
          section: "News",},{id: "news-visiting-position-at-the-institute-for-fusion-theory-and-simulation-ifts-zhejiang-university-hosted-by-prof-zhiwei-ma",
          title: 'Visiting position at the Institute for Fusion Theory and Simulation (IFTS), Zhejiang University,...',
          description: "",
          section: "News",},{id: "news-talk-at-multimat-2022-the-10th-international-conference-on-numerical-methods-for-multi-material-fluid-flow-hosted-at-the-university-of-zürich",
          title: 'Talk at MultiMat 2022 – the 10th International Conference on Numerical Methods for...',
          description: "",
          section: "News",},{id: "news-invited-talk-at-the-oberseminar-hosted-by-prof-christian-klingenberg-online",
          title: 'Invited talk at the oberseminar hosted by Prof. Christian Klingenberg (online).',
          description: "",
          section: "News",},{id: "news-talk-at-the-swiss-numerics-day-2023-hosted-at-the-university-of-bern",
          title: 'Talk at the Swiss Numerics Day 2023, hosted at the University of Bern....',
          description: "",
          section: "News",},{id: "news-talk-at-eccomas-yic-2023-the-7th-young-investigators-conference-hosted-at-the-university-of-porto",
          title: 'Talk at ECCOMAS YIC 2023 – the 7th Young Investigators Conference, hosted at...',
          description: "",
          section: "News",},{id: "news-talk-at-the-cam-seminar-hosted-by-prof-kailiang-wu-at-southern-university-of-science-and-technology-sustech",
          title: 'Talk at the CAM Seminar, hosted by Prof. Kailiang Wu at Southern University...',
          description: "",
          section: "News",},{id: "news-plenary-talk-at-the-xvii-würzburg-workshop-on-stellar-astrophysics-hosted-at-the-heidelberg-institute-for-theoretical-studies-hits",
          title: 'Plenary talk at the XVII Würzburg Workshop on Stellar Astrophysics, hosted at the...',
          description: "",
          section: "News",},{id: "news-talk-at-the-workshop-pamir-simultaneously-used-point-values-averages-and-moments-and-their-inter-relation-active-flux-multi-moment-method-virtual-finite-elements-and-related-numerical-methods-hosted-at-the-maxwell-center-cambridge",
          title: 'Talk at the workshop PAMIR – simultaneously used Point values, Averages and Moments...',
          description: "",
          section: "News",},{id: "news-seminar-talk-at-southern-university-of-science-and-technology-sustech",
          title: 'Seminar talk at Southern University of Science and Technology (SUSTech).',
          description: "",
          section: "News",},{id: "news-a-series-of-three-lectures-online-on-modern-computational-methods-organized-by-the-beijing-institute-of-applied-physics-and-computational-mathematics-iapcm",
          title: 'A series of three lectures (online) on Modern Computational Methods, organized by the...',
          description: "",
          section: "News",},{id: "news-talk-at-honom-high-order-nonlinear-numerical-methods-for-evolutionary-pdes-theory-and-applications-held-in-chania-crete",
          title: 'Talk at HONOM – High-Order NOnlinear numerical Methods for evolutionary PDEs: theory and...',
          description: "",
          section: "News",},{id: "news-invited-as-the-keynote-speaker-at-mobility-innovation-exchange-in-aero-acoustics-mixa",
          title: 'Invited as the Keynote Speaker at Mobility Innovation eXchange in Aero/Acoustics (MIXA)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-05-06-Ohio-keynote.html";
            },},{id: "news-poster-at-numhyp-numerical-methods-for-hyperbolic-problems-held-in-darmstadt",
          title: 'Poster at NumHyp – Numerical Methods for Hyperbolic Problems, held in Darmstadt.',
          description: "",
          section: "News",},{id: "news-talk-at-icosahom-2025-the-15th-international-conference-on-spectral-and-high-order-methods-held-in-montréal-attended-online",
          title: 'Talk at ICOSAHOM 2025 – the 15th International Conference on Spectral and High...',
          description: "",
          section: "News",},{id: "news-visiting-position-at-iam-the-industrial-and-applied-mathematics-working-group-in-shenzhen-hosted-by-prof-dong-wang-at-the-chinese-university-of-hong-kong-shenzhen",
          title: 'Visiting position at IAM – the Industrial and Applied Mathematics working group in...',
          description: "",
          section: "News",},{id: "news-talk-at-computation-webinar-genuinely-multi-dimensional-numerical-scheme-for-conservation-laws-organized-by-prof-christian-klingenberg",
          title: 'Talk at Computation Webinar: Genuinely Multi-Dimensional Numerical Scheme for Conservation Laws, organized by...',
          description: "",
          section: "News",},{id: "news-delighted-to-join-the-chinese-university-of-hong-kong-shenzhen-as-a-tenure-track-assistant-professor",
          title: 'Delighted to join the Chinese University of Hong Kong (Shenzhen) as a tenure-track...',
          description: "",
          section: "News",},{id: "news-talk-at-active-flux-workshop-hosted-at-southern-university-of-science-and-technology-sustech",
          title: 'Talk at Active Flux workshop, hosted at Southern University of Science and Technology...',
          description: "",
          section: "News",},{id: "teaching-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2_project.html";
            },},{id: "teaching-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/3_project.html";
            },},{id: "teaching-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/4_project.html";
            },},{id: "teaching-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/5_project.html";
            },},{id: "teaching-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/6_project.html";
            },},{id: "teaching-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/7_project.html";
            },},{id: "teaching-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/8_project.html";
            },},{id: "teaching-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/9_project.html";
            },},{id: "teaching-mat2240-applied-mathematics-for-ai",
          title: 'MAT2240 Applied Mathematics for AI',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/AM4AI.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
