export interface MaintenanceLog {
    _id?: string;
    equipment: string; // Equipment ID
    description: string;
    serviceDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
