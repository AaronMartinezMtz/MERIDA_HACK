export interface Craftsman {
    id:              string;
    name:            string;
    lastName:        string;
    geoLocalization: number[];
    admissionDate:   Date;
    gender:          string;
    leader:          Leader;
}

export interface Leader {
    id:       string;
    userName: string;
    fullName: string;
    isActive: boolean;
    roles:    string[];
    isOnline: boolean;
    products: any[];
}


export interface ubications {

    color:  string
    lat:    number
    lng:    number
    name:   string
    tag:    string

}




export interface RespAPIOrdes {
    id:            string;
    razon:         string;
    direccion:     string;
    fecha_inicial: Date;
    fecha_final:   Date;
    estado:        string;
    dimensiones:   string;
    comentarios:   string;
    leader:        Leader2;
}

export interface Leader2 {
    id:       string;
    userName: string;
    fullName: string;
    isActive: boolean;
    roles:    string[];
    isOnline: boolean;
    products: any[];
}





export interface RespAPIAllLeaders {
    id:       string;
    userName: string;
    fullName: string;
    isActive: boolean;
    roles:    string[];
    isOnline: boolean;
    products: any[];
}


export interface leaders{
    id:       string;
    fullName: string;
}
