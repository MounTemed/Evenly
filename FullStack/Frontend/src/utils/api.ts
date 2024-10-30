const API_URL = 'https://api.example.com';

export const fetchTechStack = async () => {
  const response = await fetch(`${API_URL}/techstack`);
  return response.json();
};
