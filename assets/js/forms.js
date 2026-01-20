function updateDevisSummary() {
  const summary = document.getElementById("devis-summary");
  if (!summary) return;

  const name = document.getElementById("devis-name")?.value || "-";
  const phone = document.getElementById("devis-phone")?.value || "-";
  const email = document.getElementById("devis-email")?.value || "-";
  const city = document.getElementById("devis-city")?.value || "à préciser";
  const service = document.getElementById("devis-service")?.value || "-";
  const description = document.getElementById("devis-description")?.value || "-";

  summary.textContent = `Service : ${service}\nNom : ${name}\nTéléphone : ${phone}\nEmail : ${email}\nVille / CP : ${city}\nDescription : ${description}`;

  const sms = document.getElementById("devis-sms");
  const mail = document.getElementById("devis-mail");
  const smsBody = `Bonjour, je souhaite un devis pour ${service} à ${city}. Détails : ${description}.`;
  if (sms) sms.setAttribute("href", `sms:+33675424908?&body=${encodeURIComponent(smsBody)}`);
  if (mail) {
    const mailBody = `Service : ${service}\nNom : ${name}\nTéléphone : ${phone}\nEmail : ${email}\nVille / CP : ${city}\nDescription : ${description}`;
    mail.setAttribute(
      "href",
      `mailto:contact@lesportesdazur.fr?subject=Demande%20de%20devis&body=${encodeURIComponent(mailBody)}`
    );
  }
}

function renderServiceFields() {
  const service = document.getElementById("devis-service")?.value;
  const container = document.getElementById("service-fields");
  if (!container) return;

  let html = "";
  if (service === "Nettoyage voiture") {
    html = `
      <div>
        <label for="vehicle-type">Type de véhicule</label>
        <input id="vehicle-type" name="vehicle-type" placeholder="Citadine, SUV, utilitaire..." />
      </div>
      <div>
        <label for="vehicle-detail">Niveau de saleté</label>
        <input id="vehicle-detail" name="vehicle-detail" placeholder="Léger, moyen, important" />
      </div>
    `;
  } else if (service === "Nettoyage terrasse") {
    html = `
      <div>
        <label for="terrace-size">Surface estimée</label>
        <input id="terrace-size" name="terrace-size" placeholder="Ex : 25 m²" />
      </div>
      <div>
        <label for="terrace-material">Type de sol</label>
        <input id="terrace-material" name="terrace-material" placeholder="Dalles, pierre, bois..." />
      </div>
    `;
  } else if (service === "Nettoyage canapé & tissus") {
    html = `
      <div>
        <label for="fabric-type">Type de tissu</label>
        <input id="fabric-type" name="fabric-type" placeholder="Tissu, velours, microfibre..." />
      </div>
      <div>
        <label for="fabric-stains">Taches / odeurs</label>
        <input id="fabric-stains" name="fabric-stains" placeholder="Café, animaux, humidité..." />
      </div>
    `;
  } else if (service === "Jardinage") {
    html = `
      <div>
        <label for="garden-size">Surface de jardin</label>
        <input id="garden-size" name="garden-size" placeholder="Ex : 80 m²" />
      </div>
      <div>
        <label for="garden-tasks">Travaux souhaités</label>
        <input id="garden-tasks" name="garden-tasks" placeholder="Tonte, taille, désherbage..." />
      </div>
    `;
  }

  container.innerHTML = html;
}

function initDevisForm() {
  const form = document.getElementById("devis-form");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const serviceParam = params.get("service");
  if (serviceParam) {
    const serviceSelect = document.getElementById("devis-service");
    if (serviceSelect) {
      serviceSelect.value = decodeURIComponent(serviceParam);
    }
  }

  renderServiceFields();
  updateDevisSummary();

  form.addEventListener("input", updateDevisSummary);

  document.getElementById("devis-service")?.addEventListener("change", () => {
    renderServiceFields();
    updateDevisSummary();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const confirmation = document.getElementById("devis-confirm");
    const rgpd = document.getElementById("devis-rgpd");

    if (!rgpd?.checked) {
      confirmation.textContent = "Merci de cocher la case RGPD pour envoyer votre demande.";
      confirmation.classList.add("show");
      return;
    }

    confirmation.textContent = "Merci ! Votre demande est bien prise en compte. Nous vous répondons rapidement.";
    confirmation.classList.add("show");
    trackCTA("Envoi devis");
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const confirm = document.getElementById("contact-confirm");
    confirm.textContent = "Merci ! Nous revenons vers vous rapidement.";
    confirm.classList.add("show");
    trackCTA("Envoi contact");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initDevisForm();
  initContactForm();
});
