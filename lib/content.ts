export const profile = {
  name: "Olakunle Oduntan",
  role: "AI Engineer",
  headline:
    "I build intelligent systems that turn complex problems into practical solutions.",
  summary:
    "I design and build intelligent software systems that combine machine learning, large language models, voice technology, Python and automation to solve practical problems. My work spans AI-powered products, conversational assistants, business process automation and generative AI applications.",
  location: "Open to international remote work",
  education: "B.Sc. Computer Science, Bowen University",
  whatsapp: "https://wa.me/2348103900442",
  closer: "https://aicloser.tech",
  github: "https://github.com/Dailysabahh",
  linkedin: "",
  email: "",
};

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/hire", label: "Hire" },
  { href: "/contact", label: "Contact" },
];

export const practices = [
  {
    index: "01",
    title: "AI Agents",
    text: "Assistants that answer from a business's own knowledge and hand work to a person when they should.",
  },
  {
    index: "02",
    title: "Voice AI",
    text: "Spoken conversations over website and phone paths, with a greeting, a voice, and a job to do.",
  },
  {
    index: "03",
    title: "Automation",
    text: "The operational path around an assistant: enquiries, follow-up, and the systems a business already uses.",
  },
  {
    index: "04",
    title: "Machine Learning",
    text: "Applied learning work, kept separate from product claims until a result can be shown.",
  },
];

export const stack = [
  {
    label: "Language",
    items: ["Python", "SQL"],
  },
  {
    label: "Product",
    items: ["FastAPI", "SQLAlchemy", "WebSockets", "Jinja"],
  },
  {
    label: "Models and voice",
    items: ["OpenAI Realtime", "OpenAI chat", "Gemini Live", "ElevenLabs"],
  },
  {
    label: "Channels",
    items: ["Website voice", "Text chat", "WhatsApp Cloud API"],
  },
  {
    label: "Delivery",
    items: ["Docker", "Uvicorn"],
  },
];

export const experience = [
  {
    org: "Closer Tech",
    role: "Founder, AI product development",
    time: "Own venture",
    points: [
      "Building Joy, a business assistant and voice-agent studio, and Closer Assistant, a real-time voice platform.",
      "This is my company. It is not listed here as a job at someone else's firm.",
    ],
  },
  {
    org: "Closer Tech",
    role: "Machine Learning Engineer Intern",
    time: "February – April 2024",
    points: [
      "Three-month machine learning engineering internship.",
      "Deliverables from that period will be added when they can be shown alongside the work.",
    ],
  },
  {
    org: "Duce Tech",
    role: "Machine Learning Engineering",
    time: "2021 – 2023",
    points: [
      "Machine learning engineering role.",
      "Project detail will be added from the work that was actually delivered there.",
    ],
  },
];

export type ProjectStatus = "Implemented" | "Prototype" | "To publish";

export type Project = {
  slug: string;
  number: string;
  name: string;
  kicker: string;
  summary: string;
  status: ProjectStatus;
  weight: "flagship" | "next";
  domains: string[];
  stack: string[];
  problem: string;
  built: string;
  how: string;
  interesting: string;
  result: string;
  statusNote: string;
  next: string[];
  layers?: { name: string; detail: string }[];
};

