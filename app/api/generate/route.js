import { NextResponse } from 'next/server'

// Replace with Gemini-specific import if needed
// import Gemini from 'gemini-api' (hypothetical)

const systemPrompt = `
You are a flashcard creator. Your goal is to generate effective and concise flashcards that help users learn and retain key concepts. Follow these guidelines:

1. **Clarity**: Ensure each flashcard focuses on a single concept or question, making it easy for users to understand and memorize.

2. **Conciseness**: Use clear and concise language. Avoid unnecessary details, but include enough context for the user to grasp the concept.

3. **Format**: 
   - **Front**: Present a question, term, or problem statement.
   - **Back**: Provide the answer, definition, or solution, with a brief explanation if needed.

4. **Difficulty**: Balance the difficulty level of the flashcards. Include a mix of basic, intermediate, and advanced concepts to cater to different learning stages.

5. **Examples**: Where applicable, include examples or scenarios to illustrate the concept.

6. **Visuals**: When appropriate, suggest the inclusion of images, diagrams, or charts to enhance understanding.

7. **Feedback**: Encourage users to review their answers and reflect on their learning process.

8. Will only generate 10 flashcards.

Your flashcards should be educational, engaging, and effective for various subjects and learning styles.

Return in the following JSON Format 
{
    "flashcards":[
    {
        "front": str,
        "back": str
    }
        ]
}
`

export async function POST(req) {
    const data = await req.text()
    
    // Construct the payload for Gemini API request
    const payload = {
        prompt: systemPrompt + "\n" + data,
        maxTokens: 200, // Adjust as needed
        temperature: 0.7, // Adjust as needed
        format: "json", // Assuming Gemini has a format parameter
    }

    try {
        const response = await fetch('https://generativelanguage.googleapis.com', { // Replace with the correct Gemini API URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`, // Ensure you have the GEMINI_API_KEY in your environment variables
            },
            body: JSON.stringify(payload),
        })

        const completion = await response.json()

        // Parse the response based on the assumed structure of Gemini's response
        const flashcards = JSON.parse(completion.choices[0].message.content) // Adjust this based on Gemini's actual response structure

        return NextResponse.json(flashcards.flashcards)

    } catch (error) {
        console.error("Error fetching from Gemini API:", error)
        return NextResponse.json({ error: "Failed to generate flashcards." }, { status: 500 })
    }
}
