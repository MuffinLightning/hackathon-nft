export const fetchData = async (p) => {
    try {
      const response = await fetch(
        `http://localhost:8081/benefits/${p}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return null;
    }
  };