export const projects: Project[] = [
  {
    slug: "closer-assistant",
    number: "01",
    name: "Closer Assistant",
    kicker: "AI product engineering",
    summary:
      "A real-time voice platform that keeps a business's knowledge and actions separate from the speech provider.",
    status: "Implemented",
    weight: "flagship",
    domains: ["LLMs", "Voice", "Python"],
    stack: ["Python", "FastAPI", "OpenAI Realtime", "ElevenLabs", "WebSockets"],
    problem:
      "A receptionist has to talk naturally, answer from one business's facts, and do small jobs such as checking a booking. Rebuilding that for every voice vendor makes the product fragile.",
    built:
      "Closer Assistant is a Python platform with two conversation engines behind one interface: OpenAI Realtime for speech-to-speech, and ElevenLabs for a conversational agent. Business knowledge and booking actions sit outside the engine, so the worker's facts do not have to be rewritten when the voice provider changes.",
    how:
      "The codebase has an engine base class, OpenAI and ElevenLabs clients, a knowledge-base module, booking action handlers, scenario tests, and a FastAPI web app. The architecture also draws phone, web, chat, and WhatsApp as channels.",
    interesting:
      "The useful cut is engine versus business brain. Personality, FAQs, and actions are not buried inside one provider's prompt. Speech on the OpenAI path is direct speech-to-speech rather than a separate transcribe-then-speak chain.",
    result:
      "No customer savings are claimed. What exists is a product codebase and a hotel-receptionist demo path, not a published count of live calls.",
    statusNote:
      "Implemented in this workspace as a working platform and demo. Telephony, CRM, and payment connections are drawn in the architecture and are not presented as finished customer integrations. Chroma and Pinecone appear as optional dependencies; this page does not claim a live vector index.",
    next: [
      "Publish a public repository with a setup that runs without private keys in the docs.",
      "Record a short call where the assistant books from the hotel demo.",
      "Connect one real calendar, and say so only after that connection works.",
    ],
    layers: [
      {
        name: "Channels",
        detail: "Phone, website voice, text chat, and WhatsApp are the intended doors in.",
      },
      {
        name: "Engines",
        detail: "OpenAI Realtime and ElevenLabs, behind a shared engine interface.",
      },
      {
        name: "Business brain",
        detail: "Knowledge, personality, and session context, independent of the voice vendor.",
      },
      {
        name: "Actions",
        detail: "Booking handlers for availability, reservations, and handoff to a person.",
      },
    ],
  },
  {
    slug: "adesuwa",
    number: "02",
    name: "Adesuwa",
    kicker: "Hotel operations assistant",
    summary:
      "WhatsApp assistant for Regional Hotel and Suites. Guests get a receptionist. The director gets the business, from the ERP and from staff reports.",
    status: "Implemented",
    weight: "flagship",
    domains: ["WhatsApp", "ERP", "Operations"],
    stack: ["Python", "FastAPI", "OpenAI", "WhatsApp", "Playwright", "SQLAlchemy", "Closer ERP API"],
    problem:
      "A hotel director cannot watch the front desk, the lounge, stock, bookings, and daily staff reports at once. The same WhatsApp number also has to answer guests who only want a room or a table.",
    built:
      "Adesuwa is the assistant for Regional Hotel and Suites and Regional Restaurant and Lounge. A guest message is handled as reception: rooms, the lounge, and common questions. A director message is a briefing. Staff send purchase, expense, attendance, and department reports on WhatsApp, including photos. Adesuwa stores those reports and answers the director from them, on WhatsApp.",
    how:
      "The bot reads who sent the message and switches role. Director answers come from two sources: a Playwright session that reads the hotel's EasyApp screens, and a Closer ERP client that can pull a briefing and, where the API allows it, take an action such as a booking or a stock note. Report text is parsed into structured records. Replies that would invent a figure are rejected when there is no source fact behind them.",
    interesting:
      "One assistant, three jobs, and they do not share a voice. Guests get a receptionist. Report numbers are ingested and not chatted with. The director is briefed as the owner, and a number in the reply has to come from the ERP or from a stored report.",
    result:
      "The routing, the report store, the ERP client, and the director briefing path are implemented. No occupancy rate, revenue change, or hours saved is claimed.",
    statusNote:
      "Implemented on this laptop in the Regional Hotel project. The director is briefed on WhatsApp, on the numbers registered for that role. Staff numbers and ERP credentials are not published here.",
    next: [
      "Publish a walkthrough that uses sample figures, not a live export of the hotel's books.",
      "Keep the guest receptionist and the director briefing labeled as two modes of one bot.",
    ],
    layers: [
      {
        name: "Guest",
        detail: "Reception for rooms, the lounge, and ordinary questions.",
      },
      {
        name: "Reports",
        detail: "Staff WhatsApp reports, including photos, stored for later questions.",
      },
      {
        name: "ERP",
        detail: "EasyApp through the browser, plus the Closer ERP API for a briefing.",
      },
      {
        name: "Director",
        detail: "A WhatsApp briefing that is not allowed to invent a number.",
      },
    ],
  },
  {
    slug: "cuegpt",
    number: "03",
    name: "CueGPT",
    kicker: "Student tutor",
    summary:
      "A chatbot for Cue Banks' students. It answers in his teaching voice, from his own sessions, and does not place trades.",
    status: "Implemented",
    weight: "flagship",
    domains: ["RAG", "Education", "LLMs"],
    stack: ["Python", "Flask", "Chroma", "OpenAI embeddings", "GPT-4o mini"],
    problem:
      "Students of Cue Banks' price-action classes ask the same questions about structure, liquidity, and entries. A general chatbot will invent a rule he does not teach.",
    built:
      "CueGPT is a Flask chat app for those students. A question is embedded, matched against a Chroma index of his teaching sessions, and answered by a model that is instructed to stay inside that method. The reply streams back in the browser. A later build of the same bot also accepts a chart image and talks through it with the same rules.",
    how:
      "Teachings are transcribed and indexed on this laptop. At question time the app embeds the message with text-embedding-3-small, retrieves six passages from the cue_trading_brain collection, and sends those passages plus a short memory of the chat to the model. The system prompt locks the voice, the pairs he actually teaches, and the order of a setup: structure, liquidity, sweep, confirmation, entry.",
    interesting:
      "The answer is not allowed to leave his lane. An unrelated question is turned back to the charts, and the prompt forbids concepts he does not teach. The retrieved session text is in the request, so the reply is tied to the class, not to a generic trading essay.",
    result:
      "The chat app, the index, and the retrieval path are built. No pass rate, student count, or trading return is claimed. The bot does not execute trades.",
    statusNote:
      "Implemented in Downloads as CUEGPT, with a later copy that adds chart images. The transcript pipeline that feeds the index is on the Desktop. This page does not publish his lesson text.",
    next: [
      "Publish a demo that uses a few cleared excerpts, not the full teaching archive.",
      "Show the retrieved passage beside the answer so a visitor can see the grounding.",
    ],
  },
  {
    slug: "business-automation",
    number: "04",
    name: "Business Automation Systems",
    kicker: "Workflows",
    summary:
      "A place for finished n8n and Python workflows, once those workflows are the ones being shown.",
    status: "To publish",
    weight: "next",
    domains: ["Automation", "APIs"],
    stack: ["n8n and Python, when the workflows are published"],
    problem:
      "Leads and repetitive follow-up sit in inboxes. An automation is only useful if it names the trigger, the systems it touches, and what a person still has to approve.",
    built:
      "No n8n workflow from this workspace is being presented as a finished case study. Adesuwa already runs a real operational loop for Regional Hotel, and that work is documented on its own page.",
    how:
      "Each future example should show the trigger, the steps, the APIs, and a failure path. A screenshot of a canvas is not enough.",
    interesting:
      "The hard part is the handoff: what the automation is allowed to send, and when it must stop and ask a person.",
    result:
      "No time saved and no leads handled are claimed.",
    statusNote:
      "To publish. Workflow exports are not in this workspace.",
    next: [
      "Export two real workflows with secrets removed.",
      "Write the trigger, the outcome, and the human approval step for each.",
    ],
  },
  {
    slug: "rag-knowledge-assistant",
    number: "05",
    name: "RAG Knowledge Assistant",
    kicker: "Retrieval",
    summary:
      "A small public demo of document in, grounded answer out. The pieces exist inside the products; the standalone demo does not yet.",
    status: "Prototype",
    weight: "next",
    domains: ["LLMs", "Retrieval"],
    stack: ["Python", "Knowledge files", "Optional vector-store dependencies"],
    problem:
      "A model that answers from memory will invent a room rate. A receptionist has to answer from the file the business actually provided.",
    built:
      "CueGPT already retrieves passages from a Chroma index of Cue Banks' lessons before it answers. Adesuwa answers the director from ERP rows and stored WhatsApp reports. This fifth project is the generic public demo still to extract: any document in, the passage shown beside the answer.",
    how:
      "The public demo should be boring on purpose: upload or load a document, split it, embed it, retrieve a handful of passages, and answer with those passages visible.",
    interesting:
      "Showing the retrieved passage matters more than the fluency of the answer. A visitor should see why the sentence was allowed.",
    result:
      "No benchmark score is claimed. The running index is CueGPT's, not a separate public demo.",
    statusNote:
      "Prototype inside the two flagship products. The standalone, reproducible demo is the next extract.",
    next: [
      "Extract one script that ingests a sample hotel sheet and answers only from it.",
      "Print the retrieved chunks beside the answer.",
      "Publish the demo without API keys in the repository.",
    ],
  },
  {
    slug: "generative-production",
    number: "06",
    name: "Generative AI Production",
    kicker: "Image and video workflows",
    summary:
      "A reserved case study for AI-assisted film and video experiments, once the workflow can be shown.",
    status: "To publish",
    weight: "next",
    domains: ["Generative video"],
    stack: ["To be listed from the actual pipeline"],
    problem:
      "Short AI clips fall apart when the character, the camera, and the scene change between shots. A production workflow has to plan the shot before it generates the frame.",
    built:
      "Nothing from a film pipeline is in this workspace, so this page does not describe a Blender scene, a camera track, or a finished short.",
    how:
      "When the work is published, the page should show the shot list, how a character stays consistent, and which steps are manual.",
    interesting:
      "Continuity is the engineering problem: identity, camera, and edit order, not a single impressive clip.",
    result:
      "No released film is claimed.",
    statusNote: "To publish. Experiments are not attached to this site yet.",
    next: [
      "Add one scene with the planning notes beside the frames.",
      "Label generated, edited, and unfinished shots differently.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
