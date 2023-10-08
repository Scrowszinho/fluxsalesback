import bcrypt from 'bcrypt';

export const hashPassword = async (password: string)  =>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

export const checkPassword = async (password: string, storedHash: string) => {
    const result = await bcrypt.compare(password, storedHash);
    return result;
}
  