export function calculateRisk(event) {

  let score = 0

  if(event === "confidential_download") score += 40
  if(event === "large_transfer") score += 35
  if(event === "location_change") score += 30
  if(event === "after_hours") score += 20

  let level = "LOW"

  if(score >= 70) level = "HIGH"
  else if(score >= 40) level = "MEDIUM"

  return {score, level}

}