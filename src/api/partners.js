export const Partners = async () => {
  try {
    const response = await fetch(
      "https://app.memate.com.au/api/v1/partners/public/catalog/",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        `Partners API error: ${response.status}`,
        errorText
      );

      return [];
    }

    const result = await response.json();

    console.log("Partners API result:", result);

    return Array.isArray(result?.data) ? result.data : [];
  } catch (error) {
    console.error("Error fetching partners:", error);
    return [];
  }
};