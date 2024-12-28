import { makeApiRequest, Result } from "./api";

const DEFAULT_API_URL = "https://app.viral.tech/api/v1";

export type ViralTechOptions = {
    apiKey: string;
    apiUrl?: string;
}

export class ViralTech {
    private apiKey: string;
    private apiUrl: string;

    constructor(options: ViralTechOptions) {
        this.apiKey = options.apiKey;
        this.apiUrl = options.apiUrl ?? DEFAULT_API_URL;
    }

    async logDownload(): Promise<Result<void>> {
        return makeApiRequest(`${this.apiUrl}/log-download`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${this.apiKey}`,
            },
        });
    }

    async logConversion(): Promise<Result<void>> {
        return makeApiRequest(`${this.apiUrl}/log-conversion`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${this.apiKey}`,
            },
        });
    }
}
