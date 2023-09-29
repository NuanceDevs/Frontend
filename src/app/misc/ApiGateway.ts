export class ApiGateway {
  // Define the base URL for your API
  static baseUrl = "http://0.0.0.0:3001/api/";

  // Static function to make API calls
  static async fetchData(endpoint: string) {
    const apiUrl = `${ApiGateway.baseUrl}${endpoint}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
}
