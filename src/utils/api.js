export const getProductsData = async () => {
  const response = await fetch(
    "https://us-central1-dapp-pocket.cloudfunctions.net/cappuuApp/projects",
    {
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      }),
      method: "GET",
    }
  );
  return response.json();
};
