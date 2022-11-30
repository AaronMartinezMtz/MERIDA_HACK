export interface RespAPIArtesanosRegister {
    status:      boolean;
    user:        User;
    accessToken: string;
    statusCode:  number,
	message:     string[], 
	error:       string   
}

export interface User {
    userName: string;
    fullName: string;
    id:       string;
    isActive: boolean;
    roles:    string[];
    isOnline: boolean;
}
