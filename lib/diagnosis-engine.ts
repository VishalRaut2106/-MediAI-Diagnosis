import { DISEASE_RULES, type Disease } from "./disease-rules"

export function diagnoseWithRules(symptoms: string[]): Disease | null {
  // Find disease with maximum matching symptoms
  const matches = DISEASE_RULES.map((disease) => {
    const matchingSymptoms = disease.symptoms.filter((symptom) => symptoms.includes(symptom))
    return {
      disease,
      matchCount: matchingSymptoms.length,
      matchPercentage: (matchingSymptoms.length / disease.symptoms.length) * 100,
    }
  }).sort((a, b) => b.matchCount - a.matchCount)

  // Return best match if at least 2 symptoms match
  if (matches[0]?.matchCount >= 2) {
    return matches[0].disease
  }

  return null
}
