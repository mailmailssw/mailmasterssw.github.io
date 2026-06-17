const pages = {
  brand: {
    logo: "/images/mailmasters-logo-new.png",
    name: "Mail Masters of the Southwest",
    legalName: "Mail Masters of the Southwest"
  },
  nav: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Printing", to: "/printing" },
    { label: "Mailing", to: "/mailing" },
    { label: "Mailroom Management", to: "/mailroom" },
    { label: "Request a Quote", to: "/contact" }
  ],
  home: {
    hero: {
      title: "Printing, Mailing, and Mailroom Support for New Mexico Businesses",
      subtitle: "Commercial direct mail, business printing, sorting, metering, and USPS-focused support from a local Albuquerque team.",
      ctaPrimary: { label: "Request a Quote", to: "/contact" },
      ctaSecondary: { label: "Explore Mailing Services", to: "/mailing" },
      image: "/images/mailmasters-logo-new.png"
    }
  },
  about: {
    tagline: "Local mailing experience. Practical support. Work done right.",
    body: [
      "Mail Masters of the Southwest is an Albuquerque printing and mailing company helping organizations prepare, process, and send business mail with less friction.",
      "We focus on the details that make mail projects work: clean preparation, accurate handling, reliable production, and practical guidance around USPS mailing requirements. Whether the job is a one-time campaign or recurring business mail, our goal is to make the process easier for your team."
    ],
    bullets: [
      "Direct mail and bulk mailing preparation",
      "Business printing for mail campaigns and daily operations",
      "Addressing, list cleanup, and mail processing support",
      "Mailroom sorting, metering, and USPS best-practice guidance"
    ],
    serve: [
      "Local businesses",
      "Nonprofits and community organizations",
      "Healthcare and professional offices",
      "Financial, legal, and service-based teams",
      "Campaigns and recurring mail programs"
    ],
    why: [
      "Keep printing and mailing under one roof",
      "Reduce avoidable mailing errors and delays",
      "Save staff time on repeat mailroom tasks",
      "Get straightforward help from people who understand mail workflows"
    ],
    glance: [
      { k: "Established", v: "2016" },
      { k: "Location", v: "Albuquerque, NM" },
      { k: "Focus", v: "Commercial printing, mailing, and mailroom support" }
    ]
  },
  contact: {
    email: "info@mailmasterssw.com",
    address: "2704 Girard Blvd NE, Albuquerque, NM 87107",
    phone: "(505) 433-4510",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=2704%20Girard%20Blvd%20NE%2C%20Albuquerque%2C%20NM%2087107"
  },
  hours: [
    { d: "Mon-Fri", h: "09:00 am - 05:00 pm" },
    { d: "Sat-Sun", h: "Closed" }
  ],
  servicesPrinting: {
    title: "Printing Services",
    intro: "Business printing built for direct mail, promotions, customer communication, and everyday operations.",
    items: [
      { title: "Postcards", src: "/images/services/printing/postcards.png", copy: "Standard and oversized postcards for promotions, outreach, reminders, and direct mail campaigns." },
      { title: "Brochures", src: "/images/services/printing/brochures.png", copy: "Tri-fold, half-fold, z-fold, and custom brochures for clear, professional communication." },
      { title: "Booklets / Notepads", src: "/images/services/printing/booklets-and-notepads.png", copy: "Booklets, catalogs, and notepads for presentations, programs, training, and daily business use." },
      { title: "Calendars", src: "/images/services/printing/calendars.png", copy: "Wall and desk calendars designed for customer gifts, promotions, and year-round visibility." },
      { title: "Flyers", src: "/images/services/printing/flyers.png", copy: "One-page flyers for events, announcements, offers, handouts, and mail inserts." },
      { title: "Rack Cards", src: "/images/services/printing/rack-cards.png", copy: "Clean, eye-catching rack cards for lobbies, counters, tourism displays, and local promotions." },
      { title: "Envelopes", src: "/images/services/printing/envelopes.png", copy: "Printed envelopes in common business sizes, including window and standard options." },
      { title: "Forms", src: "/images/services/printing/forms.png", copy: "Custom business forms, NCR forms, and operational documents made for everyday workflows." },
      { title: "Menus", src: "/images/services/printing/menus.png", copy: "Restaurant and service menus available in practical finishes for regular handling." },
      { title: "Sell Sheets", src: "/images/services/printing/sell-sheets.png", copy: "Product and service sheets that clearly present details, pricing, benefits, and next steps." },
      { title: "Table Tents", src: "/images/services/printing/table-tents.png", copy: "Counter and tabletop displays for restaurants, events, promotions, and front-desk messaging." }
    ]
  },
  servicesMailing: {
    title: "Mailing Services",
    intro: "Direct mail support from list preparation and addressing to mail processing and USPS handoff.",
    items: [
      { title: "EDDM", src: "images/services/mailing/eddm.png", copy: "Every Door Direct Mail for reaching neighborhoods, routes, and local areas cost-effectively." },
      { title: "Direct Mail", src: "/images/services/mailing/direct-mail.png", copy: "Addressed mail campaigns for customers, donors, voters, patients, members, and prospects." },
      { title: "Dynamic Mail", src: "/images/services/mailing/dynamic-mail.png", copy: "Triggered and recurring mail projects tied to events, customer actions, or business workflows." },
      { title: "Variable Data", src: "/images/services/mailing/variable-data.png", copy: "Personalized names, addresses, offers, images, and messages for stronger recipient targeting." },
      { title: "Mailing Lists", src: "/images/services/mailing/mailing-lists.png", copy: "Support for customer lists, targeted lists, segmentation, cleanup, and campaign preparation." },
      { title: "NCOA Certification", src: "/images/services/mailing/ncoa-certification.png", copy: "Address hygiene support using USPS National Change of Address processing." },
      { title: "Targeted Mailing", src: "/images/services/mailing/targeted-mailing.png", copy: "Mail campaigns aimed by geography, audience type, customer group, or campaign goal." },
      { title: "List Cleanup / Updates", src: "/images/services/mailing/list-cleanup-and-updates.png", copy: "De-duping, address cleanup, list maintenance, and preparation to reduce wasted mail." },
      { title: "Political Campaign Mail", src: "/images/services/mailing/political-campaign-mail.png", copy: "Political and advocacy mail support for candidate, issue, voter, and outreach campaigns." }
    ]
  },
  servicesMailroom: {
    title: "Mailroom Management & Support",
    intro: "Practical help for businesses that need cleaner mailroom workflows, better sorting, postage handling, and USPS-focused guidance.",
    items: [
      { title: "Mail Sorting & Preparation", copy: "Organized handling of outgoing mail to keep daily work moving and help qualify mail for available presort opportunities.", src: "/images/services/mailroom/mailroom-sorting.png" },
      { title: "Metering & Postage Handling", copy: "Postage processing and mail preparation support for recurring business mail and daily outgoing pieces.", src: "/images/services/mailroom/mailroom-metering.jpg" },
      { title: "Workflow Support", copy: "A cleaner structure for repeat mail tasks, internal handling, handoff points, and day-to-day mailroom routines.", src: "/images/services/mailroom/mailroom-workflow.png" },
      { title: "USPS Best-Practice Guidance", copy: "Straightforward guidance to help your team align mail preparation with practical USPS mailing requirements.", src: "/images/services/mailroom/mailroom-usps.png" }
    ]
  }
};
