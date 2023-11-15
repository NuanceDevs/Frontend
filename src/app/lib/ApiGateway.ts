import { log4TSProvider } from "./Logger";

export class ApiGateway {
  // Initialize the logger inside the class, not as an instance property
  private static logger = log4TSProvider.getLogger("ApiGateway");
  static baseUrl: string;

  constructor() {
    if (!ApiGateway.baseUrl) {
      ApiGateway.initializeBaseUrl();
    }
  }

  static initializeBaseUrl() {
    const gatewayIp = process.env.NEXT_PUBLIC_GATEWAY_IP;
    const gatewayPort = process.env.NEXT_PUBLIC_GATEWAY_PORT;
    this.logger.debug(`GATEWAY_IP: ${gatewayIp}, GATEWAY_PORT: ${gatewayPort}`);

    if (!gatewayIp || !gatewayPort) {
      const error = Error();
      this.logger.error(
        "GATEWAY_IP or GATEWAY_PORT not defined in environment variable",
        error
      );
      throw error;
    }

    ApiGateway.baseUrl = `http://${gatewayIp}:${gatewayPort}/api/`;
  }

  // Static function to make API calls
  static async fetchData(endpoint: string) {
    ApiGateway.logger.debug(
      `Fetching data from ${ApiGateway.baseUrl}${endpoint}`
    );

    const apiUrl = `${ApiGateway.baseUrl}${endpoint}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      const errorMessage = `HTTP error! Status: ${response.status}`;
      this.logger.error(errorMessage);
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
  }

  static async postData(endpoint: string, data: any) {
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

  static async deleteData(endpoint: string, data: any) {
    const apiUrl = `${ApiGateway.baseUrl}${endpoint}`;

    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorMessage = `HTTP error! Status: ${response.status}`;
      this.logger.error(errorMessage);
      throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
  }
}
