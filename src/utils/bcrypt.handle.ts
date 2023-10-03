import {hash, compare} from "bcryptjs"

const encrypt = async (passPlainText: string) => {
    const passwordHash = await hash(passPlainText, 8);
    return passwordHash;
}

const verify = async  (passPlainText: string, passHash:string) => {
    const isCorrect = await compare(passPlainText,passHash);
    return isCorrect;
}

export { encrypt, verify}