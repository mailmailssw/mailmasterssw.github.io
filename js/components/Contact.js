window.Contact = {
  template: document.getElementById('tmpl-contact').innerHTML,
  data() {
    return {
      pages: window.pages,
      form: {
        email: "",
        phone: "",
        projectDescription: "",
        quantity: "",
        letterSize: "",
        printType: "",
        additionalPieces: "",
        returnEnvelope: "",
        carrierEnvelope: "",
        mailPieceSize: ""
      }
    };
  },
  computed: {
    contact() {
      return this.pages.contact || {};
    },
    hours() {
      return this.pages.hours || [];
    }
  },
  methods: {
    
    async submitForm() {
      const templateParams = {
        email: this.form.email,
        phone: this.form.phone,
        project_description: this.form.projectDescription,
        quantity: this.form.quantity,
        letter_size: this.form.letterSize,
        print_type: this.form.printType,
        additional_pieces: this.form.additionalPieces,
        return_envelope: this.form.returnEnvelope,
        carrier_envelope: this.form.carrierEnvelope,
        mail_piece_size: this.form.mailPieceSize
      };

      try {
        await emailjs.send(
          "service_5lawk5f",
          "template_n7k4lfj",
          templateParams
        );

        alert("Quote request sent successfully!");

        // Reset form
        this.form = {
          email: "",
          phone: "",
          projectDescription: "",
          quantity: "",
          letterSize: "",
          printType: "",
          additionalPieces: "",
          returnEnvelope: "",
          carrierEnvelope: "",
          mailPieceSize: ""
        };

      } catch (error) {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Try again.");
      }
    },

    tryAlt(ev, src) {
      const el = ev.target;
      if (el && !el.dataset.altTried) {
        el.dataset.altTried = "1";
        let p = ("" + src)
          .replace(/^[./]+/, "")
          .replace(/^images\//, "assets/public/images/");

        if (!p.startsWith("assets/")) {
          p = "assets/public/images/" + p;
        }

        el.src = "./" + p.replace(
          "assets/public/images/",
          "assets/public/public/images/"
        );
      }
    },
    sanitizePhone(e) {
  let digits = e.target.value.replace(/\D/g, "");
  digits = digits.slice(0, 10);

  if (digits.length <= 3) {
    this.form.phone = digits;
  } else if (digits.length <= 6) {
    this.form.phone = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  } else {
    this.form.phone = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
},

  validateForm() {
    if (!this.form.email.trim()) {
      alert("Please enter an email address.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!this.form.phone.trim()) {
      alert("Please enter a phone number.");
      return false;
    }

    const digits = this.form.phone.replace(/\D/g, "");
    if (digits.length < 10) {
      alert("Please enter a valid phone number.");
      return false;
    }

    if (!this.form.projectDescription.trim()) {
      alert("Please describe your project.");
      return false;
    }

    if (!this.form.quantity || Number(this.form.quantity) <= 0) {
      alert("Please enter a valid quantity.");
      return false;
    }

    if (!this.form.letterSize || !this.form.printType || !this.form.returnEnvelope || !this.form.carrierEnvelope || !this.form.mailPieceSize) {
      alert("Please complete all required fields.");
      return false;
    }

    return true;
  }
  }
};