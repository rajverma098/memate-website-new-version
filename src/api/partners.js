const PARTNERS_API_URL =
  "https://app.memate.com.au/api/v1/partners/public/catalog/";

export const partnersData = async () => {
  try {
    const response = await fetch(PARTNERS_API_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        `Partners API error: ${response.status}`,
        errorText
      );

      throw new Error(
        `Failed to load partners. HTTP ${response.status}`
      );
    }

    const result = await response.json();


    if (!Array.isArray(result)) {
      console.error("Unexpected partners API response:", result);

      throw new Error("Invalid partners API response.");
    }

    return result;
  } catch (error) {
    console.error("Error fetching partners:", error);

    throw error;
  }
};