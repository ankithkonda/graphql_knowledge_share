import { Greeting_greeting } from '../../types/Greeting';

export const handler = async (event: any): Promise<Greeting_greeting> => {
    const name = event.arguments.name;
    return {
        name: name,
        age: 29,
    };
};
