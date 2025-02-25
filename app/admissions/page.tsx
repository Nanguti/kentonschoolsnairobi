import { AdmissionsHero } from "@/components/admissions/AdmissionsHero";
import { AdmissionsProcess } from "@/components/admissions/AdmissionsProcess";
import { AdmissionsFees } from "@/components/admissions/AdmissionsFees";
import { EnquiryForm } from "@/components/admissions/EnquiryForm";

export const metadata = {
  title: "Admissions | Brookhouse School",
  description:
    "Learn about our admissions process, fees, and how to join our prestigious international school.",
};

export default function AdmissionsPage() {
  return (
    <>
      <AdmissionsHero />
      <AdmissionsProcess />
      <AdmissionsFees />
      <EnquiryForm />
    </>
  );
}
