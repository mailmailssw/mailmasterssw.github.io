const Contact = {
  data() {
    return {
      pages: pages,
      isSubmitting: false,
      submitSuccess: "",
      submitError: "",
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
      return pages.contact || {};
    },
    hours() {
      return pages.hours || [];
    }
  },

  methods: {

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
      this.submitError = "";
      this.submitSuccess = "";

      const email = this.form.email.trim();
      const phoneDigits = this.form.phone.replace(/\D/g, "");
      const quantity = Number(this.form.quantity);

      if (!email) {
        this.submitError = "Please enter your email.";
        return false;
      }

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
      if (!emailValid) {
        this.submitError = "Please enter a valid email address.";
        return false;
      }

      if (phoneDigits.length !== 10) {
        this.submitError = "Please enter a valid 10-digit phone number.";
        return false;
      }

      if (!this.form.projectDescription.trim()) {
        this.submitError = "Please describe your project.";
        return false;
      }

      if (!quantity || quantity <= 0) {
        this.submitError = "Please enter a valid quantity.";
        return false;
      }

      if (!this.form.letterSize ||
          !this.form.printType ||
          !this.form.returnEnvelope ||
          !this.form.carrierEnvelope ||
          !this.form.mailPieceSize) {
        this.submitError = "Please complete all required fields.";
        return false;
      }

      return true;
    },

    async submitForm() {
      this.submitError = "";
      this.submitSuccess = "";

      if (!this.validateForm()) return;

      this.isSubmitting = true;

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

      // 🔍 DEBUG LOGS (for your current issue)
      /*console.log("=== EMAILJS DEBUG ===");
      console.log("Service ID:", "service_9vzweew");
      console.log("Template ID:", "template_n7k4lfj");
      console.log("Template Params:", templateParams);
      console.log("EmailJS loaded:", typeof emailjs !== "undefined");*/

      try {
        await emailjs.send(
          "service_9vzweew",
          "template_n7k4lfj",  
          templateParams
        );

        this.submitSuccess = "Your quote request was sent successfully.";

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
        console.error("=== EMAILJS ERROR ===", error);
        this.submitError = error?.text || "Something went wrong while sending your request.";
      } finally {
        this.isSubmitting = false;
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
    }
  },
  template: ` 
    <div class="container-fluid">
      <h1>Request a Quote</h1>
      <div class="row g-4 mt-1">
        <div class="col-lg-7">
          <p class="text-muted">Tell us a little about your mailing project and we’ll follow up with pricing and options.</p>
          <form class="mt-3" @submit.prevent="submitForm">
            <div class="row g-3">
              <div class="col-md-12">
                <p class="text-muted">
                  Please include your email so we can follow up with your quote.
                </p>
              </div>
              <div class="col-md-6">
                <label class="form-label">Email</label>
                <input v-model="form.email" type="email" class="form-control" 
                :class="{ 'is-invalid': submitError && !form.email }" required>
                <div class="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </div>
              <div class="col-md-6">
                <label class="form-label">Phone</label>
                  <input
                    v-model="form.phone"
                    type="text"
                    class="form-control"
                    inputmode="numeric"
                    maxlength="14"
                    placeholder="(505) 555-1234"
                    @input="sanitizePhone"
                    required
                  >
              </div>

            <div class="col-12">
              <label class="form-label">Briefly describe your project</label>
              <textarea v-model="form.projectDescription" rows="4" class="form-control" required></textarea>
            </div>

            <div class="col-md-6">
              <label class="form-label">Quantity</label>
              <input v-model="form.quantity" type="number" class="form-control" required>
            </div>

            <div class="col-md-6">
              <label class="form-label">Letter size</label>
              <select v-model="form.letterSize" class="form-select" required>
                <option disabled value="">Select one</option>
                <option>8.5 x 11</option>
                <option>8.5 x 14</option>
                <option>Custom</option>
              </select>
            </div>

            <div class="col-md-6">
              <label class="form-label">Simplex or duplex</label>
              <select v-model="form.printType" class="form-select" required>
                <option disabled value="">Select one</option>
                <option>1 side</option>
                <option>2 sides</option>
              </select>
            </div>

            <div class="col-md-6">
              <label class="form-label">Additional pieces</label>
              <select v-model="form.additionalPieces" class="form-select">
                <option disabled value="">Select one</option>
                <option>None</option>
                <option>1 Insert</option>
                <option>2 Inserts</option>
                <option>3+ Inserts</option>
              </select>
            </div>

            <div class="col-md-6">
              <label class="form-label">Return Envelope</label>
              <select v-model="form.returnEnvelope" class="form-select" required>
                <option disabled value="">Select one</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div class="col-md-6">
              <label class="form-label">Envelope type</label>
              <select v-model="form.carrierEnvelope" class="form-select" required>
                <option disabled value="">Select one</option>
                <option>Window Envelope</option>
                <option>Regular number 1010</option>
                <option>4 x 6(standard postcard)</option>
                <option>4.25 x 5.5(compact postcard)</option>
                <option>5 x 7(premium postcard)</option>
                <option>Custom Envelope Size</option>
              </select>
            </div>

            <div class="col-md-6">
              <label class="form-label">Size</label>
              <select v-model="form.mailPieceSize" class="form-select" required>
                <option disabled value="">Select one</option>
                <option>#10</option>
                <option>6 x 9</option>
                <option>9 x 12</option>
                <option>Custom</option>
              </select>
            </div>
            
            
            <div class="col-12" v-if="submitError">
              <div class="alert alert-danger mb-0">
                {{ submitError }}
              </div>
            </div>

            <div class="col-12" v-if="submitSuccess">
              <div class="alert alert-success mb-0">
                {{ submitSuccess }}
              </div>
            </div>
            
            
            <div class="col-12">
              <button class="btn btn-primary w-100" type="submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Submitting...' : 'Submit Quote Request' }}
              </button>
            </div>

          </div>
        </form>
      </div>

      <div class="col-lg-5">
        <div class="border rounded p-3 h-100">
          <h2 class="h5 mb-3">Details</h2>
          <p class="mb-1" v-if="contact.address"><strong>Address:</strong> {{ contact.address }}</p>
          <p class="mb-1" v-if="contact.phone"><strong>Phone:</strong> {{ contact.phone }}</p>
          <p class="mb-3" v-if="contact.email"><strong>Email:</strong> <a :href="'mailto:'+contact.email">{{ contact.email }}</a></p>
          <h3 class="h6" v-if="(hours||[]).length">Hours</h3>
          <ul class="list-unstyled small mb-0">
            <li v-for="(row,i) in (hours || [])" :key="'h'+i">
              <strong>{{ row.d }}:</strong> {{ row.h }}
            </li>
          </ul>
          <div class="mt-3" v-if="contact.mapUrl">
            <a class="btn btn-outline-secondary btn-sm" :href="contact.mapUrl" target="_blank" rel="noopener">Open in Maps</a>
          </div>
        </div>
      </div>
    </div>
  </div>`

};