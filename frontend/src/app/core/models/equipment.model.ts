export interface Equipment {
    _id?: string;
    name: string;
    serialNumber: string;
    lastServiceDate: Date | string;
    status?: 'OK' | 'Due Soon' | 'Due for Service';
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
