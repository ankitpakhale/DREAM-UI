interface BackendResponse<T = any> {
  status: boolean;
  payload: T;
  message: string;
  status_code: number;
}

export const removeDream = () => {
  try {
    localStorage.removeItem("dreamResponse");
    console.log("✅ Removed dreamResponse from localStorage");
  } catch (e) {
    console.error("❌ Failed to remove dream from localStorage:", e);
  }
};

export const storeDream = (response: BackendResponse) => {
  try {
    localStorage.setItem("dreamResponse", JSON.stringify(response));
    console.log("✅ Stored dreamResponse in localStorage");
  } catch (e) {
    console.error("❌ Failed to store in localStorage:", e);
  }
};

export const loadDream = (): BackendResponse | null => {
  const str = localStorage.getItem("dreamResponse");
  if (!str) return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
};
