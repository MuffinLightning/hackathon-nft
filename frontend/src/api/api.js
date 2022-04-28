export const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/benefits/123`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return null;
    }
  };