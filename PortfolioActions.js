/* ============ DATA ============ */
const GRADIENTS = [
  "linear-gradient(135deg,#667eea,#764ba2)",
  "linear-gradient(135deg,#f093fb,#f5576c)",
  "linear-gradient(135deg,#4facfe,#00f2fe)",
  "linear-gradient(135deg,#43e97b,#38f9d7)",
  "linear-gradient(135deg,#fa709a,#fee140)",
  "linear-gradient(135deg,#30cfd0,#330867)",
];

const PROJECTS = [
  {
    id:"sentinel",
    emoji:"🛡️",
    title:"Sentinel AI",
    caption:"An intelligent monitoring &amp; analysis system built to flag what humans miss, before it becomes a problem.",
    hashtags:"#AI #Python #Automation #MachineLearning",
    tech:["Python","AI/ML","Automation"],
    role:"Solo build",
    status:"In development",
    github:"https://github.com/Nkanyezi016",
    demo:null,
    comments:[
      {who:"nkanyezi.dev", text:"The core idea: continuous monitoring that reasons about what it sees instead of just logging it, then surfaces the alerts that actually matter."},
      {who:"code_reviewer", text:"Clean separation between the detection logic and the alerting layer 👏"},
    ],
    case:{
      problem:"Manual monitoring doesn't scale — important signals get buried in noise, and by the time a human notices, the moment to act has often passed.",
      approach:"Designed a Python-based pipeline that watches for meaningful patterns rather than raw events, applying lightweight AI-driven analysis to separate signal from noise before anything reaches a human.",
      result:"A foundation for a monitoring tool that flags what matters instead of everything — built to be extended with new detectors as new patterns emerge."
    }
  },
 {
    id:"robotworlds",
    emoji:"🤖",
    title:"Robot Worlds",
    caption:"Built a client-server robot simulation using Java — multiple robots, one shared world, real-time state.",
    hashtags:"#Java #OOP #SQLite #Docker #Networking",
    tech:["Java","OOP","SQLite","Docker","Sockets"],
    role:"Solo build",
    status:"Complete",
    github:"https://github.com/Nkanyezi016/MultiplayerRobotGame.git",
    demo:null,
    comments:[
      {who:"nkanyezi.dev", text:"A client-server simulation where robots move, look, and shoot inside a shared grid world. The server owns the world state; clients just send commands and render responses."},
      {who:"code_reviewer", text:"Love how cleanly the protocol layer is separated from the game logic 🔥"},
    ],
    case:{
      problem:"Simulating multiple independent robots that share and affect the same world in real time, without any client trusting another client's data.",
      approach:"Built a Java client-server architecture: the server is the single source of truth for world state and persists it via SQLite, while each client only knows what its own robot can 'see'. Object-oriented design keeps robot behaviours, obstacles, and commands cleanly separated, and the whole thing runs in Docker for consistent environments.",
      result:"A working multiplayer simulation that demonstrates solid networking, concurrency-safe state handling, and OOP architecture end to end."
    }
  },
{
    id:"salon",
    emoji:"💅",
    title:"Salon Search & Booking",
    caption:"Search salons, view services, and book appointments — without the back-and-forth DMs.",
    hashtags:"#JavaScript #FullStack #UIUX #Booking",
    tech:["JavaScript","HTML/CSS","Booking logic"],
    role:"Solo build",
    status:"Complete",
    github:"https://github.com/Nkanyezi016/SalonSearchAndBooking.git",
    demo:null,
    comments:[
      {who:"nkanyezi.dev", text:"Built so a user can search nearby salons, browse services and prices, and lock in a booking slot in a few taps."},
      {who:"beta_tester", text:"Booking flow feels genuinely quick to use 👍"},
    ],
    case:{
      problem:"Booking a salon appointment usually means calls, DMs, or waiting for a reply — slow for the client and hard to manage for the salon.",
      approach:"Designed a search-and-book flow: browse salons, compare services and pricing, then reserve a slot directly, with the interface doing the work a phone call used to do.",
      result:"A self-serve booking experience that removes the manual back-and-forth for both client and salon."
    }
  },
{
    id:"ridesafety",
    emoji:"🚕",
    title:"Ride Safety Check",
    caption:"A quick way to verify that your Uber or Bolt driver is who the app says they are, before you get in.",
    hashtags:"#Safety #JavaScript #API #MobileFirst",
    tech:["JavaScript","API integration","Mobile-first design"],
    role:"Solo build",
    status:"In development",
    github:"https://github.com/Nkanyezi016",
    demo:null,
    comments:[
      {who:"nkanyezi.dev", text:"The goal is simple: give riders a fast, independent way to double-check driver and vehicle details before getting into the car."},
      {who:"friend_of_dev", text:"This is such a needed idea, especially for late-night rides 🙏"},
    ],
    case:{
      problem:"Ride-hailing apps show driver details, but riders have no quick, independent way to double-check that the car and driver in front of them actually match before getting in.",
      approach:"Building a lightweight mobile-first check: enter the details shown in your ride app, and cross-reference them in a focused, no-friction interface.",
      result:"A safety-first companion tool aimed at giving riders one extra layer of confidence on every trip."
    }
  },
{
    id:"downloadorg",
    emoji:"🗂️",
    title:"Smart Download Organizer",
    caption:"A script that watches your Downloads folder and files everything away — automatically.",
    hashtags:"#Python #Automation #ProductivityTool #FileSystem",
    tech:["Python","File system automation"],
    role:"Solo build",
    status:"Complete",
    github:"https://github.com/Nkanyezi016",
    demo:null,
    comments:[
      {who:"nkanyezi.dev", text:"Sorts files into folders by type automatically the moment they land in Downloads — built this because I was tired of doing it by hand."},
      {who:"code_reviewer", text:"Small tool, but this is the kind of automation that saves real hours over a year."},
    ],
    case:{
      problem:"Downloads folders turn into digital junk drawers — screenshots, PDFs, installers, and archives all piling up in one place.",
      approach:"Wrote a Python script that watches the Downloads folder and automatically sorts new files into the right destination folder based on type, rules, and simple heuristics.",
      result:"Hours saved on manual tidying, and a Downloads folder that stays usable instead of becoming a graveyard of loose files."
    }
  },
  {
    id:"serverless",
    emoji:"☁️",
    title:"Serverless Web App",
    caption:"A cloud-native web app built on serverless architecture — no servers to babysit, just code that scales.",
    hashtags:"#Serverless #CloudComputing #CICD #Docker",
    tech:["Serverless architecture","CI/CD","Docker","Cloud"],
    role:"Solo build",
    status:"Complete",
    github:"https://github.com/Nkanyezi016",
    demo:null,
    comments:[
      {who:"nkanyezi.dev", text:"Built to explore serverless patterns properly — functions that scale on demand, wired up with a CI/CD pipeline so every push ships itself."},
      {who:"code_reviewer", text:"Great excuse to actually learn the deploy pipeline, not just the code 💯"},
    ],
    case:{
      problem:"Traditional server setups mean paying for idle capacity and spending time on infrastructure instead of features.",
      approach:"Rebuilt the app on a serverless architecture so compute scales automatically with demand, backed by a CI/CD pipeline so every change deploys itself, containerised where it matters for consistency.",
      result:"A cloud-native app with near-zero idle cost and a deploy pipeline that removed manual release steps entirely."
    }
  },
];