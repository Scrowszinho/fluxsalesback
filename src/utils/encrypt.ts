import bycrpt from 'bcrypt';

export const hashPassword = async (password: string)  =>{
    const passwordHashed = await bycrpt.hash(password, 10)
    return passwordHashed;
}

export const checkPassword = async (password: string, storedHash: string) => {
    return await bycrpt.compare(password, storedHash)
}
  