export const getProducts = async () => {
  const response = await fetch(
    "https://us-central1-dapp-pocket.cloudfunctions.net/cappuuApp/projects",
    {
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer c46da20b-f2cc-4e69-85c4-20d83c532abe`,
      }),
      method: "GET",
    }
  );
  return response.json();
};
