export interface RespAPIAuthAdmin {
    status:      boolean;
    user:        User;
    accessToken: string;
    statusCode: number;
    message:    string;
    error:      string;
}

export interface User {
    id:       string;
    userName: string;
    password: string;
    products: any[];
}
