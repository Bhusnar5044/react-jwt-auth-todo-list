import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface AxiosReturn {
    response?: AxiosResponse<any>;
    error?: AxiosResponse<any>;
}

export async function fetch(
    config: AxiosRequestConfig,
    token?: string,
    noAuthorization?: boolean,
): Promise<AxiosReturn> {
    try {
        const request = {
            ...config,
            headers: {
                ...(config.headers ? config.headers : {}),
                ...(!noAuthorization
                    ? {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                          Authorization: `Bearer ${token}`,
                      }
                    : {}),
            },
        };
        const response = await axios(request);
        return { response: { ...(response || { config, status: 500, data: '', headers: {}, statusText: '' }) } };
    } catch (error: any) {
        return { error: { ...(error.response || { status: 500, data: error, variant: 'error' }) } };
    }
}
