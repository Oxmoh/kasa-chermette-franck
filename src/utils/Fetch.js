const fetchApi = async () => {   
    try {
      const response = await fetch("../logements.json");
      return response.ok ? await response.json() : null;
    } catch (error) {
      console.error("Une erreur est survenue", error);
      return null;
    }
  };

  

