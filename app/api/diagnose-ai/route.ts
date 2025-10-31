import { exec } from "child_process"
import { promisify } from "util"

const execAsync = promisify(exec)

export async function POST(request: Request) {
  try {
    const { symptoms } = await request.json()

    if (!symptoms || symptoms.length === 0) {
      return Response.json({ error: "No symptoms provided" }, { status: 400 })
    }

    // Build prompt for Gemini
    const prompt = `You are a medical diagnosis assistant. Based on the following symptoms, provide a diagnosis in JSON format.

Symptoms: ${symptoms.join(", ")}

Respond ONLY with valid JSON in this exact format:
{
  "disease": "Disease Name",
  "explanation": "Brief explanation of the condition",
  "precautions": ["precaution 1", "precaution 2", "precaution 3"],
  "recommendations": ["recommendation 1", "recommendation 2", "recommendation 3"]
}

Important: Provide practical medical advice but always recommend consulting a healthcare professional.`

    // Call Gemini CLI
    const { stdout } = await execAsync(`gemini "${prompt.replace(/"/g, '\\"')}"`)
    
    // Parse the response
    const jsonMatch = stdout.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error("Invalid response format from Gemini")
    }

    const diagnosis = JSON.parse(jsonMatch[0])

    return Response.json(diagnosis)
  } catch (error) {
    console.error("AI Diagnosis error:", error)
    return Response.json({ error: "Failed to generate AI diagnosis" }, { status: 500 })
  }
}
