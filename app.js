import dotenv from 'dotenv';
dotenv.config();

import OpenAI from "openai/index.mjs";

const openAi = new OpenAI ({
    apiKey: `${process.env.OPENAI_API_KEY}`,
    
});

/**
 * Challenge:
 * 
 * I've pasted some output below. Try and figure out 
 * what instructions I gave OpenAI to get that output.
 * 
 * On the screen, visions gleam, a tech queen's dream, 
 * in every home's scene.
 * Pixels dance, in a trance, shows advance, in a 
 * high-def glance.
 * Remote in hand, worlds expand, from sitcom land to 
 * news that's grand.
 * Binging shows, the excitement grows, the plot thickens 
 * and the time just flows.
 * From dawn till night, in colors bright, TVs light up 
 * our life just right.
 * **/

/**
 * Challenge:
 * 1. Ask OpenAI to explain something complicated 
 *    to you. For example Quantum Computing.
 * 
 * Prompt Engineering Stretch Goals
 * - See if you can control the level of complexity of 
 *   the generated content, for example is this for 
 *   10-year-olds or college kids?
 * - See if you can control the length of the output.
 * **/ 

const message = [
    {
        role : 'system',
        content : 'You are an expert at poetry.'
    },
    {
        role : 'user',
        content : 'Write me a simple 5 sentence poem about tv.'
    }
];

const response = await openAi.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: message
});

const answer = JSON.stringify(response.choices[0].message.content);

console.log(answer);
