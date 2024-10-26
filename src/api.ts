export type Result<T> = {
    success: true;
    data: T;
} | {
    success: false;
    error: string;
}

export function makeApiRequest<T>(url: string, options: RequestInit): Promise<Result<T>> {
    return fetch(url, options).then(async (response) => {
        if (!response.ok) {
            return { success: false as const, error: response.statusText };
        }
        return { success: true as const, data: await response.json() };
    }).catch((error: Error) => {
        return { success: false as const, error: error.message };
    });
}
