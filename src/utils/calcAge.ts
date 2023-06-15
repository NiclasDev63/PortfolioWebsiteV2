const calcAge = (): number => {
    const birthDate =  Date.now() - new Date("2000-11-05").getTime();
    const ageDate = new Date(birthDate).getUTCFullYear() - 1970;
    return ageDate;
}

export default calcAge;