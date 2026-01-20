const estimateService = document.getElementById("estimate-service");
const estimateSize = document.getElementById("estimate-size");
const estimateResult = document.getElementById("estimate-result");

const baseRanges = {
  "Nettoyage voiture": [40, 120],
  "Nettoyage terrasse": [80, 220],
  "Nettoyage canapé & tissus": [70, 200],
  "Travaux de jardinage": [60, 180]
};

const sizeMultipliers = {
  "Petit (1 à 20 m²)": 1,
  "Moyen (20 à 50 m²)": 1.4,
  "Grand (50 m² et +)": 1.9
};

function updateEstimate() {
  if (!estimateService || !estimateSize || !estimateResult) return;
  const base = baseRanges[estimateService.value] || [60, 150];
  const multiplier = sizeMultipliers[estimateSize.value] || 1;
  const min = Math.round(base[0] * multiplier);
  const max = Math.round(base[1] * multiplier);
  estimateResult.textContent = `${min} € à ${max} € TTC`;
}

estimateService?.addEventListener("change", updateEstimate);
estimateSize?.addEventListener("change", updateEstimate);
updateEstimate();

const devisForm = document.getElementById("devis-form");
const devisConfirm = document.getElementById("devis-confirm");
const devisSummary = document.getElementById("devis-summary");
const devisSms = document.getElementById("devis-sms");
const devisMail = document.getElementById("devis-mail");
const devisService = document.getElementById("devis-service");
const extraField = document.getElementById("extra-field");

function renderExtraField() {
  if (!extraField || !devisService) return;
  const service = devisService.value;
  let label = "";
  let placeholder = "";
  if (service === "Nettoyage voiture") {
    label = "Type de véhicule";
    placeholder = "Citadine, SUV, utilitaire...";
  } else if (service === "Nettoyage terrasse") {
    label = "Type de sol";
    placeholder = "Dalles, pierre, bois...";
  } else if (service === "Nettoyage canapé & tissus") {
    label = "Type de tissu";
    placeholder = "Tissu, velours, microfibre...";
  } else if (service === "Travaux de jardinage") {
    label = "Détails jardin";
    placeholder = "Tonte, taille, désherbage...";
  }
  extraField.innerHTML = label
    ? `<label>${label}</label><input name="details" placeholder="${placeholder}" />`
    : "";
}

function updateSummary() {
  if (!devisSummary || !devisService) return;
  const name = document.getElementById("devis-name").value || "-";
  const phone = document.getElementById("devis-phone").value || "-";
  const email = document.getElementById("devis-email").value || "-";
  const city = document.getElementById("devis-city").value || "à préciser";
  const message = document.getElementById("devis-message").value || "-";
  const urgency = document.getElementById("devis-urgency").value || "Normal";
  devisSummary.textContent = `Service : ${devisService.value}\nNom : ${name}\nTéléphone : ${phone}\nEmail : ${email}\nVille/CP : ${city}\nUrgence : ${urgency}\nMessage : ${message}`;

  const smsBody = `Bonjour, je souhaite un devis pour ${devisService.value} à ${city}. Détails : ${message}.`;
  devisSms?.setAttribute("href", `sms:+33675424908?&body=${encodeURIComponent(smsBody)}`);
  const mailBody = encodeURIComponent(devisSummary.textContent);
  devisMail?.setAttribute("href", `mailto:contact@lesportesdazur.fr?subject=Demande%20de%20devis&body=${mailBody}`);
}

devisService?.addEventListener("change", () => {
  renderExtraField();
  updateSummary();
});

["devis-name", "devis-phone", "devis-email", "devis-city", "devis-message", "devis-urgency"].forEach((id) => {
  document.getElementById(id)?.addEventListener("input", updateSummary);
});

renderExtraField();
updateSummary();

if (devisForm) {
  devisForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("devis-name").value.trim();
    const phone = document.getElementById("devis-phone").value.trim();
    const city = document.getElementById("devis-city").value.trim();
    const message = document.getElementById("devis-message").value.trim();
    const rgpd = document.getElementById("devis-rgpd").checked;
    if (!name || !phone || !city || !message || !rgpd) {
      devisConfirm.style.display = "block";
      devisConfirm.textContent = "Merci de compléter les champs obligatoires (Nom, Téléphone, Ville/CP, Description, RGPD).";
      return;
    }
    devisConfirm.style.display = "block";
    devisConfirm.textContent = "Merci ! Votre demande est bien prise en compte. Nous vous répondons rapidement.";
    trackCTA("Envoi devis");
  });
}

const contactForm = document.getElementById("contact-form");
const contactConfirm = document.getElementById("contact-confirm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const message = document.getElementById("contact-message").value.trim();
    if (!name || !phone || !message) {
      contactConfirm.style.display = "block";
      contactConfirm.textContent = "Merci de compléter les champs obligatoires (Nom, Téléphone, Message).";
      return;
    }
    contactConfirm.style.display = "block";
    contactConfirm.textContent = "Merci ! Votre message a bien été envoyé. Nous vous répondons rapidement.";
    trackCTA("Envoi contact");
  });
}
