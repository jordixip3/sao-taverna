export const getApiUrls = (path: string): string[] => {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : 'localhost';
  return [
    `http://${hostname}:8124/api/${path}`,
    `http://localhost:8124/api/${path}`,
    `http://backend:8080/api/${path}`
  ];
};

export const apiFetch = async <T>(path: string, options?: RequestInit): Promise<T> => {
  const urls = getApiUrls(path);
  let lastError: any = null;
  for (const url of urls) {
    try {
      const res = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...(options?.headers || {}),
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return await res.json() as T;
      }
      return null as any;
    } catch (err) {
      console.warn(`Failed to fetch from ${url}:`, err);
      lastError = err;
    }
  }
  throw lastError || new Error(`Failed to fetch from all URLs for path: ${path}`);
};
