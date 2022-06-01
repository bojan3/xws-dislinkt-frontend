export class CreateAccountDTO {
    private username: string;
    private password: string;
    private email: string;
    private phoneNumber: string;
    private gender: Gender;
    private biography: string;
    private isPublic: boolean;
    private job: string;
    private education: string;

    constructor(username: string, password: string, email: string, phoneNumber: string,
        gender: Gender, biography: string, isPublic: boolean, job: string, education: string) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.biography = biography;
        this.isPublic = isPublic;
        this.job = job;
        this.education = education;
    }
}