class User{
    constructor(
        fullName,
        nationality,
        phoneNumber,
        profilePictureUri,
        localId,
        dbId,
        nationalNumber
    ){
        this.fullName = fullName
        this.nationality = nationality
        this.phoneNumber = phoneNumber
        this.profilePictureUri = profilePictureUri
        this.localId = localId
        this.dbId = dbId
        this.nationalNumber = nationalNumber 
    }
    // could add onlineStatus, workStatus, truckLicenseNumber, truckId
}
export default User