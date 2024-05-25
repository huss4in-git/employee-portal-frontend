// instead of create this variable in all component we are creating one model and import that model in all component that need this model

export class EmployeeModel {
    id?: string
    username?: string
    email?: string
    status?: string
}