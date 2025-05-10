// // src/api/chat.js

// const openAiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

// export async function getChatResponse(prompt) {
//   try {
//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${openAiApiKey}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages: [{ role: 'user', content: prompt }],
//       }),
//     });

//     // If the response isn't ok, log and throw an error
//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error('API request failed with status:', response.status, errorText);
//       throw new Error('OpenAI API request failed');
//     }

//     // Parse and log the response to debug
//     const data = await response.json();
//     console.log('API response:', data); // Log the full response from OpenAI API

//     // Return the response from the assistant
//     return data.choices[0].message.content;
//   } catch (error) {
//     console.error('Error in getChatResponse:', error);
//     throw new Error('Something went wrong. Please try again later.');
//   }
// }
// src/api/chat.js

const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;

export async function getChatResponse(prompt) {
  try {
    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=' + geminiApiKey,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, errorText);
      throw new Error('Gemini API request failed');
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, no response.';
  } catch (error) {
    console.error('Error with Gemini API:', error);
    throw new Error('Something went wrong. Try again later.');
  }
}
