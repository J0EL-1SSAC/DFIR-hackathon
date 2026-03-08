import { calculateRisk } from "@/lib/riskEngine"

let alerts = []

export async function POST(req){

  const body = await req.json()

  const risk = calculateRisk(body.event)

  const alert = {
    user: body.user,
    event: body.event,
    score: risk.score,
    level: risk.level,
    time: new Date().toLocaleString()
  }

  alerts.push(alert)

  return Response.json(alert)

}

export async function GET(){

  return Response.json(alerts)

}