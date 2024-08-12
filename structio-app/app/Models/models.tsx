export interface Business {
    id: string;
    name?: string;
    adminFirst?: string;
    adminLast?:string;    
};

export interface Customer {
    id: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
  };

export interface Service{
    id: string;
    name?: string;
    cost?: number;
}
