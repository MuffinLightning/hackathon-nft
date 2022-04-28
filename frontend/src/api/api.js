export const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/something`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return null;
    }
  };