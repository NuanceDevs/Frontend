

export class ApiGateway {
  // Define the base URL for your API
  static baseUrl: string;

  static initializeBaseUrl() {
   
    const gatewayIp = process.env.NEXT_PUBLIC_GATEWAY_IP;
    const gatewayPort = process.env.NEXT_PUBLIC_GATEWAY_PORT;

    console.log(gatewayIp)
    console.log(gatewayPort)

    if (!gatewayIp || !gatewayPort) {
      throw new Error('GATEWAY_IP or GATEWAY_PORT not defined in .env');
    }

    ApiGateway.baseUrl = `http://${gatewayIp}:${gatewayPort}/api/`;
  }

  // Static function to make API calls
  static async fetchData(endpoint: string) {
    if (!ApiGateway.baseUrl) {
      ApiGateway.initializeBaseUrl();
    }

    const apiUrl = `${ApiGateway.baseUrl}${endpoint}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  static async postData(endpoint: string, data: any) {
    if (!ApiGateway.baseUrl) {
      ApiGateway.initializeBaseUrl();
    }

    const apiUrl = `${ApiGateway.baseUrl}${endpoint}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  }
}
