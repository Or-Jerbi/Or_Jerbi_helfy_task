const BASE_URL = "http://localhost:4000/api/tasks";

async function handleResponse(res) {
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.msg || "Request failed");
  }
  return res.json();
}

// GET /api/tasks
export const getTasks = async () => {
  const res = await fetch(BASE_URL);
  return handleResponse(res);
};

// POST /api/tasks
export const createTask = async (task) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return handleResponse(res);
};

// PUT /api/tasks/:id
export const updateTask = async (id, updates) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return handleResponse(res);
};

// DELETE /api/tasks/:id
export const deleteTask = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return handleResponse(res);
}

// PATCH /api/tasks/:id/toggle
export const toggleTask = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}/toggle`, { method: "PATCH" });
  return handleResponse(res);
};