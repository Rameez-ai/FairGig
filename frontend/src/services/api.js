export const AUTH_API = "http://localhost:8001";
export const EARNINGS_API = "http://localhost:8002";
export const ANOMALY_API = "http://localhost:8003";
export const GRIEVANCE_API = "http://localhost:5000";
export const ANALYTICS_API = "http://localhost:8004";
export const CERTIFICATE_API = "http://localhost:8005";

export async function fetchData(url, method = "GET", body = null) {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json"
      }
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API error:", error);
    return null;
  }
}