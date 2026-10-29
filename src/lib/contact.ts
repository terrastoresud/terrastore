import { projectTypes } from "@/content/navigation";

export type ContactInput = {
  name: string;
  phone: string;
  city: string;
  projectType: string;
  dimensions: string;
  message: string;
  consent: boolean;
  company: string;
};

export type FieldErrors = Partial<Record<keyof ContactInput, string>>;

const types: readonly string[] = projectTypes;

export function emptyContact(): ContactInput {
  return {
    name: "",
    phone: "",
    city: "",
    projectType: "",
    dimensions: "",
    message: "",
    consent: false,
    company: "",
  };
}

export function validateContact(input: ContactInput): FieldErrors {
  const errors: FieldErrors = {};
  const name = input.name.trim();
  const phone = input.phone.trim();
  const city = input.city.trim();
  const message = input.message.trim();
  const dimensions = input.dimensions.trim();
  const digits = phone.replace(/\D/g, "");

  if (input.company.trim()) errors.company = "Champ inattendu.";
  if (name.length < 2 || name.length > 80) errors.name = "Indiquez votre nom.";
  if (!/^[\d+\s().-]{8,24}$/.test(phone) || digits.length < 8 || digits.length > 15) {
    errors.phone = "Indiquez un numéro de téléphone ou WhatsApp.";
  }
  if (city.length < 2 || city.length > 80) errors.city = "Indiquez la ville du projet.";
  if (!types.includes(input.projectType)) errors.projectType = "Choisissez un type de projet.";
  if (dimensions.length > 120) errors.dimensions = "Raccourcissez les dimensions.";
  if (message.length < 12 || message.length > 2000) {
    errors.message = "Décrivez le besoin en quelques lignes.";
  }
  if (!input.consent) errors.consent = "Le consentement est nécessaire pour envoyer le message.";
  return errors;
}
