export type IAuthContext = {
    tokens: { access_token?: string; refresh_token?: string };
    profileInfo: { [key: string]: string };
    login?: (data: any) => void;
    logout?: () => void;
};
