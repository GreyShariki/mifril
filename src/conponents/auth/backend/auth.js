export const loginUser = async (email, password) => {
  try {
    const res = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error("Ошибка при входе");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Ошибка при входе:", error);
    throw error;
  }
};
